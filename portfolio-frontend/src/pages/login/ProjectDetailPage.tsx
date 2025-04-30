import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetailPage.css";
import axios from "axios";

const ProjectDetailPage = () => {
  const { id } = useParams();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseLog, setResponseLog] = useState<any>(null);
  const [requestLog, setRequestLog] = useState<any>(null);

  const handleLogin = async () => {
    const requestData = {
      username,
      password,
    };

    setRequestLog(requestData); // 요청 JSON 저장

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", requestData); // ✅ 테스트용 API
      setResponseLog(response.data); // 응답 JSON 저장
    } catch (err: any) {
      setResponseLog({ error: err.message });
    }
  };

  return (
    <div className="project-detail-page">
      {/* 좌측 프로젝트 설명 */}
      <div className="project-info">
        <h2>로그인 기능 구현</h2>
        <p>JWT 기반 로그인 시스템. 비동기 요청 및 응답 처리 예제입니다.</p>
        <ul>
          <li>React</li>
          <li>Axios</li>
          <li>JWT</li>
        </ul>
      </div>

      {/* 우측 API 실행 예제 */}
      <div className="project-interactive">
        <h3>🔐 로그인 시뮬레이션</h3>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>로그인</button>

        {responseLog && (
          <div className="login-result">
            <h4>✅ 로그인 결과:</h4>
            <pre>{JSON.stringify(responseLog, null, 2)}</pre>
          </div>
        )}
      </div>

      {/* 하단 로그 */}
      <div className="api-log">
        <h4>📤 요청 JSON</h4>
        <pre>{JSON.stringify(requestLog, null, 2)}</pre>

        <h4>📥 응답 JSON</h4>
        <pre>{JSON.stringify(responseLog, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
