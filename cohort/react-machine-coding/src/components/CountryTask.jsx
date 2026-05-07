import { useState } from "react";

export default function CountryTask() {
  const countries = [
    {
      name: "India",
      countryCode: "IN",
      cities: ["Mumbai", "Delhi"],
    },
    {
      name: "Pakistan",
      countryCode: "PK",
      cities: ["Lahore", "Karachi"],
    },
    {
      name: "America",
      countryCode: "USA",
      cities: ["New York", "Las Vegas"],
    },
  ];

  const [country, setCountry] = useState("");
  return (
    <div className="">
      <h1 className="text-2xl m-5 text-center">Nested Dropdown Question on React</h1>
      {/* 1st DropDown  */}
      <div className="flex justify-center flex-row">
        <select
          className="w-fit mx-4 my-4 border rounded-md"
          onChange={(e) => {
            console.log(e.target.value);
            setCountry(e.target.value);
          }}
        >
          {countries.map((item) => {
            return (
              <option key={item.countryCode} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>

        {/* 2nd DropDown  */}

        {country && (
          <select className="w-fit mx-4 my-4 border rounded-md">
            {countries
              .find((c) => c.name === country)
              .cities.map((city, index) => {
                return (
                  <option key={index} value={city}>
                    {city}
                  </option>
                );
              })}
          </select>
        )}
      </div>
    </div>
  );
}
