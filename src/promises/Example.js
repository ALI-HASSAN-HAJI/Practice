// import React from "react";


// // EXAMPLE OF PROMISES:
// let p = new Promise((resolve, reject) => {
//     let a = 1 + 12
//     if(a == 2) {
//         resolve('success')
//     }else {
//         reject('Failed')
//     }
// })

// p.then((message) => {
//     console.log('This is in then  ' + message);
// }).catch((message) => {
//     console.log('This is in the catch ' + message);
// })

// // example 2
// let condition = true;
// const testPromises = new Promise( (resolve, reject) => {
//     if(condition) {
//         resolve("Beauty")
//     }else {
//         reject("ugly")
//     }
// })
// testPromises.then((successMessage) => {
//     console.log('successMesssage')
// }).catch((error) => console.log(error));


// // HOW TO FETCH DATA EXAMPLE:
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then( (response) => {
//     return response.json();
// }).then(data => {
//     console.log(data)
// }).catch( err => console.log(err));


// // EXAMPLES OF ASYNC AND A WAIT:
// const getData = async () => {
//     const request = await fetch('https://jsonplaceholder.typicode.com/comments');
//     const response = await request.json();

//     return response;
// }

// getData().then( data => {
//     console.log(data);
// }).catch( (err) => console.error(err));


// // EXAMPLE:
// const posts = [
//     // {title: 'Post one', body: 'This is post one'},
//     // {title: 'Post two', body: 'This is post two'}
// ];

// function getPosts() {
//     setTimeout( () => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output+= `<li>${post.title} ${post.body}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 4000)
// }

// getPosts();





// const Example = () => {
//    return (
//     <div>
//         <h1>Hi All:</h1>
//     </div>
//    )
// }


