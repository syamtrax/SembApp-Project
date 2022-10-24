import React from 'react'
import loginBackground from '../assets/bgLogin.jpg'

const Login = () => {
  return (
    <div className="relative w-full h-screen flex items-center bg-cover">
        <img src={loginBackground} className="absolute w-full h-full object-cover" />

            <div className="w-1/4 p-6 m-auto bg-white rounded-md shadow-md z-10">
                <h1 className="text-4xl font-bold text-center font-inter">
                   SembApp
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="uname"
                            className="block text-sm font-medium text-gray-800"
                        >
                            Nama Pengguna
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-3 mt-2 text-black bg-white border rounded-md focus:border-black"
                            placeholder='Nama Pengguna'
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-medium text-gray-800"
                        >
                            Kata Sandi
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-3 mt-2 text-black bg-white border rounded-md focus:border-black"
                            placeholder="Kata Sandi"
                        />
                    </div>
                    <div className="flex items-center justify-between pt-3">
                        <div className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 text-black border rounded focus:border-black" />
                            <label for="remember" className="ml-2 text-sm font-medium text-gray-800">
                                Ingat Saya
                            </label>
                         </div>
                         <div className="flex items-center">
                            <a href="#" className="ml-2 text-sm font-medium text-sky-400">
                                Lupa Kata Sandi?
                            </a>
                            
                        </div>      
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-500 rounded-md hover:bg-sky-400">
                            Masuk
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Belum memiliki toko?{" "}
                    <a
                        href="#"
                        className="font-medium text-sky-400 hover:underline"
                    >
                        Daftarkan toko
                    </a>
                </p>
            </div>
    </div>

    

    
  )
}
