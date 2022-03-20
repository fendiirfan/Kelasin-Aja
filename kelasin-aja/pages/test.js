import Navbar from '../components/header/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Footer from '../components/footer/Footer'
import DashboardDaftarAkun from '../components/dashboard-admin/DashboardDaftarAkun'

function test(){
    return(
        <div className="bg-slate-200">
            <Navbar/>
                <div className='flex'>
                    <Sidebar/>
                    <DashboardDaftarAkun/>
                </div>
            <Footer/>
        </div>
    )
}

export default test;