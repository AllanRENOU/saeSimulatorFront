export class AffectationDto {
  constructor(
    public ligne: string,
    public destination: string,
    public stopCode: string,
    public stopName: string
  ) {}
}