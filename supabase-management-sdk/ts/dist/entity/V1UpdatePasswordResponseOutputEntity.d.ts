import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { V1UpdatePasswordResponseOutput, V1UpdatePasswordResponseOutputUpdateData } from '../SupabaseManagementTypes';
declare class V1UpdatePasswordResponseOutputEntity extends SupabaseManagementEntityBase<V1UpdatePasswordResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: V1UpdatePasswordResponseOutputEntity): V1UpdatePasswordResponseOutputEntity;
    update(this: any, reqdata?: V1UpdatePasswordResponseOutputUpdateData, ctrl?: Control): Promise<V1UpdatePasswordResponseOutputEntity>;
}
export { V1UpdatePasswordResponseOutputEntity };
