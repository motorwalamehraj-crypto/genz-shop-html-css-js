let men = document.getElementById("men")

let women = document.getElementById("women")

let kids = document.getElementById("kids")

let beauty = document.getElementById("beauty")

let cnt = document.getElementById("cnt")

men.addEventListener("mouseover",()=>{

    cnt.innerHTML = `
    
      <div class="headbox first">
            <h4>Top wear</h4>
            <p>Tshirt</p>
            <p>Casual Tshirt</p>
            <p>Sweatshirt</p>
            <p>Formal Shirt</p>
        </div>
        <div class="headbox first">
            <h4>Bottom wear</h4>
            <p>Jeans</p>
            <p>Trouser</p>
            <p>Shorts</p>
            <p>Track pants</p>
        </div>
        <div class="headbox first">
            <h4>Foot wear</h4>
            <p>Shoes</p>
            <p>Socks</p>
            <p>Boots</p>
            <p>Formal shoes</p>
        </div>
        <div class="headbox first">
            <h4>Indian Festive wear</h4>
            <p>Kurta and Kurta set </p>
            <p>Sherwani</p>
            <p>Nehru Jacket</p>
            <p>Dhoti</p>
        </div>
        <div class="headbox first">
            <h4>Inner wear</h4>
            <p>Breifs</p>
            <p>Boxers</p>
        </div>
    
    `





    cnt.style.visibility = "visible"
     cnt.style.boxShadow="2px 0px 2px 2px rgb(255, 40, 40) "


   
})

women.addEventListener("mouseover",()=>{
    cnt.innerHTML=`
    
         <div class="headbox second" >
            <h4>Indian wear</h4>
            <p>Kurti</p>
            <p>Suit</p>
            <p>Saree</p>
            <p>Jackets</p>
        </div>
        <div class="headbox second">
            <h4>Western wear</h4>
            <p>Jeans</p>
            <p>Top</p>
            <p>Shorts</p>
            <p>Skirts</p>
        </div>
        <div class="headbox second">
            <h4>Foot wear</h4>
            <p>Flats</p>
            <p>Heels</p>
            <p>Boots</p>
            <p>Floaters</p>
        </div>
        <div class="headbox second">
            <h4>Jewellery</h4>
            <p>Necklace </p>
            <p>Ring</p>
            <p>Bangles</p>
            <p>Earrings</p>
        </div>
        <div class="headbox second">
            <h4>Sports</h4>
            <p>Swim-suit</p>
            <p>Accessories</p>
        </div>

    `

    cnt.style.visibility="visible"
    cnt.style.boxShadow="2px 0px 2px 2px rgb(253, 77, 206) "
})

kids.addEventListener("mouseover",()=>{
    cnt.innerHTML = `
    
         <div class="headbox third" >
            <h4>Boys</h4>
            <p>Tshirt</p>
            <p>Shirt</p>
            <p>Jeans</p>
            <p>Party wear</p>
        </div>
        <div class="headbox third">
            <h4>Girls</h4>
            <p>Top</p>
            <p>Skirt</p>
            <p>Lehenga</p>
            <p>Jeans</p>
        </div>
        <div class="headbox third">
            <h4>Foot wear</h4>
            <p>Shoes</p>
            <p>Socks</p>
            <p>Sandal</p>
            <p>Flip-flops</p>
        </div>
        <div class="headbox third">
            <h4>Accessories</h4>
            <p>Bag</p>
            <p>Watch</p>
            <p>Sunglasses</p>
            <p>Hats</p>
        </div>
        <div class="headbox third">
            <h4>Infants</h4>
            <p>Bottom wear</p>
            <p>Winter wear</p>
        </div>
    
    `

    cnt.style.visibility="visible"
      cnt.style.boxShadow="2px 0px 2px 2px rgb(60, 60, 255) "
})

beauty.addEventListener("mouseover",()=>{
    cnt.innerHTML=`
    
      <div class="headbox fourth" >
            <h4>Makeup</h4>
            <p>Lipstick</p>
            <p>Lipgloss</p>
            <p>Kajal</p>
            <p>Mascara</p>
        </div>
        <div class="headbox fourth">
            <h4>Haircare</h4>
            <p>Shampoo</p>
            <p>Conditioner</p>
            <p>Hair color</p>
            <p>Hair gel</p>
        </div>
        <div class="headbox fourth">
            <h4>Skincare</h4>
            <p>Cream</p>
            <p>Serum</p>
            <p>Mask</p>
            <p>Moisturizer</p>
        </div>
        <div class="headbox fourth">
            <h4>Fragnances</h4>
            <p>Perfume</p>
            <p>Deodarant</p>
            <p>Bakhoor</p>
            <p>Body mist</p>
        </div>
        <div class="headbox fourth">
            <h4>Men's grooming</h4>
            <p>Trimmer</p>
            <p>Beard oil</p>
        </div>
    
    `

    cnt.style.visibility="visible"
     cnt.style.boxShadow="2px 0px 2px 2px rgb(77, 224, 180) "
})
cnt.addEventListener("mouseleave",()=>{
    cnt.style.visibility="hidden"
})


let detailscnt = document.getElementById("detailscnt")

let product_data = localStorage.getItem("key")

let parse = JSON.parse(product_data)

detailscnt.innerHTML = `
<div class="detailcard">
    <div class="left">
        <img src="${parse.image}" alt="">
    </div>

    <div class="right">
        <h2>${parse.title}</h2>

        <div class="right_rate">₹${parse.price}</div>
        <div class="right_rating">⭐⭐⭐⭐⭐ ${parse.rating.rate}</div>
        <div class="right_descr">${parse.description}</div>
        <div class="rightbtn">
            <button class="cartbtn2" onclick="addToCart(${parse.id})">
                Add to cart
            </button>
            <button class="buybtn">Buy now</button>
        </div>
    </div>
</div>
`
function goToCart(){
    window.location.href = "cart.html"
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id){
    let product = JSON.parse(localStorage.getItem("key"))

    let matching = cart.find((val)=> val.id == id)

    if(matching){
        alert("Product already in cart")
    } else {
        cart.push(product)
        localStorage.setItem("cart", JSON.stringify(cart))
        alert("Product added to cart")
    }
}