import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { ProjectClaimTokenResponseOutput, ProjectClaimTokenResponseOutputLoadMatch } from '../SupabaseManagementTypes';
declare class ProjectClaimTokenResponseOutputEntity extends SupabaseManagementEntityBase<ProjectClaimTokenResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: ProjectClaimTokenResponseOutputEntity): ProjectClaimTokenResponseOutputEntity;
    load(this: any, reqmatch?: ProjectClaimTokenResponseOutputLoadMatch, ctrl?: Control): Promise<ProjectClaimTokenResponseOutputEntity>;
}
export { ProjectClaimTokenResponseOutputEntity };
