let start = 1;
let end = 10;

function getItemsFromTo() {

}

document.addEventListener('DOMContentLoaded', () => {
    // console.log('DOM ready');

    const result = document.getElementById('result');
    fetch(`/api/items?start=${start}$end=${end}`)
        .then(response => response.json())

        .then(data => { 
            console.log(data);
            
            data.forEach(item => {
                // console.log(item);
                const itemElement = document.createElement('div');
                itemElement.classList.add('item'); // 디자인을 넣기 위해 클래스를 붙임.
                itemElement.textContent = item;
                result.appendChild(itemElement);
            })
            
            result.innerHTML = data;

        })
})

window.addEventListener('scroll', () => {
    console.log('스크롤 발생??', window.innerHeight, window.scrollY);
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
        console.log('화면 끝 이동');

        start = end + 1;
        end = end + 10;
        getItemsFromTo(start, end);
    }
})