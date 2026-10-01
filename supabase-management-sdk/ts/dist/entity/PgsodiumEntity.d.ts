import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Pgsodium, PgsodiumLoadMatch, PgsodiumUpdateData } from '../SupabaseManagementTypes';
declare class PgsodiumEntity extends SupabaseManagementEntityBase<Pgsodium> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: PgsodiumEntity): PgsodiumEntity;
    load(this: any, reqmatch?: PgsodiumLoadMatch, ctrl?: Control): Promise<PgsodiumEntity>;
    update(this: any, reqdata?: PgsodiumUpdateData, ctrl?: Control): Promise<PgsodiumEntity>;
}
export { PgsodiumEntity };
