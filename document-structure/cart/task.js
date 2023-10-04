const products = document.querySelectorAll('.product');
const decMinus = document.querySelectorAll('.product__quantity-control_dec');
const decPlus = document.querySelectorAll('.product__quantity-control_inc');
const numberProduct = document.querySelectorAll('.product__quantity-value');
const buttonProduct = document.querySelectorAll('.product__add');
const cartProduct = [];




decMinus.forEach((minus, index) => {

    minus.addEventListener('click', () => {
        let number = parseInt(numberProduct[index].textContent); 
        
        if(number === 1){
            numberProduct[index].textContent = 1;
        } else {
             number -= 1;
            numberProduct[index].textContent = number;
        }
    });
});

decPlus.forEach((plus, index) => { 
    plus.addEventListener('click', () => {
        let number = parseInt(numberProduct[index].textContent);
        number += 1;
        numberProduct[index].textContent = number;
    });
});

buttonProduct.forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = products[index];
        const productId = product.dataset.id;
        const productImage = product.querySelector('.product__image').getAttribute('src');
        const quantityNumber = parseInt(numberProduct[index].textContent);

        const idCartProduct = cartProduct.findIndex(item => item.id === productId);
        if (idCartProduct !== -1) {
            cartProduct[idCartProduct].quantity += quantityNumber;
        } else {
            const objProduct = {
                id: productId,
                image: productImage,
                quantity: quantityNumber,
            };
            cartProduct.push(objProduct);
        }
        console.log(cartProduct);
        renderCartItems();
    });
});

function renderCartItems() {
    const cartContainer = document.querySelector('.cart__products');
    cartContainer.innerHTML = '';
    cartProduct.forEach(item => {
        const cartProductElement = document.createElement('div');
        cartProductElement.classList.add('cart__product');
        cartProductElement.dataset.id = item.id;

        const productImage = document.createElement('img');
        productImage.classList.add('cart__product-image');
        productImage.src = item.image;
        cartProductElement.appendChild(productImage);


        const productCount = document.createElement('div');
        productCount.classList.add('cart__product-count');
        productCount.textContent = item.quantity;
        cartProductElement.appendChild(productCount);
        cartContainer.appendChild(cartProductElement);

    });
}