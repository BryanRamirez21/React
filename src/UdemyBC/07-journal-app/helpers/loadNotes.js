import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async(uid = '') => {
    if(!uid) throw new Error('User ID does not exist');

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);

    const notes = [];
    docs.forEach(doc => {

        //* "necesito insertar un obj, y luego seria la info de la resp, es decir, ESPARCIR TODA LA INFO":
        notes.push({id: doc.id, ...doc.data()});
    });

    return notes;
}