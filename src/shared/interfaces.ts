export interface IConfig {
    port: number,
    db: {
      port: number,
      user: string,
      password: string,
      database: string
    }
}

export interface IDatabaseClient {
    query(query: string, params: any[]): Promise<any>,

    create(record: Record<string, any>): boolean;
    findOne(id: number): false | Record<string, any>;
    findAll(where: Record<string, any>): false | Record<string, any>[];
    deleteOne(id: number): boolean;
    deleteOne(where: Record<string, any>): boolean;
    update(id: number, record: Record<string, any>): boolean;
}
