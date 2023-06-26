import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com' },
    { name: 'Twitter', url: 'https://www.twitter.com' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com' }
  ];

  staticPages = [
    { name: 'À propos', url: '/a-propos' },
    { name: 'Contacts', url: '/contacts' },
  ];

  address = '18 rue des cramptés';


}
