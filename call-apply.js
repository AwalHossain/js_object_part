const student = {
    id:101,
    name : 'Robi',
    money: 4000,
    treatDey : function(expanse, vat){
     this.money = this.money - expanse -vat
     console.log('hmm', this);
     return this.money;
    }
}

const heroBalam = {
    id:102,
    name:'balam',
    money:3000
}


student.treatDey.call(heroBalam, 400, 100)
student.treatDey.apply(heroBalam, [1000, 100])