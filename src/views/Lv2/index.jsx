import React from "react";
import { useHistory, Link, Route } from "react-router-dom";

// Style
import './style.css';
import Button from '@material-ui/core/Button';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

// Components
import RichBoard from './rich-board';
import DTBoard from './dt-board';
import MainBoard from './main-board';
import CustomerServiceInformation from './customer-service-information';
import Feedback from './feedback';

// Router Content
const Index = () => {
  return <label>Index Page</label>
};

const TopUp = () => {
  return <label>Top Up Page</label>
};

const EventNews = () => {
  return <label>Event News Page</label>
};

const AwardNews = () => {
  return <label>Award News Page</label>
};

const GameIntroduction = () => {
  return <label>Game Introduction Page</label>
};

const VipIntroduction = () => {
  return <label>Vip Introduction Page</label>
};

const GiftIntroduction = () => {
  return <label>Gift Introduction Page</label>
};

const GiftItmes = () => {
  return <label>Gift Itmes Page</label>
};

const Passbook = () => {
  return <label>Passbook Page</label>
};

const Lv2 = () => {
  const history = useHistory();

  return (
    <div>
      <div style={{ position: 'relative', marginBottom: '10px' }}>
        <ul className="nav">
          <li className="nav__item">
            <Link to="/Lv2" size="small" color="primary" className="textDecorationNone">首頁</Link>
          </li>
          <li className="nav__item">
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <label size="small" color="primary" className="textDecorationNone cursor-pointer" {...bindTrigger(popupState)}>最新消息</label>
                  <Menu {...bindMenu(popupState)}>
                    <Link to="/Lv2/event-news" size="small" color="primary" className="textDecorationNone">
                      <MenuItem onClick={popupState.close}>活動消息</MenuItem>
                    </Link>
                    <Link to="/Lv2/award-news" size="small" color="primary" className="textDecorationNone">
                      <MenuItem onClick={popupState.close}>獎項公布</MenuItem>
                    </Link>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </li>
          <li className="nav__item">
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <label size="small" color="primary" className="textDecorationNone cursor-pointer" {...bindTrigger(popupState)}>新手引導</label>
                  <Menu {...bindMenu(popupState)}>
                    <Link to="/Lv2/game-introduction" size="small" color="primary" className="textDecorationNone">
                      <MenuItem onClick={popupState.close}>遊戲介紹</MenuItem>
                    </Link>
                    <Link to="/Lv2/vip-introduction" size="small" color="primary" className="textDecorationNone">
                      <MenuItem onClick={popupState.close}>VIP說明</MenuItem>
                    </Link>
                    <Link to="/Lv2/gift-introduction" size="small" color="primary" className="textDecorationNone">
                      <MenuItem onClick={popupState.close}>贈禮說明</MenuItem>
                    </Link>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </li>
          <li className="nav__item">
            <Link to="/Lv2/top-up" size="small" color="primary" className="textDecorationNone">儲值購點</Link>
          </li>
          <li className="nav__item">
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <label size="small" color="primary" className="textDecorationNone cursor-pointer" {...bindTrigger(popupState)}>會員專區</label>
                  <Menu {...bindMenu(popupState)}>
                    <Link to="/Lv2/gift-itmes" size="small" color="primary" className="textDecorationNone">
                      <MenuItem onClick={popupState.close}>贈禮項目</MenuItem>
                    </Link>
                    <Link to="/Lv2/passbook" size="small" color="primary" className="textDecorationNone">
                      <MenuItem onClick={popupState.close}>存摺細項</MenuItem>
                    </Link>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </li>
          <li className="nav__item">
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <label size="small" color="primary" className="textDecorationNone cursor-pointer" {...bindTrigger(popupState)}>活動排行</label>
                  <Menu {...bindMenu(popupState)}>
                    <Link to="/Lv2/rich-board" size="small" color="primary" className="textDecorationNone">
                      <MenuItem onClick={popupState.close}>富豪榜</MenuItem>
                    </Link>
                    <Link to="/Lv2/dt-board" size="small" color="primary" className="textDecorationNone">
                      <MenuItem onClick={popupState.close}>龍虎榜</MenuItem>
                    </Link>
                    <Link to="/Lv2/main-board" size="small" color="primary" className="textDecorationNone">
                      <MenuItem onClick={popupState.close}>主打榜</MenuItem>
                    </Link>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </li>
          <li className="nav__item">
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <label size="small" color="primary" className="textDecorationNone cursor-pointer" {...bindTrigger(popupState)}>客服中心</label>
                  <Menu {...bindMenu(popupState)}>
                    <Link to="/Lv2/customer-service-information" size="small" color="primary" className="textDecorationNone">
                      <MenuItem onClick={popupState.close}>客服資訊</MenuItem>
                    </Link>
                    <Link to="/Lv2/feedback" size="small" color="primary" className="textDecorationNone">
                      <MenuItem onClick={popupState.close}>意見回饋</MenuItem>
                    </Link>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </li>
        </ul>
        <div className="box">
          {/* 可用兩種方式引入, component 為第一種(可用 import 從外部引入, 或直接同檔案宣告再帶入) */}
          <Route exact path="/Lv2" component={Index} />
          <Route exact path="/Lv2/event-news" component={EventNews} />
          <Route exact path="/Lv2/award-news" component={AwardNews} />
          <Route exact path="/Lv2/game-introduction" component={GameIntroduction} />
          <Route exact path="/Lv2/vip-introduction" component={VipIntroduction} />
          <Route exact path="/Lv2/gift-introduction" component={GiftIntroduction} />
          <Route exact path="/Lv2/gift-itmes" component={GiftItmes} />
          <Route exact path="/Lv2/passbook" component={Passbook} />

          <Route exact path="/Lv2/rich-board">
            <RichBoard />
          </Route>
          <Route exact path="/Lv2/dt-board">
            <DTBoard />
          </Route>
          <Route exact path="/Lv2/main-board">
            <MainBoard />
          </Route>

          <Route exact path="/Lv2/customer-service-information">
            <CustomerServiceInformation />
          </Route>
          <Route exact path="/Lv2/feedback">
            <Feedback />
          </Route>

          <Route exact path="/Lv2/top-up" component={TopUp} />
          {/* <Route exact path="/Lv2/GameDesc" component={GameDesc} /> */}

          {/* 可用兩種方式引入, render 為第二種 */}
          <Route exact path="/Lv2/Member" render={()=> (
            <label>Member Page</label>
          )} />
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


export default Lv2;