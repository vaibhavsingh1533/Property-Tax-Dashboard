import { FaBuilding, FaCheckCircle, FaTimesCircle, FaRupeeSign } from "react-icons/fa";

function KPIcard({ title, value }) {
  let icon;

  if (title === "Total Properties") {
    icon = <FaBuilding className="text-blue-600 text-3xl" />;
  } else if (title === "Approved") {
    icon = <FaCheckCircle className="text-green-600 text-3xl" />;
  } else if (title === "Rejected") {
    icon = <FaTimesCircle className="text-red-600 text-3xl" />;
  } else {
    icon = <FaRupeeSign className="text-yellow-600 text-3xl" />;
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-gray-500 text-sm">{title}</h2>
          <p className="text-2xl font-bold mt-2">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  );
}

export default KPIcard;