import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-8 px-6 mt-10 lg:mt-0">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-200">
          This is not an offering for sale, any such offering can only be made
          with a disclosure statement. The developer reserves the right to make
          changes and modifications to the information herein without prior
          notice. E.&O.E. Photos and renderings are representational only and
          may not be accurate.
        </p>

        <p className="mt-4 text-sm">
          Copyright © 2023 | <span className="font-semibold">SPENCER HOFFMANN</span> | All rights reserved
        </p>

        <p className="mt-4 text-sm font-semibold underline cursor-pointer">
          TÉRMINOS Y CONDICIONES
        </p>
      </div>
    </footer>
  );
};

export default Footer;
