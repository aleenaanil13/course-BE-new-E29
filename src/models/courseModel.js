import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    instructor: [{ type: mongoose.Types.ObjectId, ref: "Instructor" }],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
