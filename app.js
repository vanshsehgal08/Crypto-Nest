const date = () => {

    let date_main = new Date("Jan, 30, 2024 , 10:50:58");
    // console.log(date_main);
    let current_date = new Date();
    // console.log(current_date);
    let date_day = parseInt((date_main - current_date) / 1000 / 60 / 60 / 24);
    let date_hou = parseInt((date_main - current_date) / 1000 / 60 / 60) % 24;
    let date_min = parseInt((date_main - current_date) / 1000 / 60) % 60;
    let date_sec = parseInt((date_main - current_date) / 1000) % 60;
    // console.log(date_sec);
    document.getElementsByClassName('time')[0].innerHTML = `
            <span>${date_day} <br>
            <h6>DAYS</h6>
            </span>
            <h5>:</h5>
            <span>${date_hou} <br>
                <h6>HOURS</h6>
            </span>
            <h5>:</h5>
            <span>${date_min} <br>
                <h6>MINUTES</h6>
            </span>
            <h5>:</h5>
            <span>${date_sec} <br>
                <h6>SECONDS</h6>
            </span>
    `
}

setInterval(date, 1000);



let coin_first = document.getElementById('coin_first');
let coin = document.getElementById('coin');
let btc = document.getElementById('btc');


coin.addEventListener('change', () => {
    let a = coin.value;
    coin_first.innerText = a.slice(0, 1);
    if (a === "Bitcoin") {
        btc.innerText = "BTC";
    } else if (a === "Ethereum") {
        btc.innerText = "ETH";
    } else if (a === "Tether") {
        btc.innerText = "USDT";
    } else {
        btc.innerText = "BNB";
    }
})


let gov_coins = document.getElementById('gov_coins');
let coins = document.getElementById('coins');
let gov_coinss = document.getElementById('gov_coinss');


coins.addEventListener('change', () => {
    let a = coins.value;
    gov_coins.innerText = a.slice(0, 1);
    if (a === "Dollar") {
        gov_coins.innerText = "$";
        gov_coinss.innerText = "USD";
    } else if (a === "Rupee") {
        gov_coinss.innerText = "INR";
        gov_coins.innerText = "₹";
    } else if (a === "Riyal") {
        gov_coins.innerText = "S";
        gov_coinss.innerText = "SAR";
    } else {
        gov_coins.innerText = "A";
        gov_coinss.innerText = "AED";
    }
})

let crypto = document.getElementById('crypto');
let gov = document.getElementById('gov');

let bitcoin_dollar = 19974.45;
let Ethereum_dollar = 1349.85;
let Tether_dollar = 1;
let bnb_dollar = 291.55;



crypto.addEventListener('change', () => {
    switch ("Bitcoin") {
        case coin.value:
            switch ("Dollar") {
                case coins.value:
                    gov.value = (crypto.value) * bitcoin_dollar;
                    break;
            }
            switch ("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) * (bitcoin_dollar * 81);
                    break;
            }
            switch ("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (bitcoin_dollar * 3.76);
                    break;
            }
            switch ("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (bitcoin_dollar * 3.67);
                    break;
            }
            break;
    }
})


crypto.addEventListener('change', () => {
    switch ("Ethereum") {
        case coin.value:
            switch ("Dollar") {
                case coins.value:
                    gov.value = (crypto.value) * Ethereum_dollar;
                    break;
            }
            switch ("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) * (Ethereum_dollar * 81);
                    break;
            }
            switch ("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (Ethereum_dollar * 3.76);
                    break;
            }
            switch ("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (Ethereum_dollar * 3.67);
                    break;
            }
            break;
    }
})



crypto.addEventListener('change', () => {
    switch ("Tether") {
        case coin.value:
            switch ("Dollar") {
                case coins.value:
                    gov.value = (crypto.value) * Tether_dollar;
                    break;
            }
            switch ("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) * (Tether_dollar * 81);
                    break;
            }
            switch ("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (Tether_dollar * 3.76);
                    break;
            }
            switch ("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (Tether_dollar * 3.67);
                    break;
            }
            break;
    }
})
crypto.addEventListener('change', () => {
    switch ("BNB") {
        case coin.value:
            switch ("Dollar") {
                case coins.value:
                    gov.value = (crypto.value) * bnb_dollar;
                    break;
            }
            switch ("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) * (bnb_dollar * 81);
                    break;
            }
            switch ("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (bnb_dollar * 3.76);
                    break;
            }
            switch ("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (bnb_dollar * 3.67);
                    break;
            }
            break;
    }
})