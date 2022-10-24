import React, { useState, useEffect } from "react";
import backgroundDaftar from "../assets/Background Halaman Daftar.png";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

function Daftar() {
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
                    className="border-2 rounded-lg w-full p-3 mb-1 text-gray-900 bg-white focus:border-black"
                    id="password"
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
                    className="border-2 rounded-lg w-full p-3 mb-1 text-gray-900 bg-white focus:border-black"
                    id="toko"
                    type="text"
                    name="toko"
                    placeholder="Masukkan Nama Toko"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-base" htmlFor="Alamat Toko">
                    Alamat Toko
                  </label>
                  <input
                    className="border-2 rounded-lg w-full p-3 mb-1 text-gray-900 bg-white focus:border-black"
                    id="alamat"
                    type="text"
                    name="alamat"
                    placeholder="Masukkan Alamat Toko"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-base" htmlFor="Nomor Telepon">
                    No.Telepon
                  </label>
                  <input
                    className="border-2 rounded-lg w-full p-3 mb-1 text-gray-900 bg-white focus:border-black"
                    id="nomor"
                    type="number"
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default Daftar;
