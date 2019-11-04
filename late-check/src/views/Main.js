import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>S/W개발도제 2-12 지각 체크</h1>
        <table>
          {/* 체크와 조회 버튼은 css로 디자인적 요소 넣기 */}
          <tr>
            <td>
              <a href="lateCheck.html">체크</a>
            </td>
            <td>
              <a href="lateRead.html">조회</a>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
//hhhhhh
export default Main;
