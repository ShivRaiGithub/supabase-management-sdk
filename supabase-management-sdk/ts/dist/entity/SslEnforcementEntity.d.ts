import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { SslEnforcement, SslEnforcementLoadMatch, SslEnforcementUpdateData } from '../SupabaseManagementTypes';
declare class SslEnforcementEntity extends SupabaseManagementEntityBase<SslEnforcement> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: SslEnforcementEntity): SslEnforcementEntity;
    load(this: any, reqmatch?: SslEnforcementLoadMatch, ctrl?: Control): Promise<SslEnforcementEntity>;
    update(this: any, reqdata?: SslEnforcementUpdateData, ctrl?: Control): Promise<SslEnforcementEntity>;
}
export { SslEnforcementEntity };
