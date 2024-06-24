import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CapacitorSQLite, JsonSQLite, capSQLiteValues, capSQLiteChanges } from '@capacitor-community/sqlite';
import { Capacitor } from '@capacitor/core';
import { Device } from '@capacitor/device';
import { Preferences } from '@capacitor/preferences';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DBTaskService {
  public dbReady: BehaviorSubject<boolean>;
  public isWeb: boolean;
  public isIos: boolean;
  public dbName: string;

  constructor(private http: HttpClient) {
    this.dbReady = new BehaviorSubject(false);
    this.isWeb = false;
    this.isIos = false;
    this.dbName = '';
  }

  async init() {
    const info = await Device.getInfo();
    const sqlite = CapacitorSQLite as any;

    if (info.platform === 'android') {
      try {
        await sqlite.requestPermissions();
      } catch (error) {
        console.error('Esta app necesita permiso');
      }
    } else if (info.platform === 'web') {
      this.isWeb = true;
      await sqlite.initWebStore();
    } else if (info.platform === 'ios') {
      this.isIos = true;
    }
    this.setupDatabase();
  }

  async setupDatabase() {
    const dbSetup = await Preferences.get({ key: 'first_setup_key' });

    if (!dbSetup.value) {
      this.downloadDatabase();
    } else {
      this.dbName = await this.getDbName();
      await CapacitorSQLite.createConnection({ database: this.dbName });
      await CapacitorSQLite.open({ database: this.dbName });
      this.dbReady.next(true);
    }
  }

  downloadDatabase() {
    this.http.get('assets/db.json').subscribe(async (jsonExport: JsonSQLite) => {
      const jsonstring = JSON.stringify(jsonExport);
      const sqlite = CapacitorSQLite as any;

      if (this.isWeb) {
        await sqlite.initWebStore();
      }

      const isValid = await CapacitorSQLite.isJsonValid({ jsonstring });

      if (isValid.result) {
        this.dbName = jsonExport.database;
        await CapacitorSQLite.importFromJson({ jsonstring });
        await CapacitorSQLite.createConnection({ database: this.dbName });
        await CapacitorSQLite.open({ database: this.dbName });
        await Preferences.set({ key: 'first_setup_key', value: '1' });
        await Preferences.set({ key: 'dbname', value: this.dbName });
        this.dbReady.next(true);
      }
    });
  }

  async getDbName() {
    if (!this.dbName) {
      const dbName = await Preferences.get({ key: 'dbname' });
      if (dbName.value) {
        this.dbName = dbName.value;
      }
    }
    return this.dbName;
  }

  async registerUser(username: string, password: string) {
    let sql = `INSERT INTO Usuario (nombre, contrasena, estadoConexion) VALUES (?, ?, ?)`;
    const dbName = await this.getDbName();
    return CapacitorSQLite.executeSet({
      database: dbName,
      set: [
        {
          statement: sql,
          values: [username, password, 1]
        }
      ]
    }).then((changes: capSQLiteChanges) => {
      if (changes.changes.changes > 0) {
        this.setSession(username); 
      }
      return changes;
    }).catch(err => Promise.reject(err));
  }

  async loginUser(username: string, password: string): Promise<boolean> {
    let selectSql = `SELECT * FROM Usuario WHERE nombre = ? AND contrasena = ?`;
    let updateSql = `UPDATE Usuario SET estadoConexion = ? WHERE nombre = ? AND contrasena = ?`;
    const dbName = await this.getDbName();

    return CapacitorSQLite.query({
      database: dbName,
      statement: selectSql,
      values: [username, password]
    }).then(async (result: capSQLiteValues) => {
      if (result.values.length > 0) {
        await CapacitorSQLite.run({
          database: dbName,
          statement: updateSql,
          values: [1, username, password]
        });
        this.setSession(username); 
        return true;
      }
      return false;
    }).catch(err => Promise.reject(err));
  }

  async setSession(username: string) {
    sessionStorage.setItem('authenticatedUser', username);
  }

  async clearSession() {
    sessionStorage.removeItem('authenticatedUser');
  }

  async getAuthenticatedUserstorage(): Promise<string | null> {
    return sessionStorage.getItem('authenticatedUser');
  }


  async updateConnectionState(state: number) {
    let sql = `UPDATE Usuario SET estadoConexion = ?`;
    const dbName = await this.getDbName();
    return CapacitorSQLite.run({
      database: dbName,
      statement: sql,
      values: [state]
    }).then(async (changes: capSQLiteChanges) => {
      if (this.isWeb) {
        await CapacitorSQLite.saveToStore({ database: dbName });
      }
      return changes;
    }).catch(err => Promise.reject(err));
  }
  async isUserAuthenticated(): Promise<boolean> {
    const dbName = await this.getDbName();
    const selectSql = `SELECT * FROM Usuario WHERE estadoConexion = 1`;
    
    return CapacitorSQLite.query({
      database: dbName,
      statement: selectSql,
      values: []
    }).then(async (result: capSQLiteValues) => {
      return result.values.length > 0;
    }).catch(err => Promise.reject(err));
  }


  async getAuthenticatedUser(): Promise<string | null> {
    const dbName = await this.getDbName();
    const selectSql = `SELECT * FROM Usuario WHERE estadoConexion = 1`;
    
    return CapacitorSQLite.query({
      database: dbName,
      statement: selectSql,
      values: []
    }).then((result: capSQLiteValues) => {
      if (result.values.length > 0) {
        return result.values[0].nombre; 
      }
      return null;
    }).catch(err => Promise.reject(err));
  }
}















