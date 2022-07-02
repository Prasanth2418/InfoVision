import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const ViewProfile = () => {
  const [data, setData] = useState([]);
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
    <div>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">ID: {data.empId}</span>
              <span className="text-black-50"></span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">FirstName</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">LastName</label>
                  <input
                    type="text"
                    className="form-control"
                    name='lastName'
                    value={lastName}
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
                    Value={mobileNumber}
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
                    value={employeeId}
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
