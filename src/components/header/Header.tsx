import clsx from 'clsx'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  const navLinkClass = ({ isActive} : {isActive: boolean} ) => clsx('py-navItem', {
    'text-black/30': !isActive,
    'text-black/80': isActive,
  });
  
  return (
    <header>
        <nav className='px-2 py-4'>
            <div className='max-w-screen-2xl mx auto flex justify-between items-center'>
                <Link to='/' className='font-XanhMono text-2xl mr-8 text-letsee-green'>LetSee</Link>
                <ul className='pl-0 mb-0 flex'>
                  <li className='ml-4'>
                    <NavLink to='/' className={navLinkClass}>Home</NavLink>
                  </li>
                  <li className='ml-4'>
                    <NavLink to='/' className={navLinkClass}>Sign in</NavLink>
                  </li>
                  <li className='ml-4'>
                    <NavLink to='/' className={navLinkClass}>Sign up</NavLink>
                  </li>
                  
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header