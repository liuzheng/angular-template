'use strict';
import { production } from 'at/environments/environment';
export let LogLevel: number = 0
export const baseHref = "/";

export class Globals { 
  loglevel = 0;
  windowsize = [];
}
var version = "v0.0.0"
if (!production) {
  version = "开发版";
}
export const Version = version 