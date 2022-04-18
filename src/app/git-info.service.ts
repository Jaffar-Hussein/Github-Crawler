import { Injectable } from '@angular/core';
import { HttpProcessorService } from './http-processor.service'
import { UserSkeleton } from './user-skeleton';
import { RepositorySkeleton } from './repository-skeleton';
import { UserRepo } from './user-repo';

@Injectable({
  providedIn: 'root'
})
export class GitInfoService {
  userSkeleton!: UserSkeleton;
  userRepositories!: [any];
  userRepo!: UserRepo;
  repos: any = [];
  constructor(private HttpProcessor: HttpProcessorService,) {

    this.userSkeleton = new UserSkeleton("", 0, 0, 0, "", "", new Date(), "", "", "", "");
    this.userRepo = new UserRepo("", "", "", "", 0, 0, new Date(), 0, "");

    this.repos.length = 0;
    // this.userSkeleton = new UserSkeleton("",0,0,0,"",'',)
  }
  userApi(url: string) {
    this.HttpProcessor.fetchApi(`${url}?`).subscribe((response) => {
      console.log(response);
      this.userSkeleton.name = response.login;
      this.userSkeleton.following = response.following;
      this.userSkeleton.followers = response.followers;
      this.userSkeleton.publicRepositories = response.public_repos;
      this.userSkeleton.bio = response.bio;
      this.userSkeleton.image = response.avatar_url;
      this.userSkeleton.creationDate = response.created_at;
      this.userSkeleton.location = response.location;
      this.userSkeleton.email = response.email;
      this.userSkeleton.hireable = response.hireable;
      this.userSkeleton.htmlURL = response.html_url;
      // this.userSkeleton = new UserSkeleton(response.login, response.following, response.followers,
      //   response.public_repos, response.bio, response.avator_url, response.created_at, response.location,
      //   response.email, response.hireable);       
      console.log(this.userSkeleton);
    });
    this.HttpProcessor.fetchApi(`${url}/repos?order=desc&sort=created&`).subscribe((response) => {
      let resp:any;

      response.map((res: any) => {
        // this.userRepo.name = res.name;
        // this.userRepo.description = res.description;
        // this.userRepo.homepage = res.homepage;
        // // this.userRepo.author=response.owner.login;
        // this.userRepo.stargazer = res.stargazers_count;
        // this.userRepo.watchers = res.watchers_count;
        // this.userRepo.created_at = res.created_at;
        // this.userRepo.forks = res.forks_count;
        // this.userRepo.htmlURL = res.html_url;
       resp= new UserRepo(res.name, res.description ,res.homepage, res.owner.login,res.stargazers_count, res.watchers_count,
        res.created_at,res.forks_count,res.html_url);
        this.repos.push(resp);
        
      })
   

      // console.log(this.repos);


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