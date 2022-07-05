import {Link} from 'react-router-dom';
export default function Home(){
    return(
        <>
        <main>
            <h1>Welcome</h1>
            <p>to the world</p>
        </main>
    
    <nav>
        <Link to="/app">App</Link>
    </nav>
    </>
    )
}