

export class CapacitorSQLiteSimulator {
    async echo(value: any): Promise<any> {
      return Promise.resolve(value);
    }
  
    async open(options: any): Promise<any> {
      return Promise.resolve({ result: true });
    }
  
    async execute(options: any): Promise<any> {
      return Promise.resolve({ values: [] });
    }
  
    
  }
  

  
