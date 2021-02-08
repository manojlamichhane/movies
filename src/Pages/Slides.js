import React, { useState,useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import {BASE_URL,IMAGE_BASE_URL,API_KEY} from '../Config'
import axios from 'axios'

function Slides(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [movies,setMovies] = useState([]);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === movies.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? movies.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  useEffect(()=>{
    getTrendingMovies()
    },[])

    const getTrendingMovies = async () => {
    const result= await axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
    setMovies(result.data.results)
    }

  const slides = movies.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img style={{width:"100%",margin:"auto"}} src={`${IMAGE_BASE_URL}/${item.backdrop_path}`} alt={item.title} />
        <CarouselCaption captionText={item.overview} captionHeader={item.title} />
      </CarouselItem>
    );
  });
    return (
    <div style={{width:"90%",margin:"auto"}}>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={movies} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>        
    </div>
    );
}

export default Slides;