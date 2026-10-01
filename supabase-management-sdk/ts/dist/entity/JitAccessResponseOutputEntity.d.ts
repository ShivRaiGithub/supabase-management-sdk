import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { JitAccessResponseOutput, JitAccessResponseOutputCreateData } from '../SupabaseManagementTypes';
declare class JitAccessResponseOutputEntity extends SupabaseManagementEntityBase<JitAccessResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: JitAccessResponseOutputEntity): JitAccessResponseOutputEntity;
    create(this: any, reqdata?: JitAccessResponseOutputCreateData, ctrl?: Control): Promise<JitAccessResponseOutputEntity>;
}
export { JitAccessResponseOutputEntity };
