import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar.js";
import {BiChevronRight} from "react-icons/bi";
import fotoprofil from "../assets/avatardefault_92824.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Product = () => {

  
 
  return (
    <>
      <div className="bg-abumuda w-full flex justify-center max-h-screen font-inter">
        <div className="absolute">
          <Navbar />
        </div>
        <div className="container py-16">
          <div className="content-center items-center">
            <div className="pt-6 flex justify-content"> Beranda 
            <span className="self-center">
            <BiChevronRight />
            </span> 
            Produk
              </div>
            <div className="text-2xl font-bold pb-4">Halaman Produk</div>
            <div className="relative">
            </div>
            <div className="flex my-4 gap-6 justify-between">
              <div className="w-1/6 bg-white shadow-md rounded-md flex h-8">
                <button className="w-full text-sm text-center items-center content-center  text-white transition-colors duration-200 transform bg-birumuda rounded-md hover:bg-sky-400">
                  + Tambah Produk
                </button>
              </div>
              <div className="w-1/3 bg-white shadow-md rounded-md h-8">
                <div className="w-full text-center items-center content-center">
                  Jumlah Produk :
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-6">
                <div className="p-4 h-22 w-full bg-white rounded-md items-center shadow-md text-center text-lg">
                  Notifikasi Kedaluwarsa
                  <div className="text-center">
                    Produk: 

                  </div>
                </div>
                <div className="p-4 h-22 w-full bg-white rounded-md items-center shadow-md text-center text-lg">   
                Notifikasi Kedaluwarsa
                  <div className="text-center">
                    Produk: 

                  </div>
                </div>
            </div>
            <div className="flex mt-4 justify-between gap-4">
              <div className="bg-white w-full h-full rounded-md shadow-md">
                <div className="flex justify-between">
                  <div>
                    <div className="text-lg font-bold p-4">Data Produk</div>
                  </div>
                </div>
                <div className="">
                  <table className="flex table-fixed justify-center overflow-y-auto h-80">
                    <tbody>
                            <tr className="border-b-2 h-16">
                              <td className="w-40 text-center">
                              </td>
                              <td className="w-56">
                                <div className="font-bold"></div>
                                <div></div>
                              </td>
                              <td className="w-48">
                                <div className="text-lg font-bold">
                                  Rp
                              
                                </div>
                                <div></div>
                              </td>
                              <td className="w-32"></td>
                              <td className="w-32">
                                <button>Button</button>
                              </td>
                            </tr>                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
