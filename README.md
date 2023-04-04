# < 정리 >

## `module.css 생성 후 적용`

css 코드를 자바스크립트 객체로 변환시켜줌 사용법: import styles from "./~";

styles가 css 코드를 가지고 있는 객체로 넘어옴
따라서 해당 css코드에 작성된 class name(여기서는 btn)을 프로퍼티 접근 연산자(.)를 사용해서 이용가능해짐.

< Button style={styles.btn} / >
위와 같이 작성해서 해당 css 스타일링을 사용할 수 있음.

브라우저를 통해 html 코드를 확인해보면 해당 컴포넌트에 무작위의 class name이 붙음.
요소가 각각의 클래스네임을 가지게 돼서 일일이 class name을 기억해서 스타일링 할 필요가 없음

## `useEffect`

리렌더링 될 때마다 반복실행되어도 괜찮은 코드도 있을 테지만,
컴포넌트가 처음 render 될 때만 코드가 실행되길 원할 수 도 있다.
예를들어, API로 외부 데이터를 가져올 때 컴포넌트 처음 렌더링되는 그 순간에만
API 요청을 하고 이후에 state가 변화할 때는 그 API에서 똑같은 정보를 가져오고 싶지는 않을 것이다.

이렇게 특정 코드들이 첫번째 component render에서만 실행되게 하려면? => useEffect !!

useEffect 글자를 타이핑할 때마다 API를 새로 호출하지 않고 한번만 호출해준다.

search keyword에 변화가 있을 때 만! marvel영화를 검색하고 싶을 때
즉, 특정한 코드만 변화했을 때 원하는 코드들을 실행할 수 있는 방법
-> useEffect(() => {
console.log("SEARCH FOR", keyword);
}, []);
이렇게 실행하면 1번만 됨
그리고 []자리에 keyword 써줌
-> keyword가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것.
이것이 바로 빈 array를 써주었을 때 코드가 단 한번만 실행되는 이유임
react가 지켜볼 게 아무것도 없으니 처음 한번만 실행되는 것

useEffect(() => {
console.log("I run when 'keyword & counter' changes.")
}, [keyword, counter]);
-> 2개도 가능

## `Cleanup 사용법`

```javascript
function Hello() {
  // Cleanup 1번째 방법
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);

  // Cleanup 2번째 방법
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);

  return <h1>Hello</h1>;
}
```
