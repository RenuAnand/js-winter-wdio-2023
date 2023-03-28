const { expect } = require("chai");

describe('launch hotel',()=>{

it('verify reward form is empty and continue button is disabled',async()=>{
//launch hotel
await browser.url('https://www.hotel.com/');
await browser.scrollintoview(false);
await browser.pause(1000);

//click on hotel.com rewards
 let hotelrewardclick=await $('=Learn about Hotels.com Rewards').click();
 await browser.pause(1000);

 //verify hotels rewards opened in new window
let ishotelrewarddisplayed =await hotelrewardclick.isdisplayed();
expect(ishotelrewarddisplayed,'hotel reward is not displayed').to.be.true;
await browser.pause(1000);

//click on join
let clickjoin=await $('=Join Now').click();
await browser.pause(1000);

//blank page
let blankpage =await $('form[name="signupForm"]');
expect( blankpage,' as not expected').to.be.true;

//verify continue button is not enabled
let continuebuttonelement=await$('=Continue');
iscontinuebuttonenabled=await continuebuttonelement.isenabled()
expect(iscontinuebuttonenabled,'continue button is not enabled').to.be.true;


})




it('verify reward form is empty and continue button is disabled',async()=>{

// launch hotel.com
    await browser.url('https://www.hotel.com/');
    await browser.pause(1000);

   // click on date section

clickdatebtn=await $('button[@data-stid="open-date-picker"]').click();
await browser.pause(1000);
 
//if not already,go to current month

let selectedmonth=await $('button[@data-stid="date-picker-paging"]').click();
currentmonth=moment().format(MMM);
expect(currentmonth,'currentmonth is not as expected').to.equal(selectedmonth);
await browser.pause(1000);

//verify all past dates are disabled
let pastdates=await $('button[@class="uitk-date-picker-day is-disabled"]');
ispastdatedisabled= await pastdates.isdisabled();
expect(ispastdatedisabled,'past date is not disabled').to.be.true;
await browser.pause(1000);

})



})