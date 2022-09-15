import { db } from "../../firebase";
import { connectFirestoreEmulator, query, getDocs, CollectionReference, orderBy } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

connectFirestoreEmulator(db, "localhost", 8080);

export type UserDoc = {
  /**
   * The user's name.
   */
  name: string;
};

const usersCollection = collection(db, "users") as CollectionReference<UserDoc>;

export async function addUser(user: string) {
  const docRef = await addDoc(usersCollection, {
    name: user,
  });

  console.log("Document written with name: ", docRef.id);
}

export async function getUsers() {
  const names: string[] = [];

  const querySnapshot = await getDocs(query(usersCollection, orderBy("timeCreated", "asc")));
  //Loops through each document in collection pulling from field name
  querySnapshot.forEach((doc) => {
    const data: UserDoc = doc.data();
    names.push(data.name);
  });

  return names;
}
