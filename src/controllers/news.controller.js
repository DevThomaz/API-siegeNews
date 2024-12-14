import {createService, findAllService} from "../services/news.service.js"
import {ObjectId} from "mongoose";


const create = async  (req, res) => {
    try{
        const {title, text, banner} = req.body;

        if(!title||!banner||!text){
            res.status(400).send({
                message:"Submit all filds for posting",
            });
        }
 
        await createService({
            title,
            text,
            banner,
            user: {_id:"675c57fd70da8e50894b4556"},
        });

        res.send(201)
    }catch(err){
        res.status(500).send({message: err.message});
    }    
}

const findAll = async (req, res) => {
    const news = await findAllService();
    if(news.length === 0){
        return res.statu(400).send({message:"There are no registered news",})
    };
    res.send(news);
}

export {create, findAll};