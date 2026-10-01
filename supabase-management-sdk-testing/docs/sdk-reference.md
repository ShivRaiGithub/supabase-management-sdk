# Supabase Management SDK reference

This console uses the local generated @voxgig-sdk/supabase-management-sdk package. Instantiate SupabaseManagementSDK with an apikey, select a generated entity, then call a CRUD-style method with a JSON match or request body. Operations return generated entity objects; inspect the response with data().

## Entities exposed in the console

| Entity | Methods | Explanation |
| --- | --- | --- |
| V1OrganizationSlugResponseOutput | list, load, create | Generated organization response entity. |
| V1ProjectWithDatabaseResponseOutput | list, load, create, update, remove | Generated project response entity. |
| V1OrganizationMemberResponseOutput | list | Generated organization member response entity. |
| ApiKey | list, load, create, update, remove | API key resource. |
| V1GetUsageApiRequestsCountResponseOutput | list | Generated usage response entity. |
| Function | list, load, create, update | Edge function resource. |
| Secret | list, create, remove | Project secret resource. |
| V1BackupsResponseOutput | list | Generated backup response entity. |
| V1ListMigrationsResponseOutput | list | Generated migration response entity. |

## Common client methods

prepare() prepares a request without sending it. direct() executes a low-level request. tester() and SupabaseManagementSDK.test() create test clients.

The complete installed SDK exposes 87 generated entity factories. The console prioritizes entities that can support the requested organization, project, member, API-key, usage, function, secret, backup, and migration exploration workflows.
