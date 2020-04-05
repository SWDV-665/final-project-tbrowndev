export namespace Kompass{
    export class ActiveUser{
        constructor(
            public name:string, 
            public occupation:string, 
            public email:string,
            public phone:number)
        {
    
        }
    }
    
    export class Paystub{
        constructor(
            public name:string,
            public nextPayDate:string,
            public occurenceLevel:number,
            public isDirectDeposit:boolean,
            public pay:number)
        {
    
        }
    }
    
    export class Bill{
        constructor(
            public name:string,
            public nextDueDate:string,
            public occurenceLevel:number,
            public isAutopay:boolean,
            public amount:number)
        {
    
        }
    }
    
    export class SummaryCard{
        constructor(
            public name:string,
            public amount:number,
            public color:string)
        {
    
        }
    }
}