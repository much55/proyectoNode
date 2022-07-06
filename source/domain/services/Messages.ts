
import { DuplicateIForeignException } from "../exceptions/exceptionDuplicateForeignKey";
import { DuplicateInformationException } from "../exceptions/exceptionDuplicateInformation";
import { IncompleteInformationException } from "../exceptions/exceptionIncompleteInformation";
import { ExceptionInter } from "../exceptions/exceptionInter";
import { UnauthorizedException } from "../exceptions/ExceptionUnauthorized";


export class Messages{

     exception:ExceptionInter;
    
    constructor(ncode:string){

        switch (ncode) {
            case "23502":
               this.exception= new IncompleteInformationException();
                break;
            case "23505":
                this.exception= new DuplicateInformationException();
                break;    
            case "23503":
                this.exception= new DuplicateIForeignException();
                break;
            case "unauthorized":
                this.exception= new UnauthorizedException();
                break;    
            default:
                console.log("entro a defaulttt el codigo es " + ncode);
         //      this.exception= new Exception1();
                break;
        }
         
    }

   

}