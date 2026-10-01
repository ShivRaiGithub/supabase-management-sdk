import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { NetworkRestriction, NetworkRestrictionLoadMatch, NetworkRestrictionUpdateData } from '../SupabaseManagementTypes';
declare class NetworkRestrictionEntity extends SupabaseManagementEntityBase<NetworkRestriction> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: NetworkRestrictionEntity): NetworkRestrictionEntity;
    load(this: any, reqmatch?: NetworkRestrictionLoadMatch, ctrl?: Control): Promise<NetworkRestrictionEntity>;
    update(this: any, reqdata?: NetworkRestrictionUpdateData, ctrl?: Control): Promise<NetworkRestrictionEntity>;
}
export { NetworkRestrictionEntity };
