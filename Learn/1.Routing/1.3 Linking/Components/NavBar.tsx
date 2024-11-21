import Link from 'next/link'
import React from 'react'

const NavBar : React.FC = () => {
  return (
    <nav>
        <ul className='flex justify-around'>
            <div className='logo'>
                <h1 className='text-center'>Logo</h1>
            </div>

            <div className='link-container'>
                <Link className="list-none no-underline m-[10px]" href="/">Home</Link>
                <Link className="list-none no-underline m-[10px]" href="/about">About</Link>
                <Link className="list-none no-underline m-[10px]" href="/project">Project</Link>
            </div>
        </ul>
    </nav>
  )
}

export default NavBar