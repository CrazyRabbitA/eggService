// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNote = require('../../../app/model/note');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Note: ReturnType<typeof ExportNote>;
    User: ReturnType<typeof ExportUser>;
  }
}
