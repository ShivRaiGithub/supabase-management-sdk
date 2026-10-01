import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Analytics, AnalyticsLoadMatch } from '../SupabaseManagementTypes';
declare class AnalyticsEntity extends SupabaseManagementEntityBase<Analytics> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: AnalyticsEntity): AnalyticsEntity;
    load(this: any, reqmatch?: AnalyticsLoadMatch, ctrl?: Control): Promise<AnalyticsEntity>;
}
export { AnalyticsEntity };
