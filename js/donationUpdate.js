document.getElementById('noakhaliDonateBtn').addEventListener('click', (event) => {
    const currentTotalBal = parseFloat(getCurrentBalance('myTotalBalance'));
    const modal = document.getElementById('my_modal_1');
    let donatedTaka = getDonatedBalance('noakhaliDonateTaka');
    console.log(donatedTaka);
    if(donatedTaka === 'invalidInfo'){
        return;
    }else if(donatedTaka>currentTotalBal){
        alert("Current Balance Exceeded!");
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
})
