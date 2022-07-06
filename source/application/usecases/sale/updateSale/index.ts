import { Sale } from "../../../../domain/entities/sale";
import { SaleRepository } from "../../../../domain/repositories/SaleRepository";

export class UpdateSale{

    private saleRepository:SaleRepository;
    
    constructor(saleRepository:SaleRepository){
        this.saleRepository=saleRepository;
    }


    public run(us:Sale):Promise<Sale[]>{
       return  this.saleRepository.update(us);
    }

}