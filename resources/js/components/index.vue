<template>
	<div class="container">
		<wd-layout>
			<wd-layout-header>
				<span class="username">欢迎，admin</span>
			</wd-layout-header>
			<wd-layout has-sider="true">
				<wd-layout-sider>
					<wd-menu
						:menu-list="menuList"
						theme="dark"
						@click="menuClickHandler"
					/>
				</wd-layout-sider>
				<wd-layout-content>
					<router-view></router-view>
				</wd-layout-content>
			</wd-layout>
		</wd-layout>
	</div>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { menuConfig } from '../router/index';
import axios from '../utils/ajax';

export default defineComponent({
	setup() {
		const username = ref(window.username);
		const router = useRouter();
		const route = useRoute();
		let menuList = menuConfig;
		const pageTitle = ref('');
		const menuClickHandler = (item) => {
			if (item.path === 'logout') {
				axios.get('/loginOut').then(() => {
					location.href = '/login';
				});
			} else {
				router.push({
					path: '/' + item.path,
				});
				pageTitle.value = item.text;
			}
		};
		return { menuList, pageTitle, username, menuClickHandler };
	},
});
</script>
<style lang="scss">
.container {
	width: 100%;
	height: 100%;
}
.wd-layout {
	height: 100%;
}
.wd-layout .container {
	padding: 10px;
}
.username {
	float: right;
	color: #ffffff;
	font-size: 16px;
	font-weight: bold;
}
</style>
