import {Injectable} from "@angular/core";

@Injectable()
export class LocalstorageProvider {
  constructor() {

  }

  getItem(key: string, defaultvalue?: string): string {
    return <string>(localStorage.getItem(key) || defaultvalue);
  }

  setItem(key: string, value: string) {
    return localStorage.setItem(key, value);
  }

  getJSON(key: string): any {
    return localStorage.getItem(key);
  }

  setJSON(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  delete(key: string) {
    return localStorage.removeItem(key);
  }
}
