function calculateTotal() {
    const total = parseInt(document.getElementById('base-price').innerText) + parseInt(document.getElementById('memory-price').innerText) + parseInt(document.getElementById('storage-price').innerText) + parseInt(document.getElementById('delivery-price').innerText);
    return total;
}

function featurePrice(product, price) {
    document.getElementById(product + '-price').innerText = price;
    const total = calculateTotal();
    document.getElementById('total-price').innerText = total;
    document.getElementById('final-price').innerText = total;

}


document.getElementById('memory-regular').addEventListener('click', function () {
    featurePrice('memory', 0);
});

document.getElementById('memory-standard').addEventListener('click', function () {

    featurePrice('memory', 180);
});

document.getElementById('storage-regular').addEventListener('click', function () {
    featurePrice('storage', 0);
});

document.getElementById('storage-standard').addEventListener('click', function () {
    featurePrice('storage', 100);
});

document.getElementById('storage-special').addEventListener('click', function () {
    featurePrice('storage', 180);
});

document.getElementById('delivery-regular').addEventListener('click', function () {
    featurePrice('delivery', 0);
});

document.getElementById('delivery-standard').addEventListener('click', function () {
    featurePrice('delivery', 20);
});