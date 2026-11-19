let user = document.getElementById("userContentInput");
let userInput = "userInput";
let homeContent = document.getElementById("home");
let submitBtn = document.getElementById("submitBtn");
let searchInput = document.getElementById("searchInput");
let array = [];

let savedItems = localStorage.getItem(userInput);
if (savedItems !== null) {
    array = JSON.parse(savedItems);
    display();
}

function eliment() {
    if (user.value.trim() === "" || user.value.length < 3) {
        alert("Please enter a correct value noy null bigger than 3 ltter.");
        return;
    }else{
    let value = user.value.trim();

  
        array.push(value);
        localStorage.setItem(userInput, JSON.stringify(array));
        user.value = "";
        display();
     }    
}

function display() {
    let cartona = "";

    for (let i = 0; i < array.length; i++) {
        cartona += `<div id="homeContent${i}" class="home-item mb-2 rounded-pill text-dark mx-auto w-50 bg-danger d-flex justify-content-between align-items-center">
            <p id="itemContent${i}" class="m-0 p-0">Content: ${array[i]}</p>
            <i class="fa-sharp fa-solid fa-trash" onclick="deleteItem(${i})"></i>
        </div>`;
    }

    homeContent.innerHTML = cartona;
}


function deleteItem(ind) {
    array.splice(ind, 1);
    localStorage.setItem(userInput, JSON.stringify(array));
    display();
}


if (submitBtn) {
    submitBtn.addEventListener("click", eliment);
}
display();

searchInput.addEventListener("input", function (e) {
    searchitem(e.target.value);
 

});

function searchitem() {
    let cartona = "";

    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().includes(searchInput.value.toLowerCase())) {
            
        cartona += `<div id="homeContent${i}" class="home-item mb-2 rounded-pill text-dark mx-auto w-50 bg-danger d-flex justify-content-between align-items-center">
            <p id="itemContent${i}" class="m-0 p-0">Content: ${array[i]}</p>
            <i class="fa-sharp fa-solid fa-trash" onclick="deleteItem(${i})"></i>
        </div>`;
      }
    }

    homeContent.innerHTML = cartona;
}
