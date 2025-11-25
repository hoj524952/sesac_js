const divArea = document.getElementById("divArea");

document.getElementById("click").addEventListener("click", () => {
    console.log("클릭했을 때 호출할 콜백함수");
});
document.getElementById("click").addEventListener("dblclick", () => {
    console.log("더블클릭했을 때 호출할 콜백함수");
});