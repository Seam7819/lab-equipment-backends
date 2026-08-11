import { prisma } from "../../lib/prisma"

const registerUser = async (payload: any)=>{
    try{
        const user = await prisma.user.create({
            data: payload
        })
        return user;
    } catch (error) {
        throw error;
    }
}

export const userService = {
    registerUser
}