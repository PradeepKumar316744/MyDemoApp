import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlantRecipe } from 'src/app/Models/PlantRecipe';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'Application/jason'})
};

@Injectable({
  providedIn: 'root'
})
export class PlantrecipeapiService {

  postsUrl = 'https://localhost:44362/api/PlantRecipeLog/22/jher';

  constructor(private http: HttpClient) { }

  getPlantRecipe(): Observable<PlantRecipe[]> {
    return this.http.get<PlantRecipe[]>(this.postsUrl);
  }

}
