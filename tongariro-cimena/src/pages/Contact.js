import '../App.css';

export default function Contact() {

    /* this const makes the button send an alert that the form is submited */    
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const message = e.target.elements.message.value;

        alert(`Form Submited\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        
        e.target.reset();
    }


    return (
        <div className="contact-page">
            <h1>Contact Us:</h1>
            <div className="contact">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <ul>
                            <li>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name"></input>
                            </li>
                            <li>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email"></input>
                            </li>
                            <li>
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message"></textarea>
                            </li>
                        </ul>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="info">
                    <ul>
                        <li>Phone: 0800 000 000</li>
                        <li>Email: cinema@tongariro.com</li>
                        <li>Address: 123 Main St, Tongariro</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}