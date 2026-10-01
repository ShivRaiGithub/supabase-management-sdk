import { SupabaseManagementEntityBase } from '../SupabaseManagementEntityBase';
import type { SupabaseManagementSDK } from '../SupabaseManagementSDK';
import type { Control } from '../types';
import type { Domain, DomainRemoveMatch } from '../SupabaseManagementTypes';
declare class DomainEntity extends SupabaseManagementEntityBase<Domain> {
    constructor(client: SupabaseManagementSDK, entopts: any);
    make(this: DomainEntity): DomainEntity;
    remove(this: any, reqmatch?: DomainRemoveMatch, ctrl?: Control): Promise<DomainEntity>;
}
export { DomainEntity };
