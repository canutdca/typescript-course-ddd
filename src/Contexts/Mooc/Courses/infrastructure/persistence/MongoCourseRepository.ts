import { Nullable } from '../../../../Shared/Domain/Nullable';
import { MongoRepository } from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import { CourseId } from '../../../shared/domain/Courses/CourseId';
import { Course } from '../../domain/Course';
import { CourseRepository } from './../../domain/CourseRepository';

interface CourseDocument {
    _id: string;
    name: string;
    duration: string;
  }

export class MongoCourseRepository extends MongoRepository<Course> implements CourseRepository {

    save(course: Course): Promise<void> {
        return this.persist(course.id.value, course);
    }

    async search(id: CourseId): Promise<Nullable<Course>> {
        const collection = await this.collection();
        const document = await collection.findOne<CourseDocument>({ _id: id.value });

        return document
            ? Course.fromPrimitives({name: document.name, duration: document.duration, id: id.value })
            : null;
    }

    protected collectionName(): string {
        return 'courses';
    }
}
