var store = [{
        "title": "Message Queue",
        "excerpt":"MQ란? MQ (Message Queue) 란 메시지 기반의 미들웨어로 메시지를 이용하여 여러 어플리케이션, 시스템, 서비스들을 연결해주는 솔루션이다. MOM(Message Oriented Middleware) 를 구현한 솔루션으로 비동기 메시지를 사용하는 서비스들 사이에서 데이터를 교환해주는 역할을 한다. Producer(sender) 가 메시지를 큐에 전송하면 Consumer(receiver) 가 처리하는 방식으로, producer 와 consumer 에 message 프로세스가 추가되는 것이 특징이다. 메시지를...","categories": [],
        "tags": [],
        "url": "/Message-Queue/",
        "teaser": null
      },{
        "title": "분산처리",
        "excerpt":"분산 및 병렬처리의 필요성 웹에 있는 모든 웹 서비스를 하나의 시스템에 집어넣는 집중화된 시스템을 갖는다면 먼 거리에 있는 유저들이 접근할 때 네트워크 병목현상이 일어날 수 있다. 동시 접속하는 과정에서 네트워크뿐만 아니라 서비스에 대한 요청이 잘 이뤄지지 않을 수 있다. 분산 시스템을 설계할 때 고려사항 Transparency: 투명성 Scalability: 확장성 Concurrency: 동시성...","categories": [],
        "tags": [],
        "url": "/%EB%B6%84%EC%82%B0%EC%B2%98%EB%A6%AC/",
        "teaser": null
      },{
        "title": "웹의 동작 방식",
        "excerpt":"웹의 동작 방식 브라우저에 웹 주소를 입력하면 브라우저는 DNS 서버로 가서 웹사이트가 있는 서버의 진짜 주소를 찾는다 그 다음 브라우저는 서버에게 웹사이트의 사본을 클라이언트에게 보내달라는 HTTP요청을 서버로 전송한다. 이 때, 클라이언트와 서버 사이에 전송되는 모든 데이터는 TCP/IP 연결을 통해 전송된다 요청을 받은 서버는 웹사이트의 파일들을 데이터 패킷이라 불리는 단위로 브라우저에게...","categories": [],
        "tags": [],
        "url": "/%EC%9B%B9%EC%9D%98-%EB%8F%99%EC%9E%91-%EB%B0%A9%EC%8B%9D/",
        "teaser": null
      },{
        "title": "Pagination Cursor vs offset",
        "excerpt":"Cursor, Offset Pagination 의 비교 Cursor-based pagination: O(1) cursor는 포인터의 역할을 하며 cursor로 아이템의 위치를 찾는다. 서버는 클라이언트에게 Response와 함께 cursor를 반환하고 클라이언트는 요청시 cursor와 함께 요청한다. real-time data set을 다룰 때 선호되는 방식 Offset-based pagination: O(n) limit(the number of results) 와 offset(the number of records that need to be...","categories": [],
        "tags": [],
        "url": "/pagination-cursor-vs-offset/",
        "teaser": null
      },{
        "title": "Nosql",
        "excerpt":"NoSQL Not Only SQL 관계형 데이터베이스가 아닌 다른 형태의 데이터 저장 기술을 의미. RDBMS와 달리 테이블 간의 관계를 정의하지 않는다. 빅데이터의 등장으로 데이터와 트래픽이 기하급수적으로 증가함에 따라 발생하는 RDBMS의 성능적인 단점을 보완하기 위해 데이터의 일관성은 포기하고 비용을 고려하여 여러 대의 데이터에 분산 저장하는 (수펑적 확장성)scale-out을 목표로 등장하였다. 종류 Key-Value Database...","categories": [],
        "tags": [],
        "url": "/NoSQL/",
        "teaser": null
      },{
        "title": "병행처리",
        "excerpt":"스레드 기반 vs 비동기 기반 병행처리 네트워크 프로그래밍의 특징은 ‘어떠한 일들이 일어나기를 기다림’ 이라는 많은 작업들로 구성되어 있다는 점이다. 따라서 여러 cpu에 작업들을 효율적으로 분배하기 위한 운영체제와의 연계 작업이 필요없다. 스레딩의 여러 cpu와 공유 메모리를 사용하는 방식은 계산 위주 작업 분야에 가장 적합하다. 글 가장 아래 명시한 출처로 하는 서적에서...","categories": [],
        "tags": [],
        "url": "/%EB%B3%91%ED%96%89%EC%B2%98%EB%A6%AC/",
        "teaser": null
      }]
