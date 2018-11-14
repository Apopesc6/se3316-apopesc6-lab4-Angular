import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  
  getCourses() : string[] {
    return ["Author1", "Author2", "Author3"]
  }
  
  constructor() { }
}
