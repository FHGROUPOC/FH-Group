"use client";
import React, { useRef, useState } from "react";
import DashHeader from "@/components/dashboard/dashheader";
import Reviews from "@/components/dashboard/all-reviews";

const reviews = () => {
  const menushowhide = useRef(null);
  const ratingshowhide = useRef(null);
  const [mytrue, setmytrue] = useState(true);
  const handleClassToggle = (elementRef, action, className) => {
    if (elementRef.current) {
      if (action === "add") {
        elementRef.current.classList.add(className);
      } else if (action === "remove") {
        elementRef.current.classList.remove(className);
      }
    }
  };

  const handleAddClick = () => {
    handleClassToggle(menushowhide, "add", "dash_menu_in");
    handleClassToggle(ratingshowhide, "add", "z-minus");
  };

  const handleRemoveClick = () => {
    handleClassToggle(menushowhide, "remove", "dash_menu_in");
    handleClassToggle(ratingshowhide, "remove", "z-minus");
  };

  return (
    <div>
      <DashHeader
        handleAddClick={handleAddClick}
        handleRemoveClick={handleRemoveClick}
        menushowhide={menushowhide}
        setmytrue={setmytrue}
      />
      <Reviews mytrue={mytrue} />
    </div>
  );
};

export default reviews;
