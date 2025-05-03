// fetch("https://jsonplaceholder.typicode.com/users")
// .then(mars => mars.json())
// .then(marsKeldi =>{
//     console.log(marsKeldi);
//     marsKeldi.map(Element =>{
//         const title = document.createElement("h1")
//         title.innerHTML = `Ismi: ${Element.name}`
//         document.body.appendChild(title)
//     });
// }) .catch( eror => console.log("fail"))

// const wrapper = document.querySelector(".ota");
// const userForm = document.querySelector("#form");
// const userInput = document.querySelector("#input");
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(mars => mars.json())


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(mars => mars.json())
// .then(marsKeldi =>{
//     console.log(marsKeldi);
// }) 


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(mars => mars.json())
// .then(marsKeldi =>{
//     marsKeldi.map(element => {
//         const title = document.createElement("h1")
//         title.innerHTML = Ismi:${element.name}
//         document.body.appendChild(title)
//     });
// }) .catch(error => console.log("Xato"))


// const wrapper = document.querySelector(".ota");
// const userForm = document.querySelector("#form");
// const userInput = document.querySelector("#input");
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(mars => mars.json())
// .then(marsKeldi => {
//     marsKeldi.map(element => {
//         const newLi = document.createElement("li")
//         newLi.innerHTML = 
//         `
//         <h1>Ismi: ${element.name}</h1>
//         <h3>Username: ${element.username}</h3>
//         <p>Manzil: ${element.address.street}</p>
//         <p>Email: ${element.email}</p>
//         `
//         wrapper.appendChild(newLi)
//     })
// })


// const wrapper = document.querySelector(".ota");

// let allUsers = [];

// fetch("https://fakestoreapi.com/products?limit=10")
// .then(mars => mars.json())
// .then(marsKeldi => {
//     allUsers = marsKeldi;
//     displayUsers(allUsers);
// })
// .catch(error => console.error("Xatolik yuz berdi:", error));

// function displayUsers(users) {
//     wrapper.innerHTML = "";
//     users.forEach(element => {
//         const newLi = document.createElement("li");
//         newLi.innerHTML = 
//         `
//          <div class="iimg">
//          <img class="image" src="${element.image}"></img>
//          </div>
//         <h1 style="color:black;">${element.title}</h1>
//         <p class="pii">${element.description}</p>
//         <div class="shit">
//         <h3 style="color:green;">$${element.price}</h3>
//         <button type="button" id="button" onclick="">Sotib olish</button>
//         </div>
//         `;
//         wrapper.appendChild(newLi);
//     });
// }

const wrapper = document.querySelector(".ota");
const cartItems = document.querySelector("#cart-items");
const totalDisplay = document.querySelector("#total");

let allUsers = [];
let total = 0;

fetch("https://fakestoreapi.com/products?limit=10")
  .then(mars => mars.json())
  .then(marsKeldi => {
    allUsers = marsKeldi;
    displayUsers(allUsers);
  })
  .catch(error => console.error("Xatolik yuz berdi:", error));

function displayUsers(users) {
  wrapper.innerHTML = "";
  users.forEach(element => {
    const newLi = document.createElement("li");
    newLi.innerHTML = `
      <div class="iimg">
        <img class="image" src="${element.image}" />
      </div>
      <h1 style="color:black;">${element.title}</h1>
      <p class="pii">${element.description}</p>
      <div class="shit">
        <h3 style="color:green;">$${element.price}</h3>
        <button type="button" class="buy-btn">Sotib olish</button>
      </div>
    `;
    const button = newLi.querySelector(".buy-btn");
    button.addEventListener("click", () => {
      alert("Mahsulot savatga qo‘shildi!");
      const cartItem = document.createElement("li");
      cartItem.textContent = `${element.title}`;
      cartItems.appendChild(cartItem);
      total += element.price;
      totalDisplay.textContent = total.toFixed(2);
    });
    wrapper.appendChild(newLi);
  });
}


