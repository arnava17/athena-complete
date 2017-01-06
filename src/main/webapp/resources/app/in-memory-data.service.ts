import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let TValues = [
            { testName: 't1', functionalArea: 'f1', status: 'pass', startTime: '123456', endTime: '123456' },
            { testName: 't2', functionalArea: 'f2', status: 'pass', startTime: '123456', endTime: '123456' },
            { testName: 't3', functionalArea: 'f3', status: 'pass', startTime: '123456', endTime: '123456' },
            { testName: 't4', functionalArea: 'f4', status: 'pass', startTime: '123456', endTime: '123456' },
            { testName: 't5', functionalArea: 'f5', status: 'pass', startTime: '123456', endTime: '123456' },
        ];
    return {TValues};
  }
}