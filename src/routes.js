import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Notifications from "views/Notifications.js";
import AccountList from "views/AccountList";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "메인",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "사용자 정보",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    //계정 리스트
    path: "/list",
    name: "계정 리스트",
    icon: "nc-icon nc-notes",
    component: AccountList,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "알림",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
