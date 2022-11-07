import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar.js";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { HiFilter } from "react-icons/hi";
import fotoprofil from "../assets/avatardefault_92824.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Document = () => {
  return (
    <>
      <div className="bg-abumuda w-full flex justify-center max-h-screen font-inter">
        <div className="absolute">
          <Navbar />
        </div>
        <div className="container py-16">
          <div className="content-center items-center">
            <div className="pt-6 flex justify-content">
              {" "}
              Beranda
              <span className="self-center">
                <BiChevronRight />
              </span>
              Dokumen
            </div>
            <div className="text-2xl font-bold pb-4">Halaman Dokumen</div>
            <div className="relative"></div>
            <div className="flex my-4 gap-6 justify-between">
              <div className="w-1/6 bg-white shadow-md rounded-md flex h-8">
                <button className="w-full text-sm text-center items-center content-center  text-white transition-colors duration-200 transform bg-birumuda rounded-md hover:bg-sky-400">
                  + Tambah Dokumen
                </button>
              </div>
              <div className="w-1/3 bg-white shadow-md rounded-md h-8">
                <div className="w-full text-center items-center content-center">
                  Total Dokumen :
                </div>
              </div>
            </div>

            <div className="flex mt-4 justify-between gap-4">
              <div className="bg-white w-full h-full rounded-md shadow-md">
                <div className="flex justify-between">
                  <div className="text-lg font-semibold flex items-center px-4">
                    Data Dokumen
                  </div>
                  <div className="flex px-4">
                    <div className="flex items-center">
                      <form action="">
                        <div className="relative flex items-center">
                          <AiOutlineSearch className="absolute text-gray-400 ml-5" />
                          <input
                            type="text"
                            placeholder="Cari Produk"
                            className=" text-sm font-normal rounded-md border-2 border-gray-300 pr-3 pl-6 py-1 m-4"
                          />
                        </div>
                      </form>
                      <button className="text-sm font-medium rounded-md border-2 border-gray-300 flex items-center px-2 py-1">
                        <span className="p-1">
                          <HiFilter />
                        </span>
                        Filter
                      </button>
                    </div>
                  </div>
                </div>   
                <div className="mb-4 border-b border-gray-200">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="tabDokumen" data-tabs-toggle="#tabDokumenContent" role="tablist">
                        <li className="mr-2" role="presentation">
                            <button className="inline-block p-4 rounded-t-lg border-b-2 border-black" id="all-tab" data-tabs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">Semua</button>
                        </li>
                        <li className="mr-2" role="presentation">
                            <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-black hover:border-gray-300 text-gray-500 border-gray-100" id="lunas-tab" data-tabs-target="#lunas" type="button" role="tab" aria-controls="lunas" aria-selected="false">Lunas</button>
                        </li>
                        <li className="mr-2" role="presentation">
                            <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-black hover:border-gray-300  text-gray-500 border-gray-100" id="hutang-tab" data-tabs-target="#hutang" type="button" role="tab" aria-controls="hutang" aria-selected="false">Hutang</button>
                        </li>
                        <li role="presentation">
                            <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-black hover:border-gray-300  text-gray-500 border-gray-100" id="kulakan-tab" data-tabs-target="#kulakan" type="button" role="tab" aria-controls="kulakan" aria-selected="false">Kulakan</button>
                        </li>
                    </ul>
                </div>
                <div id="tabDokumenContent">
                    <div className="p-4" id="all" role="tabpanel" aria-labelledby="all-tab">
                    </div>
                    <div className="hidden p-4" id="lunas" role="tabpanel" aria-labelledby="lunas-tab">
                    </div>
                    <div className="hidden p-4" id="hutang" role="tabpanel" aria-labelledby="hutang-tab">
                    </div>
                    <div className="hidden p-4" id="kulakan" role="tabpanel" aria-labelledby="kulakan-tab">
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
