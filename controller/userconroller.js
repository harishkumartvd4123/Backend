import Crud from '../Models/usermodel.js'
const create =async(req,res) =>{
    try
    {
        const userDetails = new Crud(req.body);
        const {email} = userDetails;
        const isExist =await Crud.findOne({email})
        if(isExist)
        {
                res.status(400).json({message:"user is already exists"})
        }
            const newUser = await userDetails.save();
            res.send(200).json(newUser)
} 
    catch(err)
  {
    console.log((err)=>console.log(err))
  }

 } 
 export default create
