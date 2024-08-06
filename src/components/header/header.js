import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Popover, MenuItem, Menu } from "@mui/material";
import "./header.css";
import logo from "../../assets/logo.png";
import bg3 from "../../assets/bg3.jpeg";
import bg1 from "../../assets/bg1.jpeg";
import bg2 from "../../assets/bg2.jpeg";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <header
      className="header"
      // style={{
      //   backgroundImage: `url(${bg1})`,
      //   backgroundSize: "cover", // Cover the entire header
      //   backgroundRepeat: "no-repeat", // Prevent repeating
      //   backgroundPosition: "center center", // Center the background image
      // }}
    >
      <div className="logo">
        <img src={logo} width="80px" height="80px" alt="EchoArt Logo" />
      </div>
      <h1 className="site-title">EchoArt</h1>
      <nav>
        <div className="menu-toggle" onClick={handleMenuClick}>
          ☰
        </div>
        {/* <Popover
          id={id}
          open={menuOpen}
          anchorEl={anchorEl}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Menu
            onClick={handleMenuClose}
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Accueil</Link>
            </MenuItem>
            {/* <MenuItem className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="/about">À propos</Link>
            </MenuItem>
            <MenuItem className={location.pathname === '/blog' ? 'active' : ''}>
              <Link to="/blog">Blog</Link>
            </MenuItem> 
          </Menu>
        </Popover> */}
        {/* <nav className="desktop-nav">
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Accueil</Link>
            </li>
            {/* <li className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="/about">À propos</Link>
            </li>
            <li className={location.pathname === '/blog' ? 'active' : ''}>
              <Link to="/blog">Blog</Link>
            </li> 
          </ul>
        </nav> */}
      </nav>
    </header>
  );
}

export default Header;

//======================================================================================

// // src/components/Header.js
// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Popover, MenuItem, Menu } from "@mui/material";
// import "./header.css";
// import logo from "../../assets/logo.png";
// import bg1 from "../../assets/bg1.jpeg";
// import bg2 from "../../assets/bg2.jpeg";

// function Header() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//     setMenuOpen(true);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setMenuOpen(false);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

//   return (
//     <header
//       className="header"
//       style={{
//         backgroundImage: `url(${bg3})`,
//         backgroundSize: "cover", // Cover the entire header
//         backgroundRepeat: "no-repeat", // Prevent repeating
//         backgroundPosition: "center ", // Center the background image
//       }}
//     >
//       <div className="logo">
//         <img src={logo} width="100px" height="100px" />
//         <h1>EchoArt</h1>
//       </div>
//       <nav>
//         <div className="menu-toggle" onClick={handleMenuClick}>
//           ☰
//         </div>
//         <Popover
//           id={id}
//           open={menuOpen}
//           anchorEl={anchorEl}
//           onClose={handleMenuClose}
//           anchorOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//         >
//           <Menu
//             onClick={handleMenuClose}
//             anchorEl={anchorEl}
//             open={menuOpen}
//             onClose={handleMenuClose}
//           >
//             <MenuItem className={location.pathname === "/" ? "active" : ""}>
//               <Link to="/">Accueil</Link>
//             </MenuItem>
//             {/* <MenuItem className={location.pathname === '/about' ? 'active' : ''}>
//               <Link to="/about">À propos</Link>
//             </MenuItem>
//             <MenuItem className={location.pathname === '/blog' ? 'active' : ''}>
//               <Link to="/blog">Blog</Link>
//             </MenuItem> */}
//           </Menu>
//         </Popover>
//         <nav className="desktop-nav">
//           <ul>
//             <li className={location.pathname === "/" ? "active" : ""}>
//               <Link to="/">Accueil</Link>
//             </li>
//             {/* <li className={location.pathname === '/about' ? 'active' : ''}>
//               <Link to="/about">À propos</Link>
//             </li>
//             <li className={location.pathname === '/blog' ? 'active' : ''}>
//               <Link to="/blog">Blog</Link>
//             </li> */}
//           </ul>
//         </nav>
//       </nav>
//     </header>
//   );
// }

// export default Header;
