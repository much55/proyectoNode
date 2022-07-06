"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRoutes_1 = require("./source/infrastructure/driving-adapters/routes/UserRoutes");
const port = 3000;
UserRoutes_1.app.listen(port, () => {
    console.log(`App running on port ${port}. `);
});
