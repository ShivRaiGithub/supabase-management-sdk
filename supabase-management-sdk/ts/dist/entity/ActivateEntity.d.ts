import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Activate, ActivateCreateData } from '../SupabaseManagementTypes';
declare class ActivateEntity extends SupabaseManagementEntityBase<Activate> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: ActivateEntity): ActivateEntity;
    create(this: any, reqdata?: ActivateCreateData, ctrl?: Control): Promise<ActivateEntity>;
}
export { ActivateEntity };
