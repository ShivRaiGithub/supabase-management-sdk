import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { RegionsInfoOutput, RegionsInfoOutputLoadMatch } from '../SupabaseManagementTypes';
declare class RegionsInfoOutputEntity extends SupabaseManagementEntityBase<RegionsInfoOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: RegionsInfoOutputEntity): RegionsInfoOutputEntity;
    load(this: any, reqmatch?: RegionsInfoOutputLoadMatch, ctrl?: Control): Promise<RegionsInfoOutputEntity>;
}
export { RegionsInfoOutputEntity };
