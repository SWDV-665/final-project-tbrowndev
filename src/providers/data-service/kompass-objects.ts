export namespace Kompass {

    // NEW CONCEPT TO REPLACE ABOVE - DONE
    /**
     * Creates all records utilized during runtime (Income, Bill, Manual Budget)
     * @param title 'name of record'
     * @param kind 'Type of record: 0: income; 1: bill'
     * @param nextOccurenceDate 'Next Date Record will occur: string formatted as mm-dd-yyyy'
     * @param occurenceLevel 'Frequency of record: 0:One Time:, 1: daily; 2: weekly; 3: bi-weekly; 4:monthly; 5:yearly'
     * @param isAuto 'is this record set for direct deposit/ auto pay?'
     * @param amount 'the amount set for the record'
     * @param desc 'quick description of the record'
     */
    export class Record {
        public title: string;
        public kind: number; // 0: income, 1: bill
        public nextOccurenceDate: string;
        public occurenceLevel: number;//
        public isAuto: boolean;
        public amount: number;
        public description: string;
        public inBudget: boolean = false;

        constructor(title: string, kind: number, nextOccurenceDate: string, occurenceLevel: number, isAuto: boolean, amount: number, desc: string) {
            this.title = title;
            this.kind = kind;
            this.nextOccurenceDate = nextOccurenceDate;
            this.occurenceLevel = occurenceLevel;
            this.isAuto = isAuto;
            this.amount = amount;
            this.description = desc;
        }
    }

    /**
     * create payment for use during runtime
     * @param title 'Name of Bill'
     * @param occurenceDate 'Occurence date of bill that user is paying for 
     * @param amount 'amount of bill for occurence date'
     * @param payDate 'date user paid bill'
     * @param payAmount 'amount user paying bill for occurence date'
     * @param confNum 'Confirmation # of payment from external system'
     */
    export class Payment {
        public title: string;
        public occurenceDate: string;
        public amount: number;
        public payDate: string;
        public payAmount: number;
        public confNum: string;

        constructor(title: string, occurenceDate: string, amount: number, payDate: string, payAmount: number, confNum: string) {
            this.title = title;
            this.occurenceDate = occurenceDate;
            this.amount = amount;
            this.payDate = payDate;
            this.payAmount = payAmount;
            this.confNum = confNum;
        }
    }

    /**
     * Creates all records utilized during runtime (Income, Bill, Manual Budget)
     * @param title 'name of record'
     * @param kind 'Type of record: 0: income; 1: expense'
     * @param amount 'the amount set for the record'
     */
    export class ManualBudgetItem {
        public title: string;
        public kind: number;
        public amount: number;
        public inBudget: boolean = false;

        constructor(title: string, kind: number, amount: number) {
            this.title = title;
            this.kind = kind;
            this.amount = amount;
        }
    }

    /**
     * Creates User Profile for runtime use
     */
    export class Profile {
        public name:string
        public nickname: string
        public jobTitle: string;
        public email: string;
        public phone: number;

        constructor(name: string, email?: string, phone?: number, nickname?: string, jobtitle?: string) {
            this.name = name
            this.email = email;
            this.phone = phone;
            this.nickname = nickname;
            this.jobTitle = jobtitle;
        }
    }
}