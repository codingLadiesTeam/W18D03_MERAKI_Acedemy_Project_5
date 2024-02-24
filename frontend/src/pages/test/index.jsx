import React, { useEffect } from "react";
import { MDBInput, MDBBtn,MDBRow,MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,MDBCardImage, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem  } from 'mdb-react-ui-kit';
import { useSelector ,useDispatch} from "react-redux";
import axios from "axios";
import { useState } from "react";
import { setPackages,setPackagesName } from "../../services/redux/reducer/packages";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Swal from 'sweetalert2';

function AdminServicesRender() {
  const dispatch=useDispatch()
    const { isLoggedIn,token } = useSelector((state) => state.auth);
   
    const { packages,packagesName  } = useSelector((state) => state.packages);
    const [services, setServices] = useState([]);
    const [messageForAddService, setMessageForAddService] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    //-----------------------------
    const getPackages=()=>{
      axios
      .get(`http://localhost:5000/package`)
      .then((result) => {
      
        console.log('first', result.data.result)
  
        dispatch(setPackagesName(result.data.result))
  
      })
      .catch((err) => {
        
        console.log(err)
  
      });
    }
    //-----------------------------
    //-----------------------------
/*   
const callPackages=()=>{
  axios
  .get(`http://localhost:5000/package/servicePackage`, {
    
  })
  .then((result) => {
   //console.log("services", result.data.result);
    
    dispatch(setPackages(result.data.result))


  })
  .catch((err) => {
    
    console.log(err)

  });
} */
    //-----------------------------

const callServices=()=>{
  axios
  .get(`http://localhost:5000/service`, {
    
  })
  .then((result) => {
   // console.log("services", result.data.services);
    setServices(result.data.services);
    
    
  })
  .catch((err) => {
    
    console.log(err);

  });

}
    //-----------------------------
    
  
const AddServiceToPackage=async (package_id,service_id)=>{

    try {
      const result = await axios
      .post(
        "http://localhost:5000/package/create/servicePackage",
        { package_id,service_id} ,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      console.log("registerResult",result)
      if (result.data.success) {
        console.log(result.data);
        setMessageForAddService(true)

        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: "Service Added Successfully",
          confirmButtonText: 'Hide'
        });
        
      } else throw Error;
    } catch (error) {
      setMessageForAddService(false)

      console.log(err);
      Swal.fire({
        icon: "error",
        text: error.response.data.message,
      });

    }
}

    //-----------------------------


    useEffect(() => {
      callServices()
      getPackages()
      }, []);
    //...............................
  return (
    <> <div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', margin:"20px"}}>
    {packagesName.map((ele,i) => (
      <MDBCard style={{ maxWidth: '20rem' }} key={i} >
       
        <MDBCardBody>
        <MDBCardImage
            src={ele.image}
            alt="..."
            position="top"
          />
          <MDBCardTitle>{ele.
package_name}</MDBCardTitle>
      {/*     
          <MDBCardText>
            Price: ${service.price}
            <br />
            {service.description}
          </MDBCardText>
          <MDBDropdown group>
        <MDBDropdownToggle color='primary'>Action</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown> */}
     
        </MDBCardBody> 
      </MDBCard>
    ))}
    </div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' , margin:"20px"}}>
 
    {services.map((service,i) => (
      <MDBCard key={i} style={{ maxWidth: '' }}>
        <MDBCardBody>
        <MDBCardImage
            src={service.image}
            alt="..."
            position="top"
          />
         
          <MDBCardTitle>{service.service_name}</MDBCardTitle>
          <MDBCardText>
            Price: ${service.price}
            <br />
            {service.description}
          </MDBCardText>
          <Dropdown as={ButtonGroup}>
      <Button variant="primary"  id="dropdown-split-variants-primary">Add</Button>

      <Dropdown.Toggle split variant="primary" id="dropdown-split-variants-primary" />

      <Dropdown.Menu>
      {packages.map((name,i)=>{
             return(
              <Dropdown.Item key={i} href="#/action-1" onClick={()=>{
              AddServiceToPackage(name.package_id,service.service_id)

              }}>{name.package_name }</Dropdown.Item>
             ) 
            })}

      </Dropdown.Menu>
    </Dropdown>

        </MDBCardBody>
      </MDBCard>
    ))}
  </div>
  <MDBRow className='mb-4'>
    
   </MDBRow>

  
    
  </div></>
  )
}

export default AdminServicesRender