import { DataSource } from 'typeorm';
import { getTypeOrmConfig } from './configuration';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

// Load environment variables
config();
const configService = new ConfigService();
export default new DataSource(getTypeOrmConfig(configService));

