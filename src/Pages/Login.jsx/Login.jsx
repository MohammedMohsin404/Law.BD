import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser,user ,signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // navigate(from, { replace: true });
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    try {
      await loginUser(email, password);
      navigate(from, { replace: true }); // 🔁 redirect to previous page
       toast.success(` You Loged In Successfully ${user.displayName}`);
    } catch (err) {
      console.log(err.message);
    }
  };

    const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => navigate(from, { replace: true }))
      .catch((err) => console.log(err.message));
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-[#F8FAFC]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#0EA106]">
          Login to Qanun-BD
        </h2>

        <form onSubmit={handleLogin} className="space-y-4 mt-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0EA106]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0EA106]"
          />
          <button
            type="submit"
            className="w-full bg-[#0EA106] text-white py-2 rounded-md hover:bg-green-700"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600">Or</p>
          <button onClick={handleGoogleLogin} className="mt-2 w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100">
            Continue with Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/auth/signup" className="text-[#0EA106] hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
