import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { FunctionType, FunctionLoadMatch, FunctionListMatch, FunctionCreateData, FunctionUpdateData } from '../SupabaseManagementTypes';
declare class FunctionEntity extends SupabaseManagementEntityBase<FunctionType> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: FunctionEntity): FunctionEntity;
    load(this: any, reqmatch?: FunctionLoadMatch, ctrl?: Control): Promise<FunctionEntity>;
    list(this: any, reqmatch?: FunctionListMatch, ctrl?: Control): Promise<FunctionEntity[]>;
    create(this: any, reqdata?: FunctionCreateData, ctrl?: Control): Promise<FunctionEntity>;
    update(this: any, reqdata?: FunctionUpdateData, ctrl?: Control): Promise<FunctionEntity>;
}
export { FunctionEntity };
