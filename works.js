import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/Home.png';
import Portfolio2 from '../../assets/BikeDetail.png';
import Portfolio3 from '../../assets/Onboarding 2.png';
import Portfolio4 from '../../assets/Home V3 2.png';
import Portfolio5 from '../../assets/2.png';
import Portfolio6 from '../../assets/Thumbnail.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc"> I find satisfaction in meticulous attention to detail, ensuring precision in every pixel of my work. Eager to contribute my skills and experience, I aim to assist businesses in reaching their objectives and establishing a robust online presence.</span><br></br>
            <div className="worksImgs">
                <img src={Portfolio1} alt="" className="worksImg" />
                <img src={Portfolio2} alt="" className="worksImg" />
                <img src={Portfolio3} alt="" className="worksImg" />
                <img src={Portfolio4} alt="" className="worksImg" />
                <img src={Portfolio5} alt="" className="worksImg" />
                <img src={Portfolio6} alt="" className="worksImg" />
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Works;