import PageNavbar from './PageNavbar'
import Protfolio from "./Protfolio"
import Project from "./Project"
import Contract from './Contract'

export default function Mainpage() {
    return (<>

        <div className='bg-primary overflow-hidden' style={{ width: 1200, background: "blue" }}>
            <h1>This is Main</h1>

            <PageNavbar />
            <Protfolio />
            <Project />
            <Contract />
        </div>
    </>)
}