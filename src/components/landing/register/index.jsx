import { useState } from "react";
import toast from "react-hot-toast";

const Registration = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });

    // Toast qo'shildi
    toast.success("Siz muvaffaqiyatli ro'yhatdan o'tdingiz!");

    onSubmit(); // CRM sahifaga o'tish
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
          Ro'yhatdan o'tish
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ism"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
        >
          Ro'yhatdan o'tish
        </button>

        <p className="mt-4 text-gray-600 text-sm text-center">
          Allaqachon hisobingiz bormi?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Kirish
          </span>
        </p>
      </form>
    </div>
  );
};

export default Registration;
