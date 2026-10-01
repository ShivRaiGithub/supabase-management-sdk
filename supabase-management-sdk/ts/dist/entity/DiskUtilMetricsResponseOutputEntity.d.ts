import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { DiskUtilMetricsResponseOutput, DiskUtilMetricsResponseOutputLoadMatch } from '../SupabaseManagementTypes';
declare class DiskUtilMetricsResponseOutputEntity extends SupabaseManagementEntityBase<DiskUtilMetricsResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: DiskUtilMetricsResponseOutputEntity): DiskUtilMetricsResponseOutputEntity;
    load(this: any, reqmatch?: DiskUtilMetricsResponseOutputLoadMatch, ctrl?: Control): Promise<DiskUtilMetricsResponseOutputEntity>;
}
export { DiskUtilMetricsResponseOutputEntity };
