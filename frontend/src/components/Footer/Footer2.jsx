import React from "react";
 

const Footer2 = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#469da3", height: "150%" }}
    >
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a className="text-white">MDBootstrap</a>
              </p>
              <p>
                <a className="text-white">MDWordPress</a>
              </p>
              <p>
                <a className="text-white">BrandFlow</a>
              </p>
              <p>
                <a className="text-white">Bootstrap Angular</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fas fa-home mr-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>

            <div
              className="col-4"
              style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                height: "80vh",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              <div
                className="container"
                style={{
                  backgroundColor: "#f4f4f4f4",
                  maxWidth: "700% !important",
                  height: "75vh",
                  display: "flex",
                  borderRadius:'2rem',
                  flexDirection:'column'
                }}
              >
                <div
                  className="info__card "
                  style={{
                    display: "flex",
                    
                    // padding: "0 4px",

                    // alignItems: "center",
                    // lineHeight: "1.5",
                    // paddingBottom: "4px",
                  }}
                >
                  <div className="prfile__pic " >
                    <img
                      className="prfile__pic--img"
                      src="https://i.pinimg.com/280x280_RS/01/c6/aa/01c6aae2831328a1450bd5c0ca954919.jpg"
                      alt="Mahmoud Abuyoussef Image"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "48%",
                        marginRight: "10px",
                        marginTop:'10px'
                      }}
                    />
                  </div>
                  <div className="profile__info col-8" style={{color:'#000',fontSize:'12px',width:'50%',display:'flex',flexWrap:'wrap'}}>
                    <span style={{fontWeight:'bold',fontSize:'14px ',marginTop:'10px',left:'65px',textAlign:'left',}}>Mahmoud Abuyoussef</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="aroundphoto" style={{padding:'0 10px',overflowY:'scroll'}}>
                <div
                  className="images"
                  style={{
                    marginTop:'10px'
                  }}
                >
                  <a
                    href="https://www.pinterest.com/pin/15-easy-and-cool-casual-outfits-for-everyday-looks--939211697272426290/"
                    target="_blank"
                  >
                    <img
                      src="https://adornmentevents.com/wp-content/uploads/ae-gallery-evergreen-16.jpg"
                      alt="img"
                      height='50%'
                      width='35%'
                      style={{ borderRadius: '10px',
                        /* width: calc((100%) / 2); */
                        marginRight: '2px'}}
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://adornmentevents.com/wp-content/uploads/gallery2023-lodge-77.jpg"
                      alt="img"
                      height='60%'
                      width='40%'
                      style={{ borderRadius: '10px',
                        /* width: calc((100%) / 2); */
                        marginRight: '2px'}}
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://adornmentevents.com/wp-content/uploads/ae-gallery-pacific-city-12.jpg"
                      alt="img"
                      height='70%'
                      width='30%'
                      style={{ borderRadius: '10px',
                        /* width: calc((100%) / 2); */
                        marginRight: '2px'}}
                    />
                  </a>
                </div>
                <div className="follow__brand PIN_1709163849920_label PIN_1709163849920_bottom "style={{  textAlign: 'center',
    color: '#8f7d7d',
    paddingTop: '135px'}}>
                <button> Follow On <img className="brand__img" src="brand.png" /></button> 
                </div> 
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2" }}
      >
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          FarhEvents.com
        </a>
      </div>
    </footer>
  );
};

export default Footer2;
