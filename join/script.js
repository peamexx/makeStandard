let idInput = document.querySelector('.idArea').querySelector('input');
let pwInput = document.querySelector('.pwArea').querySelector('input');
let pwChkAreaInput = document.querySelector('.pwChkArea').querySelector('input');
let phoneNumAreaInput = document.querySelector('.phoneNumArea').querySelector('input');

idInput.addEventListener('keyup', pwChkFunc);
pwChkAreaInput.addEventListener('keyup', pwChkFunc);
phoneNumAreaInput.addEventListener('keyup', phoneNumFunc);

// https://regexr.com/

// 아이디 체크
// 만드셈

// 비밀번호 확인 체크
// 오류난 후 글자 지우고 아예 창 빠져나갔을때도 처리 따로 해줘야함
function pwChkFunc() {
    let pwChkAreaError = document.querySelector('.pwChkArea').querySelector('.error');

    pwChkAreaError.textContent = "비밀번호가 맞지 않습니다.";
    pwChkAreaError.classList.add('on');

    if(pwInput.value === pwChkAreaInput.value) {
        pwChkAreaError.classList.remove('on');
    };
};

// 휴대폰번호 체크
// 오류난 후 글자 지우고 아예 창 빠져나갔을때도 처리 따로 해줘야함
function phoneNumFunc() {
    let phoneNumAreaError = document.querySelector('.phoneNumArea').querySelector('.error');
    let onlyNum = /^[0-9]+$/;

    if(!phoneNumAreaInput.value.match(onlyNum)) {
        phoneNumAreaError.classList.add('on');
        phoneNumAreaError.textContent = "숫자만 입력해주세요.";
    } else {
        phoneNumAreaError.classList.remove('on');
    }
};