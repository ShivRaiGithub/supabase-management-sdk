import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { OAuth, OAuthLoadMatch, OAuthCreateData } from '../SupabaseManagementTypes';
declare class OAuthEntity extends SupabaseManagementEntityBase<OAuth> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: OAuthEntity): OAuthEntity;
    load(this: any, reqmatch?: OAuthLoadMatch, ctrl?: Control): Promise<OAuthEntity>;
    create(this: any, reqdata?: OAuthCreateData, ctrl?: Control): Promise<OAuthEntity>;
}
export { OAuthEntity };
