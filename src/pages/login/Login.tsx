import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";
import { isEmpty } from "underscore";
import Input from "../../components/Input/Input";
import type { Errors } from "./Login.types";

const Login = () => {
  const { login, user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  // Form validations
  const validate = () => {
    const errors: Errors = {};

    if (isEmpty(username)) {
      errors.username = "Enter username.";
    }

    if (isEmpty(password)) {
      errors.password = "Enter password.";
    }

    setErrors(errors);
    return Boolean(isEmpty(errors));
  };

  // Submit handler for Login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      setLoading(true);
      try {
        await login(username, password);
        navigate(from, { replace: true });
      } catch {
        setLoginError("Invalid credentials");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-500 text-center mt-2">
          Sign in to continue
        </p>

        <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-3">
          <Input
            label="Username"
            placeholder="emilys"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={errors.username}
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          {loginError && (
            <p className="text-sm text-red-500 text-center">{loginError}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-black text-white font-medium hover:bg-gray-900 transition disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
