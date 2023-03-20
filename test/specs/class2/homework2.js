const { expect } = require("chai");
const moment = require("moment/moment");

describe("user lands on correct page", () => {
  it("verify the current page", async () => {

    // launch facebook

    await browser.url("http://www.facebook.com");
    await browser.pause(10000);

    //click on create new account
    let createaccelement = await $("=Create new account");
    await createaccelement.click();
    await browser.pause(10000);

    //verify current date is displayed in the birthdate dropdown

    let selecteddayelement = await $('//select[@id="date"]//option[@selected]');
    await selecteddayelement.gettext();
    let currentday = moment().format(dd);

    let selectedmonthelement = await $(
      '//select[@id="month"]//option[@selected]'
    );
    await selectedmonthelement.gettext();
    let currentmonthaabr = moment().format(MMM);
    expect(selectedmonth, "").to.equal(currentmonthaabr);

    let selectedyearelement = await $(
      '//select[@id="year"]//option[@selected]'
    );
    await selectedyearelement.gettext();
    let currentyear = moment().format(yyyy);
  });

  it("verify the travellers on homepage", async () => {
    //launch hotels.com

    await browser.url("http://www.hotels.com");
    await browser.pause(1000);

    // travellers click
    let travellersbtnelement = await $('div[class="uitk-field has-floatedLabel-label has-icon has-placeholder"]' );
    await travellersbtnelement.click();
    await browser.pause(1000);

    // add travellers room-1

    let addtravellerselement = await $("#traveler_selector_adult_step_input-0-increase-title");
    await addtravellerselement.click();

    //click add another room

    let addrroomelement1 = await $("#id=traveler_selector_adult_step_input-0/following-sibling::button");
    await addanotherroomelement.click();

    //add travellers room-2

    let addroomelement2 = await $("#id=traveler_selector_adult_step_input-1/following-sibling::button" );
    let donebtnelement = await $('button[@id="traveler_selector_done_button"]');
    await donebtnelement.click();

    //verify the travellers are equal
let checkcount=await $('button[data-stid="open-room-picker"]');
await browser.pause(1000);
let travellerscount=checkcount.gettext();
expect(travellerscount.endswith("7travellers,2rooms",'not as expected')).to.be.true;
expect(travellerscount,'not as expected').to.equal("7travellers,2rooms");

 
});


});
