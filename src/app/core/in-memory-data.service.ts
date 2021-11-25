import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IEmployee } from './interfaces/employee';

import { ILibrary } from './interfaces/Library';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const libraries: ILibrary[] = [
                                    {
                                      id: 1,
                                      name: "2-я детская библиотека Петроградского района",
                                      locale: "Санкт-Петербург",
                                      address: "Татарский пер., 1",
                                      organizationName: "Санкт-Петербургское государственное бюджетное учреждение «Централизованная библиотечная система Петроградского района»",
                                      description: "Библиотека открылась в 1955 году. Дом, в котором она располагается, возведен по проекту известнейшего петербургского архитектора Павла Мульханова в стиле модерн в 1909 году.",
                                    },
                                    {
                                      id: 2,
                                      name: "3-я детская библиотека Петроградского района",
                                      locale: "Санкт-Петербург",
                                      address: "Татарский пер., 1",
                                      organizationName: "Санкт-Петербургское государственное бюджетное учреждение «Централизованная библиотечная система Петроградского района»",
                                      description: "Библиотека открылась в 1955 году. Дом, в котором она располагается, возведен по проекту известнейшего петербургского архитектора Павла Мульханова в стиле модерн в 1909 году.",
                                    }
                                  ];
  const employees: IEmployee[] = [
                                    {
                                      id: 11,
                                      idLibrary: 1,
                                      firstName: 'Иван',
                                      lastName: 'Иванов',
                                      position: 'Библиотекарь',
                                      address: 'г.Новосибирск, ул.Ленина, 3а',
                                      startedWork: '12.12.2012'
                                    },
                                    {
                                      id: 22,
                                      idLibrary: 2,
                                      firstName: 'Иван',
                                      lastName: 'Иванов',
                                      position: 'Библиотекарь',
                                      address: 'г.Новосибирск, ул.Ленина, 3а',
                                      startedWork: '12.12.2012'
                                    }
                                ]
    return { libraries, employees };
  }

  genIdLibraries(libraries: ILibrary[]): number {
    return libraries.length > 0 ? Math.max(...libraries.map(library => library.id)) + 1 : 1;
  }

  genIdEmployees(employees: IEmployee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 1;
  }

}
