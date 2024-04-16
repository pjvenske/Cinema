import '../App.css'
import BookingDetail from '../components/BookingDetail';

export default function Home() {
    let data = [
        {
            title: "The Godfather",
            director: "Francis Ford Coppola",
            runTime: 175,
            imgFile: "/assets/godfa.jpg"
        },
        {
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            runTime: 142,
            imgFile: "/assets/shaws.jpg"
        },
        {
            title: "The Dark Knight",
            director: "Christopher Nolan",
            runTime: 152,
            imgFile: "/assets/knight.jpg"

        }
    ]
    return (
        <div>
            < BookingDetail />
        <div className='movie-container'>
            {data.map((movie) => {
                return (
                    <div className='movie'>
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