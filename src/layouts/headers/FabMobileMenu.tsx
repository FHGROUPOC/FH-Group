"use client";

import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

interface DataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menu?: {
    id: number;
    title: string;
    link: string;
  }[];
}

const menu_data: DataType[] = [
  {
    id: 1,
    title: "Portfolio",
    link: "/engineering/portfolio",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "Services",
    link: "/engineering/service",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Process",
    link: "/engineering/process",
    has_dropdown: false,
  },
  {
    id: 4,
    title: "Team",
    link: "/engineering/team",
    has_dropdown: false,
  },
  {
    id: 5,
    title: "About",
    link: "/engineering/about",
    has_dropdown: false,
  },
  {
    id: 6,
    title: "Contact",
    link: "/engineering/contact",
    has_dropdown: false,
  },
];

const MobileMenu = ({ active, navTitle, openMobileMenu }: any) => {
  const { data: session } = useSession();

  return (
    <>
      <ul
        className="cs_nav_list"
        style={{ display: active ? "block" : "none" }}
      >
        {menu_data.map((menu) => (
          <li
            key={menu.id}
            className={`${menu.has_dropdown ? "menu-item-has-children" : ""} ${
              navTitle === menu.title ? "active" : ""
            }`}
          >
            <Link href={menu.link}>{menu.title}</Link>
            {menu.has_dropdown && (
              <>
                <ul
                  className="cs_mega_wrapper"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu.sub_menu?.map((subMenu) => (
                    <li key={subMenu.id}>
                      <Link href={subMenu.link}>{subMenu.title}</Link>
                    </li>
                  ))}

                  {!session && (
                    <div className="profile_login_btn mx-2">
                      <a href="/login">
                        <CiLogin /> Log in
                      </a>
                    </div>
                  )}
                </ul>
                <span
                  onClick={() => openMobileMenu(menu.title)}
                  className={`cs_munu_dropdown_toggle ${
                    navTitle === menu.title ? "active" : ""
                  }`}
                ></span>
              </>
            )}
          </li>
        ))}

        {session?.user &&
          "role" in session?.user &&
          session?.user?.role === "Admin" && (
            <li
              key={7}
              className={` "" ${navTitle === "Dashbaord" ? "active" : ""}`}
            >
              <a href={"/dash"}>{"Dashboard"}</a>
            </li>
          )}

        {!session && (
          <div className="profile_login_btn_mob hide_d_m">
            <a href="/login">
              <CiLogin /> Log in
            </a>
          </div>
        )}
      </ul>
    </>
  );
};

export default MobileMenu;
