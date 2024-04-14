export default function NavBar() {
    return (
        <div>
            <div className="header">
                <p>Tongariro Cinemas</p>
            </div>
            <div className="nav">
                <nav>
                    <ul>
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/store">Store</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}



