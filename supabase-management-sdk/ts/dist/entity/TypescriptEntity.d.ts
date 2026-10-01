import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Typescript, TypescriptLoadMatch } from '../SupabaseManagementTypes';
declare class TypescriptEntity extends SupabaseManagementEntityBase<Typescript> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: TypescriptEntity): TypescriptEntity;
    load(this: any, reqmatch?: TypescriptLoadMatch, ctrl?: Control): Promise<TypescriptEntity>;
}
export { TypescriptEntity };
