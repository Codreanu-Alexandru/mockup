import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'untilLastWord'
})
export class UntilLastWord implements PipeTransform {
    transform(value: string, limit: number): string {
        if (value.length <= limit) {
            return value;
        }
        else {
            let final = value.substring(0, limit).lastIndexOf("");
            return value.substring(0, final) + " ..."
        }
    }
}