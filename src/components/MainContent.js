import React from 'react';
import Cards from './Card';
import '../css/MainContent.css';
import Carousel from 'react-bootstrap/Carousel';

const Data = [
  {
    title: "mytitle1",
    desc: "mydesc1",
    imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "mytitle2",
    desc: "mydesc2",
    imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "mytitle3",
    desc: "mydesc3",
    imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "mytitle4",
    desc: "mydesc4",
    imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "mytitle5",
    desc: "mydesc5",
    imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "mytitle6",
    desc: "mydesc6",
    imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "mytitle7",
    desc: "mydesc7",
    imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "mytitle8",
    desc: "mydesc8",
    imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
];

function MainContent() {
  return (
    <div className="maincontent">
      <Carousel interval={"3000"} style={{border:"wavy"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://reontechnologiesuaetech.files.wordpress.com/2019/12/1_wk7b5b7bqkkkpezdlsegtq.jpeg?w=1200"
            alt="First slide"
            style={{ height: 600 }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn1.droom.in/images/news_images/2021-01-14/29a6f986b807cbbf5fa7a5d463124b33.jpg"
            alt="Second slide"
            style={{ height: 600 }}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/1947431.jpg"
            alt="Third slide"
            style={{ height: 600 }}
          />
        </Carousel.Item>
      </Carousel>
      <section className="s1">
        <div className="p1">
          <h1>About Us</h1>
          <p>"Hey! We are here to solve your all the problems regarding your website.
            We are here to build, design and deploy your own site within a very effective budget.
            You can select a template for your site from our suggestion or can give your own templates,
            we will do your work for you."
          </p>
        </div>
      </section>
      <section className="s2" id="offerings">
        <h1>Our Offereings</h1>
        <div className="offering">
          <div className="element">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zf9UqKeCwZD0YsiDdgw86o_QdKDSJ6hQbQ&usqp=CAU" alt=""/>
            <span>Frontend Designing</span>
          </div>
          <div className="element">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJG5-g4sf3-O7xSzSJdnpOsHpJu3znVK3zGA&usqp=CAU"/>
            <span>Backend Designing</span>
          </div>
          <div className="element">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJT3VSez20rWVUKknkh-whRNrnn1YgDktMDQ&usqp=CAU"/>
            <span>Database Designing</span>
          </div>
          <div className="element">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDyMeKROjjVIEmgDITb1M9cR1QJOAFdPCGRfFUUklXqK6rzRR8ytOk-H6vdET2IUjM8ck&usqp=CAU" />
            <span>Complete Website</span>
          </div>
        </div>
      </section>
      <section className="s3">
        <h1>Languages & Technologies We Use!</h1>
        <div className="lt">
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>JavaScript</h3>
          <h3>MySQL</h3>
          <h3>PHP</h3>
          <h3>ReactJs</h3>
          <h3>NodeJs</h3>
          <h3>MERN stack</h3>
        </div>
      </section>
      <section className="s4" id="catalogue">
        <div className="d1">
          <h1 className="h1">Choose your design from our catalogue!</h1>
        </div>
        <div className="d2">
          {Data.map((data, index) => {
            return <Cards key={index} data={data} />;
          })}
        </div>
      </section>
      <section className="s5">
        <div className="contact" id="contact">
          <h3>Get In Touch With Us!</h3>
          <form>
            <div className="form">
              <div>
                <label>Name</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div>
                <label>Email Address</label>
                <input type="email" placeholder="Enter Your Email Address" />
              </div>
              <div>
                <label>Phone number</label>
                <input type="phone" placeholder="Enter Your Mobile Number" />
              </div>
              <div>
                <button className="btn">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default MainContent;
