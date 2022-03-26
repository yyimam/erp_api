"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumber = void 0;
const randomNumber = () => {
    return (new Date()).getTime().toString(36) + Math.random().toString(36).slice(11);
};
exports.randomNumber = randomNumber;
//# sourceMappingURL=helper.service.js.map