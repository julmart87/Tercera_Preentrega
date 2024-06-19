const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "class-card";
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.marca}</h3>
        <h4>${product.modelo}</h4>
        <p class="class-precio">$ ${product.precio} dolares</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "class-comprar"
    content.append(comprar);

    comprar.addEventListener("click",() => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        
        if (repeat) {
            carrito.map((pro) => {
                if (pro.id === product.id) {
                    pro.cantidad++;
                };
            });
        } else {
            carrito.push({
                id: product.id,
                img : product.img,
                marca : product.marca,
                modelo : product.modelo,
                precio : product.precio,
                cantidad : product.cantidad,
            });
        };
        carritoContador();
        save();
    });
});

//* LocalStorage
const save = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};




