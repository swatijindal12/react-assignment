import './Header.css'

const Header = () => {
  return (
    <div className="div-header">
      <header>Kanban Board</header>
      <form className="input">
        <div className="search-container">
          <input placeholder="Search" className="input-search"></input>
        </div>
      </form>
    </div>
  )
}

export default Header
