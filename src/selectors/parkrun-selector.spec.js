import selectParkruns from './parkrun-selector';

describe("No filters", () => {
  it("Should return all parkruns", () => {
    const parkruns = [{ id: 1 }, { id: 2 }];
    const filters = {};

    const actual = selectParkruns({ parkruns, filters });

    expect(actual).toEqual(parkruns);
  });
});

describe("Wheelchair friendly filter", () => {
  it("Should return only Wheelchair friendly parkruns", () => {
    const parkruns = [
      { id: 1, features: { wheelchairFriendly: true } },
      { id: 2, features: { wheelchairFriendly: false } },
      { id: 3, features: { wheelchairFriendly: undefined } }
    ];
    const filters = { wheelchairFriendly: true };

    const actual = selectParkruns({ parkruns, filters });

    expect(actual).toEqual([parkruns[0]]);
  });
});

describe("Buggy friendly filter", () => {
  it("Should return only buggy friendly parkruns", () => {
    const parkruns = [
      { id: 1, features: { buggyFriendly: true } },
      { id: 2, features: { buggyFriendly: false } },
      { id: 3, features: { buggyFriendly: undefined } }
    ];
    const filters = { buggyFriendly: true };

    const actual = selectParkruns({ parkruns, filters });

    expect(actual).toEqual([parkruns[0]]);
  });
});

describe("Any property filter", () => {
  it("Should return only selected filter", () => {
    const parkruns = [
      { id: 1, features: { someFilter: true } },
      { id: 2, features: { someFilter: false } },
      { id: 3, features: { someFilter: undefined } }
    ];
    const filters = { someFilter: true };

    const actual = selectParkruns({ parkruns, filters });

    expect(actual).toEqual([parkruns[0]]);
  });
});

describe("Multiple filters", () => {
  it("Should return only filters selected", () => {
    const parkruns = [
      { id: 1, features: { filter1: true } },
      { id: 2, features: { filter1: true, filter2: true } },
      { id: 3, features: { filter2: true } },
      { id: 4, features: { filter3: true } },
    ];
    const filters = { filter1: true, filter2: true };

    const actual = selectParkruns({ parkruns, filters });

    expect(actual).toEqual([parkruns[1]]);
  });
});