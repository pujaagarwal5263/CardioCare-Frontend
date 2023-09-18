import React from 'react';
import {Link} from "react-router-dom";
import dr2 from "../src/Images/dr2.jpg";
import "./index.css";
import Navbar from "../src/components/Header/index"

const LoginDone = () => {
  return (
            <section className = "section">
              <Navbar/>
                <div className="Container">
                            <div calssName="">
                                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                                    We help patients live a health, longer life.
                                </h1>
                                <p className="text_para">
                                    lorem ipsum dolor sit amete consecteture, adipising elit. satus.... .... ..... ....
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut illo provident commodi similique rerum quaerat sunt molestias sed aliquid dolores!
                                </p>
                                <div
                                 className="flex" style={{width:"100%", justifyContent:"left", alignItems:"center"}}>
                                    {/* <button className="btn">Request an Appointment</button> */}
                                    <Link to="/form"><button className="btn mx-5">Take A Test</button></Link>
                                </div>
                            </div>

                        <div calssName ="dr_images">
                            <img className="img" src = {dr2} alt = ""/>
                        </div>
                </div>
            </section>
  )
}

export default LoginDone