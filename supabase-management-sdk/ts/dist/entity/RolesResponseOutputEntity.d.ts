import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { RolesResponseOutput, RolesResponseOutputRemoveMatch } from '../SupabaseManagementTypes';
declare class RolesResponseOutputEntity extends SupabaseManagementEntityBase<RolesResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: RolesResponseOutputEntity): RolesResponseOutputEntity;
    remove(this: any, reqmatch?: RolesResponseOutputRemoveMatch, ctrl?: Control): Promise<RolesResponseOutputEntity>;
}
export { RolesResponseOutputEntity };
