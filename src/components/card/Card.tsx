import { FaMapMarkerAlt, FaImages } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { BsBookmark } from "react-icons/bs";

export default function Card() {
    return (
        <div style={{width:400,marginRight:10,marginLeft:10,borderRadius:10,backgroundColor:"#f4f4f4",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}
         className="w-20 rounded-3xl mr-10  overflow-hidden shadow-md border border-gray-200 bg-white">
            {/* Header */}
            <div className="flex items-center justify-between px-4 pt-4">
                <div className="flex items-center gap-2">
                    <img
                        src="https://randomuser.me/api/portraits/women/85.jpg"
                        alt="user"
                        className="w-8 h-8 rounded-full"
                    />
                    <div className="text-right text-xs">
                        <p className="font-bold text-gray-800">فرشته آینده‌نگر</p>
                        <p className="text-gray-500">تهران،زعفرانیه</p>
                    </div>
                </div>
                <HiDotsVertical className="text-gray-500" />
            </div>

            {/* Image */}
            <div className="relative mt-4">
                <img
                    src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                    alt="house"
                    className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-gray-700/70 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <FaImages />
                    <span>۸۰+ تصویر دیگر</span>
                </div>
                <div className="absolute top-2 right-2 bg-white/80 p-1 rounded-full">
                    <BsBookmark className="text-gray-700" />
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">خانه ویلایی مدرن</h3>
                <p className="text-sm text-gray-700 mt-1">
                    از <span className="font-bold">۲ میلیارد تومان</span>
                </p>
                <div className="flex items-center text-sm text-gray-600 mt-2">
                    <FaMapMarkerAlt className="ml-1" />
                    <span>تهران،زعفرانیه، خیابان مقدس اردبیلی، کوچه نسترن</span>
                </div>

                {/* Divider */}
                <hr className="my-3" />

                {/* Details */}
                <div className="flex justify-between text-xs text-gray-500">
                    <span>۹ اتاق خواب</span>
                    <span>۳ سرویس بهداشتی</span>
                    <span>۸۰۰ مترمربع</span>
                </div>
            </div>
        </div>
    );
}
