/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker"; // Biểu tượng vị trí
import cutleryIcon from "@iconify/icons-mdi/silverware-fork-knife"; // Biểu tượng nhà hàng
import starIcon from "@iconify/icons-mdi/star"; // Biểu tượng sao
import menuIcon from "@iconify/icons-mdi/book-open-variant"; // Biểu tượng menu
import clockIcon from "@iconify/icons-mdi/clock-time-four"; // Biểu tượng đồng hồ

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl overflow-hidden shadow-lg bg-white w-full h-auto ">
      {/* Hình ảnh nhà hàng */}
      <div className="relative">
        <img
          className="w-full h-[160px] object-cover"
          src={restaurant.imageUrl}
          alt={restaurant.name}
        />
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white text-blue-500">
          <Icon icon="mdi:heart-outline" />
        </button>
      </div>

      {/* Nội dung */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-900">{restaurant.name}</h2>
        <div className="text-sm flex mt-1">
          <Icon
            icon={cutleryIcon}
            width="18"
            height="18"
            className="text-blue-500"
          />
          <p className="text-gray-700 ml-1">{restaurant.type}</p>
        </div>
        <div className="text-sm flex mt-1">
          <Icon
            icon={locationIcon}
            width="18"
            height="18"
            className="text-pink-400"
          />
          <p className="text-gray-700 ml-1">{restaurant.location}</p>
        </div>
        <div className="text-sm flex mt-1">
          <Icon
            icon={starIcon}
            width="18"
            height="18"
            className="text-yellow-500"
          />
          <p className="text-yellow-400 ml-1">{restaurant.rating}</p>
          <span className="text-gray-500">({restaurant.reviews})</span>
        </div>
        <div className="text-sm flex mt-1">
          <Icon
            icon={menuIcon}
            width="18"
            height="18"
            className="text-blue-500"
          />
          <p className="text-gray-700 ml-1">Xem menu</p>
        </div>
        <div className="text-sm flex mt-1">
          <Icon
            icon={clockIcon}
            width="18"
            height="18"
            className="text-green-500"
          />
          <p className="text-green-500 ml-1">{restaurant.status}</p>
        </div>
        <button className="h-[43px] w-[110px] bg-blue-900 text-white rounded-2xl hover:bg-blue-700 ml-[140px] mt-2 ">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
