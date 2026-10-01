import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { NetworkRestrictionsResponseOutput, NetworkRestrictionsResponseOutputCreateData } from '../SupabaseManagementTypes';
declare class NetworkRestrictionsResponseOutputEntity extends SupabaseManagementEntityBase<NetworkRestrictionsResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: NetworkRestrictionsResponseOutputEntity): NetworkRestrictionsResponseOutputEntity;
    create(this: any, reqdata?: NetworkRestrictionsResponseOutputCreateData, ctrl?: Control): Promise<NetworkRestrictionsResponseOutputEntity>;
}
export { NetworkRestrictionsResponseOutputEntity };
