import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signin() {
    return { msg: 'I have signed in Service' };
  }

  signup(dto: AuthDto) {
    return { msg: 'I have signed up Service' };
  }
}
