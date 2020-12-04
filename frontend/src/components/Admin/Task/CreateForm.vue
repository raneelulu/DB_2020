<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="테스크 이름:" label-for="input-1">
                <b-form-input
                    id="input-1"
                    v-model="form.name"
                    required
                    placeholder="테스크 이름을 입력하세요."
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="테스크 설명:" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.des"
                    required
                    placeholder="테스크에 대한 간략한 설명을 써주세요."
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="최소 업로드 주기:" label-for="input-3">
                <b-form-input
                    id="input-3"
                    v-model="form.min_submit_period"
                    required
                    placeholder="테스크에 제출할 파일의 최소 업로드 주기를 입력하세요."
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="제출 파일 PASS 기준:" label-for="input-4">
                <b-form-input
                    id="input-4"
                    v-model="form.standard"
                    required
                    placeholder="제출 파일이 PASS 되는 기준 점수를 입력하세요."
                ></b-form-input>
            </b-form-group>

            <label for="example-datepicker1">데이터 수집 시작 날짜</label>
            <b-form-datepicker id="example-datepicker" v-model="form.start" class="mb-2"></b-form-datepicker>

            <label for="example-datepicker2">데이터 수집 종료 날짜</label>
            <b-form-datepicker id="example-datepicker2" v-model="form.end" class="mb-2"></b-form-datepicker>

            <hr>
            <b-form-checkbox
                id="checkbox-1"
                v-model="use_sql"
                name="checkbox-1"
                value=true
                unchecked-value=false
                >
                데이터 테이블 스키마 정의 SQL 사용 여부
            </b-form-checkbox>

            <hr>
            <b-form-group id="input-group-5" label="데이터 테이블 스키마:" label-for="input-5">
                <b-form-input
                    id="input-5"
                    v-model="tableSchema"
                    required
                    placeholder="데이터 테이블의 스키마를 설정해주세요."
                ></b-form-input>
            </b-form-group>
            <hr>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>      
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    des: '',
                    start: '',
                    end: '',
                    min_submit_period: '',
                    standard: ''
                },
                show: true,
                use_sql: false,
                taskSchema: ''
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                //alert(JSON.stringify(this.form))
                if (!use_sql) {
                    this.taskSchema = '.'
                }
                this.$http.post('/api/task/create', 
                {name: this.form.name, des: this.form.des, start_period: this.form.start, end_period: this.form.end,
                min_submit_period: this.form.min_submit_period, standard_of_pass: this.form.standard,
                use_sql: this.use_sql, task_schema: this.taskSchema}, {"Content-Type": "application-json"})
                    .then((res) => {
                        // post가 성공하면
                        if (res.data.success) {
                            this.$route.push("/admin/task")
                        } else {
                            alert("Wrong data input")
                        }
                    })
                    .catch((err) => {
                        console.error(err)
                    })
            },
            onReset(evt) {
                evt.preventDefault()
                    // Reset our form values
                    this.form.name = ''
                    this.form.des = ''
                    this.form.upload = ''
                    this.form.table_name = ''
                    this.form.table_schema = ''
                    this.form.data_type = ''
                    // Trick to reset/clear native browser form validation state
                    this.show = false
                    this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>