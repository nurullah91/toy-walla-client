import giftImg1 from "../../../assets/gift1.jpg"
import giftImg2 from "../../../assets/birthday-gift.jpg"
import giftImg3 from "../../../assets/mom-gift.jpg"
import giftImg4 from "../../../assets/gift2.jpg"
import giftImg5 from "../../../assets/gift3.jpg"


const SendGift = () => {
    return (
        <div className="w-11/12 lg:w-9/12 mx-auto my-12">
            <h3 className="text-center text-4xl font-bold text-rose-500 mb-1">Send gift by us</h3>
            <p className="text-center text-slate-600 font-semibold mb-2">You can order and send gift via us. Our team will deliver your gift with excellent package</p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div data-aos="fade-up" className="border-y-4 px-4 py-6 border-rose-500 rounded-2xl bg-slate-300 bg-opacity-50">
                    <img src={giftImg1} alt="Gift image" />
                    <h3 className="text-2xl font-semibold">Love gift</h3>
                </div>

                <div data-aos="fade-up" className="border-y-4 px-4 py-6 border-rose-500 rounded-2xl bg-slate-300 bg-opacity-50">
                    <img src={giftImg2} alt="Gift image" />
                    <h3 className="text-2xl font-semibold">Birthday gift</h3>
                </div>

                <div data-aos="fade-up" className="border-y-4 px-4 py-6 border-rose-500 rounded-2xl bg-slate-300 bg-opacity-50">
                    <img src={giftImg3} alt="Gift image" />
                    <h3 className="text-2xl font-semibold">MOM&apos;s gift</h3>

                </div>

                <div data-aos="fade-up" className="border-y-4 px-4 py-6 border-rose-500 rounded-2xl bg-slate-300 bg-opacity-50">
                    <img src={giftImg4} alt="Gift image" />
                    <h3 className="text-2xl font-semibold">Surprise gift</h3>
                </div>
                <div data-aos="fade-up" className="border-y-4 px-4 py-6 border-rose-500 rounded-2xl bg-slate-300 bg-opacity-50">
                    <img src={giftImg5} alt="Gift image" />
                    <h3 className="text-2xl font-semibold">Special gift</h3>
                </div>
            </div>

        </div>
    );
};

export default SendGift;