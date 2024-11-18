import { handleCron } from "./controllers/cron"
import cron from 'node-cron';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  console.log(`Starting process to generate podcast...`);
  await handleCron();
}
main();

//cron.schedule(`0 14 * * *`, async () => {
//  console.log(`Starting process to send podcast...`);
//  await handleCron();
//});