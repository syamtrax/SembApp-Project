import React from "react";
import pengaturan from "../assets/pengaturan.png";
import help from "../assets/help.png";
import notifikasi from "../assets/notifikasi.png";
import avatar from "../assets/Avatar w. photo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed top-0 right-0 left-0 z-50 w-full bg-white h-16 shadow-md">
      <div className="flex justify-between h-full mx-auto">
        <div className="flex">
          <div className="flex items-center text-2xl font-black w-40 text-center px-5 bg-birumuda text-white">
            SembApp
          </div>
          <div className="flex text-base justify-start text-center items-center">
            <div className="px-5 bg-white hover:font-bold">Beranda</div>
            <div className="px-5 bg-white hover:font-bold">Produk</div>
            <div className="px-5 bg-white hover:font-bold">Transaksi</div>
            <div className="px-5 bg-white hover:font-bold">Keuangan</div>
            <div className="px-5 bg-white hover:font-bold">Dokumen</div>
          </div>
        </div>
        <div className="flex text-base text-center items-center">
          <button className="px-2 py-7">
            <img src={notifikasi} />
          </button>
          <button className="px-2 py-7">
            <img src={help} />
          </button>
          <button className="px-2 py-7">
            <img src={pengaturan} />
          </button>
          <button className="px-8 py-7" onClick={Logout}>
            <img className="" src={avatar} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
