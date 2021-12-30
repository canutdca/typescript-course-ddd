import { CourseDuration } from './CourseDuration';
import { CourseId } from '../../shared/domain/Courses/CourseId';
import { CourseName } from './CourseName';
import { AggregateRoot } from '../../../Shared/Domain/AggregateRoot';

export class Course extends AggregateRoot {
  readonly id: CourseId;
  readonly name: CourseName;
  readonly duration: CourseDuration;

  constructor({ id, name, duration }: { id: CourseId; name: CourseName; duration: CourseDuration }) {
    super();
    this.id = id;
    this.name = name;
    this.duration = duration;
  }

  static fromPrimitives(plainData: {
    id: string;
    name: string;
    duration: string;
  }): Course {
    return new Course({
      id: new CourseId(plainData.id),
      name: new CourseName(plainData.name),
      duration: new CourseDuration(plainData.duration)
    });
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      name: this.name.value,
      duration: this.duration.value
    };
  }
}
