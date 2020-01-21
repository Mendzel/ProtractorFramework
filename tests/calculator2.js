let homepage = require('../templates/basicCalculatorTest')

describe ('Calculator test', function(){

    it('addition test', function(){
        homepage.get('http://juliemr.github.io/protractor-demo/')
        homepage.enterFirstNumber('2');
        homepage.enterSecondNumber('4');
        homepage.clickGo();
        homepage.verifyResult('6');


        browser.sleep(2000);
    })
    it('substraction test', function(){
        homepage.get('http://juliemr.github.io/protractor-demo/')
        homepage.enterFirstNumber('3');
        homepage.enterSecondNumber('6');
        homepage.clickGo();
        homepage.verifyResult('9');


        browser.sleep(2000);
    })
    it('error test', function(){
        homepage.get('http://juliemr.github.io/protractor-demo/')
        homepage.enterFirstNumber('100');
        homepage.enterSecondNumber('4');
        homepage.clickGo();
        homepage.verifyResult('6');


        browser.sleep(2000);
    })
})