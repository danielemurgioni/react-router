import { Outlet } from 'react-router-dom'

/*component*/
import Navbar from '../components/Navbar'

const DefaultLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default DefaultLayout