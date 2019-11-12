import React from "react";
import "../lateCheck.css";
import "../Home.css";

const lateCheck = () => {
  return (
    <div class="check">
      <h1>체크</h1>
      <table>
        <tr>
          <th>학번</th>
          <th>이름</th>
          <th>정상등교</th>
          {/* 8시 50분 지각과 9시 지각을 동시에
                    체크할 수 없도록 설정해야 함 */}
          <th>8:50</th>
          <th>9:00</th>
        </tr>
        <tr>
          <td>21201</td>
          <td>김수아</td>
          <td>
              <input type="radio" name="late_01" />
          </td>
          <td>
            <input type="radio" name="late_01" />
          </td>
          <td>
            <input type="radio" name="late_01" />
          </td>
        </tr>
        <tr>
          <td>21202</td>
          <td>김영훈</td>
          <td>
              <input type="radio" name="late_02" />
          </td>
          <td>
            <input type="radio" name="late_02" />
          </td>
          <td>
            <input type="radio" name="late_02" />
          </td>
        </tr>
        <tr>
          <td>21203</td>
          <td>김우빈</td>
          <td>
              <input type="radio" name="late_03" />
          </td>
          <td>
            <input type="radio" name="late_03" />
          </td>
          <td>
            <input type="radio" name="late_03" />
          </td>
        </tr>
        <tr>
          <td>21204</td>
          <td>김현준</td>
          <td>
              <input type="radio" name="late_04" />
          </td>
          <td>
            <input type="radio" name="late_04" />
          </td>
          <td>
            <input type="radio" name="late_04" />
          </td>
        </tr>
        <tr>
          <td>21205</td>
          <td>문서준</td>
          <td>
              <input type="radio" name="late_05" />
          </td>
          <td>
            <input type="radio" name="late_05" />
          </td>
          <td>
            <input type="radio" name="late_05" />
          </td>
        </tr>
        {/* 확인, 취소 버튼 */}
        <tr>
          <td colspan="5">
            <input type="submit" class="button" value="확인" />
            <input type="reset" class="button" value="취소" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default lateCheck;