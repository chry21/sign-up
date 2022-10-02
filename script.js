let psw = document.getElementById("psw");
let confPsw = document.getElementById("conf-psw")

function verifyPassword() {
    if(psw.value === confPsw.value) {
        
        return true;
    }
    alert("Le password non corrispondono. Riprovare")
    return false;
} 

