const Item = require("./Item");
const Shop = require("./Shop");

describe("Aged Brie", () => {
  test("When the aged brie quality is less than 50, the quality should increase by 1 and sellin should decrease by 1", () => {
    const agedBrie = new Item("Aged Brie", 25, 7);

    const shop = new Shop([agedBrie]);

    const updatedItem = shop.updateQuality();

    const expectedItem = new Item("Aged Brie", 24, 8);

    expect(updatedItem).toEqual([expectedItem]);
  });

  test("When the aged brie quality is greater than 50, the quality should remain unchanged and sellin should decrease by 1", () => {
    const agedBrie = new Item("Aged Brie", 25, 70);

    const shop = new Shop([agedBrie]);

    const updatedItem = shop.updateQuality();

    const expectedItem = new Item("Aged Brie", 24, 70);

    expect(updatedItem).toEqual([expectedItem]);
  });

  test("When the aged brie sellin is less than or equal to 0 and the quality is less than 49, the sellin should decrease by 1 and the quality should increase by 2", () => {
    const agedBrie = new Item("Aged Brie", 0, 48);

    const shop = new Shop([agedBrie]);

    const updatedItem = shop.updateQuality();

    const expectedItem = new Item("Aged Brie", -1, 50);

    expect(updatedItem).toEqual([expectedItem]);
  });
  test("When the aged brie sellin is less than or equal to 0 and the quality is 49, the sellin should decrease by 1 and the quality should increase by 1", () => {
    const agedBrie = new Item("Aged Brie", 0, 49);

    const shop = new Shop([agedBrie]);

    const updatedItem = shop.updateQuality();

    const expectedItem = new Item("Aged Brie", -1, 50);

    expect(updatedItem).toEqual([expectedItem]);
  });
  test("When the aged brie sellin is less than or equal to 0 and the quality is 50 or greater, the sellin should decrease by 1 and the quality should remain unchanged", () => {
    const agedBrie = new Item("Aged Brie", 0, 55);

    const shop = new Shop([agedBrie]);

    const updatedItem = shop.updateQuality();

    const expectedItem = new Item("Aged Brie", -1, 55);

    expect(updatedItem).toEqual([expectedItem]);
  });
});

describe("Sulfuras, Hand of Ragnaros", () => {
  test("When the quality is more than 0, the quality remains unchanged", () => {
    const hand = new Item("Sulfuras, Hand of Ragnaros", 0, 49);

    const shop = new Shop([hand]);

    const updatedItem = shop.updateQuality();

    const expectedItem = new Item("Sulfuras, Hand of Ragnaros", 0, 49);

    expect(updatedItem).toEqual([expectedItem]);
  });

  test("When the quality is less than or equal to 0, the quality remains unchanged", () => {
    const hand = new Item("Sulfuras, Hand of Ragnaros", 0, -1);

    const shop = new Shop([hand]);

    const updatedItem = shop.updateQuality();

    const expectedItem = new Item("Sulfuras, Hand of Ragnaros", 0, -1);

    expect(updatedItem).toEqual([expectedItem]);
  });

  test("When the quality is less than or equal to 0, the quality remains unchanged", () => {
    const hand = new Item("Sulfuras, Hand of Ragnaros", 10, 0);

    const shop = new Shop([hand]);

    const updatedItem = shop.updateQuality();

    const expectedItem = new Item("Sulfuras, Hand of Ragnaros", 10, 0);

    expect(updatedItem).toEqual([expectedItem]);
  });
});

describe("Backstage Passes", () => {
  test("When sellin is greater than 11 and quality is less than 50 for Backstage passes to a TAFKAL80ETC concert, the sellin should decrease by 1 and the quality should increase by 1", () => {
    const pass = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 45);

    const shop = new Shop([pass]);

    const updatedItem = shop.updateQuality();

    const expectedItem = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      14,
      46
    );

    expect(updatedItem).toEqual([expectedItem]);
  });

  test("When sellin is greater than 5 and less than 11 and quality is less than 50 for Backstage passes to a TAFKAL80ETC concert, the sellin should decrease by 1 and the quality should increase by 2", () => {
    const pass = new Item("Backstage passes to a TAFKAL80ETC concert", 8, 45);

    const shop = new Shop([pass]);

    const updatedItem = shop.updateQuality();

    const expectedItem = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      7,
      47
    );

    expect(updatedItem).toEqual([expectedItem]);
  });

  test("When sellin is less than 6 and quality is less than 50 for Backstage passes to a TAFKAL80ETC concert, the sellin should decrease by 1 and the quality should increase by 3", () => {
    const pass = new Item("Backstage passes to a TAFKAL80ETC concert", 4, 45);

    const shop = new Shop([pass]);

    const updatedItem = shop.updateQuality();

    const expectedItem = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      3,
      48
    );

    expect(updatedItem).toEqual([expectedItem]);
  });
});
