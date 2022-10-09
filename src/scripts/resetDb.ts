import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resetDb = async () => {
  const posts = await prisma.post.findMany();

  const deletePost = async (post: Post) => {
    return await prisma.post.delete({ where: { id: post.id } });
  };

  const deletePosts = async () => {
    return Promise.all(posts.map((post) => deletePost(post)));
  };

  deletePosts();
};

resetDb();
