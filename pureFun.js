var tax = 20;

function Gst(productPrice){
    return productPrice * (tax/20) + productPrice;
}

console.log(Gst(20000));