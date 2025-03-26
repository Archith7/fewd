const userModel= require('../models/models');

const hii=(req,res)=>{
    res.json({cont:'hi from the controller'});
}


const createuser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      console.log('Received data:', { name, email, password }); // Log incoming data for debugging
      
      const userExist = await userModel.findOne({ email });
      if (userExist) {
        return res.status(400).json({ mssg: 'User already exists' });
      }
  
      const user = await userModel.create({ name, email, password });
      console.log('User created successfully:', user);
  
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error("Error in createuser:", error);  // Log the full error object for debugging
      res.status(500).json({ mssg: error.message });
    }
  };
  

const getallusers= async (req,res)=>{
    try{
        const users = await userModel.find({});
        res.json(users);
    }catch(error){
        res.status(500).json({mssg:error.message});
    }
}
const getuserbyid= async (req,res)=>{
    try{
        const {id}= req.params;
        const users = await userModel.findById(id);
        res.json(users);
    }catch(error){
        res.status(500).json({mssg:error.message});
    }
}


const updateuser = async(req,res)=>{
    try{
        const {id}= req.params;
        const{name, email, password }=req.body;

        const user = await userModel.findById(id);
        if(!user){
            return res.status(404).json({mssg:'user not found'});
        }

        user.name= name||user.name;
        user.email= email|| user.email;
        user.password= password||user.password;

        const updateduser = await user.save();
        res.json(updateduser);

    }
    catch(error){
        res.status(500).json({mssg:error.message});
    }
}
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await userModel.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.deleteOne();
        res.json({ message: 'User removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports={hii, createuser , getallusers, getuserbyid , updateuser ,deleteUser};