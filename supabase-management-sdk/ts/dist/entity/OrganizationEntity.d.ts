import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Organization, OrganizationCreateData } from '../SupabaseManagementTypes';
declare class OrganizationEntity extends SupabaseManagementEntityBase<Organization> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: OrganizationEntity): OrganizationEntity;
    create(this: any, reqdata?: OrganizationCreateData, ctrl?: Control): Promise<OrganizationEntity>;
}
export { OrganizationEntity };
