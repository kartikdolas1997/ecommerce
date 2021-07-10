import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }
  create(product){
    return this.db.list('/product').push(product)
  }

  getAll(){
    return this.db
        .list('/product')
        .snapshotChanges()
        .pipe(
        map((actions) => {
            return actions.map((action) => ({
                key: action.key,
                val: action.payload.val(),
            }));
        }));
  }
  get(productId){
    return this.db.object('/product/'+productId)

  }
  update(productId, product){
    return this.db.object('/product/' + productId).update(product)
  }
  delete(productId){
    return this.db.object('/product/'+productId).remove()
  }
}
