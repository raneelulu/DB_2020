<template>
    <div class="menu">
        <div :class="create_style">
        <!-- <div :class="create_style" @click="on_click_create"> -->
            테스크 생성
            <!--1. 이름, 설명, 최소업로드 주기, 데이터 테이블 이름, 데이터 테이블 스키마
                2. 원본 데이터 타입 -->
        </div>
        <div :class="manage_style">
        <!-- <div :class="manage_style" @click="on_click_manage"> -->
            테스크 관리
            <!--1. 참여 신청 명단 확인 (평가 점수를 기준으로 참여 여부 승인/거절)
                2. 새로운 원본 데이터 타입 추가
                3. 데이터에 대한 pass 기준 설정 -->
        </div>
        <div :class="showall_style" @click="on_click_showall">
            테스크 통계
            <!--1. 제출된 전체 파일 수/ pass된 데이터 튜플 수/ 원본 데이터 타입 수준
                2. 참여 중인 제출자들의 목록
                    (제출자 선택 시 참여 중인 테스크 확인) -->
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
        },
        showall_style() {
            return {
                list: true,
                current: this.current === "showall"
            }
        }
    },
    methods: {
        /*on_click_create() {
            if (this.current === "create") return
            this.$router.push('/administrator/task/create')
        },
        on_click_manage() {
            if (this.current === "manage") return
            this.$router.push('/administrator/task/manage')
        },*/
        on_click_showall() {
            if (this.current === "showall") return
            this.$router.push('/administrator/task/showall')
        }
    }
}
</script>

<style scoped>
div.menu {
    flex-grow: 1;
    /*width: 30%;*/
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
