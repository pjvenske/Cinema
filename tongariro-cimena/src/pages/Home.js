import '../App.css'
import BookingDetail from '../components/BookingDetail';
import { useState } from 'react';

export default function Home() {
    /* this is the home page */
    
    const [bookingOpen, setBooking] = useState(false);

    /* this function toggles the booking detail component */
    const toggleBooking = (movie) => {
        setSelectedMovie(movie);
        setBooking(!bookingOpen);
    }



    const [selectedMovie, setSelectedMovie] = useState({})


    /* this is the data for the movies */
    let data = [
        {
            title: "The Godfather",
            director: "Francis Ford Coppola",
            runTime: 175,
            imgFile: "/assets/godfa.jpg",
            banner: "/assets/gfBanner.jpg"
        },
        {
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            runTime: 142,
            imgFile: "/assets/shaws.jpg",
            banner: "/assets/shawsBanner.jpg"
        },
        {
            title: "The Dark Knight",
            director: "Christopher Nolan",
            runTime: 152,
            imgFile: "/assets/knight.jpg",
            banner: "/assets/knightBanner.jpg"

        }
    ]
    return (
        <div>
            {bookingOpen && ( 
                <>
                    <div className="booking-close" onClick={() => toggleBooking({})}>Close</div>
                    <BookingDetail selectedMovie={selectedMovie} />
                </>
            )}

        <div className='movie-container'>
            {data.map((movie) => {
                return (
                    <div className='movie' onClick={() => toggleBooking(movie)}>
                        <div style={{ backgroundImage: `url(${movie.imgFile})` }}  className='movie-imgFile' />
                        <p className='movie-title'>{movie.title}</p>
                        <p className='movie-director'>{movie.director}</p>
                        <p className='movie-runTime'>{movie.runTime}</p>
                    </div>
                )
            })}
        </div>
        </div>
    );
}