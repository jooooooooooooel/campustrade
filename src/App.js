import React from "react";

const items = [
  { title: "Mario Kart 8 Deluxe", price: 19, user: "username1", img: "https://via.placeholder.com/150" },
  { title: "Marlboro Hat", price: 3.5, user: "username2", img: "https://via.placeholder.com/150" },
  { title: "Jumper", price: 7.8, user: "username3", img: "https://via.placeholder.com/150" },
  { title: "Hair Dryer", price: 5, user: "username4", img: "https://via.placeholder.com/150" },
  { title: "Levi Jeans", price: 14, user: "username5", img: "https://via.placeholder.com/150" },
  { title: "Fleetwood Mac Vinyl", price: 9, user: "username6", img: "https://via.placeholder.com/150" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-red-400 p-4 flex items-center justify-between">
        <div>
          <h1 className="text-white text-xl font-bold">campusTrade</h1>
          <p className="text-white text-sm">University of Liverpool</p>
        </div>
        <input
          className="rounded-full px-4 py-2 w-1/3"
          placeholder="Search..."
        />
        <div className="flex gap-4 font-bold">
          <button>BUY</button>
          <button>SELL</button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex justify-around bg-white p-3 shadow">
        {["Clothes", "Homeware", "Other", "Recently Added"].map((cat) => (
          <button key={cat} className="px-4 py-2 bg-gray-200 rounded">
            {cat}
          </button>
        ))}
      </div>

      {/* Recommended */}
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Recommended for You:</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-3">
              <img src={item.img} alt={item.title} className="rounded" />
              <h3 className="font-semibold mt-2">£{item.price}</h3>
              <p className="text-sm">{item.title}</p>
              <p className="text-xs text-gray-500">{item.user}</p>
            </div>
          ))}
        </div>
      </div>
          
      {/* Favourites */}
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Your Favourites:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white h-40 rounded-xl shadow"></div>
          ))}
        </div>
      </div>

      {/* Floating Button */}
      <button className="fixed bottom-6 right-6 bg-red-400 text-white px-6 py-3 rounded-full shadow-lg">
        Have a question?
      </button>
    </div>
  );
}