import React, { Component } from "react";
 
export default class extends Component {
  render() {
    let { name, img } = this.props;
    return (
      <div className="h-60  border  flex flex-col items-center shadow-xl card rounded-md overflow-hidden lg:w-40 md:w-36 2xl:w-60">
        <div className={`  w-full     overflow-hidden   `}>
          <img src={img} className=' h-40  w-full ' alt='pet to adopt'/>
        </div>
        <div className="text-xl    text-purple-500  h-auto   capitalize w-full flex justify-center">{name}</div>
      </div>
    );
  }
} 
 