import { Injectable } from "@angular/core";
import { Place } from "../models/Place.model";

@Injectable({ providedIn: "root" })
export class PlaceSender {
    private savedPlace?: Place;
    constructor() { };

    savePlace(place?: Place) {
        this.savedPlace = place;
        console.log(place);
    }

    get getSavedPlace() {
        return this.savedPlace;
    }
}