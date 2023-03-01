import React, { Component } from "react";
import Slider from "react-slick";
import './style.css'


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      
      
    };
    return (
      <div  className='slick-slider-component p-10'> 
        <h2> Multiple items </h2>
        <Slider {...settings}className='bg-green-700 w-1/2 h-48 p-10' >
          <div className='bg-blue-700 h-48'>
            <h3>1</h3>
            
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>

           
          </div>
          <div className='bg-blue-700 h-48'>
            <h3>2</h3>
            
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>

            
          </div>
          <div className='bg-blue-700 h-48'>
            <h3>3</h3>
            
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>

            
          </div>
          <div className='bg-blue-700 h-48'>
            <h3>4</h3>
            
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>

           
          </div>
          <div className='bg-blue-700 h-48'>
            <h3>5</h3>
           
          </div>
          <div className='bg-blue-700 h-48'>
            <h3>6</h3>
            
          </div>
          <div className='bg-blue-700 h-48'>
            <h3>7</h3>
           
          </div>
          <div className='bg-blue-700 h-48'>
            <h3>8</h3>
            
          </div>
          <div className='bg-blue-700 h-48'>
            <h3>9</h3>

          </div>
        </Slider>
        
      </div>
    );
  }
}