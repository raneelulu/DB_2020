<template>
    <div class="menu">
        <div :class="showlist_style" @click="on_click_showlist">
            가입 회원 정보
        </div>
        <div :class="search_style" @click="on_click_search">
            회원 검색
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
        showlist_style() {
            return {
                list: true,
                current: this.current === "showlist"
            }
        },
        search_style() {
            return {
                list: true,
                current: this.current === "search"
            }
        }
    },
    methods: {
        on_click_showlist() {
            if (this.current === "showlist") return
            this.$router.push('/admin/member/showlist')
        },
        on_click_search() {
            if (this.current === "search") return
            this.$router.push('/admin/member/search')
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
