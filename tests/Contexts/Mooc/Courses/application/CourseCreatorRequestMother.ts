import { CourseCreatorRequest } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreatorRequest';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';
import { CourseId } from '../../../../../src/Contexts/Mooc/shared/domain/Courses/CourseId';
import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseName';
import { CourseDurationMother } from '../domain/CourseDurationMother';
import { CourseIdMother } from '../../shared/domain/Courses/CourseIdMother';
import { CourseNameMother } from '../domain/CourseNameMother';

export class CourseCreatorRequestMother {
    static create(id: CourseId, name: CourseName, duration: CourseDuration): CourseCreatorRequest {
        return {
            id: id.value,
            name: name.value,
            duration: duration.value
        };
    }
    static random(): CourseCreatorRequest {
        return this.create(CourseIdMother.random(), CourseNameMother.random(), CourseDurationMother.random());
    }

    static invalidRequest(): CourseCreatorRequest {
        return {
          id: CourseIdMother.random().value,
          name: CourseNameMother.invalidName(),
          duration: CourseDurationMother.random().value
        };
      }
}
