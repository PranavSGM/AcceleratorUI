import { database } from '../datamodel/datasources-database';
import { file } from '../datamodel/datasources-file';
import { ReconcileData } from '../datamodel/reconcile';

export class Common{
CommonDatabase : database;
CommonFile : file;
COmmonReconcileData : ReconcileData;
}