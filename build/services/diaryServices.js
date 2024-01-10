"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDiary = exports.getEntriesWithoutSensitiveInfo = exports.findById = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
const diaires = diaries_json_1.default;
const getEntries = () => diaires;
exports.getEntries = getEntries;
const findById = (id) => {
    const entry = diaires.find(d => d.id === id);
    if (entry !== undefined) {
        const { comment } = entry, restOfDiary = __rest(entry, ["comment"]);
        return restOfDiary;
    }
    return undefined;
};
exports.findById = findById;
const getEntriesWithoutSensitiveInfo = () => diaires.map((_a) => {
    var { comment } = _a, rest = __rest(_a, ["comment"]);
    return (Object.assign({}, rest));
});
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const addDiary = (newDiaryEntry) => {
    const newDiary = Object.assign({ id: diaires.length + 1 }, newDiaryEntry);
    diaires.push(newDiary);
    return newDiary;
};
exports.addDiary = addDiary;
