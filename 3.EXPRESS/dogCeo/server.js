const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/breeds', async (req, res) => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();

        const breeds = Object.keys(data.message);
        res.json(breeds);
    } catch(err) {
        res.status(500).json({error: `품종 목록 조회 실패`});
    }
});

app.get(`/api/breed/:breed/images`, async(req, res) => {
    const breed = req.params.breed;

    try {
        const response = await fetch(
            `https://dog.ceo/api/breed/${breed}/images`
        );
        const data = await response.json();
        res.json(data.message);
    } catch(err) {
        res.status(500).json({error: `이미지 조회 실패`});
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});