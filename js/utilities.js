function getCurrentBalance(id){
    return currentAmount = document.getElementById(id).innerText;
}


function getDonatedBalance(id){
    const donatedTaka = document.getElementById(id).value;
    if(!isNaN(donatedTaka) && donatedTaka !== ' ' && donatedTaka !== ''){
        return donatedTaka;
    }else {
        alert("Please Enter Valid Information!");
        return "invalidInfo";
    }
}
