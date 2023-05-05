const puppeteer = require("puppeteer");

const sites = [
  [
    "ecommerce-product-page",
    "https://fm-challenges-ar.netlify.app/ecommerce-product-page/dist/",
  ],
  [
    "single-page-design-portfolio",
    "https://fm-challenges-ar.netlify.app/single-page-design-portfolio/",
  ],
  [
    "huddle-landing-page",
    "https://fm-challenges-ar.netlify.app/huddle-landing-page/",
  ],
  [
    "dictionary-web-app",
    "https://fm-challenges-ar.netlify.app/dictionary-web-app/dist/",
    async (page) => {
      await page.focus('input[type="search"]');
      await page.keyboard.type("keyboard");
      await page.keyboard.press("Enter");
      await page.waitForSelector('button[title="Read keyboard loud"]');
    },
  ],
  [
    "base-apparel-coming-soon-page",
    "https://fm-challenges-ar.netlify.app/base-apparel-coming-soon/",
  ],
  [
    "interactive-rating-component",
    "https://fm-challenges-ar.netlify.app/interactive-rating-component/",
  ],
  [
    "single-price-grid-component",
    "https://fm-challenges-ar.netlify.app/single-price-grid-component/",
  ],
  ["news-homepage", "https://fm-challenges-ar.netlify.app/news-homepage/"],
  [
    "product-preview-card-component",
    "https://fm-challenges-ar.netlify.app/product-preview-card-component/",
  ],
  [
    "skilled-elearning-landing-page",
    "https://fm-challenges-ar.netlify.app/skilled-elearning-landing-page/",
  ],
  [
    "devjobs-web-app",
    "https://fm-challenges-ar.netlify.app/devjobs-web-app/dist/",
  ],
  [
    "expenses-chart-component",
    "https://fm-challenges-ar.netlify.app/expenses-chart-component/dist/",
    async (page) => {
      await page.waitForSelector("canvas");
    },
  ],
  [
    "github-user-search-app",
    "https://fm-challenges-ar.netlify.app/github-user-search-app/",
  ],
  [
    "faq-accordion-card",
    "https://fm-challenges-ar.netlify.app/faq-accordion-card/",
  ],
  [
    "3-column-preview-card-component",
    "https://fm-challenges-ar.netlify.app/preview-card-component/",
  ],
  [
    "ping-single-column-coming-soon-page",
    "https://fm-challenges-ar.netlify.app/ping-coming-soon-page/",
  ],
  [
    "stats-preview-card-component",
    "https://fm-challenges-ar.netlify.app/stats-preview-card/",
  ],
  [
    "advice-generator-app",
    "https://fm-challenges-ar.netlify.app/advice-generator/",
  ],
  [
    "order-summary-component",
    "https://fm-challenges-ar.netlify.app/order-summary-component/",
  ],
  [
    "equalizer-landing-page",
    "https://fm-challenges-ar.netlify.app/equalizer-landing-page/",
  ],
  [
    "nft-preview-card-component",
    "https://fm-challenges-ar.netlify.app/nft-preview-card-component/",
  ],
  [
    "qr-code-component",
    "https://fm-challenges-ar.netlify.app/qr-code-component/",
  ],
  ["leo-club-weilamrhein", "https://leo-club-weilamrhein.de"],
  [
    "vitra-vcs",
    "https://vcs.vitra.com",
    async (page) => {
      const button = await (
        await page.evaluateHandle(() =>
          document
            .querySelector("#usercentrics-root")
            .shadowRoot.querySelector(
              "#uc-center-container > div.sc-cCjUiG.gHlwwJ > div > div.sc-lllmON.fjvxqY > div > button:nth-child(2)"
            )
        )
      ).asElement();

      await button.click();
    },
  ],
  [
    "lions-club-weilamrhein",
    "https://weil-am-rhein.lions.de/aktuell",
    async (page) => {
      await page.waitForSelector("button.submit-button");
      await page.click("button.submit-button");
    },
  ],
  ["zaehringer-huette", "https://zaehringer-huette.de/"],
  ["instituto-del-ambiente", "https://institutodelambiente.edu.do/"],
  ["litebox", "https://andreasremdt.github.io/litebox/"],
  ["simple-translator", "https://simple-translator.netlify.app/tutorial/02/"],
  [
    "cawemo",
    "https://cawemo.com/",
    async (page) => {
      await page.waitForSelector("#hs-eu-decline-button");
      await page.click("#hs-eu-decline-button");
    },
  ],
  ["grocerly", "https://grocerly.netlify.app/"],
  ["collab4", "https://collab4.com/login"],
  [
    "databricks",
    "https://www.databricks.com/",
    async (page) => {
      await page.click("#onetrust-reject-all-handler");
      await page.waitForTimeout(500);
    },
  ],
  [
    "elasticswap",
    "https://elasticswap.org/",
    async (page) => {
      await page.waitForSelector("button");
    },
  ],
  ["dailyai", "https://dailyai.io/"],
  ["deployment-descriptors-editor", "http://localhost:3000"],
];

(async () => {
  const counter = {
    success: 0,
    fail: 0,
  };

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--hide-scrollbars"],
  });
  console.log("Launched browser");

  const page = await browser.newPage();

  await page.setViewport({ width: 1280, height: 860 });
  console.log("Set viewport size to 1280x720");

  for (const site of sites) {
    const [name, url, instructions] = site;

    try {
      console.log(`Visiting "${name}"`);
      await page.goto(url, { waitUntil: "networkidle0" });

      if (instructions) {
        await instructions(page);
      }

      await page.screenshot({ path: __dirname + `/screenshots/${name}.png` });
      console.log(`\x1b[32mGenerated screenshot for "${name}"\x1b[0m\n`);

      counter.success++;
    } catch (ex) {
      console.log(
        `\x1b[31mError while trying to generate screenshot for "${name}":\x1b[0m`,
        ex.message
      );

      counter.fail++;
    }
  }

  await browser.close();
  const failed =
    counter.fail > 0
      ? `${counter.fail} screenshots could not be generated.`
      : "";

  console.log(`✅ Finished generating ${counter.success} screenshots.`, failed);
})();
