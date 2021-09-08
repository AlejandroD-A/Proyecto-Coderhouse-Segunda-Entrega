const LocalStrategy = require('passport-local').Strategy
const User = require('../persistence/mongo/schemas/UserSchema')
module.exports = ( passport ) => {

    passport.serializeUser(function(user, done) {
        done(null,user._id)
    })

    passport.deserializeUser(function(id, done) {
        User.findById(id, function (err, user){
            done(err,user)
        })
    })

    passport.use('signup', new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },  async (req, email, password, done) => {
            try{
                let user = await User.findOne({ email: email })
                if (user) return done( null, false, console.log("message","User Already Exists"))
                user = await User.create(req.body)
                return done(null, user)
            }catch(err){
                console.log(err)
                done(err)
            }
        }
        )
    )

    passport.use('login',new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        async (req,email,password,done) => {

            try{   
                let user = await User.findOne({email: email})

                if(!user) return done( null, false, console.log("message","User doesn't exist"))

                if( !user.verifyPassword(password) ) return done(null,false, console.log("message","Password doesn't  match with the record")) 
                return done(null, user)
            }catch(err){
                done(err)
            }
        }
    )
    )
}