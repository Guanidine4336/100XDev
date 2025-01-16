import { PrismaClient } from "@prisma/client";
import { get } from "http";
const prisma = new PrismaClient();

// // similar to
// // import mongoose from "mongoose"
// // mongoose.connect()


async function insertUser(email:string, password:string, firstname:string, lastname:string) {
    const res= await prisma.user.create({
        data: {
            email,
            password,
            firstname,
            lastname
        }
    })

    console.log(res);
}

// // insertUser("ayush2@gmail.com", "password", "ayush", "kumar");

interface UpdateParams{
    firstname: string,
    lastname: string
}

async function UpdateUser(username: string, {
    firstname,
    lastname
}:UpdateParams) {
    const  res=await prisma.user.update({
        where: { email: username },
        data: {
            firstname,
            lastname
        }
    })

    console.log(res);


}

// UpdateUser("ayush@gmail.com", {
//     firstname: "manas",
//     lastname:"gupta"
// })

async function getUser(email:string) {
    const res = await prisma.user.findUnique({
        where: { email }
    })

    console.log(res);
}

getUser("ayush@gmail.com");
