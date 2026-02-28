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


    let product_arr = []

let fetchData = async (url)=>{
    let a = await fetch(url)
    try{
        let data = await a.json()
        product_arr= await data
        console.log(product_arr)
        displayData(product_arr)
    }
    catch(err){
        console.log(err)

    }
}
fetchData("https://fakestoreapi.com/products")

let productscnt = document.getElementById("productscnt")

function displayData(arr){
    let input = ""

    arr.map((val)=>{
        input += `
        <div class="card" onclick="details(${val.id})">
            <div class="productimgcnt">
                <img src="${val.image}" alt="">
            </div>

            <div class="heading">
                <p><b>${val.title}</b></p>
            </div>

            <div class="rate">
                <h3>₹${val.price}</h3>
            </div>

            <div class="rating">
                <span class="star">⭐⭐⭐⭐⭐</span>
                <span class="value">${val.rating.rate}</span>
            </div>

            <div class="cartbtn">
                <button onclick="event.stopPropagation(); getId(${val.id})">
                    Add to cart
                </button>
            </div>

        </div>
        `
    })

    productscnt.innerHTML = input
}


// logic search box
let search = document.getElementById("search")
search.addEventListener("input",(e)=>{
    // console.log(e.target.value)
    let uInput = e.target.value;
    //  console.log(product_arr)
   let result =  product_arr.filter((val)=>{
        return val.title.toUpperCase().includes(uInput.toUpperCase())
    })
    console.log(result)
    displayData(result)

})


//to see details of product
function details(b){
    console.log(product_arr)   // check this
    let viewdetails = product_arr.find((val)=>val.id == b)
    console.log(viewdetails)   // check this

    localStorage.setItem("key", JSON.stringify(viewdetails))

     window.location.href = "productdetails.html"
}


// to add product in cart


function getId(id){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let single_obj = product_arr.find((val)=> val.id == id);

    let matchingProduct = cart.find((val)=> val.id == id);

    if (matchingProduct) {
        // Instead of increasing quantity, just alert
        alert("Product already in cart");
    } else {
        // Add product with quantity 1
        cart.push({
            ...single_obj,
            quantity: 1
        });
        alert("Product added in cart");
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
}
function goToCart(){
    window.location.href = "cart.html"
}

// bag number update
function updateCartCount(){
    let cart = JSON.parse(localStorage.getItem("cart")) || []

    let totalCount = 0

    cart.forEach((item)=>{
        totalCount += item.quantity || 1
    })

    document.getElementById("cart-count").innerText = totalCount
}

