import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { BulkUpdateFunctionResponseOutput, BulkUpdateFunctionResponseOutputUpdateData } from '../SupabaseManagementTypes';
declare class BulkUpdateFunctionResponseOutputEntity extends SupabaseManagementEntityBase<BulkUpdateFunctionResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: BulkUpdateFunctionResponseOutputEntity): BulkUpdateFunctionResponseOutputEntity;
    update(this: any, reqdata?: BulkUpdateFunctionResponseOutputUpdateData, ctrl?: Control): Promise<BulkUpdateFunctionResponseOutputEntity>;
}
export { BulkUpdateFunctionResponseOutputEntity };
