# 📂 심화주차 개인과제
### 📌 주제 : 숙련 주차때 만든 지출 관리 시스템에 인증 기능을 추가하고 JSON 서버를 이용해 데이터를 관리해보기!
---
<aside>
🔥 필수 구현 사항

</aside>

- [ ]  지출 관리 시스템에 회원가입 / 로그인 기능 구현
    - 반드시,  jwt 인증서버를 사용
    - 인증이 되지 않는다면 서비스를 이용 할 수 없도록 할 것.
    
- [ ]  json-server를 이용해 지출 데이터에 대한 CRUD 구현
    - 지출 데이터에 누가 해당 지출을 생성 했는지 포함시킬 것.
    
- [ ]  API 호출 시, fetch 대신 axios를 필수적으로 사용.

- [ ]  페이지에서(jsx) 파일에서 API 응답 값을 바로 사용하지 말고, 꼭 Tanstack Query (ReactQuery)를 거쳐서 이용하도록 할 것.
    - 상태 관리를 위해 Props-drilling, Context API, Redux 사용대신 Tanstack Query를 사용