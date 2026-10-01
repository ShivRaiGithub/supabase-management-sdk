import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Action, ActionLoadMatch, ActionUpdateData } from '../SupabaseManagementTypes';
declare class ActionEntity extends SupabaseManagementEntityBase<Action> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: ActionEntity): ActionEntity;
    load(this: any, reqmatch?: ActionLoadMatch, ctrl?: Control): Promise<ActionEntity>;
    update(this: any, reqdata?: ActionUpdateData, ctrl?: Control): Promise<ActionEntity>;
}
export { ActionEntity };
