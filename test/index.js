"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
(async () => {
    const CineGO = new src_1.MOVIES.CineGO();
    const data = await CineGO.home();
    console.log(data);
})();
//# sourceMappingURL=index.js.map