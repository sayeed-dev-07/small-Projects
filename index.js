const dropdown = document.querySelector('.dropdown-content');
const button = document.querySelector('button');

showDropDown(dropdown, button);




function showDropDown(container, button){
    button.addEventListener('click',()=>{
        makeVisible(container)
    })
    // button.addEventListener('mouseover',()=>{
    //     makeVisible(container)
    // })
    // button.addEventListener('mouseout',()=>{
    //     makeVisible(container)
    // })
}

function makeVisible(container){
    if (container.id === 'hidden') {
        container.removeAttribute('id');
    } else {
        container.id = 'hidden'
    }
}
