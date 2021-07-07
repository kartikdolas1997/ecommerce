import { Injectable } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }
  getCategories(): Observable<any>{
    // add valueChanges() here
    return this.db.list('categories').valueChanges();  
  }

  
  
}
