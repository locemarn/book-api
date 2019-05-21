import BooksController from '../../../controllers/books';

describe('Controllers: Books', () => {
  describe('Get all books getAll()', () => {
    it('should return a list of books', () => {
      const Books = {
        findAll: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        name: 'Test Book',
        created_at: '2019-05-21T00:26:50.5487',
        updated_at: '2019-05-21T00:26:50.5487',
      }];

      td.when(Books.findAll({})).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.getAll()
        .then((response) => {
          expect(response.data).to.be.eql(expectedResponse);
          expect(response.statusCode).to.be.eql(200);
        });
    });
  });

  describe('Get book by id: getById()', () => {
    it('should return a book', () => {
      const Books = {
        findOne: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        name: 'Test Book',
        created_at: '2019-05-21T00:26:50.5487',
        updated_at: '2019-05-21T00:26:50.5487',
      }];

      td.when(Books.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.getById({ id: 1 })
        .then((response) => {
          expect(response.data).to.be.eql(expectedResponse);
          expect(response.statusCode).to.be.eql(200);
        });
    });
  });

  describe('Create a book: create()', () => {
    it('should create a book', () => {
      const Books = {
        create: td.function(),
      };

      const reqBody = {
        name: 'Test Book',
      };

      const expectedResponse = [{
        id: 1,
        name: 'Test Book',
        created_at: '2019-05-21T00:26:50.5487',
        updated_at: '2019-05-21T00:26:50.5487',
      }];

      td.when(Books.create(reqBody)).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.create(reqBody)
        .then((response) => {
          expect(response.data).to.be.eql(expectedResponse);
          expect(response.statusCode).to.be.eql(201);
        });
    });
  });

  describe('Update a book: update()', () => {
    it('should update a book', () => {
      const Books = {
        update: td.function(),
      };

      const reqBody = {
        id: 1,
        name: 'Test Book Updated',
      };

      const expectedResponse = [{
        id: 1,
        name: 'Test Book Updated',
        created_at: '2019-05-21T00:26:50.5487',
        updated_at: '2019-05-21T00:26:50.5487',
      }];

      td.when(Books.update(reqBody, { where: { id: 1 } })).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.update(reqBody, { id: 1 })
        .then((response) => {
          expect(response.data).to.be.eql(expectedResponse);
          expect(response.statusCode).to.be.eql(200);
        });
    });
  });

  describe('Delete a book: delete()', () => {
    it('should delete a book', () => {
      const Books = {
        destroy: td.function(),
      };

      td.when(Books.destroy({ where: { id: 1 } })).thenResolve({});

      const booksController = new BooksController(Books);
      return booksController.delete({ id: 1 })
        .then((response) => {
          expect(response.statusCode).to.be.eql(204);
        });
    });
  });
});
