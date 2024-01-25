function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/img/GabutLab-logo-transparent.png" alt="GabutLab"/>
      </div>
      <div className="header-navbar">
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
      <div className="header-searchbar">
        <div id="searchbar" className="searchbar">
          <input id="searchInputBtn" type="text" placeholder="Search posts by keyword" readOnly/>
        </div>
      </div>
    </header>
  )
}

export default Header