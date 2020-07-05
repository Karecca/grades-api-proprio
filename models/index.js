import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

db.gradeSchema = mongoose.Schema({
  name: { type: String, required: [true, 'Preenchimento de nome obrigatório'] },
  subject: {
    type: String,
    required: [true, 'Preenchimento de subject obrigatório'],
  },
  type: { type: String, required: [true, 'Preenchimento de type obrigatório'] },
  value: {
    type: String,
    required: [true, 'Preenchimento de value obrigatório'],
  },
  lastModified: { type: Date, default: Date.now },
});

db.gradeModel = mongoose.model('grade', db.gradeSchema);
export { db };
