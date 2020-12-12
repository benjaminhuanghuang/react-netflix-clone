

Install
```
  npm i styled-component
```

```
import styled from 'styled-components/macro';
```
/macro creates readable css name

Pass parameter
```
  export const Inner = styled.div`
    flex-direction: ${({ direction }) => direction};
  `;
```

createGlobalStyle


引用
```
export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
```