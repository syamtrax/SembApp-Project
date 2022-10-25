import React, { useState, useEffect } from "react";
import backgroundDaftar from "../assets/Background Halaman Daftar.png";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Daftar() {
  const [namaPengguna, setUsername] = useState("");
  const [sandi, setPassword] = useState("");
  const [telp, setNotelp] = useState("");
  const [namaToko, setNamatoko] = useState("");
  const [alamatToko, setAlamat] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/user", {
        namaPengguna,
        sandi,
        telp,
        namaToko,
        alamatToko,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid grid-cols-2">
      <img src={backgroundDaftar} className="h-screen w-screen"></img>
      <div className="bg-abumuda h-screen">
        <div className="bg-white mx-36 my-24 rounded-3xl p-6">
          <div>
            <button className="font-medium flex items-center text-birumuda mt-4">
              <Link to="/">
                <HiArrowLeft
                  // onClick={() => toggleOtp(false)}
                  className=""
                />
              </Link>
              Kembali
            </button>
            <h1 className="font-bold flex flex-col items-center text-5xl mt-1 mb-6">
              Daftar Toko
            </h1>
            <form onSubmit={saveUser}>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <label
                    className="text-base text-gray-800"
                    htmlFor="Nama Pengguna"
                  >
                    Nama Pengguna
                  </label>
                  <input
                    className="border rounded-lg w-full p-3 mb-1 text-gray-900 bg-white focus:border-black"
                    id="username"
                    type="text"
                    value={namaPengguna}
                    onChange={(e) => setUsername(e.target.value)}
                    name="username"
                    placeholder="Masukkan Nama Pengguna"
                  />
                  {/* {checkedUsername.length > 0 && (
                  <p className="text-red-500">{checkedUsername}</p>
                )} */}
                </div>
                <div className="relative flex flex-col py-2">
                  <label className="text-base" htmlFor="Kata Sandi">
                    Kata Sandi
                  </label>
                  <div className="flex items-center justify-evenly">
                    <input
                      className="border rounded-lg w-full p-3 mb-1 text-gray-900 bg-white focus:border-black"
                      id="password"
                      value={sandi}
                      onChange={(e) => setPassword(e.target.value)}
                      type="text"
                      name="password"
                      placeholder="Masukkan Kata Sandi"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="text-base" htmlFor="Nama Toko">
                      Nama Toko
                    </label>
                    <input
                      className="border rounded-lg w-full p-3 mb-1 text-gray-900 bg-white focus:border-black"
                      id="toko"
                      type="text"
                      value={namaToko}
                      onChange={(e) => setNamatoko(e.target.value)}
                      name="toko"
                      placeholder="Masukkan Nama Toko"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="text-base" htmlFor="Alamat Toko">
                      Alamat Toko
                    </label>
                    <input
                      className="border rounded-lg w-full p-3 mb-1 text-gray-900 bg-white focus:border-black"
                      id="alamat"
                      type="text"
                      value={alamatToko}
                      onChange={(e) => setAlamat(e.target.value)}
                      name="alamat"
                      placeholder="Masukkan Alamat Toko"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="text-base" htmlFor="Nomor Telepon">
                      No.Telepon
                    </label>
                    <input
                      className="border rounded-lg w-full p-3 mb-1 text-gray-900 bg-white focus:border-black"
                      id="nomor"
                      type="number"
                      value={telp}
                      onChange={(e) => setNotelp(e.target.value)}
                      name="nomor"
                      placeholder="Masukkan No.Telepon"
                    />
                  </div>
                  <div className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border rounded text-black focus:border-black"
                    />
                    <span className="ml-2">
                      Saya setuju dengan{" "}
                      <a className="text-birumuda font-medium">
                        Syarat dan Ketentuan
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center flex-col">
                    <button
                      type="submit"
                      className="bg-birumuda text-white px-4 py-3 mt-8 mb-4 text-base font-bold w-full radius rounded-full"
                    >
                      Daftar
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Daftar;
