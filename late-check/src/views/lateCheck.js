import React, { Component } from "react";
import "../Home.css";

class lateCheck extends Component {
  render() {
    return (
      <div>
        <form>
            {/* 한 페이지에 5명씩 총 5페이지로 표현.
            5명 중 지각한 사람을 다중선택하여 확인 버튼을 누르면 DB로 전송
            정상등교는 체크를 안 하고, null값을 보내 0으로 바꿔주기 */}
            <table>
                <tr>
                    <th>학번</th>
                    <th>이름</th>
                    {/* 8시 50분 지각과 9시 지각을 동시에
                    체크할 수 없도록 설정해야 함 */}
                    <th>8:50</th>
                    <th>9:00</th>
                </tr>
                <tr>
                    <td>21201</td>
                    <td>김수아</td>
                    <td><input type="radio" name="late_01"/></td>
                    <td><input type="radio" name="late_01"/></td>
                </tr>
                <tr>
                    <td>21202</td>
                    <td>김영훈</td>
                    <td><input type="radio" name="late_02"/></td>
                    <td><input type="radio" name="late_02"/></td>
                </tr>
                <tr>
                    <td>21203</td>
                    <td>김우빈</td>
                    <td><input type="radio" name="late_03"/></td>
                    <td><input type="radio" name="late_03"/></td>
                </tr>
                <tr>
                    <td>21204</td>
                    <td>김현준</td>
                    <td><input type="radio" name="late_04"/></td>
                    <td><input type="radio" name="late_04"/></td>
                </tr>
                <tr>
                    <td>21205</td>
                    <td>문서준</td>
                    <td><input type="radio" name="late_05"/></td>
                    <td><input type="radio" name="late_05"/></td>
                </tr>
                {/* 확인, 취소 버튼 */}
                <tr>
                    <td colspan="2"><input type="submit" value="확인"/></td>
                    <td colspan="2"><input type="reset" value="취소"/></td>
                </tr>
            </table>
            </form>
      </div>
    );
  }
}

export default lateCheck;