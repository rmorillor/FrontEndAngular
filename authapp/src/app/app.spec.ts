import { AppComponent } from './app.component';

describe('Componente app', () => {

    let appComponent: AppComponent;

    beforeEach(() => {
        appComponent = new AppComponent();
    })

    it('El titulo debe ser authapp', () => {
        let myTitle = appComponent.title;

        expect(myTitle).toBe('authapp');
    });
})