const checkboxes = document.querySelectorAll('input[name=interest]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {

        const checked = document.querySelectorAll('input[name="interest"]:checked');
        
        if(checked.length > 3) {
            checkbox.checked = false;
        }
    })

})