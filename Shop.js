module.exports = class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.sellIn -= 1;

        if (item.quality < 50) {
          item.quality += 1;
        }

        if (
          item.name === "Backstage passes to a TAFKAL80ETC concert" &&
          item.sellIn < 11 &&
          item.quality < 50
        ) {
          item.quality += 1;
        }

        if (item.sellIn < 6 && item.quality < 50) {
          item.quality += 1;
        }

        if (item.sellIn < 0 && item.quality < 50) {
          item.quality += 1;
        }
      }
    }
    console.log(this.items);
    return this.items;
  }
};
