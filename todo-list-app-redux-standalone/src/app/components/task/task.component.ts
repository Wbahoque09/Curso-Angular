import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { task } from 'src/app/store/task.store';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input()
  task!: task;
}
