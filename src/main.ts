import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './modules/prisma/prisma.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const prismaService = app.get(PrismaService);
  app.useGlobalPipes(new ValidationPipe());
  //await prismaService.enableShutdownHooks(app);

  const config = new DocumentBuilder()
  .setTitle('Order Management System')
  .setDescription('API documentation for the Order Management System')
  .setVersion('1.0')
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
