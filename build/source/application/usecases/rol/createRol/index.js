"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRol = void 0;
class CreateRol {
    constructor(rolRepository) {
        this.rolRepository = rolRepository;
    }
    run(rol) {
        return this.rolRepository.save(rol);
    }
}
exports.CreateRol = CreateRol;
