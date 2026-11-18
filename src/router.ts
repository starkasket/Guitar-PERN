import  { Router }  from "express";
import { createGuitar, getGuitar, updateGuitar } from "./handlers/guitar";

const router = Router();

router.post('/guitars', createGuitar)

router.get('/guitars', getGuitar);

router.put('/guitars/:id', updateGuitar);


export default router;