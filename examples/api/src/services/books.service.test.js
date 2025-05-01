const BooksService = require("./books.service");

const fakeBooks = [
  {
    _id: "1",
    name: "Book 1",
  },
  {
    _id: "2",
    name: "Book 2",
  },
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

jest.mock("../lib/mongo.lib.js", () => jest.fn().mockImplementation(() => MongoLibStub));

describe("Test for Books Service", () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe("Test fot getBooks method", () => {
    test("should return a list book", async () => {
      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(2);
    });
  });
});
