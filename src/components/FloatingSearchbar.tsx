'use client'

function FloatingSearchbar() {
  const onKeyUpSearch = (event: any) => {
    if (event.keyCode == 13) {
      window.location.href = `/?keyword=${event.target.value}`
    }
  }
  
  return (
    <div id="floating-searchbar" className="floating-searchbar">
      <div id="floating-searchbar-box" className="floating-searchbar-box">
        <input id="searchInput" type="text" placeholder="Search" onKeyUp={onKeyUpSearch}/>
      </div>
    </div>
  )
}

export default FloatingSearchbar