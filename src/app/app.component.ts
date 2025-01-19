import { Component } from '@angular/core';
@Component({
	selector: 'app-root',
	imports: [],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	sayHello() {
		return this.hello();
	}

	hello() {
		return 'Hello, World';
	}
}
