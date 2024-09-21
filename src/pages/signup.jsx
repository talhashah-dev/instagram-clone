"use client";
import React, { useState } from "react";
import insta from "@/assets/images/insta.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/btn.jsx";
import Input from "@/components/input.jsx";
import Link from "next/link";
import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  setDoc,
} from "../lib/firebase.js";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    if (
      formData.email &&
      formData.password &&
      formData.username &&
      formData.fullname
    ) {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then(async (userCredential) => {
          const res = userCredential.user;
          console.log(res);
          await setDoc(doc(db, "user", res.uid), formData);
          router.push("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } else {
      console.log("All fields are required");
    }
  };

  return (
    <div className="w-full h-screen mt-0 mr-0 mb-10 ml-0 pt-10 pr-0">
      <div className=" h-auto md:border-2 md:w-80 md:h-auto md:m-auto md:py-6 lg:items-end">
        <div className=" w-full h-14 flex justify-center ">
          <Image src={insta} alt="logo" className=" h-26 w-44 " />
        </div>
        <div className="flex justify-center mt-3 min-w-72 text-center">
          <p className="text-gray-500 text-base font-medium">
            Sign up to see photos and videos <br /> from your friends.
          </p>
        </div>

        <div className=" bg-cyan-500 flex justify-center  w-60 mt-5 m-auto py-2 gap-2 rounded-md">
          <Link href="/Facebook">
            <Btn
              className="text-xs text-white font-bold ml-2"
              icon={faFacebook}
              style={{ color: "white" }}
              value="Log in with Facebook"
            />
          </Link>
        </div>

        <div className="w-60 flex justify-center items-center gap-4 mt-4 mb-4 m-auto">
          <hr className="border border-slate-300 w-1/3" />
          <p className=" text-xs">OR</p>
          <hr className="border border-slate-300 w-1/3" />
        </div>

        <div className=" mt-16 h-20 flex flex-col justify-center items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <Input
              type={"text"}
              placeholder={"Mobile number or Email"}
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={
                "bg-slate-100 w-60 h-8 text-xs py-2 px-2 mb-2 rounded border-2 border-slate-300 "
              }
            />
            <Input
              type={"text"}
              placeholder={"Full Name"}
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className={
                "bg-slate-100 w-60 h-8 text-xs py-2 px-2 mb-2 rounded border-2 border-slate-300 "
              }
            />
            <Input
              type={"text"}
              placeholder={"Username"}
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={
                "bg-slate-100 w-60 h-8 text-xs py-2 px-2 mb-2 rounded border-2 border-slate-300 "
              }
            />
            <Input
              type={"password"}
              placeholder={"Password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={
                "bg-slate-100 w-60 h-8 text-xs py-2 px-2 mb-2 rounded border-2 border-slate-300 "
              }
            />

            <div className="bg-cyan-500 flex justify-center  w-60 mt-2 m-auto py-2 gap-2 rounded-md active:bg-cyan-800">
              <input
                type="submit"
                value="Sign Up"
                className=" text-xs text-white font-bold"
              />
            </div>
          </form>
        </div>

        <div className=" w-72 flex flex-col justify-center text-center text-gray-500 m-auto mt-20">
          <p className="text-xs ">
            People who use our service may have uploaded your contact
            information to Instagram.
            <span className="font-medium text-cyan-800">Learn More</span>
          </p>
          <p className="text-xs mt-7">
            By signing up, you agree to our{" "}
            <span className="font-medium text-cyan-800">Terms</span> ,
            <span className="font-medium text-cyan-800">Privacy Policy</span>{" "}
            and
            <span className="font-medium text-cyan-800">Cookies Policy</span> .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
