import React, { useEffect, useState } from 'react';
import HomeComponent from '../components/home';
import WorkComponent  from '../components/work';
import LoadingIcon from '../components/ui/loadingIcon';

const Home = (props) => {
  const [styles, setStyles] = useState({ contentStyle: 'none', loadingStyle: 'block' });

  // if no props, show a loading screen
  useEffect(() => {
    if (props.work.items && props.work.items.length) {
      setStyles({ contentStyle: 'block', loadingStyle: 'none' });
    }
  }, [props]);

  return (
    <div className="home-screen-container">
      <div className="home-content" style={{display: styles.contentStyle}}>
        <HomeComponent />
        <WorkComponent {...props}/>
      </div>
      <div className="home-loading" style={{display: styles.loadingStyle, marginTop: '25%'}}>
        <LoadingIcon />
      </div>
    </div>
  );
};

export default Home;
