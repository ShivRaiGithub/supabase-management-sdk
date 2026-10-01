import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Provider, ProviderLoadMatch, ProviderRemoveMatch } from '../SupabaseManagementTypes';
declare class ProviderEntity extends SupabaseManagementEntityBase<Provider> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: ProviderEntity): ProviderEntity;
    load(this: any, reqmatch?: ProviderLoadMatch, ctrl?: Control): Promise<ProviderEntity>;
    remove(this: any, reqmatch?: ProviderRemoveMatch, ctrl?: Control): Promise<ProviderEntity>;
}
export { ProviderEntity };
