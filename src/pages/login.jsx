import { useState } from "react";



export default function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });

      const onChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://cezor.onrender.com/auth/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
     
      localStorage.setItem("token", data.token);
      window.location.href = "/";

      console.log(data.token)
    } catch (error) {
      console.error("Error:", error);
    }
  };
    return (
    <>
        <div className= "h-screen w-screen bg-center bg-cover bg-no-repeat">
            <div className="h-full w-full flex flex-col items-center justify-center font-sans p-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                <div className=" bg-stone-50 rounded-xl w-1/2 flex h-80 items-center justify-center py-12 px-3 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                        <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in
                        </h2>
                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={onSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                            <label htmlFor="email-address" className="sr-only">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={onChange}
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-900 focus:outline-none focus:ring-green-900 sm:text-sm"
                                placeholder="Email address"
                            />
                            </div>
                            <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={onChange}
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-900 focus:outline-none focus:ring-green-900 sm:text-sm"
                                placeholder="Password"
                            />
                            </div>
                        </div>
            
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-green-900 focus:ring-green-700"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                            </div>
            
                            <div className="text-sm">
                            <a href="#" className="font-medium text-green-900 hover:text-green-700">
                                Forgot your password?
                            </a>
                            </div>
                        </div>
            
                        <div>
                            <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent text-green-100 py-2 px-4 text-sm font-bold bg-green-900 hover:text-green-900 hover:bg-green-100 focus:outline-none"
                            >
                            
                            Sign in
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}