import React, {useState, useEffect} from 'react';
import Navbar from '../components/navbar.js';
import contohGambar from "../assets/fiqri-aziz-octavian-ONlW_Ye8HcQ-unsplash.jpg";
import fotoprofil from "../assets/Ellipse 12.png";
import axios from "axios";



const Dashboard = () => {
  const [transaction, setTransaction] = useState([]);

  useEffect(()=>{
    getTransaction();
  },[]);

  const [totaltrans, setTotalTrans] = useState(0);

  const getTransaction = async() =>{
    const response = await axios.get('http://localhost:5000/transaction');
    setTransaction(response.data);
  } 

  const getTotalTransaction = async() =>{
    const response = await axios.get('http://localhost:5000/transaction/total');
    console.log(response.data);
  }

  return (
    <div className="bg-abumuda w-full">
      <div className='absolute'>
        <Navbar/>
      </div>
      <div className="container py-16">
        <div className = "pt-6">Beranda</div>
        <div className = "text-2xl font-bold pb-4">Halaman Dashboard</div>
        <div className = "relative">
            <img src={contohGambar} className="object-cover h-40 w-full rounded-md"></img>
            <div className = "absolute top-1/3 w-full">
              <img src={fotoprofil} className="object-cover rounded-full h-12 w-12 mx-auto content-center"></img>
              <div class="text-2xl text-white w-full text-center">Selamat Datang Cahya di Toko Cahya Abadi</div>
            </div>
        </div>   
        <div className="flex my-4 gap-6">
          <div className = "w-1/2 bg-white shadow-md rounded-md flex h-8">
            <div className="w-full text-center items-center content-center">Total Dokumen : </div>
          </div>
          <div className = "w-1/2 bg-white shadow-md rounded-md h-8">
            <div className="w-full text-center items-center content-center">Jumlah Produk : </div>
          </div>
        </div>
        <div className='flex'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8 w-5/6">
            <div className='p-4 bg-white rounded-md items-center shadow-md'>
              <div className = "">Penjualan Hari Ini</div>
              <div className = "flex justify-between">
                <div className = "flex-col font-bold text-2xl content-center items-center">500.000</div>
                <div className = "">
                  <div className = "text-sm text-hijau">+36%</div>
                  <div className = "text-xs text-abu">dari kemarin</div>
                </div>
              </div>
            </div>
            <div className='p-4 bg-white rounded-md items-center shadow-md'>
              <div className = "">Total Penjualan</div>
                <div className = "flex justify-between">
                  <div className = "flex-col font-bold text-2xl content-center items-center">5.000.000</div>
                  <div className = "">
                    <div className = "text-sm text-hijau">+36%</div>
                    <div className = "text-xs text-abu">dari kemarin</div>
                  </div>
                </div>
            </div>
            <div className='p-4 bg-white rounded-md items-center shadow-md'>
              <div className = "">Total Transaksi</div>
                <div className = "flex justify-between">
                  <div className = "flex-col font-bold text-2xl content-center items-center"> kali</div>
                  <div className = "">
                    <div className = "text-sm text-hijau">+36%</div>
                    <div className = "text-xs text-abu">dari kemarin</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-2 w-1/6 ml-8 bg-white rounded-md'></div>
        </div>
        <div className = "flex mt-4 justify-between gap-4">
          <div className = "bg-white w-3/4 rounded-md shadow-md">
            <div className = "flex justify-between p-3">
              <div>
                <div className = "text-lg font-bold">Riwayat Transaksi</div>
                <div className = "text-base">Beberapa transaksi terkini</div>
              </div>
              <div className="text-base text-birumuda"> Lihat semua transaksi</div>
            </div>
            <div className="">
              <table className="flex table-fixed justify-center py-4">
                <tbody>
                  {transaction.map((trans)=>(
                    <tr key={trans.id} className = "border-b-2 h-16">
                    <td className = "w-40 ">{trans.label}</td>
                    <td className="w-56">
                      <div className="font-bold">{trans.idtrans}</div>
                      <div>{trans.paymenttype}</div>
                    </td>
                    <td className = "w-48">
                      <div className="text-lg font-bold">Rp {trans.price}</div>
                      <div>{trans.date}</div>
                    </td>
                    <td className = "w-32">{trans.member}</td>
                    <td className = "w-32">Button</td>
                  </tr>
                  ))}
                </tbody>
              </table> 
            </div>
          </div>
          <div className = "w-1/4">
            <div className="bg-white mb-4 h-52 shadow-md rounded-md">

            </div>
            <div className = "bg-white h-52 shadow-md rounded-md">hai</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
