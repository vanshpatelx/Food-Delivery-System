import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entity&DTOs/user.interface';
import { AuthUser } from '../entity&DTOs/user.entity';
import { Repository } from 'typeorm';


/*
  Database Query to CRUD on DB
*/

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(AuthUser)
    private usersRepository: Repository<AuthUser>,
  ) { }

  // Get User By ID
  async getUserById(userId: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // Get User By Email
  async getUserByEmail(email: string): Promise<User> {
    try {
      const user = await this.usersRepository.findOne({ where: { email } });
      console.log(user);
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  // Create User
  async createUser(userData: User): Promise<User> {
    const newUser = this.usersRepository.create(userData);
    await this.usersRepository.save(newUser);
    return newUser;
  }

   // Get All Users
  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

}
