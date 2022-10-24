import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contractList: Contract[] = [
    {
      id: 1,
      startDate: '2020-12-12',
      endDate: '2020-12-15',
      deposit: 100000,
      total: 1000000,
      employee: 'Hồ Trung Dân',
      customer: 'Hồ Trung Thuyên',
      facility: 'Villa Beach Front',
    },
    {
      id: 2,
      startDate: '2020-12-12',
      endDate: '2020-12-15',
      deposit: 200000,
      total: 1000000,
      employee: 'Hồ Trung Dân',
      customer: 'Đặng Trung Dân',
      facility: 'Villa No Beach Front',
    },
    {
      id: 3,
      startDate: '2020-12-12',
      endDate: '2020-12-15',
      deposit: 300000,
      total: 1000000,
      employee: 'Hồ Trung Dân',
      customer: 'Đặng Trung Dân',
      facility: 'Room Twin 01',
    },
    {
      id: 4,
      startDate: '2020-12-12',
      endDate: '2020-12-15',
      deposit: 110000,
      total: 1000000,
      employee: 'Huỳnh Trung Dân',
      customer: 'Hồ Dân',
      facility: 'Villa No Beach Front',
    },
    {
      id: 5,
      startDate: '2020-12-12',
      endDate: '2020-12-15',
      deposit: 130000,
      total: 1000000,
      employee: 'Huỳnh Trung Dân',
      customer: 'Hồ Trung Tiên',
      facility: 'House Princess 02',
    },
    {
      id: 5,
      startDate: '2020-12-12',
      endDate: '2020-12-15',
      deposit: 150000,
      total: 1000000,
      employee: 'Hồ Dân',
      customer: 'Hồ Tiên Dân',
      facility: 'House Princess 03',
    },
    {
      id: 6,
      startDate: '2020-12-12',
      endDate: '2020-12-15',
      deposit: 120000,
      total: 1000000,
      employee: 'Huỳnh Trung Dân',
      customer: 'Hồ Trung Tiên',
      facility: 'House Princess 04',
    },
  ];

  constructor() {

  }

  getAll(): Contract[] {
    return this.contractList;
  }
}
