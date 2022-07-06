import { ExceptionInter } from "./exceptionInter";

export class UnauthorizedException implements ExceptionInter{
    getCode(): number {
        return 401;
    }
    getHeaders(): [] {
        return [];
    }
    getMessage(): string {
        return "unauthorized, please validate correctly";
    }
    
}