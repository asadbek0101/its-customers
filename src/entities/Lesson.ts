export class Lesson {
  constructor(
    public readonly Id: Number,
    public readonly BookId: Number,
    public readonly Name: String,
    public readonly Description: String,
    public readonly CreatedDate: Date,
    public readonly Image: String
  ) {}
}
