import './Navbar.scss'
import github from '../../assets/github.svg'
import bell from '../../assets/bell.svg'
import add from '../../assets/add.svg'
import profile from '../../assets/profile.svg'
import cross from '../../assets/cross.svg'
const Navbar = () => {
  return (
    <header className="Navbar">
      <div className="top-Nav">
        <div className="links">
          <img src={github} alt="logo" height={35} width={35} />
          <input
            type="text"
            className="Search-bar"
            placeholder="Search or Jump to..."
          />
          <img
            src={cross}
            alt="cross"
            height={20}
            width={20}
            className="cross"
          />
          <span>Pull requests</span>
          <span>Issues</span>
          <span>Codespaces</span>
          <span>Marketplace</span>
          <span>Explore</span>
        </div>
        <div className="profile-info">
          <img src={bell} alt="bell" height={15} width={15} />
          <img src={add} alt="add" height={15} width={15} />
          <img src={profile} alt="profile" height={20} width={20} />
        </div>
      </div>
      <div className="bottom-Nav">
        <div className="Features-List">
          <span className="Head">Features</span>
          <span>Actions</span>
          <span>Packages</span>
          <span>Security</span>
          <span>Codespaces</span>
          <span className="Copilot">Copilot</span>
          <span>Code review</span>
          <span>Search</span>
          <span>Search</span>
          <span>Issues</span>
          <span>Discussions</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar
