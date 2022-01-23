import React from 'react';
import Cards from './Card';
import '../css/MainContent.css';

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
      <section className="s1">
        <div className="p1">
          <h1>About Us</h1>
          <p>"Hey! We are here to solve your all the problems regarding your own website. 
            We are here to build, design and deploy your site within a very effective budget.
            You can select a template for your site from our suggestion or can give your own template, 
            we will do your work for you."
          </p>
        </div>
        <div className="p2">
          <img src="https://www.cnet.com/a/img/YZ5IkSO7Yl-6YNk4d-gIvD-V-9g=/1200x675/2020/06/10/06f2b84a-2241-4567-a2a5-611ebb1e2650/gettyimages-1129377183.jpg"/>
        </div>
      </section>
      <h1 className="h1">Choose your design from our catalogue!</h1>
      <section className="s2">
        {Data.map((data, index) => {
          return <Cards key={index} data={data} />;
        })}
      </section>
      <section className="s3">
        <div className="contact">
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
