import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  cardList: Card[] = [
    new Card("assets/images/apple.jpg", "Apple Pie", "Découvrez la recette de la vraie « American Apple Pie », avec un joli quadrillage recouvrant de généreuses couches de pommes délicieusement épicées à la cannelle. Cette recette d’apple pie est un classique à conserver.", "Recipe", false),
    new Card("assets/images/pumpkin.jpg", "Pumpkin Pie", "Une recette idéale pour Halloween, la pumpkin pie (ou tarte à la citrouille en français). Une véritable recette américaine délicieux avec du potiron.", "Recipe", true),
    new Card("assets/images/chocolate.jpg", "Chocolate Cake", "LA recette de gâteau au chocolat, ne cherchez plus vous ne trouverez pas mieux ! Très facile et rapide, Un classique de la pâtisserie idéal en toute saison, moelleux et fondant. on ne peut y résister !", "Recipe", false),
    new Card("assets/images/rainbow.jpg", "Rainbow Cake", "Vous cherchez le gâteau d’anniversaire idéal ? Le rainbow cake est un gâteau à plusieurs couches (ou layer cake) avec les couleurs de l’arc-en-ciel.", "Recipe", true),
    new Card("assets/images/cookies.png", "Butter Cookies", "Vous cherchez le gâteau d’anniversaire idéal ? Le rainbow cake est un gâteau à plusieurs couches (ou layer cake) avec les couleurs de l’arc-en-ciel.", "Recipe", true)
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
