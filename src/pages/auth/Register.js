import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../actions/authActions";

export default function Register() {
  const dispatch = useDispatch();
  const [form, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form));
    console.log(form);
  };
  return (
    <div className=" py-32 flex  justify-center  md:px-10 lg:px-20">
      <div className="  bg-white md:py-8 md:rounded  md:shadow-lg lg:w-1/2 ">
        <h1 className="secondary-text text-center text-2xl font-semibold">
          Sign up
        </h1>
        <div className="mt-10">
          <form onSubmit={handleSubmit} className="border-t border-opacity-50 px-5 py-10 grid gap-4 ">
            <div className="grid grid-cols-2 gap-3">
              <input
                className="border  border-gray-400 md:border rounded p-3"
                type="text"
                placeholder="First name"
                name="firstname"
                value={form.firstname}
                onChange={(e) => handleChange(e)}
              />
              <input
                className="border  border-gray-400 md:border rounded p-3"
                type="text"
                placeholder="Last name"
                value={form.lastname}
                onChange={(e) => handleChange(e)}
                name="lastname"
              />
            </div>
            <input
              className="border  border-gray-400 md:border rounded p-3"
              type="text"
              placeholder="Email address"
              name="email"
              value={form.email}
              onChange={(e) => handleChange(e)}
            />
            <input
              className="border  border-gray-400 md:border rounded p-3"
              type="password"
              placeholder="Password"
              name="passoword"
              value={form.password}
              onChange={(e) => handleChange(e)}
            />
            <span className="primary-text text-center">
              Already have an account?<Link to="/login">Log in</Link>
            </span>

            <button className="secondary-bg text-white py-3 rounded mt-4">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
