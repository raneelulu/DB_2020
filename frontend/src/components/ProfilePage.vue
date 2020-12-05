<template>
  <form v-on:submit.prevent="checkForm">
    <div>
      <label for="name">이름 :</label>
      <input id="name" type="text" v-model="name" disabled/>
    </div>
    <div>
      <label for="id">아이디 :</label>
      <input id="id" type="text" v-model="id" disabled/>
    </div>
    <div>
      <label for="password">비밀번호 :</label>
      <input id="password" type="password" v-model="password"  />
    </div>
		    <div>
      <label for="password_check">비밀번호 확인 :</label>
      <input id="password_check" type="password" v-model="password_check"  />
    </div>
    <div>
      <label for="phone_number">휴대폰 번호:</label>
      <input id="phone_number1" type="text" class="phone_number" maxlength="3" v-model="phone_number1"  />
      <small>-</small>
      <input id="phone_number2" type="text" class="phone_number" maxlength="4" v-model="phone_number2"  />
      <small>-</small>
      <input id="phone_number3" type="text" class="phone_number" maxlength="4" v-model="phone_number3"  />
    </div>
    <div>
      <label for="address">주소:</label>
      <input id="address" type="text" v-model="address"  />
    </div>
    <div>
      <label for="birthday">생일:</label>
      <input id="birthday" type="date" min='1900-01-01' v-model="birthday" disabled/>
    </div>
    <div>
      <label for="type">권한:</label>
        <input id='type' class='type' type='text' v-model='type' disabled/>  
		</div>
    <button type="submit">정보 수정하기</button>
  </form>
</template>

<script>
import '@/style/base.css'
export default {
	data: function() {
		return {
			id:'',
			password:'',
			password_check:'',
			name:'',
			phone_number1:'',
			phone_number2:'',
			phone_number3:'',
			address:'',
			birthday:'',
			type:'',
			rightID:false,
			// user:null,
		};
	},
	created(){
		this.$http.get('/api/login')
		.then((res) => {
			const user = res.data.user;
			if(user){
				this.$store.commit("setUser",user);
				if(user.position =="관리자"){
					this.$router.push("/admin");
				}
				else if (user.position === "평가자") {
					this.$router.push("/evaluator/" + user.id)
				}
				else if (user.position == "사용자") {
					this.$router.push("/submitter/" + user.id);
				}
			}else{
				this.$router.push({name:"LoginPage"});
			}
		})
		.catch((err) => {
				console.error(err);
		});
    },
	methods: {
	checkForm: function()	{
		console.log("checkForm");
		var RegExp = /^[a-zA-Z0-9]{4,12}$/; //id와 pwassword 유효성 검사 정규식
		var n_RegExp = /^[a-zA-Z가-힣]{2,15}$/; //이름 유효성검사 정규식
		var num_RegExp = /^[0-9]*$/; //숫자 유효성검사 정규식

		// ================ PASSWORD 유효성검사 ===============//
		if(!this.password){ // 비밀번호 입력여부 검사
			alert("비밀번호를 입력해주세요.");
			return false;
		}
		if(!RegExp.test(this.password)){ //패스워드 유효성검사
			alert("비밀번호는 4~12자의 영문 대소문자와 숫자로만 입력해주세요.");
			return false;
		}
		if(this.id==this.password){ //패스워드와 ID가 동일한지 검사
			alert("아이디와 비밀번호가 동일합니다.");
			return false;
		}
		if(this.password!=this.password_check){ //비밀번호와 비밀번호확인이 동일한지 검사
			alert("비밀번호가 틀립니다. 다시 확인하여 입력해주세요.");
			return false;
		}        
		// ================ 전화번호 유효성검사 ================ //  
		if(!this.phone_number1 || !this.phone_number2 || !this.phone_number3)	{
			alert("핸드폰 번호를 입력해 주세요.");
			return false;
		} 
		var phone_number = this.phone_number1 + this.phone_number2 + this.phone_number3;
		if(!num_RegExp.test(phone_number))	{
			alert("핸드폰 번호는 숫자만 입력해 주세요.");
			return false;
		}	
		this.submitForm();
	},
	submitForm: function(){
		var data = {
			id: this.id,
			password: this.password,
			name:this.name,
			phone_number: this.phone_number1 + this.phone_number2 + this.phone_number3,
			address: this.address,
			birthday: this.birthday,
			type: this.type,
			score: 0
		}
		console.log(data);
		this.$http.post('/api/sign_up', data)
			.then((response)=>{
				if(response['STAT']==0)	{
					// 회원가입 성공
					console.log("success");
				}
			})
			.catch(function(error){
				console.log(response);
			});
	}},
}
</script>

<style scoped>

</style>
