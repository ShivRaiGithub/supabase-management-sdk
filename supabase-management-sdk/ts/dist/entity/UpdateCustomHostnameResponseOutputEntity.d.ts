import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { UpdateCustomHostnameResponseOutput, UpdateCustomHostnameResponseOutputLoadMatch, UpdateCustomHostnameResponseOutputCreateData } from '../SupabaseManagementTypes';
declare class UpdateCustomHostnameResponseOutputEntity extends SupabaseManagementEntityBase<UpdateCustomHostnameResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: UpdateCustomHostnameResponseOutputEntity): UpdateCustomHostnameResponseOutputEntity;
    load(this: any, reqmatch?: UpdateCustomHostnameResponseOutputLoadMatch, ctrl?: Control): Promise<UpdateCustomHostnameResponseOutputEntity>;
    create(this: any, reqdata?: UpdateCustomHostnameResponseOutputCreateData, ctrl?: Control): Promise<UpdateCustomHostnameResponseOutputEntity>;
}
export { UpdateCustomHostnameResponseOutputEntity };
