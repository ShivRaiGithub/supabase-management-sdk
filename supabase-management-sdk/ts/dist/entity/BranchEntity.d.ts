import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Branch, BranchLoadMatch, BranchListMatch, BranchCreateData, BranchUpdateData, BranchRemoveMatch } from '../SupabaseManagementTypes';
declare class BranchEntity extends SupabaseManagementEntityBase<Branch> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: BranchEntity): BranchEntity;
    load(this: any, reqmatch?: BranchLoadMatch, ctrl?: Control): Promise<BranchEntity>;
    list(this: any, reqmatch?: BranchListMatch, ctrl?: Control): Promise<BranchEntity[]>;
    create(this: any, reqdata?: BranchCreateData, ctrl?: Control): Promise<BranchEntity>;
    update(this: any, reqdata?: BranchUpdateData, ctrl?: Control): Promise<BranchEntity>;
    remove(this: any, reqmatch?: BranchRemoveMatch, ctrl?: Control): Promise<BranchEntity>;
}
export { BranchEntity };
