import { Sale } from "../../../../domain/entities/sale";
import { Errors } from "../../../../domain/exceptions/Error";
import { SaleRepository } from "../../../../domain/repositories/SaleRepository";
import { UserRepository } from "../../../../domain/repositories/UserRepository";
 import { Messages } from "../../../../domain/services/Messages";
import { SecurityRoles } from "../../../../domain/services/SecurityRoles";

export class DeleteSale{

    private saleRepository:SaleRepository;
    
    constructor(saleRepository:SaleRepository){
        this.saleRepository=saleRepository;
    }

    public run(id:string):Promise<string>{
         return this.saleRepository.delete(id);
    }

}