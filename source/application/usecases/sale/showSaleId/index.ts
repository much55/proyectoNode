import { Sale } from "../../../../domain/entities/sale";
import { SaleRepository } from "../../../../domain/repositories/SaleRepository";

export class ShowSaleId{

    private saleRepository:SaleRepository;
    
    constructor(saleRepository:SaleRepository){
        this.saleRepository=saleRepository;
    }
    public run(id:string):Promise<Sale>{
        return this.saleRepository.findById(id);
    }

}