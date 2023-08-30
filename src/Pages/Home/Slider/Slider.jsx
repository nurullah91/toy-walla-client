import { Link } from "react-router-dom";





const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/xfKgJgF/nubia-navarro-rg7z-Bt2c-A-Q-unsplash.jpg" className="w-full h-[40vh] lg:h-[70vh]" />
                    <div className="absolute flex items-center md:pl-12 pl-5 text-white left-0 w-3/4 lg:w-1/2 bg-gradient-to-r from-[#151515] via-[#00000076] to-[rgba(21, 21, 21, 0)] h-full top-0 ">

                        <div className='space-y-7'>
                            <h1 className="text-6xl font-bold hidden md:block">Our Latest Toy Cars</h1>
                            <p>Welcome to our Toy wala website, where imagination meets adventure! Explore a wide range of toy cars that will bring endless joy and excitement to children of all ages</p>
                            <Link className='btn btn-outline btn-secondary mr-5'>Discover More</Link>
                        </div>

                    </div>

                    <div className="absolute  transform -translate-y-1/2 right-10 space-x-5 bottom-5">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>



                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/KbWgpq7/toy-red-car-with-pinecone-top.jpg" className="w-full h-[40vh] lg:h-[70vh]" />
                    <div className="absolute flex items-center md:pl-12 pl-5 text-white left-0 w-3/4 lg:w-1/2 bg-gradient-to-r from-[#151515] via-[#00000076] to-[rgba(21, 21, 21, 0)] h-full top-0 ">

                        <div className='space-y-7'>
                            <h1 className="text-6xl font-bold hidden md:block">Our Collections</h1>
                            <p>Our collection features an extensive selection of toy cars inspired by real-life vehicles, from sleek sports cars to powerful monster trucks and everything in between. Each toy car is meticulously designed with attention to detail, ensuring an authentic and immersive play experience.</p>
                            <Link className='btn btn-outline btn-secondary mr-5'>Discover More</Link>
                        </div>

                    </div>

                    <div className="absolute transform -translate-y-1/2 right-10 space-x-5 bottom-5">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>



                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/tKhYnwx/closeup-small-toy-cars-table-with-small-christmas-trees-background.jpg" className="w-full h-[40vh] lg:h-[70vh]" />
                    <div className="absolute flex items-center md:pl-12 pl-5 text-white left-0 w-3/4 lg:w-1/2 bg-gradient-to-r from-[#151515] via-[#00000076] to-[rgba(21, 21, 21, 0)] h-full top-0 ">

                        <div className='space-y-7'>
                            <h1 className="text-6xl font-bold hidden md:block">Your Safety</h1>
                            <p>Safety is our top priority, and all our toy cars are rigorously tested to meet the highest quality and safety standards. You can have peace of mind knowing that your child is playing with toys that prioritize their well-being.</p>
                            <Link className='btn btn-outline btn-secondary mr-5'>Discover More</Link>
                        </div>

                    </div>

                    <div className="absolute transform -translate-y-1/2 right-10 space-x-5 bottom-5">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>



                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/DwBF9tp/closeup-shot-small-toy-car-wooden-train-track.jpg" className="w-full h-[40vh] lg:h-[70vh]" />
                    <div className="absolute flex items-center md:pl-12 pl-5 text-white left-0 w-3/4 lg:w-1/2 bg-gradient-to-r from-[#151515] via-[#00000076] to-[rgba(21, 21, 21, 0)] h-full top-0 ">

                        <div className='space-y-7'>
                            <h1 className="text-6xl font-bold hidden md:block">Discover more</h1>
                            <p>Browse our website to discover the perfect toy cars for every young car enthusiast. With a variety of colors, designs, and sizes, there&apos;s something for everyone. Whether you&apos;re looking for a single toy car or a complete set, we&apos;ve got you covered.</p>
                            <Link className='btn btn-outline btn-secondary mr-5'>Discover More</Link>
                        </div>

                    </div>

                    <div className="absolute transform -translate-y-1/2 right-10 space-x-5 bottom-5">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>






            </div>
        </div>
    );
};

export default Slider;