import { FormEvent, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { compareSync } from "bcryptjs";
import Button from "@mui/material/Button";
import { accounts } from "../data/account";
import miniLogo from "../assets/logo/mini_logo.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Trim once to avoid subtle whitespace mismatches
  const trimmedUsername = useMemo(() => username.trim(), [username]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const account = accounts.find((acc) => acc.name === trimmedUsername);
    const isValid = account ? compareSync(password, account.password) : false;

    if (isValid) {
      setError("");
      localStorage.setItem("isAuthenticated", "true");
      navigate("/app");
    } else {
      setError("Tên đăng nhập hoặc mật khẩu không đúng");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-start justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-lg rounded-xl border border-green-100 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg w-12 h-12 flex items-center justify-center overflow-hidden">
              <img src={miniLogo} alt="Logo" className="h-full w-auto max-w-full object-contain" />
            </div>
            <div className="leading-tight text-gray-700">
              <div className="text-2xl font-bold " style={{ color: "#b91c1c" }}>  <h1 className="text-sm font-semibold font-bold">TRUNG TÂM DN&ĐTLX</h1> 
                
              </div>
              <div > <p className="text-xs text-gray-400">TRƯỜNG CAO ĐẲNG AN NINH NHÂN DÂN 1</p> </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Đăng nhập</h2>
          <p className="text-sm text-gray-500 mb-6">Website học & thi bằng lái</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700" htmlFor="username">
                Tên đăng nhập
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-800 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                placeholder="Tên đăng nhập"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700" htmlFor="password">
                Mật khẩu
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-800 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                placeholder="Nhập mật khẩu"
              />
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-700">
                {error}
              </div>
            )}

            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              size="large"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
                py: 1.25,
              }}
            >
              Đăng nhập
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
