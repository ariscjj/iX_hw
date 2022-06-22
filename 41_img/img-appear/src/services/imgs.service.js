import {
  collection,
  query,
  getDocs,
  addDoc,
} from 'firebase/firestore';

import { db } from '../firebase/firebase';
import { Img } from '../models/img';

class ImgsService {

  constructor() {
    this.collection = 'imgs';
  }

  async createImg(img) {
    const collectionRef = collection(db, this.collection);

    const docRef = await addDoc(collectionRef, img.toJson());

    img.id = docRef.id;
    return img;
  }

  async fetchImgs() {
    const collectionRef = collection(db, this.collection);

    const querySnapshot = await getDocs(query(collectionRef));
    const imgs = [];

    querySnapshot.forEach(doc => {
      imgs.push(Img.fromFirebase(doc));
    });

    return imgs;
  }
}

const service = new ImgsService();
export default service;
