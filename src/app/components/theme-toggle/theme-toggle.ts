import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: false,
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css'
})
export class ThemeToggle {
  isDark = false;

  toggleTheme() {
    this.isDark = !this.isDark;
    const theme = this.isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  ngOnInit() {
    const saved = localStorage.getItem('theme') || 'light';
    this.isDark = saved === 'dark';
    document.documentElement.setAttribute('data-theme', saved);
  }
}
