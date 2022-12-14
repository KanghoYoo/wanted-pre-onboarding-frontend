# wanted-pre-onboarding-frontend

wanted pre-onboarding-frontend 사전과제 - 유강호

## 프로젝트의 실행 방법

### 로그인 화면 `/` - 가입이 안되있는 상황

![ezgif com-gif-maker](https://user-images.githubusercontent.com/96409594/207631726-c9883ac3-acdf-46e2-80a4-9f9711798204.gif)

- 아이디 조건: 아이디는 @포함해야하고 이메일 형식이어야 합니다.
- 비밀번호 조건: 비밀번호는 8자 이상이어야 합니다.
- 로그인 버튼 상단에서 `input` 상태를 알립니다.
- 아이디 조건과 비밀번호의 조건이 맞지 않으면 로그인 버튼은 비활성화 되고, 조건에 맞을 경우 색상이 바뀌면서 버튼이 활성화 됩니다.

- 로그인화면에서 아이디가 존재하지 않거나 아이디, 비밀번호가 맞지 않으면 `alert`를 통해 알립니다.

---

### 회원가입 화면 `/` - 회원가입 후 로그인

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/96409594/207632032-532fb5ff-2f1b-4ef5-b7ee-b9acd9597f23.gif)


- 회원가입 화면에서 아이디와 비밀번호 조건은 로그인 조건과 같습니다.
- 조건에 맞을 경우에만 회원가입 버튼이 활성화 됩니다.
- 회원가입화면에서 다시 로그인 화면으로 돌아가고 싶을 때 "로그인화면으로 돌아가기" 버튼을 클릭하여 되돌아갑니다.
- 회원가입 상태후 로그인을 하면 `/todo`페이지로 이동합니다.

---

### Todo 페이지 `/todo`

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/96409594/207632253-bf002a00-aae7-408c-b4b7-568faf6d2051.gif)

- 로그인이 안되어있는 상태에서 `/todo` 사이트로 직접 들어가면 다시 로그인 화면으로 돌아옵니다.
- 하단 `input`창에서 원하는 텍스트를 입력하고 "추가" 버튼을 클릭하면 입력한 텍스트가 To do 항목으로 추가됩니다.
- "수정" 버튼을 클릭하면 기존 수정, 삭제 버튼들이 확인, 취소 버튼으로 바뀝니다.
- 체크 항목을 선택하면 텍스트가 가로줄이 그어지면서 체크박스에 체크가 됩니다.
- 삭제 버튼을 클릭하면 작성했던 To do 항목이 삭제가 됩니다.
- "로그아웃" 버튼을 클릭하면 로그인 화면으로 돌아갑니다.
- 로그아웃을 하고 다시 접속하면 저장했던 데이터가 그대로 남습니다.

## 배포 사이트

https://kanghoyoo.github.io/wanted-pre-onboarding-frontend/

## 사용 라이브러리

`typescript`, `axios`, `fontawesome`, `styled-components`, `git-pages`, `npm`, `npx create-react-app`, `react-router-dom`
