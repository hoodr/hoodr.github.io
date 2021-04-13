import React, { useState } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import CarouselList from "./carousel-list";
// import placeholder from './placeholder.png';
import placeholder from "../../assets/placeholder_image_2.png";
import "./carousel.scss";

const Carousel = (props) => {
  const { items } = props;
  const [state, setState] = useState({ current: 0, next: false });

  // console.log(items)
  // console.log(!items && !items.length)

  if (!items && !items.length) {
    return null;
  }

  // const [current, setCurrent] = useState(0);
  // const [next, setNext] = useState(true);

  const prev = () => {
    let index = state.current;
    let itemsLength = items.length - 1;
    index = index < 1 ? itemsLength : index - 1;
    setState({ current: index, next: false });
  };

  const next = () => {
    let index = state.current;
    let itemsLength = items.length - 1;
    index = index === itemsLength ? -1 : index + 1;
    setState({ current: index, next: true });
  };

  return (
    <div className="slides-container">
      <div className="carousel">
        <CSSTransitionGroup
          transitionName={{
            enter: next ? "enter-next" : "enter-prev",
            enterActive: "enter-active",
            leave: "leave",
            leaveActive: next ? "leave-active-next" : "leave-active-prev",
          }}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <div className="carousel_slide" key={state.current}>
            {/*<img src={items[state.current].fields.file.url} alt=""/>*/}
            <img src={placeholder} alt="" />
          </div>
        </CSSTransitionGroup>
        <button
          className="carousel_control carousel_control__prev"
          onClick={prev}
        >
          <span></span>
        </button>
        <button
          className="carousel_control carousel_control__next"
          onClick={next}
        >
          <span></span>
        </button>
        <div className="carousel_list">
          <CarouselList
            current={state.current}
            items={items}
            changeSilde={(current, index) => {
              let next = current < index;
              setState({ current: index, next: next });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
