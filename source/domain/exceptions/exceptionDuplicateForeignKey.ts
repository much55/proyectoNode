import { ExceptionInter } from "./exceptionInter";

export class DuplicateIForeignException implements ExceptionInter{
    getCode(): number {
        return 400;
    }
    getHeaders(): [] {
        return [];
    }
    getMessage(): string {
        return "error in registration or update, violates the foreign key. please enter a valid foreign key";
    }
    
}