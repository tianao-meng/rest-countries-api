import React from "react";

const Header = () => {
  const changeTheme = () => {
    const header = document.querySelector(".header");
    const button = document.querySelector("button");
    const input = document.querySelector("input");
    const dropdown = document.querySelector(".dropdown");
    const fa = document.querySelector(".fa");
    const informations = document.querySelectorAll(".information");
    const detailsCard = document.querySelector(".details-card");

    document.body.classList.toggle("light");
    if (header) {
      header.classList.toggle("light");
    }

    if (button) {
      button.classList.toggle("light");
    }

    if (input) {
      input.classList.toggle("light");
    }
    if (dropdown) {
      dropdown.classList.toggle("light");
    }

    if (fa) {
      fa.classList.toggle("light");
    }

    if (detailsCard) {
      detailsCard.classList.toggle("light");
    }

    if (informations) {
      informations.forEach((information) => {
        information.classList.toggle("light");
      });
    }
  };

  return (
    <div className="container header">
      <div>
        <h2>Where in the world?</h2>
      </div>

      <div>
        <button onClick={changeTheme}>
          <i class="fas fa-moon"></i>Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Header;
