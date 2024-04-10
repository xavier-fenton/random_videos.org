import { firestore } from "./src/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
async function addUserData() {
    try {
        const docRef = await addDoc(collection(firestore, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }
}
// Call the function to add user data
addUserData();
