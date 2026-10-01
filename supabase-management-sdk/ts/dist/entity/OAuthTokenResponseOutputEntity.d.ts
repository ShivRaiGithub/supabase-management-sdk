import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { OAuthTokenResponseOutput, OAuthTokenResponseOutputCreateData } from '../SupabaseManagementTypes';
declare class OAuthTokenResponseOutputEntity extends SupabaseManagementEntityBase<OAuthTokenResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: OAuthTokenResponseOutputEntity): OAuthTokenResponseOutputEntity;
    create(this: any, reqdata?: OAuthTokenResponseOutputCreateData, ctrl?: Control): Promise<OAuthTokenResponseOutputEntity>;
}
export { OAuthTokenResponseOutputEntity };
