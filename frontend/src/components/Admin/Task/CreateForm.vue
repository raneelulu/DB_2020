<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <b-form-group id="input-group-1" label="테스크 이름:" label-for="input-1">
                <b-form-input
                    id="input-1"
                    v-model="form.name"
                    required
                    placeholder="Enter task name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="테스크에 대한 간략한 설명:" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.des"
                    required
                    placeholder="Enter task description"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="테스크 최소 업로드 주기:" label-for="input-3">
                <b-form-input
                    id="input-3"
                    v-model="form.upload"
                    required
                    placeholder="Enter minimum upload period"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="테스크 데이터 테이블명:" label-for="input-4">
                <b-form-input
                    id="input-4"
                    v-model="form.table_name"
                    required
                    placeholder="Enter data table name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5" label="테스크 데이터 테이블 스키마:" label-for="input-5">
                <b-form-input
                    id="input-5"
                    v-model="form.table_schema"
                    required
                    placeholder="Enter data table schema"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-6" label="원본 데이터 타입:" label-for="input-6">
                <b-form-input
                    id="input-6"
                    v-model="form.data_type"
                    required
                    placeholder="Enter origin data type"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

        <!-- 확인차원 -->
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    des: '',
                    upload: '',
                    table_name: '',
                    table_schema: '',
                    data_type: ''
                },
                show: true
            }
        },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
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