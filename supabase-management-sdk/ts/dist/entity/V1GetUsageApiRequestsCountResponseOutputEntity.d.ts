import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { V1GetUsageApiRequestsCountResponseOutput, V1GetUsageApiRequestsCountResponseOutputListMatch } from '../SupabaseManagementTypes';
declare class V1GetUsageApiRequestsCountResponseOutputEntity extends SupabaseManagementEntityBase<V1GetUsageApiRequestsCountResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: V1GetUsageApiRequestsCountResponseOutputEntity): V1GetUsageApiRequestsCountResponseOutputEntity;
    list(this: any, reqmatch?: V1GetUsageApiRequestsCountResponseOutputListMatch, ctrl?: Control): Promise<V1GetUsageApiRequestsCountResponseOutputEntity[]>;
}
export { V1GetUsageApiRequestsCountResponseOutputEntity };
