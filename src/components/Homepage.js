import React from 'react';
import '../css/Homepage.css';
import BlurLinearIcon from '@mui/icons-material/BlurLinear';
import InsightsIcon from '@mui/icons-material/Insights';
import RecommendIcon from '@mui/icons-material/Recommend';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Homepage() {
    return (
        <div className="homepage">
            <section className="s1">
                <div className="s1content">
                    <p>Solution for your Website related problems.</p>
                    <h1>A company to take away your worries</h1>
                    <button className="btn">Free consultation</button>
                </div>
            </section>
            <section className="s2" id="services">
                <h4>Our Services</h4>
                <h1>From Idea to Execution</h1>
                <div className="s2d">
                    <div className="d1">
                        <BlurLinearIcon className="icon1"/>
                        <h3>Design New Way</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </div>
                    <div className="d2">
                        <InsightsIcon className="icon2"/>
                        <h3>Better your brand</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </div>
                    <div className="d3">
                        <RecommendIcon className="icon3"/>
                        <h3>Make a difference</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </div>
                </div>
            </section>
            <section className="s3" id="about">
                <div className="s3d1">
                    <img src="https://gensolarenergy.com/wp-content/uploads/2021/06/about-us-1.png" alt="" />
                </div>
                <div className="s3d2">
                    <h4>About Us</h4>
                    <h2>Stuff We Do</h2>
                    <p>We create, design and deploy your website for your business to take your business to next level on digital platforms.</p>
                    <p>We use latest technologies in our development work. We can design your site as you want. You can choose design from our catalogue or can give your own designs as per your requirement.</p>
                    <button className="btn">What we can do for you</button>
                </div>
            </section>
            <section className="s4" id="catalogue">
                <div className="s4d">
                    <div className="s4d1">
                        <h4>Catalogue</h4>
                        <h2>Your digital presence should be an unstoppable force</h2>
                        <h5>Choose design from our catalogue</h5>
                        <div className="s4d1d1">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6nQma3Cmar0Ptz-XvagoCcHVH6IjDx6AvQ&usqp=CAU" alt="" />
                            <h5>Title1</h5>
                            <p>description1</p>
                        </div>
                        <div className="s4d1d2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6nQma3Cmar0Ptz-XvagoCcHVH6IjDx6AvQ&usqp=CAU" alt="" />
                            <h5>Title2</h5>
                            <p>description2</p>
                        </div>
                    </div>
                    <div className="s4d2">
                    <div className="s4d2d1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6nQma3Cmar0Ptz-XvagoCcHVH6IjDx6AvQ&usqp=CAU" alt="" />
                        <h5>Title1</h5>
                        <p>description1</p>
                    </div>
                    <div className="s4d2d2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6nQma3Cmar0Ptz-XvagoCcHVH6IjDx6AvQ&usqp=CAU" alt="" />
                        <h5>Title2</h5>
                        <p>description2</p>
                    </div>
                </div>
                </div>
                <button className="btn">See More <ArrowRightAltIcon className="arrow"/></button>
            </section>
            <section className="s5">
                <div className="s5d">
                    <h1>Ready to Launch your next website?</h1>
                    <div className="s5d1">
                        <button className="btn"><MailOutlineIcon className="mail"/>Get in touch now!</button>
                        <p>Or, take a peek in our <a href="" style={{fontWeight:'bold'}}>design studio</a></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homepage;
