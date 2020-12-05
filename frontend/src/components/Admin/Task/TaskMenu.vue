<template>
    <div class="menu">
        <div :class="showall_style" @click="on_click_showall">
            테스크 통계
        </div>
        <div :class="create_style" @click="on_click_create">
            테스크 생성
        </div>
        <div :class="manage_style" @click="on_click_manage">
            테스크 관리
        </div>
    </div>
</template>

<script>
export default {
    props: {
        current: {
            type: String,
            required: true
        }
    },
    computed: {
        showall_style() {
            return {
                list: true,
                current: this.current === "showall"
            }
        },
        create_style() {
            return {
                list: true,
                current: this.current === "create"
            }
        },
        manage_style() {
            return {
                list: true,
                current: this.current === "manage"
            }
        }
    },
    methods: {
        on_click_showall() {
            if (this.current === "showall") return
            this.$router.push('/admin/task/showall')
        },
        on_click_create() {
            if (this.current === "create") return
            this.$router.push('/admin/task/create')
        },
        on_click_manage() {
            if (this.current === "manage") return
            this.$router.push('/admin/task/manage')
        }
    }
}
</script>

<style scoped>
div.menu {
    flex-grow: 1;
    /*width: 100%;*/
    background-color: #cccccc;
    padding: 5px 20px;
    margin: 10px;
}

div.list {
    margin: 10px 0px;
    padding: 4px 0px;
    background-color:  rgb(209, 242, 255);
}

div.list:hover:not(.current) {
    background-color: #dddddd;
    font-weight: bold;
}

div.list:active:not(.current) {
    background-color: #cccccc;
}

div.current {
    background-color: rgb(59, 82, 211);
    color: white;
    font-weight: bold;
}
</style>
