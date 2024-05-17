import App from "./src/App";



App.post("/creatuser",(req,res)=>{
   await User.create({email:req.email,_id:req.body.uid})

})