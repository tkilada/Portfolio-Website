import React from 'react'


const CarouselBox = ({data,slide}) => {
  return (
    <div className='CarouselBox'>
        <h2 className='LoginTitle'>{data.Title}</h2>
        <p className='Description'>{data.slideData[slide].description}</p>
        <a href = {data.source} className='SourceCode' target='_blank'>View {data.sourceDescription}</a>
        <a className='Back' href="http://portfolio-6e7a5.web.app/Portfolio/">Back</a>
    </div>
  )
}

export default CarouselBox