import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { V1PgbouncerConfigResponseOutput, V1PgbouncerConfigResponseOutputLoadMatch } from '../SupabaseManagementTypes';
declare class V1PgbouncerConfigResponseOutputEntity extends SupabaseManagementEntityBase<V1PgbouncerConfigResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: V1PgbouncerConfigResponseOutputEntity): V1PgbouncerConfigResponseOutputEntity;
    load(this: any, reqmatch?: V1PgbouncerConfigResponseOutputLoadMatch, ctrl?: Control): Promise<V1PgbouncerConfigResponseOutputEntity>;
}
export { V1PgbouncerConfigResponseOutputEntity };
