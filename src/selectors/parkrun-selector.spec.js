import selectParkruns from './parkrun-selector';

describe("No filters set", () => {
  it("Should return all parkruns", () => {
    const parkruns = [{ id: 1 }, { id: 2 }];
    const filters = {};

    const actual = selectParkruns({ parkruns, filters });

    expect(actual).toEqual(parkruns);
  });
});

describe("No feature filters or terrain filters set", () => {
  it("Should return all parkruns", () => {
    const parkruns = [{ id: 1 }, { id: 2 }];
    const filters = { features: {}, course: { terrain: [] } };

    const actual = selectParkruns({ parkruns, filters });

    expect(actual).toEqual(parkruns);
  });
});

describe("Wheelchair friendly feature filter", () => {
  it("Should return only Wheelchair friendly parkruns", () => {
    const parkruns = [
      { id: 1, features: { wheelchairFriendly: true } },
      { id: 2, features: { wheelchairFriendly: false } },
      { id: 3, features: { wheelchairFriendly: undefined } }
    ];
    const filters = { features: { wheelchairFriendly: true } };

    const actual = selectParkruns({ parkruns, filters });

    expect(actual).toEqual([parkruns[0]]);
  });
});

describe("Buggy friendly feature filter", () => {
  it("Should return only buggy friendly parkruns", () => {
    const parkruns = [
      { id: 1, features: { buggyFriendly: true } },
      { id: 2, features: { buggyFriendly: false } },
      { id: 3, features: { buggyFriendly: undefined } }
    ];
    const filters = { features: { buggyFriendly: true } };

    const actual = selectParkruns({ parkruns, filters });

    expect(actual).toEqual([parkruns[0]]);
  });
});

describe("Any property feature filter", () => {
  it("Should return only selected filter", () => {
    const parkruns = [
      { id: 1, features: { someFilter: true } },
      { id: 2, features: { someFilter: false } },
      { id: 3, features: { someFilter: undefined } }
    ];
    const filters = { features: { someFilter: true } };

    const actual = selectParkruns({ parkruns, filters });

    expect(actual).toEqual([parkruns[0]]);
  });
});

describe("Multiple feature filters", () => {
  it("Should return only filters selected", () => {
    const parkruns = [
      { id: 1, features: { filter1: true } },
      { id: 2, features: { filter1: true, filter2: true } },
      { id: 3, features: { filter2: true } },
      { id: 4, features: { filter3: true } },
    ];
    const filters = { features: { filter1: true, filter2: true } };

    const actual = selectParkruns({ parkruns, filters });

    expect(actual).toEqual([parkruns[1]]);
  });
});

describe("Single Terrain filters", () => {
  it("Should return only filters selected terrain", () => {
    const parkruns = [
      { id: 1, course: { terrain: ["Road"] } },
      { id: 2, course: { terrain: ["Grass"] } },
      { id: 3, course: { terrain: [] } },
    ];

    const filters = { terrain: ["Road"] };

    const actual = selectParkruns({ parkruns, filters });

    expect(actual).toEqual([parkruns[0]]);
  });
});

describe("Multiple Terrain filters", () => {
  it("Should return only filters selected terrains", () => {
    const parkruns = [
      { id: 1, course: { terrain: ["Road"] } },
      { id: 2, course: { terrain: ["Grass"] } },
      { id: 3, course: { terrain: ["Road", "Grass"] } },
    ];

    const filters = { terrain: ["Road", "Grass"] };

    const actual = selectParkruns({ parkruns, filters });

    expect(actual).toEqual([parkruns[2]]);
  });
});