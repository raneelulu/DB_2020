<template>
<!--2. 참여 중인 제출자들의 목록
        - 제출자 선택 시 참여 중인 테스크 확인 -->
    <div style="margin: 10px;">
        <div class="a">
            <div class="b">
                <div class="c bold">Name</div>
                |
                <div class="c">{{ task.name }}</div>
            </div>
            <div class="b" style="width: 30%;">
                <div class="c bold">Description</div>
                |
                <div class="c">{{ task.des }}</div>
            </div>
        </div>
        <hr>
        <div class="a">
            <div class="b">
                <div class="c bold">Number of Files</div>
                |
                <div class="c">{{ task.all_file_number }}</div>
            </div>
        </div>
        <hr>
        <div class="a">
            <div class="b">
                <div class="c bold">Number of Passed Tuples</div>
                |
                <div class="c">{{ task.pass_tuple_number }}</div>
            </div>
            <div class="b">
                <div class="c bold">Number of Tuples in data type level</div>
                |
                <div class="c">{{ task.data_type_level_tuple_number }}</div>
            </div>
        </div>
        <hr>
        <UserView :users="user_list"/>
    </div>
</template>

<script>
import UserView from '@/components/Admin/Task/Stat/UserView.vue';
export default {
    components: {
        UserView
    },
    data () {
        return {
            task: {},
            user_list: [],
        }
    },
    created () {
        this.$http.get('/api/task/' + this.$route.params.taskName)
            .then((res) => {
                this.task = res.data.task
                this.user_list = res.data.user_list
            })
            .catch((err) => {
                console.error(err)
            })
    }
}
</script>

<style scoped>
.a {
    background-color: #cccccc;
    border-radius: 3px;
    padding: 4px;
    margin: 4px, 0px;
    /* font-size: 2em; */
}
.b {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 15%;
    border-radius: 4px;
    padding: 4px;
    margin: 3px 3px;
}
.c {
    display: inline-block;
    height: 100%;
    padding: 0px 5px;
}
.bold {
    font-weight: bold;
}

table {
    /* border-collapse: collapse; */
    border-spacing: 0px;
    padding: 10px;
}
th {
    border: 1px solid black;
    border-bottom: 3px solid black;
    padding: 4px;
}
td {
    border: 1px solid black;
    padding: 4px;
}
table thead th:first-child {
    border-radius: 5px 0 0 0;
}
table thead th:last-child {
    border-radius: 0 5px 0 0;
}
table tbody tr:last-child td:first-child {
    border-radius: 0 0 0 5px;
}
table tbody tr:last-child td:last-child {
    border-radius: 0 0 5px 0;
}
</style>
