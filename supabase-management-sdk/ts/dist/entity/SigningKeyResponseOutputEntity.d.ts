import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { SigningKeyResponseOutput, SigningKeyResponseOutputLoadMatch, SigningKeyResponseOutputCreateData } from '../SupabaseManagementTypes';
declare class SigningKeyResponseOutputEntity extends SupabaseManagementEntityBase<SigningKeyResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: SigningKeyResponseOutputEntity): SigningKeyResponseOutputEntity;
    load(this: any, reqmatch?: SigningKeyResponseOutputLoadMatch, ctrl?: Control): Promise<SigningKeyResponseOutputEntity>;
    create(this: any, reqdata?: SigningKeyResponseOutputCreateData, ctrl?: Control): Promise<SigningKeyResponseOutputEntity>;
}
export { SigningKeyResponseOutputEntity };
