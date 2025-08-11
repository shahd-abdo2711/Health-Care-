 
import { db } from "./Firebase.init";  
export async function saveAppointment(appointmentData) {
  try {
    const docRef = await addDoc(collection(db, "appointments"), appointmentData);
    console.log("Appointment saved with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding appointment: ", error);
    throw error;
  }
}
