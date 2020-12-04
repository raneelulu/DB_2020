<template>
    <div class="content">
        <div v-if ="!isEmpty" class="table">
            <TaskList :user_list="{id: 'ID', name: 'Task 이름', des: '테스크 설명', upload: '최소 업로드 주기', table_name: '테이블 이름', table_schema: '테이블 스키마', data_type: '원본 데이터 타입'}" rowType="tableHeader" />
            <div style="display: table-row">
                <div class="table-hr"></div>
                <div class="table-hr"></div>
                <div class="table-hr"></div>
                <div class="table-hr"></div>
                <div class="table-hr"></div>
                <div class="table-hr"></div>
                <div class="table-hr"></div>
            </div>
            <TaskList v-for="task in tasks" :key="task.id" :user_list="task" />
        </div>
        <div v-else>
            <h1 class="no-margin">아직 생성된 Task가 없습니다.</h1>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        this.$http.get('/api/admin')
        .then((res) => {
            const user_list = res.data.user_list;

        })
        .catch((err) => {
            console.error(err);
        });
    }
}
</script>

<style scoped>

</style>
