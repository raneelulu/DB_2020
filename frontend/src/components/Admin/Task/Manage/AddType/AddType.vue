<template>
    <div>
        <b-form v-if="show">
            <div><strong>원본 데이터 타입 추가 생성</strong></div>
            <table class="table">
                <thead>
                    <tr>
                        <td><strong>속성 이름</strong></td>
                        <td><strong>속성 타입</strong></td>
                        <td><strong>스키마 매핑</strong></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in attri_info" :key="row.key">
                        <td><b-form-input v-model="row.name" placeholder="이름 입력"></b-form-input></td>
                        <td><b-form-select v-model="row.type" :options="options"></b-form-select></td>
                        <td><b-form-select v-model="row.schema" :options="schema_options"></b-form-select></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <b-button id="add" variant="primary" v-on:click="addRow">속성 추가</b-button>
                <b-button id="resetRow" variant="danger" v-on:click="resetRow">리셋</b-button>
                <b-button id="submit" variant="success" v-on:click="onSubmit">타입 생성</b-button>
            </div>
            <hr>
        </b-form>      
    </div>
</template>

<script>
export default {
    data() {
        return {
            attri_info: [
                {name: '', type: '', schema: '', key: 1},
            ],
            options: [
                {value: "text", text: "text"},
                {value: "discrete", text: "discrete"},
                {value: "integer", text: "integer"},
                {value: "big integer", text: "big integer"},
                {value: "float", text: "float"},
                {value: "date", text: "date"},
                {value: "time", text: "time"},
                {value: "datetime", text: "datetime"}
            ],
            schema_options : [],
            field_key: 2,
            show: true,
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            if(this.attri_info.length === 0) {
                alert("데이터 타입 정보를 입력하세요.")
                return
            }
            //alert(JSON.stringify(this.form))
            this.$http.post('/api/task/' + this.$route.params.taskName + '/addType', 
            {field_info: this.attri_info}, {"Content-Type": "application-json"})
                .then((res) => {
                    // post가 성공하면
                    if (res.data.success) {
                        alert('정상적으로 추가되었습니다.')
                        this.$route.push("/admin/task/manage/" + this.$route.params.taskName)
                    } else {
                        alert("Wrong data input")
                    }
                })
                .catch((err) => {
                    console.error(err)
                })
        },
        addRow(evt) {
            evt.preventDefault()
            this.attri_info.push({nanme: '', type: '', schema: '', key: this.field_key})
            this.field_key = this.field_key + 1
        },
        resetRow(evt) {
            evt.preventDefault()
            this.attri_info = [{name: '', type: '', schema: '', key: this.field_key}]
        }
    },
    created () {
        this.$http.get('/api/task/' + this.$route.params.taskName)
            .then((res) => {
                this.schema_options = res.data.task_schema
            })
            .catch((err) => {
                console.error(err)
            })
    }
}
</script>