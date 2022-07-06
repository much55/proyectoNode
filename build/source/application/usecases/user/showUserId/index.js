"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowUserForId = void 0;
class ShowUserForId {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    run(id) {
        return this.userRepository.findById(id);
    }
}
exports.ShowUserForId = ShowUserForId;
