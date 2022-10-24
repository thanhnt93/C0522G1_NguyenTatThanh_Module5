import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuramaService {

  // tslint:disable-next-line:variable-name
  private _title: string;

  public set setTitle(value: string) {
    this._title = value;
  }

  public get title(): string {
    return this._title;
  }

  constructor() {
    this._title = 'Furama Resort';
  }
}
