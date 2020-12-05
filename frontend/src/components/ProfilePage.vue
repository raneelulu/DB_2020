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
      <label for="old_password">기존 비밀번호 :</label>
      <input id="old_password" type="password" v-model="old_password"  />
    </div>
    <div>
      <label for="new_password">새로운 비밀번호 :</label>
      <input id="new_password" type="password" v-model="new_password"  />
    </div>
		    <div>
      <label for="password_check">비밀번호 확인 :</label>
      <input id="password_check" type="password" v-model="new_password_check"  />
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
    <!-- <div>
      <label for="birthday">생일:</label>
      <input id="birthday" type="date" min='1900-01-01' v-model="birthday" disabled/>
    </div> -->
    <div>
      <label for="type">권한:</label>
        <input id='type' class='type' type='text' v-model='type' disabled/>  
		</div>
    <button type="submit">정보 수정하기</button>
    <button class='red' v-on:click="withdraw">탈퇴하기</button>
  </form>
</template>

<script>
import '@/style/base.css'
export default {
	data: function() {
		return {
			id:'',
			old_password:'',
			old_password_check:'',
			new_password:'',
			new_password_check:'',
			name:'',
			phone_number1:'',
			phone_number2:'',
			phone_number3:'',
			address:'',
			birthday:'',
			type:'',
			// user:null,
		};
	},  
	created(){
		this.id = this.$store.getters.user.id;
		this.old_password_check = this.$store.getters.user.password;
		this.name = this.$store.getters.user.name;
		this.type = this.$store.getters.user.position;
		// console.log(this.$store.getters.user);
		// .then((res) => {
		// 	const user = res.data.user;
		// 	alert(user);
		// 	if(user){
		// 		this.name= user.name;
		// 		this.id = user.id;
		// 		this.old_password_check = user.password;
		// 		this.phonenumber1 = user.phone_number.substr(0,3);
		// 		this.phonenumber2 = user.phone_number.substr(3,4);
		// 		this.phonenumber2 = user.phone_number.substring(7,);
		// 		this.address = user.address;
		// 		this.birthday = user.birthday;
		// 		this.type = user.type;
		// 	}else{
		// 		// this.$router.push({name:"LoginPage"});
		// 	}
		// })
		// .catch((err) => {
		// 		console.error(err);
		// });
    },
	methods: {
	checkForm: function()	{
		console.log("checkForm");
		var RegExp = /^[a-zA-Z0-9]{4,12}$/; //id와 pwassword 유효성 검사 정규식
		var num_RegExp = /^[0-9]*$/; //숫자 유효성검사 정규식

		// ================ PASSWORD 유효성검사 ===============//
		if(!this.old_password){ // 비밀번호 입력여부 검사
			alert("기존 비밀번호를 입력해주세요.");
			return false;
		}		
		if(this.old_password!=this.old_password_check){
			console.log(old_password_check);
			alert("기존 비밀번호가 틀립니다.")
			return false;
		}
		if(!this.new_password){
			alert("새로운 비밀번호를 입력해주세요.");
			return false;			
		}
		if(!RegExp.test(this.new_password)){ //패스워드 유효성검사
			alert("비밀번호는 4~12자의 영문 대소문자와 숫자로만 입력해주세요.");
			return false;
		}
		if(this.id==this.new_password){ //패스워드와 ID가 동일한지 검사
			alert("아이디와 비밀번호가 동일합니다.");
			return false;
		}
		if(this.new_password!=this.new_password_check){ //비밀번호와 비밀번호확인이 동일한지 검사
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
			password: this.new_password,
			phone_number: this.phone_number1 + this.phone_number2 + this.phone_number3,
			address: this.address,
		}
		console.log(data);
		this.$http.post('/api/profile', data)
			.then((response)=>{
				if(response['STAT']==0)	{
					// 수정성공
					alert("회원정보가 수정되었습니다.");
					console.log("success");
				}
			})
			.catch(function(error){
				console.log(response);
			});
	}},
	withdraw: function()	{

		var this_id = this.$store.getters.user.id;
		var this_password = this.$store.getters.user.password;

		if(!old_password)	{
			alert("탈퇴를 위해 기존 비밀번호를 입력하세요");
			return false;
		}
		if(old_password == this_password)	{
			this.$http.post('/api/withdraw', id)
				.then((response)=>{
					if(response['STAT']==0)	{
						// 삭제 성공
						alert("회원 탈퇴 되었습니다.");
						console.log("success");
					}
				})
				.catch(function(error){
					console.log(response);
				});	}
		}
}
</script>

<style scoped>

</style>
