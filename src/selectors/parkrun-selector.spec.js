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