interface IBook {
    name: string;
    isbn: string;
}

class Book implements IBook {
    constructor(public name: string, public isbn: string) {}
}

const book = new Book('Gone with the Wind', '12345');