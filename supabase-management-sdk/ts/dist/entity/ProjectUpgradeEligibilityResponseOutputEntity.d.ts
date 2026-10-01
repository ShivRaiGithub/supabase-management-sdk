import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { ProjectUpgradeEligibilityResponseOutput, ProjectUpgradeEligibilityResponseOutputListMatch } from '../SupabaseManagementTypes';
declare class ProjectUpgradeEligibilityResponseOutputEntity extends SupabaseManagementEntityBase<ProjectUpgradeEligibilityResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: ProjectUpgradeEligibilityResponseOutputEntity): ProjectUpgradeEligibilityResponseOutputEntity;
    list(this: any, reqmatch?: ProjectUpgradeEligibilityResponseOutputListMatch, ctrl?: Control): Promise<ProjectUpgradeEligibilityResponseOutputEntity[]>;
}
export { ProjectUpgradeEligibilityResponseOutputEntity };
