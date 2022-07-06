import { Sale } from "../../../../domain/entities/sale";
import { Errors } from "../../../../domain/exceptions/Error";
import { SaleRepository } from "../../../../domain/repositories/SaleRepository";
import { UserRepository } from "../../../../domain/repositories/UserRepository";
 import { Messages } from "../../../../domain/services/Messages";
import { SecurityRoles } from "../../../../domain/services/SecurityRoles";

export class CreateSale{

    private saleRepository:SaleRepository;
    
    constructor(saleRepository:SaleRepository){
        this.saleRepository=saleRepository;
    }

    public run(us:Sale):Promise<Sale[]>{
       
       
      
        return  this.saleRepository.save(us);
       
       
    }

}