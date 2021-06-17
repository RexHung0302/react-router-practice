import { renderRoutes } from "react-router-config";

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

const News = ({ route }) => (
  <div>
    { renderRoutes(route.children) }
  </div>
);

const EventNews = () => {
  return <label>Event News Page</label>
};

const AwardNews = () => {
  return <label>Award News Page</label>
};

const RookieGuide = ({ route }) => (
  <div>
    { renderRoutes(route.children) }
  </div>
);

const GameIntroduction = () => {
  return <label>Game Introduction Page</label>
};

const VipIntroduction = () => {
  return <label>Vip Introduction Page</label>
};

const GiftIntroduction = () => {
  return <label>Gift Introduction Page</label>
};

const TopUp = () => {
  return <label>Top Up Page</label>
};

const GiftItmes = () => {
  return <label>Gift Itmes Page</label>
};

const Passbook = () => {
  return <label>Passbook Page</label>
};

// Routes List
const Routes = [
  {
    id: 0,
    title: '首頁',
    path: '/Lv3',
    exact: true,
    component: Index
  },
  {
    id: 1,
    title: '最新消息',
    exact: true,
    component: News,
    children: [
      {
        id: 0,
        title: '活動消息',
        path: '/Lv3/event-news',
        exact: true,
        component: EventNews
      },
      {
        id: 1,
        title: '獎項公布',
        path: '/Lv3/award-news',
        exact: true,
        component: AwardNews
      }
    ]
  },
  {
    id: 2,
    title: '新手引導',
    exact: true,
    component: RookieGuide,
    children: [
      {
        id: 0,
        title: '遊戲介紹',
        path: '/Lv3/game-introduction',
        exact: true,
        component: GameIntroduction
      },
      {
        id: 1,
        title: 'VIP說明',
        path: '/Lv3/vip-introduction',
        exact: true,
        component: VipIntroduction
      },
      {
        id: 2,
        title: '贈禮說明',
        path: '/Lv3/gift-introduction',
        exact: true,
        component: GiftIntroduction
      }
    ]
  },
  {
    id: 3,
    title: '儲值購點',
    path: '/Lv3/top-up',
    exact: true,
    component: TopUp
  },
  {
    id: 4,
    title: '會員專區',
    exact: true,
    children: [
      {
        id: 0,
        title: '贈禮項目',
        path: '/Lv3/gift-itmes',
        exact: true,
        component: GiftItmes
      },
      {
        id: 1,
        title: '存摺細項',
        path: '/Lv3/passbook',
        exact: true,
        component: Passbook
      }
    ]
  },
  {
    id: 5,
    title: '活動排行',
    exact: true,
    children: [
      {
        id: 0,
        title: '富豪榜',
        path: '/Lv3/rich-board',
        exact: true,
        component: RichBoard
      },
      {
        id: 1,
        title: '龍虎榜',
        path: '/Lv3/dt-board',
        exact: true,
        component: DTBoard
      },
      {
        id: 2,
        title: '主打榜',
        path: '/Lv3/main-board',
        exact: true,
        component: MainBoard
      }
    ]
  },
  {
    id: 6,
    title: '客服中心',
    exact: true,
    children: [
      {
        id: 0,
        title: '客服資訊',
        path: '/Lv3/customer-service-information',
        exact: true,
        component: CustomerServiceInformation
      },
      {
        id: 1,
        title: '意見回饋',
        path: '/Lv3/feedback',
        exact: true,
        component: Feedback
      }
    ]
  },
];

export default Routes;