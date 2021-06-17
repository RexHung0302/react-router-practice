import React from "react";
import { useHistory, Link } from "react-router-dom";

// React Router Config
import routesConfig from './router';
import { renderRoutes } from 'react-router-config';

// Style
import './style.css';
import Button from '@material-ui/core/Button';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const Lv3 = () => {
  const history = useHistory();

  return (
    <div>
      <div style={{ position: 'relative', marginBottom: '10px' }}>
        <ul className="nav">
          { routesConfig.map((route) => (
            <li className="nav__item">
              { !route.children || route.children.length <= 0 ?
                <Link to={ route.path } size="small" color="primary" className="textDecorationNone">{ route.title }</Link> :
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <label size="small" color="primary" className="textDecorationNone cursor-pointer" {...bindTrigger(popupState)}>{ route.title }</label>
                      <Menu {...bindMenu(popupState)}>
                        {
                          route.children.map((children_route) => (
                            <Link to={ children_route.path } size="small" color="primary" className="textDecorationNone">
                              <MenuItem onClick={popupState.close}>{ children_route.title }</MenuItem>
                            </Link>
                          ))
                        }
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              }
            </li>
          )) }
        </ul>
        <div className="box">
          { renderRoutes(routesConfig) }
        </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        style={{ display: 'block', margin: '0 auto' }}
        onClick={() => {
          history.push('/');
        }}
      >返回首頁</Button>
    </div>
  )
}


export default Lv3;