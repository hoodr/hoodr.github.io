import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { CSSTransitionGroup } from "react-transition-group";
// import logo from './logo.svg';
import "./App.scss";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import HomeScreen from "./screens/Home";
import NotFound from "./screens/NotFound";
// import ProjectDetail from "./screens/ProjectDetail"; // TODO: Finish tsx conversion
// import Modal from "./components/ui/modal"; // TODO: Fix fab
import FooterComponent from "./components/footer";
import { Work } from "./types/Work";
import { Box } from "./components/common/Layout";
import Theme from "./components/common/Theme";

const emptyWork: Work = {
  sys: {
    type: "Array",
  },
  total: 2,
  skip: 0,
  limit: 100,
  items: [],
  includes: {
    asset: [],
  },
};

const App = (): JSX.Element => {
  const [work, setWork] = useState<Work>(emptyWork);
  // const [showModal, setShowModal] = useState<boolean>(false); // TODO: Fix fab

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios(
        "https://cdn.contentful.com/spaces/ds37lnllczh9/environments/master/entries?content_type=project&access_token=UbEdU1f0Ty1qmn96PLPmH0iKptfGsHdMVbtfRLGcuM8",
      );

      if (!ignore) setWork(result.data);
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  // TODO: Fix fab
  // const show = () => {
  //   setShowModal((prev) => !prev);
  // };

  // onclick={(e) => window.location.href='mailto:drewhoo.8@gmail.com?subject=Hey%20there'}>

  // TODO: Fix fab
  // const noScroll = showModal ? "lock-scroll" : "";
  const noScroll = "";
  const showFooter = work.items.length > 0;

  return (
    <ThemeProvider theme={Theme}>
      <Box fontFamily="std" className={`App ${noScroll}`}>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <HomeScreen work={work} />} />
            {/* {work.items.map((project) => (
              <Route
                key={project.sys.id}
                path={`/${project.fields.slug}`}
                render={() => (
                  <ProjectDetail
                    {...{ project, assets: work.includes.Asset }}
                  />
                )}
              />
            ))} */}
            <Route path="/404" render={() => <NotFound />} />
          </Switch>
        </Router>
        {/* TODO: fix the fab icon, maybe? */}
        {/* <button
          className="mdc-fab app-fab--absolute"
          aria-label="Email"
          type="button"
          onClick={() => show()}
        >
          <span className="mdc-fab__icon material-icons">email</span>
        </button> */}
        {/* {!!showModal && <Modal {...{ text: "drewhoo.8@gmail.com", show }} />} */}
        {showFooter && <FooterComponent />}
      </Box>
    </ThemeProvider>
  );
};

export default App;
