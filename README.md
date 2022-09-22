# Airbnb-2022-newest frontend

## Index

#### #01 Init

```bash
npx create-react-app airbnb-2022-frontend --template=typescript

```

- delete unused file (App.css, App.test.tsx, index.css, logo.svg, reportWebVitals.ts, setupTests.ts)
- App.tsx, index.tsx 정리

#### #02 Chakra UI download

- https://chakra-ui.com/getting-started

```bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

#### #03 React Router

- https://reactrouter.com/en/main

```bash
npm i react-router-dom
```

#### #04 ChakraProvider and React Router Setting

- v6의 React Router는 좀 다른데, 어떤 특정 path안에 Root 컴포넌트와 children 컴포넌트를 같이 넣을 수 있고, 그렇게 넣으면
  Outlet이라는 컴포넌트를 사용하여 children들을 뿌릴수가 있다. path에 따라 뿌려지는 children들이 달라지는데 router.tsx, Root.tsx를 참고

#### #05 NotFound page with Chakra G.O.D

#### #06 Icon with react-icons and Header with GODkra

```bash
npm i react-icons --save
```

#### #07 Funny GOD Chakra
