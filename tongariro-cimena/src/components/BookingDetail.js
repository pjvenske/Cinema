import '../App.css';

export default function BookingDetail() {
      return (
            <div>
                <div className="banner">
                    <img src="/assets/godfaBanner.jpg" alt="The Godfather" />
                    <h1>The Godfather</h1>
                </div>
                <div className="time-selection">
                    <h2>Date: </h2>
                    <h3>Times: </h3>
                    <button>2:30</button>
                    <button>4:30</button>
                    <button>5:00</button>
                    <button>6:30</button>
                    <button>8:00</button>
                </div>
                <div className="booking-container">
                    <div className="ticket-selection">
                        <ul>
                            <li>
                                <p>Adults</p>
                                <button>+</button>
                                <p>1</p>
                                <button>-</button>
                            </li>
                            <li>
                                <p>Children</p>
                                <button>+</button>
                                <p>0</p>
                                <button>-</button>
                            </li>
                            <li>
                                <p>Seniors</p>
                                <button>+</button>
                                <p>0</p>
                                <button>-</button>
                            </li>
                            <li>
                                <p>Students</p>
                                <button>+</button>
                                <p>0</p>
                                <button>-</button>
                            </li>
                        </ul>
                    </div>
                    <div className="seat-selection">
                        <div>
                            <ul>
                                <li>
                                    <img src="/assets/seatAva.png"></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                </li>
                                <li>
                                    <img src=""></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                </li>
                                <li>
                                    <img src=""></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                </li>
                                <li>
                                    <img src=""></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                </li>
                                <li>
                                    <img src=""></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }