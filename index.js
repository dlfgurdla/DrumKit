// alert('테스트');

var btn1 = document.querySelector('button');
var btns = document.querySelectorAll('button');

// btn1.addEventListener('click',handleClick);
// 모든 버튼에 이벤트 달기
// btns[0].addEventListener('click',handleClick);
// btns[1].addEventListener('click',handleClick);
// btns[2].addEventListener('click',handleClick);
// btns[3].addEventListener('click',handleClick);
// btns[4].addEventListener('click',handleClick);
// btns[5].addEventListener('click',handleClick);
// btns[6].addEventListener('click',handleClick);

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', handleClick);
}



function handleClick() {

    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();
    console.log(this.textContent);
    //7개의 버튼중 어떤 버튼을 눌렀는지 키값으로 판별
    drumBit(this.textContent);

}


//전체화면에 키보드 이벤트 달기
document.addEventListener('keypress', handleKey);

function handleKey(e) {
    //어떤 키를 눌렀는가?
    //console.log(this); 이걸론 항상 document객체가나와서 알수없음
    //이벤트 객체는 addEventListener에 함수의 매개변수로 사용
    console.log(e.key);

    drumBit(e.key);


}


function drumBit(key) {
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            return; //위의 키들 외에 다른키가 입력되었을때 함수를 끝낸다
    }
    animationDrum(key);
}

function animationDrum(key) {
    //모든 버튼은 키값과 같은 클래스를 가지므로 '.'클래스 이름으로 선택
    var btn = document.querySelector('.' + key); //키값에 해당하는 버튼을 선택
    btn.classList.add('pressed');
    //0.1초 뒤에 클래스 제거
    setTimeout(function () {
        btn.classList.remove('pressed');
    }, 100);
}