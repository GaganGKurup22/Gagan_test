const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://gagangkurup10:omen16@clusterinternship.zup2cqv.mongodb.net/userdb?retryWrites=true&w=majority&appName=Clusterinternship').then((res)=>{
    console.log('Connected to DB')
}).catch((res)=>{
    console.log('Not Connected to DB')
})