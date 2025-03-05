const dropdown = document.querySelector('.dropdown-content');
const button = document.querySelector('button');

showDropDown(dropdown, button);

function showDropDown(container, button) {
    button.addEventListener('click', () => {
        container.classList.toggle('show');
    });

    
}
