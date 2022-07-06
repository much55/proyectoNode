"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = void 0;
class DeleteUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    run(id) {
        return this.userRepository.delete(id);
    }
}
exports.DeleteUser = DeleteUser;
