import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { CreateRoleResponseOutput, CreateRoleResponseOutputCreateData } from '../SupabaseManagementTypes';
declare class CreateRoleResponseOutputEntity extends SupabaseManagementEntityBase<CreateRoleResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: CreateRoleResponseOutputEntity): CreateRoleResponseOutputEntity;
    create(this: any, reqdata?: CreateRoleResponseOutputCreateData, ctrl?: Control): Promise<CreateRoleResponseOutputEntity>;
}
export { CreateRoleResponseOutputEntity };
