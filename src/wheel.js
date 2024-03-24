// import './games.css'
// function shuffle(array) {
//     var currentIndex = array.length,
//     randomIndex; 

//     while(0 != currentIndex){
//         randomIndex = Math.floor(Math.random()* currentIndex);
//         currentIndex--;
//         [array[currentIndex], array[randomIndex]] = [
//             array[currentIndex],
//             array[randomIndex],
//         ]
//     }
//     return array;
// }

// function spinWheel() {
//     const box = document.getElementById("box");
//     const element = document.getElementById("mainbox");
//     let SelectedItem = "";

//     let Klin = shuffle([1890, 2250, 2610]);
//     let Tarusa = shuffle([1890, 2210, 2570]);
//     let Podolsk = shuffle([1770, 2130, 2490]);
//     let Shatura = shuffle([1910, 2170, 2530]);
//     let Ivanovo = shuffle([1750, 2110, 2470]);

//     let results = shuffle([
//         Klin[0],
//         Tarusa[0],
//         Podolsk[0],
//         Shatura[0],
//         Ivanovo[0],
//     ]);

//     if (Klin.includes(results[0])) SelectedItem = "Клин";
//     if (Tarusa.includes(results[0])) SelectedItem = "Таруса";
//     if (Podolsk.includes(results[0])) SelectedItem = "Подольск";
//     if (Shatura.includes(results[0])) SelectedItem = "Шатура";
//     if (Ivanovo.includes(results[0])) SelectedItem = "Иваново";

//     box.style.setProperty("transition", "all ease 5s");
//     box.style.transform = "rotate(" + results[0] + "deg)";
//     element.classList.remove("animate");
//     setTimeout(function(){
//         element.classList.add("animate");
//     }, 5000);

//     setTimeout(function(){
//         // alert
//     });

//     setTimeout(function(){
//         box.style.setProperty("transition", "initial");
//         box.style.transform = "rotate(90deg)";
//     }, 6000);
// }