import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Deploy, DeployCreateData } from '../SupabaseManagementTypes';
declare class DeployEntity extends SupabaseManagementEntityBase<Deploy> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: DeployEntity): DeployEntity;
    create(this: any, reqdata?: DeployCreateData, ctrl?: Control): Promise<DeployEntity>;
}
export { DeployEntity };
