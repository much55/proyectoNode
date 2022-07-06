"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowUserForId = void 0;
class ShowUserForId {
    constructor(rolRepository) {
        this.rolRepository = rolRepository;
    }
    run(id) {
        return this.rolRepository.findByRol(id);
    }
}
exports.ShowUserForId = ShowUserForId;
