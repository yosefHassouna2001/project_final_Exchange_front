let buy = document.querySelector('.buy');
let sale = document.querySelector('.sale');


buy.onclick = _ => {
        buy.classList.add("buy");
        buy.style.background = "var(--primaryColor)";
        sale.style.background = "";


    } 

    sale.onclick = _ => {
        sale.classList.add("sale");
        sale.style.background = "var(--primaryColor)";
        buy.style.background = "";


    } 





    buy.onmouseover = _ => {
        // buy.style.background = "gold";
    }








