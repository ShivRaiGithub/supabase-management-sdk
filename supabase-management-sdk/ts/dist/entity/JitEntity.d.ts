import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Jit, JitListMatch, JitCreateData, JitUpdateData } from '../SupabaseManagementTypes';
declare class JitEntity extends SupabaseManagementEntityBase<Jit> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: JitEntity): JitEntity;
    list(this: any, reqmatch?: JitListMatch, ctrl?: Control): Promise<JitEntity[]>;
    create(this: any, reqdata?: JitCreateData, ctrl?: Control): Promise<JitEntity>;
    update(this: any, reqdata?: JitUpdateData, ctrl?: Control): Promise<JitEntity>;
}
export { JitEntity };
