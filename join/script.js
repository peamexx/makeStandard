let idInput = document.querySelector('.idArea').querySelector('input');
let pwInput = document.querySelector('.pwArea').querySelector('input');
let pwChkInput = document.querySelector('.pwChkArea').querySelector('input');
let phoneNumInput = document.querySelector('.phoneNumArea').querySelector('input');

idInput.addEventListener('keyup', idLowerChange);
idInput.addEventListener('blur', idConditionChk);
pwInput.addEventListener('blur', pwConditionChk);
pwChkInput.addEventListener('blur', pwChkConditionChk);
phoneNumInput.addEventListener('blur', phoneNumConditionChk);

// https://regexr.com/

// 아이디 체크 - 대문자 입력 시 소문자로
function idLowerChange() {
    idInput.value = idInput.value.toLocaleLowerCase();
};

// 아이디 체크
function idConditionChk() {
    let idError = document.querySelector('.idArea').querySelector('.error');
    let idCondition = /^[a-z0-9]{6,8}$/;

    if(!idInput.value.match(idCondition)) {
        idError.classList.add('on');
        idError.textContent = '영소문자 6~8자리를 입력해주세요.'
    } else {
        idError.classList.remove('on');
    }
}

// 비밀번호 체크
function pwConditionChk() {
    let pwError = document.querySelector('.pwArea').querySelector('.error');
    let pwCondition = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,10}$/;
    let pwConditionSymbol = ['!','.',',','"',"'"];

    if(!pwInput.value.match(pwCondition) ||
        pwInput.value.match(pwConditionSymbol)) {
        pwError.classList.add('on');
        pwError.textContent = '비밀번호 조건에 맞지 않습니다.';
    } else {
        pwError.classList.remove('on');
    }
};

// 비밀번호 확인 체크
function pwChkConditionChk() {
    let pwChkError = document.querySelector('.pwChkArea').querySelector('.error');

    pwChkError.textContent = '비밀번호가 맞지 않습니다.';
    pwChkError.classList.add('on');

    if(pwInput.value === pwChkInput.value) {
        pwChkError.classList.remove('on');
    };
};

// 휴대폰번호 체크
function phoneNumConditionChk() {
    let phoneNumError = document.querySelector('.phoneNumArea').querySelector('.error');
    let phoneNumCondition = /^01[0-9]{8,9}$/; // 숫자만, 010/011.. 지원, 010-123-4567 지원

    if(!phoneNumInput.value.match(phoneNumCondition)) {
        phoneNumError.classList.add('on');
        phoneNumError.textContent = '숫자만 입력해주세요.';
    } else {
        phoneNumError.classList.remove('on');
    }
};