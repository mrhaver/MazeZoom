

import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let artifacts = [
            { id: 0, imgSrc: './app/images/gogh1.png', value: '' },
            { id: 1, imgSrc: './app/images/gogh2.png', value: '' },
            { id: 2, imgSrc: './app/images/gogh3.png', value: '' },
        ];
        return { artifacts };
    }
}