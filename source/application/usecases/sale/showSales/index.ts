import { Sale } from "../../../../domain/entities/sale";
import { SaleRepository } from "../../../../domain/repositories/SaleRepository";

export class ShowSale{

    private saleRepository:SaleRepository;
    
    constructor(saleRepository:SaleRepository){
        this.saleRepository=saleRepository;
    }

    public run():Promise<Sale[]>{
        return this.saleRepository.getAll();
    }

}