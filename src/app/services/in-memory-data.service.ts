import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Library } from '../classes/Library';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const libraries: Library[] = [new Library("2-я детская библиотека Петроградского района",
                                                  "Санкт-Петербург",
                                                  "Татарский пер., 1",
                                                  "Санкт-Петербургское государственное бюджетное учреждение «Централизованная библиотечная система Петроградского района»",
                                                  "Библиотека открылась в 1955 году. Дом, в котором она располагается, возведен по проекту известнейшего петербургского архитектора Павла Мульханова в стиле модерн в 1909 году."),
                                      new Library("3-я детская библиотека Петроградского района",
                                      "Санкт-Петербург",
                                      "Татарский пер., 1",
                                      "Санкт-Петербургское государственное бюджетное учреждение «Централизованная библиотечная система Петроградского района»",
                                      "Библиотека открылась в 1955 году. Дом, в котором она располагается, возведен по проекту известнейшего петербургского архитектора Павла Мульханова в стиле модерн в 1909 году.")
                                    ];
    return { libraries };
  }

  genId(libraries: Library[]): number {
    return libraries.length > 0 ? Math.max(...libraries.map(library => library.id)) + 1 : Date.now();
  }

}
