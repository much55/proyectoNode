import { Sale } from "../../../../domain/entities/sale";
import { SaleRepository } from "../../../../domain/repositories/SaleRepository";

export class ShowSaleMonth{

    private saleRepository:SaleRepository;
    
    constructor(saleRepository:SaleRepository){
        this.saleRepository=saleRepository;
    }
    public run(month:string):Promise<Sale>{
        return this.saleRepository.showSalesByMonth(month);
    }

}