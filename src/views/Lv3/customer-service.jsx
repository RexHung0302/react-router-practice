import { renderRoutes } from "react-router-config";

const CustomerService = ({route}) => (
  <div>  
    { renderRoutes(route.children) }
  </div>
);

export default CustomerService;