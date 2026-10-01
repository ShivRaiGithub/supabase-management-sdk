import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Environment, EnvironmentLoadMatch, EnvironmentRemoveMatch } from '../SupabaseManagementTypes';
declare class EnvironmentEntity extends SupabaseManagementEntityBase<Environment> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: EnvironmentEntity): EnvironmentEntity;
    load(this: any, reqmatch?: EnvironmentLoadMatch, ctrl?: Control): Promise<EnvironmentEntity>;
    remove(this: any, reqmatch?: EnvironmentRemoveMatch, ctrl?: Control): Promise<EnvironmentEntity>;
}
export { EnvironmentEntity };
