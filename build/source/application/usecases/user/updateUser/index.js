"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = void 0;
class UpdateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    run(us) {
        return this.userRepository.update(us);
    }
}
exports.UpdateUser = UpdateUser;
