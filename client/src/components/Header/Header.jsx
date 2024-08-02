import "./Header.css";
import Menu from "./Menu";

export default function Header({ onClick, active, onChange }) {
  return (
    <>
      <header>
        {/* <img src="./logo.svg" alt="logo" /> */}
        {/* Размер картинки не подходит и она не связана с данным сезоном */}
        <Menu onClick={onClick} active={active} onChange={onChange}></Menu>
        <h1>Дневник ЛШ2024</h1>
        {/* <div class="menu-wrapper">
          <div class="menu">
            <label>MENU</label>
            <ul class="nav-links">
              <li>Home</li>
              <li>Portfolio</li>
              <li class="active">Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        </div> */}
      </header>
      <hr size="5" width="100%" color="black" />
    </>
  );
}
