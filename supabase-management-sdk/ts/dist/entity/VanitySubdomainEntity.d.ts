import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { VanitySubdomain, VanitySubdomainLoadMatch } from '../SupabaseManagementTypes';
declare class VanitySubdomainEntity extends SupabaseManagementEntityBase<VanitySubdomain> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: VanitySubdomainEntity): VanitySubdomainEntity;
    load(this: any, reqmatch?: VanitySubdomainLoadMatch, ctrl?: Control): Promise<VanitySubdomainEntity>;
}
export { VanitySubdomainEntity };
