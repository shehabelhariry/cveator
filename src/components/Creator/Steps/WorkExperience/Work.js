/** @jsx jsx */

import { jsx } from "theme-ui";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import WorkExperience from "./WorkExperience";
import Listing from "../../Listing/Listing";

const Work = ({ items, type, title }) => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Listing title={title} items={items} type={type} />
      </Route>
      <Route
        path={`${path}/edit/:id`}
        render={({
          match: {
            params: { id },
          },
        }) => {
          return <WorkExperience entry={items.find((i) => i.id == id)} />;
        }}
      ></Route>
    </Switch>
  );
};

export default Work;
