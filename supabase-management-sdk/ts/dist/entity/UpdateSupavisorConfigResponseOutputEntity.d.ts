import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { UpdateSupavisorConfigResponseOutput, UpdateSupavisorConfigResponseOutputUpdateData } from '../SupabaseManagementTypes';
declare class UpdateSupavisorConfigResponseOutputEntity extends SupabaseManagementEntityBase<UpdateSupavisorConfigResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: UpdateSupavisorConfigResponseOutputEntity): UpdateSupavisorConfigResponseOutputEntity;
    update(this: any, reqdata?: UpdateSupavisorConfigResponseOutputUpdateData, ctrl?: Control): Promise<UpdateSupavisorConfigResponseOutputEntity>;
}
export { UpdateSupavisorConfigResponseOutputEntity };
