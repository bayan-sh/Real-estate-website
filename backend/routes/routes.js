const express = require('express')
const router = express.Router()
const signuptem = require('../models/signupm')





router.post('/signup',(request , response)=>{

const signedupuser = new signuptem({

   fullNmae:request.body.fullNmae



})
signedupuser.save()
.then(data =>{

response.json(data)

})
.catch(error =>{

response.json(error)

})

});


//router.get('/signin')
module.exports = router