import {Injectable} from "@angular/core";
// @ts-ignore
import * as UUID from "uuid-js/lib/uuid.js";

@Injectable()
export class UUIDService {
  constructor() {

  }

  gen() {
    return UUID.create()["hex"];
  }
}

