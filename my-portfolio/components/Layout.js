//import Head from 'next/head'
import Header from './Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
}

const Layout = (props) => (
    <div>

        <div style={layoutStyle}>
            <Header />
            {props.children}
        </div>
    </div>
)

export default Layout;