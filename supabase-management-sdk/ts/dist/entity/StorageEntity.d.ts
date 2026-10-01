import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Storage, StorageLoadMatch, StorageUpdateData } from '../SupabaseManagementTypes';
declare class StorageEntity extends SupabaseManagementEntityBase<Storage> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: StorageEntity): StorageEntity;
    load(this: any, reqmatch?: StorageLoadMatch, ctrl?: Control): Promise<StorageEntity>;
    update(this: any, reqdata?: StorageUpdateData, ctrl?: Control): Promise<StorageEntity>;
}
export { StorageEntity };
