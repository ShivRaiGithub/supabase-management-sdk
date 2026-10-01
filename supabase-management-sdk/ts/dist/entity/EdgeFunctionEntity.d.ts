import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { EdgeFunction, EdgeFunctionRemoveMatch } from '../SupabaseManagementTypes';
declare class EdgeFunctionEntity extends SupabaseManagementEntityBase<EdgeFunction> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: EdgeFunctionEntity): EdgeFunctionEntity;
    remove(this: any, reqmatch?: EdgeFunctionRemoveMatch, ctrl?: Control): Promise<EdgeFunctionEntity>;
}
export { EdgeFunctionEntity };
