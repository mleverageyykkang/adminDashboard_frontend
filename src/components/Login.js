import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { useHistory, useNavigate } from "react-router-dom";
// import { login } from "../features/authSlice";

function LoginPage() {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const dispatch = useDispatch();
  const navigate = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post("/api/login", { uid, password });
      // localStorage.setItem("token", response.data.token);
      // navigate("/dashboard");
    } catch (err) {
      // setError("로그인 실패. 다시 시도해주세요.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ padding: "20px", border: "1px black solid" }}>
        <h2>로그인</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>아이디:</label>
            <input
              type="text"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
              required
            />
          </div>
          <div>
            <label>비밀번호:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
