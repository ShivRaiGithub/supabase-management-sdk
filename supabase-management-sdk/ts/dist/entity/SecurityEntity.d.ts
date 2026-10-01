import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Security, SecurityListMatch } from '../SupabaseManagementTypes';
declare class SecurityEntity extends SupabaseManagementEntityBase<Security> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: SecurityEntity): SecurityEntity;
    list(this: any, reqmatch?: SecurityListMatch, ctrl?: Control): Promise<SecurityEntity[]>;
}
export { SecurityEntity };
