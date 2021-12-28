import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository';
import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseId } from '../../../../../../src/Contexts/Mooc/shared/domain/Courses/CourseId';
import { CourseName } from '../../../../../../src/Contexts/Mooc/Courses/domain/CourseName';
import { CourseDuration } from '../../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';

describe('FileCourseRepository', () => {
    it('should save a course', async () => {
        const data = {
            id: '0766c602-d4d4-48b6-9d50-d3253123275e',
            name: 'name',
            duration: 'duration'
        };
        const expectedCourse = new Course({
            id: new CourseId(data.id),
            name: new CourseName(data.name),
            duration: new CourseDuration(data.duration)
          });

        const repository = new FileCourseRepository();

        await repository.save(expectedCourse);
        const course = await repository.search(data.id);

        expect(course).toEqual(expectedCourse);
    });
});
