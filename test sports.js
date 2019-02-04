const assert = require('assert');

describe('test site sports.ru', () => {
    it('test title', () => {
        browser.url('https://www.sports.ru');
        let title = browser.getTitle();
        assert.equal(title, "Спорт: футбол, хоккей, баскетбол, теннис, бокс, Формула-1 — все новости спорта на Sports.ru");

        let outerHTML = $(".svg-icon").getHTML();
        console.log(outerHTML);
    });

    it("test new page Fantasy", () => {
        browser.url('https://www.sports.ru');
        let fantasy = $(".main-menu__item-fantasy .main-menu__link");
        fantasy.click(".main-menu__item-fantasy .cmain-menu__link");
        let title = browser.getTitle();
        assert.equal(title, "Фэнтези - Sports.ru");
    });

    it("test link of yourTeam", () => {
        let teamLink = $(".two-column-table:first-of-type tr:nth-of-type(2) td:nth-of-type(3)");
        teamLink.click();
        let captionText = $(".section-about__title").getText();
        assert.equal(captionText, "Обменивай заработанные в игре очки на мили Tinkoff ALL Airlines");
        let mainPage = $(".header__wrap nav a:first-of-type");
        mainPage.click();
    });

    it("test select sport", () => {
        let selectSport = $(".users-news__select option:nth-of-type(2)");
        let isDisplayed = selectSport.isDisplayed();
        assert.equal(isDisplayed, false);
        browser.pause(4000);
    });

    it("test current url", () => {
        let vkLink = $(".color-link_vk");
        vkLink.click();
        let currentUrl = browser.getUrl();
        assert.equal(currentUrl, "https://vk.com/sportsru");
    });

    it("test color of current page", () => {
        let mainLink = $(".main-menu_type_first  .main-menu__list > li:first-of-type > a");
        let color = mainLink.getCSSProperty("color");
        assert.equal(color.value, "rgb(0, 170, 50)");
    });

    it("test availability of header", ()=> {
        let mainHeader = $(".user-panel__dynamic-content-wrapper");
        let isExisting = mainHeader.isExisting();
        assert.equal(isExisting, true);
    });
});