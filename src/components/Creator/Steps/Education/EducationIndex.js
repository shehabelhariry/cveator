/** @jsx jsx */

import { jsx } from "theme-ui";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Education from "./Education";
import Listing from "../../Listing/Listing";

const EducationIndex = ({ items, type, title }) => {
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
          return (
            <Education
              entry={items.find((i) => parseInt(i.id) === parseInt(id))}
            />
          );
        }}
      ></Route>
    </Switch>
  );
};

export default EducationIndex;
