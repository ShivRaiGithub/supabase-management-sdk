import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { ProjectAvailableRestoreVersionsResponseOutput, ProjectAvailableRestoreVersionsResponseOutputListMatch } from '../SupabaseManagementTypes';
declare class ProjectAvailableRestoreVersionsResponseOutputEntity extends SupabaseManagementEntityBase<ProjectAvailableRestoreVersionsResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: ProjectAvailableRestoreVersionsResponseOutputEntity): ProjectAvailableRestoreVersionsResponseOutputEntity;
    list(this: any, reqmatch?: ProjectAvailableRestoreVersionsResponseOutputListMatch, ctrl?: Control): Promise<ProjectAvailableRestoreVersionsResponseOutputEntity[]>;
}
export { ProjectAvailableRestoreVersionsResponseOutputEntity };
