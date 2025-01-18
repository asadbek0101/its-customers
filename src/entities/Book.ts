export class Book {
  constructor(
    public readonly Id: Number,
    public readonly UserId: Number,
    public readonly Name: String,
    public readonly Description: String,
    public readonly CreatedDate: Date,
    public readonly Image: String
  ) {}
}
