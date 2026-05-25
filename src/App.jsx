import { useState } from "react";
import Navbar from "./components/Navbar";
import KPIcard from "./components/KPIcard";
import Filter from "./components/Filter";
import data from "./data/properties.json";
import Charts from "./components/Charts";
import ChatBot from "./components/ChatBot";

function App() {
  const [selectedCity, setSelectedCity] = useState("All");

  const cities = [...new Set(data.map((item) => item.tenant))];

  const filteredData =
    selectedCity === "All"
      ? data
      : data.filter((item) => item.tenant === selectedCity);

  const totalProperties = filteredData.length;

  const approvedProperties = filteredData.filter(
    (item) => item.status === "Approved"
  ).length;

  const rejectedProperties = filteredData.filter(
    (item) => item.status === "Rejected"
  ).length;

  const totalCollection = filteredData.reduce(
    (sum, item) => sum + item.collection_inr,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6">
        <Filter
          cities={cities}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <KPIcard title="Total Properties" value={totalProperties} />
          <KPIcard title="Approved" value={approvedProperties} />
          <KPIcard title="Rejected" value={rejectedProperties} />
          <KPIcard
            title="Total Collection"
            value={`₹${totalCollection.toLocaleString()}`}
          />
        </div>
        <Charts data={filteredData} />
<ChatBot data={data} />
      </div>
    </div>
  );
}

export default App;