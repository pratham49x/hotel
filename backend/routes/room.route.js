import express from 'express';

import { createRoom, getRooms, updateRoom, deleteRoom } from '../controllers/room.controller.js';

const router = express.Router();



router.get('/', getRooms);

router.post('/', createRoom);  

router.put('/:id', updateRoom);

router.delete('/:id', deleteRoom);

export default router;