import mongoose from 'mongoose';

const plantSchema = mongoose.Schema({
    name: String,
    desc: String,
    selectedFile: String,
    water_sched: Number,
    other_care: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PlantMessage = mongoose.model('PlantMessage', plantSchema);

export default PlantMessage;