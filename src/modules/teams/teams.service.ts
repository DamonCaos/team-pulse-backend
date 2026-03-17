import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTeamDto } from './dto/create-team.dto';

@Injectable()
export class TeamsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTeamDto: CreateTeamDto) {
    return this.prisma.team.create({
      data: {
        name: createTeamDto.name,
        description: createTeamDto.description,
      },
    });
  }

  findAll() {
    return this.prisma.team.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}