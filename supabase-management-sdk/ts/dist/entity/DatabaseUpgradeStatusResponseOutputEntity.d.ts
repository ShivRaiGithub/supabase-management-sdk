import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { DatabaseUpgradeStatusResponseOutput, DatabaseUpgradeStatusResponseOutputLoadMatch } from '../SupabaseManagementTypes';
declare class DatabaseUpgradeStatusResponseOutputEntity extends SupabaseManagementEntityBase<DatabaseUpgradeStatusResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: DatabaseUpgradeStatusResponseOutputEntity): DatabaseUpgradeStatusResponseOutputEntity;
    load(this: any, reqmatch?: DatabaseUpgradeStatusResponseOutputLoadMatch, ctrl?: Control): Promise<DatabaseUpgradeStatusResponseOutputEntity>;
}
export { DatabaseUpgradeStatusResponseOutputEntity };
