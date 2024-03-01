import {React,useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

const Portfolio = () => {
  useEffect(()=>{

AOS.init({duration:2000})

  },[])

  return (
    <div className="port">
    <div className="" id="">
      {/* <img
        src="https://images.pexels.com/photos/9703865/pexels-photo-9703865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="card-img"
        alt="..."
        style={{ border: "none" }}
      /> */}
      <img
        src="https://res.cloudinary.com/dycpjbdto/image/upload/v1709314161/Cherry_Blossom_Motivational_Header_Photo_ai0xxy.png"
        className="card-img"
        alt="..."
        style={{ border: "none" }}
      />
      {/* https://images.pexels.com/photos/1449455/pexels-photo-1449455.jpeg?auto=compress&cs=tinysrgb&w=600 */}
    </div>
    {/* navPort */}
    <div className="container my-5">

  <section>
    
   

    <h3 className="font-weight-bold text-center dark-grey-text pb-2" id='head1'>Portfolio</h3>
    <hr className="w-header my-4" id='head2' />
    <p className="lead text-center text-muted pt-2 mb-5" id='head3'>You can find several events by our professional team in this section.</p>

    

   <div className="gallery" >

   <MDBRow>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <div className="fadein" data-aos='zoom-in'>
        <img
          src='https://adornmentevents.com/wp-content/uploads/ae-gallery-urban-22.jpg'
          className='w-100 shadow-1-strong rounded mb-4 '
          alt='Boat on Calm Water'
        />
</div>
<div className="fadein" data-aos='zoom-in'>
        <img
          src='https://adornmentevents.com/wp-content/uploads/gallery2023-lodge-66.jpg'
          className='w-100 shadow-1-strong rounded mb-4 '
          alt='Boat on Calm Water'
        />
</div>
<div className="fadein" data-aos='zoom-in'>
        <img
          src='https://adornmentevents.com/wp-content/uploads/ae-gallery-urban-20.jpg'
          className='w-100 shadow-1-strong rounded mb-4 '
          alt='Boat on Calm Water'
        />
</div>
<div className="fadein" data-aos='zoom-in'>
        <img
          src='https://adornmentevents.com/wp-content/uploads/ae-gallery-modern-7.jpg'
          className='w-100 shadow-1-strong rounded mb-4 '
          alt='Boat on Calm Water'
        />
</div>

      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
      <div className="fadein" data-aos='zoom-in'>
        <img
          src='https://adornmentevents.com/wp-content/uploads/ae-gallery-forest-5.jpg'
          className='w-100 shadow-1-strong rounded mb-4 '
          alt='Boat on Calm Water'
        />
</div>

<div className="fadein" data-aos='zoom-in'>
        <img
          src='https://adornmentevents.com/wp-content/uploads/ae-gallery-pacific-city-21.jpg'
          className='w-100 shadow-1-strong rounded mb-4 '
          alt='Boat on Calm Water'
        />
</div>
<div className="fadein" data-aos='zoom-in'>
        <img
          src='https://adornmentevents.com/wp-content/uploads/gallery2023-urban-43.jpg
          '
          className='w-100 shadow-1-strong rounded mb-4 '
          alt='Boat on Calm Water'
        />
</div>
<div className="fadein" data-aos='zoom-in'>
        <img
          src='https://adornmentevents.com/wp-content/uploads/gallery2023-lodge-3.jpg'
          className='w-100 shadow-1-strong rounded mb-4 '
          alt='Boat on Calm Water'
        />
</div>
<div className="fadein" data-aos='zoom-in'>
        <img
          src='https://adornmentevents.com/wp-content/uploads/gallery2023-urban-13.jpg'
          className='w-100 shadow-1-strong rounded mb-4 '
          alt='Boat on Calm Water'
        />
</div>
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
      <div className="fadein" data-aos='zoom-in'>
        <img
          src='https://adornmentevents.com/wp-content/uploads/ae-gallery-country-47.jpg'
          className='w-100 shadow-1-strong rounded mb-4 '
          alt='Boat on Calm Water'
        />
</div>
<div className="fadein" data-aos='zoom-in'>
        <img
          src='https://adornmentevents.com/wp-content/uploads/ae-gallery-evergreen-10.jpg'
          className='w-100 shadow-1-strong rounded mb-4 '
          alt='Boat on Calm Water'
        />
</div>
<div className="fadein" data-aos='zoom-in'>
        <img
          src='https://adornmentevents.com/wp-content/uploads/ae-gallery-modern-21.jpg'
          
          className='w-100 shadow-1-strong rounded mb-4 '
          alt='Boat on Calm Water'
        />
</div>
<div className="fadein" data-aos='zoom-in'>
        <img
          src='https://adornmentevents.com/wp-content/uploads/ae-gallery-lodge-15.jpg'
          className='w-100 shadow-1-strong rounded mb-4 '
          alt='Boat on Calm Water'
        />
</div>
<div className="fadein" data-aos='zoom-in'>
        <img
          src='https://adornmentevents.com/wp-content/uploads/ae-gallery-urban-28.jpg'
          
          className='w-100 shadow-1-strong rounded mb-4 '
          alt='Boat on Calm Water'
        />
</div>
      </MDBCol>
    
      
     
    </MDBRow>

     {/* <div className="animation1" data-aos='zoom-in'>
      <img src='https://adornmentevents.com/wp-content/uploads/gallery2023-lodge-62.jpg' alt=""/>
     </div>
     <div className="animation1" data-aos='zoom-in'>
      <img src='https://adornmentevents.com/wp-content/uploads/gallery2023-lodge-62.jpg' alt=""/>
     </div>
     <div className="animation1" data-aos='zoom-in'>
      <img src='https://adornmentevents.com/wp-content/uploads/gallery2023-lodge-62.jpg' alt=""/>
     </div>
     <div className="animation1" data-aos='zoom-in'>
      <img src='https://adornmentevents.com/wp-content/uploads/gallery2023-lodge-62.jpg' alt=""/>
     </div>
     <div className="animation1" data-aos='zoom-in'>
      <img src='https://adornmentevents.com/wp-content/uploads/gallery2023-lodge-62.jpg' alt=""/>
     </div>
     <div className="animation1" data-aos='zoom-in'>
      <img src='https://adornmentevents.com/wp-content/uploads/gallery2023-lodge-62.jpg' alt=""/>
     </div>
     <div className="animation" data-aos='zoom-in'>
      <img src='https://adornmentevents.com/wp-content/uploads/gallery2023-lodge-62.jpg' alt=""/>
     </div> */}

      

     </div>

   

     


  </section>

</div>
    </div>
  );
};

export default Portfolio;
