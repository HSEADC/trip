function shuffle(array) {
    var currentIndex = array.length,
        randomIndex;

    while (0 != currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
}

let currentAngle = 0;
let results = []; 

function spinWheel() {
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";

    let Klin = shuffle([1890, 2250, 2610]);
    let Tarusa = shuffle([1890, 2210, 2570]);
    let Podolsk = shuffle([1770, 2130, 2490]);
    let Shatura = shuffle([1910, 2170, 2530]);
    let Ivanovo = shuffle([1750, 2110, 2470]);
    let Kostroma = shuffle([1750, 2110, 2470]);


    let newResults = shuffle([
        Klin[0],
        Tarusa[0],
        Podolsk[0],
        Shatura[0],
        Ivanovo[0],
        Kostroma[0],
    ]);

    results = results.concat(newResults); 
    if (Klin.includes(newResults[0])) SelectedItem = "Клин";
    if (Tarusa.includes(newResults[0])) SelectedItem = "Таруса";
    if (Podolsk.includes(newResults[0])) SelectedItem = "Подольск";
    if (Shatura.includes(newResults[0])) SelectedItem = "Шатура";
    if (Ivanovo.includes(newResults[0])) SelectedItem = "Иваново";
    if (Kostroma.includes(newResults[0])) SelectedItem = "Кострома";


    let rotationAngle = currentAngle + newResults[0]; 

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + rotationAngle + "deg)";
    element.classList.remove("animate");
    setTimeout(function () {
        element.classList.add("animate");
        setTimeout(function () {
            // alert
        });
    }, 100); 

    currentAngle = rotationAngle; 
}