import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'SkeletonAPPNavegaciónII',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SQLite: {
      iosDatabaseLocation: 'Library/LocalDatabase'
    }
  }

};

export default config;
