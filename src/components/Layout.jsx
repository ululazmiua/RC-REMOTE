import { Outlet } from "react-router";
import logo from "../assets/logo.png";

export default function Layout() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain rounded-full" />
          <h1 className="text-white font-bold text-lg">IOT seulanga 2025</h1>
        </div>
      </header>

      {/* Konten halaman */}
      <main className="flex-grow flex items-center justify-center p-4">
        <Outlet />
      </main>
    </div>
  );
}
