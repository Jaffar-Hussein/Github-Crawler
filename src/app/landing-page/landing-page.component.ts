import { Component, OnInit } from '@angular/core';
import { GitInfoService } from '../git-info.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  inputData: string='Hanan-Hussein';
  constructor(private gitinfo: GitInfoService) { }

  ngOnInit(): void {
  }
  userSearch() {
    this.gitinfo.userApi(`https://api.github.com/users/${this.inputData}`)
  }
  repoSearch() {
    this.gitinfo.repoApi(``)
  }
}
