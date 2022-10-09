import express from "express";

import postController from "../controllers/post.controller";

const postRouter = express.Router();

postRouter.get("/", postController.getAllPosts);
postRouter.get("/:id", postController.getPostById);
postRouter.post("/", postController.addPost);

export default postRouter;
