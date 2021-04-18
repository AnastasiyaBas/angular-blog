import { Component, OnInit } from '@angular/core';
import { ThemingService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
    themes = 'light-theme';
    constructor(private theming: ThemingService) { }

    ngOnInit(): void {
    }

    toggleTheme(): void {
        if (this.themes === 'light-theme') {
          this.themes = 'dark-theme';
        } else  {
          this.themes = 'light-theme';
        }
        this.theming.setTheme(this.themes);
    }
}
