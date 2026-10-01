import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { V1OrganizationMemberResponseOutput, V1OrganizationMemberResponseOutputListMatch } from '../SupabaseManagementTypes';
declare class V1OrganizationMemberResponseOutputEntity extends SupabaseManagementEntityBase<V1OrganizationMemberResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: V1OrganizationMemberResponseOutputEntity): V1OrganizationMemberResponseOutputEntity;
    list(this: any, reqmatch?: V1OrganizationMemberResponseOutputListMatch, ctrl?: Control): Promise<V1OrganizationMemberResponseOutputEntity[]>;
}
export { V1OrganizationMemberResponseOutputEntity };
