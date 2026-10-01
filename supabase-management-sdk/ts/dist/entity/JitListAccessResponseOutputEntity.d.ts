import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { JitListAccessResponseOutput, JitListAccessResponseOutputListMatch } from '../SupabaseManagementTypes';
declare class JitListAccessResponseOutputEntity extends SupabaseManagementEntityBase<JitListAccessResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: JitListAccessResponseOutputEntity): JitListAccessResponseOutputEntity;
    list(this: any, reqmatch?: JitListAccessResponseOutputListMatch, ctrl?: Control): Promise<JitListAccessResponseOutputEntity[]>;
}
export { JitListAccessResponseOutputEntity };
