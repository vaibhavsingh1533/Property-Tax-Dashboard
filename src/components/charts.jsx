import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Charts({ data }) {
  const cityData = [];

  const cities = [...new Set(data.map((item) => item.tenant))];

  cities.forEach((city) => {
    const cityProperties = data.filter((item) => item.tenant === city);

    const totalCollection = cityProperties.reduce(
      (sum, item) => sum + item.collection_inr,
      0
    );

    const approved = cityProperties.filter(
      (item) => item.status === "Approved"
    ).length;

    const rejected = cityProperties.filter(
      (item) => item.status === "Rejected"
    ).length;

    const pending = cityProperties.filter(
      (item) => item.status === "Pending"
    ).length;

    cityData.push({
      city,
      collection: totalCollection,
      approved,
      rejected,
      pending,
    });
  });

  const propertyTypeData = [];

  const types = [...new Set(data.map((item) => item.property_type))];

  types.forEach((type) => {
    const count = data.filter(
      (item) => item.property_type === type
    ).length;

    propertyTypeData.push({
      name: type,
      value: count,
    });
  });

  const colors = ["#2563eb", "#16a34a", "#dc2626", "#f59e0b", "#9333ea"];

  return (
    <div className="mt-8 space-y-8">
      {/* Bar Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          Total Collection by City
        </h2>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={cityData}>
            <XAxis dataKey="city" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="collection" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Status Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          Property Status Comparison
        </h2>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={cityData}>
            <XAxis dataKey="city" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="approved" fill="#16a34a" />
            <Bar dataKey="rejected" fill="#dc2626" />
            <Bar dataKey="pending" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          Property Type Distribution
        </h2>

        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={propertyTypeData}
              dataKey="value"
              nameKey="name"
              outerRadius={140}
              label
            >
              {propertyTypeData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;