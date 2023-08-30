// implement API endpoint 
import { data } from "../../data";
export default function handler(req,res){
    const{method , query : {id},body,params,header}= req;
    switch(method){
        case "GET" : 
            // return all the data existed
            res.status(200).json({
                data
            });
            console.log(body);
            console.log(params);
            break;
        case "POST":
            // post the data the in-memory database
            const isExist = data.find((user)=> user.name === req.body.name);
            isExist? res.status(203).json({message : "The user is already exist"}) : data.push(req.body);
            res.status(201).json(req.body);
            break;
    }
}