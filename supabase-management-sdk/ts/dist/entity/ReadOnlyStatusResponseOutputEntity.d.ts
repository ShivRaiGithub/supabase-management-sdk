import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { ReadOnlyStatusResponseOutput, ReadOnlyStatusResponseOutputLoadMatch } from '../SupabaseManagementTypes';
declare class ReadOnlyStatusResponseOutputEntity extends SupabaseManagementEntityBase<ReadOnlyStatusResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: ReadOnlyStatusResponseOutputEntity): ReadOnlyStatusResponseOutputEntity;
    load(this: any, reqmatch?: ReadOnlyStatusResponseOutputLoadMatch, ctrl?: Control): Promise<ReadOnlyStatusResponseOutputEntity>;
}
export { ReadOnlyStatusResponseOutputEntity };
