const dogResult = document.getElementById("dog-result");
const dogButton = document.getElementById("dogButton");

dogButton.addEventListener("click", getRandomDog);

function getRandomDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            dogResult.innerHTML = `<img src="${data.message}"/>`;
        });
    }
