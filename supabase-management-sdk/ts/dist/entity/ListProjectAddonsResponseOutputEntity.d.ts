import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { ListProjectAddonsResponseOutput, ListProjectAddonsResponseOutputListMatch } from '../SupabaseManagementTypes';
declare class ListProjectAddonsResponseOutputEntity extends SupabaseManagementEntityBase<ListProjectAddonsResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: ListProjectAddonsResponseOutputEntity): ListProjectAddonsResponseOutputEntity;
    list(this: any, reqmatch?: ListProjectAddonsResponseOutputListMatch, ctrl?: Control): Promise<ListProjectAddonsResponseOutputEntity[]>;
}
export { ListProjectAddonsResponseOutputEntity };
