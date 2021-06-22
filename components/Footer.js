import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='section-light'>
            <div className='footer-container'>
                <div>
                    <h2 className='brand-logo'>RDPservers</h2>
                    <p>&copy; RDPservers 2021</p>
                </div>
                <div className='nav-links'>
                    <Link href='/terms'>
                        <a className='nav-link'>Terms of Service</a>
                    </Link>
                    <Link href='/privacy'>
                        <a className='nav-link'>Privacy Policy</a>
                    </Link>
                </div>
            </div>
        </footer>
    );
}