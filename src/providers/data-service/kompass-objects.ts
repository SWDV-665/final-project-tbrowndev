export namespace Kompass {
    export class ActiveUser {
        constructor(
            public fullName: string,
            public occupation: string,
            public email: string,
            public phone: number) {

        }
    }

    export class Paystub {
        constructor(
            public reference: string,
            public nextPayDate: string,
            public occurenceLevel: number,
            public isDirectDeposit: boolean,
            public pay: number) {

        }
    }

    export class Bill {
        constructor(
            public reference: string,
            public nextDueDate: string,
            public occurenceLevel: number,
            public isAutopay: boolean,
            public amount: number) {

        }
    }

    export class ManualItem{
        constructor(
            public reference: string,
            public isExpense: boolean,
            public amount: number){
        }
    }
}