import { describe, it, expect, beforeEach } from "vitest";
import { getFavourites } from "../../js/utils/favourites.js";

const FAVOURITES_KEY = "favourites";

describe("getFavourites", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("should return empty array if localStorage is empty", () => {
    const result = getFavourites();
    expect(result).toEqual([]);
  });
  it("should return favourites from localStorage", () => {
    const favourites = [
      { id: 1, title: "Article 1" },
      { id: 2, title: "Article 2" },
    ];
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
    const result = getFavourites();
    expect(result).toEqual(favourites);
  });
});
