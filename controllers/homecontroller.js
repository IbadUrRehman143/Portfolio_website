import UserModel from "../model/userModel.js"
const homecontroller = async (req,res)=>{
    try{ 
        res.render('index');
    }
    catch(error){
        console.log(error.message);
    }
}

// user contatct controller
const ContactUserController = async(req,res)=>{
    try{
        const data = await  UserModel({
            name:req.body.name,
            email:req.body.email,
            subject:req.body.subject,
            message:req.body.message,
        })
        if(data){
        await   data.save();
        console.log("user saved successful");

        }
        res.render('index');
    }catch(error){
        console.log(error.message);
    }
}


export {homecontroller, ContactUserController} ;