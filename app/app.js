let hesapyeri = document.querySelector(".buttons");
let altkisim = document.querySelector(".downside")
let ustkisim = document.querySelector(".upside")

// sayıların seçimi
hesapyeri.addEventListener("click", (e) => {
    if(e.target.classList.contains("num")){
        console.log(e.target.innerText);
        altkisim.innerText = e.target.innerText;
        ustkisim.innerText = "burhan"    
    } 
});