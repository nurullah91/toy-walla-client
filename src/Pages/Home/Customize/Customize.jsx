import { TbNumber1, TbNumber2, TbNumber3, TbNumber4, TbNumber5 } from "react-icons/tb";

// images
import img1 from '../../../assets/customize/image (4).jpg'
import img2 from '../../../assets/customize/image (5).jpg'
import img3 from '../../../assets/customize/image (6).jpg'
import img4 from '../../../assets/customize/image (7).jpg'
import img5 from '../../../assets/customize/image (8).jpg'


// react timeline
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Customize = () => {
    return (
        <div className="my-12">
            <div className="overflow-hidden w-11/12 md:w-9/12 mx-auto">
                <h1 className="text-center text-rose-500 text-4xl font-bold mb-3">Your Gateway to Personalization</h1>
                <p className="w-3/4 text-center mx-auto">Unleash your inner artist and transform ordinary toy cars into unique, customized masterpieces. In this section, we&apos;ll guide you through the steps and materials needed to breathe new life into your toy car collection.</p>



                {/* react timeline */}
                <VerticalTimeline
                    lineColor='#FF2551'
                    animate={true}

                >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(219 234 254)', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(219 234 254)' }}
                        date="Step-1"
                        dateClassName='text-purple-600'
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<TbNumber1 />}
                    >
                        <h3 className="text-2xl font-bold">Choosing the Right Toy Car</h3>
                        <img className='w-full rounded-md my-3' src={img1} alt="process img" />
                        <p className='text-justify text-slate-600'>Understand the importance of selecting the perfect base model for your project. Learn how to assess the condition and potential of your toy car for customization.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(219 234 254)', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(219 234 254)' }}
                        date="Step-2"
                        dateClassName='text-purple-600'
                        iconStyle={{ background: '#cd21f3', color: '#fff' }}
                        icon={<TbNumber2 />}
                    >
                        <h3 className="text-2xl font-bold">Tools and Materials</h3>
                        <img className='w-full rounded-md my-3' src={img2} alt="process img" />
                        <p className='text-justify text-slate-600'> Discover the essential tools and materials required for customization. Find out what you need to get started, from sandpaper and primers to paints, brushes, and detailing tools.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(219 234 254)', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(219 234 254)' }}
                        date="Step-3"
                        dateClassName='text-purple-600'
                        iconStyle={{ background: '#f38221', color: '#fff' }}
                        icon={<TbNumber3 />}
                    >
                        <h3 className="text-2xl font-bold">Preparation and Surface Work</h3>
                        <img className='w-full rounded-md my-3' src={img3} alt="process img" />
                        <p className='text-justify text-slate-600'>Explore the critical steps to prepare your toy car&apos;s surface, ensuring your paint will adhere smoothly. Learn techniques for cleaning, sanding, and applying primers to achieve a professional finish.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(219 234 254)', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(219 234 254)' }}
                        date="Step-4"
                        dateClassName='text-purple-600'
                        iconStyle={{ background: '#f3216f', color: '#fff' }}
                        icon={<TbNumber4 />}
                    >
                        <h3 className="text-2xl font-bold">Protecting Your Customization</h3>
                        <img className='w-full rounded-md my-3' src={img4} alt="process img" />
                        <p className='text-justify text-slate-600'>Learn the importance of protecting your custom paint job with clear coats and varnishes. Choose the right finishes to preserve your work for the long haul.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(219 234 254)', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(219 234 254)' }}
                        date="Step-5"
                        dateClassName='text-purple-600'
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<TbNumber5 />}
                    >
                        <h3 className="text-2xl font-bold">Share Your Creations</h3>
                        <img className='w-full rounded-md my-3' src={img5} alt="process img" />
                        <p className='text-justify text-slate-600'>Once you&apos;ve transformed your toy car, share your creations with the toy car community. Connect with fellow customizers, get feedback, and gain inspiration from the broader community.</p>
                    </VerticalTimelineElement>

                </VerticalTimeline>


            </div>
        </div>
    );
};

export default Customize;