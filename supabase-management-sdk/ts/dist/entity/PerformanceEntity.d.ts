import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Performance, PerformanceListMatch } from '../SupabaseManagementTypes';
declare class PerformanceEntity extends SupabaseManagementEntityBase<Performance> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: PerformanceEntity): PerformanceEntity;
    list(this: any, reqmatch?: PerformanceListMatch, ctrl?: Control): Promise<PerformanceEntity[]>;
}
export { PerformanceEntity };
