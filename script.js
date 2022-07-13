let flag = 0;
function arrowClick(x){
    flag = flag + x;
    slideShow(flag);
}

function slideShow(num){
    let slides = document.getElementsByClassName('slides');

    for(let i of slides){
        i.style.display = 'none';
    }
    
    if (num >= slides.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0) {
        flag = slides.length - 1;
        num = slides.length - 1;
    }

    slides[num].style.display = 'block';
}
slideShow(flag);