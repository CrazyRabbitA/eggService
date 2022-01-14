// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNote = require('../../../app/controller/note');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    note: ExportNote;
    user: ExportUser;
  }
}
