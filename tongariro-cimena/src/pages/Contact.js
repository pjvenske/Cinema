import '../App.css';

export default function Contact() {
    return (
        <div>
            <div className="form">
                <form>
                    <ul>
                        <li>
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name"></input>
                        </li>
                        <li>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email"></input>
                        </li>
                        <li>
                            <label for="message">Message:</label>
                            <textarea id="message" name="message"></textarea>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}