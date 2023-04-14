import { Injectable } from "@angular/core";
import { Place } from "../models/Place.model";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class PlacesGetter {
    desc: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    private places: Place[] = [
        {
            image: 'assets/A.jpg',
            title: 'Some Valley',
            description: this.desc
        },
        {
            image: 'assets/B.jpg',
            title: 'Some Valley (Autumn)',
            description: this.desc
        },
        {
            image: 'assets/C.jpg',
            title: 'Cool Lake with Mountains',
            description: this.desc
        },
        {
            image: 'assets/D.jpg',
            title: 'Some Lake with a Deck',
            description: this.desc
        },
        {
            image: 'assets/E.jpg',
            title: 'Other Cool Lake with Mountains',
            description: this.desc
        },
        {
            image: 'assets/F.jpg',
            title: 'Some Road in the Dessert',
            description: this.desc
        },
        {
            image: 'assets/G.jpg',
            title: 'Cool Beach',
            description: this.desc
        },
        {
            image: 'assets/A.jpg',
            title: 'Some Valley (again)',
            description: this.desc.repeat(6)
        },
    ];
    placesSubject = new Subject<Place[]>();
    constructor() { };

    get getPlaces() {
        return this.places;
    }

    set setPlaces(newPlaces: Place[]) {
        this.places = newPlaces;
        this.placesSubject.next(newPlaces);
    }

    addPlace(newPlace: Place) {
        this.places.push(newPlace);
        this.placesSubject.next(this.places);
    }
}