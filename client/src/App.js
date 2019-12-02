import React, { useReducer, useEffect } from 'react';
import './App.css';
import { Responsive } from 'semantic-ui-react';
import DesktopMenu from './components/Menus/Desktop';
import Footer from './components/Footer/index';
import MobileMenu from './components/Menus/Mobile';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut } from './actions/authActions';

const App = ({ children, ...props }) => {
  const initialState = {
    isSidebarVisible: false,
    notifications: [],
    notificationCount: 0,
    firebaseToken: ''
  };
  const appReducer = (state, payload) => ({ ...state, ...payload });

  const dispatch = useDispatch();
  const [state, setState] = useReducer(appReducer, initialState);
  const userInfo = useSelector(state => state.auth);

  //console.log(userInfo, 'AUTH');
  //const userInfo = false;
  useEffect(() => {
    setToken();
  }, []);
  const showSideBar = () => {
    setState({ isSidebarVisible: true });
  };
  const hideSidebar = () => {
    setState({ isSidebarVisible: false });
  };

  const redirectHome = () => props.history.push('/');

  const setToken = () => {
    const token = localStorage.getItem('auth');
    //let { notifications, notificationCount } = this.state;
    if (!token) return;
    dispatch(logIn(JSON.parse(token)));
    // const url = `notifications/${userInfoToken.id}`;
    // get(url).then(notifications => {
    //   notifications = notifications.reverse().sort((a, b) => {
    //     if (!a.read) {
    //       if (b.read) return -1;
    //     }
    //     if (a.read) {
    //       if (b.read) return 0;
    //       else {
    //         return 1;
    //       }
    //     }
    //   });
    //  setState({
    //     notifications,
    //     notificationCount: notifications.filter(notif => !notif.read).length
    //   });
    // });
  };

  const logOutApp = () => {
    localStorage.removeItem('auth');
    // let { firebaseToken } = this.state;
    // if (this.props.firebaseToken) firebaseToken = this.props.firebaseToken;
    // const { userInfo } = this.props;
    // this.setState({ notifications: [], notificationCount: 0 });
    // if (firebaseToken !== null && firebaseToken) {
    //   const url = `subscribers/delete/${userInfo.id}/${firebaseToken}`;
    //   del(url, {});
    // }
    // //delete newState.userInfo;
    // //this.setState(newState);
    // this.setState({ firebaseToken: '' });
    dispatch(logOut());
  };

  const redirectProfile = () => {
    props.history.push(`${userInfo.role}/${userInfo.accountID}`);
  };

  const {
    isSidebarVisible,
    notificationCount,
    notifications,
    firebaseToken
  } = state;
  return (
    <div className="app-wrapper">
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <DesktopMenu
          notifications={notifications}
          notificationCount={notificationCount}
          redirectHome={redirectHome}
          isSidebarVisible={isSidebarVisible}
          userInfo={userInfo}
          redirectHome={redirectHome}
          logOut={logOutApp}
          redirectProfile={redirectProfile}
        ></DesktopMenu>
        <div className="app-container">{children}</div>
      </Responsive>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <MobileMenu
          showSideBar={showSideBar}
          notifications={notifications}
          notificationCount={notificationCount}
          redirectHome={redirectHome}
          isSidebarVisible={isSidebarVisible}
          userInfo={userInfo}
          hideSidebar={hideSidebar}
          logOut={logOutApp}
          redirectProfile={redirectProfile}
        ></MobileMenu>
        <div
          style={{ minHeight: '80vh' }}
          className="element app-container"
          onClick={hideSidebar}
        >
          {children}
        </div>
      </Responsive>
      {props.location.pathname !== '/' && <Footer />}
    </div>
  );
};

export default withRouter(App);
