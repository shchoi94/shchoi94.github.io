# MQ란?

---

- MQ (Message Queue) 란 메시지 기반의 미들웨어로 메시지를 이용하여 여러 어플리케이션, 시스템, 서비스들을 연결해주는 솔루션이다.
- MOM(Message Oriented Middleware) 를 구현한 솔루션으로 비동기 메시지를 사용하는 서비스들 사이에서 데이터를 교환해주는 역할을 한다.
- Producer(sender) 가 메시지를 큐에 전송하면 Consumer(receiver) 가 처리하는 방식으로, producer 와 consumer 에 message 프로세스가 추가되는 것이 특징이다.

---

메시지를 발행하는 사용자와 이를 소비하는 사용자 간의
강한 결합으로 인하여 발생하는,
깨지기 쉬운 성질 등을 가지는 동기식 방식은
마이크로서비스가 가지는 ‘느슨한 결합’ 이라는 특성과 어울리지 않다.
메시지를 발행하는 클라이언트가 이용하는 서비스를 ***[조직 서비스]***,
메시지를 소비하는 클라이언트가 이용하는 서비스를 ***[라이선싱 서비스]***라고 가정해보겠다.
메시지 큐 방식을 사용하면 라이선싱 및 조직 서비스 사이에 큐를 삽입한다. 
이 큐는 ***[조직 서비스]***의 데이터를 읽는 데 사용되는 것이 아니라, ***[조직 서비스]***가 관리하는 조직 데이터의 상태가 변할 때 ***[조직 서비스]***가 메시지를 발행하는데 사용이 된다. 
즉, 메시지 전달에서 메시지 큐는 라이선싱 서비스와 조직 서비스 사이의 중개자 역할을 하게 됨으로써
마이크로서비스의 특징인 ***‘느슨한 결합’, ‘내구성’, ‘확장성’, ‘유연성’***을 제공하게 된다.

출처:

[https://creakycogwheel.tistory.com/entry/캡스톤-프로젝트메시지-큐란](https://creakycogwheel.tistory.com/entry/%EC%BA%A1%EC%8A%A4%ED%86%A4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A9%94%EC%8B%9C%EC%A7%80-%ED%81%90%EB%9E%80)

[https://sarc.io/index.php/miscellaneous/1615-message-queue-mq](https://sarc.io/index.php/miscellaneous/1615-message-queue-mq)
