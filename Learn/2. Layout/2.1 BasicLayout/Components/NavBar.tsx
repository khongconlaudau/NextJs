import Link from 'next/link'
import React from 'react'

const NavBar : React.FC = () => {
  return (
    <nav>
        <ul className='login-menu flex justify-around border border-gray-500'>
            <li>
                <Link href="/login">Login Main</Link>
            </li>
            <li>
                <Link href="/login/user">Login User</Link>
            </li>
            <li>
                <Link href="/login/admin">Login Admin</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar