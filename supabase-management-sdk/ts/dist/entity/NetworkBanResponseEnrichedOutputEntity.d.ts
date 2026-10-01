import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { NetworkBanResponseEnrichedOutput, NetworkBanResponseEnrichedOutputCreateData } from '../SupabaseManagementTypes';
declare class NetworkBanResponseEnrichedOutputEntity extends SupabaseManagementEntityBase<NetworkBanResponseEnrichedOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: NetworkBanResponseEnrichedOutputEntity): NetworkBanResponseEnrichedOutputEntity;
    create(this: any, reqdata?: NetworkBanResponseEnrichedOutputCreateData, ctrl?: Control): Promise<NetworkBanResponseEnrichedOutputEntity>;
}
export { NetworkBanResponseEnrichedOutputEntity };
