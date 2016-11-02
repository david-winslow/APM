import { Component,OnChanges,Input,Output,EventEmitter } from "@angular/core"

@Component(
{
    moduleId : module.id,
    selector: "ai-star",
    templateUrl: "star.component.html",
    styleUrls : ["star.component.css"]
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    @Output() ratingClicked =  new EventEmitter<string>();
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick() :void {
        this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
        this.rating += 1;

        if (this.rating > 5) {
            this.rating = 1;
        }
        this.ngOnChanges();
    }

}