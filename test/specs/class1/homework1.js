

const { expect } = require("chai");
const{describe, it } = require("mocha");

//launch http://www.accuweather.com/
describe('Lanuch the Page', () => {

    it('Verify we can launch the page', async () => {
        await browser.url('https://www.accuweather.com');
        await browser.pause(10000);


//verify current-temp is in betwen 45  and 55

const currenttempelement=  await $(span['class=recent-location-temp']);
let currenttempelementtext=  await currenttempelement.gettext();
 currenttempelementtext=  currenttempelementtext.trim();
 let currenttemp=currenttemptext.substring(0,currenttemptext.length-1);
currenttemp=number(currenttemp>=45 && currenttem<=50);

expect(number(currenttemp>=45 && currenttem<=50),'current temp is not beetween 45 & 50').to.be.true;




    })


//launch http:www.facebook.com/
it.only('Verify we can launch the page', async () => {
    await browser.url('https://www.facebook.com');
    await browser.pause(10000);

    // click log in button
    let loginbutton=await $('button[value=1]');
    await loginbutton.click();
    await browser.pause(10000);


    // verify error msg is displayed
    let errormsgelement= await $(div["class=_9ay7"]);
    let iserrormsgdisplayed=await errormsg.isdisplayed;
    expect(iserrormsgdisplayed,'error msg is not displayed').to.be.true;

})



//lauch http:www.facebook.com/
it('veryfy  we can launch page',async()=>{

    await browser.url('http:www.facebook.com'); 
    await browser.pause(10000);


    //click on messenger
   let messengerelement=await $[body('class*=chrome')]; 
   await messengerelement.click();
   await browser.pause(10000);


   //verify keep me singned in checkbox is not selected
   let signedbtn=await $(label["class=hrb-checkbox"]);
  let issignedbtnselected=await signedbtn.isselected();
  expect(issignedbtnselected,'keep me signed btn is selected').to.be.true;


  //click login button
  let loginbuttonelement=await $(button['data-testid=royal_login_button']);
  await loginbuttonelement.click();
  await browser.pause(10000);


 // verify find your account and log in is displayed
  let findaccandloginbtn=await $['=find and log in '];
  let isaccandloginbtndisplayed= await findaccandloginbtn.isdisplayed();
  expect(isaccandloginbtndisplayed,'acc and log in btn is not displayed').to.be.true;


//click keep me signed in checkbox
let signedincheckboxbtn=await $(label['class=hrb-checkbox']);
await signedinchekbox.click();
await browser.pause(10000);


// verify keep me signed in checkbox is selected

let signedincheckboxelement=await $(label['class=hrb-checkbox']);
let issignedincheckboxselected=signedincheckboxelement.isselected();
expect(issignedincheckboxselected,'signed in checkbox is not selected ').to.be.true;
await browser.pause(1000);

})




})

