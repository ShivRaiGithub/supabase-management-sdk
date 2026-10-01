import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { OrganizationProjectClaimResponseOutput, OrganizationProjectClaimResponseOutputLoadMatch } from '../SupabaseManagementTypes';
declare class OrganizationProjectClaimResponseOutputEntity extends SupabaseManagementEntityBase<OrganizationProjectClaimResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: OrganizationProjectClaimResponseOutputEntity): OrganizationProjectClaimResponseOutputEntity;
    load(this: any, reqmatch?: OrganizationProjectClaimResponseOutputLoadMatch, ctrl?: Control): Promise<OrganizationProjectClaimResponseOutputEntity>;
}
export { OrganizationProjectClaimResponseOutputEntity };
