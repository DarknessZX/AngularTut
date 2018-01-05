import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 1, name: "alpha" },
            { id: 2, name: "beta" },
            { id: 3, name: "contra" },
            { id: 4, name: "destroyer" },
            { id: 5, name: "evil" },
            { id: 6, name: "fanta" },
            { id: 7, name: "garuda" },
            { id: 8, name: "fugaka" },
        ];

        return {heroes};
    }
}