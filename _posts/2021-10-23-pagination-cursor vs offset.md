# Cursor, Offset Pagination 의 비교

### Cursor-based pagination: O(1)

- cursor는 포인터의 역할을 하며 cursor로 아이템의 위치를 찾는다.
  서버는 클라이언트에게 Response와 함께  cursor를 반환하고 
  클라이언트는 요청시 cursor와 함께 요청한다.
- real-time data set을 다룰 때 선호되는 방식



### Offset-based pagination: O(n)

- limit(the number of results) 와 offset(the number of records that need to be skipped)을 파라미터로 사용하는 방식

- 사용하기 쉽고 static data를 다룰 때 선호되는 방식

  

***

### 커서 페이지네이션이 오프셋 페이지네이션에 비해 {pros or cons}

### Pros

- 데이터 스킵이 없다. index처럼 동작하는 offset인자에 비해,  cursor는 특정 레코드를 가리키는 포인터처럼 동작한다.
- 실시간 데이터에 대해 효율적으로 다룬다. 커서가 정적데이터를 필요로 하지 않기 때문에
  각 페이지를 로딩하는 절차에 영향을 받지않고 쉽게 데이터를 추가하고 삭제할 수 있다.
- 대용량 데이터에 대해 효율적이다.
  offset은 데이터를 얼마나 스킵할지를 결정하면서 다음 데이터 뿐만 아니라 이전 데이터 전체에 대한 것도 스캔을 해야되기 때문에 offset이 큰 경우 성능상 문제가 될 수 있다. 

### Cons

- sorting에 제약이 있을 수 있다. cursor는 정렬을 위해 unique한 column을 사용한다.
  sort를 구현해야한다면 offset이 나을 수 있다.



## Conclusion 

***The cursor approach is always recommended, as it eliminates the duplicated items and doesn’t skip any item.***

***Still, the decision to go for the right approach depends entirely upon the use case and the effect pagination will have on the product.***



출처:

[https://betterprogramming.pub/building-apis-a-comparison-between-cursor-and-offset-pagination-88261e3885f8](https://betterprogramming.pub/building-apis-a-comparison-between-cursor-and-offset-pagination-88261e3885f8)

