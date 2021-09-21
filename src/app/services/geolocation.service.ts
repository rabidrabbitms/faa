import { Injectable } from '@angular/core';
import promisify from '../utilities/promisify';
import geolocationAvailability from '../utilities/geolocation-availability';

@Injectable({ providedIn: 'root' })
export class GeolocationService {
    constructor() {}
    async locate() {
        const available = await geolocationAvailability();
        if (!available) return { latitude: undefined, longitude: undefined };

        const getCurrentPosition = promisify(
            navigator.geolocation.getCurrentPosition.bind(navigator.geolocation)
        );
        const { coords } = await getCurrentPosition();
        return coords;
    }
}
