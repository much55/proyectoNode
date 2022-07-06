import { ExceptionInter } from "./exceptionInter";

export class GeneralException implements ExceptionInter{
    getCode(): number {
        return 400;
    }
    getHeaders(): [] {
        return [];
    }
    getMessage(): string {
        return "error, possibly the data passed to the request is misspelled, make sure and try again";
    }
    
}