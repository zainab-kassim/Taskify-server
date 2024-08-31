import mongoose from 'mongoose';
import { Schema, model, models } from 'mongoose';

const taskSchema = new mongoose.Schema({
  author:{
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true,'Owner is required']
  },
  task: {
    type: String,
    required: [true,'task is required'],
  }
});


const Task =models?.Task|| model('Task', taskSchema);

export default Task;
