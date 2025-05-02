const product = document.querySelector(".latest-watch-wrapper")

function getProduct(){
    fetch("https://dummyjson.com/products")
    .then((res)=>{
        res.json()
                .then((data)=>{
                    setProduct(data.products);
                })
    })
}
function setProduct(array){

    for(let i = 0; i < array.length; i++){
        product.innerHTML += ` <div class="latest-watch">
                        <img src="${array[i].images[0]}" alt="">
                        <h4>${array[i].title}</h4>
                        <span class="horizontal">${array[i].price}</span><span>$255.00
                        </span>
                    </div>`
    }
}
getProduct()