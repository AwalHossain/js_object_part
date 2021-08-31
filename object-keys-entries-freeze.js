const bottle = {
    name:'water bottle',
    hold:'water',
    color: 'yellow',
    price: 50
}

//object keys
const keys = Object.keys(bottle);
//Object values
const vlaues1 = Object.values(bottle);
const entries = Object.entries(bottle)
//seal can only modified data but now allowed delete or adding data 
// Object.seal(bottle);
//you cannot delete or modified data using freeze 
Object.freeze(bottle)
delete bottle.name

console.log(bottle);