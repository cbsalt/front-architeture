import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'
import faker from 'faker'

type SutTypes = {
  systemUnderTest: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const systemUnderTest = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    systemUnderTest,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { systemUnderTest, httpPostClientSpy } = makeSut(url)
    await systemUnderTest.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
