import PanelHeader from '../../components/PanelHeader'
import { toast } from 'react-toastify'
import Link from 'next/link'

export default function Panel() {
    return (
        <div>
            <PanelHeader />
            <div className='panel-container'>
                <div className='checkout-layout'>
                    <div className='checkout-forms'>
                        <div className='panel-card'>
                            <h1 className='card-title'>Billing Address</h1>
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
                                <label>Address Line 1</label>
                                <input type="text" placeholder="Address Line 1" />
                            </div>
                            <div className='input-group'>
                                <label>Address Line 2</label>
                                <input type="text" placeholder="Address Line 2" />
                            </div>
                            <div className='name-input'>
                                <div className='input-group'>
                                    <label>City</label>
                                    <input type="text" placeholder="City" />
                                </div>
                                <div className='input-group'>
                                    <label>ZIP Code</label>
                                    <input type="text" placeholder="ZIP Code" />
                                </div>
                            </div>
                            <div className='input-group'>
                                <label>State/Province</label>
                                <input type="text" placeholder="State" />
                            </div>
                        </div>
                        <div className='panel-card'>
                            <h1 className='card-title'>Payment</h1>
                            <input type="radio" name='pay' value='1' id='paypal' />
                            <label htmlFor='paypal'> PayPal</label><br />
                            <input type="radio" name='pay' value='2' id='stripe' />
                            <label htmlFor='stripe'> Stripe</label><br />
                            <input type="radio" name='pay' value='2' id='coin' />
                            <label htmlFor='coin'> CoinPayments</label><br />
                        </div>
                        <div className='panel-card'>
                            <h1 className='card-title'>Configuration</h1>
                            <div className='input-group'>
                                <label>Name</label>
                                <input type="text" placeholder="server.domain.com" />
                            </div>
                            <div className='input-group'>
                                <label>SSH Key</label>
                                <input type="text" placeholder="ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC6pbxwTJIT8VlIXUWNHJPP+GOP/uDMkBZf88bYNKL4WITBAKdlGVdLqQA/kAY2zV9vhDDkhevUf5KAXaJbM76xpAcIhcXQgNMwmg8uWoLIg5iE3OD3MHcZ8YDbGnW0BKNTf9W1rXZ3WdvpP1af9FS46O6K6IVnimWol2+BhjeS7IqrBCdMvs0YlRp0MKSPdcErRmqAOPFDrzjTF//u0hPl/ndWM3MqPZWk1CcQ88284UFdznOk61dzlMN7CEAiLgROEwRcVjbr7gB29cqDKO5JOQdvya09uM0+n8ANRV/RyUtIXDA4Y3D+O105RRQDWiDVu3A95RDxqCNGyOMQESw4/yCtVRZwfKNShJOgFL8RrEbFZw+c4ZIzD7Fuhs5DU+3Q+WD0hdxykiODrXsMcxNPwq4Gbloz/xfKBeDS3i2vIeAI89gorC/1khoCOnlUt90Eq7ATQdOIw4DOZ06szSxH/808qJNY+aFzO9udFPs56eFxbBMRelsov8EO0YsZTxk=" />
                            </div>
                            <div className='input-group'>
                                <label>Notes</label>
                                <input type="text" placeholder="Extra notes about your order" />
                            </div>
                            <div className='input-group'>
                                <label>Location</label>
                                <select>
                                    <option>USA - Texas</option>
                                    <option>USA - Chicago</option>
                                    <option>USA - Florida</option>
                                    <option>France - Paris</option>
                                    <option>Germany - Frankfurt</option>
                                    <option>UK - London</option>
                                    <option>UK - Manchester</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='panel-card checkout-card'>
                        <h2 className='card-title'>Checkout</h2>
                        <div className='cart-items'>
                            <p>Starter Linux</p>
                            <p className='right'>15.00</p>
                            <p>Gold Windows</p>
                            <p className='right'>20.00</p>
                            <p>VAT (25%)</p>
                            <p className='right'>8.75</p>
                            <p className='total'>Total</p>
                            <p className='total right'>$43.75</p>
                        </div>
                        <Link href='/panel'>
                            <a className='btn btn-primary block' onClick={() => toast.dark('💵 Purchase completed.')}>Pay</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}