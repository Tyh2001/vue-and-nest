import { describe, test } from 'vitest'
import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { AppModule } from '../src/app.module'
import * as request from 'supertest'

describe('AppController', () => {

  test('app', async () => {
    let app: INestApplication

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    // eslint-disable-next-line prefer-const
    app = moduleFixture.createNestApplication()

    await app.init()

    request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!')
  })

  // let app: INestApplication

  // test('res', async () => {

  //   // (async () => {
  //   const moduleFixture: TestingModule = await Test.createTestingModule({
  //     imports: [AppModule]
  //   }).compile()

  //   app = moduleFixture.createNestApplication()
  //   await app.init()
  //   // })

  //   console.log(request(app.getHttpServer()))
  //   // console.log(app.getHttpServer().get('/'))

  //   // console.log()

  //   // it('/ (GET)', () => {
  //   //   return request(app.getHttpServer())
  //   //     .get('/')
  //   //     .expect(200)
  //   //     .expect('Hello World!')
  //   // })

  //   const res = request(app.getHttpServer()).get('/').expect(200)

  //   console.log(res)

  //   expect(res).toBe('Hello World!')
  // })

  // expect(request(app.getHttpServer())
  //   .get('/')
  //   .expect(200)
  //   .expect('Hello World!')).toContain('Hello World!')
})
