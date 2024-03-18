import React from 'react';
import Navigation from "../home/navigation"
import image from "../assets/images/car02.jpg"
import Footer from "../home/footer"

import 'aos/dist/aos.css';

function BlogPost() {
  return (
    <div>
        <Navigation/>
      {/* SUB BANNER SECTION START */}
        <section className="sub-banner-section blog-banner-section w-100 float-left d-flex align-items-center">
            <div className="container">
                <div className="sub-banner-inner-section" data-aos="fade-up" data-aos-duration="700">
               
                </div>
            </div>
        </section>
        {/* SUB BANNER SECTION END HERE*/}
        {/* Single Blog */}
        <section className="singleblog-section blogpage-section">
            <div className="container">
            <div >
                <div className="col-lg-10 col-md-12 col-sm-12 col-12 align-center">
                <div className="main-box">
                    <figure className="image-view-project" data-aos="fade-up" data-aos-duration="700">
                        <img src={image} alt="" className="img-fluid" loading="lazy" />
                    </figure>

                    <div className="content1" data-aos="fade-up" data-aos-duration="700">
                        <h4>Why You Need Virtual Assistant for Your Company</h4>
                        <i className="fas fa-user"></i>
                        <span className="text-size-14 text-mr">By : Admin</span>
                        <i className="fas fa-calendar"></i>
                        <span className="mb-0 text-size-14">Dec 20,2022</span>
                        <p className="text-size-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>
                    </div>

                    <div className="content2" data-aos="fade-up" data-aos-duration="700">
                        <figure className="singleblog-quoteimage">
                            <img src="assets/images/singleblog-quoteimage.png" alt="" className="img-fluid" loading="lazy" />
                        </figure>
                        <p className="mb-0 text-white text-size-18">“Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.xcepteur sint occaecat”</p>
                        </div>
                        <p className="text text-size-14">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae
                        ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas.
                        </p>
                        <div className="content3" data-aos="fade-up" data-aos-duration="700">
                        <figure className="image1" data-aos="fade-up">
                            <img src="assets/images/singleblog-image2.jpg" alt="" className="img-fluid" loading="lazy" />
                        </figure>
                        <p className="text text-size-14">Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae
                            ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas.
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            
        </section>
        

        <Footer/>


        

        
        
        
        

      
    </div>
  );
}

export default BlogPost;
