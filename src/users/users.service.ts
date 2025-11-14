import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/pisma/prisma.service';




@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  async findByEmail(email:string){
    return this.prisma.user.findUnique({
      where:{ email}
    })

    
  }

}
