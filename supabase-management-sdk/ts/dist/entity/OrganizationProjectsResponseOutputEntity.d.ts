import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { OrganizationProjectsResponseOutput, OrganizationProjectsResponseOutputListMatch } from '../SupabaseManagementTypes';
declare class OrganizationProjectsResponseOutputEntity extends SupabaseManagementEntityBase<OrganizationProjectsResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: OrganizationProjectsResponseOutputEntity): OrganizationProjectsResponseOutputEntity;
    list(this: any, reqmatch?: OrganizationProjectsResponseOutputListMatch, ctrl?: Control): Promise<OrganizationProjectsResponseOutputEntity[]>;
}
export { OrganizationProjectsResponseOutputEntity };
