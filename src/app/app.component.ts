import { Component } from '@angular/core';
import {Library} from "./Classes/Library";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'libraries-angular-test-app';

  librariesArray: Library[] = [
                                new Library("2-я детская библиотека Петроградского района",
                                  "Санкт-Петербург",
                                  "Татарский пер., 1",
                                  "Санкт-Петербургское государственное бюджетное учреждение «Централизованная библиотечная система Петроградского района»",
                                  "Библиотека открылась в 1955 году. Дом, в котором она располагается, возведен по проекту известнейшего петербургского архитектора Павла Мульханова в стиле модерн в 1909 году."
                                  )
  ];

  /*Modal*/
  newLibrary: Library = new Library("", "", "", "", "");

  addLibrary() {
    this.librariesArray.push(new Library(this.newLibrary.name, this.newLibrary.locale, this.newLibrary.address, this.newLibrary.organizationName, this.newLibrary.description));

    console.log(this.librariesArray)
  }

}
