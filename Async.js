// Async code
// console.log("start");
// setTimeout(()=>{
//     console.log("this program is done");
// },4000);
// console.log("end");

// CALL BACK CONCEPS 


// console.log("start");

// function getData(id, callback){
//     setTimeout(()=>{
//         console.log("this program is done");
//         callback({ items: [1,2,3,4,5]}) 
//     },4000);
// }
// const items = getData(1, items =>{
//     console.log(items); // this is running before getData items array
// });

// console.log("end");

// PROMISE - IT IS OBJECT AND TWO VALUES -> IF async is true we have result ELSE if async is fail false


const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data receiving");
        // resolve({data: "John"})
        reject("this is error message");
    }, 5000);
});

promise.then(result=>{
    console.log(result);
}).catch(error =>{
    console.log(error)
})


