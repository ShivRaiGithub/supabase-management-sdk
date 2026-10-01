import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { V1ProfileResponseOutput, V1ProfileResponseOutputLoadMatch } from '../SupabaseManagementTypes';
declare class V1ProfileResponseOutputEntity extends SupabaseManagementEntityBase<V1ProfileResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: V1ProfileResponseOutputEntity): V1ProfileResponseOutputEntity;
    load(this: any, reqmatch?: V1ProfileResponseOutputLoadMatch, ctrl?: Control): Promise<V1ProfileResponseOutputEntity>;
}
export { V1ProfileResponseOutputEntity };
