import express from "express";
const route = express.Router();
import create from  '../controller/userconroller.js'

route.post("/create",create);

.export default route;
