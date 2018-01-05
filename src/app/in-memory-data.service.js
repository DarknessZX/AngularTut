"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: "alpha" },
            { id: 2, name: "beta" },
            { id: 3, name: "contra" },
            { id: 4, name: "destroyer" },
            { id: 5, name: "evil" },
            { id: 6, name: "fanta" },
            { id: 7, name: "garuda" },
            { id: 8, name: "fugaka" },
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map