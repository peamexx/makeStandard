let requiredY = document.querySelectorAll('.requiredY');
let loginBtn = document.querySelector('.loginBtn');

loginBtn.addEventListener('click', requireChk);

// 필수 입력 요소 체크
function requireChk() {
    requiredY.forEach((item) => {
        item.closest('div').querySelector('.error').classList.remove('on');
        if(item.value === '') {
            let title = item.closest('div').querySelector('label').textContent;
            
            item.closest('div').querySelector('.error').classList.add('on');
            item.closest('div').querySelector('.error').textContent = `${title}를 입력해주세요`;
        }
    });
};