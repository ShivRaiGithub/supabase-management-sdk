"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupabaseManagementError = void 0;
class SupabaseManagementError extends Error {
    isSupabaseManagementError = true;
    sdk = 'SupabaseManagement';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.SupabaseManagementError = SupabaseManagementError;
//# sourceMappingURL=SupabaseManagementError.js.map