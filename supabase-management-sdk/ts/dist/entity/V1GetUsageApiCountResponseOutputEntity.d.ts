import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { V1GetUsageApiCountResponseOutput, V1GetUsageApiCountResponseOutputListMatch } from '../SupabaseManagementTypes';
declare class V1GetUsageApiCountResponseOutputEntity extends SupabaseManagementEntityBase<V1GetUsageApiCountResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: V1GetUsageApiCountResponseOutputEntity): V1GetUsageApiCountResponseOutputEntity;
    list(this: any, reqmatch?: V1GetUsageApiCountResponseOutputListMatch, ctrl?: Control): Promise<V1GetUsageApiCountResponseOutputEntity[]>;
}
export { V1GetUsageApiCountResponseOutputEntity };
