import Link from 'next/link'
import { useState } from 'react'

export default function PanelHeader() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav>
            <Link href='/panel'>
                <h1 className='brand-logo'>RDPservers</h1>
            </Link>
            <div style={{ position: 'relative' }}>
                <button onClick={() => setShowDropdown(!showDropdown)} className='username-button'>
                    <span>username</span>
                    <svg fill='currentColor' viewBox='0 0 20 20'><path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
                </button>
                {showDropdown &&
                    <div className='dropdown' style={{ zIndex: 9999 }}>
                        <div className='dropdown-container'>
                            <Link href='/panel/settings'><a class='dropdown-link'>Settings</a></Link>
                            <Link href='/'><a class='dropdown-link'>Logout</a></Link>
                        </div>
                    </div>
                }
            </div>
        </nav>
    );
}