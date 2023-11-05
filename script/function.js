function updateCheckboxesFromCookies(){
    const cookies = document.cookie.split(';');
    let storedCheckboxStates = [];

    for (const cookie of cookies) {
        const parts = cookie.split('=');
        if (parts[0].trim() === 'notCheckedCheckboxes') {
            storedCheckboxStates = JSON.parse(parts[1]);
            break;
        }
    }

    storedCheckboxStates.forEach((checkboxId) => {
        const checkbox = document.getElementById(checkboxId);
        if (checkbox) {
            checkbox.checked = false; // Uncheck the checkbox
        }
    });
}

function storeNotCheckedCheckboxesInCookies(){
    const chechBoxStates = [];

    for (let index = 1; index <= 5; index++) {
        const checkbox = document.getElementById('checkbox' + `${index}`);
        if(!checkbox.checked){
            chechBoxStates.push('checkbox' + `${index}`);
        }
    }

    const expirationDate = new Date("Thu, 31 Dec 2099 23:59:59 UTC");
    document.cookie = 'notCheckedCheckboxes=' + `${JSON.stringify(chechBoxStates)}` + '; expires=' + `${expirationDate}` + '; path=/';
}

function removeNotCheckedCheckboxesCookie() {
    // Set the cookie's 'expires' attribute to a past date
    const pastDate = new Date("Thu, 01 Jan 1970 00:00:00 UTC");
    document.cookie = 'notCheckedCheckboxes=; expires=' + pastDate + '; path=/';
    location.reload(); //update page
}