// Handlevogn
function addToCart() {
    const quantity = document.getElementById('quantity').value;
    alert(`Du har lagt til ${quantity} produkt(er) i handlekurven!`);
}

// Eks Kjøp mld
function buyNow() {
    const quantity = document.getElementById('quantity').value;
    alert(`Ingen betalings måte lagdt til nettsiden`);
}


function openInNewTab(url) {
    window.open("https://www.w3schools.com");
}
