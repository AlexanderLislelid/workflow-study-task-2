import { test, expect } from "@playwright/test";

test("contact form: shows success message on submit", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/contact.html");

  await page.getByRole("textbox", { name: "Your Name" }).fill("alex");
  await page
    .getByRole("textbox", { name: "Your Email" })
    .fill("alex@gmail.com");
  await page.getByRole("textbox", { name: "Subject" }).fill("hei");
  await page.getByRole("textbox", { name: "Your Message" }).fill("hei");

  await page.getByRole("button", { name: "Send" }).click();

  await expect(page.locator("body")).toContainText(
    "Thank you for your message",
  );
});
