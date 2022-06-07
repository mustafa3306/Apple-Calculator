let hesapyeri = document.querySelector(".buttons");
let altkisim = document.querySelector(".downside");
let ustkisim = document.querySelector(".upside");
let silme = document.querySelector(".silme")

// tek tek butonlara işlem atama
hesapyeri.addEventListener("click", (e) => {
    if(e.target.classList.contains("num")){
        altkisim.innerText += e.target.innerText; 
    }
    else if ( e.target.classList.contains("op")){
        ustkisim.innerText = altkisim.innerText + " " + e.target.innerText;
        altkisim.innerText = "";
    }
    else if (e.target == document.querySelector(".silme")){
        altkisim.innerText = ""
        ustkisim.innerText = ""
    } 
});