import React from 'react'

import img1 from "../assets/Category/phone.png"
import img2 from "../assets/Category/laptop.png"
import img3 from "../assets/Category/iphone.png"
import img4 from "../assets/Category/appliance.webp"

function CategoryList() {
  return (
    <div className='bg-white w-full h-32 rounded-3xl px-32 shadow-md'>
        <div className='flex flex-row justify-around items-center'>
            <div className='flex flex-col items-center'>
                <img src={img1} width={"80px"} alt='not showing'/>
                <label>Phone</label>
            </div>

            <div className='flex flex-col items-center'>
                <img src={img2} width={"80px"} alt='not showing'/>
                <label>Laptop</label>
            </div>

            <div className='flex flex-col items-center'>
                <img src={img3} width={"80px"} alt='not showing'/>
                <label>iphone</label>
            </div>

            <div className='flex flex-col items-center'>
                <img src={img4} width={"140px"} alt='not showing'/>
                <label>Appliance</label>
            </div>
        </div>
    </div>
  )
}

export default CategoryList