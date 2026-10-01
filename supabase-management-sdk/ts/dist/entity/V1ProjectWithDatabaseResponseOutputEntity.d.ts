import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { V1ProjectWithDatabaseResponseOutput, V1ProjectWithDatabaseResponseOutputLoadMatch, V1ProjectWithDatabaseResponseOutputListMatch, V1ProjectWithDatabaseResponseOutputCreateData, V1ProjectWithDatabaseResponseOutputUpdateData, V1ProjectWithDatabaseResponseOutputRemoveMatch } from '../SupabaseManagementTypes';
declare class V1ProjectWithDatabaseResponseOutputEntity extends SupabaseManagementEntityBase<V1ProjectWithDatabaseResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: V1ProjectWithDatabaseResponseOutputEntity): V1ProjectWithDatabaseResponseOutputEntity;
    load(this: any, reqmatch?: V1ProjectWithDatabaseResponseOutputLoadMatch, ctrl?: Control): Promise<V1ProjectWithDatabaseResponseOutputEntity>;
    list(this: any, reqmatch?: V1ProjectWithDatabaseResponseOutputListMatch, ctrl?: Control): Promise<V1ProjectWithDatabaseResponseOutputEntity[]>;
    create(this: any, reqdata?: V1ProjectWithDatabaseResponseOutputCreateData, ctrl?: Control): Promise<V1ProjectWithDatabaseResponseOutputEntity>;
    update(this: any, reqdata?: V1ProjectWithDatabaseResponseOutputUpdateData, ctrl?: Control): Promise<V1ProjectWithDatabaseResponseOutputEntity>;
    remove(this: any, reqmatch?: V1ProjectWithDatabaseResponseOutputRemoveMatch, ctrl?: Control): Promise<V1ProjectWithDatabaseResponseOutputEntity>;
}
export { V1ProjectWithDatabaseResponseOutputEntity };
