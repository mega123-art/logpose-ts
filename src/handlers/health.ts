import type { Request,Response } from "express";
export function healthHandler(req:Request,res:Response){
    res.json({message:"Server is live!"})

}