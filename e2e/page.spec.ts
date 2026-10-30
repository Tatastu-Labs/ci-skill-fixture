import { expect, test } from "@playwright/test"
import { readFileSync } from "node:fs"
test("the page shows its heading", async ({ page }) => {
  await page.setContent(readFileSync("public/index.html", "utf8"))
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Fixture")
})
