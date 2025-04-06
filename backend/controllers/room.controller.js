import Room from '../models/room.model.js';
import mongoose from 'mongoose';
export const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json({success:true, data: rooms });
    } catch (error) {
        console.error("error in fetching rooms:", error.message);
        res.status(500).json({success:false, message: 'Server error' });
    }
};

export const createRoom = async (req, res) => {
    const room = req.body;

    if (!room.name || !room.image || !room.price ) {
        return res.status(400).json({success:false, message: 'Please provide all fields' });
    }
    const newRoom = new Room(room)

    try{
        await newRoom.save();
        res.status(201).json({success:true, data: newRoom });
    }
    catch (error) {
        console.error("error in create room:", error.message);
        res.status(500).json({success:false, message: 'Server error' });
    }
};
export const updateRoom = async (req, res) => {
    const { id } = req.params;
    const room = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success:false, message: 'Invalid room ID' });
    }   
    try{
        const updatedRoom = await Room.findByIdAndUpdate(id, room, { new: true });
        res.status(200).json({success:true, data: updatedRoom });
    }
    catch (error) {
        res.status(500).json({success:false, message: 'Server error' });
    }
};

export const deleteRoom = async (req, res) => {
    const { id } = req.params;
    console.log("id:", id);
    try{
        await Room.findByIdAndDelete(id);
        res.status(200).json({success:true, message: 'Room deleted successfully' });
    }
    catch (error) {
        console.error("error in deleting room:", error.message);
        res.status(500).json({success:false, message: 'Room not found' });
    }
};