import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Invite, InviteCreateData } from '../SupabaseManagementTypes';
declare class InviteEntity extends SupabaseManagementEntityBase<Invite> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: InviteEntity): InviteEntity;
    create(this: any, reqdata?: InviteCreateData, ctrl?: Control): Promise<InviteEntity>;
}
export { InviteEntity };
