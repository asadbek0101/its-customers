export class Log {
  constructor(
    public readonly Id: number,
    public readonly UserId: number,
    public readonly Url: string,
    public readonly Ip: string,
    public readonly Method: string,
    public readonly Params: string,
    public readonly Query: string,
    public readonly Body: string,
    public readonly Response: string
  ) {}
}
