const Page = require('./Page');

class TestSports extends Page {
    open() {
        super.open('');
    }

    get widthOfMainLogo() {
        return $(".svg-icon").getElementSize("width");
    }

    get isExistingMainManu() {
        return $(".main-menu_type_first").isExisting();
    }   

    get textOfCaption() {
        return $(".material-list__item_padding-top_20 h3").getText();
    }

    get selectSports() {
        return $(".users-news__select");
    }

    get footballSportIsExisting() {
        return $(".users-news__select option:nth-of-type(2)").isExisting();
    }

    get isExistingMainHeader() {
        return $(".user-panel__dynamic-content-wrapper").isExisting();
    }

    get toVisitFantasyPage() {
        return $(".main-menu__item-fantasy .main-menu__link").click();
    }

    get toUseVkLink() {
        return $(".main-footer__lists-line dl:nth-of-type(4)").$$("dd")[1].$("a").click();
    }

    get toUseAssembleTeamLink() {
        return $(".two-column-table:first-of-type tr:nth-of-type(2) td:nth-of-type(3)").click();
    }

    get getTextOfCaptionNewLink() {
        return $(".section-about__title").getText();
    }

    get backToMainPage() {
        return $(".header__wrap nav a:first-of-type").click();
    }

    get goToMainPage() {
        return $(".main-menu_type_first .main-menu__list:first-of-type li:first-of-type .main-menu__link").click();
    }

    get loginMyProfile() {
        return function() {
            let enterLink = $(".user-panel__menu-block li:first-of-type .data-track-click").click();
            let emailInput = $(".auth__login .auth__form-row .auth__login-input_email").setValue("ekaterinin_lesha@mail.ru");
            let passwordInput = $(".auth__form-row .auth__login-input[type='password']").setValue("testForTest");
            let loginInput = $(".auth__form-row .piwikTrackContent ").click();
            browser.pause(5000);
        }
    }

    // get getDateOfRegistration() {
    //     return function() {
    //         let userProfile = $(".user-panel__dynamic-content-wrapper ul[class^='user-panel__menu-block '] .user-panel__menu-block-user-item").click();
    //         let dateOfRegistration = $(".profile-table tbody tr:first-of-type td").getText();    
    //         return dateOfRegistration;
    //     }
    // }
}

module.exports = new TestSports();