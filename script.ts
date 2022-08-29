import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    // Alle Artikel suchen
    // const artikel = await prisma.artikel.findMany()

    // Alle roten Artikel suchen
    const artikel = await prisma.artikel.findMany({
        where: {
            farbe: 'rot',
        }
    })

    // Einen bestimmten Artikel suchen
    // const artikel = await prisma.artikel.findUnique({
    //     where: {
    //         artnr: '100001',
    //     }
    // })

    // Ausgabe der Suchmenge in der console
    console.log(artikel)
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
