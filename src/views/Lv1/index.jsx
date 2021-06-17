import { useHistory, Link, Route } from "react-router-dom";

// Style
import './style.css';
import Button from '@material-ui/core/Button';

// Router Content
const Index = () => {
  return <label>Index Page</label>
};

const News = () => {
  return <label>News Page</label>
};

const GameDesc = () => {
  return <label>Game Desc Page</label>
};

const Lv1 = () => {
  const history = useHistory();
  return (
    <div>
      <div style={{ position: 'relative', marginBottom: '10px' }}>
        <ul className="nav">
          <li className="nav__item">
            <Link to="/Lv1" size="small" color="primary" className="textDecorationNone">首頁</Link>
          </li>
          <li className="nav__item">
            <Link to="/Lv1/News" size="small" color="primary" className="textDecorationNone">最新消息</Link>
          </li>
          <li className="nav__item">
            <Link to="/Lv1/GameDesc" size="small" color="primary" className="textDecorationNone">遊戲說明</Link>
          </li>
          <li className="nav__item">
            <Link to="/Lv1/Member" size="small" color="primary" className="textDecorationNone">會員專區</Link>
          </li>
        </ul>
        <div className="box">
          {/* 可用兩種方式引入, component 為第一種(可用 import 從外部引入, 或直接同檔案宣告再帶入) */}
          <Route exact path="/Lv1" component={Index} />
          <Route exact path="/Lv1/News" component={News} />
          <Route exact path="/Lv1/GameDesc" component={GameDesc} />

          {/* 可用兩種方式引入, render 為第二種 */}
          <Route exact path="/Lv1/Member" render={()=> (
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


export default Lv1;