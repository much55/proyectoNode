"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRoutes_1 = require("./source/infrastructure/driving-adapters/routes/UserRoutes");
const RolRoutes_1 = require("./source/infrastructure/driving-adapters/routes/RolRoutes");
const ProductRoutes_1 = require("./source/infrastructure/driving-adapters/routes/ProductRoutes");
const port = 3000;
UserRoutes_1.app.use(RolRoutes_1.app);
UserRoutes_1.app.use(ProductRoutes_1.appP);
UserRoutes_1.app.listen(port, () => {
    console.log(`App running on port ${port}. `);
});
