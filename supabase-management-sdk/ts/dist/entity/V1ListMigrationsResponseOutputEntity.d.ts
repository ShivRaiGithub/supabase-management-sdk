import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { V1ListMigrationsResponseOutput, V1ListMigrationsResponseOutputListMatch } from '../SupabaseManagementTypes';
declare class V1ListMigrationsResponseOutputEntity extends SupabaseManagementEntityBase<V1ListMigrationsResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: V1ListMigrationsResponseOutputEntity): V1ListMigrationsResponseOutputEntity;
    list(this: any, reqmatch?: V1ListMigrationsResponseOutputListMatch, ctrl?: Control): Promise<V1ListMigrationsResponseOutputEntity[]>;
}
export { V1ListMigrationsResponseOutputEntity };
