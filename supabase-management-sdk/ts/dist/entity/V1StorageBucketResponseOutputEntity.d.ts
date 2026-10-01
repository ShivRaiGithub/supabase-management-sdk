import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { V1StorageBucketResponseOutput, V1StorageBucketResponseOutputListMatch } from '../SupabaseManagementTypes';
declare class V1StorageBucketResponseOutputEntity extends SupabaseManagementEntityBase<V1StorageBucketResponseOutput> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: V1StorageBucketResponseOutputEntity): V1StorageBucketResponseOutputEntity;
    list(this: any, reqmatch?: V1StorageBucketResponseOutputListMatch, ctrl?: Control): Promise<V1StorageBucketResponseOutputEntity[]>;
}
export { V1StorageBucketResponseOutputEntity };
