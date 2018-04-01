import { Component, OnInit } from '@angular/core';
import { GizmoService } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gizmo',
  templateUrl: './gizmo.component.html',
  styleUrls: ['./gizmo.component.css']
})
export class GizmoComponent implements OnInit {
  constructor(private gizmoService: GizmoService) {}

  ngOnInit() {}
}
