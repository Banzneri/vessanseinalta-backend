import { Post, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } catch {
    res.status(500).json({ message: "Posts not found" });
  }
};

const getPostById = async (req: Request, res: Response) => {
  const id = req.query.id;

  if (id === undefined) return res.status(400).json({ message: "Post not found" });

  try {
    const post = await prisma.post.findUnique({ where: { id: Number(id) } });
    res.status(200).json(post);
  } catch {
    res.status(500).json({ message: "Post not found." });
  }
};

const addPost = async (req: Request, res: Response) => {
  const post: Post = req.body;

  if (post === undefined) return res.status(400).json({ message: "Post not found" });

  try {
    const addedPost = await prisma.post.create({ data: post });
    res.status(200).json(addedPost);
  } catch {
    res.status(500).json({ message: "Failed to add post" });
  }
};

export default {
  getAllPosts,
  getPostById,
  addPost,
};
