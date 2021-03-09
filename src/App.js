import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    // path about.js로 들어가서 그리고 component About을 보여줘! 라는 뜻이다.
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
//너가 link를 쓰고 있는 한 router안에 모든 것을 넣어야 한다.
//네비게이션은 꼭 router안에 있어야 한다. 즉, 너가 link를 사용한다면 이것은 라우터 안에 있어야한다.
//exact는 동시 랜더링을 고치는법
//먼저 Router를 만들고 그 다음 Router안에는 스크린을 넣는 거야. 그래서 원하는 만큼 path를 만들 수 있어
