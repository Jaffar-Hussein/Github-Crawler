import { Component, OnInit } from '@angular/core';
import { GitInfoService } from '../git-info.service';

@Component({
  selector: 'app-user-result-page',
  templateUrl: './user-result-page.component.html',
  styleUrls: ['./user-result-page.component.css']
})
export class UserResultPageComponent implements OnInit {
  bio:string=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, dignissimos.
  Exercitationem voluptas atque veritatis deleniti perferendis eveniet harum ipsum magni!
  Ad eos error a nobis veniam omnis provident ipsam cumque!
  Qui ea sint, iure distinctio quia quasi cum iste quis.
  Recusandae molestias quidem ab ullam facilis deleniti! Quasi, laudantium expedita!`;
  name!:string
  followers:number=0;
  following:number=0;
  publicRepositories:number = 0;


  constructor(private gitinfo:GitInfoService) { }
  
  ngOnInit(): void {
    // this.name,this.following,this.followers,this.publicRepositories = this.gitinfo.userSkeleton.name;
    
  }

}
