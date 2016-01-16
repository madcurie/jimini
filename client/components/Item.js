import React from 'react';
import $ from 'jquery';
import { Col } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';

class Item extends React.Component {
  constructor(){
    super()
    this.handleRemove = this.handleRemove.bind(this);
    this.handleBought = this.handleBought.bind(this);
  }

  handleRemove(){
    let wishId = this.props.id;
    this.props.removeWish(wishId);
  }

  handleBought(){
    let wishId = this.props.id;
    console.log('wishId',wishId);
    let name = $('#name'+wishId).val();
    let message = $('#message'+wishId).val();
    console.log(name, message);

    this.props.markAsBought(wishId,name,message);
  }

  render(){
    let changeButton;
    let thumbnailInstance;
    let isPurchased = this.props.isPurchased.toString();
    let source = {
      Books: '../assets/books.png',
      Clothing: '../assets/clothing.png',
      Electronics: '../assets/electronics.png',
      Handmade: '../assets/handmade.png',
      Health: '../assets/health.png',
      Home: '../assets/home.png',
      Money: '../assets/money.png',
      Outdoor: '../assets/outdoor.png',
      Toys: '../assets/toys.png',
      VideosGames: '../assets/videosgames.png'
    };

    if (this.props.isLoggedIn) {
      thumbnailInstance = (
        <Col xs={6} md={4}>
          <Thumbnail>
            <h2>{this.props.itemname}</h2>
            <div>
            <img className='categoryImgProfile' src={source[this.props.category]} />
            </div>
            <p>{this.props.category}</p>
            <p>Bought: {isPurchased}</p>
            <p>Purchased by:{this.props.buyername}</p>
            <p>Message:{this.props.message}</p>
            <a href={this.props.url}>{this.props.url}</a>
            <button type='button' className='btn btn-info' onClick={this.handleRemove}>Remove Item</button>
          </Thumbnail>
        </Col>
      )
    } else {
      thumbnailInstance = (
        <Col xs={6} md={4}>
          <Thumbnail>
            <h2>{this.props.itemname}</h2>
            <div>
            <img className='categoryImgPublic' src={source[this.props.category]} />
            </div>
            <p>{this.props.category}</p>
            <p>{this.props.message}</p>
            <a href={this.props.url}>{this.props.url}</a>
            <div>
              <input type='text' placeholder='Name' id={'name'+this.props.id} />
              <input type='text' placeholder='Message' id={'message'+this.props.id} />
              <button type='button' className='btn btn-info' onClick={this.handleBought}>Purchase Item</button>
            </div>
          </Thumbnail>
        </Col>
      )
    }

    return (
      <div>
        {thumbnailInstance}
      </div>
    )
  }
}

export default Item;
