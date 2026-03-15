function addCart(){

alert("Product added to cart");

}

function buyNow(){

alert("Redirecting to checkout");

}

const reviews=[

"⭐⭐⭐⭐⭐ Amazing fragrance",

"⭐⭐⭐⭐⭐ Very soft on skin",

"⭐⭐⭐⭐⭐ Premium quality soap",

"⭐⭐⭐⭐⭐ Natural herbal smell",

"⭐⭐⭐⭐⭐ Loved the sandalwood fragrance"

];

let reviewHTML="";

for(let i=0;i<reviews.length;i++){

reviewHTML+="<p>"+reviews[i]+"</p>";

}

document.getElementById("reviews").innerHTML=reviewHTML;
