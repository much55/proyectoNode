import { ExceptionInter } from "./exceptionInter";

export class IncompleteInformationException implements ExceptionInter{
    getCode(): number {
        return 400;
    }
    getHeaders(): [] {
        return [];
    }
    getMessage(): string {
        return "incomplete information, please fill in the information correctly";
    }
    
}