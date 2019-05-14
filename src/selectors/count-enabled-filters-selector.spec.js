import selectCount from './count-enabled-filters-selector';

describe("No filters specified", () => {
  it("Should return a count of zero", () => {
    const filters = {};

    const actual = selectCount({ filters });

    expect(actual).toEqual(0);
  });
});

describe("No filters selected", () => {
  it("Should return a count of zero", () => {
    const filters = {
      "features": {},
      "terrain": []
    };

    const actual = selectCount({ filters });

    expect(actual).toEqual(0);
  });
});


describe("Feature filters selected", () => {
  it("Should return a count", () => {
    const filters = {
      "features": {
        "wheelchairFriendly": true,
        "buggyFriendly": true,
        "carParking": false,
        "cycleParking": false
      },
      "terrain": []
    };

    const actual = selectCount({ filters });

    expect(actual).toEqual(2);
  });
});

describe("Terrain filters selected", () => {
  it("Should return a count", () => {
    const filters = {
      "features": {},
      "terrain": ["A", "B", "C"]
    };

    const actual = selectCount({ filters });

    expect(actual).toEqual(3);
  });
});

describe("One of each type of filter selected", () => {
  it("Should return a count", () => {
    const filters = {
      "features": { "feature1": true },
      "terrain": ["A"]
    };

    const actual = selectCount({ filters });

    expect(actual).toEqual(2);
  });
});