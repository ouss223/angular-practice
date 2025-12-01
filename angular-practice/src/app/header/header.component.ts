import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  path: string;
  label: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navItems: NavItem[] = [
    { path: '/carte-visite', label: 'Carte Visite' },
    { path: '/test-component', label: 'Test Component' },
    {
      path: '/cv',
      label: 'CV',
      children: [
        { path: '/cv/liste', label: 'Liste' },
        { path: '/cv/detail', label: 'Detail' }
      ]
    },
    { path: '/ttc', label: 'TTC' }
  ];

  showCvDropdown = false;

  toggleCvDropdown() {
    this.showCvDropdown = !this.showCvDropdown;
  }

  closeCvDropdown() {
    this.showCvDropdown = false;
  }
}
