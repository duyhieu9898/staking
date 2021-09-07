import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { Link } from 'react-router-dom';
import logoWanaka from 'Assets/logo-wanaka.svg';

export default function NavBar() {
  return (
    <nav className='menu-bar alignItem'>
      <div className='left-menu'>
        <div className='logo'>
          <Link to='/'>
            <img src={logoWanaka} alt='logo'></img>
          </Link>
        </div>
        <div className='info-chain'>
          <LeftMenu />
        </div>
      </div>
      <div className='rightMenu'>
        <RightMenu />
      </div>
    </nav>
  );
}
