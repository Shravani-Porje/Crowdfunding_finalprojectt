// import React from "react";
// import "../styles/styles.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>&copy; {new Date().getFullYear()} Crowdfunding Platform</p>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import "../styles/styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Crowdfunding Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
