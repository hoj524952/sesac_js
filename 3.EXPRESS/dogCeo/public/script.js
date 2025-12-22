const breedSelect = document.getElementById('breedSelect');
const imagesDiv = document.getElementById(`images`);

fetch(`/api/breeds`)
    .then(res => res.json())
    .then(breeds => {
        breeds.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed;
            option.textContent = breed;

            breedSelect.appendChild(option);
    });
});

breedSelect.addEventListener('change', () => {
    const breed = breedSelect.value;
    imagesDiv.innerHTML = '';

    if(!breed) return;

    fetch(`/api/breed/${breed}/images`)
        .then(res => res.json())
        .then(images => {
            images.slice(0, 10).forEach(url => {
                const img = document.createElement(`img`);
                img.src = url;
                img.style.width = `200px`;
                img.style.margin = `10px`;
                imagesDiv.appendChild(img);
            })
        })
})