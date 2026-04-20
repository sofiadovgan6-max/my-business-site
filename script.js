let products = [
    {
        name: "Букет троянд",
        price: 500,
        image: "https://via.placeholder.com/200x150?text=Троянди"
    },
    {
        name: "Плюшевий ведмедик",
        price: 350,
        image: "https://via.placeholder.com/200x150?text=Ведмедик"
    },
    {
        name: "Коробка цукерок",
        price: 250,
        image: "https://via.placeholder.com/200x150?text=Цукерки"
    },
    {
        name: "Букет тюльпанів",
        price: 400,
        image: "https://via.placeholder.com/200x150?text=Тюльпани"
    }
];

let total = 0;
let container = document.getElementById("products");

products.forEach(product => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>${product.price} грн</p>
        <button onclick="addToCart(${product.price})">Обрати</button>
    `;

    container.appendChild(card);
});

function addToCart(price) {
    total += price;
    document.getElementById("total").innerText = "Сума: " + total + " грн";
}