import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Secret, SecretListMatch, SecretCreateData, SecretRemoveMatch } from '../SupabaseManagementTypes';
declare class SecretEntity extends SupabaseManagementEntityBase<Secret> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: SecretEntity): SecretEntity;
    list(this: any, reqmatch?: SecretListMatch, ctrl?: Control): Promise<SecretEntity[]>;
    create(this: any, reqdata?: SecretCreateData, ctrl?: Control): Promise<SecretEntity>;
    remove(this: any, reqmatch?: SecretRemoveMatch, ctrl?: Control): Promise<SecretEntity>;
}
export { SecretEntity };
