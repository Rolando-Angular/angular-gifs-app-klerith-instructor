import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;
  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  public ngOnInit(): void {
    if (!this.url) {
      throw new Error("URL property is required");
    }
  }

  public onLoad(): void {
    this.hasLoaded = true;
  }

}