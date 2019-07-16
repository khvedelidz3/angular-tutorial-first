import { MenuComponent } from "./menu.component";

describe('Testing menu component', () => {
    let menuComponent;

    beforeEach(() => {
        menuComponent = new MenuComponent();
    })

    it('Default value should be false', () => {
        const isOpen = menuComponent.isOpen;
        expect(isOpen).toBe(false);
    })

    it('Method show menu should change isOpen to true', () => {
        menuComponent.showMenu();
        const isOpen = menuComponent.isOpen;
        expect(isOpen).toBe(true);
    })

    it('Method hide menu should change isOpen to false', () => {
        menuComponent.hideMenu();
        const isOpen = menuComponent.isOpen;
        expect(isOpen).toBe(false);
    })
});