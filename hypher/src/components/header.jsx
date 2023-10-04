import Menu from "./menu";

import viteLogo from "/vite.svg";
function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={viteLogo} className="logo jello-diagonal-2" alt="Vite logo" />
      </div>
      <Menu />
    </div>
  );
}

export default Header;
