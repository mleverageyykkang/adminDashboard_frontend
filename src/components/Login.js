import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { useHistory, useNavigate } from "react-router-dom";
// import { login } from "../features/authSlice";
import logo from "../assets/img/ml_logo.png";

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
      <div>
        <img src={logo} alt="" className="mb-5" />
        {/* <h2>로그인</h2> */}
        <form onSubmit={handleLogin}>
          <div>
            {/* <labe/l>아이디:</label> */}
            <input
              placeholder="아이디"
              type="text"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
              required
              className="w-75 mb-3"
            />
          </div>
          <div>
            {/* <label>비밀번호:</label> */}
            <input
              placeholder="비밀번호"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-75 mb-3"
            />
          </div>
          <button
            type="submit"
            className="w-75 bg-primary text-white mb-1 py-2 rounded border-0"
          >
            로그인
          </button>
          <button
            type="submit"
            className="w-75 bg-danger text-white mb-1 py-2 rounded border-0"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
