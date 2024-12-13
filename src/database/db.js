import mongoose from 'mongoose';

const connectDatabase = () => {
    console.log("Wait, conecting to the Database")
    
    mongoose.connect(
        "mongodb+srv://root:root@cluster0.vf0xd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {useNewUrlParser: true,
        useUnifiedTopology: true,}
    )
    .then(() => console.log("MongoDb Atlas connected"))
    .catch((error) => console.log(error));
};

export default connectDatabase;
