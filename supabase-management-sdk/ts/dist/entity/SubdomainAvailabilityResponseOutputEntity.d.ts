import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { SubdomainAvailabilityResponseOutput, SubdomainAvailabilityResponseOutputCreateData } from '../SupabaseManagementTypes';
declare class SubdomainAvailabilityResponseOutputEntity extends SupabaseManagementEntityBase<SubdomainAvailabilityResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: SubdomainAvailabilityResponseOutputEntity): SubdomainAvailabilityResponseOutputEntity;
    create(this: any, reqdata?: SubdomainAvailabilityResponseOutputCreateData, ctrl?: Control): Promise<SubdomainAvailabilityResponseOutputEntity>;
}
export { SubdomainAvailabilityResponseOutputEntity };
