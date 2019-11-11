import React, { Component } from "react";
import "../Home.css";

class lateRead extends Component {
  render() {
    return (
      <div>
    <form>
        <table>
            <tr>
                <th>학번</th>
                <th>이름</th>
                <th>8:50</th>
                <th>9:00</th>
                <th>총 지각</th>
                <th>이번 달<br />지각비</th>
                <th>다음 달<br />기본 지각비</th>
            </tr>
            <tr>
                <td>21201</td>
                <td>김수아</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>500</td>
                <td>500</td>
            </tr>
            <tr>
                <td>21202</td>
                <td>김영훈</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td>1500</td>
                <td>500</td>
            </tr>
            <tr>
                <td>21203</td>
                <td>김우빈</td>
                <td>3</td>
                <td>0</td>
                <td>3</td>
                <td>1500</td>
                <td>500</td>
            </tr>
            <tr>
                <td>21204</td>
                <td>김현준</td>
                <td>2</td>
                <td>2</td>
                <td>4</td>
                <td>3000</td>
                <td>1000</td>
            </tr>
            <tr>
                <td>21205</td>
                <td>문서준</td>
                <td>4</td>
                <td>1</td>
                <td>5</td>
                <td>3000</td>
                <td>1000</td>
            </tr>
        </table>
        </form>
      </div>
    );
  }
}

export default lateRead;