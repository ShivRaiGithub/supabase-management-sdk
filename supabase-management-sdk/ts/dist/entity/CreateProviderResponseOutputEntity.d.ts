import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { CreateProviderResponseOutput, CreateProviderResponseOutputCreateData } from '../SupabaseManagementTypes';
declare class CreateProviderResponseOutputEntity extends SupabaseManagementEntityBase<CreateProviderResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: CreateProviderResponseOutputEntity): CreateProviderResponseOutputEntity;
    create(this: any, reqdata?: CreateProviderResponseOutputCreateData, ctrl?: Control): Promise<CreateProviderResponseOutputEntity>;
}
export { CreateProviderResponseOutputEntity };
