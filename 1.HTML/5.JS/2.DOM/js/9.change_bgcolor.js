// function changeBGColor(){
//     if(document.body.style.backgroundColor == null){
//         document.body.style.backgroundColor == "blue";
//     }
//     // console.log("배경색 바꾸기");

//     else if(document.body.style.backgroundColor == "blue"){
//         document.body.style.backgroundColor = "red";
//     }
//     else if(document.body.style.backgroundColor == "red"){
//         document.body.style.backgroundColor = "blue";
//     }
// }


function changeBGColor_random() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const color = `rgb(${r}, ${g}, ${b})`;
    
    document.body.style.backgroundColor = color;

    const colorText = document.getElementById("colorValue");
    colorText.textContent = color;
}