import React from 'react';
// import './carousel.css';

const CarouselList = (props) => {
  const { current, items, changeSilde} = props;

  return (
    <ul>
    {items.map((img, index) => {
      let name = (index === current) ? 'active' : '';
      return (
        <li key={index}>
          <button
            className={name}
            onClick={() => changeSilde(current, index)}
          ></button>
        </li>
      );
    })}
    </ul>
  );
};

export default CarouselList;
