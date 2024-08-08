import React from "react";
import img1 from "../assets/Category/phone.png";
function Cart() {
  return (
    <>
      <div className="px-20 py-10">
        <div className="bg-pink-800 flex justify-center p-5 rounded-md mb-10">
          <h1 className="text-white font-bold text-3xl">Shopping Cart</h1>
        </div>

        <div className="flex shadow-lg  rounded-md border border-purple-700">
          {/** Shopping Cart */}
          <div className="w-3/5  px-10 py-5 rounded-md">
            <div className="flex justify-between border-b pb-8">
              <h1 className="text-2xl font-semibold">Shopping Cart</h1>
              <h2 className="text-2xl font-semibold">3 Items</h2>
            </div>

            <div className="flex items-stretch pt-5">
              <div>
                <img
                  src="https://i.ibb.co/TTnzMTf/Rectangle-21.png"
                  alt="not showing"
                  className="object-cover object-center block w-48"
                />
              </div>

              <div className="w-8/12  pl-5">
                <p>RFC207</p>

                <div className="flex justify-between">
                  <p>Pure Leather Purse</p>
                  <div>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>

                <div className="">
                  <p className="text-xs">Black cover</p>
                  <p className="text-xs">high rate</p>

                  <div className="flex justify-between">
                    <div className="flex gap-5">
                      <p className="text-xs">Remove</p>
                      <p className="text-xs">Save for later</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/** Summary */}
          <div className="w-2/5  p-5">
            <div className="border-b pb-8">
              <h1 className="text-2xl font-semibold">Order Summary</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
