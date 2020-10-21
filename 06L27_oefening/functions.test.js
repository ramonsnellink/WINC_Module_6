const functions = require("./functions");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Databases Initialized..");
// const closeDatabase = () => console.log("Databases Closed..");

const nameCheck = () => console.log("Checking name..");

// Als je alleen bepaalde before of after dingen wilt doen op bepaalde tests, kun je het in describe doen.

describe("Checking names", () => {
  beforeEach(() => nameCheck());

  test("user is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("user is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

// toBe
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not.toBe
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

//toStrictEqual
// Hier kun je niet toBe gebruiken, want hij kan alleen primitive values checken. Object is reference type.

test("User should be Ramon Snellink object", () => {
  expect(functions.createUser()).toStrictEqual({ firstName: "Ramon", lastName: "Snellink" });
});

// Less than and greater than. Je hebt ook toBeLessThanOrEqual. Logic kan ook in de test zijn

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex.

test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// Arrays. toContain.

test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data.

//Promise

test("User fetched name should be Leanne Graham", () => {
  //als je geen expect doet en geen return, dan passed hij ook met een foute value.
  //Assertions checked of alle callbacks wel zijn uitgevoerd.
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toStrictEqual("Leanne Graham");
  });
});

// Async Await

test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toStrictEqual("Leanne Graham");
});
