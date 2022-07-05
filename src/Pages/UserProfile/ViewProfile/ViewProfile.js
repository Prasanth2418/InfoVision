import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import "./viewprofile.css"

const ViewProfile = () => {
  const [data, setData] = useState({
email:"user@gmail.com",
city:"Hyderabad "
  });
  const {
    firstName,
    lastName,
    city,
    state,
    email,
    mobileNumber,
    employeeId,
    country,
  } = data;

  useEffect(()=>{
    axios.get("https://backend123.azurewebsites.net/infovision/registerforemployee?empId=1972").then((res)=>setData(res.data))
  },[])

  const handleChange=(e)=>{
    let {name,value}=e.target;
      setData({...data,[name]:value});
  }

  return (
    <div className="back">
      <div className="container rounded  mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                height="150px"
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              />
              <span className="font-weight-bold labels">ID: {data.empId}</span>
              <span className="text-white-50 labels">user@gmail.com</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right labels">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">FirstName</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    name="firstName"
                    value={data.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">LastName</label>
                  <input
                    type="text"
                    className="form-control"
                    name='lastName'
                    value={data.lastName}
                    placeholder="Last Name"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    name="mobileNumber"
                    Value={data.mobileNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Emploee ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="EmployeeId"
                    name="employeeId"
                    value={data.employeeId}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="city"
                    name="city"
                    value={city}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="country"
                    name="country"
                    value={country}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">State/Region</label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    value={state}
                    onChange={handleChange}
                    placeholder="state"
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Edit Profile
                </button> <br/>  <br/> <br/> <br/> <br/>
               <a href="#"><small className="delete"><DeleteIcon/>Delete Profile</small></a> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
