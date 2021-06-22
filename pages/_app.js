import '../public/style.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function rdpx({ Component, pageProps }) {
  return <><ToastContainer /><Component {...pageProps} /></>
}
