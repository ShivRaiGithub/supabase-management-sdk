import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { V1ProjectRefResponseOutput, V1ProjectRefResponseOutputUpdateData, V1ProjectRefResponseOutputRemoveMatch } from '../SupabaseManagementTypes';
declare class V1ProjectRefResponseOutputEntity extends SupabaseManagementEntityBase<V1ProjectRefResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: V1ProjectRefResponseOutputEntity): V1ProjectRefResponseOutputEntity;
    update(this: any, reqdata?: V1ProjectRefResponseOutputUpdateData, ctrl?: Control): Promise<V1ProjectRefResponseOutputEntity>;
    remove(this: any, reqmatch?: V1ProjectRefResponseOutputRemoveMatch, ctrl?: Control): Promise<V1ProjectRefResponseOutputEntity>;
}
export { V1ProjectRefResponseOutputEntity };
