import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { V1BackupsResponseOutput, V1BackupsResponseOutputListMatch } from '../SupabaseManagementTypes';
declare class V1BackupsResponseOutputEntity extends SupabaseManagementEntityBase<V1BackupsResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: V1BackupsResponseOutputEntity): V1BackupsResponseOutputEntity;
    list(this: any, reqmatch?: V1BackupsResponseOutputListMatch, ctrl?: Control): Promise<V1BackupsResponseOutputEntity[]>;
}
export { V1BackupsResponseOutputEntity };
