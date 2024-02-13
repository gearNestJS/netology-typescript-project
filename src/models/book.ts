import { IBook } from '../types';

export class Book implements IBook {
  constructor(
    public authors: string[],
    public description: string,
    public favorite: boolean,
    public fileCover: string,
    public fileName: string,
    public id: number,
    public title: string
  ) {}
}
