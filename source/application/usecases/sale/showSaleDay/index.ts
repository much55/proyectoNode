import { Sale } from "../../../../domain/entities/sale";
import { SaleRepository } from "../../../../domain/repositories/SaleRepository";

export class ShowSaleDay{

    private saleRepository:SaleRepository;
    
    constructor(saleRepository:SaleRepository){
        this.saleRepository=saleRepository;
    }
    public run(day:string):Promise<Sale>{
        return this.saleRepository.showSalesByDay(day);
    }

}