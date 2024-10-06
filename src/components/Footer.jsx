import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} | Made by Shagufta Afzal</p>
    </footer>
  );
}

export default Footer;
