import type { Response,Request } from "express";
import { getUrlsByUserId,create } from "../repository/urls.js";
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
    const {longUrl,shortCode}=req.body
    const newUrl: NewUrl={
        shortCode,longUrl,createdBy:userId
    }
    const urls=await create(newUrl)
    res.json(urls)
    


}
