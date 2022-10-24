import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  // tslint:disable-next-line:variable-name
  private _facilities: Array<Facility>;

  get facilities(): Array<Facility> {
    return this._facilities;
  }

  constructor() {
    this._facilities = new Array<Facility>(
      {
        id: 1,
        name: 'Villa Beach Front',
        img: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/06/John-Boutique3.jpg',
        leasedArea: 25000,
        rentalCosts: 10000000,
        maxPerson: 10,
        rentType: 3,
        facilityType: 1,
        description: 'Có hồ bơi',
        room: 'vip',
        floor: 4,
        areaPool: 500,
        free: ''
      }, {
        id: 2,
        name: 'House Princess',
        // tslint:disable-next-line:max-line-length
        img: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/06/khu-nghi-duong-intercontinental-danang-sun-peninsula-vntrip1-e1529553680391.jpg',
        leasedArea: 14000,
        rentalCosts: 10000000,
        maxPerson: 10,
        rentType: 3,
        facilityType: 1,
        description: 'Có hồ bơi',
        room: 'vip',
        floor: 4,
        areaPool: 500,
        free: ''
      }, {
        id: 3,
        name: 'Room Twin 01',
        // tslint:disable-next-line:max-line-length
        img: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/06/Pullman-Danang-Beach-Resort-vntrip1-e1529555929861.jpg',
        leasedArea: 5000,
        rentalCosts: 10000000,
        maxPerson: 10,
        rentType: 3,
        facilityType: 1,
        description: 'Có hồ bơi',
        room: 'vip',
        floor: 4,
        areaPool: 500,
        free: ''
      }, {
        id: 4,
        name: 'Villa No Beach Front',
        // tslint:disable-next-line:max-line-length
        img: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/06/furama-resort-da-nang-vntrip2-e1529555348838.jpg',
        leasedArea: 22000,
        rentalCosts: 10000000,
        maxPerson: 10,
        rentType: 3,
        facilityType: 1,
        description: 'Có hồ bơi',
        room: 'vip',
        floor: 4,
        areaPool: 500,
        free: ''
      }, {
        id: 5,
        name: 'House Princess 02',
        // tslint:disable-next-line:max-line-length
        img: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/06/Holiday-Beach-Danang-Hotel-Resort-vntrip2-e1529555452681.jpg',
        leasedArea: 10000,
        rentalCosts: 10000000,
        maxPerson: 10,
        rentType: 3,
        facilityType: 1,
        description: 'Có hồ bơi',
        room: 'vip',
        floor: 4,
        areaPool: 500,
        free: ''
      }, {
        id: 6,
        name: 'Room Twin 02',
        // tslint:disable-next-line:max-line-length
        img: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/06/naman-retreat-resort-da-nang-vntrip1-e1529554055411.jpg',
        leasedArea: 3000,
        rentalCosts: 10000000,
        maxPerson: 10,
        rentType: 3,
        facilityType: 1,
        description: 'Có hồ bơi',
        room: 'vip',
        floor: 4,
        areaPool: 500,
        free: ''
      }, {
        id: 7,
        name: 'House Princess 03',
        // tslint:disable-next-line:max-line-length
        img: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/06/Pullman-Danang-Beach-Resort-vntrip2-e1529555940695.jpg',
        leasedArea: 10000,
        rentalCosts: 10000000,
        maxPerson: 10,
        rentType: 3,
        facilityType: 1,
        description: 'Có hồ bơi',
        room: 'vip',
        floor: 4,
        areaPool: 500,
        free: ''
      }, {
        id: 8,
        name: 'House Princess 04',
        // tslint:disable-next-line:max-line-length
        img: 'https://hoanggiavu.vn/wp-content/uploads/2020/12/mau-villa-dep-nhat-2020-2021-1.jpg',
        leasedArea: 333,
        rentalCosts: 10000000,
        maxPerson: 10,
        rentType: 3,
        facilityType: 1,
        description: 'Có hồ bơi',
        room: 'vip',
        floor: 4,
        areaPool: 500,
        free: ''
      }
    );
  }

  getAll(): Array<Facility> {
    return this._facilities;
  }

  getById(id: number): Facility {
    return this._facilities.find(facility => facility.id === id);
  }

  addFacility(facility: Facility) {
    this._facilities.push(facility);
  }

  updateFacility(id: number, facility: Facility) {
    for (let i = 0; i < this._facilities.length; i++) {
      if (this._facilities[i].id === id) {
        this._facilities[i] = facility;
        break;
      }
    }
  }

  deleteFacility(id: number) {
    this._facilities = this._facilities.filter(facility => {
      return facility.id !== id;
    });
  }
}
