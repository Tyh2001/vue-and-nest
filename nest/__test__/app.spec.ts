import { describe, test, expect } from 'vitest'
// import { Test, TestingModule } from '@nestjs/testing'
// import { AppModule } from '../src/app.module'
// import * as request from 'supertest'
// import type { INestApplication } from '@nestjs/common'

import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from '../src/app.controller'
import { AppService } from '../src/app.service'

describe('AppController', async () => {

  const app: TestingModule = await Test.createTestingModule({
    controllers: [AppController],
    providers: [AppService]
  }).compile()

  console.log(app.get(AppController))

  const appController: AppController = app.get(AppController)

  // describe('root', () => {

  test('should return "Hello World!"', () => {
    // console.log(!!appController.appService, '----------------')

    expect(appController.getHello()).toBe('Hello World!')
  })
  // })
})

// describe('AppController', () => {

//   test('demo', () => {
//     expect(Math.sqrt(4)).toBe(2)

//   })

//   console.log(AppModule)

//   // test('interface', async () => {
//   //   const app = 1

//   //   request(app)
//   //     .get('/')
//   //     .expect(200)
//   //     .expect('Hello World!')

//   //   // expect(Math.sqrt(4)).toBe(2)
//   // })

//   //   test('app', async () => {
//   //     let app: INestApplication

//   //     const moduleFixture: TestingModule = await Test.createTestingModule({
//   //       imports: [AppModule]
//   //     }).compile()

//   //     // eslint-disable-next-line prefer-const
//   //     app = moduleFixture.createNestApplication()

//   //     await app.init()

//   //     request(app.getHttpServer())
//   //       .get('/')
//   //       .expect(200)
//   //       .expect('Hello World!')
//   //   })

//   //   // let app: INestApplication

//   //   // test('res', async () => {

//   //   //   // (async () => {
//   //   //   const moduleFixture: TestingModule = await Test.createTestingModule({
//   //   //     imports: [AppModule]
//   //   //   }).compile()

//   //   //   app = moduleFixture.createNestApplication()
//   //   //   await app.init()
//   //   //   // })

//   //   //   console.log(request(app.getHttpServer()))
//   //   //   // console.log(app.getHttpServer().get('/'))

//   //   //   // console.log()

//   //   //   // it('/ (GET)', () => {
//   //   //   //   return request(app.getHttpServer())
//   //   //   //     .get('/')
//   //   //   //     .expect(200)
//   //   //   //     .expect('Hello World!')
//   //   //   // })

//   //   //   const res = request(app.getHttpServer()).get('/').expect(200)

//   //   //   console.log(res)

//   //   //   expect(res).toBe('Hello World!')
//   //   // })

//   //   // expect(request(app.getHttpServer())
//   //   //   .get('/')
//   //   //   .expect(200)
//   //   //   .expect('Hello World!')).toContain('Hello World!')
// })
