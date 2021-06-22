import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <section className='background-image'>
        <div className='main-container section-container'>
          <h1 className='heading'>Cheap Virtual Servers</h1>
          <h2 className='subtext'>We strive to provide the best quality Windows and Linux servers for affordable prices while keeping quality of our service high.</h2>
          <Link href='/pricing'>
            <a className='btn btn-primary'>Order now</a>
          </Link>
        </div>
      </section>
      <section className='section-padding'>
        <div className='section-container'>
          <h3 className='section-title'>Features</h3>
          <div className='features-grid'>
            <div className='feature'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
              <h5>Guaranteed Uptime</h5>
              <p>We have some of the highest uptime in the industry</p>
            </div>
            <div className='feature'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
              <h5>Support</h5>
              <p>Around the clock support for all our services</p>
            </div>
            <div className='feature'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              <h5>
                Backups
              </h5>
              <p>Our backup service is available for all our servers</p>
            </div>
            <div className='feature'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              <h5>SSH Keys</h5>
              <p>Easily set up SSH keys when buying your server</p>
            </div>
            <div className='feature'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h5>Crypto Accepted</h5>
              <p>We accept 26+ different crypto currencies</p>
            </div>
            <div className='feature'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h5>Direct Access</h5>
              <p>Access your server directly via SSH or RDP</p>
            </div>
          </div>
        </div>
      </section>
      <section className='section-padding section-light'>
        <div className='section-container'>
          <h3 className='section-title'>Pricing</h3>
          <div className='pricing'>
            <div className='pricing-card'>
              <h5>Starter Windows</h5>
              <div className='pricing-features'>
                <p>Instant Setup</p>
                <p>4 vCPU</p>
                <p>4GB Ram</p>
                <p>20GB SSD</p>
                <p>&infin; Bandwidth</p>
              </div>
              <Link href='/pricing'>
                <a className='btn btn-secondary'>Order Now</a>
              </Link>
            </div>
            <div className='pricing-card pricing-featured'>
              <h5>Gold Windows</h5>
              <div className='pricing-features'>
                <p>Instant Setup</p>
                <p>Priority Support</p>
                <p>8 vCPU</p>
                <p>8GB Ram</p>
                <p>60GB SSD</p>
                <p>&infin; Bandwidth</p>
              </div>
              <Link href='/pricing'>
                <a className='btn btn-primary'>Order Now</a>
              </Link>
            </div>
            <div className='pricing-card'>
              <h5>Starter Linux</h5>
              <div className='pricing-features'>
                <p>2 vCPU</p>
                <p>4GB Ram</p>
                <p>20GB HDD</p>
                <p>&infin; Bandwidth</p>
              </div>
              <Link href='/pricing'>
                <a className='btn btn-secondary'>Order Now</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='section-padding'>
        <div className='section-container'>
          <h3 className='section-title'>Contact Us</h3>
          <form>
            <div className='name-input'>
              <div className='input-group'>
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div className='input-group'>
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>
            <div className='input-group'>
              <label>Email</label>
              <input type="text" placeholder="john.doe@mail.com" />
            </div>
            <div className='input-group'>
              <label>Message</label>
              <textarea placeholder="Details about your inquiry"></textarea>
            </div>

            <a className='btn btn-primary block'>Submit</a>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}
