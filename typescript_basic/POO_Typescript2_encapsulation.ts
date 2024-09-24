import  assert  from  'assert';

class BankCustomer {
    private name: string;
    private codeCB: string;

    constructor(name: string, codeCB: string){
        this.name = name;
        this.codeCB = codeCB;
    }

    getName():string{
        return this.name;
    }

    verifyPinInput(secretCode: string):boolean{
        if(secretCode === this.codeCB){
            return true;
        }else{
            return false;
        }
    }
}

// Tests

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
console.log("tests passeeeeed !")