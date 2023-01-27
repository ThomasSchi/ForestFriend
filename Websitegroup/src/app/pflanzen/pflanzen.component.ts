import { Component } from '@angular/core';

@Component({
  selector: 'app-pflanzen',
  templateUrl: './pflanzen.component.html',
  styleUrls: ['./pflanzen.component.css']
})
export class PflanzenComponent {


plants: any[]=[
  {
    name: "Pfingstrose",
    family: "Päoniengewächse",
    species: "ca. 30",
    usage: "Zierfpflanze in Parks oder Gärten",
    poison: "Einige Arten sind giftig"
  },
  {
    name: "Goldfruchtpalme",
    family: "Palmen",
    species: "divers",
    usage: "Freilandpflanze, tropische Gärten",
    poison: "Nicht giftig"
  },
  {
    name: "Löwenzahn",
    family: "Päoniengewächse",
    species: "ca. 30",
    usage: "Zierfplanze in Parks oder Gärten",
    poison: "Einige Arten"
  },
];

}