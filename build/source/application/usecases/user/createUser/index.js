"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    run(us) {
        return this.userRepository.save(us);
    }
}
exports.CreateUser = CreateUser;
