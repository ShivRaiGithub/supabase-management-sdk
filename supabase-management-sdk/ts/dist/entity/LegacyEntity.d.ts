import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Legacy, LegacyLoadMatch, LegacyUpdateData } from '../SupabaseManagementTypes';
declare class LegacyEntity extends SupabaseManagementEntityBase<Legacy> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: LegacyEntity): LegacyEntity;
    load(this: any, reqmatch?: LegacyLoadMatch, ctrl?: Control): Promise<LegacyEntity>;
    update(this: any, reqdata?: LegacyUpdateData, ctrl?: Control): Promise<LegacyEntity>;
}
export { LegacyEntity };
