// @vitest-environment jsdom

import { describe, it, expect, beforeEach } from "vitest";
import {
  getFavourites,
  isFavourite,
  toggleFavourite,
} from "../../js/utils/favourites.js";

const KEY = "favourites";

describe("favourites utils", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("getFavourites: should return [] when localStorage is empty", () => {
    expect(getFavourites()).toEqual([]);
  });

  it("getFavourites: should return stored favourites", () => {
    const favs = [{ id: 1, title: "A" }];
    localStorage.setItem(KEY, JSON.stringify(favs));
    expect(getFavourites()).toEqual(favs);
  });

  it("isFavourite: should return true when id exists", () => {
    localStorage.setItem(KEY, JSON.stringify([{ id: 1 }]));
    expect(isFavourite(1)).toBe(true);
  });

  it("isFavourite: should return false when id does not exist", () => {
    localStorage.setItem(KEY, JSON.stringify([{ id: 1 }]));
    expect(isFavourite(2)).toBe(false);
  });

  it("toggleFavourite: should add article when it is not a favourite", () => {
    const article = { id: 1, title: "A" };
    toggleFavourite(1, article);
    expect(getFavourites()).toEqual([article]);
  });

  it("toggleFavourite: should remove article when it is already a favourite", () => {
    const article = { id: 1, title: "A" };
    localStorage.setItem(KEY, JSON.stringify([article]));
    toggleFavourite(1, article);
    expect(getFavourites()).toEqual([]);
  });
});
