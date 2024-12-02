import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Notifications from "views/Notifications.js";
import AccountList from "views/AccountList";
import { Children } from "react";

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
    name: "사용자 관리",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/sheet",
    name: "시트 관리",
    icon: "nc-icon nc-notes",
    component: "AccountList",
    layout: "/admin",
    items: [
      {
        path: "/1",
        name: "매체 수수료",
        layout: "/admin/sheet",
        component: "AccountList",
      },
      {
        path: "/2",
        name: "계정 리스트",
        layout: "/admin/sheet",
      },
      {
        path: "/3",
        name: "충전/세발/지출",
        layout: "/admin/sheet",
      },
      {
        path: "/4",
        name: "광고수수료 정산서",
        layout: "/admin/sheet",
      },
    ],
  },
  // {
  //   path: "/notifications",
  //   name: "알림",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
