const dogResult = document.getElementById('dog-result');
const dogButton = document.getElementById('dogButton');

dogButton.addEventListener('click', getRandomDog);

function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            dogResult.innerHTML = `<img src="${data.fileSizeBytes}"`
        });
}

