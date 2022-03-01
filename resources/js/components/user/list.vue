<template>
	<div class="container">
		<wd-form
			ref="userInfoForm"
			label-align="right"
			inline
			size="small"
			:model="searchParams"
		>
			<wd-form-item label="">
				<wd-input
					type="text"
					v-model="searchParams.id"
					placeholder="用户id"
				></wd-input>
			</wd-form-item>
			<wd-form-item label="">
				<wd-input
					type="text"
					v-model="searchParams.nickname"
					placeholder="用户名"
				></wd-input>
			</wd-form-item>
			<wd-form-item label="">
				<wd-input
					type="text"
					v-model="searchParams.phone"
					placeholder="手机号"
				></wd-input>
			</wd-form-item>
			<wd-form-item>
				<wd-button size="small" type="success" @click="getUserList"
					>搜索</wd-button
				>
			</wd-form-item>
		</wd-form>
		<wd-table
			ref="wdTable"
			:columns="tableColumns"
			:data-source="userList"
			:page-count="pageCount"
			:cell-wrap="false"
			:sticky="true"
			:loading="loading"
			text="数据加载中"
			empty-text="现在还没有数据噢~"
			@current-change="pageChangeHandler"
		></wd-table>
	</div>
</template>
<script setup>
// @ts-nocheck
import { defineComponent, onMounted, reactive, ref } from 'vue';
import { WdMessage } from '@inagora/wd-view';
import axios from '../../utils/ajax';

const searchParams = reactive({
	page: 1,
	count: 10,
	nickname: '',
	phone: '',
	id: '',
});
const tableColumns = [
	{
		title: '用户id',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: '昵称',
		dataIndex: 'nickname',
		key: 'nickname',
	},
	{
		title: '头像',
		dataIndex: 'avatar',
		key: 'avatar',
		render(_, row) {
			return `<img style="width: 60px; height: 60px;" src="${row.avatar}">`;
		},
	},
	{
		title: '手机号',
		dataIndex: 'phone',
		key: 'phone',
	},
];
const loading = ref(false);
const userList = ref([]);
const pageCount = ref(1);
const getUserList = () => {
	loading.value = true;
	axios
		.get('/User/getList', {
			params: searchParams,
		})
		.then((res) => {
			loading.value = false;
			userList.value = res.list;
			pageCount.value = res.total_page;
		});
};
const pageChangeHandler = (page) => {
	searchParams.page = page;
	getUserList();
};
onMounted(() => {
	getUserList();
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
</style>
