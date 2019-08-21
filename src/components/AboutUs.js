import React from 'react';
import '../styles/AboutUs.css';


const AboutUs = (props) => {

    return (
<div className="about-us-div">
<h1>About Us</h1>
<p> This website was created as a part of the learning process at SEI course.
     The website is for meme maker,
      the meme maker is an image maker that allows the user to add custom resizable text to images. 
      The developer team tried to develop this meme maker an easy to create, easy to consume, 
      relatable to your audience, shareable, familiar, funny and smart.
    
</p>
<br/>
<h1>Developer team </h1>
<ul>


<li>Sulaiman AlHabib: <a href="https://github.com/suldev8">suldev8</a></li>
<li>Munirah AlMadi: <a href="https://github.com/Imunirah">Imunirah</a></li>
<li>Munira AlShuhail: <a href="https://github.com/Muniraks">Muniraks</a></li>
</ul>

       </div>
    )
}

export default AboutUs;