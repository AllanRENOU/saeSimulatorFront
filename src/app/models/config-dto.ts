export class ConfigDto {
  constructor(
    public id: string, // UUID
    public name: string,
    public host: string,
    public dbPort: number, // Port de la base de données
    public siriPath: string // Chemin SIRI
  ) {}
}