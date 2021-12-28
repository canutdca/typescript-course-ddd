import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
import { CourseCreatorRequestMother } from './CourseCreatorRequestMother';
import { CourseMother } from '../domain/CourseMother';
import { CourseNameLenghtExceeded } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseNameLenghtExceeded';

let repository: CourseRepositoryMock;
let creator: CourseCreator;

beforeEach(() => {
  repository = new CourseRepositoryMock();
  creator = new CourseCreator(repository);
});

describe('CourseCreator', () => {
  it('should create a valid course', async () => {
    const request = CourseCreatorRequestMother.random();
    const course = CourseMother.fromRequest(request);

    await creator.run(request);

    repository.assertHaveBeenCalledWith(course);
    // repository.assertLastSavedCourseIs(course);
  });

  it('should throw error if course name lenght is exceeded', async () => {
    expect(() => {
      const request = CourseCreatorRequestMother.invalidRequest();
      const course = CourseMother.fromRequest(request);
      creator.run(request);

      repository.assertHaveBeenCalledWith(course);
    }).toThrowError(CourseNameLenghtExceeded);
  });
});
