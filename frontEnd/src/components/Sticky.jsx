import React, { useState, useEffect } from "react";
// import "./StickyComponent.css"; // Import your CSS file with the styles

function Sticky() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // You can adjust this threshold as needed
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`sticky-component ${isSticky ? "sticky" : ""}`}>
      {/* Your content here */}
    </div>
  );
}

export default Sticky;
