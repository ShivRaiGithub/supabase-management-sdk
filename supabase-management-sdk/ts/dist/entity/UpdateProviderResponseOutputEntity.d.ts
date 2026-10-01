import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { UpdateProviderResponseOutput, UpdateProviderResponseOutputUpdateData } from '../SupabaseManagementTypes';
declare class UpdateProviderResponseOutputEntity extends SupabaseManagementEntityBase<UpdateProviderResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: UpdateProviderResponseOutputEntity): UpdateProviderResponseOutputEntity;
    update(this: any, reqdata?: UpdateProviderResponseOutputUpdateData, ctrl?: Control): Promise<UpdateProviderResponseOutputEntity>;
}
export { UpdateProviderResponseOutputEntity };
