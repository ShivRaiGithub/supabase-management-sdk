import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { ProjectUpgradeInitiateResponseOutput, ProjectUpgradeInitiateResponseOutputCreateData } from '../SupabaseManagementTypes';
declare class ProjectUpgradeInitiateResponseOutputEntity extends SupabaseManagementEntityBase<ProjectUpgradeInitiateResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: ProjectUpgradeInitiateResponseOutputEntity): ProjectUpgradeInitiateResponseOutputEntity;
    create(this: any, reqdata?: ProjectUpgradeInitiateResponseOutputCreateData, ctrl?: Control): Promise<ProjectUpgradeInitiateResponseOutputEntity>;
}
export { ProjectUpgradeInitiateResponseOutputEntity };
