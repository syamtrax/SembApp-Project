import React, {useState, useEffect} from 'react';
import Navbar from '../components/navbar.js';
import contohGambar from "../assets/fiqri-aziz-octavian-ONlW_Ye8HcQ-unsplash.jpg";
import fotoprofil from "../assets/Ellipse 12.png";
import kasir from "../assets/Group.png"
import axios from "axios";



const Dashboard = () => {
  const [transaction, setTransaction] = useState([]);
  const [earning, setEarning] = useState(0);


  useEffect(()=>{
    getTransaction();
    getTotalTransaction();
    getSumTransaction();
  },[])

  const [totaltrans, setTotalTrans] = useState(0);

  const getTransaction = async() =>{
    const response = await axios.get('http://localhost:5000/transaction');
    setTransaction(response.data);
  } 

  const getTotalTransaction = async() =>{
    const response = await axios.get('http://localhost:5000/total');
    setTotalTrans(response.data);
  }

  const getSumTransaction = async() => {
    const response = await axios.get('http://localhost:5000/totalprice')
    setEarning(response.data)
  }

  return (
    <div className="bg-abumuda w-full flex justify-center max-h-screen">
      <div className='absolute'>
        <Navbar/>
      </div>
      <div className="container py-16">
        <div className='content-center items-center '>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 w-5/6">
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
                  <div className = "flex-col font-bold text-2xl content-center items-center">Rp {earning}</div>
                  <div className = "">
                    <div className = "text-sm text-hijau">+36%</div>
                    <div className = "text-xs text-abu">dari kemarin</div>
                  </div>
                </div>
            </div>
            <div className='p-4 bg-white rounded-md items-center shadow-md'>
              <div className = "">Total Transaksi</div>
                <div className = "flex justify-between">
                  <div className = "flex-col font-bold text-2xl content-center items-center">{totaltrans} kali</div>
                  <div className = "">
                    <div className = "text-sm text-hijau">+36%</div>
                    <div className = "text-xs text-abu">dari kemarin</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-2 w-1/6 ml-4 bg-white rounded-md shadow-md flex items-center content-center justify-center align-middle'>
              <img src={kasir} className = "h-16 content-center justify-center items-center"></img>
            </div>
        </div>
        <div className = "flex mt-4 justify-between gap-4">
          <div className = "bg-white w-3/4 h-full rounded-md shadow-md">
            <div className = "flex justify-between p-3">
              <div>
                <div className = "text-lg font-bold">Riwayat Transaksi</div>
                <div className = "text-base">Beberapa transaksi terkini</div>
              </div>
              <div className="text-base text-birumuda"> Lihat semua transaksi</div>
            </div>
            <div className="">
              <table className="flex table-fixed justify-center py-2 overflow-y-auto h-80">
                <tbody>
                  {transaction.map((trans)=>(
                    <tr key={trans.id} className = "border-b-2 h-16">
                    <td className = "w-40 text-center">{trans.label}</td>
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
          <div className = "w-1/4 gap-4">
            <div className="bg-white h-2/3 shadow-md rounded-md">
              <div className = "h-1/4 bg-birumuda text-white text-center justify-center items-center flex rounded-t-md font-bold">Notifikasi Produk</div>
              <table className='flex table-fixed justify-center py-2'>
                <thead>
                  <tr>
                    <th className='w-24 flex justify-start pl-2'>Nama</th>
                    <th className = "w-16 ">Stok</th>
                    <th className = "w-16 ">Kadaluarsa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className = "bg-white h-1/3 shadow-md rounded-md">
              <div className = "h-1/3 bg-birumuda text-white text-center justify-center items-center flex rounded-t-md font-bold">Notifikasi Dokumen</div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
