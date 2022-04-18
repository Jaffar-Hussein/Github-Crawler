import { Injectable } from '@angular/core';
import { HttpProcessorService } from './http-processor.service'
import { UserSkeleton } from './user-skeleton';
import { RepositorySkeleton } from './repository-skeleton';

@Injectable({
  providedIn: 'root'
})
export class GitInfoService {
  userSkeleton!: UserSkeleton
  userRepositories!: [any]

  constructor(private HttpProcessor: HttpProcessorService,) {
    
    this.userSkeleton = new UserSkeleton("",0,0,0,"","",new Date(),"","","","");

    // this.userSkeleton = new UserSkeleton("",0,0,0,"",'',)
  }
  userApi(url: string) {
    this.HttpProcessor.fetchApi(url).subscribe((response) => {
      console.log(response);
      this.userSkeleton.name=response.login;
      this.userSkeleton.following=response.following;
      this.userSkeleton.followers=response.followers;
      this.userSkeleton.publicRepositories=response.public_repos;
      this.userSkeleton.bio=response.bio;
      this.userSkeleton.image=response.avatar_url;
      this.userSkeleton.creationDate=response.created_at;
      this.userSkeleton.location=response.location;
      this.userSkeleton.email=response.email;
      this.userSkeleton.hireable=response.hireable;
      this.userSkeleton.htmlURL=response.html_url;
      // this.userSkeleton = new UserSkeleton(response.login, response.following, response.followers,
      //   response.public_repos, response.bio, response.avator_url, response.created_at, response.location,
      //   response.email, response.hireable);       
      console.log(this.userSkeleton);
    })
  }
  // repoApi(url: string) {
  //   this.HttpProcessor.fetchApi(url).subscribe((response)=>{
  //     console.log(response);
  //     array.forEach(element => {
        
  //     });
      
  //   })
  // }
  
}
// this should retrun everything about a user
// Should return the list of the repos of the user 
// Should give the list of the repos being looked for 