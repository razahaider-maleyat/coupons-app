import React from "react";

async function Cardfetch() {
  const apiResponse = await fetch(
    "https://coupons-backend-qs15.onrender.com/api/coupon/all-coupons"
  );
  const data = await apiResponse.json();

  return data;
}

export default async function HomePage() {
  const cardData = await Cardfetch();

  return (
    <div className="flex flex-col min-h-screen bg-black mb-16">
      <div className="  px-4 py-8">
        <h1 className="text-4xl text-orange-400 font-bold mb-6 ">
          Available Coupons
        </h1>
        <input
          placeholder="Search Coupons.."
          type="text"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ul>
          {cardData?.map((item, index) => {
            return (
              <>
                <li key={item.index} className="text-white text-2xl">
                  {item.businessName}
                </li>
                <li className="text-white">{item.availableCoupons}</li>
                <li className="text-white">{item.instructions}</li>
                <li className="text-white">{item.categories[0]}</li>
                <li className="text-white">{item.categories[1]}</li>
                <li>
                  {item.images.map((imageUrl, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={imageUrl}
                      alt={`Coupon Image ${imageIndex}`}
                      className="w-[120px] h-auto"
                    />
                  ))}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
