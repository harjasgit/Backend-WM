
import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://kaur:BV2iLfQgd0hgS7Fh@jobserachapp.yocfqf1.mongodb.net/?retryWrites=true&w=majority&appName=jobSerachApp")
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};