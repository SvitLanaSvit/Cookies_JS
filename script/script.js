for (let index = 1; index <= 5; index++) {
    const checkbox = document.getElementById('checkbox' + `${index}`);
    checkbox.addEventListener('change', ()=>{
        storeNotCheckedCheckboxesInCookies();
    });
}

document.addEventListener('DOMContentLoaded', ()=>{
    updateCheckboxesFromCookies();
});

const buttonRemoveCookies = document.getElementById('buttonRemoveCookies');
buttonRemoveCookies.addEventListener('click', ()=>{
    removeNotCheckedCheckboxesCookie();
});