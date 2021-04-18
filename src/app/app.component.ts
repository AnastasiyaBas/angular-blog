import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemingService } from './services/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private themingService: ThemingService,
        private renderer: Renderer2
    ) {}

    ngOnInit(): void {
        this.themingService.themeChanges().subscribe(theme => {
          if (theme.oldValue) {
            this.renderer.removeClass(document.body, theme.oldValue);
          }
          this.renderer.addClass(document.body, theme.newValue);
        });
    }
}
