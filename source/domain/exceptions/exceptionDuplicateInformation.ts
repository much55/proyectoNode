import { ExceptionInter } from "./exceptionInter";

export class DuplicateInformationException implements ExceptionInter{
    getCode(): number {
        return 400;
    }
    getHeaders(): [] {
        return [];
    }
    getMessage(): string {
        return "duplicate key violates the restriction, please enter another primary key that is unique";
    }
    
}