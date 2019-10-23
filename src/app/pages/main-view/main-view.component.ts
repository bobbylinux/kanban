import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { Board } from "src/app/models/board.model";
import { Column } from "src/app/models/column.model";

@Component({
  selector: "main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"]
})
export class MainViewComponent implements OnInit {

  constructor() {}

  private board: Board = new Board("text board", [
    new Column("Ideas", [
      "some random ideas",
      "this is another random idea",
      "build an awsome application"
    ]),
    new Column("Research", [
      'lerem ipsum', 'foo', 'this was in the research column'
    ]),
    new Column("Todo", ["Get to work", "Pick up groceries", "Go home", "Fall asleep"]),
    new Column("Done", ["Get up", "Brush teeth", "Take a shower", "Check e-mail", "Walk dog"])
  ]);

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
