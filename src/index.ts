import { Post, Prisma, PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
import express from "express";

const app = express();

const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      tags: "jeejee",
    },
  });
  const posts = prisma.post.findMany();
  console.log(posts);
}

main();

app.listen(3000, "localhost", () => console.log("Server listening on port 3000"));
