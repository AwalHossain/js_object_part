const bottle = {
    name:'water bottle',
    hold:'water',
    color: 'yellow',
    price: 50
}

for(const prop in bottle){
    // console.log(prop, bottle[prop]);
    // console.log(bottle.color);
}

//keys only return array
const keys = Object.keys(bottle)
for(const prop of keys){
    // console.log(prop, bottle[prop]);
}

// advanved 
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}