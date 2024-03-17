"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageTypeormService = exports.LanguageModule = void 0;
var language_module_1 = require("./language/language.module");
Object.defineProperty(exports, "LanguageModule", { enumerable: true, get: function () { return language_module_1.LanguageModule; } });
var language_typeorm_service_1 = require("./language/service/language-typeorm.service");
Object.defineProperty(exports, "LanguageTypeormService", { enumerable: true, get: function () { return language_typeorm_service_1.LanguageTypeormService; } });
__exportStar(require("./language/interfaces"), exports);
//# sourceMappingURL=index.js.map