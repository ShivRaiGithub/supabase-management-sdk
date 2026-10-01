import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { V1GetMigrationResponseOutput, V1GetMigrationResponseOutputLoadMatch } from '../SupabaseManagementTypes';
declare class V1GetMigrationResponseOutputEntity extends SupabaseManagementEntityBase<V1GetMigrationResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: V1GetMigrationResponseOutputEntity): V1GetMigrationResponseOutputEntity;
    load(this: any, reqmatch?: V1GetMigrationResponseOutputLoadMatch, ctrl?: Control): Promise<V1GetMigrationResponseOutputEntity>;
}
export { V1GetMigrationResponseOutputEntity };
