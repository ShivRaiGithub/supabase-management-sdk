import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { NetworkBanResponseOutput, NetworkBanResponseOutputCreateData } from '../SupabaseManagementTypes';
declare class NetworkBanResponseOutputEntity extends SupabaseManagementEntityBase<NetworkBanResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: NetworkBanResponseOutputEntity): NetworkBanResponseOutputEntity;
    create(this: any, reqdata?: NetworkBanResponseOutputCreateData, ctrl?: Control): Promise<NetworkBanResponseOutputEntity>;
}
export { NetworkBanResponseOutputEntity };
