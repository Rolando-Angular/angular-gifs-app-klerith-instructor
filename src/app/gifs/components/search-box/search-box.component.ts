import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input class="form-control" type="text" placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput !: ElementRef<HTMLInputElement>;

  constructor() { }

  public searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    console.log({ newTag });
  }

}
