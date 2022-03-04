import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString } from 'class-validator';

@ObjectType()
@InputType()
export class UpdateProgrammerDTO {
  @IsString()
  @Field({ nullable: true })
  @IsOptional()
  name: string;

  @IsEmail()
  @Field({ nullable: true })
  @IsOptional()
  email: string;
}
