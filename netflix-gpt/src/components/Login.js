import { Header } from "./Header";

export const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
      <img
        alt="logo"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg"
      />
      </div>
        <form className="absolute bg-black w-3/12 mx-auto my-36 right-0 left-0 text-white text-center p-5 h-100">
        <h1 className="font-bold text-3xl text-left">Sign In</h1>
            <input type="text" placeholder="Email or mobile number" className="my-5 p-3 border-white w-full bg-gray-600" />
            <input type="password" placeholder="Password" className="mb-5 p-3 w-full bg-gray-600" />
            <button className="px-2 py-1 my-4 bg-red-700 w-full" type="submit">Sign in</button>
        </form>
    </div>
  );
};
