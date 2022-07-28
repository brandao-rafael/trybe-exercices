import React, { Component } from "react";

export default class UserProfile extends Component { 
  render() {
    const { name, email, src, alt, age } = this.props.dataReturn
    return (
      <div>
        <img src={src} alt={alt}></img>
        <p>{name}</p>
        <p>{email}</p>
        <p>{age}</p>
      </div>
    )
  }
  
  
}