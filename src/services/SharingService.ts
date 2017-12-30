import { SocialSharing } from "@ionic-native/social-sharing";
import { Injectable } from "@angular/core";

@Injectable()
export class SharingService {

  constructor(private socialSharing: SocialSharing) {}

  share(url: string, message: string): void {
    this.socialSharing.share(message, null, null, url);
  }
}
