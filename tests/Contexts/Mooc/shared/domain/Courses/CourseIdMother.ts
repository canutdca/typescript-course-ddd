import { UuidMother } from './../../../../shared/domain/UuidMother';
import { CourseId } from '../../../../../../src/Contexts/Mooc/shared/domain/Courses/CourseId';

export class CourseIdMother {
    static create(value: string): CourseId {
        return new CourseId(value);
    }
    static random(): CourseId {
        return this.create(UuidMother.random());
    }
}
