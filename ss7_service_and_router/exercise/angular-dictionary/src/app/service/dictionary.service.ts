import {Injectable} from '@angular/core';
import {IWord} from '../model/IWord';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  wordList: IWord [] = [
    {word: 'red', mean: 'đỏ'},
    {word: 'black', mean: 'đen'},
  ];

  constructor() {
  }

  getAll(): IWord [] {
    return this.wordList;
  }

  translate(word): IWord {
    return this.wordList.find(detailList => detailList.word === word);
  }
}
