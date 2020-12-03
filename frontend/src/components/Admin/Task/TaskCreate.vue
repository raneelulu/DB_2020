<template>
    <div class="wrapper">
        <Menu current="create"/>
        <TaskInfo :tasks="task_list"/>
    </div>
</template>

<script>
import Menu from '@/components/Admin/Task/TaskMenu.vue';
import TaskInfo from '@/components/Admin/Task/TaskInfo.vue';
export default {
    components: {
        Menu,
        TaskInfo
    },
    data() {
        return {
            task_list: []
        }
    },
    created () {
        this.$http.post('/api/task', params)
            .then((res) => {
                this.task_list = res.data.task_list
            })
            .catch((err) => {
                console.error(err)
            })
    }
}
</script>

<style scoped>
div.wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
</style>