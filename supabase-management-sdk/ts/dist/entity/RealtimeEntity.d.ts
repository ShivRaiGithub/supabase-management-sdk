import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Realtime, RealtimeLoadMatch, RealtimeCreateData, RealtimeUpdateData } from '../SupabaseManagementTypes';
declare class RealtimeEntity extends SupabaseManagementEntityBase<Realtime> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: RealtimeEntity): RealtimeEntity;
    load(this: any, reqmatch?: RealtimeLoadMatch, ctrl?: Control): Promise<RealtimeEntity>;
    create(this: any, reqdata?: RealtimeCreateData, ctrl?: Control): Promise<RealtimeEntity>;
    update(this: any, reqdata?: RealtimeUpdateData, ctrl?: Control): Promise<RealtimeEntity>;
}
export { RealtimeEntity };
