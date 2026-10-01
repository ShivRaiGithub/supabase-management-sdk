import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Postgre, PostgreLoadMatch, PostgreUpdateData } from '../SupabaseManagementTypes';
declare class PostgreEntity extends SupabaseManagementEntityBase<Postgre> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: PostgreEntity): PostgreEntity;
    load(this: any, reqmatch?: PostgreLoadMatch, ctrl?: Control): Promise<PostgreEntity>;
    update(this: any, reqdata?: PostgreUpdateData, ctrl?: Control): Promise<PostgreEntity>;
}
export { PostgreEntity };
