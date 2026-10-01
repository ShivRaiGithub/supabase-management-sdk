import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { ListProvidersResponseOutput, ListProvidersResponseOutputListMatch } from '../SupabaseManagementTypes';
declare class ListProvidersResponseOutputEntity extends SupabaseManagementEntityBase<ListProvidersResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: ListProvidersResponseOutputEntity): ListProvidersResponseOutputEntity;
    list(this: any, reqmatch?: ListProvidersResponseOutputListMatch, ctrl?: Control): Promise<ListProvidersResponseOutputEntity[]>;
}
export { ListProvidersResponseOutputEntity };
