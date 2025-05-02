const { generateManyBook } = require("../fake/book.fake");
const BooksService = require("./books.service");

const mockGetAll = jest.fn(() => Promise.resolve(fakeBooks));

jest.mock("../lib/mongo.lib.js", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
);

describe("Test for Books Service", () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe("Test fot getBooks method", () => {
    test("should return a list book", async () => {
      // Arrange
      const fakeBooks = generateManyBook(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // eslint-disable-next-line no-console
      console.log(books);
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith("books", {});
    });
  });
  test("should return a list book", async () => {
    // Arrange
    const fakeBooks = generateManyBook(10);
    mockGetAll.mockResolvedValue(fakeBooks);
    // Act
    const books = await service.getBooks({});
    // eslint-disable-next-line no-console
    console.log(books);
    // Assert
    expect(books[0].name).toEqual(fakeBooks[0].name);
    expect(mockGetAll).toHaveBeenCalled();
    expect(mockGetAll).toHaveBeenCalledTimes(1);
    expect(mockGetAll).toHaveBeenCalledWith("books", {});
  });
});
