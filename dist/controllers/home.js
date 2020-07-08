"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
    res.sendFile("dist/client/index.html");
};
//# sourceMappingURL=home.js.map