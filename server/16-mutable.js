const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex=products.findIndex(item=>item.id==='🍕');
if(productIndex !== -1){
    //aqui estamos mutando con push y splice el array original
    myProducts.push(products[productIndex]);
    products.splice(productIndex,1)
}

console.log("myProducts", myProducts);
console.log("products", products);

//update
const products2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const update = {
    id:"🥞",
    changes: {
        price: 200,
        description:'delicioso'
    }
}

const productIndex2=products2.findIndex(item=>item.id===update.id);
products2[productIndex2]={
    ...products2[productIndex2],
    ...update.changes,
}
console.log(products2);