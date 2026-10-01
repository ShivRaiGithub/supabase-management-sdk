import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Auth, AuthLoadMatch, AuthUpdateData } from '../SupabaseManagementTypes';
declare class AuthEntity extends SupabaseManagementEntityBase<Auth> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: AuthEntity): AuthEntity;
    load(this: any, reqmatch?: AuthLoadMatch, ctrl?: Control): Promise<AuthEntity>;
    update(this: any, reqdata?: AuthUpdateData, ctrl?: Control): Promise<AuthEntity>;
}
export { AuthEntity };
