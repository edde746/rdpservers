import Link from 'next/link'

export default function Header() {

    return (
        <nav>
            <Link href='/'>
                <h1 className='brand-logo'>RDPservers</h1>
            </Link>
            <div className='sm-show' onClick={() => { document.getElementById('nav-links').classList.toggle('sm-hide') }}>
                <svg xmlns="http://www.w3.org/2000/svg" className='nav-icon' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className='nav-links sm-hide' id='nav-links'>
                <Link href='/'><a className='nav-link'>Home</a></Link>
                <Link href='/pricing'><a className='nav-link'>Pricing</a></Link>
                <Link href='/panel'><a className='btn btn-primary'>Dashboard</a></Link>
            </div>
        </nav>
    );
}