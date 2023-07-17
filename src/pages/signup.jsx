import { useState } from "react";


export default function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        fullname: "",
        password: "",
        cpassword: "",
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
      const response = await fetch("https://cezor.onrender.com/auth/signup", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        let log = await response.json()
        console.log(log)
        console.error("Request failed:", response.statusText);
        return;
      }
      const data = await response.json();
      console.log(data);
      window.location.href = "/login"
     } catch (error) {
      console.error("Error:", error);
    }
  };
    return (
    <>
        <div className= "mt-8 h-screen w-screen bg-slate-200">
            <div className="h-full w-full flex flex-col items-center justify-center font-sans p-6">
                <div className=" bg-stone-50 rounded-xl w-1/2 flex h-96 items-center justify-center py-10 px-3 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                        <div >
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-black">
                            Sign up
                        </h2>
                        </div>
                        <form className="mt-6 space-y-6" action="#" method="POST" onSubmit={onSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                            <label htmlFor="username" className="sr-only">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="email"
                                value={formData.username}
                                onChange={onChange}
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-900 focus:outline-none focus:ring-yellow-900 sm:text-sm"
                                placeholder="Email"
                            />
                            </div>
                            <div>
                            <label htmlFor="password" className="sr-only">
                                Fullname
                            </label>
                            <input
                                id="fullname"
                                name="fullname"
                                type="text"
                                value={formData.fullname}
                                onChange={onChange}
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-900 focus:outline-none focus:ring-yellow-900 sm:text-sm"
                                placeholder="Fullname"
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
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-900 focus:outline-none focus:ring-yellow-900 sm:text-sm"
                                placeholder="Password"
                            />
                            </div>
                            <div>
                            <label htmlFor="cpassword" className="sr-only">
                                Confirm Password
                            </label>
                            <input
                                id="cpassword"
                                name="cpassword"
                                type="password"
                                value={formData.cpassword}
                                onChange={onChange}
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-900 focus:outline-none focus:ring-yellow-900 sm:text-sm"
                                placeholder="Confirm Password"
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
                            className="group relative flex w-full justify-center rounded-md border border-transparent text-green-100 py-2 px-4 text-sm font-bold bg-green-900 hover:text-green-900 hover:bg-green-400 focus:outline-none"
                            >
                            Sign up
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