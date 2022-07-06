"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowUsers = void 0;
class ShowUsers {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    run() {
        return this.userRepository.getAll();
    }
}
exports.ShowUsers = ShowUsers;
