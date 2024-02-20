import React,{  useEffect, useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setPendingServices } from "../../services/redux/reducer/PendingServices";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

//http://localhost:5000/service/byStatus?status=pending


const PendingServices = () => {
    const dispatch = useDispatch();
    const getPendingService = () => {
        axios
          .get("http://localhost:5000/service/byStatus?status=pending")
          .then((result) => {
            console.log(result.data.result);
           dispatch(setPendingServices(result.data.result));
          })
          .catch((err) => {
            console.log(err);
          });
      };
      useEffect(() => {
      getPendingService()
      }, []);
  

     /*   const {pendingServices} = useSelector((state)=> 
       state.pendingServices

    )  */ 
    return (
        
          <MDBContainer className="py-5 ">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol md="8">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                    Shopping Cart
                  </MDBTypography>
                  <div>
                    <p className="mb-0">
                      <span className="text-muted">Sort by:</span>
                      <a href="#!" className="text-body">
                        price <i className="fas fa-angle-down mt-1"></i>
                      </a>
                    </p>
                  </div>
                </div>
        
                <MDBCard className="rounded-3 mb-4">
                  <MDBCardBody className="p-4">
                    <MDBRow className="justify-content-between align-items-center">
                      <MDBCol md="2" lg="2" xl="2">
                        <MDBCardImage className="rounded-3" fluid
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                          alt="Cotton T-shirt" />
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="3">
                        <p className="lead fw-normal mb-2">Basic T-shirt</p>
                        <p>
                          <span className="text-muted">Size: </span>M{" "}
                          <span className="text-muted">Color: </span>Grey
                        </p>
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="2"
                        className="d-flex align-items-center justify-content-around">
                        <MDBBtn color="link" className="px-2">
                          <MDBIcon fas icon="minus" />
                        </MDBBtn>
        
                        <MDBInput min={0} defaultValue={2} type="number" size="sm" />
        
                        <MDBBtn color="link" className="px-2">
                          <MDBIcon fas icon="plus" />
                        </MDBBtn>
                      </MDBCol>
                      <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                        <MDBTypography tag="h5" className="mb-0">
                          $499.00
                        </MDBTypography>
                      </MDBCol>
                      <MDBCol md="1" lg="1" xl="1" className="text-end">
                        <a href="#!" className="text-danger">
                          <MDBIcon fas icon="trash text-danger" size="lg" />
                        </a>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
        
               
        
                <MDBCard>
                  <MDBCardBody>
                    <MDBBtn className="ms-3" color="warning" block size="lg">
                      Apply
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
       
        );
}

export default PendingServices