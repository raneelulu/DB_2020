<template>
    <div class="menu">
        <div :class="show_style">
            회원 상세 정보
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
        show_style() {
            return {
                list: true,
                current: this.current === "show"
            }
        },
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
