import React, { Component } from 'react';
import {Card} from 'antd';
import '../css/Card.css';

class Cards extends Component{
    
    render(){
        const { Meta } = Card;
        return (
            <div className="card">
                <Card
                    hoverable
                    style={{ width: "300px", height:"300px"}}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                >
                    <Meta title="Europe Street beat" description="" style={{margin:"16px"}} />
                </Card>
            </div>
        )
    }
}
export default Cards;