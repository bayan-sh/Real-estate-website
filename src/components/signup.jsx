import React, { Component } from 'react'

const signup = () => {
  
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="mb-6 w-full px-7 py-3 bg-green-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href='/signin'>sign in?</a>
        </p>
      </form>
    )
  }

export default signup;