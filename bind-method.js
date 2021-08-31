const student = {
    id:101,
    name : 'Robi',
    money: 4000,
    treatDey : function(expanse){
     this.money = this.money - expanse
     console.log('hmm', this);
     return this.money;
    }
}

const heroBalam = {
    id:102,
    name:'balam',
    money:3000
}


student.treatDey(100)

const balam = student.treatDey.bind(heroBalam)
balam(200)