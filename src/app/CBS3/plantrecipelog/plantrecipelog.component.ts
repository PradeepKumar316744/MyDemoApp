import { Component, OnInit } from '@angular/core';
import { PlantRecipe } from 'src/app/Models/PlantRecipe';
import { PlantrecipeapiService } from 'src/app/Services/plantrecipeapi.service';
import { ViewChild} from '@angular/core';
import { MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-plantrecipelog',
  templateUrl: './plantrecipelog.component.html',
  styleUrls: ['./plantrecipelog.component.css']
})
export class PlantrecipelogComponent implements OnInit {

  displayedColumns: string[] = ['dotCode', 'comId', 'prvVar', 'prvIssue', 'ruleDescription', 'userName'];
  dataSource = new MatTableDataSource<PlantRecipe>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  plantRecipes: PlantRecipe[];

  constructor(private plantRecipeService: PlantrecipeapiService) {}

  ngOnInit() {
    this.plantRecipeService.getPlantRecipe().subscribe(data => {

      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });


  }
}
