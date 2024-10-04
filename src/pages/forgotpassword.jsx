"use client";
import Image from "next/image";
import Preloader from "@/components/Preloader/Preloader";
import React, { useState } from "react";
import insta from "@/assets/images/insta.png";
import Link from "next/link";
import Input from "@/common/input";
import Swal from "sweetalert2";
import { auth, sendPasswordResetEmail } from "@/lib/firebase.js";

const ForgotPassword = () => {
  const [isForgetting, setIsForgetting] = useState(false);
  const [data, setData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setIsForgetting(true);
    if (data.email != "") {
      sendPasswordResetEmail(auth, data.email)
        .then(() => {
          Swal.fire({
            title: "Congratulations!",
            text: "Email sent successfully!",
            icon: "success",
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage,
            customClass: {
              customColor: "custom-color",
            },
          });
        })
        .finally(() => {
          setIsForgetting(false);
        });
    }
  };

  return (
    <div>
      <>
        <div className="w-full h-screen mt-0 mr-0 mb-10 ml-0 pt-20 pr-0">
          <div className=" h-auto md:border-2 md:w-80 md:h-96 md:m-auto md:py-8 lg:items-end">
            <div className=" w-full h-14 flex justify-center  ">
              <Image src={insta} alt="logo" className="h-26 w-44" />
            </div>
            <div className=" flex justify-center mt-5">
              <h1 className="font-semibold text-base text-gray-500 ">
                Forgot Your Password
              </h1>
            </div>
            <div className=" mt-12 h-20 flex flex-col justify-center items-center">
              <Input
                type="text"
                name="email"
                value={data.email}
                className="bg-gray-50 w-60 h-9 text-xs py-2 px-2 mb-2 rounded border-2   "
                placeholder="Email"
                onChange={handleChange}
              />

              <Input
                type="text"
                name="email"
                value={data.email}
                className="bg-gray-50 w-60 h-9 text-xs py-2 px-2 mb-2 rounded border-2   "
                placeholder="Confirm Email"
                onChange={handleChange}
              />

              <button
                onClick={handleSubmit}
                className="bg-cyan-500 w-60 h-9  text-md px-2 py-1 rounded-md text-white  active:bg-cyan-800"
              >
                Reset
              </button>
              <div className="mt-4 flex justify-center items-center">
                <Link className="text-xs text-blue-500 " href="/login">
                  Wants to go Back{" "}
                </Link>
              </div>
              {isForgetting && <Preloader />}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ForgotPassword;
