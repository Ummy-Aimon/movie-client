import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import { API_KEY } from "../App";
import { useForm } from "react-hook-form";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;

  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;
const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  const { register, handleSubmit, formState: { } } = useForm();
  const onSubmit = data => {

    const url= `https://fast-beyond-99229.herokuapp.com/Movie`
         fetch(url,{
             method: 'POST',
             headers: { 
                 'content-type':'application/json',
                 
          },
      
          body: JSON.stringify(data)
         })
         .then(res=>res.json())
         .then(result=>
          {
              console.log(result)
         })
  }
  

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <Container>
      {movieInfo ? (
        <>
          <CoverImage src={movieInfo?.Poster} alt={movieInfo?.Title} />
          <InfoColumn>
            <MovieName>
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </MovieName>
            <MovieInfo>
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </MovieInfo>
            <MovieInfo>
              Year: <span>{movieInfo?.Year}</span>
            </MovieInfo>
            <MovieInfo>
              Language: <span>{movieInfo?.Language}</span>
            </MovieInfo>
            <MovieInfo>
              Rated: <span>{movieInfo?.Rated}</span>
            </MovieInfo>
            <MovieInfo>
              Released: <span>{movieInfo?.Released}</span>
            </MovieInfo>
            <MovieInfo>
              Runtime: <span>{movieInfo?.Runtime}</span>
            </MovieInfo>
            <MovieInfo>
              Genre: <span>{movieInfo?.Genre}</span>
            </MovieInfo>
            <MovieInfo>
              Director: <span>{movieInfo?.Director}</span>
            </MovieInfo>
            <MovieInfo>
              Actors: <span>{movieInfo?.Actors}</span>
            </MovieInfo>
            <MovieInfo>
              Plot: <span>{movieInfo?.Plot}</span> 
            </MovieInfo>
            <MovieInfo>
              City: <span>{movieInfo?.Country}</span> 
            </MovieInfo>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3> Seat Booking Now</h3>
            <label for="exampleInputdate" class="form-label">Choose Date</label>
<input type="date" name="" id="" 
{...register("date")}
/>
<br></br> <br></br>
<label for="exampleInputdate" class="form-label">Choose movie</label>
<input type="text"  value={movieInfo?.Title} placeholder="choose movie" 
{...register("Movie")}
/>
<br></br><br></br>
<label for="exampleInputdate" class="form-label">Choose show time</label>
<input type="time" name="" id="" {...register("datetime")} />
<br></br> <br></br>
<label for="exampleInputdate" class="form-label">Ticket price</label>
<input type="text" disabled placeholder="300" 
{...register("price")}
/>
<br></br><br></br>
      <input type="submit"  value="Booking Now"/>
    </form>
          </InfoColumn>
          <Close onClick={() => props.onMovieSelect()}>X</Close>
        </>
      ) : (
        "Loading..."
      )}
    </Container>
  );
};
export default MovieInfoComponent;
