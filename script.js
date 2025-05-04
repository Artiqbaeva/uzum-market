const product = document.querySelector(".latest-watch-wrapper")
const skeletonEl = document.querySelector(".skeleton")
const wrapperEl = document.querySelector(".wrapper")
const seeMore = document.querySelector(".btn-seemore")
let limitEl = 10;

window.onload = () => {
    getProduct()
}

function getProduct(){
    renderSkeleton(8);
    fetch(`https://dummyjson.com/products?limit=${limitEl}`)
    .then((res)=>{
        res.json()
                .then((data)=>{
                    setProduct(data.products);
                })
    })
}
function setProduct(array){
    skeletonEl.innerHTML = "";

    for(let i = 0; i < array.length; i++){
        let latestWatch = document.createElement("div");
        latestWatch.className = "latest-watch";
        latestWatch.innerHTML = `
                        <img class="product-img" src="${array[i].images[0]}" alt="">
                        <h4>${array[i].title}</h4>
                        <span class="horizontal">${array[i].price}</span><span>$255.00
                        </span>
                        <br>`
        latestWatch.dataset.id = array[i].id;

        product.appendChild(latestWatch);
        
    }
}
function renderSkeleton(count){
    const fragment = document.createDocumentFragment()
    Array(count).fill("").forEach(()=>{
        let skeletonItem = document.createElement("div")
        skeletonItem.className = "skeleton__item"
        skeletonItem.innerHTML = `
            <div class="skeleton__image skeleton__animation "></div>
            <div class="skeleton__text skeleton__animation"></div>
            <div class="skeleton__text skeleton__animation"></div>
        `
        fragment.appendChild(skeletonItem)
    })
    skeletonEl.appendChild(fragment)
}


product.addEventListener("click", (e)=>{
    if(e.target.className == "product-img"){
        const id = e.target.closest(".latest-watch").dataset.id;
        open(`/product.html?id=${id}`,"_self");
    }
})

seeMore.addEventListener('click', (e) => {
    limitEl += 10;
    product.innerHTML = null;
    getProduct();
})
