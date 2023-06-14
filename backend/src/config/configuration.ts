export interface IConfiguration {
  port: number;

  database: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
  };

  auth: {
    secret: string;
    expiresIn: string;
  };
  authRefresh: {
    secret: string;
    expiresIn: string;
  };
}

export default (): IConfiguration => ({
  port: parseInt(process.env.PORT || '', 10) || 4041,

  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '', 10) || 5432,
    user: process.env.DATABASE_USER || 'server',
    password: process.env.DATABASE_PASSWORD || 'server-pwd',
    database: process.env.DATABASE_DATABASE || 'mindmark',
  },

  auth: {
    secret: process.env.JWT_SECRET || 'SUPER_SECRET_STRING_WOW',
    expiresIn: process.env.JWT_EXPIRE || '5m',
  },
  authRefresh: {
    secret: process.env.JWT_REFRESH_SECRET || 'ANOTHER_SUPER_SECRET_STRING_OH_NO',
    expiresIn: process.env.JWT_REFRESH_EXPIRE || '7d',
  },
});
