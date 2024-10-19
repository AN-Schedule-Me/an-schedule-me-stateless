import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(`Server running on port ${process.env.PORT}...`);
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });
  await app.listen(process.env.PORT);
}
bootstrap();
