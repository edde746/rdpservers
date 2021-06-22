import { XAxis, YAxis, HorizontalGridLines, LineSeries, FlexibleXYPlot } from 'react-vis'
import PanelHeader from '../../components/PanelHeader'
import { toast } from 'react-toastify'

function RandomChart() {
    let data = [];
    for (let i = 0; i < Math.random() * 10 + 8; i++) {
        data.push({ x: i, y: Math.random() * 100 });
    }
    return data;
}

export default function Manage() {
    let cpuUsage = RandomChart();
    let netUsage = RandomChart();

    return (
        <div>
            <PanelHeader />
            <div className='panel-container'>
                <div className='panel-layout'>
                    <div className='panel-card' style={{ height: 'inherit' }}>
                        <h1 className='card-title'>Managing</h1>
                        <p className='server-name'>server.name.example</p>
                    </div>
                    <div className='panel-card'>
                        <h1 className='card-title'>Actions</h1>
                        <div className='action-buttons'>
                            <a className='btn btn-primary' onClick={() => toast.dark('⭐ Server is restarting.')}>Restart</a>
                            <a className='btn btn-primary' onClick={() => toast.dark('⚠️ Server is resetting, please be patient.')}>Hard Reset</a>
                            <a className='btn btn-primary' onClick={() => toast.dark('⚠️ Server is resetting, please be patient.')}>Reset</a>
                            <a className='btn btn-primary' onClick={() => toast.dark('🛑 Server is shutting down.')}>Shutdown</a>
                        </div>
                    </div>
                </div>
                <div className='info-layout'>
                    <div className='panel-card' style={{ overflow: 'hidden' }}>
                        <h1 className='card-title'>Service Information</h1>
                        <div className='service-info'>
                            <p>OS</p>
                            <p className='right'>Windows Server 2012</p>
                            <p>IPv4 Address</p>
                            <p className='right'>255.255.255.255</p>
                            <p>IPv6 Address</p>
                            <p className='right'>3c05:1600:0:b::49dc:b3</p>
                            <p>Memory</p>
                            <p className='right'>4 GB</p>
                            <p>vCPUs</p>
                            <p className='right'>2</p>
                            <p>SSD Storage</p>
                            <p className='right'>40 GB</p>
                        </div>
                    </div>
                    <div className='panel-card' style={{ height: 'inherit' }}>
                        <h1 className='card-title'>Payment Information</h1>
                        <div className='payment-info'>
                            <p>Billing Amount</p>
                            <p className='right'>22.50$</p>
                            <p>Next Invoice</p>
                            <p className='right'>21/05/2021</p>
                            <p>Billing Type</p>
                            <p className='right'>CoinPayments</p>
                            <p>Automatic</p>
                            <p className='right'>No</p>
                        </div>
                    </div>
                </div>
                <div className='panel-card'>
                    <h1 className='card-title'>CPU Usage</h1>
                    <div style={{ display: 'inline-block', height: '200px', width: '100%' }}>
                        <FlexibleXYPlot>
                            <HorizontalGridLines />
                            <LineSeries
                                data={cpuUsage} />
                            <XAxis />
                            <YAxis />
                        </FlexibleXYPlot>
                    </div>
                </div>
                <div className='panel-card'>
                    <h1 className='card-title'>Network Usage</h1>
                    <div style={{ display: 'inline-block', height: '200px', width: '100%' }}>
                        <FlexibleXYPlot>
                            <HorizontalGridLines />
                            <LineSeries
                                data={netUsage} />
                            <XAxis />
                            <YAxis />
                        </FlexibleXYPlot>
                    </div>
                </div>
            </div>
        </div>
    );
}