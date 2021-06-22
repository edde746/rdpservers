import PanelHeader from '../../components/PanelHeader'
import { toast } from 'react-toastify'

export default function Settings() {
    return (
        <>
            <PanelHeader />
            <div className='panel-container'>
                <div className='settings-layout'>
                    <div className='panel-card'>
                        <h2 className='card-title'>Account Information</h2>
                        <div className='account-info'>
                            <p>Username</p>
                            <p className='right'>user001</p>
                            <p>E-mail</p>
                            <p className='right'>john.doe@mail.com</p>
                            <p>Registered at</p>
                            <p className='right'>04/20/2021</p>
                            <p>Country</p>
                            <p className='right'>Sweden 🇸🇪</p>
                        </div>
                    </div>
                    <div className='panel-card change-password'>
                        <h2 className='card-title'>Change Password</h2>
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="New Password" />
                        <a className='btn btn-primary block' onClick={() => toast.dark('🔐 Password updated.')}>Update</a>
                    </div>
                </div>
            </div>
        </>
    );
}