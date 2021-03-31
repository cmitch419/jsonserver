const faker = require('faker');

module.exports = () => {
    const data = { authors: [], books: [], pages: [] };

    // Create 10 authors
    for (let i = 0; i < 10; i++) {
        let authorId = faker.datatype.uuid();
        data.authors.push({ id: authorId, name: `${faker.name.findName()}` });

        // 5 books per author
        for (let ii = 0; ii < 5; ii++) {
            let bookId = faker.datatype.uuid();
            data.books.push({ id: bookId, title: `${titleCase(faker.lorem.words())}`, authorId: authorId });

            // 10 pages per book
            for (let iii = 0; iii < 10; iii++) {
                let pageId = faker.datatype.uuid();
                data.pages.push({
                    id: pageId,
                    title: `${faker.lorem.words()}`,
                    bookId: bookId,
                    imageSrc: 'http://placeimg.com/850/1100/animals',
                    imageText: `${faker.lorem.words(7)}`
                });
            }
        }
    }
    return data
};

const titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};
