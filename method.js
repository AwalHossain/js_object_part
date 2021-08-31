const student = {
    id:101,
    name : 'Robi',
    money: 4000,
    treatDey : function(expanse){
     this.money = this.money - expanse
     return this.money;
    }
}

console.log(student.treatDey(200));
