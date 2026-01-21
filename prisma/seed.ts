import { PrismaClient } from '@prisma/client';

// NO pongas nada dentro del paréntesis. Prisma lo buscará solo en la terminal.
const prisma = new PrismaClient();

async function main() {
  console.log("Conectando...");
  const result = await prisma.book.createMany({
    data: [
      {
        title: "Cien años de soledad",
        slug: "cien-anos-de-soledad",
        author: "Gabriel García Márquez",
        price: 12000,
        stock: 10,
        description: "Una obra fundamental de la literatura latinoamericana.",
        cover: "/covers/cien-anos.jpg",
      },
      {
        title: "Rayuela",
        slug: "rayuela",
        author: "Julio Cortázar",
        price: 9800,
        stock: 5,
        description: "Una novela que puede leerse de múltiples maneras.",
        cover: "/covers/rayuela.jpg",
      },
      {
        title: "El túnel",
        slug: "el-tunel",
        author: "Ernesto Sabato",
        price: 8500,
        stock: 7,
        description: "Una novela psicológica intensa y breve.",
        cover: "/covers/el-tunel.jpg",
      },
    ],
  });

  console.log("¡LISTO! Libros insertados:", result.count);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });