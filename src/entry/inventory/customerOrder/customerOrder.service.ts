import { Product } from './../../../utility/products/models/product.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCustomerOrderDto } from './dto/create-customerOrder.dto';
import { OrderMaster } from 'src/entities/orderMaster.entity';
import { OrderDetails } from 'src/entities/orderDetails.entity';
import { AC } from 'src/entry/chartOfAccounts/models/ac.model';
import { WarehouseList } from 'src/utility/warehouseList/models/warehouseList.model';
interface Pagination {
  rows: OrderMaster[];
  count: number
}

@Injectable()
export class CustomerOrderService {
  
  constructor(
    @InjectModel(OrderMaster)
    private readonly OrderMasterModel: typeof OrderMaster,
    @InjectModel(OrderDetails)
    private readonly OrderDetailsModel: typeof OrderDetails,
  ) { }

  async create(CreateCustomerOrderDto: CreateCustomerOrderDto): Promise<OrderMaster> {
    let t: {} = CreateCustomerOrderDto
    return this.OrderMasterModel.create(t, { include: [OrderDetails] });
  }

  async update(idno: string, UpdateCustomerOrderDto: CreateCustomerOrderDto): Promise<any> {
    const data: OrderMaster = await this.findOne(idno);
    let t: any = UpdateCustomerOrderDto;
    return data.update(t, { where: { id: idno } })
      .then(async rec => {
        console.log("redd", rec)
        return await OrderDetails.bulkCreate(UpdateCustomerOrderDto.orderDetails, { individualHooks: true, updateOnDuplicate: ["description"] }).then(s => s);
      })
      .catch(err => err);
  }

  async findAll(param: any): Promise<any> {
    return await this.OrderMasterModel.findAndCountAll({
      include: [
        { model: AC, attributes: [['title', 'label'], ['acode', 'value']] }, 
        { model: WarehouseList, attributes: [['name', 'label'], ['code', 'value']] }
      ],
      attributes: ['id','EntryNo', 'edate', 'RefNo', 'terms', 'party_ac', 'Warehouse_Code', 'itemdescription', 'orderclosed', 'discount', 'netamount','grossamount'],
      where: { estatus: "SO" },  
      limit: +param.limit,
      offset: +param.offset * +param.limit,
      
    });
  }


  async findAndUpdate(id,data: any): Promise<any> {
    this.OrderMasterModel.findAll({
      include: [
        { model: OrderDetails, attributes: ["id","itemcode", 'delivery_date', 'description', 'qty', 'rate', 'amount'] },],
      attributes: ['id','EntryNo', 'edate', 'RefNo', 'terms', 'party_ac', 'Warehouse_Code', 'itemdescription', 'orderclosed', 'discount', 'netamount','grossamount'],
      where: { idno:id }  
    }).then(rec => {
      rec[0].set(data);
      rec[0].save();
    });
  }

  async findOne(id: string): Promise<OrderMaster> {
    return await this.OrderMasterModel.findOne({
      include: [
        { model: OrderDetails, include: [{ model: Product, attributes: [['name', 'label'], ['code', 'value']] }], attributes: ["id","itemcode", 'delivery_date', 'description', 'qty', 'rate', 'amount'] },
        { model: AC, attributes: [['title', 'label'], ['acode', 'value']] },
        { model: WarehouseList, attributes: [['name', 'label'], ['code', 'value']] }
      ],
      where: { idno: id },
      attributes: ['id','EntryNo', 'edate', 'RefNo', 'terms', 'party_ac', 'Warehouse_Code', 'itemdescription', 'orderclosed', 'discount', 'netamount']
    });
  }

  async remove(id: string): Promise<any> {
    let u = await OrderMaster.destroy({ where: { id: id } }).then(t => t);
    console.log("redd", id, u)
    return u;

  }

}
