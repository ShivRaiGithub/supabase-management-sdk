import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Billing, BillingUpdateData, BillingRemoveMatch } from '../SupabaseManagementTypes';
declare class BillingEntity extends SupabaseManagementEntityBase<Billing> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: BillingEntity): BillingEntity;
    update(this: any, reqdata?: BillingUpdateData, ctrl?: Control): Promise<BillingEntity>;
    remove(this: any, reqmatch?: BillingRemoveMatch, ctrl?: Control): Promise<BillingEntity>;
}
export { BillingEntity };
