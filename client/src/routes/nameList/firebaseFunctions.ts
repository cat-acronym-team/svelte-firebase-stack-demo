import { db } from "../../firebase";
import { getFirestore, connectFirestoreEmulator, Firestore, getDocs } from "firebase/firestore";
import { collection, addDoc, getDoc } from "firebase/firestore";

connectFirestoreEmulator(db, "localhost", 8080);

export async function addUser(user: string) {
  const docRef = await addDoc(collection(db, "Users"), {
    name: user,
  });

  console.log("Document written with name: ", docRef.id);
}

export async function getUsers() {
  const names: string[] = [];

  const querySnapshot = await getDocs(collection(db, "Users"));
  //Loops through each document in collection pulling from field name
  querySnapshot.forEach((doc) => {
    const name: string = doc.get("name");
    names.push(name);
  });

  return names;
}

//Names from User collection
export let names: string[] = [];
getUsers().then((members) => {
  names = members;
});
