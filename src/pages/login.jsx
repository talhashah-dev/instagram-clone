"use client";
import Image from "next/image";
import React, { useState } from "react";
import insta from "@/assets/images/insta.png";
import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/btn.jsx";
import Link from "next/link";
import googleplay from "@/assets/images/googleplay.png";
import microsoft from "@/assets/images/microsoft.png";
import Input from "@/components/input.jsx";
import Swal from "sweetalert2";
import { auth, signInWithEmailAndPassword } from "@/lib/firebase";

const Page = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (data.password && data.username) {
      console.log(data);
      signInWithEmailAndPassword(auth, data.username, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          Swal.fire("You're Welcome!");
        })
        .catch((error) => {

          const errorMessage = error.message;
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMessage,
            customClass: {
              customColor: 'custom-color',
            }
          });
        });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'All fields are required!',
        text: 'Please fill out all the fields.',
      });
    }
  };

  return (
    <>
      <div className="w-full h-screen mt-0 mr-0 mb-10 ml-0 pt-20 pr-0">
        <div className=" h-auto md:border-2 md:w-80 md:h-96 md:m-auto md:py-6 lg:items-end">
          <div className=" w-full h-14 flex justify-center  ">
            <Image src={insta} alt="logo" className=" h-26 w-44 " />
          </div>

          <div className=" mt-16 h-20 flex flex-col justify-center items-center">
            <Input
              type="text"
              name="username"
              value={data.username}
              className="bg-slate-100 w-56 h-8 text-xs py-2 px-2 mb-2 rounded border-2 border-slate-300  "
              placeholder="Phone number , username or email"
              onChange={handleChange}
            />

            <Input
              type="password"
              name="password"
              value={data.password}
              className="bg-slate-100 w-56 h-8 text-xs py-2 px-2 mb-4 rounded border-2 border-slate-300 "
              placeholder="Password"
              onChange={handleChange}
            />

            <button
              onClick={handleSubmit}
              className="bg-cyan-500 w-56  text-md px-2 py-1 rounded-md text-white  active:bg-cyan-800"
            >
              Log in
            </button>
          </div>
          <br />
          <div className=" w-60 flex justify-center  items-center gap-4 mt-4 mb-4 m-auto">
            <hr className="border border-slate-300 w-1/3" />
            <p className="text-xs">OR</p>
            <hr className="border border-slate-300 w-1/3" />
          </div>

          <Btn
            icon={faFacebook}
            className="text-xs text-cyan-500 font-bold ml-2 "
            value="Log in with Facebook"
            href="/Facebook"
          />

          <div className="mt-5 flex justify-center items-center">
            <p className="text-xs ">Forgot Password ?</p>
          </div>
        </div>

        <div className="mt-7 flex justify-center items-center gap-1 md:border-2 md:w-80 md:h-4 md:m-auto md:mt-5 md:py-5 ">
          <p className="text-xs md:text-base"> Don't have an account ?</p>
          <Link
            href="/signup"
            className="text-xs font-semibold text-cyan-500  md:text-base"
          >
            Sign Up
          </Link>
        </div>

        <div className=" mt-8 flex justify-center md:border-2 md:w-80 md:h-8 md:m-auto md:mt-5  ">
          <p className="text-xs md:text-base "> Get the app.</p>
        </div>

        <div className="flex justify-center items-center mt-8 gap-2">
          <Image
            src={googleplay}
            alt="google play store"
            className="w-4/12 h-12 md:w-44"
          />
          <Image src={microsoft} alt="Microsoft" className="w-4/12 md:w-40 " />
        </div>
      </div>
    </>
  );
};

export default Page;
