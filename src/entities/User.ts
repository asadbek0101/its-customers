export class User {
  constructor(
    public readonly Id: number,
    public readonly Username: string,
    public readonly Password: string,
    public readonly IsActive: string
  ) {}
}
