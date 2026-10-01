import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { StreamableFile, StreamableFileLoadMatch } from '../SupabaseManagementTypes';
declare class StreamableFileEntity extends SupabaseManagementEntityBase<StreamableFile> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: StreamableFileEntity): StreamableFileEntity;
    load(this: any, reqmatch?: StreamableFileLoadMatch, ctrl?: Control): Promise<StreamableFileEntity>;
}
export { StreamableFileEntity };
