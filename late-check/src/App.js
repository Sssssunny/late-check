import React from "react";
import "./App.css";
import "./Home.css";
import { Route, Link } from "react-router-dom";
import lateCheck from "./views/lateCheck";
import Home from "./views/Home";
import lateRead from "./views/lateRead";

const App = () => {
  return (
    <div>
      <div class="layer" id="wapper">
        <span class="content">
          {/* 헤더 시작 */}
          <header>
            <p>지각 체크 프로그램이지롱!</p>
          </header>
          {/* 네비게이션 */}
          <nav>
            <ul>
              <li>
                <Link className="link" to="/">
                  소개
                </Link>
              </li>
              <li>
                <Link className="link" to="/lateCheck">
                  체크
                </Link>
              </li>
              <li>
                <Link className="link" to="/lateRead">
                  조회
                </Link>
              </li>
            </ul>
          </nav>
          {/* 콘텐츠 부분 */}
          <section>
            <article>
              <Route path="/" component={Home} exact={true} />
              <Route path="/lateCheck" component={lateCheck} />
              <Route path="/lateRead" component={lateRead} />
            </article>
          </section>
        </span>
        <span class="blank"></span>
      </div>
    </div>
  );
};

export default App;