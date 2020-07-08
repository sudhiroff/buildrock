import mongoose from "mongoose";
const roleSchema = new mongoose.Schema({
    roleName: String,
    access: Array,
}, { timestamps: true });
export const Role = mongoose.model("Role", roleSchema);