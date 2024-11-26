export class resuman {
    constructor(title, section_counts) {
        this.title = title;
        this.section_counts = section_counts;
    }
    format() {
        return `${this.title} consists of ${this.section_counts} sections`;
    }
}
