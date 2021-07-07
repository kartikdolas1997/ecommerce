import { Injectable } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }
  // getCategories(): Observable<any>{
  //   // add valueChanges() here
  //   return this.db.list('categories').valueChanges();  
  // }

  
  
  getCategories() {
    return this.db
        .list('/categories', (ref) => ref.orderByChild('name'))
        .snapshotChanges()
        .pipe(
        map((actions) => {
            return actions.map((action) => ({
                key: action.key,
                val: action.payload.val(),
            }));
        }));

}
}
