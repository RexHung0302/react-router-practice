import { renderRoutes } from "react-router-config";

const LeaderBoard = ({route}) => (
  <div>  
    { renderRoutes(route.children) }
  </div>
);

export default LeaderBoard;