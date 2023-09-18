import dr1 from "../../Images/dr1.jpeg"
import dr2 from "../../Images/dr2.jpg"
import dr3 from "../../Images/dr3.jpg"
import "../../index.css";
import DoctorList from "../DoctorList";
import FAQs from "../FAQ";
import ReviewCarousel from "../Reviews";

const Home = ()=>{

    const doctorList = [
        {
            name: "Doctor Name 1",
            image : dr1,
            speacialist:"Heart Specialist",
            rating:4.5,
            hospital:"hospital name, city"
        },
        {
            name: "Doctor Name 1",
            image : dr3,
            speacialist:"Heart Specialist",
            rating:4.5,
            hospital:"hospital name, city"
        },
        {
            name: "Doctor Name 1",
            image : dr1,
            speacialist:"Heart Specialist",
            rating:4.5,
            hospital:"hospital name, city"
        },
        {
            name: "Doctor Name 1",
            image : dr3,
            speacialist:"Heart Specialist",
            rating:4.5,
            hospital:"hospital name, city"
        }
]
    return (
        <>
            <section className = "section">
                <div className="Container">
                            <div calssName="">
                                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                                    We help patients live a health, longer life.
                                </h1>
                                <p className="text_para">
                                    lorem ipsum dolor sit amete consecteture, adipising elit. satus.... .... ..... ....
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut illo provident commodi similique rerum quaerat sunt molestias sed aliquid dolores!
                                </p>
                                <div className="flex" style={{width:"100%", justifyContent:"left", alignItems:"center"}}>
                                    <button className="btn">Request an Appointment</button>
                                    <button className="btn mx-5">Take A Test</button>
                                </div>
                            </div>

                        <div calssName ="dr_images">
                            <img className="img" src = {dr2} alt = ""/>
                        </div>
                </div>
            </section>

            <section className="section">
                <h2 className="text-[36px] leading-[46px] text-headingColor font-[700] md:text-[45px] md:leading-[70px]">Our Doctors Team</h2>
                <p className="text_para py-4 px-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.  molestiae quisquam libero, itaque magnam?
                </p>

                <DoctorList doctorList={doctorList}/>
                
            </section>

            {/* ====== faq section ======= */}
            <section className = "section">
                <div className="Container">
                        <div calssName ="dr_images">
                            <img className="img" src = {dr2} alt = ""/>
                        </div>
                        <div>
                            <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px] md:leading-[70px]">
                               Frequently Asked Questions
                            </h1>
                            {<FAQs/>}
                        </div>
                </div>
            </section>


            {/* ---------- reviews --------- */}
            <section className="section">
                <h2 className="text-[36px] leading-[46px] text-headingColor font-[700] md:text-[45px] md:leading-[70px]">Happy Results</h2>
                <p className="text_para py-4 px-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.  molestiae quisquam libero, itaque magnam?
                </p>
                <div className="Container">
                    <ReviewCarousel/>
                </div>
            </section>
        </>
    )
}

export default Home;



// import React from 'react';
// import '../../index.css';
// import DoctorList from '../DoctorList';
// import FAQs from '../FAQ';
// import ReviewCarousel from '../Reviews';
// import dr1 from "../../Images/dr1.jpeg"
// import dr2 from "../../Images/dr2.jpg"
// import dr3 from "../../Images/dr3.jpg"

// const Home = () => {
//   const doctorList = [
//     {
//       name: 'Doctor Name 1',
//       image: dr1,
//       speacialist: 'Heart Specialist',
//       rating: 4.5,
//       hospital: 'hospital name, city',
//     },
//     {
//       name: 'Doctor Name 1',
//       image: dr3,
//       speacialist: 'Heart Specialist',
//       rating: 4.5,
//       hospital: 'hospital name, city',
//     },
//     {
//       name: 'Doctor Name 1',
//       image: dr1,
//       speacialist: 'Heart Specialist',
//       rating: 4.5,
//       hospital: 'hospital name, city',
//     },
//     {
//       name: 'Doctor Name 1',
//       image: dr3,
//       speacialist: 'Heart Specialist',
//       rating: 4.5,
//       hospital: 'hospital name, city',
//     },
//   ];

//   return (
//     <>
//       <section className="section">
//         <div className="Container">
//           <div className="text-container">
//             <h1 className="text-heading">We help patients live a healthy, longer life.</h1>
//             <p className="text_para">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Satus.... .... ..... ....
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut illo provident commodi similique rerum quaerat sunt molestias sed aliquid dolores!
//             </p>
//             <div className="button-container">
//               <button className="btn">Request an Appointment</button>
//               <button className="btn mx-5">Take A Test</button>
//             </div>
//           </div>
//           <div className="dr_images">
//             <img className="img" src={dr2} alt="" />
//           </div>
//         </div>
//       </section>

//       <section className="section">
//         <h2 className="text-heading">Our Doctors Team</h2>
//         <p className="text_para py-4 px-8">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quisquam libero, itaque magnam?
//         </p>
//         <DoctorList doctorList={doctorList} />
//       </section>

//       <section className="section">
//         <div className="Container">
//           <div className="dr_images">
//             <img className="img" src={dr2} alt="" />
//           </div>
//           <div className="text-container">
//             <h1 className="text-heading">Frequently Asked Questions</h1>
//             <FAQs />
//           </div>
//         </div>
//       </section>

//       <section className="section">
//         <h2 className="text-heading">Happy Results</h2>
//         <p className="text_para py-4 px-8">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quisquam libero, itaque magnam?
//         </p>
//         <div className="Container">
//           <ReviewCarousel />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;
