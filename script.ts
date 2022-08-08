import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Create User
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Alice',
    //         email: 'alice@prisma.io',
    //     },
    // })
    // console.log(user)

    // Find Users and log
    // const users = await prisma.user.findMany()
    // console.log(users)

    // create User with Post
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Bob',
    //         email: 'bob@prisma.io',
    //         posts: {
    //             create: {
    //                 title: 'Hello World',
    //             },
    //         },
    //     },
    // })
    // console.log(user)

    // Output Users with Posts
    const usersWithPosts = await prisma.user.findMany({
        include: {
            posts: true,
        },
    })

    console.dir(usersWithPosts, { depth: null })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
