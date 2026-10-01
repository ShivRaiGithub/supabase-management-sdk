import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { FunctionscombinedStat, FunctionscombinedStatListMatch } from '../SupabaseManagementTypes';
declare class FunctionscombinedStatEntity extends SupabaseManagementEntityBase<FunctionscombinedStat> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: FunctionscombinedStatEntity): FunctionscombinedStatEntity;
    list(this: any, reqmatch?: FunctionscombinedStatListMatch, ctrl?: Control): Promise<FunctionscombinedStatEntity[]>;
}
export { FunctionscombinedStatEntity };
