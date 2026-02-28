let cartcnt = document.getElementById("cartcnt")

let cartData = JSON.parse(localStorage.getItem("cart")) || []

function displayCart(arr){

    if(arr.length === 0){
        cartcnt.innerHTML = `
            <div class="empty-cart">
                <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="">
                <h2>Your Cart Looks Empty 🛒</h2>
                <p>Looks like you haven’t added anything yet.</p>
                <button onclick="goToHome()">Continue Shopping</button>
            </div>
        `
        return
    }

    let input = ""
    let total = 0

    arr.forEach((val)=>{

       val.quantity = val.quantity || 1
total += val.price * val.quantity

        input += `
            <div class="card" style = "height: fit-content; margin-bottom: 20px;">
                <div class="productimgcnt">
                    <img src="${val.image}">
                </div>

                <div class="heading">
                    <p><b>${val.title}</b></p>
                </div>

                <div class="rate" style = "font-size:large; font-weight: 600;">
                    ₹${val.price}
                </div>

                <div class="quantity-section">
                    <button style="background-color: navy; color: white; font-size: x-larger; font-weight: 600; border: none; outline: none; border-radius: 5px" onclick="decreaseQty(${val.id})">-</button>
                    <span>${val.quantity}</span>
                    <button style="background-color: navy; font-weight: 600; color: white; border: none; outline: none; border-radius: 5px" onclick="increaseQty(${val.id})">+</button>
                </div>

                <div class="cartbtn" >
                    <button style = "background-color: rgb(151, 14, 14);" onclick="removeItem(${val.id})">
                        Remove
                    </button>
                </div>
            </div>
        `
    })

    // TOTAL SECTION
    input += `
        <div class="total-section">
            <h2>Total Amount: ₹${total.toFixed(2)}</h2>
            <button onclick="buyNow()">Buy Now</button>
        </div>
    `

    cartcnt.innerHTML = input
}

displayCart(cartData)

function removeItem(id){

    // remove product from array
    cartData = cartData.filter((val)=>{
        return val.id != id
    })

    // update localStorage
    localStorage.setItem("cart", JSON.stringify(cartData))

    // re-render UI
    displayCart(cartData)
}
function increaseQty(id){
    cartData = cartData.map((val)=>{
        if(val.id == id){
            val.quantity += 1
        }
        return val
    })

    localStorage.setItem("cart", JSON.stringify(cartData))
    displayCart(cartData)
}

function decreaseQty(id){
    cartData = cartData.map((val)=>{
        if(val.id == id && val.quantity > 1){
            val.quantity -= 1
        }
        return val
    })

    localStorage.setItem("cart", JSON.stringify(cartData))
    displayCart(cartData)
}

function buyNow(){
    alert("🎉 Order Confirmed! Thank you for shopping.")
    localStorage.removeItem("cart")
    cartData = []
    displayCart(cartData)
}
function goToHome(){
    window.location.href = "home.html"  
}