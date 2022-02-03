import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-insta-dp';
  constructor(private configService: ConfigService) { }
  userHdUrl: string = '';

  search(input: string): void {
    // Make request to this users ig page
    this.configService.getByUsername(input).subscribe((userData: any)=> {
      const user = userData.logging_page_id;
      const userId = user.replace(/[^0-9]/g, '');
      this.configService.getUserData(userId).subscribe((res: any) => {
        const imgUrl = res.user.hd_profile_pic_url_info.url;
        this.configService.getImg(imgUrl).subscribe(image => {
          // testing
          console.log(image);
        });
      });
    }
    );
  }

  getUserByUsername(input: string): any {
    this.configService.getByUsername(input).subscribe((res: any) => {
      return res;
    })
  }
}
