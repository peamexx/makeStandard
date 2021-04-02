### 1. 로그인 페이지(login.html)
![image](https://user-images.githubusercontent.com/38338103/113382114-a6b55080-93bb-11eb-9afc-2baf1a7a0a90.png)

___

#### 특징
- 반응형
- 필수사항 중 미입력칸 있을 때 해당 빈칸 밑에만 에러문구 표시

![image](https://user-images.githubusercontent.com/38338103/113383717-77084780-93bf-11eb-9e8b-4beff23851cd.png)

___

#### 정리
- form > fieldset 넣기
- fieldset의 첫번째 자식은 legend(숨김처리)
- input attribute: autofocus="autofocus" 자동 포커스, required="required" 필수요소 처리
- 접근성: 나중에 변경될 수 있는 컨텐츠라는 것을 의미 aria-live="assertive"
- closest('ele'): 가까운 조상님. parameter 필수
- submit류는 자동 새로고침 되기 때문에 form에 onSubmit="return false;" 추가

___

#### 추가하고 싶은 것

___

#### 다음에는 이렇게 해야지
- '비밀번호를 잊으셨나요?' 같은 것 이름 helper
