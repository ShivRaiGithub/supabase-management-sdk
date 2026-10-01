import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { V1RestorePoint, V1RestorePointLoadMatch, V1RestorePointCreateData } from '../SupabaseManagementTypes';
declare class V1RestorePointEntity extends SupabaseManagementEntityBase<V1RestorePoint> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: V1RestorePointEntity): V1RestorePointEntity;
    load(this: any, reqmatch?: V1RestorePointLoadMatch, ctrl?: Control): Promise<V1RestorePointEntity>;
    create(this: any, reqdata?: V1RestorePointCreateData, ctrl?: Control): Promise<V1RestorePointEntity>;
}
export { V1RestorePointEntity };
