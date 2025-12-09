export class ApiService {
    static fetchLivres() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    { id: 1, title: "1984", author: "Orwell", year: 1949, available: true },
                    { id: 2, title: "Brave New World", author: "Huxley", year: 1932, available: true },
                    { id: 3, title: "Fahrenheit 451", author: "Bradbury", year: 1953, available: true }
                ]);
            }, 500);
        });
    }
}
//# sourceMappingURL=apiService.js.map