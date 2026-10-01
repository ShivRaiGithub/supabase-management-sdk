import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { V1ServiceHealthResponseOutput, V1ServiceHealthResponseOutputListMatch } from '../SupabaseManagementTypes';
declare class V1ServiceHealthResponseOutputEntity extends SupabaseManagementEntityBase<V1ServiceHealthResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: V1ServiceHealthResponseOutputEntity): V1ServiceHealthResponseOutputEntity;
    list(this: any, reqmatch?: V1ServiceHealthResponseOutputListMatch, ctrl?: Control): Promise<V1ServiceHealthResponseOutputEntity[]>;
}
export { V1ServiceHealthResponseOutputEntity };
