export class TimeDto {
  constructor(
    public course: string, 
    public flag: number, 
    public isAQuai: boolean, 
    public delais: number, 
    public heureTheo: string, 
    public heureReel: string, 
    public quai: string, 
    public via: string, 
    public line: string, 
    public destination: string, 
    public stopPoint: string
  ) {}
}