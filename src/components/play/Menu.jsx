import { useNavigate } from "react-router";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <button
        type="button"
        onClick={() => navigate("/play")}
        className="px-10 py-5 text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl shadow-xl hover:from-blue-500 hover:to-blue-700 hover:scale-105 active:scale-95 transition-all duration-800 ease-in-out "
      >
        Play RC Car
      </button>
      <button
        type="button"
        onClick={() => navigate("/doc")}
        className="px-10 py-5 text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl shadow-xl hover:from-blue-500 hover:to-blue-700 hover:scale-105 active:scale-95 transition-all duration-800 ease-in-out "
      >
        Documentation
      </button>
    </div>
  );
}
