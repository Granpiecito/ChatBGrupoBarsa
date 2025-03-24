import { MysqlAdapter } from '@builderbot/database-mysql';

export const createDatabaseAdapter = () => {
    return new MysqlAdapter({
        host: process.env.MYSQL_DB_HOST || 'localhost',
        user: process.env.MYSQL_DB_USER || 'root',	
        database: process.env.MYSQL_DB_NAME || 'cbgrupobs',
        password: process.env.MYSQL_DB_PASSWORD || '',
        port: Number(process.env.MYSQL_DB_PORT) || 3306
    });
};