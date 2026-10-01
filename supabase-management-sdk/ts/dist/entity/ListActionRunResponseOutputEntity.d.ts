import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { ListActionRunResponseOutput, ListActionRunResponseOutputListMatch } from '../SupabaseManagementTypes';
declare class ListActionRunResponseOutputEntity extends SupabaseManagementEntityBase<ListActionRunResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: ListActionRunResponseOutputEntity): ListActionRunResponseOutputEntity;
    list(this: any, reqmatch?: ListActionRunResponseOutputListMatch, ctrl?: Control): Promise<ListActionRunResponseOutputEntity[]>;
}
export { ListActionRunResponseOutputEntity };
