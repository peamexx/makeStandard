let idInput = document.querySelector('.idArea').querySelector('input');
let pwInput = document.querySelector('.pwArea').querySelector('input');
let pwChkInput = document.querySelector('.pwChkArea').querySelector('input');
let phoneNumInput = document.querySelector('.phoneNumArea').querySelector('input');

// idInput.addEventListener('blur', pwChkFunc);
pwChkInput.addEventListener('blur', pwChkFunc);
phoneNumInput.addEventListener('blur', phoneNumFunc);

// https://regexr.com/

// 아이디 체크
// 나중에 하단 버튼 만들고 해야함

// 비밀번호 확인 체크
function pwChkFunc() {
    let pwChkError = document.querySelector('.pwChkArea').querySelector('.error');

    pwChkError.textContent = "비밀번호가 맞지 않습니다.";
    pwChkError.classList.add('on');

    if(pwInput.value === pwChkInput.value) {
        pwChkError.classList.remove('on');
    };
};

// 휴대폰번호 체크
function phoneNumFunc() {
    let phoneNumError = document.querySelector('.phoneNumArea').querySelector('.error');
    let onlyNum = /^01[0-9]{8,9}$/; // 숫자만, 010/011.. 지원, 010-123-4567 지원

    if(!phoneNumInput.value.match(onlyNum)) {
        phoneNumError.classList.add('on');
        phoneNumError.textContent = "숫자만 입력해주세요.";
    } else {
        phoneNumError.classList.remove('on');
    }
};