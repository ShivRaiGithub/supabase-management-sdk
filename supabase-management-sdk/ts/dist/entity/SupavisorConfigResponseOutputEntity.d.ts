import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { SupavisorConfigResponseOutput, SupavisorConfigResponseOutputListMatch } from '../SupabaseManagementTypes';
declare class SupavisorConfigResponseOutputEntity extends SupabaseManagementEntityBase<SupavisorConfigResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: SupavisorConfigResponseOutputEntity): SupavisorConfigResponseOutputEntity;
    list(this: any, reqmatch?: SupavisorConfigResponseOutputListMatch, ctrl?: Control): Promise<SupavisorConfigResponseOutputEntity[]>;
}
export { SupavisorConfigResponseOutputEntity };
