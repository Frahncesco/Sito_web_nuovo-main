import React, { useState, useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === "password123") {
      setSuccess(true);
      setError("");
      login();
    } else {
      setError("Password errata. Riprova.");
      setSuccess(false);
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [success, navigate]);

  return (
    <div>
      <div className="min-h-screen bg-[#FCFBF8]">
        <div className="min-h-screen flex items-center justify-center bg-[#8BAF9C]/20">
       <div className="bg-white shadow-lg rounded-xl px-4 py-6 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[32%] max-w-lg">
            <h1 className="text-2xl font-semibold text-[#8BAF9C] mb-6 text-center">
              Login Community
            </h1>

            {!isAuthenticated ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#8BAF9C]">Email:</label>
                  <input
                    type="email"
                    className="mt-1 block w-full px-4 py-2 border border-[#8BAF9C] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BAF9C]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={success}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#8BAF9C]">Password:</label>
                  <input
                    type="password"
                    className="mt-1 block w-full px-4 py-2 border border-[#8BAF9C] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BAF9C]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={success}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full ${success ? "bg-gray-400 cursor-not-allowed" : "bg-[#8BAF9C] hover:bg-[#7FA78F]" } text-white font-medium py-2 rounded-md transition duration-200`}
                  disabled={success}
                >
                  {success ? "Accesso effettuato" : "Login"}
                </button>
              </form>
            ) : (
              <div className="text-center">
                <p className="text-[#8BAF9C] font-medium mb-4">
                  Hai già effettuato l'accesso.
                </p>
                <button
                  onClick={logout}
                  className="w-full bg-[#D96C6C] hover:bg-[#c55c5c] text-white font-medium py-2 rounded-md transition duration-200"
                >
                  Logout
                </button>
              </div>
            )}

            {error && (
              <div className="flex items-center mt-4 text-red-600">
                <XCircle className="h-5 w-5 mr-2" />
                <span>{error}</span>
              </div>
            )}
            {success && (
              <div className="flex items-center mt-4 text-[#8BAF9C]">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Login effettuato con successo!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;