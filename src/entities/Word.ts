export class Word {
  constructor(
    public readonly Id: Number,
    public readonly LessonId: Number,
    public readonly InUz: string,
    public readonly InEn: string,
    public readonly Description: string,
    public readonly CreatedDate: Date,
    public readonly Image: string
  ) {}
}
