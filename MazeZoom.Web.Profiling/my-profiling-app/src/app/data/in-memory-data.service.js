"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var artifacts = [
            { id: 0, imgSrc: './app/images/gogh1.png', value: '' },
            { id: 1, imgSrc: './app/images/gogh2.png', value: '' },
            { id: 2, imgSrc: './app/images/gogh3.png', value: '' },
        ];
        return { artifacts: artifacts };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map