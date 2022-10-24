import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  get customerList(): Array<Customer> {
    return this._customerList;
  }

  set customerList(value: Array<Customer>) {
    this._customerList = value;
  }

  // tslint:disable-next-line:variable-name
  private _customerList: Array<Customer>;

  constructor() {
    this._customerList = [
      {
        id: 1,
        name: 'Hồ Trung Thuyên',
        birthday: '1991-04-22',
        gender: true,
        idCard: '111111111111',
        phone: '0389991835',
        email: 'thuyentrung@gmail.com',
        address: 'Đà Nẵng',
        customerType: 'Member'
      },
      {
        id: 2,
        name: 'Hồ Trung Dân',
        birthday: '1991-04-22',
        gender: true,
        idCard: '111111111111',
        phone: '0389991835',
        email: 'dantrung@gmail.com',
        address: 'Đà Nẵng',
        customerType: 'Member'
      },
      {
        id: 3,
        name: 'Huỳnh Trung Dân',
        birthday: '1991-04-22',
        gender: true,
        idCard: '111111111111',
        phone: '0389991835',
        email: 'dantrung@gmail.com',
        address: 'Đà Nẵng',
        customerType: 'Member'
      },
      {
        id: 4,
        name: 'Hồ Trung Tiên',
        birthday: '1991-04-22',
        gender: true,
        idCard: '111111111111',
        phone: '0389991835',
        email: 'dantrung@gmail.com',
        address: 'Đà Nẵng',
        customerType: 'Member'
      },
      {
        id: 5,
        name: 'Hồ Tiên Dân',
        birthday: '1991-04-22',
        gender: true,
        idCard: '111111111111',
        phone: '0389991835',
        email: 'dantrung@gmail.com',
        address: 'Đà Nẵng',
        customerType: 'Member'
      },
      {
        id: 6,
        name: 'Hồ Dân',
        birthday: '1991-04-22',
        gender: true,
        idCard: '111111111111',
        phone: '0389991835',
        email: 'dantrung@gmail.com',
        address: 'Đà Nẵng',
        customerType: 'Member'
      },
      {
        id: 7,
        name: 'Đặng Trung Dân',
        birthday: '1991-04-22',
        gender: true,
        idCard: '111111111111',
        phone: '0389991835',
        email: 'dantrung@gmail.com',
        address: 'Đà Nẵng',
        customerType: 'Member'
      },
    ];
  }


}
