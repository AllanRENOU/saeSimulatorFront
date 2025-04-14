export class AffectationDto {
  constructor(
    public line: string,
    public destination: string,
    public stopCode: string,
    public stopName: string
  ) {}
}
