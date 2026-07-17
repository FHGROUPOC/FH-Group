"use client";
import { signIn, useSession } from "next-auth/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation'

const login = () => {

  const [hide, sethide] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { data: session, status } = useSession();

  const [redirect, setRedirect] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setRedirect(params.get('redirect'));
  }, []); // Runs only on client-side


  const credentialfun = async (event) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      const issuccess = await signIn('credentials', { email, password, redirect: false });
      if (issuccess.ok) {
        toast.success('success')
      }
      else if (!issuccess.ok) {
        toast.error('Wrong Credentials')
      }
    }
    else {
      toast.error('Both Fields Are Required')
    }
  }
  const router = useRouter();

  const hash = typeof window !== "undefined" ? window.location.hash : "";



  const loginfun = async (event) => {
    event.preventDefault();
    const gologin = await signIn("google", { redirect: false });
    if (gologin) {
      window.location.replace("dash");
    }
  };

  useEffect(() => {
    if (session?.user?.role === "Admin" ||session?.user?.role === "doctoradmin"  ) {
      window.location.replace("/dash");
    } else if (
      session?.user?.role === undefined &&
      status === "authenticated"
    ) {
      if (redirect) {
        const destination = redirect ? `${redirect}${hash}` : `/${hash}`;

        router.push(destination)

      }
      else {
        router.push('/')
      }
    }
  }, [session]);

  return (
    <>
      <div className="Login_Page_Main">
        <div className="Login_Page_Main_Cont">
          <div className="center gap-1 direction_col">
            <img
              src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1734349339/FHGROUPOC/LOGOS/vuxagfvistorxnaoqnop.png"
              alt="logo"
            />
            <p className="mt-2 ">ٖONE STEP SOLUTION PROVIDER</p>
          </div>
          <p>Log in to your account</p>
          <input
            required
            onChange={(e) => setemail(e.target.value)}
            name="email"
            type="email"
            placeholder="Enter Email"
          />
          <div className="center password_sec space_bet">
            <input
              required
              onChange={(e) => setpassword(e.target.value)}
              name="password"
              type={hide ? "text" : "password"}
              placeholder="Enter Password"
            />
            <button
              onClick={() => {
                sethide(!hide);
              }}
            >
              {hide ? <FaRegEyeSlash size={22} /> : <FaRegEye size={22} />}
            </button>
          </div>
          <button onClick={credentialfun}>Login</button>
          <div className="center">
            <p className="disable_m">Or</p>
            <button onClick={loginfun} className="google_btn">
              <img
                src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1734951040/FHGROUPOC/txx5hssgcxmad7dzzn0c.png"
                alt="google"
              />
            </button>
          </div>
          <div className="w-100 center gap-5">
            <a href="/">
              <IoIosArrowRoundBack size={32} />
              back to home
            </a>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default login;
