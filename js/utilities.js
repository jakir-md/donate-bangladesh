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

function updateHistory(id, taka){
    const div = document.createElement('div');
    div.classList.add('border', 'rounded-lg', 'px-3', 'py-2', 'my-3');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    p.classList.add('py-2');
    const getText = document.getElementById(id).innerText;
    h2.innerText = `${taka}`+' Taka is Donated for '+getText;
    const newTime = (new Date()).toString();
    div.appendChild(h2);
    p.innerText = 'Date: ' + newTime;
    div.appendChild(p);
    document.getElementById('historySection').appendChild(div);
}
