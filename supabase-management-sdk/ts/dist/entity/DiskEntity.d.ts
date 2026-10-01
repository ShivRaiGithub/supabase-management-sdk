import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Disk, DiskLoadMatch } from '../SupabaseManagementTypes';
declare class DiskEntity extends SupabaseManagementEntityBase<Disk> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: DiskEntity): DiskEntity;
    load(this: any, reqmatch?: DiskLoadMatch, ctrl?: Control): Promise<DiskEntity>;
}
export { DiskEntity };
