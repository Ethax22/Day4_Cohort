const express=require("express")
const router=express.Router()
const controller=require("../controllers/mainController")
const auth=require("../utils/authMiddleware")

router.post("/create", auth, controller.create)
router.get("/list", auth, controller.list)
router.delete("/:id", auth, controller.remove)

module.exports=router