const params = new URLSearchParams(location.search);
const box = document.querySelector(".box");

function getProductWithId(id){
    fetch(`https://dummyjson.com/products/${id}`)
    .then((res)=>{
        res.json()
                .then((data)=>{
                    box.innerHTML = `
                    <img class="product-img" src="${data.images[0]}" alt="">
                    <h4>${data.title}</h4>
                    <span class="horizontal">${data.price}</span><span>$255.00
                    </span>
                    <p>${data.description}</p>
                    <br>`
                })
    })
}
window.onload = () => {
    const id = params.get("id");
    getProductWithId(id);
}