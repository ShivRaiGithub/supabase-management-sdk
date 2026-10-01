import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Snippet, SnippetLoadMatch, SnippetListMatch } from '../SupabaseManagementTypes';
declare class SnippetEntity extends SupabaseManagementEntityBase<Snippet> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: SnippetEntity): SnippetEntity;
    load(this: any, reqmatch?: SnippetLoadMatch, ctrl?: Control): Promise<SnippetEntity>;
    list(this: any, reqmatch?: SnippetListMatch, ctrl?: Control): Promise<SnippetEntity[]>;
}
export { SnippetEntity };
