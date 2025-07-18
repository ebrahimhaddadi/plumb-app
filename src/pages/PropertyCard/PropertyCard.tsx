import type {FC} from "react"
import { FaMapMarkerAlt } from "react-icons/fa"

interface PropertyCardProps {
    title: string
    image: string
    address: string
}

const PropertyCard: FC<PropertyCardProps> = ({ title, image, address }) => {
    return (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-4 mx-auto text-right">
            {/* تصویر ملک */}
            <div className="rounded-2xl overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-56 object-cover"
                />
            </div>

            {/* دایره‌های نشانگر اسلایدر (ثابت در اینجا) */}
            <div className="flex justify-center items-center space-x-1 my-2 rtl:space-x-reverse">
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>

            {/* عنوان */}
            <h2 className="text-lg font-semibold mt-2">{title}</h2>

            {/* آدرس */}
            <p className="text-sm text-gray-600 mt-1 flex items-center gap-1 rtl:flex-row-reverse">
                <FaMapMarkerAlt className="text-gray-500" />
                {address}
            </p>

            {/* دکمه */}
            <div className="mt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full w-full transition-all">
                    درخواست بازرسی
                </button>
            </div>
        </div>
    )
}

export default PropertyCard
