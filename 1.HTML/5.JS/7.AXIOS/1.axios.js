(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    console.log(data);
})();

async function fetch_main() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    console.log(data);
}


const axios = require('axios');
async function axios_main() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    const data = res.data;
    console.log(data);
}

axios_main();
