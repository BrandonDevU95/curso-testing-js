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
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // eslint-disable-next-line no-console
      console.log(books);
      // Assert
      expect(books.length).toEqual(2);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith("books", {});
    });
  });
  test("should return a list book", async () => {
    // Arrange
    mockGetAll.mockResolvedValue([
      {
        _id: "1",
        name: "Book 1",
      },
      {
        _id: "2",
        name: "Book 2",
      },
    ]);
    // Act
    const books = await service.getBooks({});
    // eslint-disable-next-line no-console
    console.log(books);
    // Assert
    expect(books[0].name).toEqual("Book 1");
    expect(mockGetAll).toHaveBeenCalled();
    expect(mockGetAll).toHaveBeenCalledTimes(1);
    expect(mockGetAll).toHaveBeenCalledWith("books", {});
  });
});
