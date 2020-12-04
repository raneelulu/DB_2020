const LocalStrategy = require('passport-local').Strategy;
const users = require('../data/users.json'); //여기에서 디비에서 [사용자 id],[사용자 비밀번호],[직책]을 json으로 콜해주세요


exports.config=(passport)=>{

    passport.serializeUser((user,done)=>{
        done(null,user.id);
    });

    passport.deserializeUser((id,done)=>{
        
        const result = users.filter((user)=> user.id === id);
        if(result.length>0){
            done(null,result[0]);
        }
    });

    passport.use(new LocalStrategy({
        usernameField: 'id',
        passwordField: 'password',
        session: true,
        passReqToCallback:false,
    },(id,password,done)=>{
        const result = users.filter((user)=>user.id===id);
        if(result.length>0){
            const user = result[0];
            if(password === user.password){
                done(null,user,);
            }else{
                done(null,false,{message:"비밀번호 틀림"});
            }
        }else{
            done(null,false,{message:"가입되지 않은 회원"});
        }
    }));
}