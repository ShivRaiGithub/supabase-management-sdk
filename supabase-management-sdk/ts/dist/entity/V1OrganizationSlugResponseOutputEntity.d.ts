import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { V1OrganizationSlugResponseOutput, V1OrganizationSlugResponseOutputLoadMatch, V1OrganizationSlugResponseOutputListMatch, V1OrganizationSlugResponseOutputCreateData } from '../SupabaseManagementTypes';
declare class V1OrganizationSlugResponseOutputEntity extends SupabaseManagementEntityBase<V1OrganizationSlugResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: V1OrganizationSlugResponseOutputEntity): V1OrganizationSlugResponseOutputEntity;
    load(this: any, reqmatch?: V1OrganizationSlugResponseOutputLoadMatch, ctrl?: Control): Promise<V1OrganizationSlugResponseOutputEntity>;
    list(this: any, reqmatch?: V1OrganizationSlugResponseOutputListMatch, ctrl?: Control): Promise<V1OrganizationSlugResponseOutputEntity[]>;
    create(this: any, reqdata?: V1OrganizationSlugResponseOutputCreateData, ctrl?: Control): Promise<V1OrganizationSlugResponseOutputEntity>;
}
export { V1OrganizationSlugResponseOutputEntity };
