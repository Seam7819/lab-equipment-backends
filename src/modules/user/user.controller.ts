import { Request, Response } from "express";
import { userService } from "./user.service";

const registerUser = async (req: Request, res: Response) => {
    try{
        const payload = req.body;
        const user = await userService.registerUser(payload);
        res.status(201).json({
            message: "User registered successfully",
            data: user
        })
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        res.status(500).json({ error: message });
    }

}

export const userController = {
    registerUser
}