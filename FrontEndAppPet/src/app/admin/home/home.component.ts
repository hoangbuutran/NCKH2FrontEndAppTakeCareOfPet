import { Component, OnInit } from '@angular/core';
import { QuyenService } from '../../shared/Service/Quyen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
countSinhVien;
countNhanVien;
countQuyen;
  constructor(
    private quyenService: QuyenService,
  ) { }

  ngOnInit() {
    this.quyenService.countQuyen().subscribe(data => this.countQuyen = data);
  }

}
