"use strict";
/**
 * Configuration loading for UBS Brand Validator.
 * Loads defaults, then merges with .ubsrc.json if found.
 */
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfig = loadConfig;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const DEFAULT_CONFIG = {
    rules: [],
    disabledRules: [],
    ignore: ['node_modules/**', 'dist/**', 'build/**', '.git/**'],
    customColours: [],
    strict: false,
};
/**
 * Load config from a specific path or search for .ubsrc.json in cwd.
 */
function loadConfig(configPath) {
    const config = { ...DEFAULT_CONFIG };
    let filePath = configPath;
    if (!filePath) {
        const candidate = path.resolve(process.cwd(), '.ubsrc.json');
        if (fs.existsSync(candidate)) {
            filePath = candidate;
        }
    }
    if (filePath) {
        if (!fs.existsSync(filePath)) {
            console.error(`Config file not found: ${filePath}`);
            process.exit(1);
        }
        try {
            const raw = fs.readFileSync(filePath, 'utf-8');
            const userConfig = JSON.parse(raw);
            if (userConfig.rules)
                config.rules = userConfig.rules;
            if (userConfig.disabledRules)
                config.disabledRules = userConfig.disabledRules;
            if (userConfig.ignore)
                config.ignore = [...config.ignore, ...userConfig.ignore];
            if (userConfig.customColours)
                config.customColours = userConfig.customColours;
            if (userConfig.strict !== undefined)
                config.strict = userConfig.strict;
        }
        catch (err) {
            console.error(`Failed to parse config file: ${filePath}`);
            process.exit(1);
        }
    }
    return config;
}
//# sourceMappingURL=config.js.map