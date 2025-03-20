import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
export declare class UsersController {
    private users;
    find(): UserEntity[];
    findOne(id: string): UserEntity | undefined;
    create(createUserDto: CreateUserDto): UserEntity;
    update(id: string, updateUserDto: UpdateUserDto): {
        username: string;
        email: string;
        country: string;
        id: string;
    };
    remove(id: string): void;
}
