const constants = require('../../../constants')
const format = require('../database/tables').bills
const {assertData} = require('../utils/common')
const Item = require('./Item')
const PipeProduct = require('./PipeProduct')
const Event = require('./Event')
const Entity = require('./Entity')
const ItemMovement = require('./ItemMovement')
const User = require('./User')
const {verifyString, verifyInt, verifyDate, validate} = require('../utils/validators')
const uuid = require("uuid").v4
const {getFilterQuery} = require('../utils/common')
const ErrorHandler = require('./ErrorHandler')
const errors = require('../utils/errors')
const { DAY_IN_MS } = require('../../../constants')

class Bill extends Entity{

    static table = 'bills';
    static Entity = Bill;
    static notExistError = errors.billNotExist;

    constructor(db, billData){
        super()
        this.db = db
        /* START DATA */
        assertData(billData, "BILL CONSTRUCTOR", format)
        this.id = billData.id
        this.customer_id = billData.customer_id
        this.status = billData.status
        this.date = new Date(billData.date)
        this.total_price = billData.total_price
        this.daily_price = billData.daily_price
        this.note = billData.note
        /* END DATA */
        this.idFilter = [{
            column: 'id', value: this.id
        }];
        this.table = 'bills';
        this.Entity = Bill;
        console.log('THIS DATE',this.date)
    }
    calculatePrice(userPipesAmount, itemMovements){
        const place = 'BILL CALCULATE PRICE'
        const fromDay = itemMovements[0].date
        console.log(this.date, fromDay)
        const amountOfDays = Math.trunc((this.date.getTime() - fromDay.getTime())/DAY_IN_MS)
        if(amountOfDays < 0){
            ErrorHandler.throw(amountOfDays,
                {attribute: 'amountOfDays', place},
                errors.invalidBillDaysValue
            );
        }
        const price = itemMovements[0].price
        let billedItems = itemMovements.length - userPipesAmount;
        if(billedItems < 0)
            billedItems = 0;
        this.total_price = price*amountOfDays*billedItems;
        this.daily_price = price*(billedItems);
    }
    getCustomerItems(){
        const filters = [{
            column: 'owner_id',
            value: this.customer_id
        }]
        return this.db.driver.get({filters,table: 'items'})
    }
    verifyItemMovements(itemMovements){
        const place = 'BILL VERIFY ITEM MOVEMENTS'
        for(const itemMovement of itemMovements){
            if(!(itemMovement instanceof ItemMovement))
                ErrorHandler.throw(
                    typeof itemMovement,
                    {place, attribute: 'itemMovement'},
                    errors.itemMovementIsRequired)
            if(itemMovement.billed)
                ErrorHandler.throw(
                    itemMovement.billed,
                    {place, attribute: 'billed'},
                    errors.itemAlreadyBilled)
        }
    }
    updateItemMovementsBilledStatus(itemMovements){
        return Promise.all( itemMovements.map(itemMovement => {
            return itemMovement.set('billed', true);
        }))
    }
    async calculateBill(itemMovements){
        this.verifyItemMovements(itemMovements)
        const userItems = await this.getCustomerItems()
        this.status = constants.billStatus.ended
        await this.calculatePrice(userItems.length, itemMovements)
    }
    async create(itemMovements = []){
        await this.calculateBill(itemMovements)
        await this.updateItemMovementsBilledStatus(itemMovements)
        return this.insert()
        // deberia chequear cual deposita y cual no y en base a eso
        // generar nuevos movimientos o no
    }
    insert(){
        return this.db.driver.insert(this.table, {
            customer_id: this.customer_id,
            status: this.status,
            date: this.date,
            total_price: this.total_price,
            daily_price: this.daily_price,
            note: this.note,
        })
    }
    static getByI(id, db){
        const filters = [{
            column: 'id',
            value: id
        }]
        return new Promise(resolve => {
            db.driver.findOne({filters, table: this.table}).then( result => {
                if(result){
                    resolve(new this.Entity(db, result))
                    return;
                }
                resolve(result)
            })
        }) 
    }
    setStatus(attribute, status){
        const place = 'BILL SET STATUS';
        validate(status, {place, attribute}, format.status);
        this.status = status
        return this.update(['status']);
    }
    setNote(attribute, note){
        const place = 'BILL SET NOTE';
        validate(note, {place, attribute}, format.note);
        this.note = note
        return this.update(['note']);
    }
    set(, ){ place = 'BILL SET';
        swi(a){ case 'note': return this.setNote(attribute, newValue) case 'status': return this.setStatus(attribute, newValue) default: ErrorH
        }
    }
}
a
e.e
aa
a
a
a
b
c
