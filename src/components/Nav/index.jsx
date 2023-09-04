import './Nav.css'
import Logo from './Logo'
import Items from './Items'

const Nav = () => {
  return (
    <header
      className='Nav'
      role='banner'
    >
      <Logo />
      <Items />
    </header>
  )
}

export default Nav
