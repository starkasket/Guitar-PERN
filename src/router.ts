import  { Router }  from "express";
import { createGuitar, getGuitar } from "./handlers/guitar";

const router = Router();

router.post('/guitars', createGuitar)

router.get('/guitars', getGuitar);


export default router;