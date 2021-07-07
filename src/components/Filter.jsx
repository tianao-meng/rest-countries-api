import React from "react";

const Filter = () => {
  window.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("search");

    search.addEventListener("input", (e) => {
      const { value } = e.target;
      console.log(value);
      const countryName = document.querySelectorAll(".name");

      countryName.forEach((name) => {
        if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
          name.parentElement.parentElement.style.display = "block";
        } else {
          name.parentElement.parentElement.style.display = "none";
        }
      });
    });
  });

  const handleDropdown = () => {
    const filterBtn = document.getElementById("filter");
    filterBtn.classList.toggle("open");
  };

  const handleRegion = (s) => {
    const region = document.getElementById(s);

    const value = region.innerText;

    const countryRegion = document.querySelectorAll(".region");

    const p = document.getElementById("p");

    p.innerText = value;
    countryRegion.forEach((region) => {
      if (region.innerText.includes(value) || value === "All") {
        // .card -> .card-body -> .country-region

        region.parentElement.parentElement.parentElement.style.display =
          "block";
      } else {
        region.parentElement.parentElement.parentElement.style.display = "none";
      }
    });
  };

  return (
    <div className="container filter">
      <form>
        <div className="input">
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search for a country..."
          />
        </div>

        <div className="select">
          <div onClick={handleDropdown} className="dropdown" id="filter">
            <div id="p">Filter by Region</div>
            <ul>
              <li id="All" onClick={() => handleRegion("All")}>
                All
              </li>
              <li id="Africa" onClick={() => handleRegion("Africa")}>
                Africa
              </li>
              <li id="Americas" onClick={() => handleRegion("Americas")}>
                Americas
              </li>
              <li id="Asia" onClick={() => handleRegion("Asia")}>
                Asia
              </li>
              <li id="Europe" onClick={() => handleRegion("Europe")}>
                Europe
              </li>
              <li id="Oceania" onClick={() => handleRegion("Oceania")}>
                Oceania
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filter;
