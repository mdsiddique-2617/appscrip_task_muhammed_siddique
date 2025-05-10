"use client";

import ShopStyles from './styles/shop.module.css';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import ProductGrid from './components/ProductGrid';
import SidebarStyles from "./styles/sidebar.module.css";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import React, { useState } from 'react';

export default function Home() {

  const [rating, setRating] = useState("");
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
  console.log(rating);

  const sections = [
    { OCCASION: ["Casual", "Formal", "Party"] },
    { WORK: ["Office", "Outdoor", "Creative"] },
    { FABRIC: ["Cotton", "Silk", "Denim"] },
    { SEGMENT: ["Men", "Women", "Kids"] },
    { SUITABLE_FOR: ["Summer", "Winter", "All Seasons"] },
    { RAW_MATERIALS: ["Organic", "Recycled", "Synthetic"] },
    { PATTERN: ["Striped", "Solid", "Printed"] }
  ];

  const [status, setStatus] = useState(false);
  const toggleStatus = () => {
    setStatus(!status);
  }

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div className={ShopStyles.overallShop}>
      <div className={ShopStyles.discover}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Explore our wide range of products designed to meet your needs. Explore our wide range of products designed to meet your needs.</p>
      </div>
      <div className={ShopStyles.overallFilter}>
        <div>
          <h4>20 items</h4>
          <div>
            {isChecked ? <FaChevronLeft /> :  <FaChevronRight />}
            <label htmlFor='showFilter' onClick={()=>handleCheckboxChange()}>Show Filter</label>
          </div>
        </div>
        <div>
          <select name="rating" id="rating-select" className={ShopStyles.grade_select} value={rating} onChange={handleRatingChange} >
            <option value="" onClick={() => handleRatingChange()}>-- SELECT A RATING --</option>
            <option value="recommended" onClick={() => handleRatingChange()}>RECOMMENDED</option>
            <option value="best" onClick={() => handleRatingChange()}>BEST</option>
            <option value="good" onClick={() => handleRatingChange()}>GOOD</option>
            <option value="average" onClick={() => handleRatingChange()}>AVERAGE</option>
            <option value="poor" onClick={() => handleRatingChange()}>POOR</option>
          </select>
        </div>
      </div>
      <div className={SidebarStyles.sidebar_container}>
        <input type='checkbox' className={SidebarStyles.check} id="showFilter" />
        <div className={`${SidebarStyles.sidebar} ${isChecked ? SidebarStyles.active : ""}`}>
          {sections.map((section, index) => {
            const key = Object.keys(section)[0];
            return (
              <div key={index} className={SidebarStyles.filter_group}>
                <div className={SidebarStyles.filter_header}>
                  <h3>{key}</h3>
                  {status ? <FaChevronUp onClick={() => toggleStatus()} /> : <FaChevronDown onClick={() => toggleStatus()} />}
                </div>
                <ul>
                  {section[key].map((value, i) => (
                    <div className={`${SidebarStyles.filter_option} ${status ? SidebarStyles.active : ""}`} key={i}>
                      <input type="checkbox" id={value} name={value} value={value} />
                      <label htmlFor={value}>{value}</label>
                    </div>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <ProductGrid rating={rating} />
      </div>

    </div>
  );
}
