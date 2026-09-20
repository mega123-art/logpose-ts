import type { Response,Request } from "express";
import { getUrlsByUserId,create } from "../repository/urls.js";
import { createUrlSchema } from "../schemas/urls.js";
import type { NewUrl } from "../models/urls.js";
type UserParams = {
    userId: string;
};

export async function getUrlsHandler(req:Request<UserParams>,res:Response) {
    const  {userId}=req.params
    const urls=await getUrlsByUserId(userId)
    res.json(urls)

}

export async function createUrl(req:Request<UserParams>,res:Response){
    const{userId}=req.params
    //const {longUrl,shortCode}=req.body
    const result=createUrlSchema.safeParse(req.body)
    if(result.success){
        const newUrl:NewUrl={
            ...result.data,createdBy:userId
        }
            const urls=await create(newUrl)
                res.json(urls)

    }else{
        return res.status(400).json({
        error: result.error
    })}

    


}
