import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '../components/index';
import UserList from '../components/user/list';

export const menuConfig = [
	{
		text: '用户管理',
		icon: 'bi-person-lines-fill',
		component: UserList,
		submenu: [
			{
				text: '用户列表',
				path: 'user/list',
				component: UserList,
				icon: 'bi-list-ul',
			},
		],
		path: 'user',
	},
	{
		text: '系统设置',
		icon: 'bi-gear',
		component: Index,
		submenu: [
			{
				text: '退出登录',
				path: 'logout',
				component: Index,
				icon: 'bi-box-arrow-in-right',
			},
		],
		path: 'logout',
	},
];
const menuRoutes = menuConfig.map((item) => {
	if (item.submenu instanceof Array) {
		item.children = item.submenu.map((subItem) => {
			return {
				name: subItem.path,
				component: subItem.component,
				path: '/' + subItem.path,
			};
		});
	}
	return {
		name: item.path,
		component: item.component,
		path: '/' + item.path,
		children: item.children,
	};
});
const routes = [
	{
		name: 'index',
		path: '/index',
		component: Index,
	},
].concat(menuRoutes);
const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
