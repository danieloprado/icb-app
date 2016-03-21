import {Storage, SqlStorage} from 'ionic-angular';

export class AuthService {
  storage: Storage;

  constructor() {
    this.storage = new Storage(SqlStorage);
    console.log("storage", this.storage);
  }

  setToken(token: string): Promise<any> {
    return this.storage.set("token", token);
  }

  getToken(): Promise<any> {
    return this.storage.get("token");
  }

  hasToken(): Promise<boolean> {
    return this.getToken();
  }
}
