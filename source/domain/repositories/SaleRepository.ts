import { Sale } from "../entities/sale";

export interface  SaleRepository{
    getAll():Promise<Sale[]>;
    save(user:Sale):Promise<Sale[]>;
    delete(id:string):Promise<string>;
    findById(id:string):Promise<Sale>;
    update(user:Sale):Promise<Sale[]>;
    showSalesByDay(day:string):Promise<Sale>;
    showSalesByMonth(month:string):Promise<Sale>;



}