const express = require("express");
const router = express.Router();

// Controllers
const { register, login, checkAuth } = require("../controllers/auth");
const {
  getUsers,
  editUser,
  deleteUser,
  getFollowers,
  getFollowing,
  getUserFeeds,
  getUserProfile,
} = require("../controllers/user");
const {
  addFeed,
  getFeedByFollow,
  getFeeds,
  like,
  getComments,
  addComment,
} = require("../controllers/feed");

// Middlewares
const { auth } = require("../middlewares/auth");
const { uploadFile } = require("../middlewares/uploadFile");

// Routes
router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", auth, checkAuth);

router.get("/users", getUsers);
router.get("/user-profile", auth, getUserProfile);
router.patch("/user/:id", auth, uploadFile("image"), editUser);
router.delete("/user/:id", deleteUser);
router.get("/followers/:id", getFollowers);
router.get("/following/:id", getFollowing);
router.get("/user-feed/:id", auth, getUserFeeds);

router.post("/feed", auth, uploadFile("image"), addFeed);
router.get("/feed/:id", auth, getFeedByFollow);
router.get("/feeds", getFeeds);
router.post("/like", auth, like);
router.get("/comments/:id", auth, getComments);
router.post("/comment", auth, addComment);

module.exports = router;
