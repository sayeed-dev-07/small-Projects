// element select in js.

const imgContainers = document.querySelectorAll('.img');
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img4 = document.querySelector('.img4')

const dots = document.querySelectorAll('.fa-circle');

const dot1 = document.querySelector('#dot1');
const dot2 = document.querySelector('#dot2');
const dot3 = document.querySelector('#dot3');
const dot4 = document.querySelector('#dot4');


imgContainers.forEach(img=>{
    let id = img.id;
    img.addEventListener('click',changeOnLeftClick(img, id))
    img.addEventListener('click', changeOnRightClick(img, id));
})

function changeOnRightClick(container, index) {
    container.addEventListener('click', (event) => {
        if (event.target.classList.contains('right')) {
            changeImgRightBtn(index)
        }
    })
}

function changeImgRightBtn(id) {
    let imgNum = Number(id) + 1;
    let strImgNum = String(imgNum)
    switch (id) {
        case '2':
            img2.classList.add('hidden')
            img3.classList.remove('hidden')
            changeDot(strImgNum)
            break;

        case '3':
            img3.classList.add('hidden')
            img4.classList.remove('hidden')
            changeDot(strImgNum)
            break;

        case '4':
            img4.classList.add('hidden')
            img1.classList.remove('hidden')
            changeDot(strImgNum)
            break;
        default:
            img1.classList.add('hidden')
            img2.classList.remove('hidden')
            changeDot(strImgNum)
            break;
    }

}

function changeOnLeftClick(container, index) {
    container.addEventListener('click', (event) => {
        if (event.target.classList.contains('left')) {
            changeImgLeftBtn(index)
        }
    })
}

function changeImgLeftBtn(id){
    let imgNum = Number(id) - 1; 
    let strImgNum = String(imgNum)
    switch (id) {
        case '2':
            img2.classList.add('hidden')
            img1.classList.remove('hidden')
            changeDot(strImgNum)
            break;

        case '3':
            img3.classList.add('hidden')
            img2.classList.remove('hidden')
            changeDot(strImgNum)
            break;

        case '4':
            img4.classList.add('hidden')
            img3.classList.remove('hidden')
            changeDot(strImgNum)
            break;
        default:
            let num = '4'
            img1.classList.add('hidden')
            img4.classList.remove('hidden')
            changeDot(num)
            break;

    }
}

function changeDot(num){
    switch (num) {
        case '2':
            changeClassListOfDot('dot2')
            
            break;

        case '3':
            changeClassListOfDot('dot3')
            break;

        case '4':
            changeClassListOfDot('dot4')
            break;
        default:
            changeClassListOfDot('dot1')
            break;

    }
}

function changeClassListOfDot(name) {
    if(name === 'dot1'){
        dots.forEach(dot=>{
            if(dot.classList.contains('fa-solid')){
                dot.classList.remove('fa-solid')
                dot.classList.add('fa-regular')
            }
            dot1.classList.add('fa-solid')
        })
    }else if(name === 'dot2'){
        dots.forEach(dot=>{
            if(dot.classList.contains('fa-solid')){
                dot.classList.remove('fa-solid')
                dot.classList.add('fa-regular')
            }
            dot2.classList.add('fa-solid')
        })
    }else if(name === 'dot3'){
        dots.forEach(dot=>{
            if(dot.classList.contains('fa-solid')){
                dot.classList.remove('fa-solid')
                dot.classList.add('fa-regular')
            }
            dot3.classList.add('fa-solid')
        })
    }else if(name === 'dot4'){
        dots.forEach(dot=>{
            if(dot.classList.contains('fa-solid')){
                dot.classList.remove('fa-solid')
                dot.classList.add('fa-regular')
            }
            dot4.classList.add('fa-solid')
        })
    }
}



dots.forEach(dot=>{
    dot.addEventListener('click',()=>{
        let index = dot.id.slice(3,4)
        changeDot(index)
        changePicture(index)
    })
})

function changePicture(idNo){
    imgContainers.forEach(img=>{
        img.classList.add('hidden');
        if(img.id === idNo){
            img.classList.remove('hidden')
        }
    })
}