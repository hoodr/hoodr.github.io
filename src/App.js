import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransitionGroup } from 'react-transition-group';
// import logo from './logo.svg';
import './App.scss';
import HomeScreen from './screens/Home';
import NotFound from './screens/NotFound';
import ProjectDetail from './screens/ProjectDetail';
import Modal from './components/ui/modal';
import FooterComponent  from './components/footer';

// import axios from './utils/axios'
import axios from 'axios';

function App() {
  const [work, setWork] = useState({ items: [], includes: { Asset: [] } });
  const [showModal, setShowModal] = useState(false);
  const email = 'drewhoo.8@gmail.com';

  useEffect(() => {
    let ignore = false;
    // let params = {
    //   'access_token': 'UbEdU1f0Ty1qmn96PLPmH0iKptfGsHdMVbtfRLGcuM8',
    //   'content_type': 'project'
    // }
    // let test_data = {
    //   items: [
    //     {
    //       sys: {
    //         id: "2bEBwvJXTzHvkON4Y3VYwe",
    //       },
    //       fields: {
    //         name: "Guilt Free Ghosting",
    //         images: [
    //           {
    //             sys: {
    //               "type": "Link",
    //               "linkType": "Asset",
    //               id: "1hpazdLvz5BBOJtM0Giikr"
    //             }
    //           },
    //           {
    //             sys: {
    //               "type": "Link",
    //               "linkType": "Asset",
    //               id: "1XIJMvu3Y6JFS76aVtQWAr"
    //             }
    //           }
    //         ],
    //         shortDescription: "Whoa",
    //         fullDescription: "gierhgirhegohwiorahgiwhgwrhgwrgrw",
    //         links: [
    //           "https://liamweir.com/guilt-free-ghosting"
    //         ],
    //         slug: "guilt-free-ghosting"
    //       }
    //     },
    //   ],
    //   includes: {
    //     Asset: [
    //       {
    //         sys: {
    //           id: "2bEBwvJXTzHvkON4Y3VYwe",
    //         },
    //         fields: {
    //           title: "Sample Sticker 1",
    //           file: {
    //             url: "//images.ctfassets.net/ds37lnllczh9/1XIJMvu3Y6JFS76aVtQWAr/cab28addc17bb1ad2b09ff2de9a46bda/IMG_6534.png",
    //             details: {
    //               "size": 168648,
    //               "image": {
    //                 "width": 600,
    //                 "height": 600
    //               }
    //             },
    //             fileName: "IMG_6534.png",
    //             contentType: "image/png"
    //           }
    //         }
    //       }
    //     ]
    //   }
    // };

    async function fetchData() {
      // const result = await axios('entries', { params });

      // Works but I need faster data lol
      const result = await axios('https://cdn.contentful.com/spaces/ds37lnllczh9/environments/master/entries?content_type=project&access_token=UbEdU1f0Ty1qmn96PLPmH0iKptfGsHdMVbtfRLGcuM8');
      // console.log(result.data);

      // if (!ignore) setWork(test_data);
      if (!ignore) setWork(result.data);
    }

    fetchData();
    return () => { ignore = true; }
  }, []);

  const show = () => {
    setShowModal(prev => !prev);
  };

  const props = {
    work: work,
    showModal: show
  }

  let noScroll = (showModal) ? 'lock-scroll' : '';
  let showFooter = (work.items.length > 0);

  // <HomeScreen {...work} />

  // TODO: get the transition working
  return (
    <div className={"App " + noScroll}>
      <CSSTransitionGroup
      transitionName="page"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
        <Router>
          <Switch>
            <Route
              exact path="/"
              render={() => (
                <HomeScreen {...props} />
              )}
            />
            {work.items.map(project => (
              <Route
                key={project.sys.id}
                path={"/" + project.fields.slug}
                render={() => (
                  <ProjectDetail {...{project: project, assets: work.includes.Asset}}/>
                )}
              />
            ))}
            <Route path={"/404"} render={() => (<NotFound />)}/>
            {/*<Route render={() => (<NotFound />)}/> */}
          </Switch>
        </Router>
      </CSSTransitionGroup>
      <button className="mdc-fab app-fab--absolute"
        aria-label="Email"
        onClick={e => show()}>
        <span className="mdc-fab__icon material-icons">email</span>
      </button>
      { !!showModal && <Modal {...{text: email, show: show}}/> }
      { showFooter && <FooterComponent {...{show: show}}/> }
    </div>
  );
}

// onclick={(e) => window.location.href='mailto:drewhoo.8@gmail.com?subject=Hey%20there'}>

export default App;
