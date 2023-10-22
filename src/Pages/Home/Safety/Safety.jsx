import safetyBg from "../../../assets/safety/safety-bg.jpg"
import safetyImg from "../../../assets/safety/safety1.jpg"
import safetyImg2 from "../../../assets/safety/safety2.jpg"
import safetyImg3 from "../../../assets/safety/safety3.jpg"
import safetyImg4 from "../../../assets/safety/safety4.jpg"


const Safety = () => {
    return (
        <div>
            <div className="w-11/12 md:w-9/12 mx-auto my-12">
                <h1 className="text-center text-rose-500 text-4xl font-bold mb-10">Safety tips for kids</h1>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <img src={safetyImg} alt="Safety img" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Safety;