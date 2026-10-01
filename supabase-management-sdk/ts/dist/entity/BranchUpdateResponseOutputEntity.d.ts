import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { BranchUpdateResponseOutput, BranchUpdateResponseOutputCreateData } from '../SupabaseManagementTypes';
declare class BranchUpdateResponseOutputEntity extends SupabaseManagementEntityBase<BranchUpdateResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: BranchUpdateResponseOutputEntity): BranchUpdateResponseOutputEntity;
    create(this: any, reqdata?: BranchUpdateResponseOutputCreateData, ctrl?: Control): Promise<BranchUpdateResponseOutputEntity>;
}
export { BranchUpdateResponseOutputEntity };
