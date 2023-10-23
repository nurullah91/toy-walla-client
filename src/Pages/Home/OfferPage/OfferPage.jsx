import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const OfferPage = () => {


    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 200,
            easing: 'ease-in-sine',
        });
    }, []);


    return (
        <div className="offer-sec py-20">

            <div className="w-11/12 lg:w-9/12 mx-auto mb-12">
                <h1 className="text-center text-white text-4xl font-bold mb-10">Grab your offer now</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div data-aos="fade-up" className="relative">

                        <div className="relative">
                            <img className="w-full rounded" src="https://i.ibb.co/rZ1VbrN/truck.jpg" alt="Car" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-white opacity-0 hover:opacity-100 transition-all duration-500 flex justify-center items-center">
                                <h3 className="text-xl text-center font-bold">Voucher: NS45</h3>
                            </div>

                        </div>
                        <div className="bg-rose-400 absolute -top-6 -right-6 p-4 rounded-full border-4 border-white text-white hover:scale-110 transition-all duration-300 hover:bg-rose-500 text-center">
                            <h2 className="text-3xl font-bold">45%</h2>
                            <p>Discount</p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="relative">
                        <div className="relative">
                            <img className="w-full rounded" src="https://i.ibb.co/JjRtCXD/police3.jpg" alt="Car" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-white opacity-0 hover:opacity-100 transition-all duration-500 flex justify-center items-center">
                                <h3 className="text-xl text-center font-bold">Voucher: NS56</h3>
                            </div>
                        </div>
                        <div className="bg-rose-400 absolute -top-6 -right-6 p-4 rounded-full border-4 border-white text-white hover:scale-110 transition-all duration-300 hover:bg-rose-500 text-center">
                            <h2 className="text-3xl font-bold">56%</h2>
                            <p>Discount</p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="relative">
                        <div className="relative">
                            <img className="w-full rounded" src="https://i.ibb.co/4PK3yHz/raching3.jpg" alt="Car" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-white opacity-0 hover:opacity-100 transition-all duration-500 flex justify-center items-center">
                                <h3 className="text-xl text-center font-bold">Voucher: NS90</h3>
                            </div>
                        </div>
                        <div className="bg-blue-400 absolute -top-6 -right-6 p-4 rounded-full border-4 border-white text-white hover:scale-110 transition-all duration-300 hover:bg-blue-500 text-center">
                            <h2 className="text-3xl font-bold">90&#2547;</h2>
                            <p>Discount</p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="relative">
                        <div className="relative">
                            <img className="w-full rounded" src="https://i.ibb.co/MMXyVPJ/pexels-the-lazy-artist-gallery-2527939-12.jpg" alt="Car" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-white opacity-0 hover:opacity-100 transition-all duration-500 flex justify-center items-center">
                                <h3 className="text-xl text-center font-bold">Voucher: NS35</h3>
                            </div>
                        </div>
                        <div className="bg-purple-400 absolute -top-6 -right-6 p-4 rounded-full border-4 border-white text-white hover:scale-110 transition-all duration-300 hover:bg-purple-500 text-center">
                            <h2 className="text-3xl font-bold">35%</h2>
                            <p>Discount</p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="relative">
                        <div className="relative">
                            <img className="w-full rounded" src="https://i.ibb.co/0YvbkXM/gallery9.jpg" alt="Car" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-white opacity-0 hover:opacity-100 transition-all duration-500 flex justify-center items-center">
                                <h3 className="text-xl text-center font-bold">Voucher: NS45</h3>
                            </div>
                        </div>
                        <div className="bg-rose-400 absolute -top-6 -right-6 p-4 rounded-full border-4 border-white text-white hover:scale-110 transition-all duration-300 hover:bg-rose-500 text-center">
                            <h2 className="text-3xl font-bold">45%</h2>
                            <p>Discount</p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="relative">
                        <div className="relative">
                            <img className="w-full rounded" src="https://i.ibb.co/YkNP0Ck/police1.jpg" alt="Car" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-white opacity-0 hover:opacity-100 transition-all duration-500 flex justify-center items-center">
                                <h3 className="text-xl text-center font-bold">Voucher: NS450</h3>
                            </div>
                        </div>
                        <div className="bg-violet-500 absolute -top-6 -right-6 p-4 rounded-full border-4 border-white text-white hover:scale-110 transition-all duration-300 hover:bg-violet-600 text-center">
                            <h2 className="text-3xl font-bold">450&#2547;</h2>
                            <p>Discount</p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="relative">
                        <div className="relative">
                            <img className="w-full rounded" src="https://i.ibb.co/fnNc3vF/gallery4.jpg" alt="Car" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-white opacity-0 hover:opacity-100 transition-all duration-500 flex justify-center items-center">
                                <h3 className="text-xl text-center font-bold">Voucher: NS60</h3>
                            </div>
                        </div>
                        <div className="bg-green-400 absolute -top-6 -right-6 p-4 rounded-full border-4 border-white text-white hover:scale-110 transition-all duration-300 hover:bg-green-500 text-center">
                            <h2 className="text-3xl font-bold">60%</h2>
                            <p>Discount</p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="relative">
                        <div className="relative">
                            <img className="w-full rounded" src="https://i.ibb.co/c8Yfnz1/gallery8.jpg" alt="Car" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-white opacity-0 hover:opacity-100 transition-all duration-500 flex justify-center items-center">
                                <h3 className="text-xl text-center font-bold">Voucher: NS200</h3>
                            </div>
                        </div>
                        <div className="bg-purple-500 absolute -top-6 -right-6 p-4 rounded-full border-4 border-white text-white hover:scale-110 transition-all duration-300 hover:bg-purple-600 text-center">
                            <h2 className="text-3xl font-bold">200&#2547;</h2>
                            <p>Discount</p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="relative">
                        <div className="relative">
                            <img className="w-full rounded" src="https://i.ibb.co/bHcmBSc/gallery12.jpg" alt="Car" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-white opacity-0 hover:opacity-100 transition-all duration-500 flex justify-center items-center">
                                <h3 className="text-xl text-center font-bold">Voucher: NS350</h3>
                            </div>

                        </div>
                        <div className="bg-purple-500 absolute -top-6 -right-6 p-4 rounded-full border-4 border-white text-white hover:scale-110 transition-all duration-300 hover:bg-purple-600 text-center">
                            <h2 className="text-3xl font-bold">350&#2547;</h2>
                            <p>Discount</p>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default OfferPage;