import safetyImg from "../../../assets/safety/safety1.jpg"
import safetyImg2 from "../../../assets/safety/safety2.jpg"
import safetyImg3 from "../../../assets/safety/safety3.jpg"
import safetyImg4 from "../../../assets/safety/safety4.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Safety = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          delay: 50,
          easing: 'ease-in-out',
        });
      }, []);




    return (
        <div className="">
            <div className="w-11/12 md:w-9/12 mx-auto my-12">
                <h1 className="text-center text-rose-500 text-4xl font-bold mb-10">Safety tips for kids</h1>

                <div className="">
                    <div className="overflow-hidden grid grid-cols-1 md:grid-cols-9 items-center gap-x-6 md:gap-y-12">
                        <div data-aos="fade-right" className="md:col-span-4">
                            <h4 className="text-2xl font-bold text-slate-600 pb-3 ">Keep Distance from Electricity</h4>
                            <div className="min-h-[5px] bg-orange-400 w-1/3 mb-5"></div>


                            <p className="text-justify w-11/12">Teach your child about electrical safety by explaining the importance of staying away from power outlets and cords. Ensure cords are out of reach, and use outlet covers to prevent little fingers from exploring where they shouldn&apos;t. Educate your child about the dangers of electrical appliances and the importance of not touching them without supervision.</p>
                        </div>
                        <div data-aos="fade-left" className="md:col-span-5 mb-6">
                            <img className="w-full rounded-lg" src={safetyImg} alt="Safety img" />
                        </div>

                        <div data-aos="fade-left" className="md:col-span-5 mb-6">
                            <img className="w-full rounded-lg" src={safetyImg2} alt="Safety img" />
                        </div>
                        <div data-aos="fade-right" className="md:col-span-4">
                            <h4 className="text-2xl font-bold text-slate-600 pb-3 ">Wear Helmet</h4>
                            <div className="min-h-[5px] bg-orange-400 w-1/3 mb-5"></div>


                            <p className="text-justify w-11/12">Protect your child&apos;s head with a sturdy helmet when they&apos;re enjoying their toy car adventures. Helmets reduce the risk of head injuries during play. Make it a fun ritual by letting your child choose a helmet they love, but always ensure it fits securely and is worn correctly.</p>
                        </div>


                        <div data-aos="fade-right" className="md:col-span-4">
                            <h4 className="text-2xl font-bold text-slate-600 pb-3 ">Kids Special Dress</h4>
                            <div className="min-h-[5px] bg-orange-400 w-1/3 mb-5"></div>


                            <p className="text-justify w-11/12">Dressing your child appropriately for toy car play is a safety must. Opt for comfortable clothing and closed-toe shoes that won&apos;t hinder movement. Bright colors can enhance visibility, and long sleeves and pants provide an extra layer of protection.</p>
                        </div>
                        <div data-aos="fade-left" className="md:col-span-5 mb-6">
                            <img className="w-full rounded-lg" src={safetyImg3} alt="Safety img" />
                        </div>

                        <div data-aos="fade-left" className="md:col-span-5 mb-6">
                            <img className="w-full rounded-lg" src={safetyImg4} alt="Safety img" />
                        </div>
                        <div data-aos="fade-right" className="md:col-span-4">
                            <h4 className="text-2xl font-bold text-slate-600 pb-3 ">Keep Away from Dangerous Toys</h4>
                            <div className="min-h-[5px] bg-orange-400 w-1/3 mb-5"></div>


                            <p className="text-justify w-11/12">Prioritize your child&apos;s safety by inspecting their toy car collection for any broken or damaged cars that might have sharp edges or loose parts. Remove or repair any potentially hazardous toys, and regularly check for recalls to ensure a safe play environment.</p>
                        </div>




                    </div>
                </div>

            </div>
        </div>
    );
};

export default Safety;