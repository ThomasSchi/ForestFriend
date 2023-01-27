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
    poison: "Einige Arten sind giftig",
    imageUrl: "https://www.lovethegarden.com/sites/default/files/styles/og_image/public/content/articles/peonies_1728646696.jpg?itok=RTgVNQsg",
  },
  {
    name: "Goldfruchtpalme",
    family: "Palmen",
    species: "divers",
    usage: "Freilandpflanze, tropische Gärten",
    poison: "Nicht giftig",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc4xJbJ8UATBYUhOcB56AaiWvjJtZWLtAiTkKJyoUHzSQyXmUC_RRpaQ0qagQ8McZI7U0&usqp=CAU",
  },
  {
    name: "Löwenzahn",
    family: "Päoniengewächse",
    species: "ca. 30",
    usage: "Zierfplanze in Parks oder Gärten",
    poison: "Einige Arten",
    imageUrl: "https://www.gartentipps.com/wp-content/uploads/2020/03/loewenzahn-naehrstoffe.jpg",
  },
];

}