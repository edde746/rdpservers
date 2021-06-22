import Link from 'next/link'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Pricing() {
    const [showWindows, setShowWindows] = useState(false)

    let togglePlans = () => {
        if (showWindows) {
            document.getElementById('os-toggle').classList.remove('checked');
            setShowWindows(false);
        } else {
            document.getElementById('os-toggle').classList.add('checked');
            setShowWindows(true);
        }
    };

    let plans = showWindows ? [
        { storage: '40 GB', cpu: '2 vCPU', memory: '4 GB', bandwidth: '∞', price: '8.50$/mo' },
        { storage: '60 GB', cpu: '2 vCPU', memory: '4 GB', bandwidth: '∞', price: '10.00$/mo' },
        { storage: '60 GB', cpu: '4 vCPU', memory: '8 GB', bandwidth: '∞', price: '12.50$/mo' },
        { storage: '80 GB', cpu: '8 vCPU', memory: '8 GB', bandwidth: '∞', price: '17.50$/mo' },
        { storage: '120 GB', cpu: '8 vCPU', memory: '8 GB', bandwidth: '∞', price: '25.00$/mo' }
    ] : [
        { storage: '20 GB', cpu: '1 vCPU', memory: '4 GB', bandwidth: '0.5 TB', price: '2.50$/mo' },
        { storage: '20 GB', cpu: '2 vCPU', memory: '4 GB', bandwidth: '1 TB', price: '5.00$/mo' },
        { storage: '40 GB', cpu: '2 vCPU', memory: '8 GB', bandwidth: '1 TB', price: '7.50$/mo' },
        { storage: '40 GB', cpu: '4 vCPU', memory: '8 GB', bandwidth: '10 TB', price: '10.00$/mo' },
        { storage: '80 GB', cpu: '8 vCPU', memory: '8 GB', bandwidth: '∞', price: '15.00$/mo' },
        { storage: '120 GB', cpu: '8 vCPU', memory: '12 GB', bandwidth: '∞', price: '20.00$/mo' },
        { storage: '240 GB', cpu: '8 vCPU', memory: '16 GB', bandwidth: '∞', price: '25.00$/mo' },
    ];

    return (
        <div>
            <Header />
            <div className='section-container page'>
                <h1 className='section-title'>SSD Cloud Instances</h1>
                <div className='os-select'>
                    <p>Linux</p>
                    <label className='switch' onClick={togglePlans}>
                        <span id='os-toggle' className={showWindows ? 'slider round checked' : 'slider round'}></span>
                    </label>
                    <p>Windows</p>
                </div>
                <table className='pricing-table'>
                    <tr>
                        <th className='sm-hide'>P-score</th>
                        <th>Storage</th>
                        <th className='md-hide'>CPU</th>
                        <th className='sm-hide'>Memory</th>
                        <th className='md-hide'>Bandwidth</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                    {
                        plans.map((plan, i) => <tr key={i}>
                            <td className='sm-hide'>{Math.floor(Math.random() * 10000)}</td>
                            <td>{plan.storage}</td>
                            <td className='md-hide'>{plan.cpu}</td>
                            <td className='sm-hide'>{plan.memory}</td>
                            <td className='md-hide'>{plan.bandwidth}</td>
                            <td>{plan.price}</td>
                            <td><Link href='/panel/checkout'><a className='btn btn-secondary'>Deploy</a></Link></td>
                        </tr>)
                    }
                </table>
                <div className='cta'>
                    <a onClick={() => alert('This is the only link that is not implemented.')} className='btn btn-primary'>Create Account</a>
                </div>
            </div>
            <Footer />
        </div>
    );
}
