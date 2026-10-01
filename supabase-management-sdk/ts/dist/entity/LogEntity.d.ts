import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Log, LogListMatch } from '../SupabaseManagementTypes';
declare class LogEntity extends SupabaseManagementEntityBase<Log> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: LogEntity): LogEntity;
    list(this: any, reqmatch?: LogListMatch, ctrl?: Control): Promise<LogEntity[]>;
}
export { LogEntity };
