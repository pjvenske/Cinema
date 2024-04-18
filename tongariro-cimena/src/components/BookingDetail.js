
import React , {useState} from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function BookingDetail ({selectedMovie}){

   const form = useRef()

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_um4234v', 'template_m858oil', form.current, {
        publicKey: 'H7QyYOJ3voM6_zpXj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    // Generate an array of dates for the next week
    const dates = Array.from({length: 7}, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return date;
    });


    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [seniors, setSeniors] = useState(0);
    const [students, setStudents] = useState(0);

    const [sessionTime, setSessionTime] = useState(null);
    const changeSessionTime = (newTime) => {
        setSessionTime(newTime);
    };

    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seat, e) => {

        if (e.target.src.includes("/assets/seatTake.png")) {
            return;
        }

        // Check if the seat is already selected
        if (selectedSeats.includes(seat)) {
            // Remove the seat from the selectedSeats array
            setSelectedSeats(selectedSeats.filter(s => s !== seat));

            // Change the image source to indicate that the seat is available
            e.target.src = "/assets/seatAval.png";
        } else {
            // Check if the number of selected seats is less than the total number of tickets
            const totalTickets = adults + children + seniors + students;
            if (selectedSeats.length < totalTickets) {
                // Add the seat to the selectedSeats array
                setSelectedSeats([...selectedSeats, seat]);

            // Change the image source to indicate that the seat is selected
            e.target.src = "/assets/seatSel.png";
            }
        }
    };
    // const handleConfirmClick = () => {
    //     const seats = selectedSeats.join(', ');
    //     const date = selectedDate.toDateString();
    //     const time = sessionTime;
    //     alert(`You have booked seats ${seats} for the session on ${date} at ${time}.`);
    // };

      return (
            <div className="booking">
                <div className="banner">
                    <img src={selectedMovie.banner} />
                    <h1>{selectedMovie.title}</h1>
                </div>
                <div className="time-selection">
                    <h2>Date: </h2>
                    {dates.map((date, index) => (
                    <button 
                        key={index} 
                        className={selectedDate.toDateString() === date.toDateString() ? 'selected' : ''} 
                        onClick={() => handleDateClick(date)}
                    >
                        {date.toLocaleDateString(undefined, { weekday: 'short', month: 'long', day: 'numeric' })}
                    </button>
                ))}
                    <h3>Session Time: </h3>
                    <button className={sessionTime === '2:30' ? 'selected' : ''} onClick={() => changeSessionTime('2:30')}>2:30</button>
                    <button className={sessionTime === '4:30' ? 'selected' : ''} onClick={() => changeSessionTime('4:30')}>4:30</button>
                    <button className={sessionTime === '5:00' ? 'selected' : ''} onClick={() => changeSessionTime('5:00')}>5:00</button>
                    <button className={sessionTime === '6:30' ? 'selected' : ''} onClick={() => changeSessionTime('6:30')}>6:30</button>
                    <button className={sessionTime === '8:00' ? 'selected' : ''} onClick={() => changeSessionTime('8:00')}>8:00</button>
                </div>
                <div className="booking-container">
                    <div className="ticket-selection">
                        <ul>
                            <li>
                                <p>Adults</p>
                                <button onClick={() => adults < 10 && setAdults(adults +1)}>+</button>
                                <p>{adults}</p>
                                <button onClick={() => adults > 0 && setAdults(adults - 1)}>-</button>
                            </li>
                            <li>
                                <p>Children</p>
                                <button onClick={() => children < 10 && setChildren(children + 1)}>+</button>
                                <p>{children}</p>
                                <button onClick={() => children > 0 && setChildren(children - 1)}>-</button>
                            </li>
                            <li>
                                <p>Seniors</p>
                                <button onClick={() => seniors < 10 && setSeniors(seniors + 1)}>+</button>
                                <p>{seniors}</p>
                                <button onClick={() => seniors > 0 && setSeniors(seniors - 1)}>-</button>
                            </li>
                            <li>
                                <p>Students</p>
                                <button onClick={() => students < 10 && setStudents(students + 1)}>+</button>
                                <p>{students}</p>
                                <button onClick={() => students > 0 && setStudents(students - 1)}>-</button>
                            </li>
                        </ul>
                    </div>
                    <div className="seat-selection">
                        <div>
                            <ul>
                                <li>
                                    <img src="/assets/seatAval.png" data-seat="A1" onClick={(e) => handleSeatClick('A1',e)}></img>
                                    <img src="/assets/seatAval.png" data-seat="A2" onClick={(e) => handleSeatClick('A2',e)}></img>
                                    <img src="/assets/seatTake.png" data-seat="A3" onClick={(e) => handleSeatClick('A3',e)}></img>
                                    <img src="/assets/seatAval.png" data-seat="A4" onClick={(e) => handleSeatClick('A4',e)}></img>
                                    <img src="/assets/seatAval.png" data-seat="A5" onClick={(e) => handleSeatClick('A5',e)}></img>
                                </li>
                                <li>
                                    <img src="/assets/seatAval.png" data-seat="B1" onClick={(e) => handleSeatClick('B1',e)}></img>
                                    <img src="/assets/seatTake.png" data-seat="B2" onClick={(e) => handleSeatClick('B2',e)}></img>
                                    <img src="/assets/seatTake.png" data-seat="B3" onClick={(e) => handleSeatClick('B3',e)}></img>
                                    <img src="/assets/seatTake.png" data-seat="B4" onClick={(e) => handleSeatClick('B4',e)}></img>
                                    <img src="/assets/seatAval.png" data-seat="B5" onClick={(e) => handleSeatClick('B5',e)}></img>
                                </li>
                                <li>
                                    <img src="/assets/seatAval.png" data-seat="B1" onClick={(e) => handleSeatClick('C1',e)}></img>
                                    <img src="/assets/seatAval.png" data-seat="B1" onClick={(e) => handleSeatClick('C2',e)}></img>
                                    <img src="/assets/seatAval.png" data-seat="B1" onClick={(e) => handleSeatClick('C3',e)}></img>
                                    <img src="/assets/seatAval.png" data-seat="B1" onClick={(e) => handleSeatClick('C4',e)}></img>
                                    <img src="/assets/seatTake.png" data-seat="B1" onClick={(e) => handleSeatClick('C5',e)}></img>
                                </li>
                                <li>
                                    <img src="/assets/seatAval.png" data-seat="B1" onClick={(e) => handleSeatClick('D1',e)}></img>
                                    <img src="/assets/seatAval.png" data-seat="B1" onClick={(e) => handleSeatClick('D2',e)}></img>
                                    <img src="/assets/seatAval.png" data-seat="B1" onClick={(e) => handleSeatClick('D3',e)}></img>
                                    <img src="/assets/seatTake.png" data-seat="B1" onClick={(e) => handleSeatClick('D4',e)}></img>
                                    <img src="/assets/seatTake.png" data-seat="B1" onClick={(e) => handleSeatClick('D5',e)}></img>
                                </li>
                                <li>
                                    <img src="/assets/seatTake.png" data-seat="B1" onClick={(e) => handleSeatClick('E1',e)}></img>
                                    <img src="/assets/seatTake.png" data-seat="B1" onClick={(e) => handleSeatClick('E2',e)}></img>
                                    <img src="/assets/seatAval.png" data-seat="B1" onClick={(e) => handleSeatClick('E3',e)}></img>
                                    <img src="/assets/seatAval.png" data-seat="B1" onClick={(e) => handleSeatClick('E4',e)}></img>
                                    <img src="/assets/seatAval.png" data-seat="B1" onClick={(e) => handleSeatClick('E5',e)}></img>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="finalise" ref={form} onSubmit={sendEmail}>
                    <div className="booking-summary">
                        <h2>Booking Summary</h2>
                        <ul>
                            <li>Adults: {adults}</li>
                            <li>Children: {children}</li>
                            <li>Seniors: {seniors}</li>
                            <li>Students: {students}</li>
                            <li>Total Price: ${adults*20 + children*10 + seniors*10 + students*15}</li>
                        </ul>
                        <h2>Selected Seats:</h2>
                        <ul className="seats-display">
                            {selectedSeats.map((seat, index) => (
                                <li key={index}>{seat}</li>
                            ))}
                        </ul>
                        <h2>Session Time: </h2>
                        <p>{selectedDate.toDateString()} at {sessionTime}</p>
                    </div>
                    <div className="payment">
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
                                    <label for="card">Card Number:</label>
                                    <input type="text" id="card" name="card"></input>
                                </li>
                                <li>
                                    <label for="expiry">Expiry Date:</label>
                                    <input type="text" id="expiry" name="expiry"></input>
                                </li>
                                <li>
                                    <label for="cvv">CVV:</label>
                                    <input type="text" id="cvv" name="cvv"></input>
                                </li>
                            </ul>
                        </form>
                        <button onClick={sendEmail}>Confirm Booking</button>
                    </div>
                </div>
            </div>
        )
    }
