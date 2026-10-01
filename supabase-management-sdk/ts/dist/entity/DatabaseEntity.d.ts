import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Database, DatabaseLoadMatch, DatabaseListMatch, DatabaseCreateData, DatabaseUpdateData, DatabaseRemoveMatch } from '../SupabaseManagementTypes';
declare class DatabaseEntity extends SupabaseManagementEntityBase<Database> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: DatabaseEntity): DatabaseEntity;
    load(this: any, reqmatch?: DatabaseLoadMatch, ctrl?: Control): Promise<DatabaseEntity>;
    list(this: any, reqmatch?: DatabaseListMatch, ctrl?: Control): Promise<DatabaseEntity[]>;
    create(this: any, reqdata?: DatabaseCreateData, ctrl?: Control): Promise<DatabaseEntity>;
    update(this: any, reqdata?: DatabaseUpdateData, ctrl?: Control): Promise<DatabaseEntity>;
    remove(this: any, reqmatch?: DatabaseRemoveMatch, ctrl?: Control): Promise<DatabaseEntity>;
}
export { DatabaseEntity };
