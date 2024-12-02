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
    //유저(마케터) 정보 - 로그인 시
    children: [
      {
        uid: "user1",
        path: "/user1",
        name: "User 1",
        component: AccountList,
        layout: "/admin",
        role: "admin",
      },
      {
        uid: "user2",
        path: "/user2",
        name: "User 2",
        component: AccountList,
        layout: "/admin",
      },
      {
        uid: "user3",
        path: "/user3",
        name: "User 3",
        component: AccountList,
        layout: "/admin",
      },
    ],
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
