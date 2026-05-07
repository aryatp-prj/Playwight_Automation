const {test,expect} = require("@playwright/test");

test("@api get request-fetch user", async({request})=>{
    const response = await request.get("https://jsonplaceholder.typicode.com/users");
    await expect(response.ok()).toBeTruthy();
    const body = await response.json();
    await expect(body.length).toBeGreaterThan(0);
    console.log(body[0].address);

})

test("@api post request - create user", async ({ request }) => {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/users",
    {
      data: {
        name: "arya",
        username: "tyhh",
        email: "uujbjkj"
      }
    }
  );

  // ✅ Status check
  await expect(response.status()).toBe(201);

  // ✅ Get JSON body
  const responseBody = await response.json();

  // ✅ Assertions
  await expect(responseBody.name).toBe("arya");
  await expect(responseBody.username).toBe("tyhh");

  console.log(responseBody);
});