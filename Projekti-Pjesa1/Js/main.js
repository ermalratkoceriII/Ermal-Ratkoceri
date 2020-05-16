
function hideBox1(){
    var sliderList = document.getElementsByClassName('content');
    
    sliderList[0].classList.add('show');
    sliderList[1].classList.add('hide');
    sliderList[2].classList.add('hide');
    sliderList[3].classList.add('hide');
}

function hidebox2(){
    var sliderList = document.getElementsByClassName('content2');
     
    sliderList[0].classList.add('show');
    sliderList[1].classList.add('hide');
    sliderList[2].classList.add('hide');
    sliderList[3].classList.add('hide');
}

function hidebox3(){
    var sliderList = document.getElementsByClassName('content3');
     
    sliderList[0].classList.add('show');
    sliderList[1].classList.add('hide');
    sliderList[2].classList.add('hide');
    sliderList[3].classList.add('hide');
}

window.onLoad = hideBox1(),hidebox2(),hidebox3();


document.getElementsByClassName('box')[0].addEventListener('click',function(){
    var sliderList= document.getElementsByClassName('content');
    var index = 0;
    for(var div of sliderList){
        index++;
        console.log(index);
        if(div.classList.contains('show') && index < 4){
            div.classList.remove('show');
            div.classList.add('hide');
            div.nextElementSibling.classList.remove('hide');
            div.nextElementSibling.classList.add('show');
            break;
        }
        else if(div.classList.contains('show') && index == 4){
            div.classList.remove('show');
            div.classList.add('hide');
            sliderList[0].classList.remove('hide');
            sliderList[0].classList.add('show');
            break;
        }
    }
})

document.getElementsByClassName('box2')[0].addEventListener('click',function(){
    var sliderList= document.getElementsByClassName('content2');
    var index = 0;
    for(var div of sliderList){
        index++;
        console.log(index);
        if(div.classList.contains('show') && index < 4){
            div.classList.remove('show');
            div.classList.add('hide');
            div.nextElementSibling.classList.remove('hide');
            div.nextElementSibling.classList.add('show');
            break;
        }
        else if(div.classList.contains('show') && index == 4){
            div.classList.remove('show');
            div.classList.add('hide');
            sliderList[0].classList.remove('hide');
            sliderList[0].classList.add('show');
            break;
        }
    }
})

document.getElementsByClassName('box3')[0].addEventListener('click',function(){
    var sliderList= document.getElementsByClassName('content3');
    var index = 0;
    for(var div of sliderList){
        index++;
        console.log(index);
        if(div.classList.contains('show') && index < 4){
            div.classList.remove('show');
            div.classList.add('hide');
            div.nextElementSibling.classList.remove('hide');
            div.nextElementSibling.classList.add('show');
            break;
        }
        else if(div.classList.contains('show') && index == 4){
            div.classList.remove('show');
            div.classList.add('hide');
            sliderList[0].classList.remove('hide');
            sliderList[0].classList.add('show');
            break;
        }
    }
})


