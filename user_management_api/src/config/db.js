import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;


const dbUrl = process.env.DATABASE_URL || '';
const regex = /^postgres(?:ql)?:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)$/;
const match = dbUrl.match(regex);

if (!match) {
  console.error('❌ DATABASE_URL format invalid.');
  process.exit(1);
}

const [ , user, password, host, port, database ] = match;

export default new Pool({
  user,
  password,
  host,
  port,
  database,
  ssl: false
});
