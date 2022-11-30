export class Card {    
    constructor(
        public thumbnail: string,
        public title: string,
        public description: string,
        public btnText: string,
        public isBtnDifferent: boolean
    ) {}
}