const expect = require('chai').expect;
const TestsSports = require('../../testsObjects/TestsSports');


describe('test main title of sports.ru', () => {

    it('test title', () => {
        TestsSports.open();
        assert.equal(browser.getTitle(), "Спорт: футбол, хоккей, баскетбол, теннис, бокс, Формула-1 — все новости спорта на Sports.ru");
    });

    it("test to enter profile", () => {
        TestsSports.loginMyProfile();
    });

    // it("test of date of registration in profile", () => {
    //     assert.equal(TestsSports.getDateOfRegistration(), "10 февраля");
    //     TestsSports.goToMainPage;
    // });

    it("test width of main logo", () => {
        assert.equal(TestsSports.widthOfMainLogo, 36);
    });

    it("test existing of main-menu", () => {
        TestsSports.isExistingMainManu.should.be.equal(true);
    });

    it("test text of caption on main page", () => {
        assert.equal(TestsSports.textOfCaption, "ВИДЕО ДНЯ");
    });     

    it("test of select sports team", () => {
        TestsSports.selectSports.click();
        assert.equal(TestsSports.footballSportIsExisting, true);
    });

    it("test existing of header", ()=> {
        assert.equal(TestsSports.isExistingMainHeader, true);
    });

    it("test new page Fantasy", () => {
        TestsSports.toVisitFantasyPage;
        assert.equal(browser.getTitle(), "Фэнтези - Sports.ru");
    });

    it("test VK link", () => {
        TestsSports.toUseVkLink;
    });

    it("test link of yourTeam", () => {
        TestsSports.toUseAssembleTeamLink;
        assert.equal(TestsSports.getTextOfCaptionNewLink, "Обменивай заработанные в игре очки на мили Tinkoff ALL Airlines");
        TestsSports.backToMainPage;
    }); 
});