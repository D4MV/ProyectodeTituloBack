

jest.mock('src/prisma/prisma.service', () => {
  class MockPrismaService {
    $connect = async () => {}
    $disconnect = async () => {}

    [key: string]: any;
  }
  return { PrismaService: MockPrismaService };
});
