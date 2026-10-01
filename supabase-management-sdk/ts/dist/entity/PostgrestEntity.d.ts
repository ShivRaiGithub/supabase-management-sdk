import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Postgrest, PostgrestLoadMatch } from '../SupabaseManagementTypes';
declare class PostgrestEntity extends SupabaseManagementEntityBase<Postgrest> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: PostgrestEntity): PostgrestEntity;
    load(this: any, reqmatch?: PostgrestLoadMatch, ctrl?: Control): Promise<PostgrestEntity>;
}
export { PostgrestEntity };
