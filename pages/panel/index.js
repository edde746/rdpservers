import PanelHeader from '../../components/PanelHeader'
import Link from 'next/link'

export default function Panel() {
    let servers = [];
    let serverNames = [
        'server.website.com',
        'Load Balancer',
        'backup',
        'Minecraft Server',
        'mc.server.com',
        'ts.game.com',
        'teamspeak',
        'Wordpress',
        'Voice Server',
        'API',
        'example.org',
        'cluster1.example.org',
        'css.sucks'
    ]

    for (let i = 0; i < Math.random() * 4; i++) {
        servers.push({ name: serverNames[Math.floor(Math.random() * serverNames.length)] });
    }

    return (
        <div>
            <PanelHeader />
            <div className='panel-container'>
                <div className='panel-layout'>
                    <div className='four-cards'>
                        <div className='panel-card colored-card'>
                            <stat>{Math.floor(Math.random() * 3)}</stat>
                            <p>Unpaid Invoice(s)</p>
                        </div>
                        <div className='panel-card colored-card'>
                            <stat>{servers.length}</stat>
                            <p>Active Service(s)</p>
                        </div>
                        <div className='panel-card colored-card'>
                            <stat>{Math.floor(Math.random() * 900)}</stat>
                            <p>Logins</p>
                        </div>
                        <div className='panel-card colored-card'>
                            <stat>{Math.floor(Math.random() * 4) + 97}%</stat>
                            <p>Uptime</p>
                        </div>
                    </div>
                    <div className='panel-card' style={{ height: 'inherit' }}>
                        <h2 className='card-title'>Latest News</h2>
                        <h3>Scheduled Maintenance</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet fermentum lacus non rutrum. Curabitur auctor nisi ut vehicula volutpat.</p>
                    </div>
                </div>
                <div className='panel-card'>
                    <h2 className='card-title'>My Servers</h2>
                    <p>List of all your currently active servers</p>
                    <table className='pricing-table'>
                        <tr>
                            <th>Name</th>
                            <th className='md-hide'>Uptime</th>
                            <th>CPU</th>
                            <th className='sm-hide'>Memory</th>
                            <th className='md-hide'>Bandwidth</th>
                            <th></th>
                        </tr>
                        {
                            servers.map((server, i) => <tr key={i}>
                                <td>{server.name}</td>
                                <td className='md-hide'>{Math.floor(Math.random() * 9)}d {Math.floor(Math.random() * 23)}h</td>
                                <td>{Math.floor(Math.random() * 99)}%</td>
                                <td className='sm-hide'>{Math.floor(Math.random() * 69)}%</td>
                                {Math.random() > 0.5 ?
                                    <td className='md-hide'>{Math.floor(Math.random() * 20) / 10}/{Math.floor(Math.random() * 4)+1} TB</td> :
                                    <td className='md-hide'>∞</td>}
                                <td><Link href='/panel/manage'><a className='btn btn-primary'>Manage</a></Link></td>
                            </tr>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
}