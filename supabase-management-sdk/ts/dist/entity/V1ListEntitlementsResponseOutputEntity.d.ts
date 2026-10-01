import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { V1ListEntitlementsResponseOutput, V1ListEntitlementsResponseOutputListMatch } from '../SupabaseManagementTypes';
declare class V1ListEntitlementsResponseOutputEntity extends SupabaseManagementEntityBase<V1ListEntitlementsResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: V1ListEntitlementsResponseOutputEntity): V1ListEntitlementsResponseOutputEntity;
    list(this: any, reqmatch?: V1ListEntitlementsResponseOutputListMatch, ctrl?: Control): Promise<V1ListEntitlementsResponseOutputEntity[]>;
}
export { V1ListEntitlementsResponseOutputEntity };
