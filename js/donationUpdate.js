document.getElementById('noakhaliDonateBtn').addEventListener('click', (event) => {
    const currentTotalBal = parseFloat(getCurrentBalance('myTotalBalance'));
    const modal = document.getElementById('my_modal_1');
    let donatedTaka = getDonatedBalance('noakhaliDonateTaka');
    if(donatedTaka === 'invalidInfo'){
        return;
    }else if(donatedTaka>currentTotalBal || donatedTaka<0){
        alert("Invalid Donation!");
    }else {
        donatedTaka = parseFloat(donatedTaka);
        const remainedTaka = currentTotalBal - donatedTaka;
        document.getElementById('myTotalBalance').innerText = remainedTaka;
        const updatedTotal = parseFloat(getCurrentBalance('noakhaliDonation')) + donatedTaka;
        document.getElementById('noakhaliDonation').innerText = updatedTotal;
        modal.showModal();
        document.getElementById('closeModalBtn').addEventListener('click', () => {
            modal.close();
        });
        updateHistory('nokhaliDonationText', donatedTaka);
    }
});


document.getElementById('historyBtn').addEventListener('click', () => {
    document.getElementById('donationSection').setAttribute('hidden', true);
    document.getElementById('historySection').removeAttribute('hidden', true);
    document.getElementById('historyBtn').classList.add('primaryBtnColor');
    document.getElementById('donationBtn').classList.remove('primaryBtnColor');
});


document.getElementById('donationBtn').addEventListener('click', () => {
    document.getElementById('historySection').setAttribute('hidden', true);
    document.getElementById('donationSection').removeAttribute('hidden', true);
    document.getElementById('historyBtn').classList.remove('primaryBtnColor');
    document.getElementById('donationBtn').classList.add('primaryBtnColor');
});

document.getElementById('blogBtnUp').addEventListener('click', () => {
    window.location.href = '/blog.html';
});