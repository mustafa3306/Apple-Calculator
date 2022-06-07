let hesapyeri = document.querySelector(".buttons");
let altkisim = document.querySelector(".downside");
let ustkisim = document.querySelector(".upside");
let silme = document.querySelector(".silme");

hesapyeri.addEventListener("click", (e) => {
    if(e.target.classList.contains("num")){
        altkisim.innerHTML += e.target.innerHTML; 
    }
    else if (e.target.classList.contains("op")){
        ustkisim.innerHTML = altkisim.innerHTML + " " + e.target.innerHTML;
        altkisim.innerHTML = "";
    }
    else if (e.target == document.querySelector(".silme")){
        altkisim.innerHTML = ""
        ustkisim.innerHTML = ""
    }
    else if (e.target == document.querySelector(".percent")){
        altkisim.innerHTML = parseFloat(altkisim.innerHTML)/100;
    }
    else if (e.target == document.querySelector(".changer")){
        altkisim.innerHTML = -altkisim.innerHTML
    }
    else if (e.target == document.querySelector(".equal")){
        equal();   
    }
    
});

function equal() {
    if (ustkisim.innerHTML.slice(-1) == "÷"){
        altkisim.innerHTML = (ustkisim.innerHTML.slice(0, -1) / altkisim.innerHTML).toFixed(4);
    }
    else if (ustkisim.innerHTML.slice(-1) == "x"){
        altkisim.innerHTML = (ustkisim.innerHTML.slice(0, -1) * altkisim.innerHTML).toFixed(4);
    }
    else if (ustkisim.innerHTML.slice(-1) == "-"){
        altkisim.innerHTML = ustkisim.innerHTML.slice(0, -1) - altkisim.innerHTML;
    }
    else if (ustkisim.innerHTML.slice(-1) == "+"){
        altkisim.innerHTML = parseFloat(ustkisim.innerHTML.slice(0, -1)) + parseFloat(altkisim.innerHTML);
    }    
}
