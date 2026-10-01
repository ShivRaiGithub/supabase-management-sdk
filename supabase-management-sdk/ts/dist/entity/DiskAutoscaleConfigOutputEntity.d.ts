import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { DiskAutoscaleConfigOutput, DiskAutoscaleConfigOutputLoadMatch } from '../SupabaseManagementTypes';
declare class DiskAutoscaleConfigOutputEntity extends SupabaseManagementEntityBase<DiskAutoscaleConfigOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: DiskAutoscaleConfigOutputEntity): DiskAutoscaleConfigOutputEntity;
    load(this: any, reqmatch?: DiskAutoscaleConfigOutputLoadMatch, ctrl?: Control): Promise<DiskAutoscaleConfigOutputEntity>;
}
export { DiskAutoscaleConfigOutputEntity };
