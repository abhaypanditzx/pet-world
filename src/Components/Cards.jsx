import React, { Component } from 'react'
import Card from './Card'
import data from  "../Data.json"
export default class Cards extends Component {
constructor(props) {
  super(props)
  this.state = {
    data: this.data,
  }
}
  render() {
    return (
      <div className='lg:flex-row mobile  xl:space-x-5 max-[736px]:space-y-5 max-2xl:space-y-0 xl:space-y-0 lg:space-y-0   lg:space-x-5  card-con sm:space-x-0 md:flex-row   md:space-y-0  flex  '>
{
  data.map((element) =>{
    return <div className='border border-white-500  rounded-md '  key={element.name}> <Card img = {element.img} name={element.name}/></div>
    })
    }
      </div>
    )
  }
}
