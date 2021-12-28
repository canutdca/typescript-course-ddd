import { StringValueObject } from '../../../Shared/Domain/value-objects/StringValueObject';
import { CourseNameLenghtExceeded } from './CourseNameLenghtExceeded';

export class CourseName extends StringValueObject {
    constructor(value: string) {
        super(value);
        this.ensureLengthIsLessThan30Characters(value);
    }

    private ensureLengthIsLessThan30Characters(value: string): void {
        if (value.length > 30) {
            throw new CourseNameLenghtExceeded(`The Course Name <${value}> has more than 30 characters`);
        }
    }
}
