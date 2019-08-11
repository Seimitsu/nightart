import React from 'react';
import './HomePage.css';
// import code from '../../media/code.mov';
import { Button, Container } from 'semantic-ui-react';
import Segment1 from '../../components/Segment1';
import Segment2 from './../../components/Segment2';
import Segment3 from '../../components/Segment3';
import Segment4 from './../../components/Segment4';

const HomePage = () => {
    return (
        <div>
            <header className="v-header container">
                <div className="fullscreen-video-wrap">
                    {/* <video src={code} autoPlay="true" loop="true" muted></video> */}
                    {/*                       eslint-disable-next-line */}
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AxjWsvCtKrc?autoplay=1&mute=1&controls=0&disablekb=1&loop=1&playlist=AxjWsvCtKrc" frameborder="0" ></iframe>
                </div>
                <div className="header-overlay"></div>
                <div className="header-content text-md-center">
                    <h1>Night'Art+</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
                    <Button inverted basic size='massive'>Join us</Button>
                </div>
            </header>
            <Container>
                <Segment1 />
                <Segment2 />
                <Segment3 />
                

            </Container>
            <Segment4 />
        </div>
    );
};

export default HomePage;