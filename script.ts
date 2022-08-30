import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
})

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

    // const kunde = await prisma.kunde.create({
    //     data: {
    //         kndnr: '123457',
    //         name: 'Test Name',
    //         vorname: 'Test Vorname',
    //         str: 'musterstr. 1',
    //         plz: '12345',
    //         ort: 'Musterstadt',
    //     },
    //
    // })
    // console.log(kunde)


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
