import React, { useState } from "react";
import backgroundDaftar from "../assets/Background Halaman Daftar.png";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import axios from "axios";

function Daftar() {
  const [namaPengguna, setnamaPengguna] = useState("");
  const [sandi, setsandi] = useState("");
  const [konfsandi, setKonfsandi] = useState("");
  const [telp, settelp] = useState("");
  const [namaToko, setnamaToko] = useState("");
  const [alamatToko, setalamatToko] = useState("");
  const [userError, setuserError] = useState("");
  const [passError, setpassError] = useState("");
  const [konfpassError, setkonfpassError] = useState("");
  const [numError, setnumError] = useState("");
  const [namaTokorror, setnamaTokorror] = useState("");
  const [addError, setaddError] = useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const validate = () => {
    const errors = {};

    if (namaPengguna === "") errors.namaPengguna = "Nama pengguna diperlukan";
    if (sandi === "") errors.sandi = "Kata sandi diperlukan";
    if (telp === "") errors.telp = "No.telepon diperlukan";
    if (namaToko === "") errors.namaToko = "Nama toko diperlukan";
    if (alamatToko === "") errors.alamatToko = "Alamat diperlukan";
    if (konfsandi === "" && konfsandi !== sandi)
      errors.konfsandi = "Kata sandi diperlukan atau kata sandi tidak sama";

    return Object.keys(errors).length === 0 ? null : errors;
  };

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
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }

    const errors = validate();
    if (errors) {
      setuserError(errors.namaPengguna);
      setpassError(errors.sandi);
      setkonfpassError(errors.konfsandi);
      setnumError(errors.telp);
      setnamaTokorror(errors.namaToko);
      setaddError(errors.alamatToko);
    } else {
      setuserError("");
      setpassError("");
      setkonfpassError("")
      setnumError("");
      setnamaTokorror("");
      setaddError("");
    }
  };

  return (
    <div className="grid grid-cols-2">
      <div>
        <img src={backgroundDaftar} className="h-screen w-screen"></img>
      </div>
      <div className="bg-abumuda h-screen">
        <div className="relative bg-white w-2/3 p-6 m-auto my-10 rounded-2xl drop-shadow-2xl">
          <div className="flex flex-col">
            <Link to="/">
              <button className="flex mt-1 mb-2 font-medium items-center text-birumuda hover:underline">
                <HiArrowLeft />
                Kembali
              </button>
            </Link>
            <h1 className="font-bold text-2xl mt-1 text-center">Daftar Toko</h1>
            <p className="text-sm text-center text-gray-800 mb-6">
              {" "}
              Sudah memiliki Akun?{" "}
              <a className="font-semibold text-birumuda hover:underline">
                <Link to="/">Masuk</Link>
              </a>
            </p>
            <form onSubmit={saveUser}>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <label
                      className="text-base text-gray-800"
                      htmlFor="Nama Pengguna"
                    >
                      Nama Pengguna
                    </label>
                    <p className="text-base text-red-500">{msg}</p>
                  </div>
                  <input
                    className="border rounded-lg w-full p-2 text-gray-900 bg-white focus:border-black"
                    id="namaPengguna"
                    type="text"
                    value={namaPengguna}
                    onChange={(e) => setnamaPengguna(e.target.value)}
                    name="namaPengguna"
                    placeholder="Masukkan Nama Pengguna"
                  />
                  <div className="text-red-500 text-sm">{userError}</div>
                </div>
                <div>
                  <div className="flex flex-col">
                    <label className="text-base" htmlFor="Kata Sandi">
                      Kata Sandi
                    </label>
                    <div className=" flex flex-col">
                      <input
                        className="border rounded-lg w-full p-2 text-gray-900 bg-white focus:border-black"
                        id="sandi"
                        value={sandi}
                        onChange={(e) => setsandi(e.target.value)}
                        type="password"
                        name="sandi"
                        placeholder="Masukkan Kata Sandi"
                      />
                      <div className="text-red-500 text-sm text-start">
                        {passError}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-base" htmlFor="Kata Sandi">
                      Konfirmasi Kata Sandi
                    </label>
                    <div className=" flex flex-col">
                      <input
                        className="border rounded-lg w-full p-2 text-gray-900 bg-white focus:border-black"
                        id="sandi"
                        value={konfsandi}
                        onChange={(e) => setKonfsandi(e.target.value)}
                        type="password"
                        name="sandi"
                        placeholder="Masukkan Ulang Kata Sandi"
                      />
                      <div className="text-red-500 text-sm text-start">
                        {konfpassError}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-base" htmlFor="Nama Toko">
                      Nama Toko
                    </label>
                    <input
                      className="border rounded-lg w-full p-2 text-gray-900 bg-white focus:border-black"
                      id="toko"
                      type="text"
                      value={namaToko}
                      onChange={(e) => setnamaToko(e.target.value)}
                      name="toko"
                      placeholder="Masukkan Nama Toko"
                    />
                    <div className="text-red-500 text-sm">{namaTokorror}</div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-base" htmlFor="Alamat Toko">
                      Alamat Toko
                    </label>
                    <input
                      className="border rounded-lg w-full p-2 text-gray-900 bg-white focus:border-black"
                      id="alamat"
                      type="text"
                      value={alamatToko}
                      onChange={(e) => setalamatToko(e.target.value)}
                      name="alamat"
                      placeholder="Masukkan Alamat Toko"
                    />
                    <div className="text-red-500 text-sm">{addError}</div>
                  </div>
                  <div className="flex flex-col mb-3">
                    <label className="text-base" htmlFor="Nomor Telepon">
                      No.Telepon
                    </label>
                    <input
                      className="border rounded-lg w-full p-2 text-gray-900 bg-white focus:border-black"
                      id="nomor"
                      type="telp"
                      value={telp}
                      onChange={(e) => settelp(e.target.value)}
                      name="nomor"
                      placeholder="Masukkan No.Telepon"
                    />
                    <div className="text-red-500 text-sm">{numError}</div>
                  </div>
                  <div className="flex items-center text-sm mt-1 mb-6">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border rounded focus:accent-birumuda"
                    />
                    <span className="ml-1">
                      Saya setuju dengan{" "}
                      <a className="text-birumuda font-medium">
                        Syarat dan Ketentuan
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center flex-col">
                    <button
                      type="submit"
                      className="bg-birumuda text-white py-3 mb-1 text-base font-bold w-full radius rounded-full"
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
