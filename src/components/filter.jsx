function Filter({ cities, selectedCity, setSelectedCity }) {
  return (
    <div className="mb-6">
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="p-3 border rounded-lg w-full md:w-64"
      >
        <option value="All">All Cities</option>

        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;