import { CourseDuration } from '../domain/CourseDuration';
import { CourseId } from '../../shared/domain/Courses/CourseId';
import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';
import { CourseCreatorRequest } from './CourseCreatorRequest';
import { CourseName } from '../domain/CourseName';

export class CourseCreator {
  private readonly repository: CourseRepository;

  constructor(repository: CourseRepository) {
    this.repository = repository;
  }

  async run(request: CourseCreatorRequest): Promise<void> {
    const course = new Course({
      id: new CourseId(request.id),
      name: new CourseName(request.name),
      duration: new CourseDuration(request.duration)
    });
    return this.repository.save(course);
  }
}
