import React from "react";

function Footer() {
  return (
    <footer>
      <div className="bg-company-600 text-company-50 py-20 text-center">
        <div className="">
          Just live like playing a game, running side quest and main quest,
          grinding to the next leveling up.
        </div>
        <p>Icon for Social Media</p>
        <p>Build with Love (C) DimNugraha</p>
        <p>this website is built with NextJS</p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
