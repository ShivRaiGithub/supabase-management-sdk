import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Project, ProjectCreateData, ProjectRemoveMatch } from '../SupabaseManagementTypes';
declare class ProjectEntity extends SupabaseManagementEntityBase<Project> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: ProjectEntity): ProjectEntity;
    create(this: any, reqdata?: ProjectCreateData, ctrl?: Control): Promise<ProjectEntity>;
    remove(this: any, reqmatch?: ProjectRemoveMatch, ctrl?: Control): Promise<ProjectEntity>;
}
export { ProjectEntity };
