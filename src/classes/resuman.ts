class resuman {
  constructor(private title: string, private section_counts: number){}
  public format() {
    return `${this.title} consists of ${this.section_counts} sections`;
  }
}