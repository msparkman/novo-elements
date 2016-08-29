webpackJsonp([3],{

/***/ 821:
/***/ function(module, exports) {

	module.exports = "<nav class=\"main-nav\" [ngClass]=\"{open: menuOpen}\">\n    <span class=\"logo\">\n        <svg routerLink=\"Home\" data-name=\"novo-logo\" xmlns=\"http://www.w3.org/2000/svg\"\n             viewBox=\"0 0 400 400\" class=\"{% if page.url != '/' %}site-avatar{% endif %}\">\n            <defs></defs>\n            <title>NovoBranding</title>\n            <circle class=\"center-dot\" cx=\"200.18\" cy=\"197.5\" r=\"28.65\"/>\n            <path class=\"outer-ring\" d=\"M371,178.06C362,98.75,298.92,35.6,219.6,26.65a19.88,19.88,0,0,0-38.84,0c-79.32,9-142.43,72.11-151.4,151.43a19.88,19.88,0,0,0,0,38.85c9,79.32,72.07,142.47,151.4,151.43a19.88,19.88,0,0,0,38.84,0c79.32-9,142.43-72.1,151.4-151.42A19.88,19.88,0,0,0,371,178.06ZM192.56,25.72a9.25,9.25,0,0,1,1-1.18l0.26-.27a9.31,9.31,0,0,1,1.17-1l0.24-.15a9.13,9.13,0,0,1,1.22-.66l0.26-.12a9.17,9.17,0,0,1,1.49-.46l0.34-.07a8.29,8.29,0,0,1,3.32,0l0.34,0.07a9.17,9.17,0,0,1,1.49.46l0.26,0.12a9.13,9.13,0,0,1,1.22.66l0.24,0.15a9.31,9.31,0,0,1,1.17,1l0.26,0.27a9.25,9.25,0,0,1,1,1.18,9.1,9.1,0,0,1-.29,10.68h0a9.28,9.28,0,0,1-1.27,1.36l-0.42.35a9.1,9.1,0,0,1-.89.62,9.21,9.21,0,0,1-.87.47l-0.5.22a9,9,0,0,1-1.38.43l-0.34.06a8.24,8.24,0,0,1-3.3,0l-0.34-.06a9,9,0,0,1-1.38-.43l-0.5-.22a9.21,9.21,0,0,1-.87-0.47,9.1,9.1,0,0,1-.89-0.62l-0.42-.35a9.28,9.28,0,0,1-1.27-1.36h0A9.1,9.1,0,0,1,192.56,25.72ZM28.39,205.09a9.25,9.25,0,0,1-1.14-.94l-0.3-.3a9.26,9.26,0,0,1-.94-1.14l-0.16-.26a9.09,9.09,0,0,1-.65-1.19c0-.09-0.09-0.18-0.13-0.28a9.1,9.1,0,0,1-.46-1.49c0-.11,0-0.23-0.07-0.34a8.27,8.27,0,0,1,0-3.31c0-.12,0-0.23.07-0.34a9.1,9.1,0,0,1,.46-1.49c0-.1.09-0.19,0.13-0.28a9.09,9.09,0,0,1,.65-1.19l0.16-.26a9.22,9.22,0,0,1,.94-1.14l0.3-.3a9.11,9.11,0,0,1,13.2.59c0.13,0.14.25,0.29,0.37,0.44a9.22,9.22,0,0,1,1.08,1.75c0.08,0.16.15,0.33,0.22,0.49a9.08,9.08,0,0,1,.43,1.39c0,0.11,0,.23.06,0.34a8.22,8.22,0,0,1,0,3.29c0,0.11,0,.23-0.06.34a9.08,9.08,0,0,1-.43,1.39c-0.07.17-.15,0.33-0.22,0.49a9.22,9.22,0,0,1-1.08,1.75c-0.12.15-.24,0.3-0.37,0.44A9.12,9.12,0,0,1,28.39,205.09ZM200.18,374a9.21,9.21,0,1,1,9.21-9.21A9.22,9.22,0,0,1,200.18,374ZM219,357.67a19.86,19.86,0,0,0-37.59,0A161.56,161.56,0,0,1,40,216.29a19.86,19.86,0,0,0,0-37.58A161.56,161.56,0,0,1,181.38,37.32a19.86,19.86,0,0,0,37.59,0,161.56,161.56,0,0,1,141.35,141.4,19.86,19.86,0,0,0,0,37.55A161.56,161.56,0,0,1,219,357.67Zm147.84-151A9.21,9.21,0,1,1,376,197.5,9.22,9.22,0,0,1,366.81,206.7Z\"\n            />\n            <path class=\"inner-ring\" d=\"M219.76,103.11a19.86,19.86,0,0,0-39.17,0,96.4,96.4,0,0,0,0,188.78,19.86,19.86,0,0,0,39.17,0A96.4,96.4,0,0,0,219.76,103.11Zm-19.58-5.87a9.17,9.17,0,0,1,5.9,16.22l-0.25.2a9.11,9.11,0,0,1-1,.67c-0.26.16-.53,0.31-0.8,0.44l-0.55.24a8.92,8.92,0,0,1-1.35.42l-0.33.06a8.24,8.24,0,0,1-3.3,0l-0.33-.06a8.92,8.92,0,0,1-1.35-.42l-0.55-.24c-0.28-.13-0.54-0.28-0.8-0.44a9.11,9.11,0,0,1-1-.67l-0.25-.2A9.17,9.17,0,0,1,200.18,97.24ZM207.54,294a9.21,9.21,0,0,1-.61.74c-0.13.15-.27,0.29-0.41,0.43a9.25,9.25,0,0,1-1.06.87l-0.41.26a9.11,9.11,0,0,1-1.07.58l-0.31.15a9.08,9.08,0,0,1-1.47.46l-0.38.07a8.22,8.22,0,0,1-3.29,0l-0.38-.07a9.08,9.08,0,0,1-1.47-.46l-0.31-.15a9.11,9.11,0,0,1-1.07-.58l-0.41-.26a9.25,9.25,0,0,1-1.06-.87c-0.14-.14-0.27-0.29-0.41-0.43a9.08,9.08,0,0,1,.85-13.22l0.25-.2a9.11,9.11,0,0,1,1-.67c0.26-.16.53-0.31,0.8-0.44l0.55-.24a8.92,8.92,0,0,1,1.35-.42l0.33-.06a8.24,8.24,0,0,1,3.3,0l0.33,0.06a8.92,8.92,0,0,1,1.35.42l0.55,0.24c0.28,0.13.54,0.28,0.8,0.44a9.11,9.11,0,0,1,1,.67l0.25,0.2A9.06,9.06,0,0,1,207.54,294Zm11.1-12.84a19.86,19.86,0,0,0-36.92,0,85.7,85.7,0,0,1,0-167.38,19.86,19.86,0,0,0,36.92,0A85.7,85.7,0,0,1,218.63,281.19Z\"\n            />\n        </svg>\n        <svg routerLink=\"Home\" data-name=\"bullhorn-text\" version=\"1.1\"\n            xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n            x=\"0px\" y=\"0px\" width=\"240.2px\" height=\"48.8px\" viewBox=\"0 0 240.2 48.8\"\n            style=\"enable-background:new 0 0 240.2 48.8;\" xml:space=\"preserve\">\n            <style type=\"text/css\">\n                .st0 {\n                    fill: #FFFFFF;\n                }\n            </style>\n            <defs></defs>\n            <g>\n                <path class=\"st0\" d=\"M0,1.5c0-0.6,0.5-1.1,1.1-1.1h20c5.4,0,9.5,1.4,12.3,4.2c2.1,2.1,3.2,4.7,3.2,7.8v0.1c0,1.4-0.2,2.6-0.6,3.8\n                c-0.4,1.1-0.9,2.1-1.5,2.9c-0.6,0.8-1.3,1.6-2.1,2.2c-0.2,0.2-0.4,0.3-0.7,0.5c-0.7,0.5-0.6,1.6,0.1,1.9c1.9,0.9,3.4,1.9,4.7,3.2\n                c1.7,1.7,2.6,4.2,2.6,7.4v0.1c0,2.1-0.4,4-1.2,5.6c-0.8,1.6-2,3-3.5,4c-1.5,1.1-3.4,1.9-5.5,2.5c-2.1,0.6-4.5,0.8-7.2,0.8H1.1\n                C0.5,47.5,0,47,0,46.4V1.5z M19.4,20.3c2.7,0,4.8-0.5,6.5-1.6c1.6-1,2.4-2.6,2.4-4.8v-0.1c0-1.9-0.7-3.3-2.1-4.4\n                c-1.4-1-3.5-1.6-6.2-1.6H9.3c-0.6,0-1.1,0.5-1.1,1.1v10.2c0,0.6,0.5,1.1,1.1,1.1H19.4z M21.8,40.1c2.8,0,5-0.5,6.7-1.6\n                c1.6-1.1,2.4-2.7,2.4-4.8v-0.1c0-2-0.8-3.6-2.4-4.6c-1.6-1.1-4-1.6-7.3-1.6h-12c-0.6,0-1.1,0.5-1.1,1.1V39c0,0.6,0.5,1.1,1.1,1.1\n                H21.8z\" />\n                <path class=\"st0\" d=\"M81.3,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3h-5.9c-0.7,0-1.3-0.6-1.3-1.3v-45\n                C80.1,0.6,80.6,0,81.3,0z\" />\n                <path class=\"st0\" d=\"M96,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3H96c-0.7,0-1.3-0.6-1.3-1.3v-45\n                C94.8,0.6,95.3,0,96,0z\" />\n                <path class=\"st0\" d=\"M109.5,0l4,0c2.3,0,4.2,1.9,4.2,4.2v13.3c0.9-0.9,2.1-1.9,3.7-2.8c1.6-0.9,3.7-1.4,6.3-1.4c2,0,3.9,0.3,5.5,1\n                c1.6,0.7,3,1.6,4,2.8c1.1,1.2,1.9,2.7,2.5,4.4c0.6,1.7,0.9,3.6,0.9,5.6v19.1c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2\n                V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.8-1.3,1.7-1.7,2.8\n                c-0.4,1.1-0.6,2.2-0.6,3.5v16.9c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2V5.8V0z\"\n                />\n                <path class=\"st0\" d=\"M210.5,14.1h5.3c0.7,0,1.4,0.6,1.4,1.3l0.1,2.4c0.4-0.5,0.9-1,1.5-1.5c0.6-0.5,1.3-1,2.1-1.5\n                c0.8-0.5,1.8-0.8,2.8-1.1c1-0.3,2.2-0.4,3.6-0.4c4.2,0,7.4,1.2,9.5,3.7c2.2,2.5,3.3,5.8,3.3,10.1V46c0,0.8-0.7,1.5-1.5,1.5h-5.4\n                c-0.8,0-1.5-0.7-1.5-1.5V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9\n                c-0.7,0.8-1.3,1.7-1.7,2.8c-0.4,1.1-0.6,2.2-0.6,3.5V46c0,0.8-0.7,1.5-1.5,1.5h-5.4c-0.8,0-1.5-0.7-1.5-1.5V15.5\n                C209.1,14.7,209.7,14.1,210.5,14.1z\" />\n                <g>\n                    <path class=\"st0\" d=\"M184.5,14h5.3c0.8,0,1.4,0.6,1.4,1.4l0.1,2.8c0.4-0.5,0.9-1,1.5-1.6c0.6-0.6,1.3-1.1,2.1-1.6\n                    c0.8-0.5,1.7-0.9,2.8-1.2c1.1-0.3,2.3-0.5,3.7-0.5c0.8,0,1.5,0,2.2,0.1c0.3,0,0.5,0.1,0.8,0.2c0.6,0.2,1,0.8,0.9,1.4l-1.2,5.5\n                    c-0.1,0.7-0.8,1.1-1.5,0.9c-0.2,0-0.4-0.1-0.6-0.1c-0.6-0.1-1.3-0.1-2.1-0.1c-1.1,0-2.2,0.2-3.3,0.6c-1,0.4-1.9,0.9-2.7,1.6\n                    c-0.8,0.7-1.4,1.6-1.8,2.6c-0.5,1-0.7,2.1-0.7,3.3V46c0,0.8-0.6,1.4-1.4,1.4h-5.6c-0.8,0-1.4-0.6-1.4-1.4V15.4\n                    C183.1,14.6,183.7,14,184.5,14z\" />\n                </g>\n                <path id=\"u_1_\" class=\"st0\" d=\"M67.4,14.6c-0.7,0-1.3,0.6-1.3,1.3v16.2c0,4.4-3.2,7.4-7,7.4c-0.7,0-1.2,0-1.5,0c-3.9,0-7-3-7-7.4\n                V15.9c0-0.7-0.6-1.3-1.3-1.3H44c-0.7,0-1.3,0.6-1.3,1.3v18c0,7.8,7.2,13.3,14.7,13.3v0h0.1c0,0,0.1,0,0.1,0l0,0h1.4l0,0\n                c0,0,0.1,0,0.1,0h0.2v0c7.5-0.1,14.6-5.5,14.6-13.3v-18c0-0.7-0.6-1.3-1.3-1.3H67.4z\"\n                />\n                <g>\n                    <g>\n                        <g>\n                            <path class=\"st0\" d=\"M144,30.9c0-2.4,0.4-4.7,1.3-6.9c0.9-2.2,2.1-4,3.7-5.7c1.6-1.6,3.5-2.9,5.7-3.8c2.2-0.9,4.6-1.4,7.3-1.4\n                            c2.7,0,5.1,0.5,7.3,1.4c2.2,0.9,4.1,2.2,5.7,3.8c1.6,1.6,2.8,3.5,3.7,5.7c0.9,2.2,1.3,4.4,1.3,6.9s-0.4,4.7-1.3,6.9\n                            c-0.9,2.2-2.1,4.1-3.7,5.7c-1.6,1.6-3.5,2.9-5.7,3.9c-2.2,0.9-4.6,1.4-7.3,1.4c-2.7,0-5.1-0.5-7.3-1.4c-2.2-0.9-4.1-2.2-5.7-3.9\n                            c-1.6-1.6-2.8-3.5-3.7-5.7C144.4,35.6,144,33.3,144,30.9z M161.9,41.5c1.6,0,3-0.3,4.2-1c1.2-0.6,2.2-1.5,3-2.5\n                            c0.8-1,1.4-2.2,1.7-3.4c0.4-1.2,0.6-2.5,0.6-3.7c0-1.2-0.2-2.4-0.6-3.7c-0.4-1.3-1-2.4-1.7-3.4c-0.8-1-1.8-1.9-3-2.5\n                            c-1.2-0.6-2.6-1-4.2-1c-1.6,0-3,0.3-4.2,1c-1.2,0.6-2.2,1.5-3,2.5c-0.8,1-1.4,2.2-1.7,3.4c-0.4,1.3-0.6,2.5-0.6,3.7\n                            c0,1.2,0.2,2.5,0.6,3.7c0.4,1.2,1,2.4,1.7,3.4c0.8,1,1.8,1.9,3,2.5C158.9,41.2,160.3,41.5,161.9,41.5z\"\n                            />\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </svg>\n\n        <h5 routerLink=\"Home\">NOVO Design System</h5>\n        <span class=\"version\">v. {{version}}</span>\n        <a href=\"https://github.com/bullhorn/novo-elements\" target=\"_blank\"\n           class=\"fork-me\">Fork Me On Github</a>\n    </span>\n    <ul class=\"menu-list\">\n        <li class=\"menu-item\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <a routerLink=\"/home\" class=\"menu-link\">Introduction</a>\n        </li>\n\n        <li class=\"menu-section-header\">\n            <span class=\"menu-item-header\">Design</span>\n        </li>\n        <li class=\"menu-item\" *ngFor=\"let route of designRoutes\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <a [routerLink]=\"route.path\" class=\"menu-link\">{{route.title}}</a>\n        </li>\n        <li class=\"menu-section-header\">\n            <span class=\"menu-item-header\">Components</span>\n        </li>\n        <li class=\"menu-item\" *ngFor=\"let route of componentRoutes\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <a [routerLink]=\"route.path\" class=\"menu-link\">{{route.title}}</a>\n        </li>\n        <li class=\"menu-section-header\">\n            <span class=\"menu-item-header\">Utils</span>\n        </li>\n        <li class=\"menu-item\" *ngFor=\"let route of utilRoutes\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <a [routerLink]=\"route.path\" class=\"menu-link\">{{route.title}}</a>\n        </li>\n        <li class=\"menu-line\"></li>\n    </ul>\n</nav>\n<main class=\"main-content\" [ngClass]=\"{open: menuOpen}\">\n    <nav class=\"responsive-nav\">\n        <button name=\"open-menu\" (click)=\"toggleMenu()\">\n            <span>&#9776;</span>\n        </button>\n        <svg data-name=\"bullhorn-text\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n            x=\"0px\" y=\"0px\" width=\"240.2px\" height=\"48.8px\" viewBox=\"0 0 240.2 48.8\"\n            style=\"enable-background:new 0 0 240.2 48.8;\" xml:space=\"preserve\">\n            <g>\n                <path class=\"st0\" d=\"M0,1.5c0-0.6,0.5-1.1,1.1-1.1h20c5.4,0,9.5,1.4,12.3,4.2c2.1,2.1,3.2,4.7,3.2,7.8v0.1c0,1.4-0.2,2.6-0.6,3.8\n            c-0.4,1.1-0.9,2.1-1.5,2.9c-0.6,0.8-1.3,1.6-2.1,2.2c-0.2,0.2-0.4,0.3-0.7,0.5c-0.7,0.5-0.6,1.6,0.1,1.9c1.9,0.9,3.4,1.9,4.7,3.2\n            c1.7,1.7,2.6,4.2,2.6,7.4v0.1c0,2.1-0.4,4-1.2,5.6c-0.8,1.6-2,3-3.5,4c-1.5,1.1-3.4,1.9-5.5,2.5c-2.1,0.6-4.5,0.8-7.2,0.8H1.1\n            C0.5,47.5,0,47,0,46.4V1.5z M19.4,20.3c2.7,0,4.8-0.5,6.5-1.6c1.6-1,2.4-2.6,2.4-4.8v-0.1c0-1.9-0.7-3.3-2.1-4.4\n            c-1.4-1-3.5-1.6-6.2-1.6H9.3c-0.6,0-1.1,0.5-1.1,1.1v10.2c0,0.6,0.5,1.1,1.1,1.1H19.4z M21.8,40.1c2.8,0,5-0.5,6.7-1.6\n            c1.6-1.1,2.4-2.7,2.4-4.8v-0.1c0-2-0.8-3.6-2.4-4.6c-1.6-1.1-4-1.6-7.3-1.6h-12c-0.6,0-1.1,0.5-1.1,1.1V39c0,0.6,0.5,1.1,1.1,1.1\n            H21.8z\" />\n                <path class=\"st0\" d=\"M81.3,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3h-5.9c-0.7,0-1.3-0.6-1.3-1.3v-45\n            C80.1,0.6,80.6,0,81.3,0z\" />\n                <path class=\"st0\" d=\"M96,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3H96c-0.7,0-1.3-0.6-1.3-1.3v-45\n            C94.8,0.6,95.3,0,96,0z\" />\n                <path class=\"st0\" d=\"M109.5,0l4,0c2.3,0,4.2,1.9,4.2,4.2v13.3c0.9-0.9,2.1-1.9,3.7-2.8c1.6-0.9,3.7-1.4,6.3-1.4c2,0,3.9,0.3,5.5,1\n            c1.6,0.7,3,1.6,4,2.8c1.1,1.2,1.9,2.7,2.5,4.4c0.6,1.7,0.9,3.6,0.9,5.6v19.1c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2\n            V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.8-1.3,1.7-1.7,2.8\n            c-0.4,1.1-0.6,2.2-0.6,3.5v16.9c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2V5.8V0z\"\n                />\n                <path class=\"st0\" d=\"M210.5,14.1h5.3c0.7,0,1.4,0.6,1.4,1.3l0.1,2.4c0.4-0.5,0.9-1,1.5-1.5c0.6-0.5,1.3-1,2.1-1.5\n            c0.8-0.5,1.8-0.8,2.8-1.1c1-0.3,2.2-0.4,3.6-0.4c4.2,0,7.4,1.2,9.5,3.7c2.2,2.5,3.3,5.8,3.3,10.1V46c0,0.8-0.7,1.5-1.5,1.5h-5.4\n            c-0.8,0-1.5-0.7-1.5-1.5V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9\n            c-0.7,0.8-1.3,1.7-1.7,2.8c-0.4,1.1-0.6,2.2-0.6,3.5V46c0,0.8-0.7,1.5-1.5,1.5h-5.4c-0.8,0-1.5-0.7-1.5-1.5V15.5\n            C209.1,14.7,209.7,14.1,210.5,14.1z\" />\n                <g>\n                    <path class=\"st0\" d=\"M184.5,14h5.3c0.8,0,1.4,0.6,1.4,1.4l0.1,2.8c0.4-0.5,0.9-1,1.5-1.6c0.6-0.6,1.3-1.1,2.1-1.6\n                c0.8-0.5,1.7-0.9,2.8-1.2c1.1-0.3,2.3-0.5,3.7-0.5c0.8,0,1.5,0,2.2,0.1c0.3,0,0.5,0.1,0.8,0.2c0.6,0.2,1,0.8,0.9,1.4l-1.2,5.5\n                c-0.1,0.7-0.8,1.1-1.5,0.9c-0.2,0-0.4-0.1-0.6-0.1c-0.6-0.1-1.3-0.1-2.1-0.1c-1.1,0-2.2,0.2-3.3,0.6c-1,0.4-1.9,0.9-2.7,1.6\n                c-0.8,0.7-1.4,1.6-1.8,2.6c-0.5,1-0.7,2.1-0.7,3.3V46c0,0.8-0.6,1.4-1.4,1.4h-5.6c-0.8,0-1.4-0.6-1.4-1.4V15.4\n                C183.1,14.6,183.7,14,184.5,14z\" />\n                </g>\n                <path id=\"u_1_\" class=\"st0\" d=\"M67.4,14.6c-0.7,0-1.3,0.6-1.3,1.3v16.2c0,4.4-3.2,7.4-7,7.4c-0.7,0-1.2,0-1.5,0c-3.9,0-7-3-7-7.4\n            V15.9c0-0.7-0.6-1.3-1.3-1.3H44c-0.7,0-1.3,0.6-1.3,1.3v18c0,7.8,7.2,13.3,14.7,13.3v0h0.1c0,0,0.1,0,0.1,0l0,0h1.4l0,0\n            c0,0,0.1,0,0.1,0h0.2v0c7.5-0.1,14.6-5.5,14.6-13.3v-18c0-0.7-0.6-1.3-1.3-1.3H67.4z\"\n                />\n                <g>\n                    <g>\n                        <g>\n                            <path class=\"st0\" d=\"M144,30.9c0-2.4,0.4-4.7,1.3-6.9c0.9-2.2,2.1-4,3.7-5.7c1.6-1.6,3.5-2.9,5.7-3.8c2.2-0.9,4.6-1.4,7.3-1.4\n                        c2.7,0,5.1,0.5,7.3,1.4c2.2,0.9,4.1,2.2,5.7,3.8c1.6,1.6,2.8,3.5,3.7,5.7c0.9,2.2,1.3,4.4,1.3,6.9s-0.4,4.7-1.3,6.9\n                        c-0.9,2.2-2.1,4.1-3.7,5.7c-1.6,1.6-3.5,2.9-5.7,3.9c-2.2,0.9-4.6,1.4-7.3,1.4c-2.7,0-5.1-0.5-7.3-1.4c-2.2-0.9-4.1-2.2-5.7-3.9\n                        c-1.6-1.6-2.8-3.5-3.7-5.7C144.4,35.6,144,33.3,144,30.9z M161.9,41.5c1.6,0,3-0.3,4.2-1c1.2-0.6,2.2-1.5,3-2.5\n                        c0.8-1,1.4-2.2,1.7-3.4c0.4-1.2,0.6-2.5,0.6-3.7c0-1.2-0.2-2.4-0.6-3.7c-0.4-1.3-1-2.4-1.7-3.4c-0.8-1-1.8-1.9-3-2.5\n                        c-1.2-0.6-2.6-1-4.2-1c-1.6,0-3,0.3-4.2,1c-1.2,0.6-2.2,1.5-3,2.5c-0.8,1-1.4,2.2-1.7,3.4c-0.4,1.3-0.6,2.5-0.6,3.7\n                        c0,1.2,0.2,2.5,0.6,3.7c0.4,1.2,1,2.4,1.7,3.4c0.8,1,1.8,1.9,3,2.5C158.9,41.2,160.3,41.5,161.9,41.5z\"\n                            />\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </svg>\n        <strong>Design System</strong>\n    </nav>\n    <router-outlet></router-outlet>\n</main>\n"

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// Vendor
	
	
	var _core = __webpack_require__(1);
	
	var _router = __webpack_require__(279);
	
	var _novoElements = __webpack_require__(35);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DemoComponent = exports.DemoComponent = (_dec = (0, _core.Component)({
	    selector: 'demo-app',
	    template: __webpack_require__(821)
	}), _dec(_class = function () {
	    function DemoComponent(router, viewContainerRef, toaster, modalService) {
	        var _this = this;
	
	        _classCallCheck(this, DemoComponent);
	
	        this.viewContainerRef = viewContainerRef;
	
	        toaster.parentViewContainer = viewContainerRef;
	        modalService.parentViewContainer = viewContainerRef;
	
	        this.menuOpen = false;
	        this.version = ("1.0.14");
	
	        this.designRoutes = router.config.filter(function (r) {
	            return r.section === 'design';
	        }).sort(this.sortMenu);
	        this.componentRoutes = router.config.filter(function (r) {
	            return r.section === 'components';
	        }).sort(this.sortMenu);
	        this.utilRoutes = router.config.filter(function (r) {
	            return r.section === 'utils';
	        }).sort(this.sortMenu);
	
	        router.routerEvents.subscribe(function () {
	            document.body.scrollTop = 0;
	            _this.menuOpen = false;
	        });
	    }
	
	    _createClass(DemoComponent, [{
	        key: 'sortMenu',
	        value: function sortMenu(a, b) {
	            if (a.title < b.title) return -1;
	            if (a.title > b.title) return 1;
	            return 0;
	        }
	    }, {
	        key: 'toggleMenu',
	        value: function toggleMenu() {
	            this.menuOpen = !this.menuOpen;
	        }
	    }]);
	
	    return DemoComponent;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_router.Router, _core.ViewContainerRef, _novoElements.NovoToastService, _novoElements.NovoModalService], DemoComponent);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vYXBwL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7a0JBQUE7O0FBR0E7OztBQUZBOztBQUNBOztBQUVBOzs7O0lBTWEsYSxXQUFBLGEsV0FKWixxQkFBVTtBQUNQLGNBQVUsVUFESDtBQUVQLGNBQVUsUUFBUSxZQUFSO0FBRkgsQ0FBVixDO0FBS0csMkJBQVksTUFBWixFQUEyQixnQkFBM0IsRUFBOEQsT0FBOUQsRUFBd0YsWUFBeEYsRUFBdUg7QUFBQTs7QUFBQTs7QUFDbkgsYUFBSyxnQkFBTCxHQUF3QixnQkFBeEI7O0FBRUEsZ0JBQVEsbUJBQVIsR0FBOEIsZ0JBQTlCO0FBQ0EscUJBQWEsbUJBQWIsR0FBbUMsZ0JBQW5DOztBQUVBLGFBQUssUUFBTCxHQUFnQixLQUFoQjtBQUNBLGFBQUssT0FBTCxHQUFlLE9BQWY7O0FBRUEsYUFBSyxZQUFMLEdBQW9CLE9BQU8sTUFBUCxDQUFjLE1BQWQsQ0FBcUI7QUFBQSxtQkFBSyxFQUFFLE9BQUYsS0FBYyxRQUFuQjtBQUFBLFNBQXJCLEVBQWtELElBQWxELENBQXVELEtBQUssUUFBNUQsQ0FBcEI7QUFDQSxhQUFLLGVBQUwsR0FBdUIsT0FBTyxNQUFQLENBQWMsTUFBZCxDQUFxQjtBQUFBLG1CQUFLLEVBQUUsT0FBRixLQUFjLFlBQW5CO0FBQUEsU0FBckIsRUFBc0QsSUFBdEQsQ0FBMkQsS0FBSyxRQUFoRSxDQUF2QjtBQUNBLGFBQUssVUFBTCxHQUFrQixPQUFPLE1BQVAsQ0FBYyxNQUFkLENBQXFCO0FBQUEsbUJBQUssRUFBRSxPQUFGLEtBQWMsT0FBbkI7QUFBQSxTQUFyQixFQUFpRCxJQUFqRCxDQUFzRCxLQUFLLFFBQTNELENBQWxCOztBQUVBLGVBQU8sWUFBUCxDQUFvQixTQUFwQixDQUE4QixZQUFNO0FBQ2hDLHFCQUFTLElBQVQsQ0FBYyxTQUFkLEdBQTBCLENBQTFCO0FBQ0Esa0JBQUssUUFBTCxHQUFnQixLQUFoQjtBQUNILFNBSEQ7QUFJSDs7OztpQ0FFUSxDLEVBQUcsQyxFQUFHO0FBQ1gsZ0JBQUksRUFBRSxLQUFGLEdBQVUsRUFBRSxLQUFoQixFQUF1QixPQUFPLENBQUMsQ0FBUjtBQUN2QixnQkFBSSxFQUFFLEtBQUYsR0FBVSxFQUFFLEtBQWhCLEVBQXVCLE9BQU8sQ0FBUDtBQUN2QixtQkFBTyxDQUFQO0FBQ0g7OztxQ0FFWTtBQUNULGlCQUFLLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLLFFBQXRCO0FBQ0g7Ozs7O3NKQTVCUSxhIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vLyBWZW5kb3JcbmltcG9ydCB7IE5vdm9Ub2FzdFNlcnZpY2UsIE5vdm9Nb2RhbFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkZW1vLWFwcCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vQXBwLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBEZW1vQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXI6Um91dGVyLCB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYsIHRvYXN0ZXI6Tm92b1RvYXN0U2VydmljZSwgbW9kYWxTZXJ2aWNlOk5vdm9Nb2RhbFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmID0gdmlld0NvbnRhaW5lclJlZjtcblxuICAgICAgICB0b2FzdGVyLnBhcmVudFZpZXdDb250YWluZXIgPSB2aWV3Q29udGFpbmVyUmVmO1xuICAgICAgICBtb2RhbFNlcnZpY2UucGFyZW50Vmlld0NvbnRhaW5lciA9IHZpZXdDb250YWluZXJSZWY7XG5cbiAgICAgICAgdGhpcy5tZW51T3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBWRVJTSU9OO1xuXG4gICAgICAgIHRoaXMuZGVzaWduUm91dGVzID0gcm91dGVyLmNvbmZpZy5maWx0ZXIociA9PiByLnNlY3Rpb24gPT09ICdkZXNpZ24nKS5zb3J0KHRoaXMuc29ydE1lbnUpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJvdXRlcyA9IHJvdXRlci5jb25maWcuZmlsdGVyKHIgPT4gci5zZWN0aW9uID09PSAnY29tcG9uZW50cycpLnNvcnQodGhpcy5zb3J0TWVudSk7XG4gICAgICAgIHRoaXMudXRpbFJvdXRlcyA9IHJvdXRlci5jb25maWcuZmlsdGVyKHIgPT4gci5zZWN0aW9uID09PSAndXRpbHMnKS5zb3J0KHRoaXMuc29ydE1lbnUpO1xuXG4gICAgICAgIHJvdXRlci5yb3V0ZXJFdmVudHMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIHRoaXMubWVudU9wZW4gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc29ydE1lbnUoYSwgYikge1xuICAgICAgICBpZiAoYS50aXRsZSA8IGIudGl0bGUpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGEudGl0bGUgPiBiLnRpdGxlKSByZXR1cm4gMTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudSgpIHtcbiAgICAgICAgdGhpcy5tZW51T3BlbiA9ICF0aGlzLm1lbnVPcGVuO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 728:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.routing = exports.routes = undefined;
	
	var _router = __webpack_require__(279);
	
	var _Home = __webpack_require__(442);
	
	var _all = __webpack_require__(440);
	
	var _all2 = __webpack_require__(762);
	
	var _all3 = __webpack_require__(441);
	
	// APP
	var routes = exports.routes = [{ path: '', component: _Home.Home }, { path: 'home', component: _Home.Home },
	
	// Base Pages (design system)
	{ path: 'color', component: _all.ColorComponent, title: 'Color', section: 'design' }, { path: 'composition', component: _all.CompositionComponent, title: 'Composition', section: 'design' }, { path: 'typography', component: _all.TypographyComponent, title: 'Typography', section: 'design' }, { path: 'icons', component: _all.IconographyComponent, title: 'Iconography', section: 'design' },
	
	// Element/Component/Service/etc.. Demos
	{ path: 'button', component: _all3.ButtonDemoComponent, title: 'Buttons', section: 'components' }, { path: 'radio', component: _all3.RadioDemoComponent, title: 'Radio', section: 'components' }, { path: 'quick-note', component: _all3.QuickNoteDemoComponent, title: 'Quick Note', section: 'components' }, { path: 'modal', component: _all3.ModalDemoComponent, title: 'Modal', section: 'components' }, { path: 'form', component: _all3.FormDemoComponent, title: 'Form', section: 'components' }, { path: 'toast', component: _all3.ToastDemoComponent, title: 'Toast', section: 'components' }, { path: 'tooltip', component: _all3.TooltipDemoComponent, title: 'Tooltip', section: 'components' }, { path: 'cards', component: _all3.CardDemoComponent, title: 'Cards', section: 'components' }, { path: 'loading', component: _all3.LoadingDemoComponent, title: 'Loading', section: 'components' }, { path: 'dropdown', component: _all3.DropdownDemoComponent, title: 'Dropdown', section: 'components' }, { path: 'picker', component: _all3.PickerDemoComponent, title: 'Picker', section: 'components' }, { path: 'chips', component: _all3.ChipsDemoComponent, title: 'Chips', section: 'components' }, { path: 'select', component: _all3.SelectDemoComponent, title: 'Select', section: 'components' }, { path: 'tabs', component: _all3.TabsDemoComponent, title: 'Tabs', section: 'components' }, { path: 'table', component: _all3.TableDemoComponent, title: 'Table', section: 'components' }, { path: 'list', component: _all3.ListDemoComponent, title: 'List', section: 'components' }, { path: 'header', component: _all3.HeaderDemoComponent, title: 'Header', section: 'components' }, { path: 'switch', component: _all3.SwitchDemoComponent, title: 'Switch', section: 'components' }, { path: 'drawer', component: _all3.DrawerDemoComponent, title: 'Drawer', section: 'components' }, { path: 'calendar', component: _all3.CalendarDemoComponent, title: 'Calendar', section: 'components' }, { path: 'dragula', component: _all3.DragulaDemoComponent, title: 'Dragula', section: 'components' }, { path: 'tiles', component: _all3.TilesDemoComponent, title: 'Tiles', section: 'components' }, { path: 'slides', component: _all3.SlidesDemoComponent, title: 'Slides', section: 'components' }, { path: 'editor', component: _all3.EditorDemoComponent, title: 'Editor', section: 'components' }, { path: 'tipwell', component: _all3.TipWellDemoComponent, title: 'Tip Well', section: 'components' },
	
	// Utils
	{ path: 'utils', component: _all2.UtilsDemoComponent, title: 'Utils', section: 'utils' }, { path: 'pipes', component: _all2.PipesDemoComponent, title: 'Pipes', section: 'utils' },
	
	// Catch All
	{ path: '**', redirectTo: '/' }]; // NG2
	var routing = exports.routing = _router.RouterModule.forRoot(routes, { useHash: true });
	//# sourceMappingURL=data:application/json;base64,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QUFoQiIsImZpbGUiOiJBcHAucm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIEFQUFxuaW1wb3J0IHsgSG9tZSB9IGZyb20gJy4vLi4vcGFnZXMvaG9tZS9Ib21lJztcbmltcG9ydCB7IENvbG9yQ29tcG9uZW50LCBUeXBvZ3JhcGh5Q29tcG9uZW50LCBDb21wb3NpdGlvbkNvbXBvbmVudCwgSWNvbm9ncmFwaHlDb21wb25lbnQgfSBmcm9tICcuLy4uL3BhZ2VzL2Rlc2lnbi9hbGwnO1xuaW1wb3J0IHsgUGlwZXNEZW1vQ29tcG9uZW50LCBVdGlsc0RlbW9Db21wb25lbnQgfSBmcm9tICcuLy4uL3BhZ2VzL3V0aWxzL2FsbCc7XG5pbXBvcnQge1xuICAgIEJ1dHRvbkRlbW9Db21wb25lbnQsXG4gICAgTG9hZGluZ0RlbW9Db21wb25lbnQsXG4gICAgQ2FyZERlbW9Db21wb25lbnQsXG4gICAgVG9hc3REZW1vQ29tcG9uZW50LFxuICAgIFRvb2x0aXBEZW1vQ29tcG9uZW50LFxuICAgIEhlYWRlckRlbW9Db21wb25lbnQsXG4gICAgVGFic0RlbW9Db21wb25lbnQsXG4gICAgVGlsZXNEZW1vQ29tcG9uZW50LFxuICAgIE1vZGFsRGVtb0NvbXBvbmVudCxcbiAgICBRdWlja05vdGVEZW1vQ29tcG9uZW50LFxuICAgIFJhZGlvRGVtb0NvbXBvbmVudCxcbiAgICBEcm9wZG93bkRlbW9Db21wb25lbnQsXG4gICAgU2VsZWN0RGVtb0NvbXBvbmVudCxcbiAgICBMaXN0RGVtb0NvbXBvbmVudCxcbiAgICBTd2l0Y2hEZW1vQ29tcG9uZW50LFxuICAgIERyYXdlckRlbW9Db21wb25lbnQsXG4gICAgRHJhZ3VsYURlbW9Db21wb25lbnQsXG4gICAgU2xpZGVzRGVtb0NvbXBvbmVudCxcbiAgICBQaWNrZXJEZW1vQ29tcG9uZW50LFxuICAgIENoaXBzRGVtb0NvbXBvbmVudCxcbiAgICBDYWxlbmRhckRlbW9Db21wb25lbnQsXG4gICAgRWRpdG9yRGVtb0NvbXBvbmVudCxcbiAgICBUaXBXZWxsRGVtb0NvbXBvbmVudCxcbiAgICBUYWJsZURlbW9Db21wb25lbnQsXG4gICAgRm9ybURlbW9Db21wb25lbnRcbn0gZnJvbSAnLi8uLi9wYWdlcy9lbGVtZW50cy9hbGwnO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOlJvdXRlcyA9IFtcbiAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEhvbWUgfSxcbiAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lIH0sXG5cbiAgICAvLyBCYXNlIFBhZ2VzIChkZXNpZ24gc3lzdGVtKVxuICAgIHsgcGF0aDogJ2NvbG9yJywgY29tcG9uZW50OiBDb2xvckNvbXBvbmVudCwgdGl0bGU6ICdDb2xvcicsIHNlY3Rpb246ICdkZXNpZ24nIH0sXG4gICAgeyBwYXRoOiAnY29tcG9zaXRpb24nLCBjb21wb25lbnQ6IENvbXBvc2l0aW9uQ29tcG9uZW50LCB0aXRsZTogJ0NvbXBvc2l0aW9uJywgc2VjdGlvbjogJ2Rlc2lnbicgfSxcbiAgICB7IHBhdGg6ICd0eXBvZ3JhcGh5JywgY29tcG9uZW50OiBUeXBvZ3JhcGh5Q29tcG9uZW50LCB0aXRsZTogJ1R5cG9ncmFwaHknLCBzZWN0aW9uOiAnZGVzaWduJyB9LFxuICAgIHsgcGF0aDogJ2ljb25zJywgY29tcG9uZW50OiBJY29ub2dyYXBoeUNvbXBvbmVudCwgdGl0bGU6ICdJY29ub2dyYXBoeScsIHNlY3Rpb246ICdkZXNpZ24nIH0sXG5cbiAgICAvLyBFbGVtZW50L0NvbXBvbmVudC9TZXJ2aWNlL2V0Yy4uIERlbW9zXG4gICAgeyBwYXRoOiAnYnV0dG9uJywgY29tcG9uZW50OiBCdXR0b25EZW1vQ29tcG9uZW50LCB0aXRsZTogJ0J1dHRvbnMnLCBzZWN0aW9uOiAnY29tcG9uZW50cycgfSxcbiAgICB7IHBhdGg6ICdyYWRpbycsIGNvbXBvbmVudDogUmFkaW9EZW1vQ29tcG9uZW50LCB0aXRsZTogJ1JhZGlvJywgc2VjdGlvbjogJ2NvbXBvbmVudHMnIH0sXG4gICAgeyBwYXRoOiAncXVpY2stbm90ZScsIGNvbXBvbmVudDogUXVpY2tOb3RlRGVtb0NvbXBvbmVudCwgdGl0bGU6ICdRdWljayBOb3RlJywgc2VjdGlvbjogJ2NvbXBvbmVudHMnIH0sXG4gICAgeyBwYXRoOiAnbW9kYWwnLCBjb21wb25lbnQ6IE1vZGFsRGVtb0NvbXBvbmVudCwgdGl0bGU6ICdNb2RhbCcsIHNlY3Rpb246ICdjb21wb25lbnRzJyB9LFxuICAgIHsgcGF0aDogJ2Zvcm0nLCBjb21wb25lbnQ6IEZvcm1EZW1vQ29tcG9uZW50LCB0aXRsZTogJ0Zvcm0nLCBzZWN0aW9uOiAnY29tcG9uZW50cycgfSxcbiAgICB7IHBhdGg6ICd0b2FzdCcsIGNvbXBvbmVudDogVG9hc3REZW1vQ29tcG9uZW50LCB0aXRsZTogJ1RvYXN0Jywgc2VjdGlvbjogJ2NvbXBvbmVudHMnIH0sXG4gICAgeyBwYXRoOiAndG9vbHRpcCcsIGNvbXBvbmVudDogVG9vbHRpcERlbW9Db21wb25lbnQsIHRpdGxlOiAnVG9vbHRpcCcsIHNlY3Rpb246ICdjb21wb25lbnRzJyB9LFxuICAgIHsgcGF0aDogJ2NhcmRzJywgY29tcG9uZW50OiBDYXJkRGVtb0NvbXBvbmVudCwgdGl0bGU6ICdDYXJkcycsIHNlY3Rpb246ICdjb21wb25lbnRzJyB9LFxuICAgIHsgcGF0aDogJ2xvYWRpbmcnLCBjb21wb25lbnQ6IExvYWRpbmdEZW1vQ29tcG9uZW50LCB0aXRsZTogJ0xvYWRpbmcnLCBzZWN0aW9uOiAnY29tcG9uZW50cycgfSxcbiAgICB7IHBhdGg6ICdkcm9wZG93bicsIGNvbXBvbmVudDogRHJvcGRvd25EZW1vQ29tcG9uZW50LCB0aXRsZTogJ0Ryb3Bkb3duJywgc2VjdGlvbjogJ2NvbXBvbmVudHMnIH0sXG4gICAgeyBwYXRoOiAncGlja2VyJywgY29tcG9uZW50OiBQaWNrZXJEZW1vQ29tcG9uZW50LCB0aXRsZTogJ1BpY2tlcicsIHNlY3Rpb246ICdjb21wb25lbnRzJyB9LFxuICAgIHsgcGF0aDogJ2NoaXBzJywgY29tcG9uZW50OiBDaGlwc0RlbW9Db21wb25lbnQsIHRpdGxlOiAnQ2hpcHMnLCBzZWN0aW9uOiAnY29tcG9uZW50cycgfSxcbiAgICB7IHBhdGg6ICdzZWxlY3QnLCBjb21wb25lbnQ6IFNlbGVjdERlbW9Db21wb25lbnQsIHRpdGxlOiAnU2VsZWN0Jywgc2VjdGlvbjogJ2NvbXBvbmVudHMnIH0sXG4gICAgeyBwYXRoOiAndGFicycsIGNvbXBvbmVudDogVGFic0RlbW9Db21wb25lbnQsIHRpdGxlOiAnVGFicycsIHNlY3Rpb246ICdjb21wb25lbnRzJyB9LFxuICAgIHsgcGF0aDogJ3RhYmxlJywgY29tcG9uZW50OiBUYWJsZURlbW9Db21wb25lbnQsIHRpdGxlOiAnVGFibGUnLCBzZWN0aW9uOiAnY29tcG9uZW50cycgfSxcbiAgICB7IHBhdGg6ICdsaXN0JywgY29tcG9uZW50OiBMaXN0RGVtb0NvbXBvbmVudCwgdGl0bGU6ICdMaXN0Jywgc2VjdGlvbjogJ2NvbXBvbmVudHMnIH0sXG4gICAgeyBwYXRoOiAnaGVhZGVyJywgY29tcG9uZW50OiBIZWFkZXJEZW1vQ29tcG9uZW50LCB0aXRsZTogJ0hlYWRlcicsIHNlY3Rpb246ICdjb21wb25lbnRzJyB9LFxuICAgIHsgcGF0aDogJ3N3aXRjaCcsIGNvbXBvbmVudDogU3dpdGNoRGVtb0NvbXBvbmVudCwgdGl0bGU6ICdTd2l0Y2gnLCBzZWN0aW9uOiAnY29tcG9uZW50cycgfSxcbiAgICB7IHBhdGg6ICdkcmF3ZXInLCBjb21wb25lbnQ6IERyYXdlckRlbW9Db21wb25lbnQsIHRpdGxlOiAnRHJhd2VyJywgc2VjdGlvbjogJ2NvbXBvbmVudHMnIH0sXG4gICAgeyBwYXRoOiAnY2FsZW5kYXInLCBjb21wb25lbnQ6IENhbGVuZGFyRGVtb0NvbXBvbmVudCwgdGl0bGU6ICdDYWxlbmRhcicsIHNlY3Rpb246ICdjb21wb25lbnRzJyB9LFxuICAgIHsgcGF0aDogJ2RyYWd1bGEnLCBjb21wb25lbnQ6IERyYWd1bGFEZW1vQ29tcG9uZW50LCB0aXRsZTogJ0RyYWd1bGEnLCBzZWN0aW9uOiAnY29tcG9uZW50cycgfSxcbiAgICB7IHBhdGg6ICd0aWxlcycsIGNvbXBvbmVudDogVGlsZXNEZW1vQ29tcG9uZW50LCB0aXRsZTogJ1RpbGVzJywgc2VjdGlvbjogJ2NvbXBvbmVudHMnIH0sXG4gICAgeyBwYXRoOiAnc2xpZGVzJywgY29tcG9uZW50OiBTbGlkZXNEZW1vQ29tcG9uZW50LCB0aXRsZTogJ1NsaWRlcycsIHNlY3Rpb246ICdjb21wb25lbnRzJyB9LFxuICAgIHsgcGF0aDogJ2VkaXRvcicsIGNvbXBvbmVudDogRWRpdG9yRGVtb0NvbXBvbmVudCwgdGl0bGU6ICdFZGl0b3InLCBzZWN0aW9uOiAnY29tcG9uZW50cycgfSxcbiAgICB7IHBhdGg6ICd0aXB3ZWxsJywgY29tcG9uZW50OiBUaXBXZWxsRGVtb0NvbXBvbmVudCwgdGl0bGU6ICdUaXAgV2VsbCcsIHNlY3Rpb246ICdjb21wb25lbnRzJyB9LFxuXG4gICAgLy8gVXRpbHNcbiAgICB7IHBhdGg6ICd1dGlscycsIGNvbXBvbmVudDogVXRpbHNEZW1vQ29tcG9uZW50LCB0aXRsZTogJ1V0aWxzJywgc2VjdGlvbjogJ3V0aWxzJyB9LFxuICAgIHsgcGF0aDogJ3BpcGVzJywgY29tcG9uZW50OiBQaXBlc0RlbW9Db21wb25lbnQsIHRpdGxlOiAnUGlwZXMnLCBzZWN0aW9uOiAndXRpbHMnIH0sXG5cbiAgICAvLyBDYXRjaCBBbGxcbiAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICcvJyB9XG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcywgeyB1c2VIYXNoOiB0cnVlIH0pO1xuIl19

/***/ },

/***/ 819:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CodeSnippet = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	
	var _core = __webpack_require__(1);
	
	var _platformBrowser = __webpack_require__(97);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CodeSnippet = exports.CodeSnippet = (_dec = (0, _core.Component)({
	    inputs: ['code'],
	    selector: 'code-snippet',
	    template: '<pre><code [innerHtml]="highlight"></code></pre>'
	}), _dec(_class = function () {
	    function CodeSnippet(sanitizer) {
	        _classCallCheck(this, CodeSnippet);
	
	        this.sanitizer = sanitizer;
	    }
	
	    _createClass(CodeSnippet, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.highlight = this.sanitizer.bypassSecurityTrustHtml(hljs.highlightAuto(this.code).value);
	        }
	    }]);
	
	    return CodeSnippet;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_platformBrowser.DomSanitizationService], CodeSnippet);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tCQUFBOzs7QUFDQTs7QUFDQTs7OztJQU9hLFcsV0FBQSxXLFdBTFoscUJBQVU7QUFDUCxZQUFRLENBQUMsTUFBRCxDQUREO0FBRVAsY0FBVSxjQUZIO0FBR1AsY0FBVTtBQUhILENBQVYsQztBQU1HLHlCQUFZLFNBQVosRUFBOEM7QUFBQTs7QUFDMUMsYUFBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0g7Ozs7bUNBRVU7QUFDUCxpQkFBSyxTQUFMLEdBQWlCLEtBQUssU0FBTCxDQUFlLHVCQUFmLENBQXVDLEtBQUssYUFBTCxDQUFtQixLQUFLLElBQXhCLEVBQThCLEtBQXJFLENBQWpCO0FBQ0g7Ozs7O3VGQVBRLFciLCJmaWxlIjoiQ29kZVNuaXBwZXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIGlucHV0czogWydjb2RlJ10sXG4gICAgc2VsZWN0b3I6ICdjb2RlLXNuaXBwZXQnLFxuICAgIHRlbXBsYXRlOiAnPHByZT48Y29kZSBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodFwiPjwvY29kZT48L3ByZT4nXG59KVxuZXhwb3J0IGNsYXNzIENvZGVTbmlwcGV0IHtcbiAgICBjb25zdHJ1Y3RvcihzYW5pdGl6ZXI6RG9tU2FuaXRpemF0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLnNhbml0aXplciA9IHNhbml0aXplcjtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHQgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChobGpzLmhpZ2hsaWdodEF1dG8odGhpcy5jb2RlKS52YWx1ZSk7XG4gICAgfVxufVxuIl19

/***/ },

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.main = main;
	exports.bootstrapDomReady = bootstrapDomReady;
	
	var _core = __webpack_require__(1);
	
	var _platformBrowserDynamic = __webpack_require__(423);
	
	var _novoElementsDemo = __webpack_require__(730);
	
	// Enable prod mode
	if (true) {
	    (0, _core.enableProdMode)();
	}
	
	/**
	 * Bootstrap via function to ensure DOM is ready
	 */
	
	// APP
	// NG2
	function main() {
	    return (0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_novoElementsDemo.NovoElementsDemoModule);
	}
	
	/**
	 * If DEV then we bootstrap via HMR otherwise, just call directly
	 */
	function bootstrapDomReady() {
	    document.addEventListener('DOMContentLoaded', main);
	}
	
	// Hot Module Replacement
	if (false) {
	    // activate hot module reload
	    if (document.readyState === 'complete') {
	        main();
	    } else {
	        bootstrapDomReady();
	    }
	    module.hot.accept();
	} else {
	    bootstrapDomReady();
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vbWFpbi5icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O1FBY2dCLEksR0FBQSxJO1FBT0EsaUIsR0FBQSxpQjs7QUFwQmhCOztBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxRQUFRLFlBQVosRUFBMEI7QUFDdEI7QUFDSDs7QUFFRDs7OztBQVJBO0FBSEE7QUFjTyxTQUFTLElBQVQsR0FBZ0I7QUFDbkIsV0FBTyxzREFBeUIsZUFBekIsMENBQVA7QUFDSDs7QUFFRDs7O0FBR08sU0FBUyxpQkFBVCxHQUE2QjtBQUNoQyxhQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxJQUE5QztBQUNIOztBQUVEO0FBQ0EsSUFBSSxRQUFRLGFBQVIsSUFBeUIsR0FBN0IsRUFBa0M7QUFDOUI7QUFDQSxRQUFJLFNBQVMsVUFBVCxLQUF3QixVQUE1QixFQUF3QztBQUNwQztBQUNILEtBRkQsTUFFTztBQUNIO0FBQ0g7QUFDRCxXQUFPLEdBQVAsQ0FBVyxNQUFYO0FBQ0gsQ0FSRCxNQVFPO0FBQ0g7QUFDSCIsImZpbGUiOiJtYWluLmJyb3dzZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvRWxlbWVudHNEZW1vTW9kdWxlIH0gZnJvbSAnLi9ub3ZvLWVsZW1lbnRzLWRlbW8ubW9kdWxlJztcblxuLy8gRW5hYmxlIHByb2QgbW9kZVxuaWYgKEVOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZW5hYmxlUHJvZE1vZGUoKTtcbn1cblxuLyoqXG4gKiBCb290c3RyYXAgdmlhIGZ1bmN0aW9uIHRvIGVuc3VyZSBET00gaXMgcmVhZHlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgcmV0dXJuIHBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoTm92b0VsZW1lbnRzRGVtb01vZHVsZSk7XG59XG5cbi8qKlxuICogSWYgREVWIHRoZW4gd2UgYm9vdHN0cmFwIHZpYSBITVIgb3RoZXJ3aXNlLCBqdXN0IGNhbGwgZGlyZWN0bHlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJvb3RzdHJhcERvbVJlYWR5KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBtYWluKTtcbn1cblxuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYgKEVOViA9PT0gJ2RldmVsb3BtZW50JyAmJiBITVIpIHtcbiAgICAvLyBhY3RpdmF0ZSBob3QgbW9kdWxlIHJlbG9hZFxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgIG1haW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBib290c3RyYXBEb21SZWFkeSgpO1xuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xufSBlbHNlIHtcbiAgICBib290c3RyYXBEb21SZWFkeSgpO1xufVxuIl19

/***/ },

/***/ 730:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NovoElementsDemoModule = undefined;
	
	var _dec, _class; // NG2
	
	// APP
	
	// Vendor
	
	
	var _core = __webpack_require__(1);
	
	var _http = __webpack_require__(414);
	
	var _platformBrowser = __webpack_require__(97);
	
	var _forms = __webpack_require__(11);
	
	var _App = __webpack_require__(727);
	
	var _App2 = __webpack_require__(728);
	
	var _CodeSnippet = __webpack_require__(729);
	
	var _Home = __webpack_require__(442);
	
	var _all = __webpack_require__(440);
	
	var _all2 = __webpack_require__(441);
	
	var _UtilsDemo = __webpack_require__(444);
	
	var _PipesDemo = __webpack_require__(443);
	
	__webpack_require__(819);
	
	var _novoElements = __webpack_require__(35);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NovoElementsDemoModule = exports.NovoElementsDemoModule = (_dec = (0, _core.NgModule)({
	    declarations: [_App.DemoComponent, _CodeSnippet.CodeSnippet, _Home.Home, _all.ColorComponent, _all.CompositionComponent, _all.TypographyComponent, _all.IconographyComponent, _all2.ButtonDemoComponent, _all2.RadioDemoComponent, _all2.QuickNoteDemoComponent, _all2.ModalDemoComponent, _all2.FormDemoComponent, _all2.ToastDemoComponent, _all2.TooltipDemoComponent, _all2.CardDemoComponent, _all2.LoadingDemoComponent, _all2.DropdownDemoComponent, _all2.PickerDemoComponent, _all2.ChipsDemoComponent, _all2.SelectDemoComponent, _all2.TabsDemoComponent, _all2.TableDemoComponent, _all2.ListDemoComponent, _all2.HeaderDemoComponent, _all2.SwitchDemoComponent, _all2.DrawerDemoComponent, _all2.CalendarDemoComponent, _all2.DragulaDemoComponent, _all2.TilesDemoComponent, _all2.SlidesDemoComponent, _all2.EditorDemoComponent, _all2.TipWellDemoComponent, _UtilsDemo.UtilsDemoComponent, _PipesDemo.PipesDemoComponent],
	    imports: [_platformBrowser.BrowserModule, _forms.FormsModule, _http.HttpModule, _forms.ReactiveFormsModule, _App2.routing, _novoElements.NovoElementsModule],
	    providers: [_novoElements.FormUtils],
	    entryComponents: [_App.DemoComponent],
	    bootstrap: [_App.DemoComponent]
	}), _dec(_class = function NovoElementsDemoModule() {
	    _classCallCheck(this, NovoElementsDemoModule);
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vbm92by1lbGVtZW50cy1kZW1vLm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O2tCQUFBOztBQUtBOztBQXFDQTs7O0FBekNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQTJCQTs7QUFDQTs7QUFFQTs7QUFFQTs7OztJQXVEYSxzQixXQUFBLHNCLFdBckRaLG9CQUFTO0FBQ04sa0JBQWMsNjNCQURSO0FBcUNOLGFBQVMsbUpBckNIO0FBNkNOLGVBQVcseUJBN0NMO0FBZ0ROLHFCQUFpQixvQkFoRFg7QUFtRE4sZUFBVztBQW5ETCxDQUFULEMiLCJmaWxlIjoibm92by1lbGVtZW50cy1kZW1vLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IERlbW9Db21wb25lbnQgfSBmcm9tICcuL2FwcC9BcHAnO1xuaW1wb3J0IHsgcm91dGluZyB9IGZyb20gJy4vYXBwL0FwcC5yb3V0ZXMnO1xuaW1wb3J0IHsgQ29kZVNuaXBwZXQgfSBmcm9tICcuL2VsZW1lbnRzL2NvZGVzbmlwcGV0L0NvZGVTbmlwcGV0JztcbmltcG9ydCB7IEhvbWUgfSBmcm9tICcuL3BhZ2VzL2hvbWUvSG9tZSc7XG5pbXBvcnQgeyBDb2xvckNvbXBvbmVudCwgQ29tcG9zaXRpb25Db21wb25lbnQsIFR5cG9ncmFwaHlDb21wb25lbnQsIEljb25vZ3JhcGh5Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9kZXNpZ24vYWxsJztcbmltcG9ydCB7XG4gICAgQnV0dG9uRGVtb0NvbXBvbmVudCxcbiAgICBSYWRpb0RlbW9Db21wb25lbnQsXG4gICAgUXVpY2tOb3RlRGVtb0NvbXBvbmVudCxcbiAgICBNb2RhbERlbW9Db21wb25lbnQsXG4gICAgRm9ybURlbW9Db21wb25lbnQsXG4gICAgVG9hc3REZW1vQ29tcG9uZW50LFxuICAgIFRvb2x0aXBEZW1vQ29tcG9uZW50LFxuICAgIENhcmREZW1vQ29tcG9uZW50LFxuICAgIExvYWRpbmdEZW1vQ29tcG9uZW50LFxuICAgIERyb3Bkb3duRGVtb0NvbXBvbmVudCxcbiAgICBQaWNrZXJEZW1vQ29tcG9uZW50LFxuICAgIENoaXBzRGVtb0NvbXBvbmVudCxcbiAgICBTZWxlY3REZW1vQ29tcG9uZW50LFxuICAgIFRhYnNEZW1vQ29tcG9uZW50LFxuICAgIFRhYmxlRGVtb0NvbXBvbmVudCxcbiAgICBMaXN0RGVtb0NvbXBvbmVudCxcbiAgICBIZWFkZXJEZW1vQ29tcG9uZW50LFxuICAgIFN3aXRjaERlbW9Db21wb25lbnQsXG4gICAgRHJhd2VyRGVtb0NvbXBvbmVudCxcbiAgICBDYWxlbmRhckRlbW9Db21wb25lbnQsXG4gICAgRHJhZ3VsYURlbW9Db21wb25lbnQsXG4gICAgVGlsZXNEZW1vQ29tcG9uZW50LFxuICAgIFNsaWRlc0RlbW9Db21wb25lbnQsXG4gICAgRWRpdG9yRGVtb0NvbXBvbmVudCxcbiAgICBUaXBXZWxsRGVtb0NvbXBvbmVudFxufSBmcm9tICcuL3BhZ2VzL2VsZW1lbnRzL2FsbCc7XG5pbXBvcnQgeyBVdGlsc0RlbW9Db21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3V0aWxzL3V0aWxzL1V0aWxzRGVtbyc7XG5pbXBvcnQgeyBQaXBlc0RlbW9Db21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3V0aWxzL3BpcGVzL1BpcGVzRGVtbyc7XG5cbmltcG9ydCAnLi9kZW1vLnNjc3MnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBOb3ZvRWxlbWVudHNNb2R1bGUsIEZvcm1VdGlscyB9IGZyb20gJy4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBEZW1vQ29tcG9uZW50LFxuICAgICAgICBDb2RlU25pcHBldCxcbiAgICAgICAgSG9tZSxcbiAgICAgICAgQ29sb3JDb21wb25lbnQsXG4gICAgICAgIENvbXBvc2l0aW9uQ29tcG9uZW50LFxuICAgICAgICBUeXBvZ3JhcGh5Q29tcG9uZW50LFxuICAgICAgICBJY29ub2dyYXBoeUNvbXBvbmVudCxcbiAgICAgICAgQnV0dG9uRGVtb0NvbXBvbmVudCxcbiAgICAgICAgUmFkaW9EZW1vQ29tcG9uZW50LFxuICAgICAgICBRdWlja05vdGVEZW1vQ29tcG9uZW50LFxuICAgICAgICBNb2RhbERlbW9Db21wb25lbnQsXG4gICAgICAgIEZvcm1EZW1vQ29tcG9uZW50LFxuICAgICAgICBUb2FzdERlbW9Db21wb25lbnQsXG4gICAgICAgIFRvb2x0aXBEZW1vQ29tcG9uZW50LFxuICAgICAgICBDYXJkRGVtb0NvbXBvbmVudCxcbiAgICAgICAgTG9hZGluZ0RlbW9Db21wb25lbnQsXG4gICAgICAgIERyb3Bkb3duRGVtb0NvbXBvbmVudCxcbiAgICAgICAgUGlja2VyRGVtb0NvbXBvbmVudCxcbiAgICAgICAgQ2hpcHNEZW1vQ29tcG9uZW50LFxuICAgICAgICBTZWxlY3REZW1vQ29tcG9uZW50LFxuICAgICAgICBUYWJzRGVtb0NvbXBvbmVudCxcbiAgICAgICAgVGFibGVEZW1vQ29tcG9uZW50LFxuICAgICAgICBMaXN0RGVtb0NvbXBvbmVudCxcbiAgICAgICAgSGVhZGVyRGVtb0NvbXBvbmVudCxcbiAgICAgICAgU3dpdGNoRGVtb0NvbXBvbmVudCxcbiAgICAgICAgRHJhd2VyRGVtb0NvbXBvbmVudCxcbiAgICAgICAgQ2FsZW5kYXJEZW1vQ29tcG9uZW50LFxuICAgICAgICBEcmFndWxhRGVtb0NvbXBvbmVudCxcbiAgICAgICAgVGlsZXNEZW1vQ29tcG9uZW50LFxuICAgICAgICBTbGlkZXNEZW1vQ29tcG9uZW50LFxuICAgICAgICBFZGl0b3JEZW1vQ29tcG9uZW50LFxuICAgICAgICBUaXBXZWxsRGVtb0NvbXBvbmVudCxcbiAgICAgICAgVXRpbHNEZW1vQ29tcG9uZW50LFxuICAgICAgICBQaXBlc0RlbW9Db21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIHJvdXRpbmcsXG4gICAgICAgIE5vdm9FbGVtZW50c01vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEZvcm1VdGlsc1xuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIERlbW9Db21wb25lbnRcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW0RlbW9Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9FbGVtZW50c0RlbW9Nb2R1bGUge1xufVxuXG4iXX0=

/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Color = __webpack_require__(731);
	
	Object.keys(_Color).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Color[key];
	    }
	  });
	});
	
	var _Composition = __webpack_require__(732);
	
	Object.keys(_Composition).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Composition[key];
	    }
	  });
	});
	
	var _Iconography = __webpack_require__(733);
	
	Object.keys(_Iconography).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Iconography[key];
	    }
	  });
	});
	
	var _Typography = __webpack_require__(734);
	
	Object.keys(_Typography).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Typography[key];
	    }
	  });
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZGVzaWduL2FsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vY29sb3IvQ29sb3InO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb3NpdGlvbi9Db21wb3NpdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2ljb25vZ3JhcGh5L0ljb25vZ3JhcGh5JztcbmV4cG9ydCAqIGZyb20gJy4vdHlwb2dyYXBoeS9UeXBvZ3JhcGh5JztcbiJdfQ==

/***/ },

/***/ 822:
/***/ function(module, exports) {

	module.exports = "<header class=\"design container\" [ngClass]=\"color\">\n    <div>\n        <h1 class=\"title\">Color</h1>\n        <h2 class=\"sub-title\">Efficient and expressive</h2>\n        <p class=\"description\">Our colors are bold, fresh, and approachable. They are expressive and delightful, but selected with usability and accessibility in mind.</p>\n    </div>\n    <div class=\"background-boxes\">\n        <div class=\"bb-lead\" (mouseover)=\"changeColor('lead')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-contact\" (mouseover)=\"changeColor('contact')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-company\" (mouseover)=\"changeColor('company')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-candidate\" (mouseover)=\"changeColor('candidate')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-opportunity\" (mouseover)=\"changeColor('opportunity')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-job\" (mouseover)=\"changeColor('job')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-placement\" (mouseover)=\"changeColor('placement')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-grapefruit\" (mouseover)=\"changeColor('grapefruit')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-bittersweet\" (mouseover)=\"changeColor('bittersweet')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-sunflower\" (mouseover)=\"changeColor('sunflower')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-grass\" (mouseover)=\"changeColor('grass')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-mint\" (mouseover)=\"changeColor('mint')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-aqua\" (mouseover)=\"changeColor('aqua')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-ocean\" (mouseover)=\"changeColor('ocean')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-carnation\" (mouseover)=\"changeColor('carnation')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-lavender\" (mouseover)=\"changeColor('lavender')\" (mouseout)=\"changeColor('background')\"></div>\n    </div>\n</header>\n<section class=\"design container\">\n    <h2>Primary Colors</h2>\n    <p>These are the base colors of the application.</p>\n\n    <article class=\"color-blocks primary-colors\">\n        <div *ngFor=\"let color of primaryColors\" class=\"block {{color.name}}-cb\">\n            <div class=\"color-square\" (click)=\"copyLink(color)\"></div>\n            <h3 class=\"color-text\" (click)=\"copyLink(color)\"><span>#</span>{{color.hex}}</h3>\n            <h6>{{color.name}}</h6>\n            <span class=\"vars\" *ngFor=\"let variable of color.variables\">${{variable}}</span>\n        </div>\n    </article>\n\n    <h2>Entity Colors</h2>\n    <p>This bold palette uses carefully balanced colors to distinguish entities from one another.</p>\n\n    <article class=\"color-blocks entity-colors\">\n        <div *ngFor=\"let color of entityColors\" class=\"block {{color.name}}-cb\">\n            <div class=\"color-square\" (click)=\"copyLink(color)\"></div>\n            <h3 class=\"color-text\" (click)=\"copyLink(color)\"><span>#</span>{{color.hex}}</h3>\n            <h6>{{color.name}}</h6>\n            <span class=\"vars\" *ngFor=\"let variable of color.variables\">${{variable}}</span>\n        </div>\n    </article>\n\n    <h2>Analytics Colors</h2>\n    <p>This palette features vibrant, bold colors for use in data visualization.</p>\n\n    <article class=\"color-blocks analytics-colors\">\n        <div *ngFor=\"let color of analyticsColors\" class=\"block {{color.name}}-cb\">\n            <div class=\"color-square\" (click)=\"copyLink(color)\"></div>\n            <h3 class=\"color-text\" (click)=\"copyLink(color)\"><span>#</span>{{color.hex}}</h3>\n            <h6>{{color.name}}</h6>\n            <span class=\"vars\" *ngFor=\"let variable of color.variables\">${{variable}}</span>\n        </div>\n    </article>\n</section>\n"

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ColorComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// Vendor
	
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(35);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ColorComponent = exports.ColorComponent = (_dec = (0, _core.Component)({
	    selector: 'color',
	    template: __webpack_require__(822)
	}), _dec(_class = function () {
	    function ColorComponent(toaster) {
	        _classCallCheck(this, ColorComponent);
	
	        this.color = 'background';
	
	        this.toaster = toaster;
	
	        this.primaryColors = [{
	            name: 'navigation',
	            variables: ['navigation'],
	            hex: '2F383F'
	        }, {
	            name: 'action',
	            variables: ['positive'],
	            hex: '4A89DC'
	        }, {
	            name: 'text',
	            variables: ['dark', 'base-font-color'],
	            hex: '474747'
	        }, {
	            name: 'background',
	            variables: ['off-white', 'background'],
	            hex: 'F4F4F4'
	        }, {
	            name: 'neutral',
	            variables: ['neutral'],
	            hex: '747884'
	        }];
	        this.entityColors = [{
	            name: 'lead',
	            variables: ['lead'],
	            hex: 'AA6699'
	        }, {
	            name: 'contact',
	            variables: ['contact'],
	            hex: 'FFAA44'
	        }, {
	            name: 'company',
	            variables: ['company'],
	            hex: '3399DD'
	        }, {
	            name: 'candidate',
	            variables: ['candidate'],
	            hex: '44BB77'
	        }, {
	            name: 'opportunity',
	            variables: ['opportunity'],
	            hex: '662255'
	        }, {
	            name: 'job',
	            variables: ['job'],
	            hex: 'BB5566'
	        }, {
	            name: 'submission',
	            variables: ['submission'],
	            hex: '778899'
	        }, {
	            name: 'placement',
	            variables: ['placement'],
	            hex: '0B344F'
	        }];
	        this.analyticsColors = [{
	            name: 'grapefruit',
	            variables: ['grapefruit'],
	            hex: 'DA4453'
	        }, {
	            name: 'bittersweet',
	            variables: ['bittersweet'],
	            hex: 'EB6845'
	        }, {
	            name: 'sunflower',
	            variables: ['sunflower'],
	            hex: 'F6B042'
	        }, {
	            name: 'grass',
	            variables: ['grass'],
	            hex: '8CC152'
	        }, {
	            name: 'mint',
	            variables: ['mint'],
	            hex: '37BC9B'
	        }, {
	            name: 'aqua',
	            variables: ['aqua'],
	            hex: '3BAFDA'
	        }, {
	            name: 'ocean',
	            variables: ['ocean'],
	            hex: '4A89DC'
	        }, {
	            name: 'carnation',
	            variables: ['carnation'],
	            hex: 'D770AD'
	        }, {
	            name: 'lavender',
	            variables: ['lavender'],
	            hex: '967ADC'
	        }];
	    }
	
	    _createClass(ColorComponent, [{
	        key: 'changeColor',
	        value: function changeColor(color) {
	            this.color = color;
	        }
	    }, {
	        key: 'copyLink',
	        value: function copyLink(color) {
	            // Create dom element to copy from
	            var copyFrom = document.createElement('textarea');
	            copyFrom.textContent = '#' + color.hex;
	            var body = document.getElementsByTagName('body')[0];
	            body.appendChild(copyFrom);
	            copyFrom.select();
	            // Copy text
	            document.execCommand('copy');
	            // Delete element
	            body.removeChild(copyFrom);
	
	            // Set toast options
	            this.options = {
	                title: '#' + color.hex,
	                message: 'Copied to your clipboard',
	                theme: color.name,
	                icon: 'clipboard',
	                position: 'growlTopRight'
	            };
	
	            if (color.name === 'action') this.options.theme = 'ocean';
	
	            // Fire toast
	            this.toaster.alert(this.options);
	        }
	    }]);
	
	    return ColorComponent;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_novoElements.NovoToastService], ColorComponent);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZGVzaWduL2NvbG9yL0NvbG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztrQkFBQTs7QUFFQTs7O0FBREE7O0FBRUE7Ozs7SUFNYSxjLFdBQUEsYyxXQUpaLHFCQUFVO0FBQ1AsY0FBVSxPQURIO0FBRVAsY0FBVSxRQUFRLGNBQVI7QUFGSCxDQUFWLEM7QUFPRyw0QkFBWSxPQUFaLEVBQXNDO0FBQUE7O0FBQUEsYUFGdEMsS0FFc0MsR0FGdkIsWUFFdUI7O0FBQ2xDLGFBQUssT0FBTCxHQUFlLE9BQWY7O0FBRUEsYUFBSyxhQUFMLEdBQXFCLENBQ2pCO0FBQ0ksa0JBQU0sWUFEVjtBQUVJLHVCQUFXLENBQUMsWUFBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQURpQixFQU1qQjtBQUNJLGtCQUFNLFFBRFY7QUFFSSx1QkFBVyxDQUFDLFVBQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FOaUIsRUFXakI7QUFDSSxrQkFBTSxNQURWO0FBRUksdUJBQVcsQ0FBQyxNQUFELEVBQVMsaUJBQVQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FYaUIsRUFnQmpCO0FBQ0ksa0JBQU0sWUFEVjtBQUVJLHVCQUFXLENBQUMsV0FBRCxFQUFjLFlBQWQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FoQmlCLEVBcUJqQjtBQUNJLGtCQUFNLFNBRFY7QUFFSSx1QkFBVyxDQUFDLFNBQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FyQmlCLENBQXJCO0FBMkJBLGFBQUssWUFBTCxHQUFvQixDQUNoQjtBQUNJLGtCQUFNLE1BRFY7QUFFSSx1QkFBVyxDQUFDLE1BQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FEZ0IsRUFNaEI7QUFDSSxrQkFBTSxTQURWO0FBRUksdUJBQVcsQ0FBQyxTQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBTmdCLEVBV2hCO0FBQ0ksa0JBQU0sU0FEVjtBQUVJLHVCQUFXLENBQUMsU0FBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQVhnQixFQWdCaEI7QUFDSSxrQkFBTSxXQURWO0FBRUksdUJBQVcsQ0FBQyxXQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBaEJnQixFQXFCaEI7QUFDSSxrQkFBTSxhQURWO0FBRUksdUJBQVcsQ0FBQyxhQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBckJnQixFQTBCaEI7QUFDSSxrQkFBTSxLQURWO0FBRUksdUJBQVcsQ0FBQyxLQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBMUJnQixFQStCaEI7QUFDSSxrQkFBTSxZQURWO0FBRUksdUJBQVcsQ0FBQyxZQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBL0JnQixFQW9DaEI7QUFDSSxrQkFBTSxXQURWO0FBRUksdUJBQVcsQ0FBQyxXQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBcENnQixDQUFwQjtBQTBDQSxhQUFLLGVBQUwsR0FBdUIsQ0FDbkI7QUFDSSxrQkFBTSxZQURWO0FBRUksdUJBQVcsQ0FBQyxZQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBRG1CLEVBTW5CO0FBQ0ksa0JBQU0sYUFEVjtBQUVJLHVCQUFXLENBQUMsYUFBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQU5tQixFQVduQjtBQUNJLGtCQUFNLFdBRFY7QUFFSSx1QkFBVyxDQUFDLFdBQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FYbUIsRUFnQm5CO0FBQ0ksa0JBQU0sT0FEVjtBQUVJLHVCQUFXLENBQUMsT0FBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQWhCbUIsRUFxQm5CO0FBQ0ksa0JBQU0sTUFEVjtBQUVJLHVCQUFXLENBQUMsTUFBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQXJCbUIsRUEwQm5CO0FBQ0ksa0JBQU0sTUFEVjtBQUVJLHVCQUFXLENBQUMsTUFBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQTFCbUIsRUErQm5CO0FBQ0ksa0JBQU0sT0FEVjtBQUVJLHVCQUFXLENBQUMsT0FBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQS9CbUIsRUFvQ25CO0FBQ0ksa0JBQU0sV0FEVjtBQUVJLHVCQUFXLENBQUMsV0FBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQXBDbUIsRUF5Q25CO0FBQ0ksa0JBQU0sVUFEVjtBQUVJLHVCQUFXLENBQUMsVUFBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQXpDbUIsQ0FBdkI7QUErQ0g7Ozs7b0NBRVcsSyxFQUFPO0FBQ2YsaUJBQUssS0FBTCxHQUFhLEtBQWI7QUFDSDs7O2lDQUVRLEssRUFBTztBQUNaO0FBQ0EsZ0JBQUksV0FBVyxTQUFTLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZjtBQUNBLHFCQUFTLFdBQVQsU0FBMkIsTUFBTSxHQUFqQztBQUNBLGdCQUFJLE9BQU8sU0FBUyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUFYO0FBQ0EsaUJBQUssV0FBTCxDQUFpQixRQUFqQjtBQUNBLHFCQUFTLE1BQVQ7QUFDQTtBQUNBLHFCQUFTLFdBQVQsQ0FBcUIsTUFBckI7QUFDQTtBQUNBLGlCQUFLLFdBQUwsQ0FBaUIsUUFBakI7O0FBRUE7QUFDQSxpQkFBSyxPQUFMLEdBQWU7QUFDWCw2QkFBVyxNQUFNLEdBRE47QUFFWCx5QkFBUywwQkFGRTtBQUdYLHVCQUFPLE1BQU0sSUFIRjtBQUlYLHNCQUFNLFdBSks7QUFLWCwwQkFBVTtBQUxDLGFBQWY7O0FBUUEsZ0JBQUksTUFBTSxJQUFOLEtBQWUsUUFBbkIsRUFBNkIsS0FBSyxPQUFMLENBQWEsS0FBYixHQUFxQixPQUFyQjs7QUFFN0I7QUFDQSxpQkFBSyxPQUFMLENBQWEsS0FBYixDQUFtQixLQUFLLE9BQXhCO0FBQ0g7Ozs7OzhFQXpKUSxjIiwiZmlsZSI6IkNvbG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBOb3ZvVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29sb3InLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL0NvbG9yLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvckNvbXBvbmVudCB7XG4gICAgY29sb3I6U3RyaW5nID0gJ2JhY2tncm91bmQnO1xuXG4gICAgY29uc3RydWN0b3IodG9hc3RlcjpOb3ZvVG9hc3RTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudG9hc3RlciA9IHRvYXN0ZXI7XG5cbiAgICAgICAgdGhpcy5wcmltYXJ5Q29sb3JzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICduYXZpZ2F0aW9uJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnbmF2aWdhdGlvbiddLFxuICAgICAgICAgICAgICAgIGhleDogJzJGMzgzRidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2FjdGlvbicsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ3Bvc2l0aXZlJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnNEE4OURDJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2RhcmsnLCAnYmFzZS1mb250LWNvbG9yJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnNDc0NzQ3J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnYmFja2dyb3VuZCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ29mZi13aGl0ZScsICdiYWNrZ3JvdW5kJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnRjRGNEY0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbmV1dHJhbCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ25ldXRyYWwnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICc3NDc4ODQnXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuZW50aXR5Q29sb3JzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdsZWFkJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnbGVhZCddLFxuICAgICAgICAgICAgICAgIGhleDogJ0FBNjY5OSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2NvbnRhY3QnLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydjb250YWN0J10sXG4gICAgICAgICAgICAgICAgaGV4OiAnRkZBQTQ0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnY29tcGFueScsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2NvbXBhbnknXSxcbiAgICAgICAgICAgICAgICBoZXg6ICczMzk5REQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjYW5kaWRhdGUnLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydjYW5kaWRhdGUnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICc0NEJCNzcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdvcHBvcnR1bml0eScsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ29wcG9ydHVuaXR5J10sXG4gICAgICAgICAgICAgICAgaGV4OiAnNjYyMjU1J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnam9iJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnam9iJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnQkI1NTY2J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3VibWlzc2lvbicsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ3N1Ym1pc3Npb24nXSxcbiAgICAgICAgICAgICAgICBoZXg6ICc3Nzg4OTknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwbGFjZW1lbnQnLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydwbGFjZW1lbnQnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICcwQjM0NEYnXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuYW5hbHl0aWNzQ29sb3JzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdncmFwZWZydWl0JyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnZ3JhcGVmcnVpdCddLFxuICAgICAgICAgICAgICAgIGhleDogJ0RBNDQ1MydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2JpdHRlcnN3ZWV0JyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnYml0dGVyc3dlZXQnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICdFQjY4NDUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdzdW5mbG93ZXInLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydzdW5mbG93ZXInXSxcbiAgICAgICAgICAgICAgICBoZXg6ICdGNkIwNDInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdncmFzcycsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2dyYXNzJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnOENDMTUyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbWludCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ21pbnQnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICczN0JDOUInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdhcXVhJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnYXF1YSddLFxuICAgICAgICAgICAgICAgIGhleDogJzNCQUZEQSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ29jZWFuJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnb2NlYW4nXSxcbiAgICAgICAgICAgICAgICBoZXg6ICc0QTg5REMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjYXJuYXRpb24nLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydjYXJuYXRpb24nXSxcbiAgICAgICAgICAgICAgICBoZXg6ICdENzcwQUQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdsYXZlbmRlcicsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2xhdmVuZGVyJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnOTY3QURDJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGNoYW5nZUNvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBjb3B5TGluayhjb2xvcikge1xuICAgICAgICAvLyBDcmVhdGUgZG9tIGVsZW1lbnQgdG8gY29weSBmcm9tXG4gICAgICAgIGxldCBjb3B5RnJvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGNvcHlGcm9tLnRleHRDb250ZW50ID0gYCMke2NvbG9yLmhleH1gO1xuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29weUZyb20pO1xuICAgICAgICBjb3B5RnJvbS5zZWxlY3QoKTtcbiAgICAgICAgLy8gQ29weSB0ZXh0XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICAgIC8vIERlbGV0ZSBlbGVtZW50XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoY29weUZyb20pO1xuXG4gICAgICAgIC8vIFNldCB0b2FzdCBvcHRpb25zXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBgIyR7Y29sb3IuaGV4fWAsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQ29waWVkIHRvIHlvdXIgY2xpcGJvYXJkJyxcbiAgICAgICAgICAgIHRoZW1lOiBjb2xvci5uYW1lLFxuICAgICAgICAgICAgaWNvbjogJ2NsaXBib2FyZCcsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2dyb3dsVG9wUmlnaHQnXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNvbG9yLm5hbWUgPT09ICdhY3Rpb24nKSB0aGlzLm9wdGlvbnMudGhlbWUgPSAnb2NlYW4nO1xuXG4gICAgICAgIC8vIEZpcmUgdG9hc3RcbiAgICAgICAgdGhpcy50b2FzdGVyLmFsZXJ0KHRoaXMub3B0aW9ucyk7XG4gICAgfVxufVxuIl19

/***/ },

/***/ 823:
/***/ function(module, exports) {

	module.exports = "<header class=\"design container\">\n    <div>\n        <h1 class=\"title\">Composition</h1>\n        <h2 class=\"sub-title\">A universal language</h2>\n        <p class=\"description\">\n            Comprehensive design principles and language helps maintain\n            usability and a sense of harmony across a large family\n            of products. Consistency and common elements greatly\n            reduce the user effort requred to learn a new interface.\n        </p>\n    </div>\n    <img src=\"assets/images/CompositionPageIcon.svg\" alt=\"\"/>\n</header>\n\n<section class=\"design container\">\n    <h2>Mainframe</h2>\n    <p>\n        The Mainframe refers to the permanently fixed portions of\n        the application that never change. It contains the primary\n        navigation and core functions.\n    </p>\n\n    <aside class=\"design-principle\" style=\"margin-top: 60px;\">\n        <h6>Design Principles:\n            <span>Hierarchy &amp; Unity</span>\n        </h6>\n        <p>\n            Unity implies relation through proximity, size, and color.\n            Making elements clearly distinct or unified helps\n            create a strong visual hierarchy. This is important\n            because it helps to easily differentiate the level\n            of importance between different elements, and controls\n            a user's cognitive flow.\n        </p>\n    </aside>\n\n    <article>\n        <h5>Top Frame</h5>\n        <p>\n            The top frame contains key functions (Find, Add) and navigation\n            to the Resource Center and to User Profile options.\n        </p>\n        <img src=\"assets/images/LayoutMainframeTopFrame.svg\" alt=\"mainframe\"/>\n    </article>\n\n    <article>\n        <h5>Bowling Alley</h5>\n        <p>\n            The bowling alley is where all active items are displayed, allowing\n            users to easily shift between them.\n        </p>\n        <img class=\"bowling-alley\" src=\"assets/images/LayoutMainframeBowlingAlley.svg\" alt=\"bowling alley\"/>\n    </article>\n\n    <article>\n        <h5>Menu</h5>\n        <p>\n            The menu functions as the primary navigation for the application.\n            It contains links to every list, the dashboard, admin\n            functions, tools, and third-party applications. The\n            items on the menu can be toggled, grouped, and organized\n            however the user wishes.\n        </p>\n        <img class=\"menu\" src=\"assets/images/LayoutMainframeMenu.svg\" alt=\"menu\"/>\n    </article>\n\n    <h2>Headers</h2>\n    <p>\n        Headers hold key information and controls for a page. They serve\n        as a wayfinding marker to help the user understand context\n        and easily access important actions.\n    </p>\n\n    <article>\n        <h5>Overviews &amp; Slideouts</h5>\n        <p>\n            Overview and Slideout headers are dominant features which focus\n            the user's attention to the context of a particular\n            record and contains key information on the left,\n            and actions on the right. These headers inherit the\n            color of the entity type.\n        </p>\n        <img src=\"assets/images/LayoutMainframeHeaderOverview.svg\" alt=\"overview header\"/>\n    </article>\n\n    <article>\n        <h5>List Headers</h5>\n        <p>\n            List headers contain the filter and column controls for the list\n            and the primary actions. They are fixed so that results\n            can eaily be modified and actioned regardless of\n            scrolling position.\n        </p>\n        <img src=\"assets/images/LayoutMainframeHeaderList.svg\" alt=\"list header\"/>\n    </article>\n\n    <aside class=\"design-principle\">\n        <h6>Design Principles:\n            <span>Navigation &amp; Consistency</span>\n        </h6>\n        <p>A consistent navigation structure allows users to master\n            an interface much more quickly, as they know that\n            certain functions are always in the same place. We\n            use headers to provide quick access to key functions\n            and aid findability of data in a complex system.\n        </p>\n    </aside>\n\n    <article>\n        <h5>Add &amp; Edit Pages</h5>\n        <p>\n            The headers of Add and Edit pages generally serve as a simple\n            visual element to help provide context.\n        </p>\n        <img src=\"assets/images/LayoutMainframeHeaderEditPage.svg\" alt=\"add page header\"/>\n    </article>\n\n    <h2>Cards</h2>\n    <p>\n        Essential to our design paradigm, cards are independent blocks\n        of information. They can contain text, tables, and data\n        visualizations. They offer a curated view of data. Bringing\n        the most pertinent information to the forefont, they\n        allow users to scan large amounts of data quickly.\n    </p>\n\n    <article>\n        <h5>Basic Structure</h5>\n        <p>\n            Cards have a header which contains the card title and the card\n            controls. The controls can vary depending on card\n            type, gut generally include move, refresh, configure,\n            and remove. The content area has padding by default\n            but can also run edge-to-edge. Pulse cards have a\n            special icon next to the title.\n        </p>\n        <img src=\"assets/images/LayoutMainframeCardsNPSCard.svg\" alt=\"card\"/>\n    </article>\n\n    <aside class=\"design-principle\">\n        <h6>Design Principle:\n            <span>Cards</span>\n        </h6>\n        <p>\n            The card system scales easily, both in individual size\n            and in groups. Because of this, cards are essential\n            to our design language. Cards balance and align very\n            easily, promoting findability. These handy little\n            containers also provide a contextually relevant home\n            for all content.\n        </p>\n        <div class=\"hint\">\n            <span>\n                <i class=\"bhi-idea\"></i>\n                <strong>Hint: </strong>This is a great place for third-party\n                developers to fit into the Bullhorn system.\n            </span>\n            <a class=\"link\" routerLink=\"/cards\">\n                <i class=\"bhi-link\"></i>\n                <strong>Are you a developer?</strong> Check out card\n                markup and documentation here\n            </a>\n        </div>\n    </aside>\n\n    <article>\n        <h5>Dashboard &amp; Overviews</h5>\n        <p>\n            Dashboards and Records Overviews are the primary home for our\n            cards. They offer a customizable workspace to arrange\n            and configure to most appropriately fit the user's\n            needs. Cards have a fixed height, but mildly flexible\n            width. They can also be expanded to full-screen.\n            The \"add card\" control is always located in the top\n            right, to be consistent with the placement of action\n            buttons on tables and lists.\n        </p>\n        <img class=\"dashboard\" src=\"assets/images/LayoutMainframeCardsDashboard.svg\" alt=\"dashboard cards\"/>\n    </article>\n\n    <article>\n        <h5>Slideouts and Mobile</h5>\n        <p>\n            Cards are so flexible, they also work well in a mobile setting.\n            They help users to easily scan chunks of information\n            and find what they need.\n        </p>\n        <img class=\"mobile\" src=\"assets/images/LayoutMobileCard.svg\" alt=\"mobile cards\"/>\n    </article>\n</section>\n"

/***/ },

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CompositionComponent = undefined;
	
	var _dec, _class; // NG2
	
	
	var _core = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CompositionComponent = exports.CompositionComponent = (_dec = (0, _core.Component)({
	    selector: 'layout',
	    template: __webpack_require__(823)
	}), _dec(_class = function CompositionComponent() {
	    _classCallCheck(this, CompositionComponent);
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZGVzaWduL2NvbXBvc2l0aW9uL0NvbXBvc2l0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7a0JBQUE7OztBQUNBOzs7O0lBTWEsb0IsV0FBQSxvQixXQUpaLHFCQUFVO0FBQ1AsY0FBVSxRQURIO0FBRVAsY0FBVSxRQUFRLG9CQUFSO0FBRkgsQ0FBVixDIiwiZmlsZSI6IkNvbXBvc2l0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xheW91dCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vQ29tcG9zaXRpb24uaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ29tcG9uZW50IHtcbn1cbiJdfQ==

/***/ },

/***/ 824:
/***/ function(module, exports) {

	module.exports = "<header class=\"design container\">\n    <div>\n        <h1 class=\"title\">Iconography</h1>\n        <h2 class=\"sub-title\">Certified Pixel-Perfect</h2>\n\n        <p class=\"description\">\n            Icons are used to represent an action or concept through the most simplistic imagery possible. Icons give additional context to written material, allowing the user to quickly comprehend any given concept. The icons are designed on a highly specific\n            grid to ensure maximum clarity even at a small size. Their design is friendly, human, and bold.\n        </p>\n\n        <p>\n            <a href=\"https://cdn.rawgit.com/bullhorn/bullhorn-icons/development/fonts/Bullhorn-Glyphicons.html\">Bullhorn's Icon Set</a>\n        </p>\n    </div>\n    <img src=\"assets/images/IconographyPageIcon.svg\" alt=\"\"/>\n</header>\n<section class=\"design container\">\n    <h2>Icons with Typography</h2>\n    <p>\n        An icon will always have slightly larger dimensions than text when they are paired together. This ensures that the icon is visually the same size as the text and that it scales proportionally.\n    </p>\n\n    <article>\n        <h5>Base sizing</h5>\n        <p>Icons placed next to typography should alays follow this convention.</p>\n\n        <div class=\"base-sizing\">\n            <div class=\"sizing-specs\">\n                <span>Bullhorn Glyphicons</span>\n                <span><strong>Size: </strong>1.29em</span>\n                <span><strong>Padding: </strong>.25em</span>\n                <span><strong>Border Radius: </strong>.625em</span>\n            </div>\n            <div class=\"sizing-demo\">\n                <h1><i class=\"bhi-company\"></i>Company Name</h1>\n            </div>\n        </div>\n    </article>\n\n    <article class=\"entities\">\n        <h5>Padding</h5>\n        <p>\n            Icons should have sufficient padding when followed by text.\n        </p>\n\n        <div class=\"padding\">\n            <div>\n                <h4><i class=\"bhi-circle\"></i>Alice Hughes</h4>\n                <h6><i class=\"bhi-location\"></i>Boston, MA</h6>\n                <span class=\"not-accepted\"><i class=\"bhi-close-o\"></i>I feel squished</span>\n            </div>\n            <div>\n                <h4><i class=\"bhi-circle\"></i>Alice Hughes</h4>\n                <h6><i class=\"bhi-location\"></i>Boston, MA</h6>\n                <span class=\"accepted\"><i class=\"bhi-check\"></i>Much better</span>\n            </div>\n        </div>\n    </article>\n\n    <article>\n        <h2>Entity Icons</h2>\n        <h5>Standard Entity Icons</h5>\n        <p>Used with corresponding entity color.</p>\n\n        <div class=\"example standard-icon-row\">\n            <div>\n                <i theme=\"entity\" class=\"bhi-lead lead\"></i>\n                <p>Lead</p>\n            </div>\n            <div>\n                <i theme=\"entity\" class=\"bhi-person contact\"></i>\n                <p>Contact</p>\n            </div>\n            <div>\n                <i theme=\"entity\" class=\"bhi-company company\"></i>\n                <p>Company</p>\n            </div>\n            <div>\n                <i theme=\"entity\" class=\"bhi-candidate candidate\"></i>\n                <p>Candidate</p>\n            </div>\n            <div>\n                <i theme=\"entity\" class=\"bhi-opportunity opportunity\"></i>\n                <p>Opportunity</p>\n            </div>\n            <div>\n                <i theme=\"entity\" class=\"bhi-job job\"></i>\n                <p>Job</p>\n            </div>\n            <div>\n                <i theme=\"entity\" class=\"bhi-star placement\"></i>\n                <p>Placement</p>\n            </div>\n        </div>\n        <pre><code>\n            &lt;i theme=\"entity\" class=\"bhi-lead lead\">&lt;/i&gt;\n            &lt;h6&gt;Lead&lt;/h6&gt;\n            &lt;i theme=\"entity\" class=\"bhi-person contact\"&gt;&lt;/i&gt;\n            &lt;h6&gt;Contact&lt;/h6&gt;\n            &lt;i theme=\"entity\" class=\"bhi-company company\"&gt;&lt;/i&gt;\n            &lt;h6&gt;Company&lt;/h6&gt;\n            &lt;i theme=\"entity\" class=\"bhi-candidate candidate\"&gt;&lt;/i&gt;\n            &lt;h6&gt;Candidate&lt;/h6&gt;\n            &lt;i theme=\"entity\" class=\"bhi-opportunity opportunity\"&gt;&lt;/i&gt;\n            &lt;h6&gt;Opportunity&lt;/h6&gt;\n            &lt;i theme=\"entity\" class=\"bhi-job job\"&gt;&lt;/i&gt;\n            &lt;h6&gt;Job&lt;/h6&gt;\n            &lt;i theme=\"entity\" class=\"bhi-star placement\"&gt;&lt;/i&gt;\n            &lt;h6&gt;Placement&lt;/h6&gt;\n        </code>\n        </pre>\n    </article>\n\n    <h2>Contained Icons</h2>\n    <h5>Scaling</h5>\n    <p>Make sure to scale the corner radius appropriately when enlarging or decreasing the size of the icon.</p>\n\n    <article class=\"contained-scaling\">\n        <figure>\n            <img src=\"assets/images/IconographyScalingDont.svg\" alt=\"\"/>\n            <figcaption class=\"not-accepted\"><i class=\"bhi-close-o\"></i>That doesn't look like a rectangle</figcaption>\n        </figure>\n        <figure>\n            <img src=\"assets/images/IconographyScalingDo.svg\" alt=\"\"/>\n            <figcaption class=\"accepted\"><i class=\"bhi-check\"></i>Always maintain the proportions</figcaption>\n        </figure>\n    </article>\n\n    <h5>Padding</h5>\n    <p>To preserve readability, icons should have sufficient padding from the edges of their containers. Additionally, the icons should be visually centered in their containers.</p>\n\n    <article class=\"contained-padding\">\n        <figure>\n            <img src=\"assets/images/IconographyPaddingDont.svg\" alt=\"\"/>\n            <figcaption class=\"not-accepted\"><i class=\"bhi-close-o\"></i>It's getting crowded in here</figcaption>\n        </figure>\n        <figure>\n            <img src=\"assets/images/IconographyPaddingDo.svg\" alt=\"\"/>\n            <figcaption class=\"accepted\"><i class=\"bhi-check\"></i>It's good to have some breathing room</figcaption>\n        </figure>\n    </article>\n\n    <article>\n        <h5>Examples</h5>\n\n        <div class=\"example contained-icon-row\">\n            <h1><i theme=\"contained\" class=\"bhi-lead lead\"></i>Heading One</h1>\n            <h2><i theme=\"contained\" class=\"bhi-person contact\"></i>Heading Two</h2>\n            <h3><i theme=\"contained\" class=\"bhi-company company\"></i>Heading Three</h3>\n            <h4><i theme=\"contained\" class=\"bhi-candidate candidate\"></i>Heading Four</h4>\n            <h5><i theme=\"contained\" class=\"bhi-opportunity opportunity\"></i>Heading Five</h5>\n            <h6><i theme=\"contained\" class=\"bhi-job job\"></i>Heading Six</h6>\n            <!-- <p><i theme=\"contained\" class=\"bhi-star placement\"></i>Body</p> -->\n        </div>\n        <pre><code class=\"hljs xml\">\n            &lt;h1&gt;&lt;i theme=\"contained\" class=\"bhi-lead lead\"&gt;&lt;/i&gt;Heading One&lt;/h1&gt;\n            &lt;h2&gt;&lt;i theme=\"contained\" class=\"bhi-person contact\"&gt;&lt;/i&gt;Heading Two&lt;/h2&gt;\n            &lt;h3&gt;&lt;i theme=\"contained\" class=\"bhi-company company\"&gt;&lt;/i&gt;Heading Three&lt;/h3&gt;\n            &lt;h4&gt;&lt;i theme=\"contained\" class=\"bhi-candidate candidate\"&gt;&lt;/i&gt;Heading Four&lt;/h4&gt;\n            &lt;h5&gt;&lt;i theme=\"contained\" class=\"bhi-opportunity opportunity\"&gt;&lt;/i&gt;Heading Five&lt;/h5&gt;\n            &lt;h6&gt;&lt;i theme=\"contained\" class=\"bhi-job job\"&gt;&lt;/i&gt;Heading Six&lt;/h6&gt;\n            <!-- &lt;p&gt;&lt;i theme=\"contained\" class=\"bhi-star placement\"&gt;&lt;/i&gt;Body&lt;/p&gt; -->\n        </code>\n        </pre>\n    </article>\n</section>\n"

/***/ },

/***/ 733:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.IconographyComponent = undefined;
	
	var _dec, _class; // NG2
	
	
	var _core = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var IconographyComponent = exports.IconographyComponent = (_dec = (0, _core.Component)({
	    selector: 'iconography',
	    template: __webpack_require__(824)
	}), _dec(_class = function IconographyComponent() {
	    _classCallCheck(this, IconographyComponent);
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZGVzaWduL2ljb25vZ3JhcGh5L0ljb25vZ3JhcGh5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7a0JBQUE7OztBQUNBOzs7O0lBTWEsb0IsV0FBQSxvQixXQUpaLHFCQUFVO0FBQ1AsY0FBVSxhQURIO0FBRVAsY0FBVSxRQUFRLG9CQUFSO0FBRkgsQ0FBVixDIiwiZmlsZSI6Ikljb25vZ3JhcGh5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ljb25vZ3JhcGh5JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9JY29ub2dyYXBoeS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgSWNvbm9ncmFwaHlDb21wb25lbnQge1xufVxuIl19

/***/ },

/***/ 825:
/***/ function(module, exports) {

	module.exports = "<header class=\"design container\">\n    <div>\n        <h1 class=\"title\">Typography</h1>\n        <h2 class=\"sub-title\">Roboto, not robotic.</h2>\n\n        <p class=\"description\">\n            Roboto's refined letterforms combine geometry with open, rounded features to create a structured, yet friendly typeface. It maintains a human-like quality while expressing a clean and modern aesthetic.\n        </p>\n        <a href=\"https://www.google.com/fonts/specimen/Roboto\" target=\"_blank\"><i class=\"bhi-link\"></i> Roboto Typeface on Google Fonts</a>\n    </div>\n    <img src=\"assets/images/TypographyPageIcon.svg\" alt=\"\"/>\n</header>\n\n<section class=\"design container\">\n    <aside class=\"design-principle\">\n        <h6>Design Principle: <span>Clarity</span></h6>\n        <p>Proper line length, adequate white space, and appropriate line breaks\n            are necessary to preserve readability, rhythm, and overall clarity.</p>\n    </aside>\n\n    <article class=\"line-height\">\n        <h5>Line Height</h5>\n\n        <div>\n            <p style=\"line-height: 1em;\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n\n            <p class=\"not-accepted\">\n                <i class=\"bhi-close-o\"></i>These lines are too close for comfort\n            </p>\n        </div>\n        <div>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n\n            <p class=\"accepted\">\n                <i class=\"bhi-check\"></i>Thumbs up for great readability\n            </p>\n        </div>\n        <div>\n            <p style=\"line-height: 2.8em;\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n\n            <p class=\"not-accepted\">\n                <i class=\"bhi-close-o\"></i>I'm losing focus with all this space\n            </p>\n        </div>\n    </article>\n\n    <aside class=\"design-principle\">\n        <h6>Design Principle: <span>Balance</span></h6>\n        <p>Typographic balance is critical to readability and understanding\n            information hierarchy. The weight and size of the font helps determine\n            which element on a page receives a user’s attention first.</p>\n    </aside>\n\n    <article class=\"line-length\">\n        <h5>Line Length</h5>\n\n        <div class=\"too-short\">\n            <div class=\"ruler\">\n                <hr>\n                <span>30</span>\n\n                <p class=\"not-accepted\">\n                    <i class=\"bhi-close-o\"></i>Short lines interrupt the reader's rhythm\n                </p>\n            </div>\n            <p style=\"width: 15em;\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n        </div>\n        <div class=\"just-right\">\n            <div class=\"ruler\">\n                <hr>\n                <span>55-75</span>\n\n                <p class=\"accepted\">\n                    <i class=\"bhi-check\"></i>Optimal line length for readability\n                </p>\n            </div>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n        </div>\n        <div class=\"too-long\">\n            <div class=\"ruler\">\n                <hr>\n                <span>100</span>\n\n                <p class=\"not-accepted\">\n                    <i class=\"bhi-close-o\"></i>Difficult to jump to the next line\n                </p>\n            </div>\n            <p style=\"width: 55em; max-width: 100%;\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n        </div>\n    </article>\n\n    <aside class=\"imp-note\">\n        <h6><i class=\"bhi-mobile\"></i>How does this work with responsive design?</h6>\n        <p>\n            Line length is always relative to its font-size. This means that if a\n            font scales up or down in sizing (relative to its device's screen size) the\n            line length will automatically scale with it. Line length is about maintaining\n            a comfortable reading flow and rhythm from line to line.\n            <br><br>\n            <strong>When implementing</strong>, native line length will always be secondary to the width of\n            the text's container. This means that if a screen's width is smaller than\n            the text's native line length, the text will wrap early.\n        </p>\n    </aside>\n\n    <h2>Styles</h2>\n    <p>There a number of general styles that are present throughout the application. To maintain consistency, these styles should be adhered to as much as possible.</p>\n\n    <div class=\"example\">\n        <div class=\"type-group\">\n            <h1>Header 1</h1>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>2.5em (35px)</span>\n            <span><strong>Weight: </strong>400</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.45em 0 0.35em</span>\n        </div>\n        <div class=\"type-group\">\n            <h2>Header 2</h2>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>2em (28px)</span>\n            <span><strong>Weight: </strong>500</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.75em 0 0.3em</span>\n        </div>\n        <div class=\"type-group\">\n            <h3>Header 3</h3>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>1.75em (24px)</span>\n            <span><strong>Weight: </strong>300</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.6em 0 0.4em</span>\n        </div>\n        <div class=\"type-group\">\n            <h4>Header 4</h4>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>1.375em (19.25px)</span>\n            <span><strong>Weight: </strong>400</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.75em 0 0.5em</span>\n        </div>\n        <div class=\"type-group\">\n            <h5>Header 5</h5>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>1.125em (15.75px)</span>\n            <span><strong>Weight: </strong>700</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.75em 0 0.25em</span>\n            <span><strong>Transform: </strong>UPPERCASE</span>\n        </div>\n        <div class=\"type-group\">\n            <h6>Header 6</h6>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>1.125em (15.75px)</span>\n            <span><strong>Weight: </strong>500</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.75em 0 0.25em</span>\n        </div>\n        <div class=\"type-group\">\n            <span class=\"caption\">Caption</span>\n        </div>\n    </div>\n    <pre><code>\n        &lt;h1&gt;Heading 1&lt;/h1&gt;\n        &lt;h2&gt;Heading 2&lt;/h2&gt;\n        &lt;h3&gt;Heading 3&lt;/h3&gt;\n        &lt;h4&gt;Heading 4&lt;/h4&gt;\n        &lt;h5&gt;Heading 5&lt;/h5&gt;\n        &lt;h6&gt;Heading 6&lt;/h6&gt;\n        &lt;p&gt;\n        Body\n        &lt;/p&gt;\n        &lt;hr&gt;\n        &lt;span class=\"caption\"&gt;Caption&lt;/span&gt;</code>\n    </pre>\n</section>\n"

/***/ },

/***/ 734:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TypographyComponent = undefined;
	
	var _dec, _class; // NG2
	
	
	var _core = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TypographyComponent = exports.TypographyComponent = (_dec = (0, _core.Component)({
	    selector: 'typography',
	    template: __webpack_require__(825)
	}), _dec(_class = function TypographyComponent() {
	    _classCallCheck(this, TypographyComponent);
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZGVzaWduL3R5cG9ncmFwaHkvVHlwb2dyYXBoeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O2tCQUFBOzs7QUFDQTs7OztJQU1hLG1CLFdBQUEsbUIsV0FKWixxQkFBVTtBQUNQLGNBQVUsWUFESDtBQUVQLGNBQVUsUUFBUSxtQkFBUjtBQUZILENBQVYsQyIsImZpbGUiOiJUeXBvZ3JhcGh5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3R5cG9ncmFwaHknLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL1R5cG9ncmFwaHkuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIFR5cG9ncmFwaHlDb21wb25lbnQge1xufVxuIl19

/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ButtonDemo = __webpack_require__(735);
	
	Object.keys(_ButtonDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _ButtonDemo[key];
	    }
	  });
	});
	
	var _LoadingDemo = __webpack_require__(747);
	
	Object.keys(_LoadingDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _LoadingDemo[key];
	    }
	  });
	});
	
	var _CardDemo = __webpack_require__(737);
	
	Object.keys(_CardDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _CardDemo[key];
	    }
	  });
	});
	
	var _ToastDemo = __webpack_require__(760);
	
	Object.keys(_ToastDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _ToastDemo[key];
	    }
	  });
	});
	
	var _TooltipDemo = __webpack_require__(761);
	
	Object.keys(_TooltipDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _TooltipDemo[key];
	    }
	  });
	});
	
	var _HeaderDemo = __webpack_require__(745);
	
	Object.keys(_HeaderDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _HeaderDemo[key];
	    }
	  });
	});
	
	var _TabsDemo = __webpack_require__(757);
	
	Object.keys(_TabsDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _TabsDemo[key];
	    }
	  });
	});
	
	var _TilesDemo = __webpack_require__(758);
	
	Object.keys(_TilesDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _TilesDemo[key];
	    }
	  });
	});
	
	var _ModalDemo = __webpack_require__(748);
	
	Object.keys(_ModalDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _ModalDemo[key];
	    }
	  });
	});
	
	var _QuickNoteDemo = __webpack_require__(750);
	
	Object.keys(_QuickNoteDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _QuickNoteDemo[key];
	    }
	  });
	});
	
	var _RadioDemo = __webpack_require__(751);
	
	Object.keys(_RadioDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _RadioDemo[key];
	    }
	  });
	});
	
	var _DropdownDemo = __webpack_require__(741);
	
	Object.keys(_DropdownDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _DropdownDemo[key];
	    }
	  });
	});
	
	var _SelectDemo = __webpack_require__(752);
	
	Object.keys(_SelectDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _SelectDemo[key];
	    }
	  });
	});
	
	var _ListDemo = __webpack_require__(746);
	
	Object.keys(_ListDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _ListDemo[key];
	    }
	  });
	});
	
	var _SwitchDemo = __webpack_require__(754);
	
	Object.keys(_SwitchDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _SwitchDemo[key];
	    }
	  });
	});
	
	var _DrawerDemo = __webpack_require__(740);
	
	Object.keys(_DrawerDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _DrawerDemo[key];
	    }
	  });
	});
	
	var _DragulaDemo = __webpack_require__(739);
	
	Object.keys(_DragulaDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _DragulaDemo[key];
	    }
	  });
	});
	
	var _SlidesDemo = __webpack_require__(753);
	
	Object.keys(_SlidesDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _SlidesDemo[key];
	    }
	  });
	});
	
	var _PickerDemo = __webpack_require__(749);
	
	Object.keys(_PickerDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _PickerDemo[key];
	    }
	  });
	});
	
	var _ChipsDemo = __webpack_require__(738);
	
	Object.keys(_ChipsDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _ChipsDemo[key];
	    }
	  });
	});
	
	var _CalendarDemo = __webpack_require__(736);
	
	Object.keys(_CalendarDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _CalendarDemo[key];
	    }
	  });
	});
	
	var _EditorDemo = __webpack_require__(742);
	
	Object.keys(_EditorDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _EditorDemo[key];
	    }
	  });
	});
	
	var _TipWellDemo = __webpack_require__(759);
	
	Object.keys(_TipWellDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _TipWellDemo[key];
	    }
	  });
	});
	
	var _TableDemo = __webpack_require__(756);
	
	Object.keys(_TableDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _TableDemo[key];
	    }
	  });
	});
	
	var _FormDemo = __webpack_require__(743);
	
	Object.keys(_FormDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _FormDemo[key];
	    }
	  });
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvYWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9idXR0b24vQnV0dG9uRGVtbyc7XG5leHBvcnQgKiBmcm9tICcuL2xvYWRpbmcvTG9hZGluZ0RlbW8nO1xuZXhwb3J0ICogZnJvbSAnLi9jYXJkL0NhcmREZW1vJztcbmV4cG9ydCAqIGZyb20gJy4vdG9hc3QvVG9hc3REZW1vJztcbmV4cG9ydCAqIGZyb20gJy4vdG9vbHRpcC9Ub29sdGlwRGVtbyc7XG5leHBvcnQgKiBmcm9tICcuL2hlYWRlci9IZWFkZXJEZW1vJztcbmV4cG9ydCAqIGZyb20gJy4vdGFicy9UYWJzRGVtbyc7XG5leHBvcnQgKiBmcm9tICcuL3RpbGVzL1RpbGVzRGVtbyc7XG5leHBvcnQgKiBmcm9tICcuL21vZGFsL01vZGFsRGVtbyc7XG5leHBvcnQgKiBmcm9tICcuL3F1aWNrLW5vdGUvUXVpY2tOb3RlRGVtbyc7XG5leHBvcnQgKiBmcm9tICcuL3JhZGlvL1JhZGlvRGVtbyc7XG5leHBvcnQgKiBmcm9tICcuL2Ryb3Bkb3duL0Ryb3Bkb3duRGVtbyc7XG5leHBvcnQgKiBmcm9tICcuL3NlbGVjdC9TZWxlY3REZW1vJztcbmV4cG9ydCAqIGZyb20gJy4vbGlzdC9MaXN0RGVtbyc7XG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC9Td2l0Y2hEZW1vJztcbmV4cG9ydCAqIGZyb20gJy4vZHJhd2VyL0RyYXdlckRlbW8nO1xuZXhwb3J0ICogZnJvbSAnLi9kcmFndWxhL0RyYWd1bGFEZW1vJztcbmV4cG9ydCAqIGZyb20gJy4vc2xpZGVzL1NsaWRlc0RlbW8nO1xuZXhwb3J0ICogZnJvbSAnLi9waWNrZXIvUGlja2VyRGVtbyc7XG5leHBvcnQgKiBmcm9tICcuL2NoaXBzL0NoaXBzRGVtbyc7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyL0NhbGVuZGFyRGVtbyc7XG5leHBvcnQgKiBmcm9tICcuL2VkaXRvci9FZGl0b3JEZW1vJztcbmV4cG9ydCAqIGZyb20gJy4vdGlwLXdlbGwvVGlwV2VsbERlbW8nO1xuZXhwb3J0ICogZnJvbSAnLi90YWJsZS9UYWJsZURlbW8nO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtL0Zvcm1EZW1vJztcbiJdfQ==

/***/ },

/***/ 735:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ButtonDemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// APP
	
	
	var _core = __webpack_require__(1);
	
	var _PrimaryButtonDemo = __webpack_require__(830);
	
	var _PrimaryButtonDemo2 = _interopRequireDefault(_PrimaryButtonDemo);
	
	var _DialogueButtonDemo = __webpack_require__(826);
	
	var _DialogueButtonDemo2 = _interopRequireDefault(_DialogueButtonDemo);
	
	var _HeaderButtonDemo = __webpack_require__(828);
	
	var _HeaderButtonDemo2 = _interopRequireDefault(_HeaderButtonDemo);
	
	var _IconButtonDemo = __webpack_require__(829);
	
	var _IconButtonDemo2 = _interopRequireDefault(_IconButtonDemo);
	
	var _StandardButtonDemo = __webpack_require__(832);
	
	var _StandardButtonDemo2 = _interopRequireDefault(_StandardButtonDemo);
	
	var _SecondaryButtonDemo = __webpack_require__(831);
	
	var _SecondaryButtonDemo2 = _interopRequireDefault(_SecondaryButtonDemo);
	
	var _DynamicButtonDemo = __webpack_require__(827);
	
	var _DynamicButtonDemo2 = _interopRequireDefault(_DynamicButtonDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Button <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/button">(source)</a></small></h1>\n    <p>A button clearly indicates a point of action for the user. Bullhorn buttons\n     come in a variety of themes, custom tailored to fit your use-case.</p>\n\n    <h2>Themes</h2>\n    <p>\n        Bullhorn button themes were hand crafted to make your life easier.\n         Most buttons used in the Bullhorn platform should utilize a\n         <code>theme</code> attribute. Theme attributes provide access to every\n         variation of Bullhorn UX approved buttons. Depending on the theme, some\n         buttons may also utilize <code>icon</code>, <code>side</code>, and\n         <code>inverse</code> attributes. Button are divided by function into\n         four main categories: Primary, Secondary, Neutralizing, Subtractive.\n         There are also three other button types that are independent of function:\n         Dialogue, Icon, and Header.\n    </p>\n\n    <h5>Colors</h5>\n    <p>\n        Acceptable colors include <code>Primary</code>, <code>Success</code>, <code>Warning</code>, <code>Negative</code>,\n         and <strong>all analytics colors</strong> which can be found in the color section of the style guide.\n    </p>\n\n    <br/>\n\n    <h5>Primary</h5>\n    <p>\n        Primary buttons are used to as primary calls-to-action. They should <strong>always</strong>\n         get an <code>icon</code> attribute. Primary buttons with a "success" color\n         <code>color="success"</code> are used for saving and will almost always contain a "check" icon.\n         Negative color primary buttons <code>color="negative"</code> are used to delete,\n         clear, or otherwise remove an extant element. Primary buttons should never have a <code>side</code> attribute.\n    </p>\n    <div class="example buttons-demo">' + _PrimaryButtonDemo2.default + '</div>\n    <code-snippet [code]="PrimaryButtonDemoTpl"></code-snippet>\n\n    <h5>Secondary</h5>\n    <p>\n        Secondary buttons are used as an alternative Primary button or when there\n         is a second major action on a page. They usually appears only in Overview\n         and Slideout headers. This theme with an <code>inverse</code> attribute is\n         often used as the action button in dropdown menus.\n    </p>\n    <div class="example buttons-demo">' + _SecondaryButtonDemo2.default + '</div>\n    <code-snippet [code]="SecondaryButtonDemoTpl"></code-snippet>\n    <p>\n        Secondary buttons can also get an <code>inverse</code> attribute for use on a colored background.\n    </p>\n    <div class="example header buttons-demo" [ngClass]="color" (click)="changeColor()" tooltip="Click Me!" tooltipPlacement="top">' + _HeaderButtonDemo2.default + '</div>\n    <code-snippet [code]="HeaderButtonDemoTpl"></code-snippet>\n\n    <h5>Dialogue</h5>\n    <p>\n        Similar to icon buttons, dialogue buttons require less visual dominance but often need additional helper text. Dialogue buttons\n        <em>may</em> contain <strong>any</strong> icon and a\n        <code>side</code> may be specified eg:<code>side="right"</code> to place the icon on the right or left side of the text. Dialogue buttons may also use an\n        <code>inverse</code> attribute to change its text color to white.\n    </p>\n    <div class="example buttons-demo">' + _DialogueButtonDemo2.default + '</div>\n    <code-snippet [code]="DialogueButtonDemoTpl"></code-snippet>\n\n    <h5>Standard</h5>\n    <p>\n        Standard buttons are the most generic button style. Standard buttons by default are\n         styled identically to standard buttons with a <code>color="light"</code>\n         attribute. Typically, a standard button is used to cancel an action,\n         or to cease any additional progress. Although standard buttons <em>can</em>\n         get an <code>icon</code> attribute, they should almost never be used with an icon.\n         If your proposed design calls for a standard button with an icon, consider using\n         a different button theme, like dialogue.\n    </p>\n    <div class="example buttons-demo">' + _StandardButtonDemo2.default + '</div>\n    <code-snippet [code]="NeutralButtonDemoTpl"></code-snippet>\n\n    <h5>Icon</h5>\n    <p>\n        The <code>icon</code> theme is used to create\n        <strong>icon-only</strong> buttons, which contain no text. They can occupy any of the four main functions but require far less visual dominance than normal buttons. Icon buttons\n        <strong>always</strong> have an <code>icon</code> attribute and can use\n        <strong>any</strong> icon. Icon buttons may also use an\n        <code>inverse</code> attribute to change its icon color to white.\n    </p>\n    <div class="example buttons-demo icons" [ngClass]="color" (click)="changeColor()" tooltip="Click Me!" tooltipPlacement="top">' + _IconButtonDemo2.default + '</div>\n    <code-snippet [code]="IconButtonDemoTpl"></code-snippet>\n\n    <h5>Dynamic</h5>\n    <p>\n        Button parameters can be dynamically set and change at runtime.  The styles should\n        change and be applied when the values change.\n    </p>\n    <div class="example buttons-demo">' + _DynamicButtonDemo2.default + '</div>\n    <code-snippet [code]="DynamicButtonDemoTpl"></code-snippet>\n</div>\n';
	
	var HEADER_COLORS = ['blue', 'green', 'yellow', 'orange', 'red', 'purple'];
	
	var ButtonDemoComponent = exports.ButtonDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'buttons-demo',
	    template: template
	}), _dec(_class = function () {
	    function ButtonDemoComponent() {
	        _classCallCheck(this, ButtonDemoComponent);
	
	        this.PrimaryButtonDemoTpl = _PrimaryButtonDemo2.default;
	        this.SecondaryButtonDemoTpl = _SecondaryButtonDemo2.default;
	        this.DialogueButtonDemoTpl = _DialogueButtonDemo2.default;
	        this.NeutralButtonDemoTpl = _StandardButtonDemo2.default;
	        this.HeaderButtonDemoTpl = _HeaderButtonDemo2.default;
	        this.IconButtonDemoTpl = _IconButtonDemo2.default;
	        this.DynamicButtonDemoTpl = _DynamicButtonDemo2.default;
	
	        this.theme = 'primary';
	        this.isChecked = false;
	    }
	
	    _createClass(ButtonDemoComponent, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.color = 'blue';
	            this.negativeColor = 'negative';
	        }
	    }, {
	        key: 'changeColor',
	        value: function changeColor() {
	            var idx = HEADER_COLORS.indexOf(this.color);
	            this.color = HEADER_COLORS[idx + 1];
	        }
	    }, {
	        key: 'changeTheme',
	        value: function changeTheme() {
	            var i = Math.floor(Math.random() * 4);
	            this.theme = ['primary', 'secondary', 'dialogue', 'standard', 'icon'][i];
	        }
	    }]);
	
	    return ButtonDemoComponent;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvYnV0dG9uL0J1dHRvbkRlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tCQUFBOztBQUVBOzs7QUFEQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLDB3S0FBTjs7QUFpR0EsSUFBTSxnQkFBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixRQUE1QixFQUFzQyxLQUF0QyxFQUE2QyxRQUE3QyxDQUF0Qjs7SUFNYSxtQixXQUFBLG1CLFdBSloscUJBQVU7QUFDUCxjQUFVLGNBREg7QUFFUCxjQUFVO0FBRkgsQ0FBVixDO0FBS0csbUNBQWM7QUFBQTs7QUFDVixhQUFLLG9CQUFMO0FBQ0EsYUFBSyxzQkFBTDtBQUNBLGFBQUsscUJBQUw7QUFDQSxhQUFLLG9CQUFMO0FBQ0EsYUFBSyxtQkFBTDtBQUNBLGFBQUssaUJBQUw7QUFDQSxhQUFLLG9CQUFMOztBQUVBLGFBQUssS0FBTCxHQUFhLFNBQWI7QUFDQSxhQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDSDs7OzttQ0FFVTtBQUNQLGlCQUFLLEtBQUwsR0FBYSxNQUFiO0FBQ0EsaUJBQUssYUFBTCxHQUFxQixVQUFyQjtBQUNIOzs7c0NBRWE7QUFDVixnQkFBSSxNQUFNLGNBQWMsT0FBZCxDQUFzQixLQUFLLEtBQTNCLENBQVY7QUFDQSxpQkFBSyxLQUFMLEdBQWEsY0FBYyxNQUFNLENBQXBCLENBQWI7QUFDSDs7O3NDQUVhO0FBQ1YsZ0JBQUksSUFBSSxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBZ0IsQ0FBM0IsQ0FBUjtBQUNBLGlCQUFLLEtBQUwsR0FBYSxDQUFDLFNBQUQsRUFBWSxXQUFaLEVBQXlCLFVBQXpCLEVBQXFDLFVBQXJDLEVBQWlELE1BQWpELEVBQXlELENBQXpELENBQWI7QUFDSCIsImZpbGUiOiJCdXR0b25EZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgUHJpbWFyeUJ1dHRvbkRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvUHJpbWFyeUJ1dHRvbkRlbW8uaHRtbCc7XG5pbXBvcnQgRGlhbG9ndWVCdXR0b25EZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0RpYWxvZ3VlQnV0dG9uRGVtby5odG1sJztcbmltcG9ydCBIZWFkZXJCdXR0b25EZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0hlYWRlckJ1dHRvbkRlbW8uaHRtbCc7XG5pbXBvcnQgSWNvbkJ1dHRvbkRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvSWNvbkJ1dHRvbkRlbW8uaHRtbCc7XG5pbXBvcnQgU3RhbmRhcmRCdXR0b25EZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1N0YW5kYXJkQnV0dG9uRGVtby5odG1sJztcbmltcG9ydCBTZWNvbmRhcnlCdXR0b25EZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1NlY29uZGFyeUJ1dHRvbkRlbW8uaHRtbCc7XG5pbXBvcnQgRHluYW1pY0J1dHRvbkRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvRHluYW1pY0J1dHRvbkRlbW8uaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5CdXR0b24gPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvYnV0dG9uXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPkEgYnV0dG9uIGNsZWFybHkgaW5kaWNhdGVzIGEgcG9pbnQgb2YgYWN0aW9uIGZvciB0aGUgdXNlci4gQnVsbGhvcm4gYnV0dG9uc1xuICAgICBjb21lIGluIGEgdmFyaWV0eSBvZiB0aGVtZXMsIGN1c3RvbSB0YWlsb3JlZCB0byBmaXQgeW91ciB1c2UtY2FzZS48L3A+XG5cbiAgICA8aDI+VGhlbWVzPC9oMj5cbiAgICA8cD5cbiAgICAgICAgQnVsbGhvcm4gYnV0dG9uIHRoZW1lcyB3ZXJlIGhhbmQgY3JhZnRlZCB0byBtYWtlIHlvdXIgbGlmZSBlYXNpZXIuXG4gICAgICAgICBNb3N0IGJ1dHRvbnMgdXNlZCBpbiB0aGUgQnVsbGhvcm4gcGxhdGZvcm0gc2hvdWxkIHV0aWxpemUgYVxuICAgICAgICAgPGNvZGU+dGhlbWU8L2NvZGU+IGF0dHJpYnV0ZS4gVGhlbWUgYXR0cmlidXRlcyBwcm92aWRlIGFjY2VzcyB0byBldmVyeVxuICAgICAgICAgdmFyaWF0aW9uIG9mIEJ1bGxob3JuIFVYIGFwcHJvdmVkIGJ1dHRvbnMuIERlcGVuZGluZyBvbiB0aGUgdGhlbWUsIHNvbWVcbiAgICAgICAgIGJ1dHRvbnMgbWF5IGFsc28gdXRpbGl6ZSA8Y29kZT5pY29uPC9jb2RlPiwgPGNvZGU+c2lkZTwvY29kZT4sIGFuZFxuICAgICAgICAgPGNvZGU+aW52ZXJzZTwvY29kZT4gYXR0cmlidXRlcy4gQnV0dG9uIGFyZSBkaXZpZGVkIGJ5IGZ1bmN0aW9uIGludG9cbiAgICAgICAgIGZvdXIgbWFpbiBjYXRlZ29yaWVzOiBQcmltYXJ5LCBTZWNvbmRhcnksIE5ldXRyYWxpemluZywgU3VidHJhY3RpdmUuXG4gICAgICAgICBUaGVyZSBhcmUgYWxzbyB0aHJlZSBvdGhlciBidXR0b24gdHlwZXMgdGhhdCBhcmUgaW5kZXBlbmRlbnQgb2YgZnVuY3Rpb246XG4gICAgICAgICBEaWFsb2d1ZSwgSWNvbiwgYW5kIEhlYWRlci5cbiAgICA8L3A+XG5cbiAgICA8aDU+Q29sb3JzPC9oNT5cbiAgICA8cD5cbiAgICAgICAgQWNjZXB0YWJsZSBjb2xvcnMgaW5jbHVkZSA8Y29kZT5QcmltYXJ5PC9jb2RlPiwgPGNvZGU+U3VjY2VzczwvY29kZT4sIDxjb2RlPldhcm5pbmc8L2NvZGU+LCA8Y29kZT5OZWdhdGl2ZTwvY29kZT4sXG4gICAgICAgICBhbmQgPHN0cm9uZz5hbGwgYW5hbHl0aWNzIGNvbG9yczwvc3Ryb25nPiB3aGljaCBjYW4gYmUgZm91bmQgaW4gdGhlIGNvbG9yIHNlY3Rpb24gb2YgdGhlIHN0eWxlIGd1aWRlLlxuICAgIDwvcD5cblxuICAgIDxici8+XG5cbiAgICA8aDU+UHJpbWFyeTwvaDU+XG4gICAgPHA+XG4gICAgICAgIFByaW1hcnkgYnV0dG9ucyBhcmUgdXNlZCB0byBhcyBwcmltYXJ5IGNhbGxzLXRvLWFjdGlvbi4gVGhleSBzaG91bGQgPHN0cm9uZz5hbHdheXM8L3N0cm9uZz5cbiAgICAgICAgIGdldCBhbiA8Y29kZT5pY29uPC9jb2RlPiBhdHRyaWJ1dGUuIFByaW1hcnkgYnV0dG9ucyB3aXRoIGEgXCJzdWNjZXNzXCIgY29sb3JcbiAgICAgICAgIDxjb2RlPmNvbG9yPVwic3VjY2Vzc1wiPC9jb2RlPiBhcmUgdXNlZCBmb3Igc2F2aW5nIGFuZCB3aWxsIGFsbW9zdCBhbHdheXMgY29udGFpbiBhIFwiY2hlY2tcIiBpY29uLlxuICAgICAgICAgTmVnYXRpdmUgY29sb3IgcHJpbWFyeSBidXR0b25zIDxjb2RlPmNvbG9yPVwibmVnYXRpdmVcIjwvY29kZT4gYXJlIHVzZWQgdG8gZGVsZXRlLFxuICAgICAgICAgY2xlYXIsIG9yIG90aGVyd2lzZSByZW1vdmUgYW4gZXh0YW50IGVsZW1lbnQuIFByaW1hcnkgYnV0dG9ucyBzaG91bGQgbmV2ZXIgaGF2ZSBhIDxjb2RlPnNpZGU8L2NvZGU+IGF0dHJpYnV0ZS5cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgYnV0dG9ucy1kZW1vXCI+JHtQcmltYXJ5QnV0dG9uRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlByaW1hcnlCdXR0b25EZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+U2Vjb25kYXJ5PC9oNT5cbiAgICA8cD5cbiAgICAgICAgU2Vjb25kYXJ5IGJ1dHRvbnMgYXJlIHVzZWQgYXMgYW4gYWx0ZXJuYXRpdmUgUHJpbWFyeSBidXR0b24gb3Igd2hlbiB0aGVyZVxuICAgICAgICAgaXMgYSBzZWNvbmQgbWFqb3IgYWN0aW9uIG9uIGEgcGFnZS4gVGhleSB1c3VhbGx5IGFwcGVhcnMgb25seSBpbiBPdmVydmlld1xuICAgICAgICAgYW5kIFNsaWRlb3V0IGhlYWRlcnMuIFRoaXMgdGhlbWUgd2l0aCBhbiA8Y29kZT5pbnZlcnNlPC9jb2RlPiBhdHRyaWJ1dGUgaXNcbiAgICAgICAgIG9mdGVuIHVzZWQgYXMgdGhlIGFjdGlvbiBidXR0b24gaW4gZHJvcGRvd24gbWVudXMuXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGJ1dHRvbnMtZGVtb1wiPiR7U2Vjb25kYXJ5QnV0dG9uRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlNlY29uZGFyeUJ1dHRvbkRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbiAgICA8cD5cbiAgICAgICAgU2Vjb25kYXJ5IGJ1dHRvbnMgY2FuIGFsc28gZ2V0IGFuIDxjb2RlPmludmVyc2U8L2NvZGU+IGF0dHJpYnV0ZSBmb3IgdXNlIG9uIGEgY29sb3JlZCBiYWNrZ3JvdW5kLlxuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBoZWFkZXIgYnV0dG9ucy1kZW1vXCIgW25nQ2xhc3NdPVwiY29sb3JcIiAoY2xpY2spPVwiY2hhbmdlQ29sb3IoKVwiIHRvb2x0aXA9XCJDbGljayBNZSFcIiB0b29sdGlwUGxhY2VtZW50PVwidG9wXCI+JHtIZWFkZXJCdXR0b25EZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiSGVhZGVyQnV0dG9uRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PkRpYWxvZ3VlPC9oNT5cbiAgICA8cD5cbiAgICAgICAgU2ltaWxhciB0byBpY29uIGJ1dHRvbnMsIGRpYWxvZ3VlIGJ1dHRvbnMgcmVxdWlyZSBsZXNzIHZpc3VhbCBkb21pbmFuY2UgYnV0IG9mdGVuIG5lZWQgYWRkaXRpb25hbCBoZWxwZXIgdGV4dC4gRGlhbG9ndWUgYnV0dG9uc1xuICAgICAgICA8ZW0+bWF5PC9lbT4gY29udGFpbiA8c3Ryb25nPmFueTwvc3Ryb25nPiBpY29uIGFuZCBhXG4gICAgICAgIDxjb2RlPnNpZGU8L2NvZGU+IG1heSBiZSBzcGVjaWZpZWQgZWc6PGNvZGU+c2lkZT1cInJpZ2h0XCI8L2NvZGU+IHRvIHBsYWNlIHRoZSBpY29uIG9uIHRoZSByaWdodCBvciBsZWZ0IHNpZGUgb2YgdGhlIHRleHQuIERpYWxvZ3VlIGJ1dHRvbnMgbWF5IGFsc28gdXNlIGFuXG4gICAgICAgIDxjb2RlPmludmVyc2U8L2NvZGU+IGF0dHJpYnV0ZSB0byBjaGFuZ2UgaXRzIHRleHQgY29sb3IgdG8gd2hpdGUuXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGJ1dHRvbnMtZGVtb1wiPiR7RGlhbG9ndWVCdXR0b25EZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiRGlhbG9ndWVCdXR0b25EZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+U3RhbmRhcmQ8L2g1PlxuICAgIDxwPlxuICAgICAgICBTdGFuZGFyZCBidXR0b25zIGFyZSB0aGUgbW9zdCBnZW5lcmljIGJ1dHRvbiBzdHlsZS4gU3RhbmRhcmQgYnV0dG9ucyBieSBkZWZhdWx0IGFyZVxuICAgICAgICAgc3R5bGVkIGlkZW50aWNhbGx5IHRvIHN0YW5kYXJkIGJ1dHRvbnMgd2l0aCBhIDxjb2RlPmNvbG9yPVwibGlnaHRcIjwvY29kZT5cbiAgICAgICAgIGF0dHJpYnV0ZS4gVHlwaWNhbGx5LCBhIHN0YW5kYXJkIGJ1dHRvbiBpcyB1c2VkIHRvIGNhbmNlbCBhbiBhY3Rpb24sXG4gICAgICAgICBvciB0byBjZWFzZSBhbnkgYWRkaXRpb25hbCBwcm9ncmVzcy4gQWx0aG91Z2ggc3RhbmRhcmQgYnV0dG9ucyA8ZW0+Y2FuPC9lbT5cbiAgICAgICAgIGdldCBhbiA8Y29kZT5pY29uPC9jb2RlPiBhdHRyaWJ1dGUsIHRoZXkgc2hvdWxkIGFsbW9zdCBuZXZlciBiZSB1c2VkIHdpdGggYW4gaWNvbi5cbiAgICAgICAgIElmIHlvdXIgcHJvcG9zZWQgZGVzaWduIGNhbGxzIGZvciBhIHN0YW5kYXJkIGJ1dHRvbiB3aXRoIGFuIGljb24sIGNvbnNpZGVyIHVzaW5nXG4gICAgICAgICBhIGRpZmZlcmVudCBidXR0b24gdGhlbWUsIGxpa2UgZGlhbG9ndWUuXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGJ1dHRvbnMtZGVtb1wiPiR7U3RhbmRhcmRCdXR0b25EZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiTmV1dHJhbEJ1dHRvbkRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5JY29uPC9oNT5cbiAgICA8cD5cbiAgICAgICAgVGhlIDxjb2RlPmljb248L2NvZGU+IHRoZW1lIGlzIHVzZWQgdG8gY3JlYXRlXG4gICAgICAgIDxzdHJvbmc+aWNvbi1vbmx5PC9zdHJvbmc+IGJ1dHRvbnMsIHdoaWNoIGNvbnRhaW4gbm8gdGV4dC4gVGhleSBjYW4gb2NjdXB5IGFueSBvZiB0aGUgZm91ciBtYWluIGZ1bmN0aW9ucyBidXQgcmVxdWlyZSBmYXIgbGVzcyB2aXN1YWwgZG9taW5hbmNlIHRoYW4gbm9ybWFsIGJ1dHRvbnMuIEljb24gYnV0dG9uc1xuICAgICAgICA8c3Ryb25nPmFsd2F5czwvc3Ryb25nPiBoYXZlIGFuIDxjb2RlPmljb248L2NvZGU+IGF0dHJpYnV0ZSBhbmQgY2FuIHVzZVxuICAgICAgICA8c3Ryb25nPmFueTwvc3Ryb25nPiBpY29uLiBJY29uIGJ1dHRvbnMgbWF5IGFsc28gdXNlIGFuXG4gICAgICAgIDxjb2RlPmludmVyc2U8L2NvZGU+IGF0dHJpYnV0ZSB0byBjaGFuZ2UgaXRzIGljb24gY29sb3IgdG8gd2hpdGUuXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGJ1dHRvbnMtZGVtbyBpY29uc1wiIFtuZ0NsYXNzXT1cImNvbG9yXCIgKGNsaWNrKT1cImNoYW5nZUNvbG9yKClcIiB0b29sdGlwPVwiQ2xpY2sgTWUhXCIgdG9vbHRpcFBsYWNlbWVudD1cInRvcFwiPiR7SWNvbkJ1dHRvbkRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJJY29uQnV0dG9uRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PkR5bmFtaWM8L2g1PlxuICAgIDxwPlxuICAgICAgICBCdXR0b24gcGFyYW1ldGVycyBjYW4gYmUgZHluYW1pY2FsbHkgc2V0IGFuZCBjaGFuZ2UgYXQgcnVudGltZS4gIFRoZSBzdHlsZXMgc2hvdWxkXG4gICAgICAgIGNoYW5nZSBhbmQgYmUgYXBwbGllZCB3aGVuIHRoZSB2YWx1ZXMgY2hhbmdlLlxuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBidXR0b25zLWRlbW9cIj4ke0R5bmFtaWNCdXR0b25EZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiRHluYW1pY0J1dHRvbkRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuY29uc3QgSEVBREVSX0NPTE9SUyA9IFsnYmx1ZScsICdncmVlbicsICd5ZWxsb3cnLCAnb3JhbmdlJywgJ3JlZCcsICdwdXJwbGUnXTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdidXR0b25zLWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25EZW1vQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5QcmltYXJ5QnV0dG9uRGVtb1RwbCA9IFByaW1hcnlCdXR0b25EZW1vVHBsO1xuICAgICAgICB0aGlzLlNlY29uZGFyeUJ1dHRvbkRlbW9UcGwgPSBTZWNvbmRhcnlCdXR0b25EZW1vVHBsO1xuICAgICAgICB0aGlzLkRpYWxvZ3VlQnV0dG9uRGVtb1RwbCA9IERpYWxvZ3VlQnV0dG9uRGVtb1RwbDtcbiAgICAgICAgdGhpcy5OZXV0cmFsQnV0dG9uRGVtb1RwbCA9IFN0YW5kYXJkQnV0dG9uRGVtb1RwbDtcbiAgICAgICAgdGhpcy5IZWFkZXJCdXR0b25EZW1vVHBsID0gSGVhZGVyQnV0dG9uRGVtb1RwbDtcbiAgICAgICAgdGhpcy5JY29uQnV0dG9uRGVtb1RwbCA9IEljb25CdXR0b25EZW1vVHBsO1xuICAgICAgICB0aGlzLkR5bmFtaWNCdXR0b25EZW1vVHBsID0gRHluYW1pY0J1dHRvbkRlbW9UcGw7XG5cbiAgICAgICAgdGhpcy50aGVtZSA9ICdwcmltYXJ5JztcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9ICdibHVlJztcbiAgICAgICAgdGhpcy5uZWdhdGl2ZUNvbG9yID0gJ25lZ2F0aXZlJztcbiAgICB9XG5cbiAgICBjaGFuZ2VDb2xvcigpIHtcbiAgICAgICAgbGV0IGlkeCA9IEhFQURFUl9DT0xPUlMuaW5kZXhPZih0aGlzLmNvbG9yKTtcbiAgICAgICAgdGhpcy5jb2xvciA9IEhFQURFUl9DT0xPUlNbaWR4ICsgMV07XG4gICAgfVxuXG4gICAgY2hhbmdlVGhlbWUoKSB7XG4gICAgICAgIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG4gICAgICAgIHRoaXMudGhlbWUgPSBbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ2RpYWxvZ3VlJywgJ3N0YW5kYXJkJywgJ2ljb24nXVtpXTtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 826:
/***/ function(module, exports) {

	module.exports = "<button theme=\"dialogue\" icon=\"addcard\">Add Card</button>\n<div class=\"inverse-color\">\n    <button theme=\"dialogue\" icon=\"list-o\" side=\"left\" color=\"white\" inverse>Add/Remove</button>\n</div>\n<button theme=\"dialogue\" icon=\"check\" color=\"success\">Dialogue</button>\n<button theme=\"dialogue\" disabled>Dialogue</button>\n"

/***/ },

/***/ 827:
/***/ function(module, exports) {

	module.exports = "<button [theme]=\"theme\" [icon]=\"isChecked ? 'check' : 'times'\" (click)=\"changeTheme()\">Change Theme</button>\n<novo-checkbox label=\"Checked?\" [(ngModel)]=\"isChecked\"></novo-checkbox>\n"

/***/ },

/***/ 828:
/***/ function(module, exports) {

	module.exports = "<button theme=\"secondary\" icon=\"collapse\" inverse>Actions</button>\n<button theme=\"secondary\" icon=\"convert\" inverse>Convert</button>\n<button theme=\"secondary\" icon=\"convert\" inverse disabled>Convert</button>\n"

/***/ },

/***/ 829:
/***/ function(module, exports) {

	module.exports = "<button theme=\"icon\" icon=\"print\" inverse></button>\n<button theme=\"icon\" icon=\"print\" inverse disabled></button>\n"

/***/ },

/***/ 830:
/***/ function(module, exports) {

	module.exports = "<button theme=\"primary\" icon=\"next\">Next</button>\n<button theme=\"primary\" [color]=\"negativeColor\" icon=\"times\">Cancel</button>\n<button theme=\"primary\" color=\"success\" icon=\"check\">Save</button>\n<button theme=\"primary\" color=\"warning\" icon=\"caution-o\">Caution</button>\n<button theme=\"primary\" color=\"pulse\" icon=\"next\" disabled>Submit</button>\n"

/***/ },

/***/ 831:
/***/ function(module, exports) {

	module.exports = "<button theme=\"secondary\">Secondary</button>\n<button theme=\"secondary\" disabled>Secondary</button>\n\n"

/***/ },

/***/ 832:
/***/ function(module, exports) {

	module.exports = "<button theme=\"standard\">Standard</button>\n<button theme=\"standard\" color=\"light\">Standard</button>\n<button theme=\"standard\" color=\"light\" disabled>Standard</button>\n"

/***/ },

/***/ 736:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CalendarDemoComponent = undefined;
	
	var _dec, _class; // NG2
	
	// APP
	
	// Vendor
	
	
	var _core = __webpack_require__(1);
	
	var _CalendarDemo = __webpack_require__(833);
	
	var _CalendarDemo2 = _interopRequireDefault(_CalendarDemo);
	
	var _TimeDemo = __webpack_require__(835);
	
	var _TimeDemo2 = _interopRequireDefault(_TimeDemo);
	
	var _RangeDemo = __webpack_require__(834);
	
	var _RangeDemo2 = _interopRequireDefault(_RangeDemo);
	
	var _moment = __webpack_require__(3);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Date and Time Pickers</h1>\n    <p>These allow users to easily select a time and date. It comes in a handful of varieties based on the content of the field.</p>\n\n    <h2>Calendar Picker  <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/date-picker">(source)</a></small></h2>\n    <p>The calendar picker is used to select a date. It appears in all date picker fields.</p>\n\n    <h5>Full Calendar Picker</h5>\n    <div class="example demo">' + _CalendarDemo2.default + '</div>\n    <code-snippet [code]="CalendarDemoTpl"></code-snippet>\n\n    <h2>Time Picker  <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/time-picker">(source)</a></small></h2>\n    <p>Time pickers come in 12 hour or 24 hour style.</p>\n\n    <h5>Standalone Time Picker</h5>\n    <div class="example demo">' + _TimeDemo2.default + '</div>\n    <code-snippet [code]="TimeDemoTpl"></code-snippet>\n\n    <h5>Range Picker</h5>\n    <div class="example demo">' + _RangeDemo2.default + '</div>\n    <code-snippet [code]="RangeDemoTpl"></code-snippet>\n</div>\n';
	
	var CalendarDemoComponent = exports.CalendarDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'calendar-demo',
	    template: template
	}), _dec(_class = function CalendarDemoComponent() {
	    _classCallCheck(this, CalendarDemoComponent);
	
	    this.CalendarDemoTpl = _CalendarDemo2.default;
	    this.TimeDemoTpl = _TimeDemo2.default;
	    this.RangeDemoTpl = _RangeDemo2.default;
	
	    this.time = new Date();
	    this.dateOne = new Date();
	    this.dateTwo = new Date();
	    this.start = (0, _moment2.default)().subtract(1, 'months');
	    this.end = (0, _moment2.default)().add(1, 'months');
	    this.value = {
	        startDate: null,
	        endDate: null
	    };
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvY2FsZW5kYXIvQ2FsZW5kYXJEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7a0JBQUE7O0FBRUE7O0FBSUE7OztBQUxBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7OztBQUVBLElBQU0sd3BDQUFOOztJQTZCYSxxQixXQUFBLHFCLFdBSloscUJBQVU7QUFDUCxjQUFVLGVBREg7QUFFUCxjQUFVO0FBRkgsQ0FBVixDLGdCQUtHLGlDQUFjO0FBQUE7O0FBQ1YsU0FBSyxlQUFMO0FBQ0EsU0FBSyxXQUFMO0FBQ0EsU0FBSyxZQUFMOztBQUVBLFNBQUssSUFBTCxHQUFZLElBQUksSUFBSixFQUFaO0FBQ0EsU0FBSyxPQUFMLEdBQWUsSUFBSSxJQUFKLEVBQWY7QUFDQSxTQUFLLE9BQUwsR0FBZSxJQUFJLElBQUosRUFBZjtBQUNBLFNBQUssS0FBTCxHQUFhLHdCQUFTLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsUUFBckIsQ0FBYjtBQUNBLFNBQUssR0FBTCxHQUFXLHdCQUFTLEdBQVQsQ0FBYSxDQUFiLEVBQWdCLFFBQWhCLENBQVg7QUFDQSxTQUFLLEtBQUwsR0FBYTtBQUNULG1CQUFXLElBREY7QUFFVCxpQkFBUztBQUZBLEtBQWI7QUFJSCxDIiwiZmlsZSI6IkNhbGVuZGFyRGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IENhbGVuZGFyRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9DYWxlbmRhckRlbW8uaHRtbCc7XG5pbXBvcnQgVGltZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVGltZURlbW8uaHRtbCc7XG5pbXBvcnQgUmFuZ2VEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1JhbmdlRGVtby5odG1sJztcbi8vIFZlbmRvclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQvbW9tZW50JztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPkRhdGUgYW5kIFRpbWUgUGlja2VyczwvaDE+XG4gICAgPHA+VGhlc2UgYWxsb3cgdXNlcnMgdG8gZWFzaWx5IHNlbGVjdCBhIHRpbWUgYW5kIGRhdGUuIEl0IGNvbWVzIGluIGEgaGFuZGZ1bCBvZiB2YXJpZXRpZXMgYmFzZWQgb24gdGhlIGNvbnRlbnQgb2YgdGhlIGZpZWxkLjwvcD5cblxuICAgIDxoMj5DYWxlbmRhciBQaWNrZXIgIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL2RhdGUtcGlja2VyXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gyPlxuICAgIDxwPlRoZSBjYWxlbmRhciBwaWNrZXIgaXMgdXNlZCB0byBzZWxlY3QgYSBkYXRlLiBJdCBhcHBlYXJzIGluIGFsbCBkYXRlIHBpY2tlciBmaWVsZHMuPC9wPlxuXG4gICAgPGg1PkZ1bGwgQ2FsZW5kYXIgUGlja2VyPC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBkZW1vXCI+JHtDYWxlbmRhckRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJDYWxlbmRhckRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoMj5UaW1lIFBpY2tlciAgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvdGltZS1waWNrZXJcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDI+XG4gICAgPHA+VGltZSBwaWNrZXJzIGNvbWUgaW4gMTIgaG91ciBvciAyNCBob3VyIHN0eWxlLjwvcD5cblxuICAgIDxoNT5TdGFuZGFsb25lIFRpbWUgUGlja2VyPC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBkZW1vXCI+JHtUaW1lRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlRpbWVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+UmFuZ2UgUGlja2VyPC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBkZW1vXCI+JHtSYW5nZURlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJSYW5nZURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjYWxlbmRhci1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJEZW1vQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5DYWxlbmRhckRlbW9UcGwgPSBDYWxlbmRhckRlbW9UcGw7XG4gICAgICAgIHRoaXMuVGltZURlbW9UcGwgPSBUaW1lRGVtb1RwbDtcbiAgICAgICAgdGhpcy5SYW5nZURlbW9UcGwgPSBSYW5nZURlbW9UcGw7XG5cbiAgICAgICAgdGhpcy50aW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5kYXRlT25lID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5kYXRlVHdvID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5zdGFydCA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aHMnKTtcbiAgICAgICAgdGhpcy5lbmQgPSBtb21lbnQoKS5hZGQoMSwgJ21vbnRocycpO1xuICAgICAgICB0aGlzLnZhbHVlID0ge1xuICAgICAgICAgICAgc3RhcnREYXRlOiBudWxsLFxuICAgICAgICAgICAgZW5kRGF0ZTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 833:
/***/ function(module, exports) {

	module.exports = "<div class=\"calendar-demo-side-by-side\">\n    <p>\n        <label>Value One</label>\n        {{(dateOne | date) || 'N/A'}}\n\n        <label>Value Two</label>\n        {{(dateTwo | date) || 'N/A'}}\n    </p>\n    <novo-date-picker [(ngModel)]=\"dateOne\" minYear=\"2000\" maxYear=\"2020\"\n                      [start]=\"start\" [end]=\"end\"></novo-date-picker>\n    <novo-date-picker [(ngModel)]=\"dateTwo\"></novo-date-picker>\n</div>\n"

/***/ },

/***/ 834:
/***/ function(module, exports) {

	module.exports = "<div class=\"calendar-demo-side-by-side\">\n    <p>\n        <label>Start date</label>\n        {{(value?.startDate | date) || 'N/A'}}\n\n        <label>End date</label>\n        {{(value?.endDate | date) || 'N/A'}}\n    </p>\n    <novo-date-picker [(ngModel)]=\"value\" range=\"true\" (onSelect)=\"range\"></novo-date-picker>\n</div>\n"

/***/ },

/***/ 835:
/***/ function(module, exports) {

	module.exports = "<div class=\"calendar-demo-side-by-side\">\n    <p>\n        <label>Value</label>\n        {{(time | date:'mediumTime') || 'N/A'}}\n    </p>\n    <novo-time-picker [(ngModel)]=\"time\"></novo-time-picker>\n    <novo-time-picker [(ngModel)]=\"time\" military=\"true\"></novo-time-picker>\n</div>\n"

/***/ },

/***/ 737:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CardDemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// APP
	
	// Vendor
	
	
	var _core = __webpack_require__(1);
	
	var _AttributeCardDemo = __webpack_require__(836);
	
	var _AttributeCardDemo2 = _interopRequireDefault(_AttributeCardDemo);
	
	var _FullConfigCardDemo = __webpack_require__(840);
	
	var _FullConfigCardDemo2 = _interopRequireDefault(_FullConfigCardDemo);
	
	var _ExtrasTimelineDemo = __webpack_require__(839);
	
	var _ExtrasTimelineDemo2 = _interopRequireDefault(_ExtrasTimelineDemo);
	
	var _ExtrasBestTimeDemo = __webpack_require__(837);
	
	var _ExtrasBestTimeDemo2 = _interopRequireDefault(_ExtrasBestTimeDemo);
	
	var _ExtrasChartDemoDemo = __webpack_require__(838);
	
	var _ExtrasChartDemoDemo2 = _interopRequireDefault(_ExtrasChartDemoDemo);
	
	var _novoElements = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// TODO - actions back in
	var template = '\n<div class="container">\n    <h1>Cards <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/card">(source)</a></small></h1>\n    <p>Components and elements for cards to make sure the loading/empty/layout views are all consistent.</p>\n\n    <h5>Examples</h5>\n    <p>Basic Card (using attributes)</p>\n    <div class="example">\n        ' + _AttributeCardDemo2.default + '\n        <div class="actions">\n            <button theme="secondary" (click)="toggleLoading()">Toggle Loading</button>\n            <button theme="secondary" (click)="toggleMessage()">Toggle Message</button>\n      \n        </div>\n    </div>\n    <code-snippet [code]="AttributeCardDemoTpl"></code-snippet>\n\n    <p>Basic Card (using config object)</p>\n    <div class="example">\n        ' + _FullConfigCardDemo2.default + '\n        <div class="actions">\n            <button theme="secondary" (click)="toggleLoadingConfig()">Toggle Loading</button>\n            <button theme="secondary" (click)="toggleMessageConfig()">Toggle Message</button>\n          \n        </div>\n    </div>\n    <code-snippet [code]="FullConfigCardDemoTpl"></code-snippet>\n\n    <h5>Card Extras - components/elements for cards</h5>\n    <p>Timeline</p>\n    <div class="example">\n        ' + _ExtrasTimelineDemo2.default + '\n        <div class="actions">\n          \n        </div>\n    </div>\n    <code-snippet [code]="ExtrasTimelineDemoTpl"></code-snippet>\n\n    <p>Best Time to *INSERT*</p>\n    <div class="example">\n        ' + _ExtrasBestTimeDemo2.default + '\n        <div class="actions">\n       \n        </div>\n    </div>\n    <code-snippet [code]="ExtrasBestTimeDemoTpl"></code-snippet>\n\n    <p>Donut Chart</p>\n    <div class="example">\n        ' + _ExtrasChartDemoDemo2.default + '\n        <div class="actions">\n          \n        </div>\n    </div>\n    <code-snippet [code]="ExtrasChartDonutDemoTpl"></code-snippet>\n</div>\n';
	
	var CardDemoComponent = exports.CardDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'card-demo',
	    template: template
	}), _dec(_class = function () {
	    function CardDemoComponent(toaster) {
	        _classCallCheck(this, CardDemoComponent);
	
	        this.toaster = toaster;
	
	        // Templates
	        this.AttributeCardDemoTpl = _AttributeCardDemo2.default;
	        this.FullConfigCardDemoTpl = _FullConfigCardDemo2.default;
	        this.ExtrasTimelineDemoTpl = _ExtrasTimelineDemo2.default;
	        this.ExtrasBestTimeDemoTpl = _ExtrasBestTimeDemo2.default;
	        this.ExtrasChartDonutDemoTpl = _ExtrasChartDemoDemo2.default;
	
	        // Config for demos
	        this.refresh = true;
	        this.close = true;
	        this.move = true;
	        this.padding = true;
	
	        this.fullConfig = {
	            refresh: false,
	            icon: 'email',
	            messageIcon: 'email',
	            close: false,
	            move: true,
	            onClose: this.onClose.bind(this),
	            onRefresh: this.onRefresh.bind(this),
	            title: 'Test',
	            loading: false,
	            padding: true
	        };
	
	        this.start = 2000;
	        this.end = 2005;
	        this.created = 1995;
	
	        this.bestLabel = 'BEST TIME TO CONTACT';
	        this.bestTime = '1-PM';
	        this.bestDay = 'Friday';
	
	        this.donutValue = 0.5;
	        this.donutColor = '#662255';
	        this.donutLabel = 'Probability of Win %';
	    }
	
	    _createClass(CardDemoComponent, [{
	        key: 'onClose',
	        value: function onClose() {
	            this.toaster.alert({
	                theme: 'info',
	                title: 'Cards',
	                message: 'Close Clicked!'
	            });
	        }
	    }, {
	        key: 'onRefresh',
	        value: function onRefresh() {
	            this.toaster.alert({
	                theme: 'success',
	                title: 'Cards',
	                message: 'Refresh Clicked!'
	            });
	        }
	    }, {
	        key: 'toggleLoading',
	        value: function toggleLoading() {
	            this.loading = !this.loading;
	        }
	    }, {
	        key: 'toggleMessage',
	        value: function toggleMessage() {
	            if (!this.message) {
	                this.message = 'NO DATA!';
	                this.messageIcon = 'email';
	            } else {
	                this.message = undefined;
	            }
	        }
	    }, {
	        key: 'toggleLoadingConfig',
	        value: function toggleLoadingConfig() {
	            this.fullConfig.loading = !this.fullConfig.loading;
	        }
	    }, {
	        key: 'toggleMessageConfig',
	        value: function toggleMessageConfig() {
	            if (!this.fullConfig.message) {
	                this.fullConfig.message = 'NO DATA!';
	            } else {
	                this.fullConfig.message = undefined;
	            }
	        }
	    }]);
	
	    return CardDemoComponent;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_novoElements.NovoToastService], CardDemoComponent);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvY2FyZC9DYXJkRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7a0JBQUE7O0FBRUE7O0FBTUE7OztBQVBBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUE7QUFDQSxJQUFNLHE3REFBTjs7SUE4RGEsaUIsV0FBQSxpQixXQUpaLHFCQUFVO0FBQ1AsY0FBVSxXQURIO0FBRVAsY0FBVTtBQUZILENBQVYsQztBQUtHLCtCQUFZLE9BQVosRUFBc0M7QUFBQTs7QUFDbEMsYUFBSyxPQUFMLEdBQWUsT0FBZjs7QUFFQTtBQUNBLGFBQUssb0JBQUw7QUFDQSxhQUFLLHFCQUFMO0FBQ0EsYUFBSyxxQkFBTDtBQUNBLGFBQUsscUJBQUw7QUFDQSxhQUFLLHVCQUFMOztBQUVBO0FBQ0EsYUFBSyxPQUFMLEdBQWUsSUFBZjtBQUNBLGFBQUssS0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsYUFBSyxPQUFMLEdBQWUsSUFBZjs7QUFFQSxhQUFLLFVBQUwsR0FBa0I7QUFDZCxxQkFBUyxLQURLO0FBRWQsa0JBQU0sT0FGUTtBQUdkLHlCQUFhLE9BSEM7QUFJZCxtQkFBTyxLQUpPO0FBS2Qsa0JBQU0sSUFMUTtBQU1kLHFCQUFTLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsSUFBbEIsQ0FOSztBQU9kLHVCQUFXLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsSUFBcEIsQ0FQRztBQVFkLG1CQUFPLE1BUk87QUFTZCxxQkFBUyxLQVRLO0FBVWQscUJBQVM7QUFWSyxTQUFsQjs7QUFhQSxhQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0EsYUFBSyxHQUFMLEdBQVcsSUFBWDtBQUNBLGFBQUssT0FBTCxHQUFlLElBQWY7O0FBRUEsYUFBSyxTQUFMLEdBQWlCLHNCQUFqQjtBQUNBLGFBQUssUUFBTCxHQUFnQixNQUFoQjtBQUNBLGFBQUssT0FBTCxHQUFlLFFBQWY7O0FBRUEsYUFBSyxVQUFMLEdBQWtCLEdBQWxCO0FBQ0EsYUFBSyxVQUFMLEdBQWtCLFNBQWxCO0FBQ0EsYUFBSyxVQUFMLEdBQWtCLHNCQUFsQjtBQUNIOzs7O2tDQUVTO0FBQ04saUJBQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUI7QUFDZix1QkFBTyxNQURRO0FBRWYsdUJBQU8sT0FGUTtBQUdmLHlCQUFTO0FBSE0sYUFBbkI7QUFLSDs7O29DQUVXO0FBQ1IsaUJBQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUI7QUFDZix1QkFBTyxTQURRO0FBRWYsdUJBQU8sT0FGUTtBQUdmLHlCQUFTO0FBSE0sYUFBbkI7QUFLSDs7O3dDQUVlO0FBQ1osaUJBQUssT0FBTCxHQUFlLENBQUMsS0FBSyxPQUFyQjtBQUNIOzs7d0NBRWU7QUFDWixnQkFBSSxDQUFDLEtBQUssT0FBVixFQUFtQjtBQUNmLHFCQUFLLE9BQUwsR0FBZSxVQUFmO0FBQ0EscUJBQUssV0FBTCxHQUFtQixPQUFuQjtBQUNILGFBSEQsTUFHTztBQUNILHFCQUFLLE9BQUwsR0FBZSxTQUFmO0FBQ0g7QUFDSjs7OzhDQUVxQjtBQUNsQixpQkFBSyxVQUFMLENBQWdCLE9BQWhCLEdBQTBCLENBQUMsS0FBSyxVQUFMLENBQWdCLE9BQTNDO0FBQ0g7Ozs4Q0FFcUI7QUFDbEIsZ0JBQUksQ0FBQyxLQUFLLFVBQUwsQ0FBZ0IsT0FBckIsRUFBOEI7QUFDMUIscUJBQUssVUFBTCxDQUFnQixPQUFoQixHQUEwQixVQUExQjtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsR0FBMEIsU0FBMUI7QUFDSDtBQUNKOzs7Ozs4RUFsRlEsaUIiLCJmaWxlIjoiQ2FyZERlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCBBdHRyaWJ1dGVDYXJkRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9BdHRyaWJ1dGVDYXJkRGVtby5odG1sJztcbmltcG9ydCBGdWxsQ29uZmlnQ2FyZERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvRnVsbENvbmZpZ0NhcmREZW1vLmh0bWwnO1xuaW1wb3J0IEV4dHJhc1RpbWVsaW5lRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9FeHRyYXNUaW1lbGluZURlbW8uaHRtbCc7XG5pbXBvcnQgRXh0cmFzQmVzdFRpbWVEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0V4dHJhc0Jlc3RUaW1lRGVtby5odG1sJztcbmltcG9ydCBFeHRyYXNDaGFydERvbnV0RGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9FeHRyYXNDaGFydERlbW9EZW1vLmh0bWwnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBOb3ZvVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbi8vIFRPRE8gLSBhY3Rpb25zIGJhY2sgaW5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5DYXJkcyA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy9jYXJkXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPkNvbXBvbmVudHMgYW5kIGVsZW1lbnRzIGZvciBjYXJkcyB0byBtYWtlIHN1cmUgdGhlIGxvYWRpbmcvZW1wdHkvbGF5b3V0IHZpZXdzIGFyZSBhbGwgY29uc2lzdGVudC48L3A+XG5cbiAgICA8aDU+RXhhbXBsZXM8L2g1PlxuICAgIDxwPkJhc2ljIENhcmQgKHVzaW5nIGF0dHJpYnV0ZXMpPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlXCI+XG4gICAgICAgICR7QXR0cmlidXRlQ2FyZERlbW9UcGx9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwic2Vjb25kYXJ5XCIgKGNsaWNrKT1cInRvZ2dsZUxvYWRpbmcoKVwiPlRvZ2dsZSBMb2FkaW5nPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwic2Vjb25kYXJ5XCIgKGNsaWNrKT1cInRvZ2dsZU1lc3NhZ2UoKVwiPlRvZ2dsZSBNZXNzYWdlPC9idXR0b24+XG4gICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJBdHRyaWJ1dGVDYXJkRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPHA+QmFzaWMgQ2FyZCAodXNpbmcgY29uZmlnIG9iamVjdCk8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGVcIj5cbiAgICAgICAgJHtGdWxsQ29uZmlnQ2FyZERlbW9UcGx9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwic2Vjb25kYXJ5XCIgKGNsaWNrKT1cInRvZ2dsZUxvYWRpbmdDb25maWcoKVwiPlRvZ2dsZSBMb2FkaW5nPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwic2Vjb25kYXJ5XCIgKGNsaWNrKT1cInRvZ2dsZU1lc3NhZ2VDb25maWcoKVwiPlRvZ2dsZSBNZXNzYWdlPC9idXR0b24+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiRnVsbENvbmZpZ0NhcmREZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+Q2FyZCBFeHRyYXMgLSBjb21wb25lbnRzL2VsZW1lbnRzIGZvciBjYXJkczwvaDU+XG4gICAgPHA+VGltZWxpbmU8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGVcIj5cbiAgICAgICAgJHtFeHRyYXNUaW1lbGluZURlbW9UcGx9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiRXh0cmFzVGltZWxpbmVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8cD5CZXN0IFRpbWUgdG8gKklOU0VSVCo8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGVcIj5cbiAgICAgICAgJHtFeHRyYXNCZXN0VGltZURlbW9UcGx9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XG4gICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiRXh0cmFzQmVzdFRpbWVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8cD5Eb251dCBDaGFydDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZVwiPlxuICAgICAgICAke0V4dHJhc0NoYXJ0RG9udXREZW1vVHBsfVxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkV4dHJhc0NoYXJ0RG9udXREZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2FyZC1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZERlbW9Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHRvYXN0ZXI6Tm92b1RvYXN0U2VydmljZSkge1xuICAgICAgICB0aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xuXG4gICAgICAgIC8vIFRlbXBsYXRlc1xuICAgICAgICB0aGlzLkF0dHJpYnV0ZUNhcmREZW1vVHBsID0gQXR0cmlidXRlQ2FyZERlbW9UcGw7XG4gICAgICAgIHRoaXMuRnVsbENvbmZpZ0NhcmREZW1vVHBsID0gRnVsbENvbmZpZ0NhcmREZW1vVHBsO1xuICAgICAgICB0aGlzLkV4dHJhc1RpbWVsaW5lRGVtb1RwbCA9IEV4dHJhc1RpbWVsaW5lRGVtb1RwbDtcbiAgICAgICAgdGhpcy5FeHRyYXNCZXN0VGltZURlbW9UcGwgPSBFeHRyYXNCZXN0VGltZURlbW9UcGw7XG4gICAgICAgIHRoaXMuRXh0cmFzQ2hhcnREb251dERlbW9UcGwgPSBFeHRyYXNDaGFydERvbnV0RGVtb1RwbDtcblxuICAgICAgICAvLyBDb25maWcgZm9yIGRlbW9zXG4gICAgICAgIHRoaXMucmVmcmVzaCA9IHRydWU7XG4gICAgICAgIHRoaXMuY2xvc2UgPSB0cnVlO1xuICAgICAgICB0aGlzLm1vdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZGRpbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZnVsbENvbmZpZyA9IHtcbiAgICAgICAgICAgIHJlZnJlc2g6IGZhbHNlLFxuICAgICAgICAgICAgaWNvbjogJ2VtYWlsJyxcbiAgICAgICAgICAgIG1lc3NhZ2VJY29uOiAnZW1haWwnLFxuICAgICAgICAgICAgY2xvc2U6IGZhbHNlLFxuICAgICAgICAgICAgbW92ZTogdHJ1ZSxcbiAgICAgICAgICAgIG9uQ2xvc2U6IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgb25SZWZyZXNoOiB0aGlzLm9uUmVmcmVzaC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgdGl0bGU6ICdUZXN0JyxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgcGFkZGluZzogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3RhcnQgPSAyMDAwO1xuICAgICAgICB0aGlzLmVuZCA9IDIwMDU7XG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IDE5OTU7XG5cbiAgICAgICAgdGhpcy5iZXN0TGFiZWwgPSAnQkVTVCBUSU1FIFRPIENPTlRBQ1QnO1xuICAgICAgICB0aGlzLmJlc3RUaW1lID0gJzEtUE0nO1xuICAgICAgICB0aGlzLmJlc3REYXkgPSAnRnJpZGF5JztcblxuICAgICAgICB0aGlzLmRvbnV0VmFsdWUgPSAwLjU7XG4gICAgICAgIHRoaXMuZG9udXRDb2xvciA9ICcjNjYyMjU1JztcbiAgICAgICAgdGhpcy5kb251dExhYmVsID0gJ1Byb2JhYmlsaXR5IG9mIFdpbiAlJztcbiAgICB9XG5cbiAgICBvbkNsb3NlKCkge1xuICAgICAgICB0aGlzLnRvYXN0ZXIuYWxlcnQoe1xuICAgICAgICAgICAgdGhlbWU6ICdpbmZvJyxcbiAgICAgICAgICAgIHRpdGxlOiAnQ2FyZHMnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Nsb3NlIENsaWNrZWQhJ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMudG9hc3Rlci5hbGVydCh7XG4gICAgICAgICAgICB0aGVtZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgdGl0bGU6ICdDYXJkcycsXG4gICAgICAgICAgICBtZXNzYWdlOiAnUmVmcmVzaCBDbGlja2VkISdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcbiAgICB9XG5cbiAgICB0b2dnbGVNZXNzYWdlKCkge1xuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJ05PIERBVEEhJztcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUljb24gPSAnZW1haWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTG9hZGluZ0NvbmZpZygpIHtcbiAgICAgICAgdGhpcy5mdWxsQ29uZmlnLmxvYWRpbmcgPSAhdGhpcy5mdWxsQ29uZmlnLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVzc2FnZUNvbmZpZygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZ1bGxDb25maWcubWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy5mdWxsQ29uZmlnLm1lc3NhZ2UgPSAnTk8gREFUQSEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mdWxsQ29uZmlnLm1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 836:
/***/ function(module, exports) {

	module.exports = "<novo-card [title]=\"'All Attributes'\"\n           icon=\"activity\"\n           [loading]=\"loading\"\n           [message]=\"message\"\n           [messageIcon]=\"messageIcon\"\n           [refresh]=\"refresh\"\n           [move]=\"move\"\n           [close]=\"close\"\n           (onRefresh)=\"onRefresh()\"\n           (onClose)=\"onClose()\"\n           [padding]=\"padding\">\n    This is the ALL attribute card content!\n</novo-card>\n"

/***/ },

/***/ 837:
/***/ function(module, exports) {

	module.exports = "<novo-card-best-time [label]=\"bestLabel\" [day]=\"bestDay\" [time]=\"bestTime\"></novo-card-best-time>\n"

/***/ },

/***/ 838:
/***/ function(module, exports) {

	module.exports = "<novo-card-chart-donut [value]=\"donutValue\" [label]=\"donutLabel\" [color]=\"donutColor\"></novo-card-chart-donut>\n"

/***/ },

/***/ 839:
/***/ function(module, exports) {

	module.exports = "<novo-card-timeline [start]=\"start\" [end]=\"end\" [created]=\"created\"></novo-card-timeline>\n"

/***/ },

/***/ 840:
/***/ function(module, exports) {

	module.exports = "<novo-card [config]=\"fullConfig\">\n    DEMO :)\n</novo-card>\n"

/***/ },

/***/ 738:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ChipsDemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// APP
	
	
	var _core = __webpack_require__(1);
	
	var _BasicChipsDemo = __webpack_require__(842);
	
	var _BasicChipsDemo2 = _interopRequireDefault(_BasicChipsDemo);
	
	var _AsyncChipsDemo = __webpack_require__(841);
	
	var _AsyncChipsDemo2 = _interopRequireDefault(_AsyncChipsDemo);
	
	var _FormattedChipsDemo = __webpack_require__(843);
	
	var _FormattedChipsDemo2 = _interopRequireDefault(_FormattedChipsDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Chips <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/chips">(source)</a></small></h1>\n    <p>The chips element (<code>chips</code>) represents a control that presents a menu of options. The options\n    within are set by the <code>source</code> attribute. Options can be pre-selected for the user using the <code>ngModel</code>\n    attribute. Chips are the multi-select version of <code>pickers</code></p>\n\n    <br/>\n\n    <h5>Basic Examples</h5>\n    <p>\n        By clicking on the <code>chips</code> element, the options list will be displayed.  Select any of the options\n        by clicking on the item in the list.  The value selected will be added to the list of selected values and the options list will be removed.\n    </p>\n    <div class="example chips-demo">' + _BasicChipsDemo2.default + '</div>\n    <code-snippet [code]="BasicChipsDemoTpl"></code-snippet>\n\n    <h5>Async Examples</h5>\n    <p>\n        By clicking on the <code>chips</code> element, the options list will be displayed.  Select any of the options\n        by clicking on the item in the list.  The value selected will be added to the list of selected values and the options list will be removed.\n    </p>\n    <div class="example chips-demo">' + _AsyncChipsDemo2.default + '</div>\n    <code-snippet [code]="AsyncChipsDemoTpl"></code-snippet>\n\n    <h5>Formatted Examples</h5>\n    <p>\n        By clicking on the <code>chips</code> element, the options list will be displayed.  Select any of the options\n        by clicking on the item in the list.  The value selected will be added to the list of selected values and the options list will be removed.\n    </p>\n    <div class="example chips-demo">' + _FormattedChipsDemo2.default + '</div>\n    <code-snippet [code]="FormattedChipsDemoTpl"></code-snippet>\n\n</div>\n';
	
	var ChipsDemoComponent = exports.ChipsDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'chips-demo',
	    template: template
	}), _dec(_class = function () {
	    function ChipsDemoComponent() {
	        _classCallCheck(this, ChipsDemoComponent);
	
	        this.BasicChipsDemoTpl = _BasicChipsDemo2.default;
	        this.AsyncChipsDemoTpl = _AsyncChipsDemo2.default;
	        this.FormattedChipsDemoTpl = _FormattedChipsDemo2.default;
	
	        this.placeholder = 'Select...';
	        this.value = ['Alabama'];
	
	        var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
	        var abbrieviated = [{
	            value: 'USA',
	            label: 'United States'
	        }, {
	            value: 'GB',
	            label: 'Great Britain'
	        }, {
	            value: 'CA',
	            label: 'Canada'
	        }, {
	            value: 'AU',
	            label: 'Austrailia'
	        }];
	        var collaborators = [{
	            id: 1,
	            firstName: 'Brian',
	            lastName: 'Kimball'
	        }, {
	            id: 2,
	            firstName: 'Josh',
	            lastName: 'Godi'
	        }, {
	            id: 3,
	            firstName: 'Alec',
	            lastName: 'Sibilia'
	        }, {
	            id: 4,
	            firstName: 'Kameron',
	            lastName: 'Sween'
	        }];
	        this.static = { options: states };
	        this.formatted = {
	            //field: 'id',
	            format: '$firstName $lastName',
	            options: collaborators
	        };
	        this.async = {
	            options: function options() {
	                return new Promise(function (resolve) {
	                    setTimeout(function () {
	                        resolve(abbrieviated);
	                    }, 300);
	                });
	            }
	        };
	    }
	
	    _createClass(ChipsDemoComponent, [{
	        key: 'onChanged',
	        value: function onChanged() {}
	    }]);
	
	    return ChipsDemoComponent;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvY2hpcHMvQ2hpcHNEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztrQkFBQTs7QUFFQTs7O0FBREE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sdzNEQUFOOztJQXdDYSxrQixXQUFBLGtCLFdBSloscUJBQVU7QUFDUCxjQUFVLFlBREg7QUFFUCxjQUFVO0FBRkgsQ0FBVixDO0FBS0csa0NBQWM7QUFBQTs7QUFDVixhQUFLLGlCQUFMO0FBQ0EsYUFBSyxpQkFBTDtBQUNBLGFBQUsscUJBQUw7O0FBRUEsYUFBSyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0EsYUFBSyxLQUFMLEdBQWEsQ0FBQyxTQUFELENBQWI7O0FBRUEsWUFBSSxTQUFTLENBQUMsU0FBRCxFQUFZLFFBQVosRUFBc0IsU0FBdEIsRUFBaUMsVUFBakMsRUFBNkMsWUFBN0MsRUFBMkQsVUFBM0QsRUFBdUUsYUFBdkUsRUFBc0YsVUFBdEYsRUFBa0csU0FBbEcsRUFBNkcsU0FBN0csRUFBd0gsUUFBeEgsRUFBa0ksT0FBbEksRUFBMkksVUFBM0ksRUFBdUosU0FBdkosRUFBa0ssTUFBbEssRUFBMEssUUFBMUssRUFBb0wsVUFBcEwsRUFBZ00sV0FBaE0sRUFBNk0sT0FBN00sRUFBc04sVUFBdE4sRUFBa08sZUFBbE8sRUFBbVAsVUFBblAsRUFBK1AsV0FBL1AsRUFBNFEsYUFBNVEsRUFBMlIsVUFBM1IsRUFBdVMsU0FBdlMsRUFBa1QsVUFBbFQsRUFBOFQsUUFBOVQsRUFBd1UsZUFBeFUsRUFBeVYsWUFBelYsRUFBdVcsWUFBdlcsRUFBcVgsVUFBclgsRUFBaVksY0FBalksRUFBaVosZ0JBQWpaLEVBQW1hLE1BQW5hLEVBQTJhLFVBQTNhLEVBQXViLFFBQXZiLEVBQWljLGNBQWpjLEVBQWlkLGNBQWpkLEVBQWllLGdCQUFqZSxFQUFtZixjQUFuZixFQUFtZ0IsV0FBbmdCLEVBQWdoQixPQUFoaEIsRUFBeWhCLE1BQXpoQixFQUFpaUIsU0FBamlCLEVBQTRpQixVQUE1aUIsRUFBd2pCLFlBQXhqQixFQUFza0IsZUFBdGtCLEVBQXVsQixXQUF2bEIsRUFBb21CLFNBQXBtQixDQUFiO0FBQ0EsWUFBSSxlQUFlLENBQUM7QUFDaEIsbUJBQU8sS0FEUztBQUVoQixtQkFBTztBQUZTLFNBQUQsRUFHaEI7QUFDQyxtQkFBTyxJQURSO0FBRUMsbUJBQU87QUFGUixTQUhnQixFQU1oQjtBQUNDLG1CQUFPLElBRFI7QUFFQyxtQkFBTztBQUZSLFNBTmdCLEVBU2hCO0FBQ0MsbUJBQU8sSUFEUjtBQUVDLG1CQUFPO0FBRlIsU0FUZ0IsQ0FBbkI7QUFhQSxZQUFJLGdCQUFnQixDQUFDO0FBQ2pCLGdCQUFJLENBRGE7QUFFakIsdUJBQVcsT0FGTTtBQUdqQixzQkFBVTtBQUhPLFNBQUQsRUFJakI7QUFDQyxnQkFBSSxDQURMO0FBRUMsdUJBQVcsTUFGWjtBQUdDLHNCQUFVO0FBSFgsU0FKaUIsRUFRakI7QUFDQyxnQkFBSSxDQURMO0FBRUMsdUJBQVcsTUFGWjtBQUdDLHNCQUFVO0FBSFgsU0FSaUIsRUFZakI7QUFDQyxnQkFBSSxDQURMO0FBRUMsdUJBQVcsU0FGWjtBQUdDLHNCQUFVO0FBSFgsU0FaaUIsQ0FBcEI7QUFpQkEsYUFBSyxNQUFMLEdBQWMsRUFBRSxTQUFTLE1BQVgsRUFBZDtBQUNBLGFBQUssU0FBTCxHQUFpQjtBQUNiO0FBQ0Esb0JBQVEsc0JBRks7QUFHYixxQkFBUztBQUhJLFNBQWpCO0FBS0EsYUFBSyxLQUFMLEdBQWE7QUFDVCxxQkFBUyxtQkFBTTtBQUNYLHVCQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFhO0FBQzVCLCtCQUFXLFlBQU07QUFDYixnQ0FBUSxZQUFSO0FBQ0gscUJBRkQsRUFFRyxHQUZIO0FBR0gsaUJBSk0sQ0FBUDtBQUtIO0FBUFEsU0FBYjtBQVNIOzs7O29DQUVXLENBQ1giLCJmaWxlIjoiQ2hpcHNEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgQmFzaWNDaGlwc0RlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQmFzaWNDaGlwc0RlbW8uaHRtbCc7XG5pbXBvcnQgQXN5bmNDaGlwc0RlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQXN5bmNDaGlwc0RlbW8uaHRtbCc7XG5pbXBvcnQgRm9ybWF0dGVkQ2hpcHNEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0Zvcm1hdHRlZENoaXBzRGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPkNoaXBzIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL2NoaXBzXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPlRoZSBjaGlwcyBlbGVtZW50ICg8Y29kZT5jaGlwczwvY29kZT4pIHJlcHJlc2VudHMgYSBjb250cm9sIHRoYXQgcHJlc2VudHMgYSBtZW51IG9mIG9wdGlvbnMuIFRoZSBvcHRpb25zXG4gICAgd2l0aGluIGFyZSBzZXQgYnkgdGhlIDxjb2RlPnNvdXJjZTwvY29kZT4gYXR0cmlidXRlLiBPcHRpb25zIGNhbiBiZSBwcmUtc2VsZWN0ZWQgZm9yIHRoZSB1c2VyIHVzaW5nIHRoZSA8Y29kZT5uZ01vZGVsPC9jb2RlPlxuICAgIGF0dHJpYnV0ZS4gQ2hpcHMgYXJlIHRoZSBtdWx0aS1zZWxlY3QgdmVyc2lvbiBvZiA8Y29kZT5waWNrZXJzPC9jb2RlPjwvcD5cblxuICAgIDxici8+XG5cbiAgICA8aDU+QmFzaWMgRXhhbXBsZXM8L2g1PlxuICAgIDxwPlxuICAgICAgICBCeSBjbGlja2luZyBvbiB0aGUgPGNvZGU+Y2hpcHM8L2NvZGU+IGVsZW1lbnQsIHRoZSBvcHRpb25zIGxpc3Qgd2lsbCBiZSBkaXNwbGF5ZWQuICBTZWxlY3QgYW55IG9mIHRoZSBvcHRpb25zXG4gICAgICAgIGJ5IGNsaWNraW5nIG9uIHRoZSBpdGVtIGluIHRoZSBsaXN0LiAgVGhlIHZhbHVlIHNlbGVjdGVkIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGxpc3Qgb2Ygc2VsZWN0ZWQgdmFsdWVzIGFuZCB0aGUgb3B0aW9ucyBsaXN0IHdpbGwgYmUgcmVtb3ZlZC5cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgY2hpcHMtZGVtb1wiPiR7QmFzaWNDaGlwc0RlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJCYXNpY0NoaXBzRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PkFzeW5jIEV4YW1wbGVzPC9oNT5cbiAgICA8cD5cbiAgICAgICAgQnkgY2xpY2tpbmcgb24gdGhlIDxjb2RlPmNoaXBzPC9jb2RlPiBlbGVtZW50LCB0aGUgb3B0aW9ucyBsaXN0IHdpbGwgYmUgZGlzcGxheWVkLiAgU2VsZWN0IGFueSBvZiB0aGUgb3B0aW9uc1xuICAgICAgICBieSBjbGlja2luZyBvbiB0aGUgaXRlbSBpbiB0aGUgbGlzdC4gIFRoZSB2YWx1ZSBzZWxlY3RlZCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBsaXN0IG9mIHNlbGVjdGVkIHZhbHVlcyBhbmQgdGhlIG9wdGlvbnMgbGlzdCB3aWxsIGJlIHJlbW92ZWQuXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGNoaXBzLWRlbW9cIj4ke0FzeW5jQ2hpcHNEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQXN5bmNDaGlwc0RlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5Gb3JtYXR0ZWQgRXhhbXBsZXM8L2g1PlxuICAgIDxwPlxuICAgICAgICBCeSBjbGlja2luZyBvbiB0aGUgPGNvZGU+Y2hpcHM8L2NvZGU+IGVsZW1lbnQsIHRoZSBvcHRpb25zIGxpc3Qgd2lsbCBiZSBkaXNwbGF5ZWQuICBTZWxlY3QgYW55IG9mIHRoZSBvcHRpb25zXG4gICAgICAgIGJ5IGNsaWNraW5nIG9uIHRoZSBpdGVtIGluIHRoZSBsaXN0LiAgVGhlIHZhbHVlIHNlbGVjdGVkIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGxpc3Qgb2Ygc2VsZWN0ZWQgdmFsdWVzIGFuZCB0aGUgb3B0aW9ucyBsaXN0IHdpbGwgYmUgcmVtb3ZlZC5cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgY2hpcHMtZGVtb1wiPiR7Rm9ybWF0dGVkQ2hpcHNEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiRm9ybWF0dGVkQ2hpcHNEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjaGlwcy1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNEZW1vQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5CYXNpY0NoaXBzRGVtb1RwbCA9IEJhc2ljQ2hpcHNEZW1vVHBsO1xuICAgICAgICB0aGlzLkFzeW5jQ2hpcHNEZW1vVHBsID0gQXN5bmNDaGlwc0RlbW9UcGw7XG4gICAgICAgIHRoaXMuRm9ybWF0dGVkQ2hpcHNEZW1vVHBsID0gRm9ybWF0dGVkQ2hpcHNEZW1vVHBsO1xuXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAnU2VsZWN0Li4uJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IFsnQWxhYmFtYSddO1xuXG4gICAgICAgIGxldCBzdGF0ZXMgPSBbJ0FsYWJhbWEnLCAnQWxhc2thJywgJ0FyaXpvbmEnLCAnQXJrYW5zYXMnLCAnQ2FsaWZvcm5pYScsICdDb2xvcmFkbycsICdDb25uZWN0aWN1dCcsICdEZWxhd2FyZScsICdGbG9yaWRhJywgJ0dlb3JnaWEnLCAnSGF3YWlpJywgJ0lkYWhvJywgJ0lsbGlub2lzJywgJ0luZGlhbmEnLCAnSW93YScsICdLYW5zYXMnLCAnS2VudHVja3knLCAnTG91aXNpYW5hJywgJ01haW5lJywgJ01hcnlsYW5kJywgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLCAnTWlubmVzb3RhJywgJ01pc3Npc3NpcHBpJywgJ01pc3NvdXJpJywgJ01vbnRhbmEnLCAnTmVicmFza2EnLCAnTmV2YWRhJywgJ05ldyBIYW1wc2hpcmUnLCAnTmV3IEplcnNleScsICdOZXcgTWV4aWNvJywgJ05ldyBZb3JrJywgJ05vcnRoIERha290YScsICdOb3J0aCBDYXJvbGluYScsICdPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbicsICdQZW5uc3lsdmFuaWEnLCAnUmhvZGUgSXNsYW5kJywgJ1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YScsICdUZW5uZXNzZWUnLCAnVGV4YXMnLCAnVXRhaCcsICdWZXJtb250JywgJ1ZpcmdpbmlhJywgJ1dhc2hpbmd0b24nLCAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZyddO1xuICAgICAgICBsZXQgYWJicmlldmlhdGVkID0gW3tcbiAgICAgICAgICAgIHZhbHVlOiAnVVNBJyxcbiAgICAgICAgICAgIGxhYmVsOiAnVW5pdGVkIFN0YXRlcydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsdWU6ICdHQicsXG4gICAgICAgICAgICBsYWJlbDogJ0dyZWF0IEJyaXRhaW4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbHVlOiAnQ0EnLFxuICAgICAgICAgICAgbGFiZWw6ICdDYW5hZGEnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbHVlOiAnQVUnLFxuICAgICAgICAgICAgbGFiZWw6ICdBdXN0cmFpbGlhJ1xuICAgICAgICB9XTtcbiAgICAgICAgbGV0IGNvbGxhYm9yYXRvcnMgPSBbe1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICdCcmlhbicsXG4gICAgICAgICAgICBsYXN0TmFtZTogJ0tpbWJhbGwnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgZmlyc3ROYW1lOiAnSm9zaCcsXG4gICAgICAgICAgICBsYXN0TmFtZTogJ0dvZGknXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgZmlyc3ROYW1lOiAnQWxlYycsXG4gICAgICAgICAgICBsYXN0TmFtZTogJ1NpYmlsaWEnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgZmlyc3ROYW1lOiAnS2FtZXJvbicsXG4gICAgICAgICAgICBsYXN0TmFtZTogJ1N3ZWVuJ1xuICAgICAgICB9XTtcbiAgICAgICAgdGhpcy5zdGF0aWMgPSB7IG9wdGlvbnM6IHN0YXRlcyB9O1xuICAgICAgICB0aGlzLmZvcm1hdHRlZCA9IHtcbiAgICAgICAgICAgIC8vZmllbGQ6ICdpZCcsXG4gICAgICAgICAgICBmb3JtYXQ6ICckZmlyc3ROYW1lICRsYXN0TmFtZScsXG4gICAgICAgICAgICBvcHRpb25zOiBjb2xsYWJvcmF0b3JzXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYXN5bmMgPSB7XG4gICAgICAgICAgICBvcHRpb25zOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhYmJyaWV2aWF0ZWQpO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uQ2hhbmdlZCgpIHtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 841:
/***/ function(module, exports) {

	module.exports = "<div class=\"selected-value\">Selected Value: {{avalue}}</div>\n<chips\n    [source]=\"async\"\n    [placeholder]=\"placeholder\"\n    [(ngModel)]=\"avalue\"\n    (changed)=\"onChanged($event)\">\n</chips>\n"

/***/ },

/***/ 842:
/***/ function(module, exports) {

	module.exports = "<div class=\"selected-value\">Selected Value: {{value}}</div>\n<chips\n    [source]=\"static\"\n    [placeholder]=\"placeholder\"\n    [(ngModel)]=\"value\"\n    (changed)=\"onChanged($event)\">\n</chips>\n"

/***/ },

/***/ 843:
/***/ function(module, exports) {

	module.exports = "<div class=\"selected-value\">Selected Value: {{fvalue}}</div>\n<chips\n    [source]=\"formatted\"\n    [placeholder]=\"placeholder\"\n    [(ngModel)]=\"fvalue\"\n    (changed)=\"onChanged($event)\">\n</chips>\n"

/***/ },

/***/ 739:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DragulaDemoComponent = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// APP
	
	// Vendor
	
	
	var _core = __webpack_require__(1);
	
	var _DragulaDemo = __webpack_require__(844);
	
	var _DragulaDemo2 = _interopRequireDefault(_DragulaDemo);
	
	var _DragulaModelDemo = __webpack_require__(845);
	
	var _DragulaModelDemo2 = _interopRequireDefault(_DragulaModelDemo);
	
	var _novoElements = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Dragula <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/dragula">(source)</a></small></h1>\n    <p>Drag and Drop directives supported by dragula</p>\n\n    <h5>Examples</h5>\n    <p>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</p>\n    <div class="example" style="padding: 20px;">' + _DragulaDemo2.default + '</div>\n    <code-snippet [code]="DragulaDemoTpl"></code-snippet>\n\n    <h5>Examples</h5>\n    <p>Angular-specific example. Fancy some ngFor?</p>\n    <div class="example" style="padding: 20px;">' + _DragulaModelDemo2.default + '</div>\n    <code-snippet [code]="DragulaModelDemoTpl"></code-snippet>\n</div>\n';
	
	var DragulaDemoComponent = exports.DragulaDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'dragula-demo',
	    template: template
	}), _dec(_class = function () {
	    function DragulaDemoComponent(dragulaService) {
	        var _this = this;
	
	        _classCallCheck(this, DragulaDemoComponent);
	
	        this.DragulaDemoTpl = _DragulaDemo2.default;
	        this.DragulaModelDemoTpl = _DragulaModelDemo2.default;
	        this.many = ['The', 'possibilities', 'are', 'endless!'];
	        this.many2 = ['Explore', 'them'];
	
	        dragulaService.dropModel.subscribe(function (value) {
	            _this.onDropModel(value.slice(1));
	        });
	        dragulaService.removeModel.subscribe(function (value) {
	            _this.onRemoveModel(value.slice(1));
	        });
	    }
	
	    _createClass(DragulaDemoComponent, [{
	        key: 'onDropModel',
	        value: function onDropModel(args) {
	            var _args = _slicedToArray(args, 3);
	
	            var el = _args[0];
	            var target = _args[1];
	            var source = _args[2]; // eslint-disable-line
	            // do something else
	        }
	    }, {
	        key: 'onRemoveModel',
	        value: function onRemoveModel(args) {
	            var _args2 = _slicedToArray(args, 2);
	
	            var el = _args2[0];
	            var source = _args2[1]; // eslint-disable-line
	            // do something else
	        }
	    }]);
	
	    return DragulaDemoComponent;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_novoElements.NovoDragulaService], DragulaDemoComponent);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvZHJhZ3VsYS9EcmFndWxhRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztrQkFBQTs7QUFFQTs7QUFHQTs7O0FBSkE7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNLHV3QkFBTjs7SUFxQmEsb0IsV0FBQSxvQixXQUpaLHFCQUFVO0FBQ1AsY0FBVSxjQURIO0FBRVAsY0FBVTtBQUZILENBQVYsQztBQUtHLGtDQUFZLGNBQVosRUFBK0M7QUFBQTs7QUFBQTs7QUFDM0MsYUFBSyxjQUFMO0FBQ0EsYUFBSyxtQkFBTDtBQUNBLGFBQUssSUFBTCxHQUFZLENBQUMsS0FBRCxFQUFRLGVBQVIsRUFBeUIsS0FBekIsRUFBZ0MsVUFBaEMsQ0FBWjtBQUNBLGFBQUssS0FBTCxHQUFhLENBQUMsU0FBRCxFQUFZLE1BQVosQ0FBYjs7QUFFQSx1QkFBZSxTQUFmLENBQXlCLFNBQXpCLENBQW1DLFVBQUMsS0FBRCxFQUFXO0FBQzFDLGtCQUFLLFdBQUwsQ0FBaUIsTUFBTSxLQUFOLENBQVksQ0FBWixDQUFqQjtBQUNILFNBRkQ7QUFHQSx1QkFBZSxXQUFmLENBQTJCLFNBQTNCLENBQXFDLFVBQUMsS0FBRCxFQUFXO0FBQzVDLGtCQUFLLGFBQUwsQ0FBbUIsTUFBTSxLQUFOLENBQVksQ0FBWixDQUFuQjtBQUNILFNBRkQ7QUFHSDs7OztvQ0FFVyxJLEVBQU07QUFBQSx1Q0FDYSxJQURiOztBQUFBLGdCQUNULEVBRFM7QUFBQSxnQkFDTCxNQURLO0FBQUEsZ0JBQ0csTUFESCxhQUNtQjtBQUNqQztBQUNIOzs7c0NBRWEsSSxFQUFNO0FBQUEsd0NBQ0csSUFESDs7QUFBQSxnQkFDWCxFQURXO0FBQUEsZ0JBQ1AsTUFETyxjQUNTO0FBQ3pCO0FBQ0g7Ozs7O2dGQXZCUSxvQiIsImZpbGUiOiJEcmFndWxhRGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IERyYWd1bGFEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0RyYWd1bGFEZW1vLmh0bWwnO1xuaW1wb3J0IERyYWd1bGFNb2RlbERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvRHJhZ3VsYU1vZGVsRGVtby5odG1sJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgTm92b0RyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5EcmFndWxhIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2RyYWd1bGFcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+RHJhZyBhbmQgRHJvcCBkaXJlY3RpdmVzIHN1cHBvcnRlZCBieSBkcmFndWxhPC9wPlxuXG4gICAgPGg1PkV4YW1wbGVzPC9oNT5cbiAgICA8cD5Nb3ZlIHN0dWZmIGJldHdlZW4gdGhlc2UgdHdvIGNvbnRhaW5lcnMuIE5vdGUgaG93IHRoZSBzdHVmZiBnZXRzIGluc2VydGVkIG5lYXIgdGhlIG1vdXNlIHBvaW50ZXI/IEdyZWF0IHN0dWZmLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZVwiIHN0eWxlPVwicGFkZGluZzogMjBweDtcIj4ke0RyYWd1bGFEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiRHJhZ3VsYURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5FeGFtcGxlczwvaDU+XG4gICAgPHA+QW5ndWxhci1zcGVjaWZpYyBleGFtcGxlLiBGYW5jeSBzb21lIG5nRm9yPzwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZVwiIHN0eWxlPVwicGFkZGluZzogMjBweDtcIj4ke0RyYWd1bGFNb2RlbERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJEcmFndWxhTW9kZWxEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZHJhZ3VsYS1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ3VsYURlbW9Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGRyYWd1bGFTZXJ2aWNlOk5vdm9EcmFndWxhU2VydmljZSkge1xuICAgICAgICB0aGlzLkRyYWd1bGFEZW1vVHBsID0gRHJhZ3VsYURlbW9UcGw7XG4gICAgICAgIHRoaXMuRHJhZ3VsYU1vZGVsRGVtb1RwbCA9IERyYWd1bGFNb2RlbERlbW9UcGw7XG4gICAgICAgIHRoaXMubWFueSA9IFsnVGhlJywgJ3Bvc3NpYmlsaXRpZXMnLCAnYXJlJywgJ2VuZGxlc3MhJ107XG4gICAgICAgIHRoaXMubWFueTIgPSBbJ0V4cGxvcmUnLCAndGhlbSddO1xuXG4gICAgICAgIGRyYWd1bGFTZXJ2aWNlLmRyb3BNb2RlbC5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uRHJvcE1vZGVsKHZhbHVlLnNsaWNlKDEpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRyYWd1bGFTZXJ2aWNlLnJlbW92ZU1vZGVsLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25SZW1vdmVNb2RlbCh2YWx1ZS5zbGljZSgxKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRHJvcE1vZGVsKGFyZ3MpIHtcbiAgICAgICAgbGV0IFtlbCwgdGFyZ2V0LCBzb3VyY2VdID0gYXJnczsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAvLyBkbyBzb21ldGhpbmcgZWxzZVxuICAgIH1cblxuICAgIG9uUmVtb3ZlTW9kZWwoYXJncykge1xuICAgICAgICBsZXQgW2VsLCBzb3VyY2VdID0gYXJnczsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAvLyBkbyBzb21ldGhpbmcgZWxzZVxuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 844:
/***/ function(module, exports) {

	module.exports = "<div class=\"wrapper\">\n    <div class=\"drag-container\" [dragula]=\"'first-bag'\">\n        <div>You can move these elements between these two containers</div>\n        <div>Moving them anywhere else isn\"t quite possible</div>\n        <div>There\"s also the possibility of moving elements around in the same container, changing their position</div>\n    </div>\n    <div class=\"drag-container\" [dragula]=\"'first-bag'\">\n        <div>This is the default use case. You only need to specify the containers you want to use</div>\n        <div>More interactive use cases lie ahead</div>\n        <div>Make sure to check out the\n            <a href=\"https://github.com/bevacqua/dragula#readme\">documentation on GitHub!</a>\n        </div>\n    </div>\n</div>\n"

/***/ },

/***/ 845:
/***/ function(module, exports) {

	module.exports = "<div class=\"wrapper\">\n    <div class=\"drag-container\" [dragula]=\"'another-bag'\" [dragulaModel]=\"many\">\n        <div *ngFor=\"let text of many\" [innerHtml]=\"text\"></div>\n    </div>\n    <div class=\"drag-container\" [dragula]=\"'another-bag'\" [dragulaModel]=\"many2\">\n        <div *ngFor=\"let text of many2\" [innerHtml]=\"text\"></div>\n    </div>\n</div>\n<div class=\"wrapper\">\n    <div class=\"drag-container\">\n        <pre>{{many | json}}</pre>\n    </div>\n    <div class=\"drag-container\">\n        <pre>{{many2 | json}}</pre>\n    </div>\n</div>\n"

/***/ },

/***/ 740:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DrawerDemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// APP
	
	
	var _core = __webpack_require__(1);
	
	var _DrawerDemo = __webpack_require__(846);
	
	var _DrawerDemo2 = _interopRequireDefault(_DrawerDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Drawer <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/drawer">(source)</a></small></h1>\n    <p>Drawer Blurb</p>\n\n    <h2>Type</h2>\n\n    <h5>Positions</h5>\n    <p>Positions Blurb</p>\n    <div class="example" style="padding: 20px;">' + _DrawerDemo2.default + '</div>\n    <code-snippet [code]="DrawerDemoTpl"></code-snippet>\n</div>\n';
	
	var DrawerDemoComponent = exports.DrawerDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'drawer-demo',
	    template: template
	}), _dec(_class = function () {
	    function DrawerDemoComponent() {
	        _classCallCheck(this, DrawerDemoComponent);
	
	        this.DrawerDemoTpl = _DrawerDemo2.default;
	    }
	
	    _createClass(DrawerDemoComponent, [{
	        key: 'drawerToggled',
	        value: function drawerToggled(event) {
	            console.log('Drawer Toggled', event); // eslint-disable-line
	        }
	    }]);
	
	    return DrawerDemoComponent;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvZHJhd2VyL0RyYXdlckRlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tCQUFBOztBQUVBOzs7QUFEQTs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFNLHViQUFOOztJQWtCYSxtQixXQUFBLG1CLFdBSloscUJBQVU7QUFDUCxjQUFVLGFBREg7QUFFUCxjQUFVO0FBRkgsQ0FBVixDO0FBS0csbUNBQWM7QUFBQTs7QUFDVixhQUFLLGFBQUw7QUFDSDs7OztzQ0FFYSxLLEVBQU87QUFDakIsb0JBQVEsR0FBUixDQUFZLGdCQUFaLEVBQThCLEtBQTlCLEVBRGlCLENBQ3FCO0FBQ3pDIiwiZmlsZSI6IkRyYXdlckRlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCBEcmF3ZXJEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0RyYXdlckRlbW8uaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5EcmF3ZXIgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvZHJhd2VyXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPkRyYXdlciBCbHVyYjwvcD5cblxuICAgIDxoMj5UeXBlPC9oMj5cblxuICAgIDxoNT5Qb3NpdGlvbnM8L2g1PlxuICAgIDxwPlBvc2l0aW9ucyBCbHVyYjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZVwiIHN0eWxlPVwicGFkZGluZzogMjBweDtcIj4ke0RyYXdlckRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJEcmF3ZXJEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZHJhd2VyLWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxufSlcbmV4cG9ydCBjbGFzcyBEcmF3ZXJEZW1vQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5EcmF3ZXJEZW1vVHBsID0gRHJhd2VyRGVtb1RwbDtcbiAgICB9XG5cbiAgICBkcmF3ZXJUb2dnbGVkKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEcmF3ZXIgVG9nZ2xlZCcsIGV2ZW50KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 846:
/***/ function(module, exports) {

	module.exports = "<div drawer [position]=\"'left'\" (onDrawerToggle)=\"drawerToggled($event)\">\n    <button theme=\"secondary\" drawerToggle [disabled]=\"disabled\">Show Left</button>\n    <div class=\"drawer-content\">\n        <h4>I am a left drawer!</h4>\n    </div>\n</div>\n\n<div drawer [position]=\"'right'\" (onDrawerToggle)=\"drawerToggled($event)\">\n    <button theme=\"secondary\" drawerToggle [disabled]=\"disabled\">Show Right</button>\n    <div class=\"drawer-content\">\n        <h4>I am a right drawer!</h4>\n    </div>\n</div>\n\n<div drawer [position]=\"'right'\" (onDrawerToggle)=\"drawerToggled($event)\">\n    <button theme=\"secondary\" drawerToggle [disabled]=\"disabled\">Show Right <strong>*Two*</strong></button>\n    <div class=\"drawer-content\">\n        <h4>I am *another* right drawer!</h4>\n    </div>\n</div>\n\n<div drawer [position]=\"'top'\" (onDrawerToggle)=\"drawerToggled($event)\">\n    <button theme=\"secondary\" drawerToggle [disabled]=\"disabled\">Show Top</button>\n    <div class=\"drawer-content\">\n        <h4>I am a top drawer!</h4>\n    </div>\n</div>\n\n<div drawer [position]=\"'bottom'\" (onDrawerToggle)=\"drawerToggled($event)\">\n    <button theme=\"secondary\" drawerToggle [disabled]=\"disabled\">Show Bottom</button>\n    <div class=\"drawer-content\">\n        <h4>I am a bottom drawer!</h4>\n    </div>\n</div>\n"

/***/ },

/***/ 741:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DropdownDemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// APP
	
	
	var _core = __webpack_require__(1);
	
	var _DropdownDemo = __webpack_require__(847);
	
	var _DropdownDemo2 = _interopRequireDefault(_DropdownDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Dropdown <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/dropdown">(source)</a></small></h1>\n    <p>Dropdown allow users to take an action by selecting from a list of choices revealed upon opening a temporary menu.</p>\n\n    <h2>Types</h2>\n\n    <h5>Dropdown Menu</h5>\n    <p>This is a simple dropdown menu.</p>\n    <div class="example dropdown-demo">' + _DropdownDemo2.default + '</div>\n    <code-snippet [code]="DropdownDemoTpl"></code-snippet>\n</div>\n';
	
	var DropdownDemoComponent = exports.DropdownDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'dropdown-demo',
	    template: template
	}), _dec(_class = function () {
	    function DropdownDemoComponent() {
	        _classCallCheck(this, DropdownDemoComponent);
	
	        this.DropdownDemoTpl = _DropdownDemo2.default;
	    }
	
	    _createClass(DropdownDemoComponent, [{
	        key: 'clickMe',
	        value: function clickMe(data) {
	            console.log('CLICKED!', data); // eslint-disable-line
	        }
	    }]);
	
	    return DropdownDemoComponent;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvZHJvcGRvd24vRHJvcGRvd25EZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztrQkFBQTs7QUFFQTs7O0FBREE7O0FBRUE7Ozs7Ozs7O0FBRUEsSUFBTSxpakJBQU47O0lBa0JhLHFCLFdBQUEscUIsV0FKWixxQkFBVTtBQUNQLGNBQVUsZUFESDtBQUVQLGNBQVU7QUFGSCxDQUFWLEM7QUFLRyxxQ0FBYztBQUFBOztBQUNWLGFBQUssZUFBTDtBQUNIOzs7O2dDQUVPLEksRUFBTTtBQUNWLG9CQUFRLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLElBQXhCLEVBRFUsQ0FDcUI7QUFDbEMiLCJmaWxlIjoiRHJvcGRvd25EZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgRHJvcGRvd25EZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0Ryb3Bkb3duRGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPkRyb3Bkb3duIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL2Ryb3Bkb3duXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPkRyb3Bkb3duIGFsbG93IHVzZXJzIHRvIHRha2UgYW4gYWN0aW9uIGJ5IHNlbGVjdGluZyBmcm9tIGEgbGlzdCBvZiBjaG9pY2VzIHJldmVhbGVkIHVwb24gb3BlbmluZyBhIHRlbXBvcmFyeSBtZW51LjwvcD5cblxuICAgIDxoMj5UeXBlczwvaDI+XG5cbiAgICA8aDU+RHJvcGRvd24gTWVudTwvaDU+XG4gICAgPHA+VGhpcyBpcyBhIHNpbXBsZSBkcm9wZG93biBtZW51LjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBkcm9wZG93bi1kZW1vXCI+JHtEcm9wZG93bkRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJEcm9wZG93bkRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkcm9wZG93bi1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25EZW1vQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5Ecm9wZG93bkRlbW9UcGwgPSBEcm9wZG93bkRlbW9UcGw7XG4gICAgfVxuXG4gICAgY2xpY2tNZShkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDTElDS0VEIScsIGRhdGEpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfVxufVxuIl19

/***/ },

/***/ 847:
/***/ function(module, exports) {

	module.exports = "<novo-dropdown>\n    <button type=\"button\" theme=\"secondary\" icon=\"collapse\" inverse>Actions</button>\n    <list>\n        <item (action)=\"clickMe()\">Action 1</item>\n        <item (action)=\"clickMe('WITH DATA')\">Action 2</item>\n        <item tooltip=\"Test tooltip :)\" tooltipPosition=\"right\" [disabled]=\"true\" (action)=\"clickMe()\">Action 3</item>\n    </list>\n</novo-dropdown>\n<novo-dropdown side=\"right\">\n    <button type=\"button\" theme=\"icon\" icon=\"menu\" inverse></button>\n    <list>\n        <item>Action 1</item>\n        <item tooltip=\"Test tooltip :)\" tooltipPosition=\"left\">Action 2</item>\n        <item>Action 3</item>\n    </list>\n</novo-dropdown>\n"

/***/ },

/***/ 742:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.EditorDemoComponent = undefined;
	
	var _dec, _class; // NG2
	
	// APP
	
	
	var _core = __webpack_require__(1);
	
	var _BasicEditorDemo = __webpack_require__(848);
	
	var _BasicEditorDemo2 = _interopRequireDefault(_BasicEditorDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>CK Editor <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/editor">(source)</a></small></h1>\n    <p>Basic HTML editor using CK Editor.</p>\n\n    <h5>Basic</h5>\n    <div class="example editor-demo">' + _BasicEditorDemo2.default + '</div>\n    <code-snippet [code]="BasicDemoTpl"></code-snippet>\n</div>\n';
	
	var EditorDemoComponent = exports.EditorDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'editor-demo',
	    template: template
	}), _dec(_class = function EditorDemoComponent() {
	    _classCallCheck(this, EditorDemoComponent);
	
	    this.BasicDemoTpl = _BasicEditorDemo2.default;
	    this.editorValue = '<p>I AM A PRE-RENDERED VALUE</p><h1>TEST</h1>';
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvZWRpdG9yL0VkaXRvckRlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztrQkFBQTs7QUFFQTs7O0FBREE7O0FBRUE7Ozs7Ozs7O0FBRUEsSUFBTSxvWkFBTjs7SUFlYSxtQixXQUFBLG1CLFdBSloscUJBQVU7QUFDUCxjQUFVLGFBREg7QUFFUCxjQUFVO0FBRkgsQ0FBVixDLGdCQUtHLCtCQUFjO0FBQUE7O0FBQ1YsU0FBSyxZQUFMO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLCtDQUFuQjtBQUNILEMiLCJmaWxlIjoiRWRpdG9yRGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IEJhc2ljRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9CYXNpY0VkaXRvckRlbW8uaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5DSyBFZGl0b3IgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvZWRpdG9yXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPkJhc2ljIEhUTUwgZWRpdG9yIHVzaW5nIENLIEVkaXRvci48L3A+XG5cbiAgICA8aDU+QmFzaWM8L2g1PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGVkaXRvci1kZW1vXCI+JHtCYXNpY0RlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJCYXNpY0RlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlZGl0b3ItZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRvckRlbW9Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLkJhc2ljRGVtb1RwbCA9IEJhc2ljRGVtb1RwbDtcbiAgICAgICAgdGhpcy5lZGl0b3JWYWx1ZSA9ICc8cD5JIEFNIEEgUFJFLVJFTkRFUkVEIFZBTFVFPC9wPjxoMT5URVNUPC9oMT4nO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 848:
/***/ function(module, exports) {

	module.exports = "<novo-editor [(ngModel)]=\"editorValue\"></novo-editor>\n\n<p>Value:</p>\n<p [innerHtml]=\"editorValue\"></p>\n"

/***/ },

/***/ 743:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FormDemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// APP
	
	// Vendor
	
	
	var _core = __webpack_require__(1);
	
	var _DynamicForm = __webpack_require__(850);
	
	var _DynamicForm2 = _interopRequireDefault(_DynamicForm);
	
	var _VerticalDynamicForm = __webpack_require__(852);
	
	var _VerticalDynamicForm2 = _interopRequireDefault(_VerticalDynamicForm);
	
	var _TextBasedControls = __webpack_require__(851);
	
	var _TextBasedControls2 = _interopRequireDefault(_TextBasedControls);
	
	var _CheckBoxControls = __webpack_require__(849);
	
	var _CheckBoxControls2 = _interopRequireDefault(_CheckBoxControls);
	
	var _MockMeta = __webpack_require__(744);
	
	var _MockMeta2 = _interopRequireDefault(_MockMeta);
	
	var _novoElements = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Forms <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/form">(source)</a></small></h1>\n    <p>Forms use inputs and labels to submit user content. But you already knew that. What you may not know is that our forms come in two styles \'Static\' and \'Dynamic\'</p>\n    <h2>Static Form</h2>\n    <p>Static forms <code>&lt;novo-form /&gt;</code>.\n    \n    <h5>Textbox Based Controls</h5>\n    <div class="example form-demo">' + _TextBasedControls2.default + '</div>\n    <code-snippet [code]="TextBasedControlsDemoTpl"></code-snippet>\n    \n    <h5>Checkbox Controls</h5>\n    <div class="example form-demo">' + _CheckBoxControls2.default + '</div>\n    <code-snippet [code]="CheckBoxControlsDemoTpl"></code-snippet>\n    \n    <h2>Dynamic Form</h2>\n    <p>Dynamic forms are composed of one element, <code>&lt;novo-dynamic-form [controls]="controls"/&gt;</code> and allow you to pass in the controls and form and it will create the form for you.</p>\n    \n    <h5>Basic</h5>\n    <div class="example form-demo dynamic">' + _DynamicForm2.default + '</div>\n    <code-snippet [code]="DynamicFormDemoTpl"></code-snippet>\n    \n    <h5>Vertical</h5>\n    <div class="example form-demo dynamic">' + _VerticalDynamicForm2.default + '</div>\n    <code-snippet [code]="VerticalDynamicFormDemoTpl"></code-snippet>\n</div>\n';
	
	var FormDemoComponent = exports.FormDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'form-demo',
	    template: template
	}), _dec(_class = function () {
	    function FormDemoComponent(formUtils) {
	        _classCallCheck(this, FormDemoComponent);
	
	        this.DynamicFormDemoTpl = _DynamicForm2.default;
	        this.VerticalDynamicFormDemoTpl = _VerticalDynamicForm2.default;
	        this.TextBasedControlsDemoTpl = _TextBasedControls2.default;
	        this.CheckBoxControlsDemoTpl = _CheckBoxControls2.default;
	        // Quick note config
	        this.quickNoteConfig = {
	            triggers: {
	                tags: '@',
	                references: '#',
	                boos: '^'
	            },
	            options: {
	                tags: ['First', 'Second'],
	                references: ['Third', 'Forth'],
	                boos: ['Test']
	            },
	            renderer: {
	                tags: function tags(symbol, item) {
	                    return '<a class="tag">' + symbol + item.label + '</a>';
	                },
	                references: function references(symbol, item) {
	                    return '<a class="tag">' + symbol + item.label + '</a>';
	                },
	                boos: function boos(symbol, item) {
	                    return '<strong>' + symbol + item.label + '</strong>';
	                }
	            }
	        };
	        // Text-based Controls
	        this.textControl = new _novoElements.TextBoxControl({ key: 'text', label: 'Text Box' });
	        this.emailControl = new _novoElements.TextBoxControl({ type: 'email', key: 'email', label: 'Email' });
	        this.numberControl = new _novoElements.TextBoxControl({ type: 'number', key: 'number', label: 'Number' });
	        this.currencyControl = new _novoElements.TextBoxControl({ type: 'currency', key: 'currency', label: 'Currency', currencyFormat: '$ USD' });
	        this.floatControl = new _novoElements.TextBoxControl({ type: 'float', key: 'float', label: 'Float' });
	        this.percentageControl = new _novoElements.TextBoxControl({ type: 'percentage', key: 'percentage', label: 'Percent' });
	        this.quickNoteControl = new _novoElements.QuickNoteControl({ key: 'note', label: 'Note', config: this.quickNoteConfig });
	        this.textForm = formUtils.toFormGroup([this.textControl, this.emailControl, this.numberControl, this.currencyControl, this.floatControl, this.percentageControl, this.quickNoteControl]);
	
	        // Check box controls
	        this.checkControl = new _novoElements.CheckboxControl({ key: 'check', label: 'Checkbox' });
	        this.checkListControl = new _novoElements.CheckListControl({ key: 'checklist', label: 'Check List', options: ['One', 'Two', 'Three'] });
	        this.checkForm = formUtils.toFormGroup([this.checkControl, this.checkListControl]);
	
	        // Dynamic
	        this.dynamic = formUtils.toControls(_MockMeta2.default, '$ USD', {}, 'TOKEN');
	        formUtils.setInitialValues(this.dynamic, { firstName: 'Initial F Name' });
	        this.dynamicForm = formUtils.toFormGroup(this.dynamic);
	        this.dynamicVertical = formUtils.toControls(_MockMeta2.default, '$ USD', {}, 'TOKEN');
	        this.dynamicVerticalForm = formUtils.toFormGroup(this.dynamicVertical);
	    }
	
	    _createClass(FormDemoComponent, [{
	        key: 'save',
	        value: function save(form) {
	            if (!form.isValid) {
	                form.showOnlyRequired(true);
	            } else {
	                alert('SAVING'); // eslint-disable-line
	            }
	        }
	    }]);
	
	    return FormDemoComponent;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_novoElements.FormUtils], FormDemoComponent);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvZm9ybS9Gb3JtRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7a0JBQUE7O0FBRUE7O0FBTUE7OztBQVBBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTSx3NENBQU47O0lBZ0NhLGlCLFdBQUEsaUIsV0FKWixxQkFBVTtBQUNQLGNBQVUsV0FESDtBQUVQLGNBQVU7QUFGSCxDQUFWLEM7QUFLRywrQkFBWSxTQUFaLEVBQWlDO0FBQUE7O0FBQzdCLGFBQUssa0JBQUw7QUFDQSxhQUFLLDBCQUFMO0FBQ0EsYUFBSyx3QkFBTDtBQUNBLGFBQUssdUJBQUw7QUFDQTtBQUNBLGFBQUssZUFBTCxHQUF1QjtBQUNuQixzQkFBVTtBQUNOLHNCQUFNLEdBREE7QUFFTiw0QkFBWSxHQUZOO0FBR04sc0JBQU07QUFIQSxhQURTO0FBTW5CLHFCQUFTO0FBQ0wsc0JBQU0sQ0FBQyxPQUFELEVBQVUsUUFBVixDQUREO0FBRUwsNEJBQVksQ0FBQyxPQUFELEVBQVUsT0FBVixDQUZQO0FBR0wsc0JBQU0sQ0FBQyxNQUFEO0FBSEQsYUFOVTtBQVduQixzQkFBVTtBQUNOLHNCQUFNLGNBQUMsTUFBRCxFQUFTLElBQVQsRUFBa0I7QUFDcEIsK0NBQXlCLE1BQXpCLEdBQWtDLEtBQUssS0FBdkM7QUFDSCxpQkFISztBQUlOLDRCQUFZLG9CQUFDLE1BQUQsRUFBUyxJQUFULEVBQWtCO0FBQzFCLCtDQUF5QixNQUF6QixHQUFrQyxLQUFLLEtBQXZDO0FBQ0gsaUJBTks7QUFPTixzQkFBTSxjQUFDLE1BQUQsRUFBUyxJQUFULEVBQWtCO0FBQ3BCLHdDQUFrQixNQUFsQixHQUEyQixLQUFLLEtBQWhDO0FBQ0g7QUFUSztBQVhTLFNBQXZCO0FBdUJBO0FBQ0EsYUFBSyxXQUFMLEdBQW1CLGlDQUFtQixFQUFFLEtBQUssTUFBUCxFQUFlLE9BQU8sVUFBdEIsRUFBbkIsQ0FBbkI7QUFDQSxhQUFLLFlBQUwsR0FBb0IsaUNBQW1CLEVBQUUsTUFBTSxPQUFSLEVBQWlCLEtBQUssT0FBdEIsRUFBK0IsT0FBTyxPQUF0QyxFQUFuQixDQUFwQjtBQUNBLGFBQUssYUFBTCxHQUFxQixpQ0FBbUIsRUFBRSxNQUFNLFFBQVIsRUFBa0IsS0FBSyxRQUF2QixFQUFpQyxPQUFPLFFBQXhDLEVBQW5CLENBQXJCO0FBQ0EsYUFBSyxlQUFMLEdBQXVCLGlDQUFtQixFQUFFLE1BQU0sVUFBUixFQUFvQixLQUFLLFVBQXpCLEVBQXFDLE9BQU8sVUFBNUMsRUFBd0QsZ0JBQWdCLE9BQXhFLEVBQW5CLENBQXZCO0FBQ0EsYUFBSyxZQUFMLEdBQW9CLGlDQUFtQixFQUFFLE1BQU0sT0FBUixFQUFpQixLQUFLLE9BQXRCLEVBQStCLE9BQU8sT0FBdEMsRUFBbkIsQ0FBcEI7QUFDQSxhQUFLLGlCQUFMLEdBQXlCLGlDQUFtQixFQUFFLE1BQU0sWUFBUixFQUFzQixLQUFLLFlBQTNCLEVBQXlDLE9BQU8sU0FBaEQsRUFBbkIsQ0FBekI7QUFDQSxhQUFLLGdCQUFMLEdBQXdCLG1DQUFxQixFQUFFLEtBQUssTUFBUCxFQUFlLE9BQU8sTUFBdEIsRUFBOEIsUUFBUSxLQUFLLGVBQTNDLEVBQXJCLENBQXhCO0FBQ0EsYUFBSyxRQUFMLEdBQWdCLFVBQVUsV0FBVixDQUFzQixDQUFDLEtBQUssV0FBTixFQUFtQixLQUFLLFlBQXhCLEVBQXNDLEtBQUssYUFBM0MsRUFBMEQsS0FBSyxlQUEvRCxFQUFnRixLQUFLLFlBQXJGLEVBQW1HLEtBQUssaUJBQXhHLEVBQTJILEtBQUssZ0JBQWhJLENBQXRCLENBQWhCOztBQUVBO0FBQ0EsYUFBSyxZQUFMLEdBQW9CLGtDQUFvQixFQUFFLEtBQUssT0FBUCxFQUFnQixPQUFPLFVBQXZCLEVBQXBCLENBQXBCO0FBQ0EsYUFBSyxnQkFBTCxHQUF3QixtQ0FBcUIsRUFBRSxLQUFLLFdBQVAsRUFBb0IsT0FBTyxZQUEzQixFQUF5QyxTQUFTLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxPQUFmLENBQWxELEVBQXJCLENBQXhCO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLFVBQVUsV0FBVixDQUFzQixDQUFDLEtBQUssWUFBTixFQUFvQixLQUFLLGdCQUF6QixDQUF0QixDQUFqQjs7QUFFQTtBQUNBLGFBQUssT0FBTCxHQUFlLFVBQVUsVUFBVixxQkFBK0IsT0FBL0IsRUFBd0MsRUFBeEMsRUFBNEMsT0FBNUMsQ0FBZjtBQUNBLGtCQUFVLGdCQUFWLENBQTJCLEtBQUssT0FBaEMsRUFBeUMsRUFBRSxXQUFXLGdCQUFiLEVBQXpDO0FBQ0EsYUFBSyxXQUFMLEdBQW1CLFVBQVUsV0FBVixDQUFzQixLQUFLLE9BQTNCLENBQW5CO0FBQ0EsYUFBSyxlQUFMLEdBQXVCLFVBQVUsVUFBVixxQkFBK0IsT0FBL0IsRUFBd0MsRUFBeEMsRUFBNEMsT0FBNUMsQ0FBdkI7QUFDQSxhQUFLLG1CQUFMLEdBQTJCLFVBQVUsV0FBVixDQUFzQixLQUFLLGVBQTNCLENBQTNCO0FBQ0g7Ozs7NkJBRUksSSxFQUFNO0FBQ1AsZ0JBQUksQ0FBQyxLQUFLLE9BQVYsRUFBbUI7QUFDZixxQkFBSyxnQkFBTCxDQUFzQixJQUF0QjtBQUNILGFBRkQsTUFFTztBQUNILHNCQUFNLFFBQU4sRUFERyxDQUNjO0FBQ3BCO0FBQ0o7Ozs7O3VFQTNEUSxpQiIsImZpbGUiOiJGb3JtRGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IER5bmFtaWNGb3JtRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9EeW5hbWljRm9ybS5odG1sJztcbmltcG9ydCBWZXJ0aWNhbER5bmFtaWNGb3JtRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9WZXJ0aWNhbER5bmFtaWNGb3JtLmh0bWwnO1xuaW1wb3J0IFRleHRCYXNlZENvbnRyb2xzRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9UZXh0QmFzZWRDb250cm9scy5odG1sJztcbmltcG9ydCBDaGVja0JveENvbnRyb2xzRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9DaGVja0JveENvbnRyb2xzLmh0bWwnO1xuaW1wb3J0IE1vY2tNZXRhIGZyb20gJy4vTW9ja01ldGEnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBGb3JtVXRpbHMsIFRleHRCb3hDb250cm9sLCBDaGVja2JveENvbnRyb2wsIENoZWNrTGlzdENvbnRyb2wsIFF1aWNrTm90ZUNvbnRyb2wgfSBmcm9tICcuLy4uLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPkZvcm1zIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL2Zvcm1cIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+Rm9ybXMgdXNlIGlucHV0cyBhbmQgbGFiZWxzIHRvIHN1Ym1pdCB1c2VyIGNvbnRlbnQuIEJ1dCB5b3UgYWxyZWFkeSBrbmV3IHRoYXQuIFdoYXQgeW91IG1heSBub3Qga25vdyBpcyB0aGF0IG91ciBmb3JtcyBjb21lIGluIHR3byBzdHlsZXMgJ1N0YXRpYycgYW5kICdEeW5hbWljJzwvcD5cbiAgICA8aDI+U3RhdGljIEZvcm08L2gyPlxuICAgIDxwPlN0YXRpYyBmb3JtcyA8Y29kZT4mbHQ7bm92by1mb3JtIC8mZ3Q7PC9jb2RlPi5cbiAgICBcbiAgICA8aDU+VGV4dGJveCBCYXNlZCBDb250cm9sczwvaDU+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtUZXh0QmFzZWRDb250cm9sc0RlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJUZXh0QmFzZWRDb250cm9sc0RlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbiAgICBcbiAgICA8aDU+Q2hlY2tib3ggQ29udHJvbHM8L2g1PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGZvcm0tZGVtb1wiPiR7Q2hlY2tCb3hDb250cm9sc0RlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJDaGVja0JveENvbnRyb2xzRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuICAgIFxuICAgIDxoMj5EeW5hbWljIEZvcm08L2gyPlxuICAgIDxwPkR5bmFtaWMgZm9ybXMgYXJlIGNvbXBvc2VkIG9mIG9uZSBlbGVtZW50LCA8Y29kZT4mbHQ7bm92by1keW5hbWljLWZvcm0gW2NvbnRyb2xzXT1cImNvbnRyb2xzXCIvJmd0OzwvY29kZT4gYW5kIGFsbG93IHlvdSB0byBwYXNzIGluIHRoZSBjb250cm9scyBhbmQgZm9ybSBhbmQgaXQgd2lsbCBjcmVhdGUgdGhlIGZvcm0gZm9yIHlvdS48L3A+XG4gICAgXG4gICAgPGg1PkJhc2ljPC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBmb3JtLWRlbW8gZHluYW1pY1wiPiR7RHluYW1pY0Zvcm1EZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiRHluYW1pY0Zvcm1EZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG4gICAgXG4gICAgPGg1PlZlcnRpY2FsPC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBmb3JtLWRlbW8gZHluYW1pY1wiPiR7VmVydGljYWxEeW5hbWljRm9ybURlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJWZXJ0aWNhbER5bmFtaWNGb3JtRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Zvcm0tZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1EZW1vQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtVXRpbHM6Rm9ybVV0aWxzKSB7XG4gICAgICAgIHRoaXMuRHluYW1pY0Zvcm1EZW1vVHBsID0gRHluYW1pY0Zvcm1EZW1vVHBsO1xuICAgICAgICB0aGlzLlZlcnRpY2FsRHluYW1pY0Zvcm1EZW1vVHBsID0gVmVydGljYWxEeW5hbWljRm9ybURlbW9UcGw7XG4gICAgICAgIHRoaXMuVGV4dEJhc2VkQ29udHJvbHNEZW1vVHBsID0gVGV4dEJhc2VkQ29udHJvbHNEZW1vVHBsO1xuICAgICAgICB0aGlzLkNoZWNrQm94Q29udHJvbHNEZW1vVHBsID0gQ2hlY2tCb3hDb250cm9sc0RlbW9UcGw7XG4gICAgICAgIC8vIFF1aWNrIG5vdGUgY29uZmlnXG4gICAgICAgIHRoaXMucXVpY2tOb3RlQ29uZmlnID0ge1xuICAgICAgICAgICAgdHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgICB0YWdzOiAnQCcsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogJyMnLFxuICAgICAgICAgICAgICAgIGJvb3M6ICdeJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0YWdzOiBbJ0ZpcnN0JywgJ1NlY29uZCddLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZXM6IFsnVGhpcmQnLCAnRm9ydGgnXSxcbiAgICAgICAgICAgICAgICBib29zOiBbJ1Rlc3QnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbmRlcmVyOiB7XG4gICAgICAgICAgICAgICAgdGFnczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwidGFnXCI+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwidGFnXCI+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9vczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxzdHJvbmc+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvc3Ryb25nPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBUZXh0LWJhc2VkIENvbnRyb2xzXG4gICAgICAgIHRoaXMudGV4dENvbnRyb2wgPSBuZXcgVGV4dEJveENvbnRyb2woeyBrZXk6ICd0ZXh0JywgbGFiZWw6ICdUZXh0IEJveCcgfSk7XG4gICAgICAgIHRoaXMuZW1haWxDb250cm9sID0gbmV3IFRleHRCb3hDb250cm9sKHsgdHlwZTogJ2VtYWlsJywga2V5OiAnZW1haWwnLCBsYWJlbDogJ0VtYWlsJyB9KTtcbiAgICAgICAgdGhpcy5udW1iZXJDb250cm9sID0gbmV3IFRleHRCb3hDb250cm9sKHsgdHlwZTogJ251bWJlcicsIGtleTogJ251bWJlcicsIGxhYmVsOiAnTnVtYmVyJyB9KTtcbiAgICAgICAgdGhpcy5jdXJyZW5jeUNvbnRyb2wgPSBuZXcgVGV4dEJveENvbnRyb2woeyB0eXBlOiAnY3VycmVuY3knLCBrZXk6ICdjdXJyZW5jeScsIGxhYmVsOiAnQ3VycmVuY3knLCBjdXJyZW5jeUZvcm1hdDogJyQgVVNEJyB9KTtcbiAgICAgICAgdGhpcy5mbG9hdENvbnRyb2wgPSBuZXcgVGV4dEJveENvbnRyb2woeyB0eXBlOiAnZmxvYXQnLCBrZXk6ICdmbG9hdCcsIGxhYmVsOiAnRmxvYXQnIH0pO1xuICAgICAgICB0aGlzLnBlcmNlbnRhZ2VDb250cm9sID0gbmV3IFRleHRCb3hDb250cm9sKHsgdHlwZTogJ3BlcmNlbnRhZ2UnLCBrZXk6ICdwZXJjZW50YWdlJywgbGFiZWw6ICdQZXJjZW50JyB9KTtcbiAgICAgICAgdGhpcy5xdWlja05vdGVDb250cm9sID0gbmV3IFF1aWNrTm90ZUNvbnRyb2woeyBrZXk6ICdub3RlJywgbGFiZWw6ICdOb3RlJywgY29uZmlnOiB0aGlzLnF1aWNrTm90ZUNvbmZpZyB9KTtcbiAgICAgICAgdGhpcy50ZXh0Rm9ybSA9IGZvcm1VdGlscy50b0Zvcm1Hcm91cChbdGhpcy50ZXh0Q29udHJvbCwgdGhpcy5lbWFpbENvbnRyb2wsIHRoaXMubnVtYmVyQ29udHJvbCwgdGhpcy5jdXJyZW5jeUNvbnRyb2wsIHRoaXMuZmxvYXRDb250cm9sLCB0aGlzLnBlcmNlbnRhZ2VDb250cm9sLCB0aGlzLnF1aWNrTm90ZUNvbnRyb2xdKTtcblxuICAgICAgICAvLyBDaGVjayBib3ggY29udHJvbHNcbiAgICAgICAgdGhpcy5jaGVja0NvbnRyb2wgPSBuZXcgQ2hlY2tib3hDb250cm9sKHsga2V5OiAnY2hlY2snLCBsYWJlbDogJ0NoZWNrYm94JyB9KTtcbiAgICAgICAgdGhpcy5jaGVja0xpc3RDb250cm9sID0gbmV3IENoZWNrTGlzdENvbnRyb2woeyBrZXk6ICdjaGVja2xpc3QnLCBsYWJlbDogJ0NoZWNrIExpc3QnLCBvcHRpb25zOiBbJ09uZScsICdUd28nLCAnVGhyZWUnXSB9KTtcbiAgICAgICAgdGhpcy5jaGVja0Zvcm0gPSBmb3JtVXRpbHMudG9Gb3JtR3JvdXAoW3RoaXMuY2hlY2tDb250cm9sLCB0aGlzLmNoZWNrTGlzdENvbnRyb2xdKTtcblxuICAgICAgICAvLyBEeW5hbWljXG4gICAgICAgIHRoaXMuZHluYW1pYyA9IGZvcm1VdGlscy50b0NvbnRyb2xzKE1vY2tNZXRhLCAnJCBVU0QnLCB7fSwgJ1RPS0VOJyk7XG4gICAgICAgIGZvcm1VdGlscy5zZXRJbml0aWFsVmFsdWVzKHRoaXMuZHluYW1pYywgeyBmaXJzdE5hbWU6ICdJbml0aWFsIEYgTmFtZScgfSk7XG4gICAgICAgIHRoaXMuZHluYW1pY0Zvcm0gPSBmb3JtVXRpbHMudG9Gb3JtR3JvdXAodGhpcy5keW5hbWljKTtcbiAgICAgICAgdGhpcy5keW5hbWljVmVydGljYWwgPSBmb3JtVXRpbHMudG9Db250cm9scyhNb2NrTWV0YSwgJyQgVVNEJywge30sICdUT0tFTicpO1xuICAgICAgICB0aGlzLmR5bmFtaWNWZXJ0aWNhbEZvcm0gPSBmb3JtVXRpbHMudG9Gb3JtR3JvdXAodGhpcy5keW5hbWljVmVydGljYWwpO1xuICAgIH1cblxuICAgIHNhdmUoZm9ybSkge1xuICAgICAgICBpZiAoIWZvcm0uaXNWYWxpZCkge1xuICAgICAgICAgICAgZm9ybS5zaG93T25seVJlcXVpcmVkKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoJ1NBVklORycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 744:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    entity: 'Opportunity',
	    entityMetaUrl: 'http://develop-backend.bh-bos2.bullhorn.com:8181/rest-services/1yg8p/meta/Opportunity?fields=*',
	    label: 'Opportunity',
	    fields: [{
	        name: 'firstName',
	        type: 'text',
	        label: 'First Name',
	        required: true
	    }, {
	        name: 'lastName',
	        type: 'text',
	        label: 'Last Name'
	    }, {
	        name: 'number',
	        type: 'number',
	        label: 'Number',
	        required: true
	    }, {
	        name: 'float',
	        type: 'float',
	        label: 'Float',
	        required: true
	    }, {
	        name: 'currency',
	        type: 'money',
	        label: 'Cost',
	        currencyFormat: 'USD'
	    }, {
	        name: 'percent',
	        type: 'percentage',
	        label: 'Percentage',
	        required: true
	    }, {
	        name: 'date',
	        type: 'date',
	        label: 'Date',
	        required: true
	    }, {
	        name: 'time',
	        type: 'time',
	        label: 'Time',
	        required: true
	    }, {
	        name: 'status',
	        type: 'select',
	        dataType: 'String',
	        maxLength: 200,
	        confidential: false,
	        label: 'Status',
	        options: [{
	            value: 'Open',
	            label: 'Open'
	        }, {
	            value: 'Qualifying',
	            label: 'Qualifying'
	        }, {
	            value: 'Negotiating',
	            label: 'Negotiating'
	        }, {
	            value: 'TRIGGER',
	            label: 'TRIGGER'
	        }]
	    }, {
	        name: 'nextAction',
	        type: 'tiles',
	        dataType: 'String',
	        label: 'Next Action',
	        required: true,
	        options: [{
	            value: 'none',
	            label: 'None'
	        }, {
	            value: 'task',
	            label: 'Task'
	        }, {
	            value: 'appointment',
	            label: 'Appointment'
	        }]
	    }, {
	        name: 'state',
	        type: 'picker',
	        dataType: 'String',
	        maxLength: 200,
	        confidential: false,
	        label: 'State',
	        required: true,
	        // TODO: Align picker with META by passing META obj into picker
	        // options: [ /* flat array of states */ ]
	        options: {
	            options: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
	        }
	    }, {
	        name: 'startDate',
	        type: 'datetime',
	        dataType: 'Timestamp',
	        label: 'Start Date',
	        required: true
	    }, {
	        name: 'quota',
	        type: 'number',
	        dataType: 'Integer',
	        label: 'Quota',
	        required: true
	    }, {
	        name: 'secret',
	        type: 'hidden',
	        dataType: 'String',
	        label: 'Top Secret',
	        required: true,
	        defaultValue: 'The secret code is: 08322'
	    }, {
	        name: 'categories',
	        type: 'picker',
	        confidential: false,
	        optional: false,
	        label: 'Categories',
	        required: false,
	        readOnly: true,
	        multiValue: true,
	        inputType: 'SELECT',
	        options: [{
	            value: 'Open',
	            label: 'Open'
	        }, {
	            value: 'Qualifying',
	            label: 'Qualifying'
	        }, {
	            value: 'Negotiating',
	            label: 'Negotiating'
	        }, {
	            value: 'TRIGGER',
	            label: 'TRIGGER'
	        }]
	    }, {
	        name: 'owner',
	        type: 'entity',
	        confidential: false,
	        optional: false,
	        label: 'Owner',
	        required: false,
	        readOnly: true,
	        multiValue: false,
	        inputType: 'SELECT',
	        optionsType: 'CorporateUser',
	        optionsUrl: '/options/CorporateUser',
	        hideFromSearch: false,
	        associatedEntity: {
	            entity: 'CorporateUser',
	            label: 'Corporate User'
	        }
	    }, {
	        name: 'address',
	        type: 'address',
	        dataType: 'Address',
	        dataSpecialization: 'SYSTEM',
	        confidential: false,
	        optional: true,
	        label: 'Address',
	        required: false,
	        readOnly: false,
	        multiValue: false,
	        hideFromSearch: true,
	        fields: [{
	            name: 'address1',
	            type: 'SCALAR',
	            dataType: 'String',
	            maxLength: 40,
	            confidential: false,
	            optional: true,
	            label: 'Addressxxx',
	            required: false,
	            readOnly: false,
	            multiValue: false,
	            hideFromSearch: false
	        }, {
	            name: 'address2',
	            type: 'SCALAR',
	            dataType: 'String',
	            maxLength: 40,
	            confidential: false,
	            optional: true,
	            label: 'Address 2',
	            required: false,
	            readOnly: false,
	            multiValue: false,
	            hideFromSearch: false
	        }, {
	            name: 'city',
	            type: 'SCALAR',
	            dataType: 'String',
	            maxLength: 40,
	            confidential: false,
	            optional: true,
	            label: 'City',
	            required: false,
	            readOnly: false,
	            multiValue: false,
	            hideFromSearch: false
	        }, {
	            name: 'state',
	            type: 'SCALAR',
	            dataType: 'String',
	            maxLength: 30,
	            confidential: false,
	            optional: true,
	            label: 'State',
	            required: false,
	            readOnly: false,
	            multiValue: false,
	            inputType: 'SELECT',
	            optionsType: 'StateText',
	            optionsUrl: 'http://optimus-backend.bh-bos2.bullhorn.com:8181/rest-services/1hs/options/StateText',
	            hideFromSearch: false
	        }, {
	            name: 'zip',
	            type: 'SCALAR',
	            dataType: 'String',
	            maxLength: 15,
	            confidential: false,
	            optional: true,
	            label: 'Zip',
	            required: false,
	            readOnly: false,
	            multiValue: false,
	            hideFromSearch: false
	        }, {
	            name: 'countryID',
	            type: 'SCALAR',
	            dataType: 'Integer',
	            confidential: false,
	            optional: false,
	            label: 'Country',
	            required: false,
	            readOnly: false,
	            multiValue: false,
	            inputType: 'SELECT',
	            optionsType: 'Country',
	            optionsUrl: 'http://optimus-backend.bh-bos2.bullhorn.com:8181/rest-services/1hs/options/Country',
	            defaultValue: 2260,
	            hideFromSearch: false
	        }, {
	            name: 'countryCode',
	            type: 'SCALAR',
	            dataType: 'String',
	            maxLength: 0,
	            optional: true
	        }, {
	            name: 'countryName',
	            type: 'SCALAR',
	            dataType: 'String',
	            maxLength: 0,
	            optional: true
	        }]
	    }, {
	        name: 'checkbox',
	        type: 'checkbox',
	        label: 'Checkbox'
	    }, {
	        name: 'checklist',
	        type: 'checklist',
	        label: 'CheckList',
	        options: ['Morning', 'Day', 'Night', 'Overnight'],
	        required: true
	    }, {
	        name: 'address',
	        type: 'address',
	        label: 'Address',
	        required: true
	    }]
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvZm9ybS9Nb2NrTWV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztrQkFBZTtBQUNYLFlBQVEsYUFERztBQUVYLG1CQUFlLGdHQUZKO0FBR1gsV0FBTyxhQUhJO0FBSVgsWUFBUSxDQUNKO0FBQ0ksY0FBTSxXQURWO0FBRUksY0FBTSxNQUZWO0FBR0ksZUFBTyxZQUhYO0FBSUksa0JBQVU7QUFKZCxLQURJLEVBT0o7QUFDSSxjQUFNLFVBRFY7QUFFSSxjQUFNLE1BRlY7QUFHSSxlQUFPO0FBSFgsS0FQSSxFQVlKO0FBQ0ksY0FBTSxRQURWO0FBRUksY0FBTSxRQUZWO0FBR0ksZUFBTyxRQUhYO0FBSUksa0JBQVU7QUFKZCxLQVpJLEVBa0JKO0FBQ0ksY0FBTSxPQURWO0FBRUksY0FBTSxPQUZWO0FBR0ksZUFBTyxPQUhYO0FBSUksa0JBQVU7QUFKZCxLQWxCSSxFQXdCSjtBQUNJLGNBQU0sVUFEVjtBQUVJLGNBQU0sT0FGVjtBQUdJLGVBQU8sTUFIWDtBQUlJLHdCQUFnQjtBQUpwQixLQXhCSSxFQThCSjtBQUNJLGNBQU0sU0FEVjtBQUVJLGNBQU0sWUFGVjtBQUdJLGVBQU8sWUFIWDtBQUlJLGtCQUFVO0FBSmQsS0E5QkksRUFvQ0o7QUFDSSxjQUFNLE1BRFY7QUFFSSxjQUFNLE1BRlY7QUFHSSxlQUFPLE1BSFg7QUFJSSxrQkFBVTtBQUpkLEtBcENJLEVBMENKO0FBQ0ksY0FBTSxNQURWO0FBRUksY0FBTSxNQUZWO0FBR0ksZUFBTyxNQUhYO0FBSUksa0JBQVU7QUFKZCxLQTFDSSxFQWdESjtBQUNJLGNBQU0sUUFEVjtBQUVJLGNBQU0sUUFGVjtBQUdJLGtCQUFVLFFBSGQ7QUFJSSxtQkFBVyxHQUpmO0FBS0ksc0JBQWMsS0FMbEI7QUFNSSxlQUFPLFFBTlg7QUFPSSxpQkFBUyxDQUNMO0FBQ0ksbUJBQU8sTUFEWDtBQUVJLG1CQUFPO0FBRlgsU0FESyxFQUtMO0FBQ0ksbUJBQU8sWUFEWDtBQUVJLG1C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Q0ksY0FBTSxVQURWO0FBRUksY0FBTSxVQUZWO0FBR0ksZUFBTztBQUhYLEtBblNJLEVBd1NKO0FBQ0ksY0FBTSxXQURWO0FBRUksY0FBTSxXQUZWO0FBR0ksZUFBTyxXQUhYO0FBSUksaUJBQVMsQ0FBQyxTQUFELEVBQVksS0FBWixFQUFtQixPQUFuQixFQUE0QixXQUE1QixDQUpiO0FBS0ksa0JBQVU7QUFMZCxLQXhTSSxFQStTSjtBQUNJLGNBQU0sU0FEVjtBQUVJLGNBQU0sU0FGVjtBQUdJLGVBQU8sU0FIWDtBQUlJLGtCQUFVO0FBSmQsS0EvU0k7QUFKRyxDIiwiZmlsZSI6Ik1vY2tNZXRhLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgZW50aXR5OiAnT3Bwb3J0dW5pdHknLFxuICAgIGVudGl0eU1ldGFVcmw6ICdodHRwOi8vZGV2ZWxvcC1iYWNrZW5kLmJoLWJvczIuYnVsbGhvcm4uY29tOjgxODEvcmVzdC1zZXJ2aWNlcy8xeWc4cC9tZXRhL09wcG9ydHVuaXR5P2ZpZWxkcz0qJyxcbiAgICBsYWJlbDogJ09wcG9ydHVuaXR5JyxcbiAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpcnN0TmFtZScsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBsYWJlbDogJ0ZpcnN0IE5hbWUnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2xhc3ROYW1lJyxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGxhYmVsOiAnTGFzdCBOYW1lJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgbGFiZWw6ICdOdW1iZXInLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2Zsb2F0JyxcbiAgICAgICAgICAgIHR5cGU6ICdmbG9hdCcsXG4gICAgICAgICAgICBsYWJlbDogJ0Zsb2F0JyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdjdXJyZW5jeScsXG4gICAgICAgICAgICB0eXBlOiAnbW9uZXknLFxuICAgICAgICAgICAgbGFiZWw6ICdDb3N0JyxcbiAgICAgICAgICAgIGN1cnJlbmN5Rm9ybWF0OiAnVVNEJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAncGVyY2VudCcsXG4gICAgICAgICAgICB0eXBlOiAncGVyY2VudGFnZScsXG4gICAgICAgICAgICBsYWJlbDogJ1BlcmNlbnRhZ2UnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2RhdGUnLFxuICAgICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICAgICAgbGFiZWw6ICdEYXRlJyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICd0aW1lJyxcbiAgICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICAgIGxhYmVsOiAnVGltZScsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnc3RhdHVzJyxcbiAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiAyMDAsXG4gICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWw6ICdTdGF0dXMnLFxuICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdPcGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdPcGVuJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1F1YWxpZnlpbmcnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1F1YWxpZnlpbmcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnTmVnb3RpYXRpbmcnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05lZ290aWF0aW5nJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1RSSUdHRVInLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1RSSUdHRVInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbmV4dEFjdGlvbicsXG4gICAgICAgICAgICB0eXBlOiAndGlsZXMnLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgbGFiZWw6ICdOZXh0IEFjdGlvbicsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTm9uZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICd0YXNrJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUYXNrJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2FwcG9pbnRtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBcHBvaW50bWVudCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdzdGF0ZScsXG4gICAgICAgICAgICB0eXBlOiAncGlja2VyJyxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgIG1heExlbmd0aDogMjAwLFxuICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsOiAnU3RhdGUnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAvLyBUT0RPOiBBbGlnbiBwaWNrZXIgd2l0aCBNRVRBIGJ5IHBhc3NpbmcgTUVUQSBvYmogaW50byBwaWNrZXJcbiAgICAgICAgICAgIC8vIG9wdGlvbnM6IFsgLyogZmxhdCBhcnJheSBvZiBzdGF0ZXMgKi8gXVxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIG9wdGlvbnM6IFsnQWxhYmFtYScsICdBbGFza2EnLCAnQXJpem9uYScsICdBcmthbnNhcycsICdDYWxpZm9ybmlhJywgJ0NvbG9yYWRvJyxcbiAgICAgICAgICAgICAgICAgICAgJ0Nvbm5lY3RpY3V0JywgJ0RlbGF3YXJlJywgJ0Zsb3JpZGEnLCAnR2VvcmdpYScsICdIYXdhaWknLCAnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJyxcbiAgICAgICAgICAgICAgICAgICAgJ0thbnNhcycsICdLZW50dWNreScsICdMb3Vpc2lhbmEnLCAnTWFpbmUnLCAnTWFyeWxhbmQnLCAnTWFzc2FjaHVzZXR0cycsICdNaWNoaWdhbicsICdNaW5uZXNvdGEnLFxuICAgICAgICAgICAgICAgICAgICAnTWlzc2lzc2lwcGknLCAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsICdOZXcgSmVyc2V5JywgJ05ldyBNZXhpY28nLFxuICAgICAgICAgICAgICAgICAgICAnTmV3IFlvcmsnLCAnTm9ydGggRGFrb3RhJywgJ05vcnRoIENhcm9saW5hJywgJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJywgJ1Blbm5zeWx2YW5pYScsICdSaG9kZSBJc2xhbmQnLFxuICAgICAgICAgICAgICAgICAgICAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsICdUZXhhcycsICdVdGFoJywgJ1Zlcm1vbnQnLCAnVmlyZ2luaWEnLCAnV2FzaGluZ3RvbicsXG4gICAgICAgICAgICAgICAgICAgICdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3N0YXJ0RGF0ZScsXG4gICAgICAgICAgICB0eXBlOiAnZGF0ZXRpbWUnLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdUaW1lc3RhbXAnLFxuICAgICAgICAgICAgbGFiZWw6ICdTdGFydCBEYXRlJyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdxdW90YScsXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnSW50ZWdlcicsXG4gICAgICAgICAgICBsYWJlbDogJ1F1b3RhJyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzZWNyZXQnLFxuICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICBsYWJlbDogJ1RvcCBTZWNyZXQnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICdUaGUgc2VjcmV0IGNvZGUgaXM6IDA4MzIyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcmllcycsXG4gICAgICAgICAgICB0eXBlOiAncGlja2VyJyxcbiAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbDogJ0NhdGVnb3JpZXMnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgICBtdWx0aVZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgaW5wdXRUeXBlOiAnU0VMRUNUJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnT3BlbicsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnT3BlbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdRdWFsaWZ5aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdRdWFsaWZ5aW5nJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ05lZ290aWF0aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdOZWdvdGlhdGluZydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdUUklHR0VSJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUUklHR0VSJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ293bmVyJyxcbiAgICAgICAgICAgIHR5cGU6ICdlbnRpdHknLFxuICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsOiAnT3duZXInLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgICBtdWx0aVZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgIGlucHV0VHlwZTogJ1NFTEVDVCcsXG4gICAgICAgICAgICBvcHRpb25zVHlwZTogJ0NvcnBvcmF0ZVVzZXInLFxuICAgICAgICAgICAgb3B0aW9uc1VybDogJy9vcHRpb25zL0NvcnBvcmF0ZVVzZXInLFxuICAgICAgICAgICAgaGlkZUZyb21TZWFyY2g6IGZhbHNlLFxuICAgICAgICAgICAgYXNzb2NpYXRlZEVudGl0eToge1xuICAgICAgICAgICAgICAgIGVudGl0eTogJ0NvcnBvcmF0ZVVzZXInLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnQ29ycG9yYXRlIFVzZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdhZGRyZXNzJyxcbiAgICAgICAgICAgIHR5cGU6ICdhZGRyZXNzJyxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnQWRkcmVzcycsXG4gICAgICAgICAgICBkYXRhU3BlY2lhbGl6YXRpb246ICdTWVNURU0nLFxuICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgICAgICAgbGFiZWw6ICdBZGRyZXNzJyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgIG11bHRpVmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgaGlkZUZyb21TZWFyY2g6IHRydWUsXG4gICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRyZXNzMScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTQ0FMQVInLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNDAsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FkZHJlc3N4eHgnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGhpZGVGcm9tU2VhcmNoOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkcmVzczInLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0NBTEFSJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDQwLFxuICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBZGRyZXNzIDInLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGhpZGVGcm9tU2VhcmNoOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2l0eScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTQ0FMQVInLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNDAsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NpdHknLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGhpZGVGcm9tU2VhcmNoOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3RhdGUnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0NBTEFSJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDMwLFxuICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTdGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtdWx0aVZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiAnU0VMRUNUJyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1R5cGU6ICdTdGF0ZVRleHQnLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zVXJsOiAnaHR0cDovL29wdGltdXMtYmFja2VuZC5iaC1ib3MyLmJ1bGxob3JuLmNvbTo4MTgxL3Jlc3Qtc2VydmljZXMvMWhzL29wdGlvbnMvU3RhdGVUZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgaGlkZUZyb21TZWFyY2g6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICd6aXAnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0NBTEFSJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDE1LFxuICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdaaXAnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGhpZGVGcm9tU2VhcmNoOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY291bnRyeUlEJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NDQUxBUicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnSW50ZWdlcicsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG11bHRpVmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6ICdTRUxFQ1QnLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zVHlwZTogJ0NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zVXJsOiAnaHR0cDovL29wdGltdXMtYmFja2VuZC5iaC1ib3MyLmJ1bGxob3JuLmNvbTo4MTgxL3Jlc3Qtc2VydmljZXMvMWhzL29wdGlvbnMvQ291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogMjI2MCxcbiAgICAgICAgICAgICAgICAgICAgaGlkZUZyb21TZWFyY2g6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjb3VudHJ5Q29kZScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTQ0FMQVInLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvdW50cnlOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NDQUxBUicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAwLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICBsYWJlbDogJ0NoZWNrYm94J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnY2hlY2tsaXN0JyxcbiAgICAgICAgICAgIHR5cGU6ICdjaGVja2xpc3QnLFxuICAgICAgICAgICAgbGFiZWw6ICdDaGVja0xpc3QnLFxuICAgICAgICAgICAgb3B0aW9uczogWydNb3JuaW5nJywgJ0RheScsICdOaWdodCcsICdPdmVybmlnaHQnXSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdhZGRyZXNzJyxcbiAgICAgICAgICAgIHR5cGU6ICdhZGRyZXNzJyxcbiAgICAgICAgICAgIGxhYmVsOiAnQWRkcmVzcycsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9XG4gICAgXVxufTtcbiJdfQ==

/***/ },

/***/ 849:
/***/ function(module, exports) {

	module.exports = "<!--Check out the FormDemo.js for more information!-->\n<novo-form [form]=\"checkForm\">\n    <div class=\"novo-form-row\">\n        <novo-control [form]=\"checkForm\" [control]=\"checkControl\"></novo-control>\n    </div>\n    <div class=\"novo-form-row\">\n        <novo-control [form]=\"checkForm\" [control]=\"checkListControl\"></novo-control>\n    </div>\n</novo-form>\n<div class=\"final-value\">Value: {{checkForm.value | json}}</div>\n"

/***/ },

/***/ 850:
/***/ function(module, exports) {

	module.exports = "<button theme=\"secondary\" *ngIf=\"!myform.showingAllFields && !(myform.allFieldsRequired || myform.allFieldsNotRequired)\" (click)=\"myform.showAllFields()\">Show All Fields</button>\n<button theme=\"secondary\" *ngIf=\"!myform.showingRequiredFields && !(myform.allFieldsRequired || myform.allFieldsNotRequired)\" (click)=\"myform.showOnlyRequired()\">Show Required Fields</button>\n<novo-dynamic-form class=\"dynamic\" [controls]=\"dynamic\" [(form)]=\"dynamicForm\" #myform></novo-dynamic-form>\n<footer class=\"dynamic-demo-footer\">\n    <button (click)=\"save(myform)\" theme=\"primary\" icon=\"check\">Save</button>\n</footer>\n<div class=\"final-value\">Valid: {{myform.isValid | json}}</div>\n<div class=\"final-value\">Values: {{myform.values | json}}</div>\n<div class=\"final-value\">Updated Values: {{myform.updatedValues() | json}}</div>\n"

/***/ },

/***/ 851:
/***/ function(module, exports) {

	module.exports = "<!--Check out the FormDemo.js for more information!-->\n<novo-form [form]=\"textForm\">\n    <div class=\"novo-form-row\">\n        <novo-control [form]=\"textForm\" [control]=\"textControl\"></novo-control>\n    </div>\n    <div class=\"novo-form-row\">\n        <novo-control [form]=\"textForm\" [control]=\"emailControl\"></novo-control>\n    </div>\n    <div class=\"novo-form-row\">\n        <novo-control [form]=\"textForm\" [control]=\"numberControl\"></novo-control>\n    </div>\n    <div class=\"novo-form-row\">\n        <novo-control [form]=\"textForm\" [control]=\"currencyControl\"></novo-control>\n    </div>\n    <div class=\"novo-form-row\">\n        <novo-control [form]=\"textForm\" [control]=\"floatControl\"></novo-control>\n    </div>\n    <div class=\"novo-form-row\">\n        <novo-control [form]=\"textForm\" [control]=\"percentageControl\"></novo-control>\n    </div>\n    <div class=\"novo-form-row\">\n        <novo-control [form]=\"textForm\" [control]=\"quickNoteControl\"></novo-control>\n    </div>\n</novo-form>\n<div class=\"final-value\">Value: {{textForm.value | json}}</div>\n"

/***/ },

/***/ 852:
/***/ function(module, exports) {

	module.exports = "<button theme=\"secondary\" (click)=\"nomyform.showAllFields()\">Show All Fields</button>\n<button theme=\"secondary\" (click)=\"nomyform.showOnlyRequired()\">Show Required Fields</button>\n<novo-dynamic-form layout=\"vertical\" class=\"dynamic\" [controls]=\"dynamicVertical\" [(form)]=\"dynamicVerticalForm\" #nomyform></novo-dynamic-form>\n<div class=\"final-value\">Valid: {{nomyform.isValid | json}}</div>\n<div class=\"final-value\">Values: {{nomyform.values | json}}</div>\n<div class=\"final-value\">Updated Values: {{nomyform.updatedValues() | json}}</div>\n"

/***/ },

/***/ 745:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HeaderDemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// APP
	
	// Vendor
	
	
	var _core = __webpack_require__(1);
	
	var _HeaderDemo = __webpack_require__(853);
	
	var _HeaderDemo2 = _interopRequireDefault(_HeaderDemo);
	
	var _novoElements = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Headers <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/header">(source)</a></small></h1>\n    <p>Headers are used in Mainframe Record pages and some modals. </p>\n\n    <h2>Types</h2>\n\n    <h5>Record Header</h5>\n    <p>Record headers have details about the entity record and tabbed navigation.</p>\n    <div class="example header-demo">' + _HeaderDemo2.default + '</div>\n    <code-snippet [code]="HeaderDemoTpl"></code-snippet>\n</div>\n';
	
	var HeaderDemoComponent = exports.HeaderDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'header-demo',
	    template: template
	}), _dec(_class = function () {
	    function HeaderDemoComponent(toaster) {
	        _classCallCheck(this, HeaderDemoComponent);
	
	        this.toaster = toaster;
	        this.HeaderDemoTpl = _HeaderDemo2.default;
	        this.entity = 'company';
	        this.options = {
	            'title': 'Title',
	            'message': 'Some Message...',
	            'theme': 'ocean',
	            'icon': 'clipboard',
	            'position': 'growlTopRight'
	        };
	    }
	
	    _createClass(HeaderDemoComponent, [{
	        key: 'catchEv',
	        value: function catchEv(type, ev) {
	            // Set toast options
	            this.options = {
	                title: '' + type,
	                message: ev + ' fired...',
	                theme: 'ocean',
	                icon: '' + type,
	                position: 'growlTopRight'
	            };
	
	            // Fire toast
	            this.toaster.alert(this.options);
	        }
	    }]);
	
	    return HeaderDemoComponent;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_novoElements.NovoToastService], HeaderDemoComponent);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvaGVhZGVyL0hlYWRlckRlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tCQUFBOztBQUVBOztBQUVBOzs7QUFIQTs7QUFFQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNLDZoQkFBTjs7SUFrQmEsbUIsV0FBQSxtQixXQUpaLHFCQUFVO0FBQ1AsY0FBVSxhQURIO0FBRVAsY0FBVTtBQUZILENBQVYsQztBQUtHLGlDQUFZLE9BQVosRUFBc0M7QUFBQTs7QUFDbEMsYUFBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLGFBQUssYUFBTDtBQUNBLGFBQUssTUFBTCxHQUFjLFNBQWQ7QUFDQSxhQUFLLE9BQUwsR0FBZTtBQUNYLHFCQUFTLE9BREU7QUFFWCx1QkFBVyxpQkFGQTtBQUdYLHFCQUFTLE9BSEU7QUFJWCxvQkFBUSxXQUpHO0FBS1gsd0JBQVk7QUFMRCxTQUFmO0FBT0g7Ozs7Z0NBRU8sSSxFQUFNLEUsRUFBSTtBQUNkO0FBQ0EsaUJBQUssT0FBTCxHQUFlO0FBQ1gsNEJBQVUsSUFEQztBQUVYLHlCQUFZLEVBQVosY0FGVztBQUdYLHVCQUFPLE9BSEk7QUFJWCwyQkFBUyxJQUpFO0FBS1gsMEJBQVU7QUFMQyxhQUFmOztBQVFBO0FBQ0EsaUJBQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUIsS0FBSyxPQUF4QjtBQUNIOzs7Ozs4RUExQlEsbUIiLCJmaWxlIjoiSGVhZGVyRGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IEhlYWRlckRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvSGVhZGVyRGVtby5odG1sJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgTm92b1RvYXN0U2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+SGVhZGVycyA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy9oZWFkZXJcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+SGVhZGVycyBhcmUgdXNlZCBpbiBNYWluZnJhbWUgUmVjb3JkIHBhZ2VzIGFuZCBzb21lIG1vZGFscy4gPC9wPlxuXG4gICAgPGgyPlR5cGVzPC9oMj5cblxuICAgIDxoNT5SZWNvcmQgSGVhZGVyPC9oNT5cbiAgICA8cD5SZWNvcmQgaGVhZGVycyBoYXZlIGRldGFpbHMgYWJvdXQgdGhlIGVudGl0eSByZWNvcmQgYW5kIHRhYmJlZCBuYXZpZ2F0aW9uLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBoZWFkZXItZGVtb1wiPiR7SGVhZGVyRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkhlYWRlckRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdoZWFkZXItZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckRlbW9Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHRvYXN0ZXI6Tm92b1RvYXN0U2VydmljZSkge1xuICAgICAgICB0aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xuICAgICAgICB0aGlzLkhlYWRlckRlbW9UcGwgPSBIZWFkZXJEZW1vVHBsO1xuICAgICAgICB0aGlzLmVudGl0eSA9ICdjb21wYW55JztcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgJ3RpdGxlJzogJ1RpdGxlJyxcbiAgICAgICAgICAgICdtZXNzYWdlJzogJ1NvbWUgTWVzc2FnZS4uLicsXG4gICAgICAgICAgICAndGhlbWUnOiAnb2NlYW4nLFxuICAgICAgICAgICAgJ2ljb24nOiAnY2xpcGJvYXJkJyxcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdncm93bFRvcFJpZ2h0J1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNhdGNoRXYodHlwZSwgZXYpIHtcbiAgICAgICAgLy8gU2V0IHRvYXN0IG9wdGlvbnNcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IGAke3R5cGV9YCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGAke2V2fSBmaXJlZC4uLmAsXG4gICAgICAgICAgICB0aGVtZTogJ29jZWFuJyxcbiAgICAgICAgICAgIGljb246IGAke3R5cGV9YCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZ3Jvd2xUb3BSaWdodCdcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBGaXJlIHRvYXN0XG4gICAgICAgIHRoaXMudG9hc3Rlci5hbGVydCh0aGlzLm9wdGlvbnMpO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 853:
/***/ function(module, exports) {

	module.exports = "<header title=\"John Deere\" icon=\"person\" [theme]=\"entity\">\n    <utils>\n        <util-action icon=\"flag\" (click)=\"catchEv('pin', $event)\"></util-action>\n        <util-action icon=\"refresh\" (click)=\"catchEv('refresh', $event)\"></util-action>\n        <util-action icon=\"times\" (click)=\"catchEv('close', $event)\"></util-action>\n    </utils>\n    <section>\n        Extra Info\n    </section>\n    <novo-nav theme=\"color\" [outlet]=\"colornav\" direction=\"horizontal\">\n        <novo-tab>\n            <span>Overview</span>\n        </novo-tab>\n        <novo-tab>\n            <span>Activity</span>\n        </novo-tab>\n        <novo-tab>\n            <span>Email</span>\n        </novo-tab>\n    </novo-nav>\n</header>\n"

/***/ },

/***/ 746:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ListDemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// APP
	
	
	var _core = __webpack_require__(1);
	
	var _ListDemo = __webpack_require__(854);
	
	var _ListDemo2 = _interopRequireDefault(_ListDemo);
	
	var _ThemedListDemo = __webpack_require__(855);
	
	var _ThemedListDemo2 = _interopRequireDefault(_ThemedListDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>List / Item <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/list">(source)</a></small></h1>\n    <p>Lists are used to display rows of information like entities or entity data\n    and appear on cards, our mobile app, and several other places across the Bullhorn platform.</p>\n\n    <h2>Basic Usage</h2>\n\n    <h5>Standard List</h5>\n    <p>This is an example of a standard list.</p>\n    <div class="example standard-list-demo">' + _ListDemo2.default + '</div>\n    <code-snippet [code]="ListDemoTpl"></code-snippet>\n\n    <h5>Themed List</h5>\n    <p>This is an example of a themed list.</p>\n    <div class="example themed-list-demo">' + _ThemedListDemo2.default + '</div>\n    <code-snippet [code]="ThemedListDemoTpl"></code-snippet>\n</div>\n';
	
	var ListDemoComponent = exports.ListDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'list-demo',
	    template: template
	}), _dec(_class = function () {
	    function ListDemoComponent() {
	        _classCallCheck(this, ListDemoComponent);
	
	        this.ListDemoTpl = _ListDemo2.default;
	        this.ThemedListDemoTpl = _ThemedListDemo2.default;
	
	        var ONE_HOUR = 60 * 60 * 1000;
	        /* ms */
	        var TWO_HOURS = ONE_HOUR * 2;
	        var THREE_HOURS = ONE_HOUR * 3;
	        var currentDate = new Date();
	
	        var oneHourAgo = currentDate.getTime() - ONE_HOUR;
	        var twoHoursAgo = currentDate.getTime() - TWO_HOURS;
	        var threeHoursAgo = currentDate.getTime() - THREE_HOURS;
	
	        /* "mockResponse[]" should represent a REST response with improperly formatted data.
	         /  The "buildItems()" function is taking this data object and massaging it
	         /  to build the list items appropriately via a new data object "pulseItems[]".
	         /  In page1.html you can see how the new object builds a list of items.
	         /  - @asibilia
	         */
	
	        var mockResponse = [{
	            type: 'opportunity',
	            dateCreated: oneHourAgo,
	            sentiment: {
	                rating: 'negative',
	                type: 'engagement',
	                comment: 'No emails in last 10 days'
	            },
	            user: {
	                firstName: 'Steph',
	                lastName: 'Curry',
	                company: 'Wells Fargo',
	                location: 'Golden State, CA'
	            }
	        }, {
	            type: 'opportunity',
	            dateCreated: twoHoursAgo,
	            sentiment: {
	                rating: 'negative',
	                type: 'probability',
	                comment: 'Now has low probability to close'
	            },
	            user: {
	                firstName: 'Lebron',
	                lastName: 'James',
	                company: 'Amazon',
	                location: 'Cleveland, OH'
	            }
	        }, {
	            type: 'company',
	            dateCreated: threeHoursAgo,
	            sentiment: {
	                rating: 'positive',
	                type: 'connection',
	                comment: 'New connection'
	            },
	            user: {
	                firstName: 'Derrick',
	                lastName: 'Rose',
	                company: 'Walmart',
	                location: 'Chicago, IL'
	            }
	        }];
	
	        this.pulseItems = [];
	
	        this.buildItems(mockResponse);
	    }
	
	    _createClass(ListDemoComponent, [{
	        key: 'buildItems',
	        value: function buildItems(resp) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = resp[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var obj = _step.value;
	
	                    var item = {};
	
	                    /*
	                     ||| This is the item structure to be pushed to pulseItems[] and used
	                     ||| to build the list & items.
	                     |
	                     |   item = {
	                     |       "name": '',
	                     |       "type": '',
	                     |       "icon": {
	                     |           "name": '',
	                     |           "sentiment": ''
	                     |       },
	                     |       "comment": '',
	                     |       "timeAgo": ''
	                     |    }
	                     |
	                     */
	
	                    item.name = obj.user.company;
	                    item.type = obj.type;
	                    item.icon = {};
	
	                    if (obj.sentiment.type === 'connection') {
	                        item.icon.name = 'bhi-add-o';
	                    }
	
	                    if (obj.sentiment.type === 'engagement') {
	                        item.icon.name = obj.sentiment.rating === 'positive' ? 'bhi-trending-up' : 'bhi-trending-down';
	                    }
	
	                    if (obj.sentiment.type === 'probability') {
	                        item.icon.name = obj.sentiment.rating === 'positive' ? 'bhi-bar-positive' : 'bhi-bar-negative';
	                    }
	
	                    item.icon.sentiment = obj.sentiment.rating;
	                    item.comment = obj.sentiment.comment;
	                    item.timeAgo = obj.dateCreated;
	
	                    this.pulseItems.push(item);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }]);
	
	    return ListDemoComponent;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvbGlzdC9MaXN0RGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7a0JBQUE7O0FBRUE7OztBQURBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSxnMUJBQU47O0lBd0JhLGlCLFdBQUEsaUIsV0FKWixxQkFBVTtBQUNQLGNBQVUsV0FESDtBQUVQLGNBQVU7QUFGSCxDQUFWLEM7QUFLRyxpQ0FBYztBQUFBOztBQUNWLGFBQUssV0FBTDtBQUNBLGFBQUssaUJBQUw7O0FBRUEsWUFBSSxXQUFXLEtBQUssRUFBTCxHQUFVLElBQXpCO0FBQ0E7QUFDQSxZQUFJLFlBQVksV0FBVyxDQUEzQjtBQUNBLFlBQUksY0FBYyxXQUFXLENBQTdCO0FBQ0EsWUFBSSxjQUFjLElBQUksSUFBSixFQUFsQjs7QUFFQSxZQUFJLGFBQWEsWUFBWSxPQUFaLEtBQXdCLFFBQXpDO0FBQ0EsWUFBSSxjQUFjLFlBQVksT0FBWixLQUF3QixTQUExQztBQUNBLFlBQUksZ0JBQWdCLFlBQVksT0FBWixLQUF3QixXQUE1Qzs7QUFFQTs7Ozs7OztBQU9BLFlBQUksZUFBZSxDQUFDO0FBQ2hCLGtCQUFNLGFBRFU7QUFFaEIseUJBQWEsVUFGRztBQUdoQix1QkFBVztBQUNQLHdCQUFRLFVBREQ7QUFFUCxzQkFBTSxZQUZDO0FBR1AseUJBQVM7QUFIRixhQUhLO0FBUWhCLGtCQUFNO0FBQ0YsMkJBQVcsT0FEVDtBQUVGLDBCQUFVLE9BRlI7QUFHRix5QkFBUyxhQUhQO0FBSUYsMEJBQVU7QUFKUjtBQVJVLFNBQUQsRUFjaEI7QUFDQyxrQkFBTSxhQURQO0FBRUMseUJBQWEsV0FGZDtBQUdDLHVCQUFXO0FBQ1Asd0JBQVEsVUFERDtBQUVQLHNCQUFNLGFBRkM7QUFHUCx5QkFBUztBQUhGLGFBSFo7QUFRQyxrQkFBTTtBQUNGLDJCQUFXLFFBRFQ7QUFFRiwwQkFBVSxPQUZSO0FBR0YseUJBQVMsUUFIUDtBQUlGLDBCQUFVO0FBSlI7QUFSUCxTQWRnQixFQTRCaEI7QUFDQyxrQkFBTSxTQURQO0FBRUMseUJBQWEsYUFGZDtBQUdDLHVCQUFXO0FBQ1Asd0JBQVEsVUFERDtBQUVQLHNCQUFNLFlBRkM7QUFHUCx5QkFBUztBQUhGLGFBSFo7QUFRQyxrQkFBTTtBQUNGLDJCQUFXLFNBRFQ7QUFFRiwwQkFBVSxNQUZSO0FBR0YseUJBQVMsU0FIUDtBQUlGLDBCQUFVO0FBSlI7QUFSUCxTQTVCZ0IsQ0FBbkI7O0FBNENBLGFBQUssVUFBTCxHQUFrQixFQUFsQjs7QUFFQSxhQUFLLFVBQUwsQ0FBZ0IsWUFBaEI7QUFDSDs7OzttQ0FFVSxJLEVBQU07QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDYixxQ0FBZ0IsSUFBaEIsOEhBQXNCO0FBQUEsd0JBQWIsR0FBYTs7QUFDbEIsd0JBQUksT0FBTyxFQUFYOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSx5QkFBSyxJQUFMLEdBQVksSUFBSSxJQUFKLENBQVMsT0FBckI7QUFDQSx5QkFBSyxJQUFMLEdBQVksSUFBSSxJQUFoQjtBQUNBLHlCQUFLLElBQUwsR0FBWSxFQUFaOztBQUVBLHdCQUFJLElBQUksU0FBSixDQUFjLElBQWQsS0FBdUIsWUFBM0IsRUFBeUM7QUFDckMsNkJBQUssSUFBTCxDQUFVLElBQVYsR0FBaUIsV0FBakI7QUFDSDs7QUFFRCx3QkFBSSxJQUFJLFNBQUosQ0FBYyxJQUFkLEtBQXVCLFlBQTNCLEVBQXlDO0FBQ3JDLDZCQUFLLElBQUwsQ0FBVSxJQUFWLEdBQWtCLElBQUksU0FBSixDQUFjLE1BQWQsS0FBeUIsVUFBMUIsR0FBd0MsaUJBQXhDLEdBQTRELG1CQUE3RTtBQUNIOztBQUVELHdCQUFJLElBQUksU0FBSixDQUFjLElBQWQsS0FBdUIsYUFBM0IsRUFBMEM7QUFDdEMsNkJBQUssSUFBTCxDQUFVLElBQVYsR0FBa0IsSUFBSSxTQUFKLENBQWMsTUFBZCxLQUF5QixVQUExQixHQUF3QyxrQkFBeEMsR0FBNkQsa0JBQTlFO0FBQ0g7O0FBRUQseUJBQUssSUFBTCxDQUFVLFNBQVYsR0FBc0IsSUFBSSxTQUFKLENBQWMsTUFBcEM7QUFDQSx5QkFBSyxPQUFMLEdBQWUsSUFBSSxTQUFKLENBQWMsT0FBN0I7QUFDQSx5QkFBSyxPQUFMLEdBQWUsSUFBSSxXQUFuQjs7QUFFQSx5QkFBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLElBQXJCO0FBQ0g7QUExQ1k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJDaEIiLCJmaWxlIjoiTGlzdERlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCBMaXN0RGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9MaXN0RGVtby5odG1sJztcbmltcG9ydCBUaGVtZWRMaXN0RGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9UaGVtZWRMaXN0RGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPkxpc3QgLyBJdGVtIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL2xpc3RcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+TGlzdHMgYXJlIHVzZWQgdG8gZGlzcGxheSByb3dzIG9mIGluZm9ybWF0aW9uIGxpa2UgZW50aXRpZXMgb3IgZW50aXR5IGRhdGFcbiAgICBhbmQgYXBwZWFyIG9uIGNhcmRzLCBvdXIgbW9iaWxlIGFwcCwgYW5kIHNldmVyYWwgb3RoZXIgcGxhY2VzIGFjcm9zcyB0aGUgQnVsbGhvcm4gcGxhdGZvcm0uPC9wPlxuXG4gICAgPGgyPkJhc2ljIFVzYWdlPC9oMj5cblxuICAgIDxoNT5TdGFuZGFyZCBMaXN0PC9oNT5cbiAgICA8cD5UaGlzIGlzIGFuIGV4YW1wbGUgb2YgYSBzdGFuZGFyZCBsaXN0LjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBzdGFuZGFyZC1saXN0LWRlbW9cIj4ke0xpc3REZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiTGlzdERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5UaGVtZWQgTGlzdDwvaDU+XG4gICAgPHA+VGhpcyBpcyBhbiBleGFtcGxlIG9mIGEgdGhlbWVkIGxpc3QuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHRoZW1lZC1saXN0LWRlbW9cIj4ke1RoZW1lZExpc3REZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiVGhlbWVkTGlzdERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaXN0LWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0RGVtb0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuTGlzdERlbW9UcGwgPSBMaXN0RGVtb1RwbDtcbiAgICAgICAgdGhpcy5UaGVtZWRMaXN0RGVtb1RwbCA9IFRoZW1lZExpc3REZW1vVHBsO1xuXG4gICAgICAgIGxldCBPTkVfSE9VUiA9IDYwICogNjAgKiAxMDAwO1xuICAgICAgICAvKiBtcyAqL1xuICAgICAgICBsZXQgVFdPX0hPVVJTID0gT05FX0hPVVIgKiAyO1xuICAgICAgICBsZXQgVEhSRUVfSE9VUlMgPSBPTkVfSE9VUiAqIDM7XG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgbGV0IG9uZUhvdXJBZ28gPSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkgLSBPTkVfSE9VUjtcbiAgICAgICAgbGV0IHR3b0hvdXJzQWdvID0gY3VycmVudERhdGUuZ2V0VGltZSgpIC0gVFdPX0hPVVJTO1xuICAgICAgICBsZXQgdGhyZWVIb3Vyc0FnbyA9IGN1cnJlbnREYXRlLmdldFRpbWUoKSAtIFRIUkVFX0hPVVJTO1xuXG4gICAgICAgIC8qIFwibW9ja1Jlc3BvbnNlW11cIiBzaG91bGQgcmVwcmVzZW50IGEgUkVTVCByZXNwb25zZSB3aXRoIGltcHJvcGVybHkgZm9ybWF0dGVkIGRhdGEuXG4gICAgICAgICAvICBUaGUgXCJidWlsZEl0ZW1zKClcIiBmdW5jdGlvbiBpcyB0YWtpbmcgdGhpcyBkYXRhIG9iamVjdCBhbmQgbWFzc2FnaW5nIGl0XG4gICAgICAgICAvICB0byBidWlsZCB0aGUgbGlzdCBpdGVtcyBhcHByb3ByaWF0ZWx5IHZpYSBhIG5ldyBkYXRhIG9iamVjdCBcInB1bHNlSXRlbXNbXVwiLlxuICAgICAgICAgLyAgSW4gcGFnZTEuaHRtbCB5b3UgY2FuIHNlZSBob3cgdGhlIG5ldyBvYmplY3QgYnVpbGRzIGEgbGlzdCBvZiBpdGVtcy5cbiAgICAgICAgIC8gIC0gQGFzaWJpbGlhXG4gICAgICAgICAqL1xuXG4gICAgICAgIGxldCBtb2NrUmVzcG9uc2UgPSBbe1xuICAgICAgICAgICAgdHlwZTogJ29wcG9ydHVuaXR5JyxcbiAgICAgICAgICAgIGRhdGVDcmVhdGVkOiBvbmVIb3VyQWdvLFxuICAgICAgICAgICAgc2VudGltZW50OiB7XG4gICAgICAgICAgICAgICAgcmF0aW5nOiAnbmVnYXRpdmUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlbmdhZ2VtZW50JyxcbiAgICAgICAgICAgICAgICBjb21tZW50OiAnTm8gZW1haWxzIGluIGxhc3QgMTAgZGF5cydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnU3RlcGgnLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnQ3VycnknLFxuICAgICAgICAgICAgICAgIGNvbXBhbnk6ICdXZWxscyBGYXJnbycsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246ICdHb2xkZW4gU3RhdGUsIENBJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiAnb3Bwb3J0dW5pdHknLFxuICAgICAgICAgICAgZGF0ZUNyZWF0ZWQ6IHR3b0hvdXJzQWdvLFxuICAgICAgICAgICAgc2VudGltZW50OiB7XG4gICAgICAgICAgICAgICAgcmF0aW5nOiAnbmVnYXRpdmUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwcm9iYWJpbGl0eScsXG4gICAgICAgICAgICAgICAgY29tbWVudDogJ05vdyBoYXMgbG93IHByb2JhYmlsaXR5IHRvIGNsb3NlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6ICdMZWJyb24nLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnSmFtZXMnLFxuICAgICAgICAgICAgICAgIGNvbXBhbnk6ICdBbWF6b24nLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiAnQ2xldmVsYW5kLCBPSCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogJ2NvbXBhbnknLFxuICAgICAgICAgICAgZGF0ZUNyZWF0ZWQ6IHRocmVlSG91cnNBZ28sXG4gICAgICAgICAgICBzZW50aW1lbnQ6IHtcbiAgICAgICAgICAgICAgICByYXRpbmc6ICdwb3NpdGl2ZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Nvbm5lY3Rpb24nLFxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6ICdOZXcgY29ubmVjdGlvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnRGVycmljaycsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdSb3NlJyxcbiAgICAgICAgICAgICAgICBjb21wYW55OiAnV2FsbWFydCcsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246ICdDaGljYWdvLCBJTCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV07XG5cbiAgICAgICAgdGhpcy5wdWxzZUl0ZW1zID0gW107XG5cbiAgICAgICAgdGhpcy5idWlsZEl0ZW1zKG1vY2tSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgYnVpbGRJdGVtcyhyZXNwKSB7XG4gICAgICAgIGZvciAobGV0IG9iaiBvZiByZXNwKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHt9O1xuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgIHx8fCBUaGlzIGlzIHRoZSBpdGVtIHN0cnVjdHVyZSB0byBiZSBwdXNoZWQgdG8gcHVsc2VJdGVtc1tdIGFuZCB1c2VkXG4gICAgICAgICAgICAgfHx8IHRvIGJ1aWxkIHRoZSBsaXN0ICYgaXRlbXMuXG4gICAgICAgICAgICAgfFxuICAgICAgICAgICAgIHwgICBpdGVtID0ge1xuICAgICAgICAgICAgIHwgICAgICAgXCJuYW1lXCI6ICcnLFxuICAgICAgICAgICAgIHwgICAgICAgXCJ0eXBlXCI6ICcnLFxuICAgICAgICAgICAgIHwgICAgICAgXCJpY29uXCI6IHtcbiAgICAgICAgICAgICB8ICAgICAgICAgICBcIm5hbWVcIjogJycsXG4gICAgICAgICAgICAgfCAgICAgICAgICAgXCJzZW50aW1lbnRcIjogJydcbiAgICAgICAgICAgICB8ICAgICAgIH0sXG4gICAgICAgICAgICAgfCAgICAgICBcImNvbW1lbnRcIjogJycsXG4gICAgICAgICAgICAgfCAgICAgICBcInRpbWVBZ29cIjogJydcbiAgICAgICAgICAgICB8ICAgIH1cbiAgICAgICAgICAgICB8XG4gICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgaXRlbS5uYW1lID0gb2JqLnVzZXIuY29tcGFueTtcbiAgICAgICAgICAgIGl0ZW0udHlwZSA9IG9iai50eXBlO1xuICAgICAgICAgICAgaXRlbS5pY29uID0ge307XG5cbiAgICAgICAgICAgIGlmIChvYmouc2VudGltZW50LnR5cGUgPT09ICdjb25uZWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGl0ZW0uaWNvbi5uYW1lID0gJ2JoaS1hZGQtbyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvYmouc2VudGltZW50LnR5cGUgPT09ICdlbmdhZ2VtZW50Jykge1xuICAgICAgICAgICAgICAgIGl0ZW0uaWNvbi5uYW1lID0gKG9iai5zZW50aW1lbnQucmF0aW5nID09PSAncG9zaXRpdmUnKSA/ICdiaGktdHJlbmRpbmctdXAnIDogJ2JoaS10cmVuZGluZy1kb3duJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9iai5zZW50aW1lbnQudHlwZSA9PT0gJ3Byb2JhYmlsaXR5Jykge1xuICAgICAgICAgICAgICAgIGl0ZW0uaWNvbi5uYW1lID0gKG9iai5zZW50aW1lbnQucmF0aW5nID09PSAncG9zaXRpdmUnKSA/ICdiaGktYmFyLXBvc2l0aXZlJyA6ICdiaGktYmFyLW5lZ2F0aXZlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbS5pY29uLnNlbnRpbWVudCA9IG9iai5zZW50aW1lbnQucmF0aW5nO1xuICAgICAgICAgICAgaXRlbS5jb21tZW50ID0gb2JqLnNlbnRpbWVudC5jb21tZW50O1xuICAgICAgICAgICAgaXRlbS50aW1lQWdvID0gb2JqLmRhdGVDcmVhdGVkO1xuXG4gICAgICAgICAgICB0aGlzLnB1bHNlSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 854:
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-list direction=\"vertical\">\n        <novo-list-item *ngFor=\"let item of pulseItems\">\n            <item-avatar [icon]=\"item.type\"></item-avatar>\n            <item-title>{{item.name}}</item-title>\n            <item-content direction=\"vertical\">\n                <p>\n                    <i *ngIf=\"item.icon.name\" class=\"{{item.icon.name}} {{item.icon.sentiment}}\"></i>\n                    {{item.comment}}\n                </p>\n                <span>\n                    <i class=\"bhi-clock\"></i>\n                    {{item.timeAgo | date: 'shortTime'}}\n                </span>\n            </item-content>\n            <item-end>\n                <i class=\"bhi-next\"></i>\n            </item-end>\n        </novo-list-item>\n    </novo-list>\n</header>\n"

/***/ },

/***/ 855:
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-list theme=\"navigation\" direction=\"vertical\">\n        <novo-list-item *ngFor=\"let item of pulseItems\">\n            <item-avatar [icon]=\"item.type\"></item-avatar>\n            <item-title>{{item.name}}</item-title>\n            <item-content direction=\"vertical\">\n                <p>\n                    <i *ngIf=\"item.icon.name\" class=\"{{item.icon.name}} {{item.icon.sentiment}}\"></i>\n                    {{item.comment}}\n                </p>\n                <span>\n                    <i class=\"bhi-clock\"></i>\n                    {{item.timeAgo | date: 'shortTime'}}\n                </span>\n            </item-content>\n            <item-end>\n                <i class=\"bhi-next\"></i>\n            </item-end>\n        </novo-list-item>\n    </novo-list>\n</header>\n"

/***/ },

/***/ 747:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LoadingDemoComponent = undefined;
	
	var _dec, _class; // NG2
	
	// APP
	
	
	var _core = __webpack_require__(1);
	
	var _LoadingCircleDemo = __webpack_require__(856);
	
	var _LoadingCircleDemo2 = _interopRequireDefault(_LoadingCircleDemo);
	
	var _LoadingLineDemo = __webpack_require__(857);
	
	var _LoadingLineDemo2 = _interopRequireDefault(_LoadingLineDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Loading Animations <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/loading">(source)</a></small></h1>\n    <p>Loading animations are used to help indicate to the user that some sort of progress is taking place. These are especially helpful for intensive operations that might take extra time.</p>\n\n    <h2>Themes</h2>\n\n    <h5>Line</h5>\n    <p>The Dot Line animation is indeterminate.</p>\n    <div class="example loading-line-demo">' + _LoadingLineDemo2.default + '</div>\n    <code-snippet [code]="LoadingLineDemoTpl"></code-snippet>\n\n    <h5>Spinner</h5>\n    <p>\n        The Dot Spinner animation is used as an alternate to the loading line animation.\n    </p>\n    <div class="example loading-spinner-demo">' + _LoadingCircleDemo2.default + '</div>\n    <code-snippet [code]="LoadingCircleDemoTpl"></code-snippet>\n</div>\n';
	
	var LoadingDemoComponent = exports.LoadingDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'loading-demo',
	    template: template
	}), _dec(_class = function LoadingDemoComponent() {
	    _classCallCheck(this, LoadingDemoComponent);
	
	    this.LoadingCircleDemoTpl = _LoadingCircleDemo2.default;
	    this.LoadingLineDemoTpl = _LoadingLineDemo2.default;
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvbG9hZGluZy9Mb2FkaW5nRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O2tCQUFBOztBQUVBOzs7QUFEQTs7QUFFQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sdzZCQUFOOztJQXlCYSxvQixXQUFBLG9CLFdBSloscUJBQVU7QUFDUCxjQUFVLGNBREg7QUFFUCxjQUFVO0FBRkgsQ0FBVixDLGdCQUtHLGdDQUFjO0FBQUE7O0FBQ1YsU0FBSyxvQkFBTDtBQUNBLFNBQUssa0JBQUw7QUFDSCxDIiwiZmlsZSI6IkxvYWRpbmdEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgTG9hZGluZ0NpcmNsZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvTG9hZGluZ0NpcmNsZURlbW8uaHRtbCc7XG5pbXBvcnQgTG9hZGluZ0xpbmVEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0xvYWRpbmdMaW5lRGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPkxvYWRpbmcgQW5pbWF0aW9ucyA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy9sb2FkaW5nXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPkxvYWRpbmcgYW5pbWF0aW9ucyBhcmUgdXNlZCB0byBoZWxwIGluZGljYXRlIHRvIHRoZSB1c2VyIHRoYXQgc29tZSBzb3J0IG9mIHByb2dyZXNzIGlzIHRha2luZyBwbGFjZS4gVGhlc2UgYXJlIGVzcGVjaWFsbHkgaGVscGZ1bCBmb3IgaW50ZW5zaXZlIG9wZXJhdGlvbnMgdGhhdCBtaWdodCB0YWtlIGV4dHJhIHRpbWUuPC9wPlxuXG4gICAgPGgyPlRoZW1lczwvaDI+XG5cbiAgICA8aDU+TGluZTwvaDU+XG4gICAgPHA+VGhlIERvdCBMaW5lIGFuaW1hdGlvbiBpcyBpbmRldGVybWluYXRlLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBsb2FkaW5nLWxpbmUtZGVtb1wiPiR7TG9hZGluZ0xpbmVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiTG9hZGluZ0xpbmVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+U3Bpbm5lcjwvaDU+XG4gICAgPHA+XG4gICAgICAgIFRoZSBEb3QgU3Bpbm5lciBhbmltYXRpb24gaXMgdXNlZCBhcyBhbiBhbHRlcm5hdGUgdG8gdGhlIGxvYWRpbmcgbGluZSBhbmltYXRpb24uXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGxvYWRpbmctc3Bpbm5lci1kZW1vXCI+JHtMb2FkaW5nQ2lyY2xlRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkxvYWRpbmdDaXJjbGVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbG9hZGluZy1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0RlbW9Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLkxvYWRpbmdDaXJjbGVEZW1vVHBsID0gTG9hZGluZ0NpcmNsZURlbW9UcGw7XG4gICAgICAgIHRoaXMuTG9hZGluZ0xpbmVEZW1vVHBsID0gTG9hZGluZ0xpbmVEZW1vVHBsO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 856:
/***/ function(module, exports) {

	module.exports = "<section>\n    <div class=\"whiteBg\">\n        <novo-spinner theme=\"multicolor\"></novo-spinner>\n    </div>\n    <div class=\"grayBg\">\n        <novo-spinner></novo-spinner>\n    </div>\n</section>\n<section>\n    <div class=\"blueBg\">\n        <novo-spinner inverse></novo-spinner>\n    </div>\n    <div class=\"darkBlueBg\">\n        <novo-spinner theme=\"bittersweet\"></novo-spinner>\n    </div>\n</section>\n"

/***/ },

/***/ 857:
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-loading></novo-loading>\n</header>\n<header class=\"color-container\">\n    <novo-loading inverse></novo-loading>\n</header>\n"

/***/ },

/***/ 748:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ModalDemoComponent = exports.ModalEditDemo = exports.ModalAddDemo = exports.ModalCustomDemo = exports.ModalErrorDemo = exports.ModalWarningDemo = exports.ModalSuccessDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class, _dec2, _class2, _dec3, _class3, _dec4, _class4, _dec5, _class5, _dec6, _class6, _dec7, _class7; // NG2
	
	// APP
	
	// Vendor
	
	
	var _core = __webpack_require__(1);
	
	var _ModalAddDemo = __webpack_require__(858);
	
	var _ModalAddDemo2 = _interopRequireDefault(_ModalAddDemo);
	
	var _ModalEditDemo = __webpack_require__(860);
	
	var _ModalEditDemo2 = _interopRequireDefault(_ModalEditDemo);
	
	var _ModalErrorDemo = __webpack_require__(861);
	
	var _ModalErrorDemo2 = _interopRequireDefault(_ModalErrorDemo);
	
	var _ModalCustomDemo = __webpack_require__(859);
	
	var _ModalCustomDemo2 = _interopRequireDefault(_ModalCustomDemo);
	
	var _ModalSuccessDemo = __webpack_require__(862);
	
	var _ModalSuccessDemo2 = _interopRequireDefault(_ModalSuccessDemo);
	
	var _ModalWarningDemo = __webpack_require__(863);
	
	var _ModalWarningDemo2 = _interopRequireDefault(_ModalWarningDemo);
	
	var _novoElements = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Modals <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/modal">(source)</a></small></h1>\n    <p>Modals are pop-up dialogues designed to grab attention and inform the user of something critical, force a decision, or extend a workflow. There are two categories of modals: notification and workflow. Regardless of type, a modal should have a maximum of two main buttons.</p>\n\n    <h2>Notification Modals</h2>\n\n    <h5>Success</h5>\n    <p>This modal uses only a primary action button. It is a confirmation that an action has been completed when the result is not immediately apparent. A workflow modal often transitions into a success modal.</p>\n    <div class="example modal-demo"><button theme="secondary" (click)="showSuccess()">Show Me :)</button></div>\n    <code-snippet [code]="ModalSuccessDemoTpl"></code-snippet>\n\n    <h5>Warning</h5>\n    <p>Warning modals ask for additional confirmation to complete an action because the action is either irreversible or there is an exception. The first line should always clarify the action or eventual result.</p>\n      <div class="example modal-demo"><button theme="secondary" (click)="showWarning()">Show Me :)</button></div>\n    <code-snippet [code]="ModalWarningDemoTpl"></code-snippet>\n\n    <h5>Error</h5>\n    <p>Error modals indicate that an attempted action has failed. The first line should apologize and state the what happened. The second line should quickly attempt to explain to the user why this has happened, and instruct the user on the best course of action.</p>\n    <div class="example modal-demo"><button theme="secondary" (click)="showError()">Show Me :)</button></div>\n    <code-snippet [code]="ModalErrorDemoTpl"></code-snippet>\n\n    <h5>Custom</h5>\n    <p>In the case where "Success", "Warning", and "Error" notfications aren\'t enough, use the custom notification. Custom notifcations allow any of the Bullhorn Icons to be used in the notification.</p>\n    <div class="example modal-demo"><button theme="secondary" (click)="showCustom()">Show Me :)</button></div>\n    <code-snippet [code]="ModalCustomDemoTpl"></code-snippet>\n\n    <h2>Workflow Modals</h2>\n\n    <h5>Add</h5>\n    <p>Add modals have a colored title bar based on the record type being created. Additionally, due to a greater than average amount of content, they have fixed footers.</p>\n    <div class="example modal-demo"><button theme="secondary" (click)="showAdd()">Show Me :)</button></div>\n    <code-snippet [code]="ModalAddDemoTpl"></code-snippet>\n\n    <h5>Edit & Send</h5>\n    <p>Edit, Send, and non-Add workflow modals possess a plain header to remind the user of the action they are taking. They generally have a neutralizing button, and a primary button.</p>\n    <div class="example modal-demo"><button data-automation-id="modal-trigger" theme="secondary" (click)="showEdit()">Show Me :)</button></div>\n    <code-snippet [code]="ModalEditDemoTpl"></code-snippet>\n</div>\n';
	
	var ModalSuccessDemo = exports.ModalSuccessDemo = (_dec = (0, _core.Component)({
	    selector: 'modal-success-demo',
	    template: _ModalSuccessDemo2.default
	}), _dec(_class = function () {
	    function ModalSuccessDemo(modalRef) {
	        _classCallCheck(this, ModalSuccessDemo);
	
	        this.modalRef = modalRef;
	    }
	
	    _createClass(ModalSuccessDemo, [{
	        key: 'close',
	        value: function close() {
	            this.modalRef.close();
	        }
	    }]);
	
	    return ModalSuccessDemo;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_novoElements.NovoModalRef], ModalSuccessDemo);
	var ModalWarningDemo = exports.ModalWarningDemo = (_dec2 = (0, _core.Component)({
	    selector: 'modal-warning-demo',
	    template: _ModalWarningDemo2.default
	}), _dec2(_class2 = function () {
	    function ModalWarningDemo(modalRef) {
	        _classCallCheck(this, ModalWarningDemo);
	
	        this.modalRef = modalRef;
	    }
	
	    _createClass(ModalWarningDemo, [{
	        key: 'close',
	        value: function close() {
	            this.modalRef.close();
	        }
	    }]);
	
	    return ModalWarningDemo;
	}()) || _class2);
	Reflect.defineMetadata('design:paramtypes', [_novoElements.NovoModalRef], ModalWarningDemo);
	var ModalErrorDemo = exports.ModalErrorDemo = (_dec3 = (0, _core.Component)({
	    selector: 'modal-error-demo',
	    template: _ModalErrorDemo2.default
	}), _dec3(_class3 = function () {
	    function ModalErrorDemo(modalRef) {
	        _classCallCheck(this, ModalErrorDemo);
	
	        this.modalRef = modalRef;
	    }
	
	    _createClass(ModalErrorDemo, [{
	        key: 'close',
	        value: function close() {
	            this.modalRef.close();
	        }
	    }]);
	
	    return ModalErrorDemo;
	}()) || _class3);
	Reflect.defineMetadata('design:paramtypes', [_novoElements.NovoModalRef], ModalErrorDemo);
	var ModalCustomDemo = exports.ModalCustomDemo = (_dec4 = (0, _core.Component)({
	    selector: 'modal-custom-demo',
	    template: _ModalCustomDemo2.default
	}), _dec4(_class4 = function () {
	    function ModalCustomDemo(modalRef) {
	        _classCallCheck(this, ModalCustomDemo);
	
	        this.modalRef = modalRef;
	    }
	
	    _createClass(ModalCustomDemo, [{
	        key: 'close',
	        value: function close() {
	            this.modalRef.close();
	        }
	    }]);
	
	    return ModalCustomDemo;
	}()) || _class4);
	Reflect.defineMetadata('design:paramtypes', [_novoElements.NovoModalRef], ModalCustomDemo);
	var ModalAddDemo = exports.ModalAddDemo = (_dec5 = (0, _core.Component)({
	    selector: 'modal-add-demo',
	    template: _ModalAddDemo2.default
	}), _dec5(_class5 = function () {
	    function ModalAddDemo(modalRef) {
	        _classCallCheck(this, ModalAddDemo);
	
	        this.modalRef = modalRef;
	    }
	
	    _createClass(ModalAddDemo, [{
	        key: 'close',
	        value: function close() {
	            this.modalRef.close();
	        }
	    }]);
	
	    return ModalAddDemo;
	}()) || _class5);
	Reflect.defineMetadata('design:paramtypes', [_novoElements.NovoModalRef], ModalAddDemo);
	var ModalEditDemo = exports.ModalEditDemo = (_dec6 = (0, _core.Component)({
	    selector: 'modal-edit-demo',
	    template: _ModalEditDemo2.default
	}), _dec6(_class6 = function () {
	    function ModalEditDemo(modalRef) {
	        _classCallCheck(this, ModalEditDemo);
	
	        this.modalRef = modalRef;
	    }
	
	    _createClass(ModalEditDemo, [{
	        key: 'close',
	        value: function close() {
	            this.modalRef.close();
	        }
	    }]);
	
	    return ModalEditDemo;
	}()) || _class6);
	Reflect.defineMetadata('design:paramtypes', [_novoElements.NovoModalRef], ModalEditDemo);
	var ModalDemoComponent = exports.ModalDemoComponent = (_dec7 = (0, _core.Component)({
	    selector: 'modal-demo',
	    template: template
	}), _dec7(_class7 = function () {
	    function ModalDemoComponent(modalService) {
	        _classCallCheck(this, ModalDemoComponent);
	
	        this.modalService = modalService;
	        this.ModalAddDemoTpl = _ModalAddDemo2.default;
	        this.ModalEditDemoTpl = _ModalEditDemo2.default;
	        this.ModalErrorDemoTpl = _ModalErrorDemo2.default;
	        this.ModalCustomDemoTpl = _ModalCustomDemo2.default;
	        this.ModalSuccessDemoTpl = _ModalSuccessDemo2.default;
	        this.ModalWarningDemoTpl = _ModalWarningDemo2.default;
	    }
	
	    _createClass(ModalDemoComponent, [{
	        key: 'showSuccess',
	        value: function showSuccess() {
	            this.modalService.open(ModalSuccessDemo);
	        }
	    }, {
	        key: 'showWarning',
	        value: function showWarning() {
	            this.modalService.open(ModalWarningDemo);
	        }
	    }, {
	        key: 'showError',
	        value: function showError() {
	            this.modalService.open(ModalErrorDemo);
	        }
	    }, {
	        key: 'showCustom',
	        value: function showCustom() {
	            this.modalService.open(ModalCustomDemo);
	        }
	    }, {
	        key: 'showAdd',
	        value: function showAdd() {
	            this.modalService.open(ModalAddDemo);
	        }
	    }, {
	        key: 'showEdit',
	        value: function showEdit() {
	            this.modalService.open(ModalEditDemo);
	        }
	    }]);
	
	    return ModalDemoComponent;
	}()) || _class7);
	Reflect.defineMetadata('design:paramtypes', [_novoElements.NovoModalService], ModalDemoComponent);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvbW9kYWwvTW9kYWxEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztrSEFBQTs7QUFFQTs7QUFPQTs7O0FBUkE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU0saStGQUFOOztJQTZDYSxnQixXQUFBLGdCLFdBSloscUJBQVU7QUFDUCxjQUFVLG9CQURIO0FBRVA7QUFGTyxDQUFWLEM7QUFLRyw4QkFBWSxRQUFaLEVBQW1DO0FBQUE7O0FBQy9CLGFBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNIOzs7O2dDQUVPO0FBQ0osaUJBQUssUUFBTCxDQUFjLEtBQWQ7QUFDSDs7Ozs7MEVBUFEsZ0I7SUFjQSxnQixXQUFBLGdCLFlBSloscUJBQVU7QUFDUCxjQUFVLG9CQURIO0FBRVA7QUFGTyxDQUFWLEM7QUFLRyw4QkFBWSxRQUFaLEVBQW1DO0FBQUE7O0FBQy9CLGFBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNIOzs7O2dDQUVPO0FBQ0osaUJBQUssUUFBTCxDQUFjLEtBQWQ7QUFDSDs7Ozs7MEVBUFEsZ0I7SUFjQSxjLFdBQUEsYyxZQUpaLHFCQUFVO0FBQ1AsY0FBVSxrQkFESDtBQUVQO0FBRk8sQ0FBVixDO0FBS0csNEJBQVksUUFBWixFQUFtQztBQUFBOztBQUMvQixhQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDSDs7OztnQ0FFTztBQUNKLGlCQUFLLFFBQUwsQ0FBYyxLQUFkO0FBQ0g7Ozs7OzBFQVBRLGM7SUFjQSxlLFdBQUEsZSxZQUpaLHFCQUFVO0FBQ1AsY0FBVSxtQkFESDtBQUVQO0FBRk8sQ0FBVixDO0FBS0csNkJBQVksUUFBWixFQUFtQztBQUFBOztBQUMvQixhQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDSDs7OztnQ0FFTztBQUNKLGlCQUFLLFFBQUwsQ0FBYyxLQUFkO0FBQ0g7Ozs7OzBFQVBRLGU7SUFjQSxZLFdBQUEsWSxZQUpaLHFCQUFVO0FBQ1AsY0FBVSxnQkFESDtBQUVQO0FBRk8sQ0FBVixDO0FBS0csMEJBQVksUUFBWixFQUFtQztBQUFBOztBQUMvQixhQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDSDs7OztnQ0FFTztBQUNKLGlCQUFLLFFBQUwsQ0FBYyxLQUFkO0FBQ0g7Ozs7OzBFQVBRLFk7SUFjQSxhLFdBQUEsYSxZQUpaLHFCQUFVO0FBQ1AsY0FBVSxpQkFESDtBQUVQO0FBRk8sQ0FBVixDO0FBS0csMkJBQVksUUFBWixFQUFtQztBQUFBOztBQUMvQixhQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDSDs7OztnQ0FFTztBQUNKLGlCQUFLLFFBQUwsQ0FBYyxLQUFkO0FBQ0g7Ozs7OzBFQVBRLGE7SUFjQSxrQixXQUFBLGtCLFlBSloscUJBQVU7QUFDUCxjQUFVLFlBREg7QUFFUCxjQUFVO0FBRkgsQ0FBVixDO0FBS0csZ0NBQVksWUFBWixFQUEyQztBQUFBOztBQUN2QyxhQUFLLFlBQUwsR0FBb0IsWUFBcEI7QUFDQSxhQUFLLGVBQUw7QUFDQSxhQUFLLGdCQUFMO0FBQ0EsYUFBSyxpQkFBTDtBQUNBLGFBQUssa0JBQUw7QUFDQSxhQUFLLG1CQUFMO0FBQ0EsYUFBSyxtQkFBTDtBQUNIOzs7O3NDQUVhO0FBQ1YsaUJBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixnQkFBdkI7QUFDSDs7O3NDQUVhO0FBQ1YsaUJBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixnQkFBdkI7QUFDSDs7O29DQUVXO0FBQ1IsaUJBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixjQUF2QjtBQUNIOzs7cUNBRVk7QUFDVCxpQkFBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLGVBQXZCO0FBQ0g7OztrQ0FFUztBQUNOLGlCQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsWUFBdkI7QUFDSDs7O21DQUVVO0FBQ1AsaUJBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixhQUF2QjtBQUNIOzs7Ozs4RUFqQ1Esa0IiLCJmaWxlIjoiTW9kYWxEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgTW9kYWxBZGREZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL01vZGFsQWRkRGVtby5odG1sJztcbmltcG9ydCBNb2RhbEVkaXREZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL01vZGFsRWRpdERlbW8uaHRtbCc7XG5pbXBvcnQgTW9kYWxFcnJvckRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvTW9kYWxFcnJvckRlbW8uaHRtbCc7XG5pbXBvcnQgTW9kYWxDdXN0b21EZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL01vZGFsQ3VzdG9tRGVtby5odG1sJztcbmltcG9ydCBNb2RhbFN1Y2Nlc3NEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL01vZGFsU3VjY2Vzc0RlbW8uaHRtbCc7XG5pbXBvcnQgTW9kYWxXYXJuaW5nRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9Nb2RhbFdhcm5pbmdEZW1vLmh0bWwnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBOb3ZvTW9kYWxSZWYsIE5vdm9Nb2RhbFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPk1vZGFscyA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy9tb2RhbFwiPihzb3VyY2UpPC9hPjwvc21hbGw+PC9oMT5cbiAgICA8cD5Nb2RhbHMgYXJlIHBvcC11cCBkaWFsb2d1ZXMgZGVzaWduZWQgdG8gZ3JhYiBhdHRlbnRpb24gYW5kIGluZm9ybSB0aGUgdXNlciBvZiBzb21ldGhpbmcgY3JpdGljYWwsIGZvcmNlIGEgZGVjaXNpb24sIG9yIGV4dGVuZCBhIHdvcmtmbG93LiBUaGVyZSBhcmUgdHdvIGNhdGVnb3JpZXMgb2YgbW9kYWxzOiBub3RpZmljYXRpb24gYW5kIHdvcmtmbG93LiBSZWdhcmRsZXNzIG9mIHR5cGUsIGEgbW9kYWwgc2hvdWxkIGhhdmUgYSBtYXhpbXVtIG9mIHR3byBtYWluIGJ1dHRvbnMuPC9wPlxuXG4gICAgPGgyPk5vdGlmaWNhdGlvbiBNb2RhbHM8L2gyPlxuXG4gICAgPGg1PlN1Y2Nlc3M8L2g1PlxuICAgIDxwPlRoaXMgbW9kYWwgdXNlcyBvbmx5IGEgcHJpbWFyeSBhY3Rpb24gYnV0dG9uLiBJdCBpcyBhIGNvbmZpcm1hdGlvbiB0aGF0IGFuIGFjdGlvbiBoYXMgYmVlbiBjb21wbGV0ZWQgd2hlbiB0aGUgcmVzdWx0IGlzIG5vdCBpbW1lZGlhdGVseSBhcHBhcmVudC4gQSB3b3JrZmxvdyBtb2RhbCBvZnRlbiB0cmFuc2l0aW9ucyBpbnRvIGEgc3VjY2VzcyBtb2RhbC48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgbW9kYWwtZGVtb1wiPjxidXR0b24gdGhlbWU9XCJzZWNvbmRhcnlcIiAoY2xpY2spPVwic2hvd1N1Y2Nlc3MoKVwiPlNob3cgTWUgOik8L2J1dHRvbj48L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIk1vZGFsU3VjY2Vzc0RlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5XYXJuaW5nPC9oNT5cbiAgICA8cD5XYXJuaW5nIG1vZGFscyBhc2sgZm9yIGFkZGl0aW9uYWwgY29uZmlybWF0aW9uIHRvIGNvbXBsZXRlIGFuIGFjdGlvbiBiZWNhdXNlIHRoZSBhY3Rpb24gaXMgZWl0aGVyIGlycmV2ZXJzaWJsZSBvciB0aGVyZSBpcyBhbiBleGNlcHRpb24uIFRoZSBmaXJzdCBsaW5lIHNob3VsZCBhbHdheXMgY2xhcmlmeSB0aGUgYWN0aW9uIG9yIGV2ZW50dWFsIHJlc3VsdC48L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBtb2RhbC1kZW1vXCI+PGJ1dHRvbiB0aGVtZT1cInNlY29uZGFyeVwiIChjbGljayk9XCJzaG93V2FybmluZygpXCI+U2hvdyBNZSA6KTwvYnV0dG9uPjwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiTW9kYWxXYXJuaW5nRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PkVycm9yPC9oNT5cbiAgICA8cD5FcnJvciBtb2RhbHMgaW5kaWNhdGUgdGhhdCBhbiBhdHRlbXB0ZWQgYWN0aW9uIGhhcyBmYWlsZWQuIFRoZSBmaXJzdCBsaW5lIHNob3VsZCBhcG9sb2dpemUgYW5kIHN0YXRlIHRoZSB3aGF0IGhhcHBlbmVkLiBUaGUgc2Vjb25kIGxpbmUgc2hvdWxkIHF1aWNrbHkgYXR0ZW1wdCB0byBleHBsYWluIHRvIHRoZSB1c2VyIHdoeSB0aGlzIGhhcyBoYXBwZW5lZCwgYW5kIGluc3RydWN0IHRoZSB1c2VyIG9uIHRoZSBiZXN0IGNvdXJzZSBvZiBhY3Rpb24uPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIG1vZGFsLWRlbW9cIj48YnV0dG9uIHRoZW1lPVwic2Vjb25kYXJ5XCIgKGNsaWNrKT1cInNob3dFcnJvcigpXCI+U2hvdyBNZSA6KTwvYnV0dG9uPjwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiTW9kYWxFcnJvckRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5DdXN0b208L2g1PlxuICAgIDxwPkluIHRoZSBjYXNlIHdoZXJlIFwiU3VjY2Vzc1wiLCBcIldhcm5pbmdcIiwgYW5kIFwiRXJyb3JcIiBub3RmaWNhdGlvbnMgYXJlbid0IGVub3VnaCwgdXNlIHRoZSBjdXN0b20gbm90aWZpY2F0aW9uLiBDdXN0b20gbm90aWZjYXRpb25zIGFsbG93IGFueSBvZiB0aGUgQnVsbGhvcm4gSWNvbnMgdG8gYmUgdXNlZCBpbiB0aGUgbm90aWZpY2F0aW9uLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBtb2RhbC1kZW1vXCI+PGJ1dHRvbiB0aGVtZT1cInNlY29uZGFyeVwiIChjbGljayk9XCJzaG93Q3VzdG9tKClcIj5TaG93IE1lIDopPC9idXR0b24+PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJNb2RhbEN1c3RvbURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoMj5Xb3JrZmxvdyBNb2RhbHM8L2gyPlxuXG4gICAgPGg1PkFkZDwvaDU+XG4gICAgPHA+QWRkIG1vZGFscyBoYXZlIGEgY29sb3JlZCB0aXRsZSBiYXIgYmFzZWQgb24gdGhlIHJlY29yZCB0eXBlIGJlaW5nIGNyZWF0ZWQuIEFkZGl0aW9uYWxseSwgZHVlIHRvIGEgZ3JlYXRlciB0aGFuIGF2ZXJhZ2UgYW1vdW50IG9mIGNvbnRlbnQsIHRoZXkgaGF2ZSBmaXhlZCBmb290ZXJzLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBtb2RhbC1kZW1vXCI+PGJ1dHRvbiB0aGVtZT1cInNlY29uZGFyeVwiIChjbGljayk9XCJzaG93QWRkKClcIj5TaG93IE1lIDopPC9idXR0b24+PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJNb2RhbEFkZERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5FZGl0ICYgU2VuZDwvaDU+XG4gICAgPHA+RWRpdCwgU2VuZCwgYW5kIG5vbi1BZGQgd29ya2Zsb3cgbW9kYWxzIHBvc3Nlc3MgYSBwbGFpbiBoZWFkZXIgdG8gcmVtaW5kIHRoZSB1c2VyIG9mIHRoZSBhY3Rpb24gdGhleSBhcmUgdGFraW5nLiBUaGV5IGdlbmVyYWxseSBoYXZlIGEgbmV1dHJhbGl6aW5nIGJ1dHRvbiwgYW5kIGEgcHJpbWFyeSBidXR0b24uPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIG1vZGFsLWRlbW9cIj48YnV0dG9uIGRhdGEtYXV0b21hdGlvbi1pZD1cIm1vZGFsLXRyaWdnZXJcIiB0aGVtZT1cInNlY29uZGFyeVwiIChjbGljayk9XCJzaG93RWRpdCgpXCI+U2hvdyBNZSA6KTwvYnV0dG9uPjwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiTW9kYWxFZGl0RGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZGFsLXN1Y2Nlc3MtZGVtbycsXG4gICAgdGVtcGxhdGU6IE1vZGFsU3VjY2Vzc0RlbW9UcGxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxTdWNjZXNzRGVtbyB7XG4gICAgY29uc3RydWN0b3IobW9kYWxSZWY6Tm92b01vZGFsUmVmKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSBtb2RhbFJlZjtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5tb2RhbFJlZi5jbG9zZSgpO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2RhbC13YXJuaW5nLWRlbW8nLFxuICAgIHRlbXBsYXRlOiBNb2RhbFdhcm5pbmdEZW1vVHBsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsV2FybmluZ0RlbW8ge1xuICAgIGNvbnN0cnVjdG9yKG1vZGFsUmVmOk5vdm9Nb2RhbFJlZikge1xuICAgICAgICB0aGlzLm1vZGFsUmVmID0gbW9kYWxSZWY7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYuY2xvc2UoKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kYWwtZXJyb3ItZGVtbycsXG4gICAgdGVtcGxhdGU6IE1vZGFsRXJyb3JEZW1vVHBsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsRXJyb3JEZW1vIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2RhbFJlZjpOb3ZvTW9kYWxSZWYpIHtcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IG1vZGFsUmVmO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKCk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZGFsLWN1c3RvbS1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogTW9kYWxDdXN0b21EZW1vVHBsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ3VzdG9tRGVtbyB7XG4gICAgY29uc3RydWN0b3IobW9kYWxSZWY6Tm92b01vZGFsUmVmKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSBtb2RhbFJlZjtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5tb2RhbFJlZi5jbG9zZSgpO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2RhbC1hZGQtZGVtbycsXG4gICAgdGVtcGxhdGU6IE1vZGFsQWRkRGVtb1RwbFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbEFkZERlbW8ge1xuICAgIGNvbnN0cnVjdG9yKG1vZGFsUmVmOk5vdm9Nb2RhbFJlZikge1xuICAgICAgICB0aGlzLm1vZGFsUmVmID0gbW9kYWxSZWY7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYuY2xvc2UoKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kYWwtZWRpdC1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogTW9kYWxFZGl0RGVtb1RwbFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbEVkaXREZW1vIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2RhbFJlZjpOb3ZvTW9kYWxSZWYpIHtcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IG1vZGFsUmVmO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKCk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZGFsLWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbERlbW9Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKG1vZGFsU2VydmljZTpOb3ZvTW9kYWxTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlID0gbW9kYWxTZXJ2aWNlO1xuICAgICAgICB0aGlzLk1vZGFsQWRkRGVtb1RwbCA9IE1vZGFsQWRkRGVtb1RwbDtcbiAgICAgICAgdGhpcy5Nb2RhbEVkaXREZW1vVHBsID0gTW9kYWxFZGl0RGVtb1RwbDtcbiAgICAgICAgdGhpcy5Nb2RhbEVycm9yRGVtb1RwbCA9IE1vZGFsRXJyb3JEZW1vVHBsO1xuICAgICAgICB0aGlzLk1vZGFsQ3VzdG9tRGVtb1RwbCA9IE1vZGFsQ3VzdG9tRGVtb1RwbDtcbiAgICAgICAgdGhpcy5Nb2RhbFN1Y2Nlc3NEZW1vVHBsID0gTW9kYWxTdWNjZXNzRGVtb1RwbDtcbiAgICAgICAgdGhpcy5Nb2RhbFdhcm5pbmdEZW1vVHBsID0gTW9kYWxXYXJuaW5nRGVtb1RwbDtcbiAgICB9XG5cbiAgICBzaG93U3VjY2VzcygpIHtcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihNb2RhbFN1Y2Nlc3NEZW1vKTtcbiAgICB9XG5cbiAgICBzaG93V2FybmluZygpIHtcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihNb2RhbFdhcm5pbmdEZW1vKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IoKSB7XG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oTW9kYWxFcnJvckRlbW8pO1xuICAgIH1cblxuICAgIHNob3dDdXN0b20oKSB7XG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oTW9kYWxDdXN0b21EZW1vKTtcbiAgICB9XG5cbiAgICBzaG93QWRkKCkge1xuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKE1vZGFsQWRkRGVtbyk7XG4gICAgfVxuXG4gICAgc2hvd0VkaXQoKSB7XG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oTW9kYWxFZGl0RGVtbyk7XG4gICAgfVxufVxuIl19

/***/ },

/***/ 858:
/***/ function(module, exports) {

	module.exports = "<novo-modal>\n    <header title=\"Add Contact\" icon=\"person\" theme=\"contact\">\n        <utils>\n            <util-action icon=\"times\" (click)=\"toggleClose($event)\"></util-action>\n        </utils>\n    </header>\n    <section>\n        <novo-form>\n            <form-field>\n                <form-label>First Name</form-label>\n                <form-input name=\"firstName\" type=\"text\" placeholder=\"Jack\"></form-input>\n            </form-field>\n            <form-field>\n                <form-label>Last Name</form-label>\n                <form-input name=\"lastName\" type=\"text\" placeholder=\"White\"></form-input>\n            </form-field>\n            <form-field>\n                <form-label>Email</form-label>\n                <form-input name=\"email\" type=\"text\" placeholder=\"jwhite@gmail.com\"></form-input>\n            </form-field>\n            <form-field>\n                <form-label>Title</form-label>\n                <form-input name=\"title\" type=\"text\" placeholder=\"Operations Manager\"></form-input>\n            </form-field>\n            <form-field>\n                <form-label>Current Company</form-label>\n                <form-input name=\"company\" type=\"text\" placeholder=\"Amazon\"></form-input>\n            </form-field>\n        </novo-form>\n    </section>\n    <button theme=\"standard\" (click)=\"close()\">Cancel</button>\n    <button theme=\"primary\" color=\"success\" icon=\"check\" (click)=\"close()\">Save</button>\n</novo-modal>\n"

/***/ },

/***/ 859:
/***/ function(module, exports) {

	module.exports = "<novo-notification type=\"custom\" icon=\"trending-up\">\n    <h1>I have a trending icon!</h1>\n    <h4>This notification type allows for any Bullhorn Icon</h4>\n    <button theme=\"primary\" icon=\"check\" (click)=\"close()\">Sweet.</button>\n</novo-notification>\n"

/***/ },

/***/ 860:
/***/ function(module, exports) {

	module.exports = "<novo-modal>\n    <header title=\"John Deere\" icon=\"candidate\" theme=\"candidate\">\n        <utils>\n            <util-action icon=\"times\" (click)=\"toggleClose($event)\"></util-action>\n        </utils>\n    </header>\n    <section>\n        <novo-form>\n            <form-field>\n                <form-label>Status</form-label>\n                <form-input name=\"status\" type=\"select\" [options]=\"statusOptions\" placeholder=\"Status\"></form-input>\n            </form-field>\n            <form-field>\n                <form-label>Start Date</form-label>\n                <form-input name=\"startDate\" type=\"date\" inline=\"true\" placeholder=\"Please select a date\"></form-input>\n            </form-field>\n        </novo-form>\n    </section>\n    <button theme=\"standard\" (click)=\"close()\">Cancel</button>\n    <button theme=\"primary\" color=\"success\" icon=\"check\" (click)=\"close()\">Save</button>\n</novo-modal>\n"

/***/ },

/***/ 861:
/***/ function(module, exports) {

	module.exports = "<novo-notification type=\"error\">\n    <h1>Sorry, something went wrong.</h1>\n    <h4>You did not have 1.21 gigawatts of power.</h4>\n    <button theme=\"primary\" icon=\"refresh-o\" (click)=\"close()\">Refresh this page</button>\n</novo-notification>\n"

/***/ },

/***/ 862:
/***/ function(module, exports) {

	module.exports = "<novo-notification type=\"success\">\n    <h1>Woooo!</h1>\n    <h4>You did something awesome!</h4>\n    <button theme=\"primary\" icon=\"check\" (click)=\"close()\">I'm awesome</button>\n</novo-notification>\n"

/***/ },

/***/ 863:
/***/ function(module, exports) {

	module.exports = "<novo-notification type=\"warning\">\n    <h1>This action will delete 25 records.</h1>\n    <h4>Are you sure you wish to continue?</h4>\n    <button theme=\"standard\" (click)=\"close()\">Cancel</button>\n    <button theme=\"primary\" color=\"negative\" icon=\"delete\" (click)=\"close()\">Delete</button>\n</novo-notification>\n"

/***/ },

/***/ 749:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PickerDemoComponent = exports.CustomPickerResults = undefined;
	
	var _dec, _class, _dec2, _class2; // NG2
	
	// APP
	
	// Vendor
	
	
	var _core = __webpack_require__(1);
	
	var _BasicPickerDemo = __webpack_require__(865);
	
	var _BasicPickerDemo2 = _interopRequireDefault(_BasicPickerDemo);
	
	var _AsyncPickerDemo = __webpack_require__(864);
	
	var _AsyncPickerDemo2 = _interopRequireDefault(_AsyncPickerDemo);
	
	var _FormattedPickerDemo = __webpack_require__(867);
	
	var _FormattedPickerDemo2 = _interopRequireDefault(_FormattedPickerDemo);
	
	var _CustomPickerResultsDemo = __webpack_require__(866);
	
	var _CustomPickerResultsDemo2 = _interopRequireDefault(_CustomPickerResultsDemo);
	
	var _novoElements = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CustomPickerResults = exports.CustomPickerResults = (_dec = (0, _core.Component)({
	    selector: 'custom-picker-results',
	    host: {
	        'class': 'active picker-results'
	    },
	    template: '\n        <novo-loading theme="line" *ngIf="isLoading && !matches.length"></novo-loading>\n        <ul *ngIf="matches.length > 0">\n            <li\n                *ngFor="let match of matches"\n                (click)="selectMatch($event)"\n                [class.active]="match===activeMatch"\n                (mouseenter)="selectActive(match)">\n                **CUSTOM** <b [innerHtml]="highlight(match.label, term)"></b>\n            </li>\n        </ul>\n        <p class="picker-error" *ngIf="hasError">Oops! An error occured.</p>\n        <p class="picker-null" *ngIf="!isLoading && !matches.length && !hasError">No results to display...</p>\n    '
	}), _dec(_class = function (_PickerResults) {
	    _inherits(CustomPickerResults, _PickerResults);
	
	    function CustomPickerResults() {
	        _classCallCheck(this, CustomPickerResults);
	
	        return _possibleConstructorReturn(this, (CustomPickerResults.__proto__ || Object.getPrototypeOf(CustomPickerResults)).apply(this, arguments));
	    }
	
	    return CustomPickerResults;
	}(_novoElements.PickerResults)) || _class);
	
	
	var template = '\n<div class="container">\n    <h1>Picker <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/picker">(source)</a></small></h1>\n    <p>The picker element (<code>input[picker]</code>) represents a control that presents a menu of options. The options\n    within are set by the <code>items</code> attribute. Options can be pre-pickered for the user using the <code>value</code>\n    attribute.</p>\n\n    <br/>\n\n    <h5>Basic Examples</h5>\n    <p>\n        By clicking on the <code>input</code> element, the options list will be displayed.  picker any of the options\n        by clicking on the item in the list.  The value pickered will be displayed and the options list will be removed.\n    </p>\n    <div class="example picker-demo">' + _BasicPickerDemo2.default + '</div>\n    <code-snippet [code]="BasicPickerDemoTpl"></code-snippet>\n\n    <h5>Async Examples</h5>\n    <p>\n        By clicking on the <code>input</code> element, the options list will be displayed.  picker any of the options\n        by clicking on the item in the list.  The value pickered will be displayed and the options list will be removed.\n    </p>\n    <div class="example picker-demo">' + _AsyncPickerDemo2.default + '</div>\n    <code-snippet [code]="AsyncPickerDemoTpl"></code-snippet>\n\n    <h5>Formated Picker Examples</h5>\n    <p>\n        By clicking on the <code>input</code> element, the options list will be displayed.  picker any of the options\n        by clicking on the item in the list.  The value pickered will be displayed and the options list will be removed.\n    </p>\n    <div class="example picker-demo">' + _FormattedPickerDemo2.default + '</div>\n    <code-snippet [code]="FormattedPickerDemoTpl"></code-snippet>\n\n    <h5>Custom Picker Examples</h5>\n    <p>\n        By clicking on the <code>input</code> element, the options list will be displayed.  picker any of the options\n        by clicking on the item in the list.  The value pickered will be displayed and the options list will be removed.\n    </p>\n    <div class="example picker-demo">' + _CustomPickerResultsDemo2.default + '</div>\n    <code-snippet [code]="CustomPickerResultsDemoTpl"></code-snippet>\n</div>\n';
	
	var PickerDemoComponent = exports.PickerDemoComponent = (_dec2 = (0, _core.Component)({
	    selector: 'picker-demo',
	    template: template
	}), _dec2(_class2 = function PickerDemoComponent() {
	    _classCallCheck(this, PickerDemoComponent);
	
	    this.BasicPickerDemoTpl = _BasicPickerDemo2.default;
	    this.AsyncPickerDemoTpl = _AsyncPickerDemo2.default;
	    this.FormattedPickerDemoTpl = _FormattedPickerDemo2.default;
	    this.CustomPickerResultsDemoTpl = _CustomPickerResultsDemo2.default;
	
	    this.placeholder = 'Select...';
	
	    var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
	
	    var abbrieviated = [{
	        value: 'USA',
	        label: 'United States'
	    }, {
	        value: 'GB',
	        label: 'Great Britain'
	    }, {
	        value: 'CA',
	        label: 'Canada'
	    }, {
	        value: 'AU',
	        label: 'Austrailia'
	    }];
	
	    var collaborators = [{
	        id: 1,
	        firstName: 'Brian',
	        lastName: 'Kimball'
	    }, {
	        id: 2,
	        firstName: 'Josh',
	        lastName: 'Godi'
	    }, {
	        id: 3,
	        firstName: 'Alec',
	        lastName: 'Sibilia'
	    }, {
	        id: 4,
	        firstName: 'Kameron',
	        lastName: 'Sween'
	    }];
	
	    this.static = { options: states };
	
	    this.formatted = {
	        //field: 'id',
	        format: '$firstName $lastName',
	        options: collaborators
	    };
	
	    this.custom = {
	        resultsTemplate: CustomPickerResults,
	        format: '$firstName $lastName',
	        options: collaborators
	    };
	
	    this.value = 'Alabama';
	    this.async = {
	        options: function options() {
	            return new Promise(function (resolve) {
	                setTimeout(function () {
	                    resolve(abbrieviated);
	                }, 300);
	            });
	        }
	    };
	}) || _class2);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvcGlja2VyL1BpY2tlckRlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztrQ0FBQTs7QUFFQTs7QUFLQTs7O0FBTkE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7OztJQXNCYSxtQixXQUFBLG1CLFdBcEJaLHFCQUFVO0FBQ1AsY0FBVSx1QkFESDtBQUVQLFVBQU07QUFDRixpQkFBUztBQURQLEtBRkM7QUFLUDtBQUxPLENBQVYsQzs7Ozs7Ozs7Ozs7OztBQXVCRCxJQUFNLHlzRUFBTjs7SUErQ2EsbUIsV0FBQSxtQixZQUpaLHFCQUFVO0FBQ1AsY0FBVSxhQURIO0FBRVAsY0FBVTtBQUZILENBQVYsQyxrQkFLRywrQkFBYztBQUFBOztBQUNWLFNBQUssa0JBQUw7QUFDQSxTQUFLLGtCQUFMO0FBQ0EsU0FBSyxzQkFBTDtBQUNBLFNBQUssMEJBQUw7O0FBRUEsU0FBSyxXQUFMLEdBQW1CLFdBQW5COztBQUVBLFFBQUksU0FBUyxDQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCLFNBQXRCLEVBQWlDLFVBQWpDLEVBQTZDLFlBQTdDLEVBQTJELFVBQTNELEVBQXVFLGFBQXZFLEVBQXNGLFVBQXRGLEVBQWtHLFNBQWxHLEVBQTZHLFNBQTdHLEVBQXdILFFBQXhILEVBQWtJLE9BQWxJLEVBQTJJLFVBQTNJLEVBQXVKLFNBQXZKLEVBQWtLLE1BQWxLLEVBQTBLLFFBQTFLLEVBQW9MLFVBQXBMLEVBQWdNLFdBQWhNLEVBQTZNLE9BQTdNLEVBQXNOLFVBQXROLEVBQWtPLGVBQWxPLEVBQW1QLFVBQW5QLEVBQStQLFdBQS9QLEVBQTRRLGFBQTVRLEVBQTJSLFVBQTNSLEVBQXVTLFNBQXZTLEVBQWtULFVBQWxULEVBQThULFFBQTlULEVBQXdVLGVBQXhVLEVBQXlWLFlBQXpWLEVBQXVXLFlBQXZXLEVBQXFYLFVBQXJYLEVBQWlZLGNBQWpZLEVBQWlaLGdCQUFqWixFQUFtYSxNQUFuYSxFQUEyYSxVQUEzYSxFQUF1YixRQUF2YixFQUFpYyxjQUFqYyxFQUFpZCxjQUFqZCxFQUFpZSxnQkFBamUsRUFBbWYsY0FBbmYsRUFBbWdCLFdBQW5nQixFQUFnaEIsT0FBaGhCLEVBQXloQixNQUF6aEIsRUFBaWlCLFNBQWppQixFQUE0aUIsVUFBNWlCLEVBQXdqQixZQUF4akIsRUFBc2tCLGVBQXRrQixFQUF1bEIsV0FBdmxCLEVBQW9tQixTQUFwbUIsQ0FBYjs7QUFFQSxRQUFJLGVBQWUsQ0FBQztBQUNoQixlQUFPLEtBRFM7QUFFaEIsZUFBTztBQUZTLEtBQUQsRUFHaEI7QUFDQyxlQUFPLElBRFI7QUFFQyxlQUFPO0FBRlIsS0FIZ0IsRUFNaEI7QUFDQyxlQUFPLElBRFI7QUFFQyxlQUFPO0FBRlIsS0FOZ0IsRUFTaEI7QUFDQyxlQUFPLElBRFI7QUFFQyxlQUFPO0FBRlIsS0FUZ0IsQ0FBbkI7O0FBY0EsUUFBSSxnQkFBZ0IsQ0FBQztBQUNqQixZQUFJLENBRGE7QUFFakIsbUJBQVcsT0FGTTtBQUdqQixrQkFBVTtBQUhPLEtBQUQsRUFJakI7QUFDQyxZQUFJLENBREw7QUFFQyxtQkFBVyxNQUZaO0FBR0Msa0JBQVU7QUFIWCxLQUppQixFQVFqQjtBQUNDLFlBQUksQ0FETDtBQUVDLG1CQUFXLE1BRlo7QUFHQyxrQkFBVTtBQUhYLEtBUmlCLEVBWWpCO0FBQ0MsWUFBSSxDQURMO0FBRUMsbUJBQVcsU0FGWjtBQUdDLGtCQUFVO0FBSFgsS0FaaUIsQ0FBcEI7O0FBa0JBLFNBQUssTUFBTCxHQUFjLEVBQUUsU0FBUyxNQUFYLEVBQWQ7O0FBRUEsU0FBSyxTQUFMLEdBQWlCO0FBQ2I7QUFDQSxnQkFBUSxzQkFGSztBQUdiLGlCQUFTO0FBSEksS0FBakI7O0FBTUEsU0FBSyxNQUFMLEdBQWM7QUFDVix5QkFBaUIsbUJBRFA7QUFFVixnQkFBUSxzQkFGRTtBQUdWLGlCQUFTO0FBSEMsS0FBZDs7QUFNQSxTQUFLLEtBQUwsR0FBYSxTQUFiO0FBQ0EsU0FBSyxLQUFMLEdBQWE7QUFDVCxpQkFBUyxtQkFBTTtBQUNYLG1CQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFhO0FBQzVCLDJCQUFXLFlBQU07QUFDYiw0QkFBUSxZQUFSO0FBQ0gsaUJBRkQsRUFFRyxHQUZIO0FBR0gsYUFKTSxDQUFQO0FBS0g7QUFQUSxLQUFiO0FBU0gsQyIsImZpbGUiOiJQaWNrZXJEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgQmFzaWNQaWNrZXJEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0Jhc2ljUGlja2VyRGVtby5odG1sJztcbmltcG9ydCBBc3luY1BpY2tlckRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQXN5bmNQaWNrZXJEZW1vLmh0bWwnO1xuaW1wb3J0IEZvcm1hdHRlZFBpY2tlckRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvRm9ybWF0dGVkUGlja2VyRGVtby5odG1sJztcbmltcG9ydCBDdXN0b21QaWNrZXJSZXN1bHRzRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9DdXN0b21QaWNrZXJSZXN1bHRzRGVtby5odG1sJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgUGlja2VyUmVzdWx0cyB9IGZyb20gJy4vLi4vLi4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2N1c3RvbS1waWNrZXItcmVzdWx0cycsXG4gICAgaG9zdDoge1xuICAgICAgICAnY2xhc3MnOiAnYWN0aXZlIHBpY2tlci1yZXN1bHRzJ1xuICAgIH0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIiAqbmdJZj1cImlzTG9hZGluZyAmJiAhbWF0Y2hlcy5sZW5ndGhcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgPHVsICpuZ0lmPVwibWF0Y2hlcy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgbWF0Y2ggb2YgbWF0Y2hlc1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibWF0Y2g9PT1hY3RpdmVNYXRjaFwiXG4gICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2VsZWN0QWN0aXZlKG1hdGNoKVwiPlxuICAgICAgICAgICAgICAgICoqQ1VTVE9NKiogPGIgW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2gubGFiZWwsIHRlcm0pXCI+PC9iPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHAgY2xhc3M9XCJwaWNrZXItZXJyb3JcIiAqbmdJZj1cImhhc0Vycm9yXCI+T29wcyEgQW4gZXJyb3Igb2NjdXJlZC48L3A+XG4gICAgICAgIDxwIGNsYXNzPVwicGlja2VyLW51bGxcIiAqbmdJZj1cIiFpc0xvYWRpbmcgJiYgIW1hdGNoZXMubGVuZ3RoICYmICFoYXNFcnJvclwiPk5vIHJlc3VsdHMgdG8gZGlzcGxheS4uLjwvcD5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbVBpY2tlclJlc3VsdHMgZXh0ZW5kcyBQaWNrZXJSZXN1bHRzIHtcbn1cblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPlBpY2tlciA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy9waWNrZXJcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+VGhlIHBpY2tlciBlbGVtZW50ICg8Y29kZT5pbnB1dFtwaWNrZXJdPC9jb2RlPikgcmVwcmVzZW50cyBhIGNvbnRyb2wgdGhhdCBwcmVzZW50cyBhIG1lbnUgb2Ygb3B0aW9ucy4gVGhlIG9wdGlvbnNcbiAgICB3aXRoaW4gYXJlIHNldCBieSB0aGUgPGNvZGU+aXRlbXM8L2NvZGU+IGF0dHJpYnV0ZS4gT3B0aW9ucyBjYW4gYmUgcHJlLXBpY2tlcmVkIGZvciB0aGUgdXNlciB1c2luZyB0aGUgPGNvZGU+dmFsdWU8L2NvZGU+XG4gICAgYXR0cmlidXRlLjwvcD5cblxuICAgIDxici8+XG5cbiAgICA8aDU+QmFzaWMgRXhhbXBsZXM8L2g1PlxuICAgIDxwPlxuICAgICAgICBCeSBjbGlja2luZyBvbiB0aGUgPGNvZGU+aW5wdXQ8L2NvZGU+IGVsZW1lbnQsIHRoZSBvcHRpb25zIGxpc3Qgd2lsbCBiZSBkaXNwbGF5ZWQuICBwaWNrZXIgYW55IG9mIHRoZSBvcHRpb25zXG4gICAgICAgIGJ5IGNsaWNraW5nIG9uIHRoZSBpdGVtIGluIHRoZSBsaXN0LiAgVGhlIHZhbHVlIHBpY2tlcmVkIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGUgb3B0aW9ucyBsaXN0IHdpbGwgYmUgcmVtb3ZlZC5cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgcGlja2VyLWRlbW9cIj4ke0Jhc2ljUGlja2VyRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkJhc2ljUGlja2VyRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PkFzeW5jIEV4YW1wbGVzPC9oNT5cbiAgICA8cD5cbiAgICAgICAgQnkgY2xpY2tpbmcgb24gdGhlIDxjb2RlPmlucHV0PC9jb2RlPiBlbGVtZW50LCB0aGUgb3B0aW9ucyBsaXN0IHdpbGwgYmUgZGlzcGxheWVkLiAgcGlja2VyIGFueSBvZiB0aGUgb3B0aW9uc1xuICAgICAgICBieSBjbGlja2luZyBvbiB0aGUgaXRlbSBpbiB0aGUgbGlzdC4gIFRoZSB2YWx1ZSBwaWNrZXJlZCB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlIG9wdGlvbnMgbGlzdCB3aWxsIGJlIHJlbW92ZWQuXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHBpY2tlci1kZW1vXCI+JHtBc3luY1BpY2tlckRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJBc3luY1BpY2tlckRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5Gb3JtYXRlZCBQaWNrZXIgRXhhbXBsZXM8L2g1PlxuICAgIDxwPlxuICAgICAgICBCeSBjbGlja2luZyBvbiB0aGUgPGNvZGU+aW5wdXQ8L2NvZGU+IGVsZW1lbnQsIHRoZSBvcHRpb25zIGxpc3Qgd2lsbCBiZSBkaXNwbGF5ZWQuICBwaWNrZXIgYW55IG9mIHRoZSBvcHRpb25zXG4gICAgICAgIGJ5IGNsaWNraW5nIG9uIHRoZSBpdGVtIGluIHRoZSBsaXN0LiAgVGhlIHZhbHVlIHBpY2tlcmVkIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGUgb3B0aW9ucyBsaXN0IHdpbGwgYmUgcmVtb3ZlZC5cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgcGlja2VyLWRlbW9cIj4ke0Zvcm1hdHRlZFBpY2tlckRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJGb3JtYXR0ZWRQaWNrZXJEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+Q3VzdG9tIFBpY2tlciBFeGFtcGxlczwvaDU+XG4gICAgPHA+XG4gICAgICAgIEJ5IGNsaWNraW5nIG9uIHRoZSA8Y29kZT5pbnB1dDwvY29kZT4gZWxlbWVudCwgdGhlIG9wdGlvbnMgbGlzdCB3aWxsIGJlIGRpc3BsYXllZC4gIHBpY2tlciBhbnkgb2YgdGhlIG9wdGlvbnNcbiAgICAgICAgYnkgY2xpY2tpbmcgb24gdGhlIGl0ZW0gaW4gdGhlIGxpc3QuICBUaGUgdmFsdWUgcGlja2VyZWQgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZSBvcHRpb25zIGxpc3Qgd2lsbCBiZSByZW1vdmVkLlxuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBwaWNrZXItZGVtb1wiPiR7Q3VzdG9tUGlja2VyUmVzdWx0c0RlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJDdXN0b21QaWNrZXJSZXN1bHRzRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BpY2tlci1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgUGlja2VyRGVtb0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuQmFzaWNQaWNrZXJEZW1vVHBsID0gQmFzaWNQaWNrZXJEZW1vVHBsO1xuICAgICAgICB0aGlzLkFzeW5jUGlja2VyRGVtb1RwbCA9IEFzeW5jUGlja2VyRGVtb1RwbDtcbiAgICAgICAgdGhpcy5Gb3JtYXR0ZWRQaWNrZXJEZW1vVHBsID0gRm9ybWF0dGVkUGlja2VyRGVtb1RwbDtcbiAgICAgICAgdGhpcy5DdXN0b21QaWNrZXJSZXN1bHRzRGVtb1RwbCA9IEN1c3RvbVBpY2tlclJlc3VsdHNEZW1vVHBsO1xuXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAnU2VsZWN0Li4uJztcblxuICAgICAgICBsZXQgc3RhdGVzID0gWydBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJywgJ0NhbGlmb3JuaWEnLCAnQ29sb3JhZG8nLCAnQ29ubmVjdGljdXQnLCAnRGVsYXdhcmUnLCAnRmxvcmlkYScsICdHZW9yZ2lhJywgJ0hhd2FpaScsICdJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnLCAnS2Fuc2FzJywgJ0tlbnR1Y2t5JywgJ0xvdWlzaWFuYScsICdNYWluZScsICdNYXJ5bGFuZCcsICdNYXNzYWNodXNldHRzJywgJ01pY2hpZ2FuJywgJ01pbm5lc290YScsICdNaXNzaXNzaXBwaScsICdNaXNzb3VyaScsICdNb250YW5hJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJywgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsICdOZXcgWW9yaycsICdOb3J0aCBEYWtvdGEnLCAnTm9ydGggQ2Fyb2xpbmEnLCAnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nLCAnUGVubnN5bHZhbmlhJywgJ1Job2RlIElzbGFuZCcsICdTb3V0aCBDYXJvbGluYScsICdTb3V0aCBEYWtvdGEnLCAnVGVubmVzc2VlJywgJ1RleGFzJywgJ1V0YWgnLCAnVmVybW9udCcsICdWaXJnaW5pYScsICdXYXNoaW5ndG9uJywgJ1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXTtcblxuICAgICAgICBsZXQgYWJicmlldmlhdGVkID0gW3tcbiAgICAgICAgICAgIHZhbHVlOiAnVVNBJyxcbiAgICAgICAgICAgIGxhYmVsOiAnVW5pdGVkIFN0YXRlcydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsdWU6ICdHQicsXG4gICAgICAgICAgICBsYWJlbDogJ0dyZWF0IEJyaXRhaW4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbHVlOiAnQ0EnLFxuICAgICAgICAgICAgbGFiZWw6ICdDYW5hZGEnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbHVlOiAnQVUnLFxuICAgICAgICAgICAgbGFiZWw6ICdBdXN0cmFpbGlhJ1xuICAgICAgICB9XTtcblxuICAgICAgICBsZXQgY29sbGFib3JhdG9ycyA9IFt7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJ0JyaWFuJyxcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnS2ltYmFsbCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICdKb3NoJyxcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnR29kaSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICdBbGVjJyxcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnU2liaWxpYSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICdLYW1lcm9uJyxcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnU3dlZW4nXG4gICAgICAgIH1dO1xuXG4gICAgICAgIHRoaXMuc3RhdGljID0geyBvcHRpb25zOiBzdGF0ZXMgfTtcblxuICAgICAgICB0aGlzLmZvcm1hdHRlZCA9IHtcbiAgICAgICAgICAgIC8vZmllbGQ6ICdpZCcsXG4gICAgICAgICAgICBmb3JtYXQ6ICckZmlyc3ROYW1lICRsYXN0TmFtZScsXG4gICAgICAgICAgICBvcHRpb25zOiBjb2xsYWJvcmF0b3JzXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jdXN0b20gPSB7XG4gICAgICAgICAgICByZXN1bHRzVGVtcGxhdGU6IEN1c3RvbVBpY2tlclJlc3VsdHMsXG4gICAgICAgICAgICBmb3JtYXQ6ICckZmlyc3ROYW1lICRsYXN0TmFtZScsXG4gICAgICAgICAgICBvcHRpb25zOiBjb2xsYWJvcmF0b3JzXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9ICdBbGFiYW1hJztcbiAgICAgICAgdGhpcy5hc3luYyA9IHtcbiAgICAgICAgICAgIG9wdGlvbnM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFiYnJpZXZpYXRlZCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuIl19

/***/ },

/***/ 864:
/***/ function(module, exports) {

	module.exports = "<div class=\"selected-value\">Selected Value: {{avalue}}</div>\n<novo-picker [config]=\"async\" [placeholder]=\"placeholder\" [(ngModel)]=\"avalue\"></novo-picker>\n"

/***/ },

/***/ 865:
/***/ function(module, exports) {

	module.exports = "<div class=\"selected-value\">Selected Value: {{value}}</div>\n<novo-picker [config]=\"static\" [placeholder]=\"placeholder\" [(ngModel)]=\"value\"></novo-picker>\n"

/***/ },

/***/ 866:
/***/ function(module, exports) {

	module.exports = "<div class=\"selected-value\">Selected Value: {{cvalue}}</div>\n<novo-picker [config]=\"custom\" [placeholder]=\"placeholder\" [(ngModel)]=\"cvalue\"></novo-picker>\n"

/***/ },

/***/ 867:
/***/ function(module, exports) {

	module.exports = "<div class=\"selected-value\">Selected Value: {{fvalue}}</div>\n<novo-picker [config]=\"formatted\" [placeholder]=\"placeholder\" [(ngModel)]=\"fvalue\"></novo-picker>\n"

/***/ },

/***/ 750:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.QuickNoteDemoComponent = exports.CustomQuickNoteResults = undefined;
	
	var _dec, _class, _dec2, _class2; // NG2
	
	// APP
	
	// Vendor
	
	
	var _core = __webpack_require__(1);
	
	var _BasicQuickNote = __webpack_require__(868);
	
	var _BasicQuickNote2 = _interopRequireDefault(_BasicQuickNote);
	
	var _CustomQuickNote = __webpack_require__(869);
	
	var _CustomQuickNote2 = _interopRequireDefault(_CustomQuickNote);
	
	var _CustomQuickNoteResults = __webpack_require__(870);
	
	var _CustomQuickNoteResults2 = _interopRequireDefault(_CustomQuickNoteResults);
	
	var _novoElements = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CustomQuickNoteResults = exports.CustomQuickNoteResults = (_dec = (0, _core.Component)({
	    selector: 'custom-quick-note-results',
	    host: {
	        'class': 'active quick-note-results'
	    },
	    template: '\n        <novo-loading theme="line" *ngIf="isLoading && !matches.length"></novo-loading>\n        <ul *ngIf="matches.length > 0">\n            <li\n                *ngFor="let match of matches"\n                (click)="selectMatch($event)"\n                [class.active]="match===activeMatch"\n                (mouseenter)="selectActive(match)">\n                **CUSTOM** <b [innerHtml]="highlight(match.label, term)"></b>\n            </li>\n        </ul>\n        <p class="picker-error" *ngIf="hasError">Oops! An error occured.</p>\n        <p class="picker-null" *ngIf="!isLoading && !matches.length && !hasError">No results to display...</p>\n    '
	}), _dec(_class = function (_QuickNoteResults) {
	    _inherits(CustomQuickNoteResults, _QuickNoteResults);
	
	    function CustomQuickNoteResults() {
	        _classCallCheck(this, CustomQuickNoteResults);
	
	        return _possibleConstructorReturn(this, (CustomQuickNoteResults.__proto__ || Object.getPrototypeOf(CustomQuickNoteResults)).apply(this, arguments));
	    }
	
	    return CustomQuickNoteResults;
	}(_novoElements.QuickNoteResults)) || _class);
	
	
	var template = '\n<div class="container">\n    <h1>Quick Note <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/quick-note">(source)</a></small></h1>\n    <p>Tag Autocomplete</p>\n\n    <br/>\n\n    <h5>Basic Examples</h5>\n    <div class="example quick-note-demo">' + _BasicQuickNote2.default + '</div>\n    <code-snippet [code]="BasicQuickNoteDemoTpl"></code-snippet>\n    \n    <h5>Custom Triggers</h5>\n    <div class="example quick-note-demo">' + _CustomQuickNote2.default + '</div>\n    <code-snippet [code]="CustomQuickNoteDemoTpl"></code-snippet>\n    \n    <h5>Custom Results Template</h5>\n    <div class="example quick-note-demo">' + _CustomQuickNoteResults2.default + '</div>\n    <code-snippet [code]="CustomQuickNoteResultsDemoTpl"></code-snippet>\n</div>\n';
	
	var QuickNoteDemoComponent = exports.QuickNoteDemoComponent = (_dec2 = (0, _core.Component)({
	    selector: 'quick-note-demo',
	    template: template
	}), _dec2(_class2 = function QuickNoteDemoComponent() {
	    _classCallCheck(this, QuickNoteDemoComponent);
	
	    this.BasicQuickNoteDemoTpl = _BasicQuickNote2.default;
	    this.CustomQuickNoteDemoTpl = _CustomQuickNote2.default;
	    this.CustomQuickNoteResultsDemoTpl = _CustomQuickNoteResults2.default;
	
	    this.placeholder = 'Enter your note text here. Reference people and distribution lists using @ (eg. @John Smith). Reference other records using # (e.g. #Project Manager)';
	
	    var customData = {
	        tags: [{ id: 1, name: 'OH YA!', test: 'TWO' }, { id: 2, name: 'TAGGING!', test: 'ONE' }],
	        references: [{ id: 1, title: 'Awesome Reference' }, { id: 2, title: 'Angular2' }]
	    };
	
	    this.config = {
	        triggers: {
	            tags: '@',
	            references: '#',
	            boos: '^'
	        },
	        options: {
	            tags: ['First', 'Second'],
	            references: ['Third', 'Forth'],
	            boos: ['Test']
	        },
	        renderer: {
	            tags: function tags(symbol, item) {
	                return '<a class="tag">' + symbol + item.label + '</a>';
	            },
	            references: function references(symbol, item) {
	                return '<a class="tag">' + symbol + item.label + '</a>';
	            },
	            boos: function boos(symbol, item) {
	                return '<strong>' + symbol + item.label + '</strong>';
	            }
	        }
	    };
	    this.custom = {
	        triggers: {
	            whos: '@',
	            whats: '#'
	        },
	        options: {
	            whos: function whos() {
	                return new Promise(function (resolve) {
	                    setTimeout(function () {
	                        resolve(customData.tags);
	                    }, 300);
	                });
	            },
	            whats: function whats() {
	                return new Promise(function (resolve) {
	                    setTimeout(function () {
	                        resolve(customData.references);
	                    }, 300);
	                });
	            }
	        },
	        format: {
	            whos: '$name $test',
	            whats: '$title'
	        },
	        renderer: {
	            whos: function whos(symbol, item) {
	                return '<a class="WHOS">' + symbol + item.label + '</a>';
	            },
	            whats: function whats(symbol, item) {
	                return '<a class="tag">' + symbol + item.label + '</a>';
	            }
	        }
	    };
	    this.custom2 = {
	        resultsTemplate: CustomQuickNoteResults,
	        triggers: {
	            names: '@',
	            tags: '#'
	        },
	        options: {
	            names: function names() {
	                return new Promise(function (resolve) {
	                    setTimeout(function () {
	                        resolve(customData.tags);
	                    }, 300);
	                });
	            },
	            tags: function tags() {
	                return new Promise(function (resolve) {
	                    setTimeout(function () {
	                        resolve(customData.references);
	                    }, 300);
	                });
	            }
	        },
	        format: {
	            names: '$name',
	            tags: '$title'
	        },
	        renderer: {
	            names: function names(symbol, item) {
	                return '<a class="names">' + symbol + item.label + '</a>';
	            },
	            tags: function tags(symbol, item) {
	                return '<a class="tags">' + symbol + item.label + '</a>';
	            }
	        }
	    };
	}) || _class2);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvcXVpY2stbm90ZS9RdWlja05vdGVEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7a0NBQUE7O0FBRUE7O0FBSUE7OztBQUxBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBc0JhLHNCLFdBQUEsc0IsV0FwQloscUJBQVU7QUFDUCxjQUFVLDJCQURIO0FBRVAsVUFBTTtBQUNGLGlCQUFTO0FBRFAsS0FGQztBQUtQO0FBTE8sQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FBdUJELElBQU0saXpCQUFOOztJQXlCYSxzQixXQUFBLHNCLFlBSloscUJBQVU7QUFDUCxjQUFVLGlCQURIO0FBRVAsY0FBVTtBQUZILENBQVYsQyxrQkFLRyxrQ0FBYztBQUFBOztBQUNWLFNBQUsscUJBQUw7QUFDQSxTQUFLLHNCQUFMO0FBQ0EsU0FBSyw2QkFBTDs7QUFFQSxTQUFLLFdBQUwsR0FBbUIsdUpBQW5COztBQUVBLFFBQUksYUFBYTtBQUNiLGNBQU0sQ0FBQyxFQUFFLElBQUksQ0FBTixFQUFTLE1BQU0sUUFBZixFQUF5QixNQUFNLEtBQS9CLEVBQUQsRUFBeUMsRUFBRSxJQUFJLENBQU4sRUFBUyxNQUFNLFVBQWYsRUFBMkIsTUFBTSxLQUFqQyxFQUF6QyxDQURPO0FBRWIsb0JBQVksQ0FBQyxFQUFFLElBQUksQ0FBTixFQUFTLE9BQU8sbUJBQWhCLEVBQUQsRUFBd0MsRUFBRSxJQUFJLENBQU4sRUFBUyxPQUFPLFVBQWhCLEVBQXhDO0FBRkMsS0FBakI7O0FBS0EsU0FBSyxNQUFMLEdBQWM7QUFDVixrQkFBVTtBQUNOLGtCQUFNLEdBREE7QUFFTix3QkFBWSxHQUZOO0FBR04sa0JBQU07QUFIQSxTQURBO0FBTVYsaUJBQVM7QUFDTCxrQkFBTSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBREQ7QUFFTCx3QkFBWSxDQUFDLE9BQUQsRUFBVSxPQUFWLENBRlA7QUFHTCxrQkFBTSxDQUFDLE1BQUQ7QUFIRCxTQU5DO0FBV1Ysa0JBQVU7QUFDTixrQkFBTSxjQUFDLE1BQUQsRUFBUyxJQUFULEVBQWtCO0FBQ3BCLDJDQUF5QixNQUF6QixHQUFrQyxLQUFLLEtBQXZDO0FBQ0gsYUFISztBQUlOLHdCQUFZLG9CQUFDLE1BQUQsRUFBUyxJQUFULEVBQWtCO0FBQzFCLDJDQUF5QixNQUF6QixHQUFrQyxLQUFLLEtBQXZDO0FBQ0gsYUFOSztBQU9OLGtCQUFNLGNBQUMsTUFBRCxFQUFTLElBQVQsRUFBa0I7QUFDcEIsb0NBQWtCLE1BQWxCLEdBQTJCLEtBQUssS0FBaEM7QUFDSDtBQVRLO0FBWEEsS0FBZDtBQXVCQSxTQUFLLE1BQUwsR0FBYztBQUNWLGtCQUFVO0FBQ04sa0JBQU0sR0FEQTtBQUVOLG1CQUFPO0FBRkQsU0FEQTtBQUtWLGlCQUFTO0FBQ0wsa0JBQU0sZ0JBQU07QUFDUix1QkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBYTtBQUM1QiwrQkFBVyxZQUFNO0FBQ2IsZ0NBQVEsV0FBVyxJQUFuQjtBQUNILHFCQUZELEVBRUcsR0FGSDtBQUdILGlCQUpNLENBQVA7QUFLSCxhQVBJO0FBUUwsbUJBQU8saUJBQU07QUFDVCx1QkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBYTtBQUM1QiwrQkFBVyxZQUFNO0FBQ2IsZ0NBQVEsV0FBVyxVQUFuQjtBQUNILHFCQUZELEVBRUcsR0FGSDtBQUdILGlCQUpNLENBQVA7QUFLSDtBQWRJLFNBTEM7QUFxQlYsZ0JBQVE7QUFDSixrQkFBTSxhQURGO0FBRUosbUJBQU87QUFGSCxTQXJCRTtBQXlCVixrQkFBVTtBQUNOLGtCQUFNLGNBQUMsTUFBRCxFQUFTLElBQVQsRUFBa0I7QUFDcEIsNENBQTBCLE1BQTFCLEdBQW1DLEtBQUssS0FBeEM7QUFDSCxhQUhLO0FBSU4sbUJBQU8sZUFBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUNyQiwyQ0FBeUIsTUFBekIsR0FBa0MsS0FBSyxLQUF2QztBQUNIO0FBTks7QUF6QkEsS0FBZDtBQWtDQSxTQUFLLE9BQUwsR0FBZTtBQUNYLHlCQUFpQixzQkFETjtBQUVYLGtCQUFVO0FBQ04sbUJBQU8sR0FERDtBQUVOLGtCQUFNO0FBRkEsU0FGQztBQU1YLGlCQUFTO0FBQ0wsbUJBQU8saUJBQU07QUFDVCx1QkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBYTtBQUM1QiwrQkFBVyxZQUFNO0FBQ2IsZ0NBQVEsV0FBVyxJQUFuQjtBQUNILHFCQUZELEVBRUcsR0FGSDtBQUdILGlCQUpNLENBQVA7QUFLSCxhQVBJO0FBUUwsa0JBQU0sZ0JBQU07QUFDUix1QkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBYTtBQUM1QiwrQkFBVyxZQUFNO0FBQ2IsZ0NBQVEsV0FBVyxVQUFuQjtBQUNILHFCQUZELEVBRUcsR0FGSDtBQUdILGlCQUpNLENBQVA7QUFLSDtBQWRJLFNBTkU7QUFzQlgsZ0JBQVE7QUFDSixtQkFBTyxPQURIO0FBRUosa0JBQU07QUFGRixTQXRCRztBQTBCWCxrQkFBVTtBQUNOLG1CQUFPLGVBQUMsTUFBRCxFQUFTLElBQVQsRUFBa0I7QUFDckIsNkNBQTJCLE1BQTNCLEdBQW9DLEtBQUssS0FBekM7QUFDSCxhQUhLO0FBSU4sa0JBQU0sY0FBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUNwQiw0Q0FBMEIsTUFBMUIsR0FBbUMsS0FBSyxLQUF4QztBQUNIO0FBTks7QUExQkMsS0FBZjtBQW1DSCxDIiwiZmlsZSI6IlF1aWNrTm90ZURlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCBCYXNpY1F1aWNrTm90ZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQmFzaWNRdWlja05vdGUuaHRtbCc7XG5pbXBvcnQgQ3VzdG9tUXVpY2tOb3RlRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9DdXN0b21RdWlja05vdGUuaHRtbCc7XG5pbXBvcnQgQ3VzdG9tUXVpY2tOb3RlUmVzdWx0c0RlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQ3VzdG9tUXVpY2tOb3RlUmVzdWx0cy5odG1sJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgUXVpY2tOb3RlUmVzdWx0cyB9IGZyb20gJy4vLi4vLi4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2N1c3RvbS1xdWljay1ub3RlLXJlc3VsdHMnLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ2NsYXNzJzogJ2FjdGl2ZSBxdWljay1ub3RlLXJlc3VsdHMnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiICpuZ0lmPVwiaXNMb2FkaW5nICYmICFtYXRjaGVzLmxlbmd0aFwiPjwvbm92by1sb2FkaW5nPlxuICAgICAgICA8dWwgKm5nSWY9XCJtYXRjaGVzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBtYXRjaGVzXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaD09PWFjdGl2ZU1hdGNoXCJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCI+XG4gICAgICAgICAgICAgICAgKipDVVNUT00qKiA8YiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5sYWJlbCwgdGVybSlcIj48L2I+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8cCBjbGFzcz1cInBpY2tlci1lcnJvclwiICpuZ0lmPVwiaGFzRXJyb3JcIj5Pb3BzISBBbiBlcnJvciBvY2N1cmVkLjwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJwaWNrZXItbnVsbFwiICpuZ0lmPVwiIWlzTG9hZGluZyAmJiAhbWF0Y2hlcy5sZW5ndGggJiYgIWhhc0Vycm9yXCI+Tm8gcmVzdWx0cyB0byBkaXNwbGF5Li4uPC9wPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tUXVpY2tOb3RlUmVzdWx0cyBleHRlbmRzIFF1aWNrTm90ZVJlc3VsdHMge1xufVxuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+UXVpY2sgTm90ZSA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy9xdWljay1ub3RlXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPlRhZyBBdXRvY29tcGxldGU8L3A+XG5cbiAgICA8YnIvPlxuXG4gICAgPGg1PkJhc2ljIEV4YW1wbGVzPC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBxdWljay1ub3RlLWRlbW9cIj4ke0Jhc2ljUXVpY2tOb3RlRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkJhc2ljUXVpY2tOb3RlRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuICAgIFxuICAgIDxoNT5DdXN0b20gVHJpZ2dlcnM8L2g1PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHF1aWNrLW5vdGUtZGVtb1wiPiR7Q3VzdG9tUXVpY2tOb3RlRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkN1c3RvbVF1aWNrTm90ZURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbiAgICBcbiAgICA8aDU+Q3VzdG9tIFJlc3VsdHMgVGVtcGxhdGU8L2g1PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHF1aWNrLW5vdGUtZGVtb1wiPiR7Q3VzdG9tUXVpY2tOb3RlUmVzdWx0c0RlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJDdXN0b21RdWlja05vdGVSZXN1bHRzRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3F1aWNrLW5vdGUtZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXG59KVxuZXhwb3J0IGNsYXNzIFF1aWNrTm90ZURlbW9Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLkJhc2ljUXVpY2tOb3RlRGVtb1RwbCA9IEJhc2ljUXVpY2tOb3RlRGVtb1RwbDtcbiAgICAgICAgdGhpcy5DdXN0b21RdWlja05vdGVEZW1vVHBsID0gQ3VzdG9tUXVpY2tOb3RlRGVtb1RwbDtcbiAgICAgICAgdGhpcy5DdXN0b21RdWlja05vdGVSZXN1bHRzRGVtb1RwbCA9IEN1c3RvbVF1aWNrTm90ZVJlc3VsdHNEZW1vVHBsO1xuXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciBub3RlIHRleHQgaGVyZS4gUmVmZXJlbmNlIHBlb3BsZSBhbmQgZGlzdHJpYnV0aW9uIGxpc3RzIHVzaW5nIEAgKGVnLiBASm9obiBTbWl0aCkuIFJlZmVyZW5jZSBvdGhlciByZWNvcmRzIHVzaW5nICMgKGUuZy4gI1Byb2plY3QgTWFuYWdlciknO1xuXG4gICAgICAgIGxldCBjdXN0b21EYXRhID0ge1xuICAgICAgICAgICAgdGFnczogW3sgaWQ6IDEsIG5hbWU6ICdPSCBZQSEnLCB0ZXN0OiAnVFdPJyB9LCB7IGlkOiAyLCBuYW1lOiAnVEFHR0lORyEnLCB0ZXN0OiAnT05FJyB9XSxcbiAgICAgICAgICAgIHJlZmVyZW5jZXM6IFt7IGlkOiAxLCB0aXRsZTogJ0F3ZXNvbWUgUmVmZXJlbmNlJyB9LCB7IGlkOiAyLCB0aXRsZTogJ0FuZ3VsYXIyJyB9XVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgdHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgICB0YWdzOiAnQCcsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogJyMnLFxuICAgICAgICAgICAgICAgIGJvb3M6ICdeJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0YWdzOiBbJ0ZpcnN0JywgJ1NlY29uZCddLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZXM6IFsnVGhpcmQnLCAnRm9ydGgnXSxcbiAgICAgICAgICAgICAgICBib29zOiBbJ1Rlc3QnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbmRlcmVyOiB7XG4gICAgICAgICAgICAgICAgdGFnczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwidGFnXCI+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwidGFnXCI+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9vczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxzdHJvbmc+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvc3Ryb25nPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmN1c3RvbSA9IHtcbiAgICAgICAgICAgIHRyaWdnZXJzOiB7XG4gICAgICAgICAgICAgICAgd2hvczogJ0AnLFxuICAgICAgICAgICAgICAgIHdoYXRzOiAnIydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2hvczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY3VzdG9tRGF0YS50YWdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2hhdHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGN1c3RvbURhdGEucmVmZXJlbmNlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgd2hvczogJyRuYW1lICR0ZXN0JyxcbiAgICAgICAgICAgICAgICB3aGF0czogJyR0aXRsZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW5kZXJlcjoge1xuICAgICAgICAgICAgICAgIHdob3M6IChzeW1ib2wsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YSBjbGFzcz1cIldIT1NcIj4ke3N5bWJvbH0ke2l0ZW0ubGFiZWx9PC9hPmA7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB3aGF0czogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwidGFnXCI+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jdXN0b20yID0ge1xuICAgICAgICAgICAgcmVzdWx0c1RlbXBsYXRlOiBDdXN0b21RdWlja05vdGVSZXN1bHRzLFxuICAgICAgICAgICAgdHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lczogJ0AnLFxuICAgICAgICAgICAgICAgIHRhZ3M6ICcjJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY3VzdG9tRGF0YS50YWdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFnczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY3VzdG9tRGF0YS5yZWZlcmVuY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICBuYW1lczogJyRuYW1lJyxcbiAgICAgICAgICAgICAgICB0YWdzOiAnJHRpdGxlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbmRlcmVyOiB7XG4gICAgICAgICAgICAgICAgbmFtZXM6IChzeW1ib2wsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YSBjbGFzcz1cIm5hbWVzXCI+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFnczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwidGFnc1wiPiR7c3ltYm9sfSR7aXRlbS5sYWJlbH08L2E+YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuIl19

/***/ },

/***/ 868:
/***/ function(module, exports) {

	module.exports = "<novo-quick-note [(ngModel)]=\"note\" [placeholder]=\"placeholder\" [config]=\"config\"></novo-quick-note>\n<div class=\"data\">\n    <p>Note: {{note | json}}</p>\n</div>\n"

/***/ },

/***/ 869:
/***/ function(module, exports) {

	module.exports = "<novo-quick-note [(ngModel)]=\"note2\" [placeholder]=\"placeholder\" [config]=\"custom\"></novo-quick-note>\n<div class=\"data\">\n    <p>Note: {{note2 | json}}</p>\n</div>\n"

/***/ },

/***/ 870:
/***/ function(module, exports) {

	module.exports = "<novo-quick-note [(ngModel)]=\"note3\" [placeholder]=\"placeholder\" [config]=\"custom2\"></novo-quick-note>\n<div class=\"data\">\n    <p>Note: {{note3 | json}}</p>\n</div>\n"

/***/ },

/***/ 751:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RadioDemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// APP
	
	
	var _core = __webpack_require__(1);
	
	var _BasicRadio = __webpack_require__(871);
	
	var _BasicRadio2 = _interopRequireDefault(_BasicRadio);
	
	var _VerticalRadio = __webpack_require__(872);
	
	var _VerticalRadio2 = _interopRequireDefault(_VerticalRadio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Radio <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/radio">(source)</a></small></h1>\n    <p>A radio group</p>\n   \n    <h5>Basic</h5>\n    <div class="example radio-demo">' + _BasicRadio2.default + '</div>\n    <code-snippet [code]="BasicRadioTpl"></code-snippet>\n    \n    <h5>Vertical</h5>\n    <div class="example radio-demo">' + _VerticalRadio2.default + '</div>\n    <code-snippet [code]="VerticalRadioTpl"></code-snippet>\n</div>\n';
	
	var RadioDemoComponent = exports.RadioDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'radio-demo',
	    template: template
	}), _dec(_class = function () {
	    function RadioDemoComponent() {
	        _classCallCheck(this, RadioDemoComponent);
	
	        this.BasicRadioTpl = _BasicRadio2.default;
	        this.VerticalRadioTpl = _VerticalRadio2.default;
	    }
	
	    _createClass(RadioDemoComponent, [{
	        key: 'onChangeVertical',
	        value: function onChangeVertical(change) {
	            console.log('Vertical Radio Change:', change); // eslint-disable-line
	        }
	    }, {
	        key: 'onChangeBasic',
	        value: function onChangeBasic(change) {
	            console.log('Basic Radio Change:', change); // eslint-disable-line
	        }
	    }]);
	
	    return RadioDemoComponent;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvcmFkaW8vUmFkaW9EZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztrQkFBQTs7QUFFQTs7O0FBREE7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLDZoQkFBTjs7SUFtQmEsa0IsV0FBQSxrQixXQUpaLHFCQUFVO0FBQ1AsY0FBVSxZQURIO0FBRVAsY0FBVTtBQUZILENBQVYsQztBQUtHLGtDQUFjO0FBQUE7O0FBQ1YsYUFBSyxhQUFMO0FBQ0EsYUFBSyxnQkFBTDtBQUNIOzs7O3lDQUVnQixNLEVBQVE7QUFDckIsb0JBQVEsR0FBUixDQUFZLHdCQUFaLEVBQXNDLE1BQXRDLEVBRHFCLENBQzBCO0FBQ2xEOzs7c0NBRWEsTSxFQUFRO0FBQ2xCLG9CQUFRLEdBQVIsQ0FBWSxxQkFBWixFQUFtQyxNQUFuQyxFQURrQixDQUMwQjtBQUMvQyIsImZpbGUiOiJSYWRpb0RlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCBCYXNpY1JhZGlvVHBsIGZyb20gJy4vdGVtcGxhdGVzL0Jhc2ljUmFkaW8uaHRtbCc7XG5pbXBvcnQgVmVydGljYWxSYWRpb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9WZXJ0aWNhbFJhZGlvLmh0bWwnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+UmFkaW8gPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvcmFkaW9cIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+QSByYWRpbyBncm91cDwvcD5cbiAgIFxuICAgIDxoNT5CYXNpYzwvaDU+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgcmFkaW8tZGVtb1wiPiR7QmFzaWNSYWRpb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkJhc2ljUmFkaW9UcGxcIj48L2NvZGUtc25pcHBldD5cbiAgICBcbiAgICA8aDU+VmVydGljYWw8L2g1PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHJhZGlvLWRlbW9cIj4ke1ZlcnRpY2FsUmFkaW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJWZXJ0aWNhbFJhZGlvVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncmFkaW8tZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvRGVtb0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuQmFzaWNSYWRpb1RwbCA9IEJhc2ljUmFkaW9UcGw7XG4gICAgICAgIHRoaXMuVmVydGljYWxSYWRpb1RwbCA9IFZlcnRpY2FsUmFkaW9UcGw7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VWZXJ0aWNhbChjaGFuZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1ZlcnRpY2FsIFJhZGlvIENoYW5nZTonLCBjaGFuZ2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfVxuXG4gICAgb25DaGFuZ2VCYXNpYyhjaGFuZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Jhc2ljIFJhZGlvIENoYW5nZTonLCBjaGFuZ2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfVxufVxuIl19

/***/ },

/***/ 871:
/***/ function(module, exports) {

	module.exports = "<novo-radio [checked]=\"false\" name=\"basic\" value=\"one\" (change)=\"onChangeBasic($event)\">Make me anything!</novo-radio>\n<novo-radio [checked]=\"true\" name=\"basic\" value=\"two\" (change)=\"onChangeBasic($event)\">I get transcluded in!</novo-radio>\n<novo-radio [checked]=\"false\" name=\"basic\" value=\"three\" (change)=\"onChangeBasic($event)\">REALLY!</novo-radio>\n"

/***/ },

/***/ 872:
/***/ function(module, exports) {

	module.exports = "<novo-radio vertical=\"true\" [checked]=\"false\" name=\"vertical\" value=\"one\" (change)=\"onChangeVertical($event)\">Make me anything!</novo-radio>\n<novo-radio vertical=\"true\" [checked]=\"true\" name=\"vertical\" value=\"two\" (change)=\"onChangeVertical($event)\">I get transcluded in!</novo-radio>\n<novo-radio vertical=\"true\" [checked]=\"false\" name=\"vertical\" value=\"three\" (change)=\"onChangeVertical($event)\">REALLY!</novo-radio>\n"

/***/ },

/***/ 752:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SelectDemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// APP
	
	
	var _core = __webpack_require__(1);
	
	var _BasicSelectDemo = __webpack_require__(873);
	
	var _BasicSelectDemo2 = _interopRequireDefault(_BasicSelectDemo);
	
	var _LongSelectDemo = __webpack_require__(874);
	
	var _LongSelectDemo2 = _interopRequireDefault(_LongSelectDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Select <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/select">(source)</a></small></h1>\n    <p>The select element (<code>novo-select</code>) represents a control that presents a menu of options. The options\n    within are set by the <code>items</code> attribute. Options can be pre-selected for the user using the <code>value</code>\n    attribute.</p>\n    \n    <br/>\n\n    <h5>Basic Examples</h5>\n    <p>\n        By clicking on the <code>novo-select</code> element, the options list will be displayed.  Select any of the options\n        by clicking on the item in the list.  The value selected will be displayed and the options list will be removed.\n    </p>\n    <div class="example select-demo">' + _BasicSelectDemo2.default + '</div>\n    <code-snippet [code]="BasicSelectDemoTpl"></code-snippet>\n\n    <h5>Lots of Options</h5>\n    <p>\n        The most common need for the <code>select</code> component is when there are too many options that would fit on\n        on the screen. The options list will display appropriately and scroll as needed.\n    </p>\n    <div class="example select-demo">' + _LongSelectDemo2.default + '</div>\n    <code-snippet [code]="LongSelectDemoTpl"></code-snippet>\n\n</div>\n';
	
	var SelectDemoComponent = exports.SelectDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'select-demo',
	    template: template
	}), _dec(_class = function () {
	    function SelectDemoComponent() {
	        _classCallCheck(this, SelectDemoComponent);
	
	        this.BasicSelectDemoTpl = _BasicSelectDemo2.default;
	        this.LongSelectDemoTpl = _LongSelectDemo2.default;
	        this.placeholder = 'Select...';
	        this.options = ['Alpha', 'Bravo', 'Charlie'];
	        this.withNumbers = [{ label: 'One', value: 1 }, { label: 'Two', value: 2 }, { label: 'Zero', value: 0 }];
	        this.withNumbersValue = 0;
	        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
	        this.value = 'Bravo';
	        this.state = null;
	        this.headerConfig = {
	            label: 'Add New Item',
	            placeholder: 'Enter item here',
	            onSave: this.create.bind(this)
	        };
	    }
	
	    _createClass(SelectDemoComponent, [{
	        key: 'create',
	        value: function create(opt) {
	            this.options = [].concat(_toConsumableArray(this.options), [opt]);
	        }
	    }]);
	
	    return SelectDemoComponent;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvc2VsZWN0L1NlbGVjdERlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tCQUFBOztBQUVBOzs7QUFEQTs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7O0FBR0EsSUFBTSwweUNBQU47O0lBZ0NhLG1CLFdBQUEsbUIsV0FKWixxQkFBVTtBQUNQLGNBQVUsYUFESDtBQUVQLGNBQVU7QUFGSCxDQUFWLEM7QUFLRyxtQ0FBYztBQUFBOztBQUNWLGFBQUssa0JBQUw7QUFDQSxhQUFLLGlCQUFMO0FBQ0EsYUFBSyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0EsYUFBSyxPQUFMLEdBQWUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixTQUFuQixDQUFmO0FBQ0EsYUFBSyxXQUFMLEdBQW1CLENBQ2YsRUFBRSxPQUFPLEtBQVQsRUFBZ0IsT0FBTyxDQUF2QixFQURlLEVBRWYsRUFBRSxPQUFPLEtBQVQsRUFBZ0IsT0FBTyxDQUF2QixFQUZlLEVBR2YsRUFBRSxPQUFPLE1BQVQsRUFBaUIsT0FBTyxDQUF4QixFQUhlLENBQW5CO0FBS0EsYUFBSyxnQkFBTCxHQUF3QixDQUF4QjtBQUNBLGFBQUssTUFBTCxHQUFjLENBQUMsU0FBRCxFQUFZLFFBQVosRUFBc0IsU0FBdEIsRUFBaUMsVUFBakMsRUFBNkMsWUFBN0MsRUFBMkQsVUFBM0QsRUFBdUUsYUFBdkUsRUFBc0YsVUFBdEYsRUFBa0csU0FBbEcsRUFBNkcsU0FBN0csRUFBd0gsUUFBeEgsRUFBa0ksT0FBbEksRUFBMkksVUFBM0ksRUFBdUosU0FBdkosRUFBa0ssTUFBbEssRUFBMEssUUFBMUssRUFBb0wsVUFBcEwsRUFBZ00sV0FBaE0sRUFBNk0sT0FBN00sRUFBc04sVUFBdE4sRUFBa08sZUFBbE8sRUFBbVAsVUFBblAsRUFBK1AsV0FBL1AsRUFBNFEsYUFBNVEsRUFBMlIsVUFBM1IsRUFBdVMsU0FBdlMsRUFBa1QsVUFBbFQsRUFBOFQsUUFBOVQsRUFBd1UsZUFBeFUsRUFBeVYsWUFBelYsRUFBdVcsWUFBdlcsRUFBcVgsVUFBclgsRUFBaVksY0FBalksRUFBaVosZ0JBQWpaLEVBQW1hLE1BQW5hLEVBQTJhLFVBQTNhLEVBQXViLFFBQXZiLEVBQWljLGNBQWpjLEVBQWlkLGNBQWpkLEVBQWllLGdCQUFqZSxFQUFtZixjQUFuZixFQUFtZ0IsV0FBbmdCLEVBQWdoQixPQUFoaEIsRUFBeWhCLE1BQXpoQixFQUFpaUIsU0FBamlCLEVBQTRpQixVQUE1aUIsRUFBd2pCLFlBQXhqQixFQUFza0IsZUFBdGtCLEVBQXVsQixXQUF2bEIsRUFBb21CLFNBQXBtQixDQUFkO0FBQ0EsYUFBSyxLQUFMLEdBQWEsT0FBYjtBQUNBLGFBQUssS0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLLFlBQUwsR0FBb0I7QUFDaEIsbUJBQU8sY0FEUztBQUVoQix5QkFBYSxpQkFGRztBQUdoQixvQkFBUSxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCO0FBSFEsU0FBcEI7QUFLSDs7OzsrQkFFTSxHLEVBQUs7QUFDUixpQkFBSyxPQUFMLGdDQUFtQixLQUFLLE9BQXhCLElBQWlDLEdBQWpDO0FBQ0giLCJmaWxlIjoiU2VsZWN0RGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IEJhc2ljU2VsZWN0RGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9CYXNpY1NlbGVjdERlbW8uaHRtbCc7XG5pbXBvcnQgTG9uZ1NlbGVjdERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvTG9uZ1NlbGVjdERlbW8uaHRtbCc7XG5cblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPlNlbGVjdCA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy9zZWxlY3RcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+VGhlIHNlbGVjdCBlbGVtZW50ICg8Y29kZT5ub3ZvLXNlbGVjdDwvY29kZT4pIHJlcHJlc2VudHMgYSBjb250cm9sIHRoYXQgcHJlc2VudHMgYSBtZW51IG9mIG9wdGlvbnMuIFRoZSBvcHRpb25zXG4gICAgd2l0aGluIGFyZSBzZXQgYnkgdGhlIDxjb2RlPml0ZW1zPC9jb2RlPiBhdHRyaWJ1dGUuIE9wdGlvbnMgY2FuIGJlIHByZS1zZWxlY3RlZCBmb3IgdGhlIHVzZXIgdXNpbmcgdGhlIDxjb2RlPnZhbHVlPC9jb2RlPlxuICAgIGF0dHJpYnV0ZS48L3A+XG4gICAgXG4gICAgPGJyLz5cblxuICAgIDxoNT5CYXNpYyBFeGFtcGxlczwvaDU+XG4gICAgPHA+XG4gICAgICAgIEJ5IGNsaWNraW5nIG9uIHRoZSA8Y29kZT5ub3ZvLXNlbGVjdDwvY29kZT4gZWxlbWVudCwgdGhlIG9wdGlvbnMgbGlzdCB3aWxsIGJlIGRpc3BsYXllZC4gIFNlbGVjdCBhbnkgb2YgdGhlIG9wdGlvbnNcbiAgICAgICAgYnkgY2xpY2tpbmcgb24gdGhlIGl0ZW0gaW4gdGhlIGxpc3QuICBUaGUgdmFsdWUgc2VsZWN0ZWQgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZSBvcHRpb25zIGxpc3Qgd2lsbCBiZSByZW1vdmVkLlxuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBzZWxlY3QtZGVtb1wiPiR7QmFzaWNTZWxlY3REZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQmFzaWNTZWxlY3REZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+TG90cyBvZiBPcHRpb25zPC9oNT5cbiAgICA8cD5cbiAgICAgICAgVGhlIG1vc3QgY29tbW9uIG5lZWQgZm9yIHRoZSA8Y29kZT5zZWxlY3Q8L2NvZGU+IGNvbXBvbmVudCBpcyB3aGVuIHRoZXJlIGFyZSB0b28gbWFueSBvcHRpb25zIHRoYXQgd291bGQgZml0IG9uXG4gICAgICAgIG9uIHRoZSBzY3JlZW4uIFRoZSBvcHRpb25zIGxpc3Qgd2lsbCBkaXNwbGF5IGFwcHJvcHJpYXRlbHkgYW5kIHNjcm9sbCBhcyBuZWVkZWQuXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHNlbGVjdC1kZW1vXCI+JHtMb25nU2VsZWN0RGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkxvbmdTZWxlY3REZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzZWxlY3QtZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdERlbW9Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLkJhc2ljU2VsZWN0RGVtb1RwbCA9IEJhc2ljU2VsZWN0RGVtb1RwbDtcbiAgICAgICAgdGhpcy5Mb25nU2VsZWN0RGVtb1RwbCA9IExvbmdTZWxlY3REZW1vVHBsO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gJ1NlbGVjdC4uLic7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFsnQWxwaGEnLCAnQnJhdm8nLCAnQ2hhcmxpZSddO1xuICAgICAgICB0aGlzLndpdGhOdW1iZXJzID0gW1xuICAgICAgICAgICAgeyBsYWJlbDogJ09uZScsIHZhbHVlOiAxIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnVHdvJywgdmFsdWU6IDIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdaZXJvJywgdmFsdWU6IDAgfVxuICAgICAgICBdO1xuICAgICAgICB0aGlzLndpdGhOdW1iZXJzVmFsdWUgPSAwO1xuICAgICAgICB0aGlzLnN0YXRlcyA9IFsnQWxhYmFtYScsICdBbGFza2EnLCAnQXJpem9uYScsICdBcmthbnNhcycsICdDYWxpZm9ybmlhJywgJ0NvbG9yYWRvJywgJ0Nvbm5lY3RpY3V0JywgJ0RlbGF3YXJlJywgJ0Zsb3JpZGEnLCAnR2VvcmdpYScsICdIYXdhaWknLCAnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJywgJ0thbnNhcycsICdLZW50dWNreScsICdMb3Vpc2lhbmEnLCAnTWFpbmUnLCAnTWFyeWxhbmQnLCAnTWFzc2FjaHVzZXR0cycsICdNaWNoaWdhbicsICdNaW5uZXNvdGEnLCAnTWlzc2lzc2lwcGknLCAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsICdOZXcgSmVyc2V5JywgJ05ldyBNZXhpY28nLCAnTmV3IFlvcmsnLCAnTm9ydGggRGFrb3RhJywgJ05vcnRoIENhcm9saW5hJywgJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJywgJ1Blbm5zeWx2YW5pYScsICdSaG9kZSBJc2xhbmQnLCAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsICdUZXhhcycsICdVdGFoJywgJ1Zlcm1vbnQnLCAnVmlyZ2luaWEnLCAnV2FzaGluZ3RvbicsICdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ107XG4gICAgICAgIHRoaXMudmFsdWUgPSAnQnJhdm8nO1xuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWFkZXJDb25maWcgPSB7XG4gICAgICAgICAgICBsYWJlbDogJ0FkZCBOZXcgSXRlbScsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0VudGVyIGl0ZW0gaGVyZScsXG4gICAgICAgICAgICBvblNhdmU6IHRoaXMuY3JlYXRlLmJpbmQodGhpcylcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjcmVhdGUob3B0KSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFsuLi50aGlzLm9wdGlvbnMsIG9wdF07XG4gICAgfVxufVxuIl19

/***/ },

/***/ 873:
/***/ function(module, exports) {

	module.exports = "<div>\n    <label>\n        <span class=\"caption\">Selected Value:</span> {{value}}\n    </label>\n    <novo-select [options]=\"options\" [placeholder]=\"placeholder\" [(ngModel)]=\"value\"></novo-select>\n</div>\n<div>\n    <label>\n        <span class=\"caption\">Selected Value:</span> {{withNumbersValue}}\n    </label>\n    <novo-select [options]=\"withNumbers\" [(ngModel)]=\"withNumbersValue\"></novo-select>\n</div>\n<div>\n    <label>\n        <span class=\"caption\">Disabled State</span>\n    </label>\n    <novo-select [options]=\"options\" [placeholder]=\"placeholder\" [(ngModel)]=\"value\" disabled></novo-select>\n</div>\n<div>\n    <label>\n        <span class=\"caption\">No Model With Header</span>\n    </label>\n    <novo-select [options]=\"options\" [placeholder]=\"placeholder\" [headerConfig]=\"headerConfig\"></novo-select>\n</div>\n"

/***/ },

/***/ 874:
/***/ function(module, exports) {

	module.exports = "<div>\n    <label>\n        <span class=\"caption\">Selected Value:</span>{{state}}</label>\n    <novo-select [options]=\"states\" [placeholder]=\"placeholder\" [(ngModel)]=\"state\"></novo-select>\n</div>\n"

/***/ },

/***/ 753:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SlidesDemoComponent = undefined;
	
	var _dec, _class; // NG2
	
	// APP
	
	
	var _core = __webpack_require__(1);
	
	var _BasicSlide = __webpack_require__(875);
	
	var _BasicSlide2 = _interopRequireDefault(_BasicSlide);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Slides <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/slides">(source)</a></small></h1>\n    <p>Slide element to toggle some information</p>\n    \n    <h5>Basic</h5>\n    <div class="example slides-demo">' + _BasicSlide2.default + '</div>\n    <code-snippet [code]="BasicSlideDemoTpl"></code-snippet>\n</div>\n';
	
	var SlidesDemoComponent = exports.SlidesDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'slides-demo',
	    template: template
	}), _dec(_class = function SlidesDemoComponent() {
	    _classCallCheck(this, SlidesDemoComponent);
	
	    this.BasicSlideDemoTpl = _BasicSlide2.default;
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvc2xpZGVzL1NsaWRlc0RlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztrQkFBQTs7QUFFQTs7O0FBREE7O0FBRUE7Ozs7Ozs7O0FBRUEsSUFBTSwyWkFBTjs7SUFlYSxtQixXQUFBLG1CLFdBSloscUJBQVU7QUFDUCxjQUFVLGFBREg7QUFFUCxjQUFVO0FBRkgsQ0FBVixDLGdCQUtHLCtCQUFjO0FBQUE7O0FBQ1YsU0FBSyxpQkFBTDtBQUNILEMiLCJmaWxlIjoiU2xpZGVzRGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IEJhc2ljU2xpZGVEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0Jhc2ljU2xpZGUuaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5TbGlkZXMgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvc2xpZGVzXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPlNsaWRlIGVsZW1lbnQgdG8gdG9nZ2xlIHNvbWUgaW5mb3JtYXRpb248L3A+XG4gICAgXG4gICAgPGg1PkJhc2ljPC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBzbGlkZXMtZGVtb1wiPiR7QmFzaWNTbGlkZURlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJCYXNpY1NsaWRlRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NsaWRlcy1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVzRGVtb0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuQmFzaWNTbGlkZURlbW9UcGwgPSBCYXNpY1NsaWRlRGVtb1RwbDtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 875:
/***/ function(module, exports) {

	module.exports = "<novo-slider [slides]=\"2\">\n    <div slide=\"1\">\n        SLIDE #1\n    </div>\n    <div slide=\"2\">\n        SLIDE #2\n    </div>\n</novo-slider>\n"

/***/ },

/***/ 754:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SwitchDemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// APP
	
	
	var _core = __webpack_require__(1);
	
	var _SwitchDemo = __webpack_require__(876);
	
	var _SwitchDemo2 = _interopRequireDefault(_SwitchDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Switches & Toggles <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/switch">(source)</a></small></h1>\n    <p>Loading animations are used to help indicate to the user that some sort of progress is taking place. These are especially helpful for intensive operations that might take extra time.</p>\n\n    <h2>Types</h2>\n\n    <h5>Tiles</h5>\n    <p>Similar to radio buttons, tiles are used to select a single item. Tiles have a higher visibility than radio buttons, and are used more frequently in data visualizations. Tiles stretch horizontally, so the list they pull from must be small.</p>\n\n    <h5>Switches</h5>\n    <p>Switches are a binary toggle that allow the user to select one of two options. They are most frequently used for an on-off model.</p>\n    <div class="example switch-demo">' + _SwitchDemo2.default + '</div>\n    <code-snippet [code]="SwitchDemoTpl"></code-snippet>\n</div>\n';
	
	var SwitchDemoComponent = exports.SwitchDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'switch-demo',
	    template: template
	}), _dec(_class = function () {
	    function SwitchDemoComponent() {
	        _classCallCheck(this, SwitchDemoComponent);
	
	        this.SwitchDemoTpl = _SwitchDemo2.default;
	        this.toggleCount = 0;
	        this.checked = true;
	    }
	
	    _createClass(SwitchDemoComponent, [{
	        key: 'increment',
	        value: function increment() {
	            this.toggleCount++;
	        }
	    }]);
	
	    return SwitchDemoComponent;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvc3dpdGNoL1N3aXRjaERlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tCQUFBOztBQUVBOzs7QUFEQTs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFNLHMrQkFBTjs7SUFxQmEsbUIsV0FBQSxtQixXQUpaLHFCQUFVO0FBQ1AsY0FBVSxhQURIO0FBRVAsY0FBVTtBQUZILENBQVYsQztBQUtHLG1DQUFjO0FBQUE7O0FBQ1YsYUFBSyxhQUFMO0FBQ0EsYUFBSyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsYUFBSyxPQUFMLEdBQWUsSUFBZjtBQUNIOzs7O29DQUVXO0FBQ1IsaUJBQUssV0FBTDtBQUNIIiwiZmlsZSI6IlN3aXRjaERlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCBTd2l0Y2hEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1N3aXRjaERlbW8uaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5Td2l0Y2hlcyAmIFRvZ2dsZXMgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvc3dpdGNoXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPkxvYWRpbmcgYW5pbWF0aW9ucyBhcmUgdXNlZCB0byBoZWxwIGluZGljYXRlIHRvIHRoZSB1c2VyIHRoYXQgc29tZSBzb3J0IG9mIHByb2dyZXNzIGlzIHRha2luZyBwbGFjZS4gVGhlc2UgYXJlIGVzcGVjaWFsbHkgaGVscGZ1bCBmb3IgaW50ZW5zaXZlIG9wZXJhdGlvbnMgdGhhdCBtaWdodCB0YWtlIGV4dHJhIHRpbWUuPC9wPlxuXG4gICAgPGgyPlR5cGVzPC9oMj5cblxuICAgIDxoNT5UaWxlczwvaDU+XG4gICAgPHA+U2ltaWxhciB0byByYWRpbyBidXR0b25zLCB0aWxlcyBhcmUgdXNlZCB0byBzZWxlY3QgYSBzaW5nbGUgaXRlbS4gVGlsZXMgaGF2ZSBhIGhpZ2hlciB2aXNpYmlsaXR5IHRoYW4gcmFkaW8gYnV0dG9ucywgYW5kIGFyZSB1c2VkIG1vcmUgZnJlcXVlbnRseSBpbiBkYXRhIHZpc3VhbGl6YXRpb25zLiBUaWxlcyBzdHJldGNoIGhvcml6b250YWxseSwgc28gdGhlIGxpc3QgdGhleSBwdWxsIGZyb20gbXVzdCBiZSBzbWFsbC48L3A+XG5cbiAgICA8aDU+U3dpdGNoZXM8L2g1PlxuICAgIDxwPlN3aXRjaGVzIGFyZSBhIGJpbmFyeSB0b2dnbGUgdGhhdCBhbGxvdyB0aGUgdXNlciB0byBzZWxlY3Qgb25lIG9mIHR3byBvcHRpb25zLiBUaGV5IGFyZSBtb3N0IGZyZXF1ZW50bHkgdXNlZCBmb3IgYW4gb24tb2ZmIG1vZGVsLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBzd2l0Y2gtZGVtb1wiPiR7U3dpdGNoRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlN3aXRjaERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzd2l0Y2gtZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaERlbW9Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLlN3aXRjaERlbW9UcGwgPSBTd2l0Y2hEZW1vVHBsO1xuICAgICAgICB0aGlzLnRvZ2dsZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnQoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlQ291bnQrKztcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 876:
/***/ function(module, exports) {

	module.exports = "<label>\n    Count\n    <span>{{toggleCount}}</span>\n</label>\n<label>\n    Toggled\n    <span>{{checked}}</span>\n</label>\n<novo-switch [(ngModel)]=\"checked\" (onChange)=\"increment()\"></novo-switch>\n<novo-switch theme=\"grapefruit\"></novo-switch>\n<novo-switch disabled></novo-switch>\n"

/***/ },

/***/ 755:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var TableData = exports.TableData = [{
	    'name': 'Victoria Cantrell',
	    'position': 'Integer Corporation',
	    'office': 'Croatia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/19'),
	    'salary': 208178,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Pearl Crosby',
	    'position': 'In PC',
	    'office': 'Cambodia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/10/08'),
	    'salary': 114367,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Colette Foley',
	    'position': 'Lorem Inc.',
	    'office': 'Korea, North',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/07/19'),
	    'salary': 721473,
	    'status': 'Archived',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Anastasia Shaffer',
	    'position': 'Dolor Nulla Semper LLC',
	    'office': 'Suriname',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/04/20'),
	    'salary': 264620,
	    'status': 'New Lead',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Gabriel Castro',
	    'position': 'Sed Limited',
	    'office': 'Bahrain',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/04'),
	    'salary': 651350,
	    'status': 'New Lead',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Cherokee Ware',
	    'position': 'Tincidunt LLC',
	    'office': 'United Kingdom (Great Britain)',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/17'),
	    'salary': 666259,
	    'status': 'New Lead',
	    'description': 'It’s been a long time coming, but tonight, because of what we did on this day, in this election, at this defining moment, change has come to America.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Barry Moss',
	    'position': 'Sociis Industries',
	    'office': 'Western Sahara',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/13'),
	    'salary': 541631,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Maryam Tucker',
	    'position': 'Elit Pede Malesuada Inc.',
	    'office': 'Brazil',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/10/02'),
	    'salary': 182294,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Constance Clayton',
	    'position': 'Auctor Velit Aliquam LLP',
	    'office': 'United Arab Emirates',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/01'),
	    'salary': 218597,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Rogan Tucker',
	    'position': 'Arcu Vestibulum Ante Associates',
	    'office': 'Jersey',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/04'),
	    'salary': 861632,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Emery Mcdowell',
	    'position': 'Gravida Company',
	    'office': 'New Zealand',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/02'),
	    'salary': 413568,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Yael Greer',
	    'position': 'Orci Limited',
	    'office': 'Madagascar',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/04'),
	    'salary': 121831,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Jared Burgess',
	    'position': 'Auctor Incorporated',
	    'office': 'Burundi',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/12'),
	    'salary': 62243,
	    'status': 'Active',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Sharon Campbell',
	    'position': 'Elit Curabitur Sed Consulting',
	    'office': 'Comoros',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/09/14'),
	    'salary': 200854,
	    'status': 'Active',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Finance']
	}, {
	    'name': 'Yeo Church',
	    'position': 'Donec Vitae Erat PC',
	    'office': 'Saudi Arabia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/07'),
	    'salary': 581193,
	    'status': 'Active',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Finance']
	}, {
	    'name': 'Kylie Barlow',
	    'position': 'Fermentum Risus Corporation',
	    'office': 'Papua New Guinea',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/03'),
	    'salary': 418115,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Temporary', 'Finance']
	}, {
	    'name': 'Nell Leonard',
	    'position': 'Vestibulum Consulting',
	    'office': 'Saudi Arabia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/29'),
	    'salary': 466201,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Temporary', 'Finance']
	}, {
	    'name': 'Brandon Fleming',
	    'position': 'Donec Egestas Associates',
	    'office': 'Poland',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/22'),
	    'salary': 800011,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Temporary', 'Finance']
	}, {
	    'name': 'Inga Pena',
	    'position': 'Et Magnis Dis Limited',
	    'office': 'Belgium',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/18'),
	    'salary': 564245,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Finance']
	}, {
	    'name': 'Arden Russo',
	    'position': 'Est Tempor Bibendum Corp.',
	    'office': 'Dominican Republic',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/07/23'),
	    'salary': 357222,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Finance']
	}, {
	    'name': 'Liberty Gallegos',
	    'position': 'Nec Diam LLC',
	    'office': 'Ghana',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/18'),
	    'salary': 554375,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Dennis York',
	    'position': 'Nullam Suscipit Foundation',
	    'office': 'Namibia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/20'),
	    'salary': 90417,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Petra Chandler',
	    'position': 'Pede Nonummy Inc.',
	    'office': 'Namibia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/26'),
	    'salary': 598915,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Aurelia Marshall',
	    'position': 'Donec Consulting',
	    'office': 'Nicaragua',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/18'),
	    'salary': 201680,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Rose Carter',
	    'position': 'Enim Consequat Purus Industries',
	    'office': 'Morocco',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/06'),
	    'salary': 220187,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Denton Atkins',
	    'position': 'Non Vestibulum PC',
	    'office': 'Mali',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/04/19'),
	    'salary': 324588,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Germaine Osborn',
	    'position': 'Tristique Aliquet PC',
	    'office': 'Lesotho',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/19'),
	    'salary': 351108,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Nell Butler',
	    'position': 'Sit Amet Dapibus Industries',
	    'office': 'Cuba',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/06'),
	    'salary': 230072,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Marketing']
	}, {
	    'name': 'Brent Stein',
	    'position': 'Eu Augue Porttitor LLP',
	    'office': 'Cyprus',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/11/02'),
	    'salary': 853413,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Marketing']
	}, {
	    'name': 'Alexandra Shaw',
	    'position': 'Aenean Gravida Limited',
	    'office': 'Uruguay',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/16'),
	    'salary': 401970,
	    'status': 'Archived',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Marketing']
	}, {
	    'name': 'Veronica Allison',
	    'position': 'Aliquet Diam Sed Institute',
	    'office': 'Samoa',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/17'),
	    'salary': 79193,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Marketing']
	}, {
	    'name': 'Katelyn Gamble',
	    'position': 'Sed Associates',
	    'office': 'Mauritius',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/20'),
	    'salary': 484299,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Marketing']
	}, {
	    'name': 'James Greer',
	    'position': 'A Dui Incorporated',
	    'office': 'Norway',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/02/21'),
	    'salary': 333518,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Marketing']
	}, {
	    'name': 'Cain Vasquez',
	    'position': 'Nulla Facilisis Suspendisse Institute',
	    'office': 'China',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/27'),
	    'salary': 651761,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Marketing']
	}, {
	    'name': 'Shaeleigh Barr',
	    'position': 'Eleifend Cras Institute',
	    'office': 'Ghana',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/04/01'),
	    'salary': 627095,
	    'status': 'Archived',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Developer']
	}, {
	    'name': 'Baker Mckay',
	    'position': 'Ut Sagittis Associates',
	    'office': 'Isle of Man',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/12'),
	    'salary': 742247,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Developer']
	}, {
	    'name': 'Jayme Pace',
	    'position': 'Cras Eu Tellus Associates',
	    'office': 'Bouvet Island',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/12'),
	    'salary': 591588,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Developer']
	}, {
	    'name': 'Reuben Albert',
	    'position': 'Lobortis Institute',
	    'office': 'Zambia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/04/04'),
	    'salary': 791408,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Developer']
	}, {
	    'name': 'Idola Burns',
	    'position': 'Non Industries',
	    'office': 'Myanmar',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/24'),
	    'salary': 142906,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Developer']
	}, {
	    'name': 'Laura Macias',
	    'position': 'Phasellus Inc.',
	    'office': 'Mauritania',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/11/21'),
	    'salary': 226591,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Nichole Salas',
	    'position': 'Duis PC',
	    'office': 'Madagascar',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/18'),
	    'salary': 234196,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Hunter Walter',
	    'position': 'Ullamcorper Duis Cursus Foundation',
	    'office': 'Brazil',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/02/28'),
	    'salary': 655052,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Asher Rich',
	    'position': 'Mauris Ipsum LLP',
	    'office': 'Paraguay',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/08'),
	    'salary': 222946,
	    'status': 'Archived',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Angela Carlson',
	    'position': 'Donec Tempor Institute',
	    'office': 'Papua New Guinea',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/02/12'),
	    'salary': 562194,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'James Dorsey',
	    'position': 'Ipsum Leo Associates',
	    'office': 'Congo (Brazzaville)',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/10'),
	    'salary': 629925,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Wesley Cobb',
	    'position': 'Nunc Est Incorporated',
	    'office': 'Australia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/30'),
	    'salary': 343476,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Meghan Stephens',
	    'position': 'Interdum PC',
	    'office': 'Turkey',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/10/11'),
	    'salary': 469305,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Bertha Herrera',
	    'position': 'Amet Limited',
	    'office': 'Kenya',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/11/22'),
	    'salary': 56606,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Karina Key',
	    'position': 'Quisque Varius Nam Company',
	    'office': 'France',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/26'),
	    'salary': 314260,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Uriel Carson',
	    'position': 'Penatibus PC',
	    'office': 'Venezuela',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/07'),
	    'salary': 106335,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Mira Baird',
	    'position': 'Felis Orci PC',
	    'office': 'Niue',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/25'),
	    'salary': 515671,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Ursula Parrish',
	    'position': 'Ac Corporation',
	    'office': 'Macao',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/30'),
	    'salary': 72295,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Josephine Sykes',
	    'position': 'Blandit Congue Limited',
	    'office': 'Holy See (Vatican City State)',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/22'),
	    'salary': 694656,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Maggie Sims',
	    'position': 'Vulputate Posuere Industries',
	    'office': 'Sudan',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/11/22'),
	    'salary': 363743,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Rogan Fuentes',
	    'position': 'Vestibulum Accumsan Neque Company',
	    'office': 'Jersey',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/07/29'),
	    'salary': 606004,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Maya Haney',
	    'position': 'Ac Foundation',
	    'office': 'Falkland Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/09/03'),
	    'salary': 745500,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Aquila Battle',
	    'position': 'Sociis Natoque Penatibus Foundation',
	    'office': 'Azerbaijan',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/06'),
	    'salary': 582265,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Connor Coleman',
	    'position': 'Orci Lacus Vestibulum Foundation',
	    'office': 'Croatia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/10/21'),
	    'salary': 416958,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Charity Thomas',
	    'position': 'Convallis Ligula Donec Inc.',
	    'office': 'Benin',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/07/12'),
	    'salary': 540999,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Blythe Powers',
	    'position': 'Amet Orci Limited',
	    'office': 'Falkland Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/23'),
	    'salary': 480067,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Human Resources']
	}, {
	    'name': 'Adria Battle',
	    'position': 'Ornare Lectus Incorporated',
	    'office': 'British Indian Ocean Territory',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/28'),
	    'salary': 257937,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Human Resources']
	}, {
	    'name': 'Melanie Mcintyre',
	    'position': 'Nunc Corp.',
	    'office': 'Mongolia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/06'),
	    'salary': 359737,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Human Resources']
	}, {
	    'name': 'Keely Bauer',
	    'position': 'Nec Tempus Institute',
	    'office': 'Somalia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/09'),
	    'salary': 99718,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Human Resources']
	}, {
	    'name': 'Noelani Strong',
	    'position': 'Nec LLP',
	    'office': 'Iran',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/24'),
	    'salary': 480718,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Human Resources']
	}, {
	    'name': 'Jeanette Henderson',
	    'position': 'Eu Elit Nulla Corporation',
	    'office': 'Italy',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/19'),
	    'salary': 253772,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Candace Huber',
	    'position': 'Sed Institute',
	    'office': 'Uganda',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/16'),
	    'salary': 388879,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Bethany Potter',
	    'position': 'Vivamus Nibh Dolor Incorporated',
	    'office': 'Puerto Rico',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/11/12'),
	    'salary': 747310,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Whoopi Burks',
	    'position': 'Justo Inc.',
	    'office': 'Fiji',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/09/24'),
	    'salary': 803037,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Sheila Long',
	    'position': 'Diam Associates',
	    'office': 'Sao Tome and Principe',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/21'),
	    'salary': 674379,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Sonya Church',
	    'position': 'Laoreet Institute',
	    'office': 'Grenada',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/03'),
	    'salary': 625147,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Shaine Forbes',
	    'position': 'Eu Arcu LLP',
	    'office': 'Cyprus',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/18'),
	    'salary': 208100,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Alexandra Patrick',
	    'position': 'Ligula Donec Inc.',
	    'office': 'Viet Nam',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/04/09'),
	    'salary': 104063,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Patience Vincent',
	    'position': 'Sem Molestie Associates',
	    'office': 'Philippines',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/07/04'),
	    'salary': 673556,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Evelyn Smith',
	    'position': 'Fusce Industries',
	    'office': 'Togo',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/15'),
	    'salary': 737284,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Kieran Gonzalez',
	    'position': 'Non Corp.',
	    'office': 'Equatorial Guinea',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/24'),
	    'salary': 90195,
	    'status': 'New Lead',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Molly Oneil',
	    'position': 'Non Dui Consulting',
	    'office': 'Belize',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/10/28'),
	    'salary': 140767,
	    'status': 'Archived',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Nigel Davenport',
	    'position': 'Ullamcorper Velit In Industries',
	    'office': 'Vanuatu',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/16'),
	    'salary': 70536,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Thor Young',
	    'position': 'Malesuada Consulting',
	    'office': 'French Southern Territories',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/28'),
	    'salary': 75501,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Finn Delacruz',
	    'position': 'Lorem Industries',
	    'office': 'Cocos (Keeling) Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/11'),
	    'salary': 754967,
	    'status': 'Archived',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Lane Henderson',
	    'position': 'Pede Foundation',
	    'office': 'Kazakhstan',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/07/02'),
	    'salary': 842050,
	    'status': 'Archived',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Shea Potter',
	    'position': 'Curabitur Limited',
	    'office': 'Timor-Leste',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/07'),
	    'salary': 263629,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Brynn Yang',
	    'position': 'Ut Limited',
	    'office': 'Mayotte',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/17'),
	    'salary': 74292,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Kylan Fuentes',
	    'position': 'Sapien Aenean Associates',
	    'office': 'Brazil',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/28'),
	    'salary': 108632,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Lionel Mcbride',
	    'position': 'Ipsum PC',
	    'office': 'Portugal',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/07/11'),
	    'salary': 34244,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Paul Lucas',
	    'position': 'Eget LLP',
	    'office': 'Nicaragua',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/09/30'),
	    'salary': 690834,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Lareina Williamson',
	    'position': 'Imperdiet Ullamcorper Ltd',
	    'office': 'Cocos (Keeling) Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/01'),
	    'salary': 603498,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Amy Acevedo',
	    'position': 'Id Institute',
	    'office': 'Cook Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/02/04'),
	    'salary': 125165,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Nomlanga Silva',
	    'position': 'Eget LLC',
	    'office': 'Belize',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/31'),
	    'salary': 268509,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Amena Stone',
	    'position': 'Enim Incorporated',
	    'office': 'Guinea',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/09/23'),
	    'salary': 214381,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Danielle Coffey',
	    'position': 'Feugiat Placerat Corp.',
	    'office': 'Sao Tome and Principe',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/17'),
	    'salary': 137423,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Buffy Russell',
	    'position': 'Lacus Quisque Ltd',
	    'office': 'Ecuador',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/10/17'),
	    'salary': 612184,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Kaitlin Lamb',
	    'position': 'Malesuada Fringilla Est Associates',
	    'office': 'Algeria',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/10/18'),
	    'salary': 327367,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Leilani Yates',
	    'position': 'Mus Proin LLC',
	    'office': 'South Sudan',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/27'),
	    'salary': 743493,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Jemima Moon',
	    'position': 'Phasellus Corp.',
	    'office': 'South Georgia and The South Sandwich Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/21'),
	    'salary': 496067,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Hiroko Schwartz',
	    'position': 'Neque Institute',
	    'office': 'Saint Vincent and The Grenadines',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/13'),
	    'salary': 178782,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Nathaniel Jensen',
	    'position': 'Mi Tempor Limited',
	    'office': 'Dominica',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/05'),
	    'salary': 37441,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Silas Sweeney',
	    'position': 'Ultrices Institute',
	    'office': 'Turkmenistan',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/11/13'),
	    'salary': 152980,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Jermaine Barry',
	    'position': 'Dapibus Corporation',
	    'office': 'Uzbekistan',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/06'),
	    'salary': 409463,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Tatiana Nichols',
	    'position': 'Nec Diam Industries',
	    'office': 'Cook Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/22'),
	    'salary': 51155,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Rama Waller',
	    'position': 'Sem Pellentesque LLC',
	    'office': 'Andorra',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/01'),
	    'salary': 223227,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvdGFibGUvVGFibGVEYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTSxnQ0FBWSxDQUNyQjtBQUNJLFlBQVEsbUJBRFo7QUFFSSxnQkFBWSxxQkFGaEI7QUFHSSxjQUFVLFNBSGQ7QUFJSSxXQUFPLEVBQUUsT0FBTyxNQUFULEVBSlg7QUFLSSxpQkFBYSxJQUFJLElBQUosQ0FBUyxZQUFULENBTGpCO0FBTUksY0FBVSxNQU5kO0FBT0ksY0FBVSxVQVBkO0FBUUksbUJBQWUsdUxBUm5CO0FBU0ksa0JBQWMsQ0FBQyxXQUFELEVBQWMsV0FBZDtBQVRsQixDQURxQixFQVdsQjtBQUNDLFlBQVEsY0FEVDtBQUVDLGdCQUFZLE9BRmI7QUFHQyxjQUFVLFVBSFg7QUFJQyxXQUFPLEVBQUUsT0FBTyxNQUFULEVBSlI7QUFLQyxpQkFBYSxJQUFJLElBQUosQ0FBUyxZQUFULENBTGQ7QUFNQyxjQUFVLE1BTlg7QUFPQyxjQUFVLFFBUFg7QUFRQyxtQkFBZSx1TEFSaEI7QUFTQyxrQkFBYyxDQUFDLFdBQUQsRUFBYyxXQUFkO0FBVGYsQ0FYa0IsRUFxQmxCO0FBQ0MsWUFBUSxlQURUO0FBRUMsZ0JBQVksWUFGYjtBQUdDLGNBQVUsY0FIWDtBQUlDLFdBQU8sRUFBRSxPQUFPLE1BQVQsRUFKUjtBQUtDLGlCQUFhLElBQUksSUFBSixDQUFTLFlBQVQsQ0FMZDtBQU1DLGNBQVUsTUFOWDtBQU9DLGNBQVUsVUFQWDtBQVFDLG1CQUFlLDRPQVJoQjtBQVNDLGtCQUFjLENBQUMsV0FBRCxFQUFjLFdBQWQ7QUFUZixDQXJCa0IsRUErQmxCO0FBQ0MsWUFBUSxtQkFEVDtBQUVDLGdCQUFZLHdCQUZiO0FBR0MsY0FBVSxVQUhYO0FBSUMsV0FBTyxFQUFFLE9BQU8sTUFBVCxFQUpSO0FBS0MsaUJBQWEsSUFBSSxJQUFKLENBQVMsWUFBVCxDQUxkO0FBTUMsY0FBVSxNQU5YO0FBT0MsY0FBVSxVQVBYO0FBUUMsbUJB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RUEyOEJsQjtBQUNDLFlBQVEsZ0JBRFQ7QUFFQyxnQkFBWSxxQkFGYjtBQUdDLGNBQVUsWUFIWDtBQUlDLFdBQU8sRUFBRSxPQUFPLE1BQVQsRUFKUjtBQUtDLGlCQUFhLElBQUksSUFBSixDQUFTLFlBQVQsQ0FMZDtBQU1DLGNBQVUsTUFOWDtBQU9DLGNBQVUsUUFQWDtBQVFDLG1CQUFlLHVMQVJoQjtBQVNDLGtCQUFjLENBQUMsZUFBRDtBQVRmLENBMzhCa0IsRUFxOUJsQjtBQUNDLFlBQVEsaUJBRFQ7QUFFQyxnQkFBWSxxQkFGYjtBQUdDLGNBQVUsY0FIWDtBQUlDLFdBQU8sRUFBRSxPQUFPLE1BQVQsRUFKUjtBQUtDLGlCQUFhLElBQUksSUFBSixDQUFTLFlBQVQsQ0FMZDtBQU1DLGNBQVUsS0FOWDtBQU9DLGNBQVUsUUFQWDtBQVFDLG1CQUFlLHVMQVJoQjtBQVNDLGtCQUFjLENBQUMsZUFBRDtBQVRmLENBcjlCa0IsRUErOUJsQjtBQUNDLFlBQVEsYUFEVDtBQUVDLGdCQUFZLHNCQUZiO0FBR0MsY0FBVSxTQUhYO0FBSUMsV0FBTyxFQUFFLE9BQU8sTUFBVCxFQUpSO0FBS0MsaUJBQWEsSUFBSSxJQUFKLENBQVMsWUFBVCxDQUxkO0FBTUMsY0FBVSxNQU5YO0FBT0MsY0FBVSxRQVBYO0FBUUMsbUJBQWUsdUxBUmhCO0FBU0Msa0JBQWMsQ0FBQyxlQUFEO0FBVGYsQ0EvOUJrQixDQUFsQiIsImZpbGUiOiJUYWJsZURhdGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBUYWJsZURhdGEgPSBbXG4gICAge1xuICAgICAgICAnbmFtZSc6ICdWaWN0b3JpYSBDYW50cmVsbCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdJbnRlZ2VyIENvcnBvcmF0aW9uJyxcbiAgICAgICAgJ29mZmljZSc6ICdDcm9hdGlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDgvMTknKSxcbiAgICAgICAgJ3NhbGFyeSc6IDIwODE3OCxcbiAgICAgICAgJ3N0YXR1cyc6ICdOZXcgTGVhZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnUGVhcmwgQ3Jvc2J5JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0luIFBDJyxcbiAgICAgICAgJ29mZmljZSc6ICdDYW1ib2RpYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzEwLzA4JyksXG4gICAgICAgICdzYWxhcnknOiAxMTQzNjcsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdDb2xldHRlIEZvbGV5JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0xvcmVtIEluYy4nLFxuICAgICAgICAnb2ZmaWNlJzogJ0tvcmVhLCBOb3J0aCcsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA3LzE5JyksXG4gICAgICAgICdzYWxhcnknOiA3MjE0NzMsXG4gICAgICAgICdzdGF0dXMnOiAnQXJjaGl2ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVG8gbXkgY2FtcGFpZ24gbWFuYWdlciBEYXZpZCBQbG91ZmZlLCBteSBjaGllZiBzdHJhdGVnaXN0IERhdmlkIEF4ZWxyb2QsIGFuZCB0aGUgYmVzdCBjYW1wYWlnbiB0ZWFtIGV2ZXIgYXNzZW1ibGVkIGluIHRoZSBoaXN0b3J5IG9mIHBvbGl0aWNzIOKAkyB5b3UgbWFkZSB0aGlzIGhhcHBlbiwgYW5kIEkgYW0gZm9yZXZlciBncmF0ZWZ1bCBmb3Igd2hhdCB5b3XigJl2ZSBzYWNyaWZpY2VkIHRvIGdldCBpdCBkb25lLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0FuYXN0YXNpYSBTaGFmZmVyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0RvbG9yIE51bGxhIFNlbXBlciBMTEMnLFxuICAgICAgICAnb2ZmaWNlJzogJ1N1cmluYW1lJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDQvMjAnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDI2NDYyMCxcbiAgICAgICAgJ3N0YXR1cyc6ICdOZXcgTGVhZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBbmQgdG8gYWxsIHRob3NlIHdhdGNoaW5nIHRvbmlnaHQgZnJvbSBiZXlvbmQgb3VyIHNob3JlcywgZnJvbSBwYXJsaWFtZW50cyBhbmQgcGFsYWNlcyB0byB0aG9zZSB3aG8gYXJlIGh1ZGRsZWQgYXJvdW5kIHJhZGlvcyBpbiB0aGUgZm9yZ290dGVuIGNvcm5lcnMgb2Ygb3VyIHdvcmxkIOKAkyBvdXIgc3RvcmllcyBhcmUgc2luZ3VsYXIsIGJ1dCBvdXIgZGVzdGlueSBpcyBzaGFyZWQsIGFuZCBhIG5ldyBkYXduIG9mIEFtZXJpY2FuIGxlYWRlcnNoaXAgaXMgYXQgaGFuZC4gVG8gdGhvc2Ugd2hvIHdvdWxkIHRlYXIgdGhpcyB3b3JsZCBkb3duIOKAkyB3ZSB3aWxsIGRlZmVhdCB5b3UuIFRvIHRob3NlIHdobyBzZWVrIHBlYWNlIGFuZCBzZWN1cml0eSDigJMgd2Ugc3VwcG9ydCB5b3UuIEFuZCB0byBhbGwgdGhvc2Ugd2hvIGhhdmUgd29uZGVyZWQgaWYgQW1lcmljYeKAmXMgYmVhY29uIHN0aWxsIGJ1cm5zIGFzIGJyaWdodCDigJMgdG9uaWdodCB3ZSBwcm92ZWQgb25jZSBtb3JlIHRoYXQgdGhlIHRydWUgc3RyZW5ndGggb2Ygb3VyIG5hdGlvbiBjb21lcyBub3QgZnJvbSBvdXIgdGhlIG1pZ2h0IG9mIG91ciBhcm1zIG9yIHRoZSBzY2FsZSBvZiBvdXIgd2VhbHRoLCBidXQgZnJvbSB0aGUgZW5kdXJpbmcgcG93ZXIgb2Ygb3VyIGlkZWFsczogZGVtb2NyYWN5LCBsaWJlcnR5LCBvcHBvcnR1bml0eSwgYW5kIHVueWllbGRpbmcgaG9wZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdHYWJyaWVsIENhc3RybycsXG4gICAgICAgICdwb3NpdGlvbic6ICdTZWQgTGltaXRlZCcsXG4gICAgICAgICdvZmZpY2UnOiAnQmFocmFpbicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAzLzA0JyksXG4gICAgICAgICdzYWxhcnknOiA2NTEzNTAsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSSB3YW50IHRvIHRoYW5rIG15IHBhcnRuZXIgaW4gdGhpcyBqb3VybmV5LCBhIG1hbiB3aG8gY2FtcGFpZ25lZCBmcm9tIGhpcyBoZWFydCBhbmQgc3Bva2UgZm9yIHRoZSBtZW4gYW5kIHdvbWVuIGhlIGdyZXcgdXAgd2l0aCBvbiB0aGUgc3RyZWV0cyBvZiBTY3JhbnRvbiBhbmQgcm9kZSB3aXRoIG9uIHRoYXQgdHJhaW4gaG9tZSB0byBEZWxhd2FyZSwgdGhlIFZpY2UgUHJlc2lkZW50LWVsZWN0IG9mIHRoZSBVbml0ZWQgU3RhdGVzLCBKb2UgQmlkZW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQ2hlcm9rZWUgV2FyZScsXG4gICAgICAgICdwb3NpdGlvbic6ICdUaW5jaWR1bnQgTExDJyxcbiAgICAgICAgJ29mZmljZSc6ICdVbml0ZWQgS2luZ2RvbSAoR3JlYXQgQnJpdGFpbiknLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNi8xNycpLFxuICAgICAgICAnc2FsYXJ5JzogNjY2MjU5LFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0l04oCZcyBiZWVuIGEgbG9uZyB0aW1lIGNvbWluZywgYnV0IHRvbmlnaHQsIGJlY2F1c2Ugb2Ygd2hhdCB3ZSBkaWQgb24gdGhpcyBkYXksIGluIHRoaXMgZWxlY3Rpb24sIGF0IHRoaXMgZGVmaW5pbmcgbW9tZW50LCBjaGFuZ2UgaGFzIGNvbWUgdG8gQW1lcmljYS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdCYXJyeSBNb3NzJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1NvY2lpcyBJbmR1c3RyaWVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdXZXN0ZXJuIFNhaGFyYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA4LzEzJyksXG4gICAgICAgICdzYWxhcnknOiA1NDE2MzEsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVG8gbXkgY2FtcGFpZ24gbWFuYWdlciBEYXZpZCBQbG91ZmZlLCBteSBjaGllZiBzdHJhdGVnaXN0IERhdmlkIEF4ZWxyb2QsIGFuZCB0aGUgYmVzdCBjYW1wYWlnbiB0ZWFtIGV2ZXIgYXNzZW1ibGVkIGluIHRoZSBoaXN0b3J5IG9mIHBvbGl0aWNzIOKAkyB5b3UgbWFkZSB0aGlzIGhhcHBlbiwgYW5kIEkgYW0gZm9yZXZlciBncmF0ZWZ1bCBmb3Igd2hhdCB5b3XigJl2ZSBzYWNyaWZpY2VkIHRvIGdldCBpdCBkb25lLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ01hcnlhbSBUdWNrZXInLFxuICAgICAgICAncG9zaXRpb24nOiAnRWxpdCBQZWRlIE1hbGVzdWFkYSBJbmMuJyxcbiAgICAgICAgJ29mZmljZSc6ICdCcmF6aWwnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMC8wMicpLFxuICAgICAgICAnc2FsYXJ5JzogMTgyMjk0LFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RvIG15IGNhbXBhaWduIG1hbmFnZXIgRGF2aWQgUGxvdWZmZSwgbXkgY2hpZWYgc3RyYXRlZ2lzdCBEYXZpZCBBeGVscm9kLCBhbmQgdGhlIGJlc3QgY2FtcGFpZ24gdGVhbSBldmVyIGFzc2VtYmxlZCBpbiB0aGUgaGlzdG9yeSBvZiBwb2xpdGljcyDigJMgeW91IG1hZGUgdGhpcyBoYXBwZW4sIGFuZCBJIGFtIGZvcmV2ZXIgZ3JhdGVmdWwgZm9yIHdoYXQgeW914oCZdmUgc2FjcmlmaWNlZCB0byBnZXQgaXQgZG9uZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdDb25zdGFuY2UgQ2xheXRvbicsXG4gICAgICAgICdwb3NpdGlvbic6ICdBdWN0b3IgVmVsaXQgQWxpcXVhbSBMTFAnLFxuICAgICAgICAnb2ZmaWNlJzogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDgvMDEnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDIxODU5NyxcbiAgICAgICAgJ3N0YXR1cyc6ICdOZXcgTGVhZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUbyBteSBjYW1wYWlnbiBtYW5hZ2VyIERhdmlkIFBsb3VmZmUsIG15IGNoaWVmIHN0cmF0ZWdpc3QgRGF2aWQgQXhlbHJvZCwgYW5kIHRoZSBiZXN0IGNhbXBhaWduIHRlYW0gZXZlciBhc3NlbWJsZWQgaW4gdGhlIGhpc3Rvcnkgb2YgcG9saXRpY3Mg4oCTIHlvdSBtYWRlIHRoaXMgaGFwcGVuLCBhbmQgSSBhbSBmb3JldmVyIGdyYXRlZnVsIGZvciB3aGF0IHlvdeKAmXZlIHNhY3JpZmljZWQgdG8gZ2V0IGl0IGRvbmUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnUm9nYW4gVHVja2VyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0FyY3UgVmVzdGlidWx1bSBBbnRlIEFzc29jaWF0ZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ0plcnNleScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAxLzA0JyksXG4gICAgICAgICdzYWxhcnknOiA4NjE2MzIsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVG8gbXkgY2FtcGFpZ24gbWFuYWdlciBEYXZpZCBQbG91ZmZlLCBteSBjaGllZiBzdHJhdGVnaXN0IERhdmlkIEF4ZWxyb2QsIGFuZCB0aGUgYmVzdCBjYW1wYWlnbiB0ZWFtIGV2ZXIgYXNzZW1ibGVkIGluIHRoZSBoaXN0b3J5IG9mIHBvbGl0aWNzIOKAkyB5b3UgbWFkZSB0aGlzIGhhcHBlbiwgYW5kIEkgYW0gZm9yZXZlciBncmF0ZWZ1bCBmb3Igd2hhdCB5b3XigJl2ZSBzYWNyaWZpY2VkIHRvIGdldCBpdCBkb25lLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0VtZXJ5IE1jZG93ZWxsJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0dyYXZpZGEgQ29tcGFueScsXG4gICAgICAgICdvZmZpY2UnOiAnTmV3IFplYWxhbmQnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNi8wMicpLFxuICAgICAgICAnc2FsYXJ5JzogNDEzNTY4LFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RvIG15IGNhbXBhaWduIG1hbmFnZXIgRGF2aWQgUGxvdWZmZSwgbXkgY2hpZWYgc3RyYXRlZ2lzdCBEYXZpZCBBeGVscm9kLCBhbmQgdGhlIGJlc3QgY2FtcGFpZ24gdGVhbSBldmVyIGFzc2VtYmxlZCBpbiB0aGUgaGlzdG9yeSBvZiBwb2xpdGljcyDigJMgeW91IG1hZGUgdGhpcyBoYXBwZW4sIGFuZCBJIGFtIGZvcmV2ZXIgZ3JhdGVmdWwgZm9yIHdoYXQgeW914oCZdmUgc2FjcmlmaWNlZCB0byBnZXQgaXQgZG9uZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdZYWVsIEdyZWVyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ09yY2kgTGltaXRlZCcsXG4gICAgICAgICdvZmZpY2UnOiAnTWFkYWdhc2NhcicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzEyLzA0JyksXG4gICAgICAgICdzYWxhcnknOiAxMjE4MzEsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVG8gbXkgY2FtcGFpZ24gbWFuYWdlciBEYXZpZCBQbG91ZmZlLCBteSBjaGllZiBzdHJhdGVnaXN0IERhdmlkIEF4ZWxyb2QsIGFuZCB0aGUgYmVzdCBjYW1wYWlnbiB0ZWFtIGV2ZXIgYXNzZW1ibGVkIGluIHRoZSBoaXN0b3J5IG9mIHBvbGl0aWNzIOKAkyB5b3UgbWFkZSB0aGlzIGhhcHBlbiwgYW5kIEkgYW0gZm9yZXZlciBncmF0ZWZ1bCBmb3Igd2hhdCB5b3XigJl2ZSBzYWNyaWZpY2VkIHRvIGdldCBpdCBkb25lLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0phcmVkIEJ1cmdlc3MnLFxuICAgICAgICAncG9zaXRpb24nOiAnQXVjdG9yIEluY29ycG9yYXRlZCcsXG4gICAgICAgICdvZmZpY2UnOiAnQnVydW5kaScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAxLzEyJyksXG4gICAgICAgICdzYWxhcnknOiA2MjI0MyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVG8gbXkgY2FtcGFpZ24gbWFuYWdlciBEYXZpZCBQbG91ZmZlLCBteSBjaGllZiBzdHJhdGVnaXN0IERhdmlkIEF4ZWxyb2QsIGFuZCB0aGUgYmVzdCBjYW1wYWlnbiB0ZWFtIGV2ZXIgYXNzZW1ibGVkIGluIHRoZSBoaXN0b3J5IG9mIHBvbGl0aWNzIOKAkyB5b3UgbWFkZSB0aGlzIGhhcHBlbiwgYW5kIEkgYW0gZm9yZXZlciBncmF0ZWZ1bCBmb3Igd2hhdCB5b3XigJl2ZSBzYWNyaWZpY2VkIHRvIGdldCBpdCBkb25lLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1NoYXJvbiBDYW1wYmVsbCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdFbGl0IEN1cmFiaXR1ciBTZWQgQ29uc3VsdGluZycsXG4gICAgICAgICdvZmZpY2UnOiAnQ29tb3JvcycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA5LzE0JyksXG4gICAgICAgICdzYWxhcnknOiAyMDA4NTQsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RvIG15IGNhbXBhaWduIG1hbmFnZXIgRGF2aWQgUGxvdWZmZSwgbXkgY2hpZWYgc3RyYXRlZ2lzdCBEYXZpZCBBeGVscm9kLCBhbmQgdGhlIGJlc3QgY2FtcGFpZ24gdGVhbSBldmVyIGFzc2VtYmxlZCBpbiB0aGUgaGlzdG9yeSBvZiBwb2xpdGljcyDigJMgeW91IG1hZGUgdGhpcyBoYXBwZW4sIGFuZCBJIGFtIGZvcmV2ZXIgZ3JhdGVmdWwgZm9yIHdoYXQgeW914oCZdmUgc2FjcmlmaWNlZCB0byBnZXQgaXQgZG9uZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0ZpbmFuY2UnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnWWVvIENodXJjaCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdEb25lYyBWaXRhZSBFcmF0IFBDJyxcbiAgICAgICAgJ29mZmljZSc6ICdTYXVkaSBBcmFiaWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNi8wNycpLFxuICAgICAgICAnc2FsYXJ5JzogNTgxMTkzLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUbyBteSBjYW1wYWlnbiBtYW5hZ2VyIERhdmlkIFBsb3VmZmUsIG15IGNoaWVmIHN0cmF0ZWdpc3QgRGF2aWQgQXhlbHJvZCwgYW5kIHRoZSBiZXN0IGNhbXBhaWduIHRlYW0gZXZlciBhc3NlbWJsZWQgaW4gdGhlIGhpc3Rvcnkgb2YgcG9saXRpY3Mg4oCTIHlvdSBtYWRlIHRoaXMgaGFwcGVuLCBhbmQgSSBhbSBmb3JldmVyIGdyYXRlZnVsIGZvciB3aGF0IHlvdeKAmXZlIHNhY3JpZmljZWQgdG8gZ2V0IGl0IGRvbmUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdGaW5hbmNlJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0t5bGllIEJhcmxvdycsXG4gICAgICAgICdwb3NpdGlvbic6ICdGZXJtZW50dW0gUmlzdXMgQ29ycG9yYXRpb24nLFxuICAgICAgICAnb2ZmaWNlJzogJ1BhcHVhIE5ldyBHdWluZWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMi8wMycpLFxuICAgICAgICAnc2FsYXJ5JzogNDE4MTE1LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBbmQgdG8gYWxsIHRob3NlIHdhdGNoaW5nIHRvbmlnaHQgZnJvbSBiZXlvbmQgb3VyIHNob3JlcywgZnJvbSBwYXJsaWFtZW50cyBhbmQgcGFsYWNlcyB0byB0aG9zZSB3aG8gYXJlIGh1ZGRsZWQgYXJvdW5kIHJhZGlvcyBpbiB0aGUgZm9yZ290dGVuIGNvcm5lcnMgb2Ygb3VyIHdvcmxkIOKAkyBvdXIgc3RvcmllcyBhcmUgc2luZ3VsYXIsIGJ1dCBvdXIgZGVzdGlueSBpcyBzaGFyZWQsIGFuZCBhIG5ldyBkYXduIG9mIEFtZXJpY2FuIGxlYWRlcnNoaXAgaXMgYXQgaGFuZC4gVG8gdGhvc2Ugd2hvIHdvdWxkIHRlYXIgdGhpcyB3b3JsZCBkb3duIOKAkyB3ZSB3aWxsIGRlZmVhdCB5b3UuIFRvIHRob3NlIHdobyBzZWVrIHBlYWNlIGFuZCBzZWN1cml0eSDigJMgd2Ugc3VwcG9ydCB5b3UuIEFuZCB0byBhbGwgdGhvc2Ugd2hvIGhhdmUgd29uZGVyZWQgaWYgQW1lcmljYeKAmXMgYmVhY29uIHN0aWxsIGJ1cm5zIGFzIGJyaWdodCDigJMgdG9uaWdodCB3ZSBwcm92ZWQgb25jZSBtb3JlIHRoYXQgdGhlIHRydWUgc3RyZW5ndGggb2Ygb3VyIG5hdGlvbiBjb21lcyBub3QgZnJvbSBvdXIgdGhlIG1pZ2h0IG9mIG91ciBhcm1zIG9yIHRoZSBzY2FsZSBvZiBvdXIgd2VhbHRoLCBidXQgZnJvbSB0aGUgZW5kdXJpbmcgcG93ZXIgb2Ygb3VyIGlkZWFsczogZGVtb2NyYWN5LCBsaWJlcnR5LCBvcHBvcnR1bml0eSwgYW5kIHVueWllbGRpbmcgaG9wZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0ZpbmFuY2UnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTmVsbCBMZW9uYXJkJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1Zlc3RpYnVsdW0gQ29uc3VsdGluZycsXG4gICAgICAgICdvZmZpY2UnOiAnU2F1ZGkgQXJhYmlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDUvMjknKSxcbiAgICAgICAgJ3NhbGFyeSc6IDQ2NjIwMSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQW5kIHRvIGFsbCB0aG9zZSB3YXRjaGluZyB0b25pZ2h0IGZyb20gYmV5b25kIG91ciBzaG9yZXMsIGZyb20gcGFybGlhbWVudHMgYW5kIHBhbGFjZXMgdG8gdGhvc2Ugd2hvIGFyZSBodWRkbGVkIGFyb3VuZCByYWRpb3MgaW4gdGhlIGZvcmdvdHRlbiBjb3JuZXJzIG9mIG91ciB3b3JsZCDigJMgb3VyIHN0b3JpZXMgYXJlIHNpbmd1bGFyLCBidXQgb3VyIGRlc3RpbnkgaXMgc2hhcmVkLCBhbmQgYSBuZXcgZGF3biBvZiBBbWVyaWNhbiBsZWFkZXJzaGlwIGlzIGF0IGhhbmQuIFRvIHRob3NlIHdobyB3b3VsZCB0ZWFyIHRoaXMgd29ybGQgZG93biDigJMgd2Ugd2lsbCBkZWZlYXQgeW91LiBUbyB0aG9zZSB3aG8gc2VlayBwZWFjZSBhbmQgc2VjdXJpdHkg4oCTIHdlIHN1cHBvcnQgeW91LiBBbmQgdG8gYWxsIHRob3NlIHdobyBoYXZlIHdvbmRlcmVkIGlmIEFtZXJpY2HigJlzIGJlYWNvbiBzdGlsbCBidXJucyBhcyBicmlnaHQg4oCTIHRvbmlnaHQgd2UgcHJvdmVkIG9uY2UgbW9yZSB0aGF0IHRoZSB0cnVlIHN0cmVuZ3RoIG9mIG91ciBuYXRpb24gY29tZXMgbm90IGZyb20gb3VyIHRoZSBtaWdodCBvZiBvdXIgYXJtcyBvciB0aGUgc2NhbGUgb2Ygb3VyIHdlYWx0aCwgYnV0IGZyb20gdGhlIGVuZHVyaW5nIHBvd2VyIG9mIG91ciBpZGVhbHM6IGRlbW9jcmFjeSwgbGliZXJ0eSwgb3Bwb3J0dW5pdHksIGFuZCB1bnlpZWxkaW5nIGhvcGUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdGaW5hbmNlJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0JyYW5kb24gRmxlbWluZycsXG4gICAgICAgICdwb3NpdGlvbic6ICdEb25lYyBFZ2VzdGFzIEFzc29jaWF0ZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ1BvbGFuZCcsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAxLzIyJyksXG4gICAgICAgICdzYWxhcnknOiA4MDAwMTEsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0FuZCB0byBhbGwgdGhvc2Ugd2F0Y2hpbmcgdG9uaWdodCBmcm9tIGJleW9uZCBvdXIgc2hvcmVzLCBmcm9tIHBhcmxpYW1lbnRzIGFuZCBwYWxhY2VzIHRvIHRob3NlIHdobyBhcmUgaHVkZGxlZCBhcm91bmQgcmFkaW9zIGluIHRoZSBmb3Jnb3R0ZW4gY29ybmVycyBvZiBvdXIgd29ybGQg4oCTIG91ciBzdG9yaWVzIGFyZSBzaW5ndWxhciwgYnV0IG91ciBkZXN0aW55IGlzIHNoYXJlZCwgYW5kIGEgbmV3IGRhd24gb2YgQW1lcmljYW4gbGVhZGVyc2hpcCBpcyBhdCBoYW5kLiBUbyB0aG9zZSB3aG8gd291bGQgdGVhciB0aGlzIHdvcmxkIGRvd24g4oCTIHdlIHdpbGwgZGVmZWF0IHlvdS4gVG8gdGhvc2Ugd2hvIHNlZWsgcGVhY2UgYW5kIHNlY3VyaXR5IOKAkyB3ZSBzdXBwb3J0IHlvdS4gQW5kIHRvIGFsbCB0aG9zZSB3aG8gaGF2ZSB3b25kZXJlZCBpZiBBbWVyaWNh4oCZcyBiZWFjb24gc3RpbGwgYnVybnMgYXMgYnJpZ2h0IOKAkyB0b25pZ2h0IHdlIHByb3ZlZCBvbmNlIG1vcmUgdGhhdCB0aGUgdHJ1ZSBzdHJlbmd0aCBvZiBvdXIgbmF0aW9uIGNvbWVzIG5vdCBmcm9tIG91ciB0aGUgbWlnaHQgb2Ygb3VyIGFybXMgb3IgdGhlIHNjYWxlIG9mIG91ciB3ZWFsdGgsIGJ1dCBmcm9tIHRoZSBlbmR1cmluZyBwb3dlciBvZiBvdXIgaWRlYWxzOiBkZW1vY3JhY3ksIGxpYmVydHksIG9wcG9ydHVuaXR5LCBhbmQgdW55aWVsZGluZyBob3BlLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRmluYW5jZSddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdJbmdhIFBlbmEnLFxuICAgICAgICAncG9zaXRpb24nOiAnRXQgTWFnbmlzIERpcyBMaW1pdGVkJyxcbiAgICAgICAgJ29mZmljZSc6ICdCZWxnaXVtJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDUvMTgnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDU2NDI0NSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQW5kIHRvIGFsbCB0aG9zZSB3YXRjaGluZyB0b25pZ2h0IGZyb20gYmV5b25kIG91ciBzaG9yZXMsIGZyb20gcGFybGlhbWVudHMgYW5kIHBhbGFjZXMgdG8gdGhvc2Ugd2hvIGFyZSBodWRkbGVkIGFyb3VuZCByYWRpb3MgaW4gdGhlIGZvcmdvdHRlbiBjb3JuZXJzIG9mIG91ciB3b3JsZCDigJMgb3VyIHN0b3JpZXMgYXJlIHNpbmd1bGFyLCBidXQgb3VyIGRlc3RpbnkgaXMgc2hhcmVkLCBhbmQgYSBuZXcgZGF3biBvZiBBbWVyaWNhbiBsZWFkZXJzaGlwIGlzIGF0IGhhbmQuIFRvIHRob3NlIHdobyB3b3VsZCB0ZWFyIHRoaXMgd29ybGQgZG93biDigJMgd2Ugd2lsbCBkZWZlYXQgeW91LiBUbyB0aG9zZSB3aG8gc2VlayBwZWFjZSBhbmQgc2VjdXJpdHkg4oCTIHdlIHN1cHBvcnQgeW91LiBBbmQgdG8gYWxsIHRob3NlIHdobyBoYXZlIHdvbmRlcmVkIGlmIEFtZXJpY2HigJlzIGJlYWNvbiBzdGlsbCBidXJucyBhcyBicmlnaHQg4oCTIHRvbmlnaHQgd2UgcHJvdmVkIG9uY2UgbW9yZSB0aGF0IHRoZSB0cnVlIHN0cmVuZ3RoIG9mIG91ciBuYXRpb24gY29tZXMgbm90IGZyb20gb3VyIHRoZSBtaWdodCBvZiBvdXIgYXJtcyBvciB0aGUgc2NhbGUgb2Ygb3VyIHdlYWx0aCwgYnV0IGZyb20gdGhlIGVuZHVyaW5nIHBvd2VyIG9mIG91ciBpZGVhbHM6IGRlbW9jcmFjeSwgbGliZXJ0eSwgb3Bwb3J0dW5pdHksIGFuZCB1bnlpZWxkaW5nIGhvcGUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1Blcm1lbmFudCcsICdGaW5hbmNlJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0FyZGVuIFJ1c3NvJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0VzdCBUZW1wb3IgQmliZW5kdW0gQ29ycC4nLFxuICAgICAgICAnb2ZmaWNlJzogJ0RvbWluaWNhbiBSZXB1YmxpYycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA3LzIzJyksXG4gICAgICAgICdzYWxhcnknOiAzNTcyMjIsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0FuZCB0byBhbGwgdGhvc2Ugd2F0Y2hpbmcgdG9uaWdodCBmcm9tIGJleW9uZCBvdXIgc2hvcmVzLCBmcm9tIHBhcmxpYW1lbnRzIGFuZCBwYWxhY2VzIHRvIHRob3NlIHdobyBhcmUgaHVkZGxlZCBhcm91bmQgcmFkaW9zIGluIHRoZSBmb3Jnb3R0ZW4gY29ybmVycyBvZiBvdXIgd29ybGQg4oCTIG91ciBzdG9yaWVzIGFyZSBzaW5ndWxhciwgYnV0IG91ciBkZXN0aW55IGlzIHNoYXJlZCwgYW5kIGEgbmV3IGRhd24gb2YgQW1lcmljYW4gbGVhZGVyc2hpcCBpcyBhdCBoYW5kLiBUbyB0aG9zZSB3aG8gd291bGQgdGVhciB0aGlzIHdvcmxkIGRvd24g4oCTIHdlIHdpbGwgZGVmZWF0IHlvdS4gVG8gdGhvc2Ugd2hvIHNlZWsgcGVhY2UgYW5kIHNlY3VyaXR5IOKAkyB3ZSBzdXBwb3J0IHlvdS4gQW5kIHRvIGFsbCB0aG9zZSB3aG8gaGF2ZSB3b25kZXJlZCBpZiBBbWVyaWNh4oCZcyBiZWFjb24gc3RpbGwgYnVybnMgYXMgYnJpZ2h0IOKAkyB0b25pZ2h0IHdlIHByb3ZlZCBvbmNlIG1vcmUgdGhhdCB0aGUgdHJ1ZSBzdHJlbmd0aCBvZiBvdXIgbmF0aW9uIGNvbWVzIG5vdCBmcm9tIG91ciB0aGUgbWlnaHQgb2Ygb3VyIGFybXMgb3IgdGhlIHNjYWxlIG9mIG91ciB3ZWFsdGgsIGJ1dCBmcm9tIHRoZSBlbmR1cmluZyBwb3dlciBvZiBvdXIgaWRlYWxzOiBkZW1vY3JhY3ksIGxpYmVydHksIG9wcG9ydHVuaXR5LCBhbmQgdW55aWVsZGluZyBob3BlLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydQZXJtZW5hbnQnLCAnRmluYW5jZSddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdMaWJlcnR5IEdhbGxlZ29zJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ05lYyBEaWFtIExMQycsXG4gICAgICAgICdvZmZpY2UnOiAnR2hhbmEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNi8xOCcpLFxuICAgICAgICAnc2FsYXJ5JzogNTU0Mzc1LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBbmQgdG8gYWxsIHRob3NlIHdhdGNoaW5nIHRvbmlnaHQgZnJvbSBiZXlvbmQgb3VyIHNob3JlcywgZnJvbSBwYXJsaWFtZW50cyBhbmQgcGFsYWNlcyB0byB0aG9zZSB3aG8gYXJlIGh1ZGRsZWQgYXJvdW5kIHJhZGlvcyBpbiB0aGUgZm9yZ290dGVuIGNvcm5lcnMgb2Ygb3VyIHdvcmxkIOKAkyBvdXIgc3RvcmllcyBhcmUgc2luZ3VsYXIsIGJ1dCBvdXIgZGVzdGlueSBpcyBzaGFyZWQsIGFuZCBhIG5ldyBkYXduIG9mIEFtZXJpY2FuIGxlYWRlcnNoaXAgaXMgYXQgaGFuZC4gVG8gdGhvc2Ugd2hvIHdvdWxkIHRlYXIgdGhpcyB3b3JsZCBkb3duIOKAkyB3ZSB3aWxsIGRlZmVhdCB5b3UuIFRvIHRob3NlIHdobyBzZWVrIHBlYWNlIGFuZCBzZWN1cml0eSDigJMgd2Ugc3VwcG9ydCB5b3UuIEFuZCB0byBhbGwgdGhvc2Ugd2hvIGhhdmUgd29uZGVyZWQgaWYgQW1lcmljYeKAmXMgYmVhY29uIHN0aWxsIGJ1cm5zIGFzIGJyaWdodCDigJMgdG9uaWdodCB3ZSBwcm92ZWQgb25jZSBtb3JlIHRoYXQgdGhlIHRydWUgc3RyZW5ndGggb2Ygb3VyIG5hdGlvbiBjb21lcyBub3QgZnJvbSBvdXIgdGhlIG1pZ2h0IG9mIG91ciBhcm1zIG9yIHRoZSBzY2FsZSBvZiBvdXIgd2VhbHRoLCBidXQgZnJvbSB0aGUgZW5kdXJpbmcgcG93ZXIgb2Ygb3VyIGlkZWFsczogZGVtb2NyYWN5LCBsaWJlcnR5LCBvcHBvcnR1bml0eSwgYW5kIHVueWllbGRpbmcgaG9wZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnUGVybWVuYW50JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdEZW5uaXMgWW9yaycsXG4gICAgICAgICdwb3NpdGlvbic6ICdOdWxsYW0gU3VzY2lwaXQgRm91bmRhdGlvbicsXG4gICAgICAgICdvZmZpY2UnOiAnTmFtaWJpYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAzLzIwJyksXG4gICAgICAgICdzYWxhcnknOiA5MDQxNyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQW5kIHRvIGFsbCB0aG9zZSB3YXRjaGluZyB0b25pZ2h0IGZyb20gYmV5b25kIG91ciBzaG9yZXMsIGZyb20gcGFybGlhbWVudHMgYW5kIHBhbGFjZXMgdG8gdGhvc2Ugd2hvIGFyZSBodWRkbGVkIGFyb3VuZCByYWRpb3MgaW4gdGhlIGZvcmdvdHRlbiBjb3JuZXJzIG9mIG91ciB3b3JsZCDigJMgb3VyIHN0b3JpZXMgYXJlIHNpbmd1bGFyLCBidXQgb3VyIGRlc3RpbnkgaXMgc2hhcmVkLCBhbmQgYSBuZXcgZGF3biBvZiBBbWVyaWNhbiBsZWFkZXJzaGlwIGlzIGF0IGhhbmQuIFRvIHRob3NlIHdobyB3b3VsZCB0ZWFyIHRoaXMgd29ybGQgZG93biDigJMgd2Ugd2lsbCBkZWZlYXQgeW91LiBUbyB0aG9zZSB3aG8gc2VlayBwZWFjZSBhbmQgc2VjdXJpdHkg4oCTIHdlIHN1cHBvcnQgeW91LiBBbmQgdG8gYWxsIHRob3NlIHdobyBoYXZlIHdvbmRlcmVkIGlmIEFtZXJpY2HigJlzIGJlYWNvbiBzdGlsbCBidXJucyBhcyBicmlnaHQg4oCTIHRvbmlnaHQgd2UgcHJvdmVkIG9uY2UgbW9yZSB0aGF0IHRoZSB0cnVlIHN0cmVuZ3RoIG9mIG91ciBuYXRpb24gY29tZXMgbm90IGZyb20gb3VyIHRoZSBtaWdodCBvZiBvdXIgYXJtcyBvciB0aGUgc2NhbGUgb2Ygb3VyIHdlYWx0aCwgYnV0IGZyb20gdGhlIGVuZHVyaW5nIHBvd2VyIG9mIG91ciBpZGVhbHM6IGRlbW9jcmFjeSwgbGliZXJ0eSwgb3Bwb3J0dW5pdHksIGFuZCB1bnlpZWxkaW5nIGhvcGUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1Blcm1lbmFudCcsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnUGV0cmEgQ2hhbmRsZXInLFxuICAgICAgICAncG9zaXRpb24nOiAnUGVkZSBOb251bW15IEluYy4nLFxuICAgICAgICAnb2ZmaWNlJzogJ05hbWliaWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMy8yNicpLFxuICAgICAgICAnc2FsYXJ5JzogNTk4OTE1LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBbmQgdG8gYWxsIHRob3NlIHdhdGNoaW5nIHRvbmlnaHQgZnJvbSBiZXlvbmQgb3VyIHNob3JlcywgZnJvbSBwYXJsaWFtZW50cyBhbmQgcGFsYWNlcyB0byB0aG9zZSB3aG8gYXJlIGh1ZGRsZWQgYXJvdW5kIHJhZGlvcyBpbiB0aGUgZm9yZ290dGVuIGNvcm5lcnMgb2Ygb3VyIHdvcmxkIOKAkyBvdXIgc3RvcmllcyBhcmUgc2luZ3VsYXIsIGJ1dCBvdXIgZGVzdGlueSBpcyBzaGFyZWQsIGFuZCBhIG5ldyBkYXduIG9mIEFtZXJpY2FuIGxlYWRlcnNoaXAgaXMgYXQgaGFuZC4gVG8gdGhvc2Ugd2hvIHdvdWxkIHRlYXIgdGhpcyB3b3JsZCBkb3duIOKAkyB3ZSB3aWxsIGRlZmVhdCB5b3UuIFRvIHRob3NlIHdobyBzZWVrIHBlYWNlIGFuZCBzZWN1cml0eSDigJMgd2Ugc3VwcG9ydCB5b3UuIEFuZCB0byBhbGwgdGhvc2Ugd2hvIGhhdmUgd29uZGVyZWQgaWYgQW1lcmljYeKAmXMgYmVhY29uIHN0aWxsIGJ1cm5zIGFzIGJyaWdodCDigJMgdG9uaWdodCB3ZSBwcm92ZWQgb25jZSBtb3JlIHRoYXQgdGhlIHRydWUgc3RyZW5ndGggb2Ygb3VyIG5hdGlvbiBjb21lcyBub3QgZnJvbSBvdXIgdGhlIG1pZ2h0IG9mIG91ciBhcm1zIG9yIHRoZSBzY2FsZSBvZiBvdXIgd2VhbHRoLCBidXQgZnJvbSB0aGUgZW5kdXJpbmcgcG93ZXIgb2Ygb3VyIGlkZWFsczogZGVtb2NyYWN5LCBsaWJlcnR5LCBvcHBvcnR1bml0eSwgYW5kIHVueWllbGRpbmcgaG9wZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnUGVybWVuYW50JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdBdXJlbGlhIE1hcnNoYWxsJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0RvbmVjIENvbnN1bHRpbmcnLFxuICAgICAgICAnb2ZmaWNlJzogJ05pY2FyYWd1YScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA4LzE4JyksXG4gICAgICAgICdzYWxhcnknOiAyMDE2ODAsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0FuZCB0byBhbGwgdGhvc2Ugd2F0Y2hpbmcgdG9uaWdodCBmcm9tIGJleW9uZCBvdXIgc2hvcmVzLCBmcm9tIHBhcmxpYW1lbnRzIGFuZCBwYWxhY2VzIHRvIHRob3NlIHdobyBhcmUgaHVkZGxlZCBhcm91bmQgcmFkaW9zIGluIHRoZSBmb3Jnb3R0ZW4gY29ybmVycyBvZiBvdXIgd29ybGQg4oCTIG91ciBzdG9yaWVzIGFyZSBzaW5ndWxhciwgYnV0IG91ciBkZXN0aW55IGlzIHNoYXJlZCwgYW5kIGEgbmV3IGRhd24gb2YgQW1lcmljYW4gbGVhZGVyc2hpcCBpcyBhdCBoYW5kLiBUbyB0aG9zZSB3aG8gd291bGQgdGVhciB0aGlzIHdvcmxkIGRvd24g4oCTIHdlIHdpbGwgZGVmZWF0IHlvdS4gVG8gdGhvc2Ugd2hvIHNlZWsgcGVhY2UgYW5kIHNlY3VyaXR5IOKAkyB3ZSBzdXBwb3J0IHlvdS4gQW5kIHRvIGFsbCB0aG9zZSB3aG8gaGF2ZSB3b25kZXJlZCBpZiBBbWVyaWNh4oCZcyBiZWFjb24gc3RpbGwgYnVybnMgYXMgYnJpZ2h0IOKAkyB0b25pZ2h0IHdlIHByb3ZlZCBvbmNlIG1vcmUgdGhhdCB0aGUgdHJ1ZSBzdHJlbmd0aCBvZiBvdXIgbmF0aW9uIGNvbWVzIG5vdCBmcm9tIG91ciB0aGUgbWlnaHQgb2Ygb3VyIGFybXMgb3IgdGhlIHNjYWxlIG9mIG91ciB3ZWFsdGgsIGJ1dCBmcm9tIHRoZSBlbmR1cmluZyBwb3dlciBvZiBvdXIgaWRlYWxzOiBkZW1vY3JhY3ksIGxpYmVydHksIG9wcG9ydHVuaXR5LCBhbmQgdW55aWVsZGluZyBob3BlLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydQZXJtZW5hbnQnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1Jvc2UgQ2FydGVyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0VuaW0gQ29uc2VxdWF0IFB1cnVzIEluZHVzdHJpZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ01vcm9jY28nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMy8wNicpLFxuICAgICAgICAnc2FsYXJ5JzogMjIwMTg3LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1Blcm1lbmFudCcsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnRGVudG9uIEF0a2lucycsXG4gICAgICAgICdwb3NpdGlvbic6ICdOb24gVmVzdGlidWx1bSBQQycsXG4gICAgICAgICdvZmZpY2UnOiAnTWFsaScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA0LzE5JyksXG4gICAgICAgICdzYWxhcnknOiAzMjQ1ODgsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnUGVybWVuYW50JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdHZXJtYWluZSBPc2Jvcm4nLFxuICAgICAgICAncG9zaXRpb24nOiAnVHJpc3RpcXVlIEFsaXF1ZXQgUEMnLFxuICAgICAgICAnb2ZmaWNlJzogJ0xlc290aG8nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMS8xOScpLFxuICAgICAgICAnc2FsYXJ5JzogMzUxMTA4LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTmVsbCBCdXRsZXInLFxuICAgICAgICAncG9zaXRpb24nOiAnU2l0IEFtZXQgRGFwaWJ1cyBJbmR1c3RyaWVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdDdWJhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDEvMDYnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDIzMDA3MixcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnTWFya2V0aW5nJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0JyZW50IFN0ZWluJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0V1IEF1Z3VlIFBvcnR0aXRvciBMTFAnLFxuICAgICAgICAnb2ZmaWNlJzogJ0N5cHJ1cycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzExLzAyJyksXG4gICAgICAgICdzYWxhcnknOiA4NTM0MTMsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnTWFya2V0aW5nJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0FsZXhhbmRyYSBTaGF3JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0FlbmVhbiBHcmF2aWRhIExpbWl0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ1VydWd1YXknLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNS8xNicpLFxuICAgICAgICAnc2FsYXJ5JzogNDAxOTcwLFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ01hcmtldGluZyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdWZXJvbmljYSBBbGxpc29uJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0FsaXF1ZXQgRGlhbSBTZWQgSW5zdGl0dXRlJyxcbiAgICAgICAgJ29mZmljZSc6ICdTYW1vYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA1LzE3JyksXG4gICAgICAgICdzYWxhcnknOiA3OTE5MyxcbiAgICAgICAgJ3N0YXR1cyc6ICdOZXcgTGVhZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdNYXJrZXRpbmcnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnS2F0ZWx5biBHYW1ibGUnLFxuICAgICAgICAncG9zaXRpb24nOiAnU2VkIEFzc29jaWF0ZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ01hdXJpdGl1cycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAzLzIwJyksXG4gICAgICAgICdzYWxhcnknOiA0ODQyOTksXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnTWFya2V0aW5nJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0phbWVzIEdyZWVyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0EgRHVpIEluY29ycG9yYXRlZCcsXG4gICAgICAgICdvZmZpY2UnOiAnTm9yd2F5JyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDIvMjEnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDMzMzUxOCxcbiAgICAgICAgJ3N0YXR1cyc6ICdOZXcgTGVhZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbnRyYWN0b3InLCAnTWFya2V0aW5nJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0NhaW4gVmFzcXVleicsXG4gICAgICAgICdwb3NpdGlvbic6ICdOdWxsYSBGYWNpbGlzaXMgU3VzcGVuZGlzc2UgSW5zdGl0dXRlJyxcbiAgICAgICAgJ29mZmljZSc6ICdDaGluYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA1LzI3JyksXG4gICAgICAgICdzYWxhcnknOiA2NTE3NjEsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb250cmFjdG9yJywgJ01hcmtldGluZyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdTaGFlbGVpZ2ggQmFycicsXG4gICAgICAgICdwb3NpdGlvbic6ICdFbGVpZmVuZCBDcmFzIEluc3RpdHV0ZScsXG4gICAgICAgICdvZmZpY2UnOiAnR2hhbmEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNC8wMScpLFxuICAgICAgICAnc2FsYXJ5JzogNjI3MDk1LFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29udHJhY3RvcicsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQmFrZXIgTWNrYXknLFxuICAgICAgICAncG9zaXRpb24nOiAnVXQgU2FnaXR0aXMgQXNzb2NpYXRlcycsXG4gICAgICAgICdvZmZpY2UnOiAnSXNsZSBvZiBNYW4nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMS8xMicpLFxuICAgICAgICAnc2FsYXJ5JzogNzQyMjQ3LFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29udHJhY3RvcicsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnSmF5bWUgUGFjZScsXG4gICAgICAgICdwb3NpdGlvbic6ICdDcmFzIEV1IFRlbGx1cyBBc3NvY2lhdGVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdCb3V2ZXQgSXNsYW5kJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDgvMTInKSxcbiAgICAgICAgJ3NhbGFyeSc6IDU5MTU4OCxcbiAgICAgICAgJ3N0YXR1cyc6ICdOZXcgTGVhZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbnRyYWN0b3InLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1JldWJlbiBBbGJlcnQnLFxuICAgICAgICAncG9zaXRpb24nOiAnTG9ib3J0aXMgSW5zdGl0dXRlJyxcbiAgICAgICAgJ29mZmljZSc6ICdaYW1iaWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNC8wNCcpLFxuICAgICAgICAnc2FsYXJ5JzogNzkxNDA4LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbnRyYWN0b3InLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0lkb2xhIEJ1cm5zJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ05vbiBJbmR1c3RyaWVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdNeWFubWFyJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDYvMjQnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDE0MjkwNixcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb250cmFjdG9yJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdMYXVyYSBNYWNpYXMnLFxuICAgICAgICAncG9zaXRpb24nOiAnUGhhc2VsbHVzIEluYy4nLFxuICAgICAgICAnb2ZmaWNlJzogJ01hdXJpdGFuaWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMS8yMScpLFxuICAgICAgICAnc2FsYXJ5JzogMjI2NTkxLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTmljaG9sZSBTYWxhcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdEdWlzIFBDJyxcbiAgICAgICAgJ29mZmljZSc6ICdNYWRhZ2FzY2FyJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDEvMTgnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDIzNDE5NixcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSSB3YW50IHRvIHRoYW5rIG15IHBhcnRuZXIgaW4gdGhpcyBqb3VybmV5LCBhIG1hbiB3aG8gY2FtcGFpZ25lZCBmcm9tIGhpcyBoZWFydCBhbmQgc3Bva2UgZm9yIHRoZSBtZW4gYW5kIHdvbWVuIGhlIGdyZXcgdXAgd2l0aCBvbiB0aGUgc3RyZWV0cyBvZiBTY3JhbnRvbiBhbmQgcm9kZSB3aXRoIG9uIHRoYXQgdHJhaW4gaG9tZSB0byBEZWxhd2FyZSwgdGhlIFZpY2UgUHJlc2lkZW50LWVsZWN0IG9mIHRoZSBVbml0ZWQgU3RhdGVzLCBKb2UgQmlkZW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnSHVudGVyIFdhbHRlcicsXG4gICAgICAgICdwb3NpdGlvbic6ICdVbGxhbWNvcnBlciBEdWlzIEN1cnN1cyBGb3VuZGF0aW9uJyxcbiAgICAgICAgJ29mZmljZSc6ICdCcmF6aWwnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMi8yOCcpLFxuICAgICAgICAnc2FsYXJ5JzogNjU1MDUyLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdJIHdhbnQgdG8gdGhhbmsgbXkgcGFydG5lciBpbiB0aGlzIGpvdXJuZXksIGEgbWFuIHdobyBjYW1wYWlnbmVkIGZyb20gaGlzIGhlYXJ0IGFuZCBzcG9rZSBmb3IgdGhlIG1lbiBhbmQgd29tZW4gaGUgZ3JldyB1cCB3aXRoIG9uIHRoZSBzdHJlZXRzIG9mIFNjcmFudG9uIGFuZCByb2RlIHdpdGggb24gdGhhdCB0cmFpbiBob21lIHRvIERlbGF3YXJlLCB0aGUgVmljZSBQcmVzaWRlbnQtZWxlY3Qgb2YgdGhlIFVuaXRlZCBTdGF0ZXMsIEpvZSBCaWRlbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdBc2hlciBSaWNoJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ01hdXJpcyBJcHN1bSBMTFAnLFxuICAgICAgICAnb2ZmaWNlJzogJ1BhcmFndWF5JyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDgvMDgnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDIyMjk0NixcbiAgICAgICAgJ3N0YXR1cyc6ICdBcmNoaXZlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdJIHdhbnQgdG8gdGhhbmsgbXkgcGFydG5lciBpbiB0aGlzIGpvdXJuZXksIGEgbWFuIHdobyBjYW1wYWlnbmVkIGZyb20gaGlzIGhlYXJ0IGFuZCBzcG9rZSBmb3IgdGhlIG1lbiBhbmQgd29tZW4gaGUgZ3JldyB1cCB3aXRoIG9uIHRoZSBzdHJlZXRzIG9mIFNjcmFudG9uIGFuZCByb2RlIHdpdGggb24gdGhhdCB0cmFpbiBob21lIHRvIERlbGF3YXJlLCB0aGUgVmljZSBQcmVzaWRlbnQtZWxlY3Qgb2YgdGhlIFVuaXRlZCBTdGF0ZXMsIEpvZSBCaWRlbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdBbmdlbGEgQ2FybHNvbicsXG4gICAgICAgICdwb3NpdGlvbic6ICdEb25lYyBUZW1wb3IgSW5zdGl0dXRlJyxcbiAgICAgICAgJ29mZmljZSc6ICdQYXB1YSBOZXcgR3VpbmVhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDIvMTInKSxcbiAgICAgICAgJ3NhbGFyeSc6IDU2MjE5NCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSSB3YW50IHRvIHRoYW5rIG15IHBhcnRuZXIgaW4gdGhpcyBqb3VybmV5LCBhIG1hbiB3aG8gY2FtcGFpZ25lZCBmcm9tIGhpcyBoZWFydCBhbmQgc3Bva2UgZm9yIHRoZSBtZW4gYW5kIHdvbWVuIGhlIGdyZXcgdXAgd2l0aCBvbiB0aGUgc3RyZWV0cyBvZiBTY3JhbnRvbiBhbmQgcm9kZSB3aXRoIG9uIHRoYXQgdHJhaW4gaG9tZSB0byBEZWxhd2FyZSwgdGhlIFZpY2UgUHJlc2lkZW50LWVsZWN0IG9mIHRoZSBVbml0ZWQgU3RhdGVzLCBKb2UgQmlkZW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnSmFtZXMgRG9yc2V5JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0lwc3VtIExlbyBBc3NvY2lhdGVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdDb25nbyAoQnJhenphdmlsbGUpJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDEvMTAnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDYyOTkyNSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSSB3YW50IHRvIHRoYW5rIG15IHBhcnRuZXIgaW4gdGhpcyBqb3VybmV5LCBhIG1hbiB3aG8gY2FtcGFpZ25lZCBmcm9tIGhpcyBoZWFydCBhbmQgc3Bva2UgZm9yIHRoZSBtZW4gYW5kIHdvbWVuIGhlIGdyZXcgdXAgd2l0aCBvbiB0aGUgc3RyZWV0cyBvZiBTY3JhbnRvbiBhbmQgcm9kZSB3aXRoIG9uIHRoYXQgdHJhaW4gaG9tZSB0byBEZWxhd2FyZSwgdGhlIFZpY2UgUHJlc2lkZW50LWVsZWN0IG9mIHRoZSBVbml0ZWQgU3RhdGVzLCBKb2UgQmlkZW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnV2VzbGV5IENvYmInLFxuICAgICAgICAncG9zaXRpb24nOiAnTnVuYyBFc3QgSW5jb3Jwb3JhdGVkJyxcbiAgICAgICAgJ29mZmljZSc6ICdBdXN0cmFsaWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMS8zMCcpLFxuICAgICAgICAnc2FsYXJ5JzogMzQzNDc2LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdJIHdhbnQgdG8gdGhhbmsgbXkgcGFydG5lciBpbiB0aGlzIGpvdXJuZXksIGEgbWFuIHdobyBjYW1wYWlnbmVkIGZyb20gaGlzIGhlYXJ0IGFuZCBzcG9rZSBmb3IgdGhlIG1lbiBhbmQgd29tZW4gaGUgZ3JldyB1cCB3aXRoIG9uIHRoZSBzdHJlZXRzIG9mIFNjcmFudG9uIGFuZCByb2RlIHdpdGggb24gdGhhdCB0cmFpbiBob21lIHRvIERlbGF3YXJlLCB0aGUgVmljZSBQcmVzaWRlbnQtZWxlY3Qgb2YgdGhlIFVuaXRlZCBTdGF0ZXMsIEpvZSBCaWRlbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29tbXVuaWNhdGlvbnMnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ01lZ2hhbiBTdGVwaGVucycsXG4gICAgICAgICdwb3NpdGlvbic6ICdJbnRlcmR1bSBQQycsXG4gICAgICAgICdvZmZpY2UnOiAnVHVya2V5JyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMTAvMTEnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDQ2OTMwNSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSSB3YW50IHRvIHRoYW5rIG15IHBhcnRuZXIgaW4gdGhpcyBqb3VybmV5LCBhIG1hbiB3aG8gY2FtcGFpZ25lZCBmcm9tIGhpcyBoZWFydCBhbmQgc3Bva2UgZm9yIHRoZSBtZW4gYW5kIHdvbWVuIGhlIGdyZXcgdXAgd2l0aCBvbiB0aGUgc3RyZWV0cyBvZiBTY3JhbnRvbiBhbmQgcm9kZSB3aXRoIG9uIHRoYXQgdHJhaW4gaG9tZSB0byBEZWxhd2FyZSwgdGhlIFZpY2UgUHJlc2lkZW50LWVsZWN0IG9mIHRoZSBVbml0ZWQgU3RhdGVzLCBKb2UgQmlkZW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdCZXJ0aGEgSGVycmVyYScsXG4gICAgICAgICdwb3NpdGlvbic6ICdBbWV0IExpbWl0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0tlbnlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMTEvMjInKSxcbiAgICAgICAgJ3NhbGFyeSc6IDU2NjA2LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdJIHdhbnQgdG8gdGhhbmsgbXkgcGFydG5lciBpbiB0aGlzIGpvdXJuZXksIGEgbWFuIHdobyBjYW1wYWlnbmVkIGZyb20gaGlzIGhlYXJ0IGFuZCBzcG9rZSBmb3IgdGhlIG1lbiBhbmQgd29tZW4gaGUgZ3JldyB1cCB3aXRoIG9uIHRoZSBzdHJlZXRzIG9mIFNjcmFudG9uIGFuZCByb2RlIHdpdGggb24gdGhhdCB0cmFpbiBob21lIHRvIERlbGF3YXJlLCB0aGUgVmljZSBQcmVzaWRlbnQtZWxlY3Qgb2YgdGhlIFVuaXRlZCBTdGF0ZXMsIEpvZSBCaWRlbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29tbXVuaWNhdGlvbnMnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0thcmluYSBLZXknLFxuICAgICAgICAncG9zaXRpb24nOiAnUXVpc3F1ZSBWYXJpdXMgTmFtIENvbXBhbnknLFxuICAgICAgICAnb2ZmaWNlJzogJ0ZyYW5jZScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAzLzI2JyksXG4gICAgICAgICdzYWxhcnknOiAzMTQyNjAsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0kgd2FudCB0byB0aGFuayBteSBwYXJ0bmVyIGluIHRoaXMgam91cm5leSwgYSBtYW4gd2hvIGNhbXBhaWduZWQgZnJvbSBoaXMgaGVhcnQgYW5kIHNwb2tlIGZvciB0aGUgbWVuIGFuZCB3b21lbiBoZSBncmV3IHVwIHdpdGggb24gdGhlIHN0cmVldHMgb2YgU2NyYW50b24gYW5kIHJvZGUgd2l0aCBvbiB0aGF0IHRyYWluIGhvbWUgdG8gRGVsYXdhcmUsIHRoZSBWaWNlIFByZXNpZGVudC1lbGVjdCBvZiB0aGUgVW5pdGVkIFN0YXRlcywgSm9lIEJpZGVuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnVXJpZWwgQ2Fyc29uJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1BlbmF0aWJ1cyBQQycsXG4gICAgICAgICdvZmZpY2UnOiAnVmVuZXp1ZWxhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDEvMDcnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDEwNjMzNSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTWlyYSBCYWlyZCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdGZWxpcyBPcmNpIFBDJyxcbiAgICAgICAgJ29mZmljZSc6ICdOaXVlJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDgvMjUnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDUxNTY3MSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnVXJzdWxhIFBhcnJpc2gnLFxuICAgICAgICAncG9zaXRpb24nOiAnQWMgQ29ycG9yYXRpb24nLFxuICAgICAgICAnb2ZmaWNlJzogJ01hY2FvJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDYvMzAnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDcyMjk1LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdKb3NlcGhpbmUgU3lrZXMnLFxuICAgICAgICAncG9zaXRpb24nOiAnQmxhbmRpdCBDb25ndWUgTGltaXRlZCcsXG4gICAgICAgICdvZmZpY2UnOiAnSG9seSBTZWUgKFZhdGljYW4gQ2l0eSBTdGF0ZSknLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMi8yMicpLFxuICAgICAgICAnc2FsYXJ5JzogNjk0NjU2LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdNYWdnaWUgU2ltcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdWdWxwdXRhdGUgUG9zdWVyZSBJbmR1c3RyaWVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdTdWRhbicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzExLzIyJyksXG4gICAgICAgICdzYWxhcnknOiAzNjM3NDMsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnUm9nYW4gRnVlbnRlcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdWZXN0aWJ1bHVtIEFjY3Vtc2FuIE5lcXVlIENvbXBhbnknLFxuICAgICAgICAnb2ZmaWNlJzogJ0plcnNleScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA3LzI5JyksXG4gICAgICAgICdzYWxhcnknOiA2MDYwMDQsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29tbXVuaWNhdGlvbnMnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ01heWEgSGFuZXknLFxuICAgICAgICAncG9zaXRpb24nOiAnQWMgRm91bmRhdGlvbicsXG4gICAgICAgICdvZmZpY2UnOiAnRmFsa2xhbmQgSXNsYW5kcycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA5LzAzJyksXG4gICAgICAgICdzYWxhcnknOiA3NDU1MDAsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29tbXVuaWNhdGlvbnMnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0FxdWlsYSBCYXR0bGUnLFxuICAgICAgICAncG9zaXRpb24nOiAnU29jaWlzIE5hdG9xdWUgUGVuYXRpYnVzIEZvdW5kYXRpb24nLFxuICAgICAgICAnb2ZmaWNlJzogJ0F6ZXJiYWlqYW4nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMy8wNicpLFxuICAgICAgICAnc2FsYXJ5JzogNTgyMjY1LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdDb25ub3IgQ29sZW1hbicsXG4gICAgICAgICdwb3NpdGlvbic6ICdPcmNpIExhY3VzIFZlc3RpYnVsdW0gRm91bmRhdGlvbicsXG4gICAgICAgICdvZmZpY2UnOiAnQ3JvYXRpYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzEwLzIxJyksXG4gICAgICAgICdzYWxhcnknOiA0MTY5NTgsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29tbXVuaWNhdGlvbnMnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0NoYXJpdHkgVGhvbWFzJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0NvbnZhbGxpcyBMaWd1bGEgRG9uZWMgSW5jLicsXG4gICAgICAgICdvZmZpY2UnOiAnQmVuaW4nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNy8xMicpLFxuICAgICAgICAnc2FsYXJ5JzogNTQwOTk5LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdCbHl0aGUgUG93ZXJzJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0FtZXQgT3JjaSBMaW1pdGVkJyxcbiAgICAgICAgJ29mZmljZSc6ICdGYWxrbGFuZCBJc2xhbmRzJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDEvMjMnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDQ4MDA2NyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdIdW1hbiBSZXNvdXJjZXMnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQWRyaWEgQmF0dGxlJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ09ybmFyZSBMZWN0dXMgSW5jb3Jwb3JhdGVkJyxcbiAgICAgICAgJ29mZmljZSc6ICdCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnknLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNS8yOCcpLFxuICAgICAgICAnc2FsYXJ5JzogMjU3OTM3LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0h1bWFuIFJlc291cmNlcyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdNZWxhbmllIE1jaW50eXJlJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ051bmMgQ29ycC4nLFxuICAgICAgICAnb2ZmaWNlJzogJ01vbmdvbGlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDEvMDYnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDM1OTczNyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdIdW1hbiBSZXNvdXJjZXMnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnS2VlbHkgQmF1ZXInLFxuICAgICAgICAncG9zaXRpb24nOiAnTmVjIFRlbXB1cyBJbnN0aXR1dGUnLFxuICAgICAgICAnb2ZmaWNlJzogJ1NvbWFsaWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMy8wOScpLFxuICAgICAgICAnc2FsYXJ5JzogOTk3MTgsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29tbXVuaWNhdGlvbnMnLCAnSHVtYW4gUmVzb3VyY2VzJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ05vZWxhbmkgU3Ryb25nJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ05lYyBMTFAnLFxuICAgICAgICAnb2ZmaWNlJzogJ0lyYW4nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wOC8yNCcpLFxuICAgICAgICAnc2FsYXJ5JzogNDgwNzE4LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0h1bWFuIFJlc291cmNlcyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdKZWFuZXR0ZSBIZW5kZXJzb24nLFxuICAgICAgICAncG9zaXRpb24nOiAnRXUgRWxpdCBOdWxsYSBDb3Jwb3JhdGlvbicsXG4gICAgICAgICdvZmZpY2UnOiAnSXRhbHknLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNi8xOScpLFxuICAgICAgICAnc2FsYXJ5JzogMjUzNzcyLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQ2FuZGFjZSBIdWJlcicsXG4gICAgICAgICdwb3NpdGlvbic6ICdTZWQgSW5zdGl0dXRlJyxcbiAgICAgICAgJ29mZmljZSc6ICdVZ2FuZGEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNi8xNicpLFxuICAgICAgICAnc2FsYXJ5JzogMzg4ODc5LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQmV0aGFueSBQb3R0ZXInLFxuICAgICAgICAncG9zaXRpb24nOiAnVml2YW11cyBOaWJoIERvbG9yIEluY29ycG9yYXRlZCcsXG4gICAgICAgICdvZmZpY2UnOiAnUHVlcnRvIFJpY28nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMS8xMicpLFxuICAgICAgICAnc2FsYXJ5JzogNzQ3MzEwLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnV2hvb3BpIEJ1cmtzJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0p1c3RvIEluYy4nLFxuICAgICAgICAnb2ZmaWNlJzogJ0ZpamknLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wOS8yNCcpLFxuICAgICAgICAnc2FsYXJ5JzogODAzMDM3LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1NoZWlsYSBMb25nJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0RpYW0gQXNzb2NpYXRlcycsXG4gICAgICAgICdvZmZpY2UnOiAnU2FvIFRvbWUgYW5kIFByaW5jaXBlJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMTIvMjEnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDY3NDM3OSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdTb255YSBDaHVyY2gnLFxuICAgICAgICAncG9zaXRpb24nOiAnTGFvcmVldCBJbnN0aXR1dGUnLFxuICAgICAgICAnb2ZmaWNlJzogJ0dyZW5hZGEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNi8wMycpLFxuICAgICAgICAnc2FsYXJ5JzogNjI1MTQ3LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1NoYWluZSBGb3JiZXMnLFxuICAgICAgICAncG9zaXRpb24nOiAnRXUgQXJjdSBMTFAnLFxuICAgICAgICAnb2ZmaWNlJzogJ0N5cHJ1cycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAxLzE4JyksXG4gICAgICAgICdzYWxhcnknOiAyMDgxMDAsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQWxleGFuZHJhIFBhdHJpY2snLFxuICAgICAgICAncG9zaXRpb24nOiAnTGlndWxhIERvbmVjIEluYy4nLFxuICAgICAgICAnb2ZmaWNlJzogJ1ZpZXQgTmFtJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDQvMDknKSxcbiAgICAgICAgJ3NhbGFyeSc6IDEwNDA2MyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdQYXRpZW5jZSBWaW5jZW50JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1NlbSBNb2xlc3RpZSBBc3NvY2lhdGVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdQaGlsaXBwaW5lcycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA3LzA0JyksXG4gICAgICAgICdzYWxhcnknOiA2NzM1NTYsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnRXZlbHluIFNtaXRoJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0Z1c2NlIEluZHVzdHJpZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ1RvZ28nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wOC8xNScpLFxuICAgICAgICAnc2FsYXJ5JzogNzM3Mjg0LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0tpZXJhbiBHb256YWxleicsXG4gICAgICAgICdwb3NpdGlvbic6ICdOb24gQ29ycC4nLFxuICAgICAgICAnb2ZmaWNlJzogJ0VxdWF0b3JpYWwgR3VpbmVhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDgvMjQnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDkwMTk1LFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTW9sbHkgT25laWwnLFxuICAgICAgICAncG9zaXRpb24nOiAnTm9uIER1aSBDb25zdWx0aW5nJyxcbiAgICAgICAgJ29mZmljZSc6ICdCZWxpemUnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMC8yOCcpLFxuICAgICAgICAnc2FsYXJ5JzogMTQwNzY3LFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTmlnZWwgRGF2ZW5wb3J0JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1VsbGFtY29ycGVyIFZlbGl0IEluIEluZHVzdHJpZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ1ZhbnVhdHUnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMy8xNicpLFxuICAgICAgICAnc2FsYXJ5JzogNzA1MzYsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnVGhvciBZb3VuZycsXG4gICAgICAgICdwb3NpdGlvbic6ICdNYWxlc3VhZGEgQ29uc3VsdGluZycsXG4gICAgICAgICdvZmZpY2UnOiAnRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDEvMjgnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDc1NTAxLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0Zpbm4gRGVsYWNydXonLFxuICAgICAgICAncG9zaXRpb24nOiAnTG9yZW0gSW5kdXN0cmllcycsXG4gICAgICAgICdvZmZpY2UnOiAnQ29jb3MgKEtlZWxpbmcpIElzbGFuZHMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMi8xMScpLFxuICAgICAgICAnc2FsYXJ5JzogNzU0OTY3LFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTGFuZSBIZW5kZXJzb24nLFxuICAgICAgICAncG9zaXRpb24nOiAnUGVkZSBGb3VuZGF0aW9uJyxcbiAgICAgICAgJ29mZmljZSc6ICdLYXpha2hzdGFuJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDcvMDInKSxcbiAgICAgICAgJ3NhbGFyeSc6IDg0MjA1MCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBcmNoaXZlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1NoZWEgUG90dGVyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0N1cmFiaXR1ciBMaW1pdGVkJyxcbiAgICAgICAgJ29mZmljZSc6ICdUaW1vci1MZXN0ZScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA1LzA3JyksXG4gICAgICAgICdzYWxhcnknOiAyNjM2MjksXG4gICAgICAgICdzdGF0dXMnOiAnQXJjaGl2ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnTGFib3JlIHNpdCBudWxsYSBhbWV0IGVuaW0gcmVwcmVoZW5kZXJpdCBlc3NlIGxhYm9ydW0gTG9yZW0gcXVpcyBpbiBldS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdCcnlubiBZYW5nJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1V0IExpbWl0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ01heW90dGUnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMS8xNycpLFxuICAgICAgICAnc2FsYXJ5JzogNzQyOTIsXG4gICAgICAgICdzdGF0dXMnOiAnQXJjaGl2ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnTGFib3JlIHNpdCBudWxsYSBhbWV0IGVuaW0gcmVwcmVoZW5kZXJpdCBlc3NlIGxhYm9ydW0gTG9yZW0gcXVpcyBpbiBldS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdLeWxhbiBGdWVudGVzJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1NhcGllbiBBZW5lYW4gQXNzb2NpYXRlcycsXG4gICAgICAgICdvZmZpY2UnOiAnQnJhemlsJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMTIvMjgnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDEwODYzMixcbiAgICAgICAgJ3N0YXR1cyc6ICdBcmNoaXZlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdMYWJvcmUgc2l0IG51bGxhIGFtZXQgZW5pbSByZXByZWhlbmRlcml0IGVzc2UgbGFib3J1bSBMb3JlbSBxdWlzIGluIGV1LicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0xpb25lbCBNY2JyaWRlJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0lwc3VtIFBDJyxcbiAgICAgICAgJ29mZmljZSc6ICdQb3J0dWdhbCcsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA3LzExJyksXG4gICAgICAgICdzYWxhcnknOiAzNDI0NCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBcmNoaXZlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdMYWJvcmUgc2l0IG51bGxhIGFtZXQgZW5pbSByZXByZWhlbmRlcml0IGVzc2UgbGFib3J1bSBMb3JlbSBxdWlzIGluIGV1LicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1BhdWwgTHVjYXMnLFxuICAgICAgICAncG9zaXRpb24nOiAnRWdldCBMTFAnLFxuICAgICAgICAnb2ZmaWNlJzogJ05pY2FyYWd1YScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA5LzMwJyksXG4gICAgICAgICdzYWxhcnknOiA2OTA4MzQsXG4gICAgICAgICdzdGF0dXMnOiAnQXJjaGl2ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnTGFib3JlIHNpdCBudWxsYSBhbWV0IGVuaW0gcmVwcmVoZW5kZXJpdCBlc3NlIGxhYm9ydW0gTG9yZW0gcXVpcyBpbiBldS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdMYXJlaW5hIFdpbGxpYW1zb24nLFxuICAgICAgICAncG9zaXRpb24nOiAnSW1wZXJkaWV0IFVsbGFtY29ycGVyIEx0ZCcsXG4gICAgICAgICdvZmZpY2UnOiAnQ29jb3MgKEtlZWxpbmcpIElzbGFuZHMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMi8wMScpLFxuICAgICAgICAnc2FsYXJ5JzogNjAzNDk4LFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0xhYm9yZSBzaXQgbnVsbGEgYW1ldCBlbmltIHJlcHJlaGVuZGVyaXQgZXNzZSBsYWJvcnVtIExvcmVtIHF1aXMgaW4gZXUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQW15IEFjZXZlZG8nLFxuICAgICAgICAncG9zaXRpb24nOiAnSWQgSW5zdGl0dXRlJyxcbiAgICAgICAgJ29mZmljZSc6ICdDb29rIElzbGFuZHMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMi8wNCcpLFxuICAgICAgICAnc2FsYXJ5JzogMTI1MTY1LFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0xhYm9yZSBzaXQgbnVsbGEgYW1ldCBlbmltIHJlcHJlaGVuZGVyaXQgZXNzZSBsYWJvcnVtIExvcmVtIHF1aXMgaW4gZXUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTm9tbGFuZ2EgU2lsdmEnLFxuICAgICAgICAncG9zaXRpb24nOiAnRWdldCBMTEMnLFxuICAgICAgICAnb2ZmaWNlJzogJ0JlbGl6ZScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAxLzMxJyksXG4gICAgICAgICdzYWxhcnknOiAyNjg1MDksXG4gICAgICAgICdzdGF0dXMnOiAnQXJjaGl2ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnTGFib3JlIHNpdCBudWxsYSBhbWV0IGVuaW0gcmVwcmVoZW5kZXJpdCBlc3NlIGxhYm9ydW0gTG9yZW0gcXVpcyBpbiBldS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdBbWVuYSBTdG9uZScsXG4gICAgICAgICdwb3NpdGlvbic6ICdFbmltIEluY29ycG9yYXRlZCcsXG4gICAgICAgICdvZmZpY2UnOiAnR3VpbmVhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDkvMjMnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDIxNDM4MSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdEYW5pZWxsZSBDb2ZmZXknLFxuICAgICAgICAncG9zaXRpb24nOiAnRmV1Z2lhdCBQbGFjZXJhdCBDb3JwLicsXG4gICAgICAgICdvZmZpY2UnOiAnU2FvIFRvbWUgYW5kIFByaW5jaXBlJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDYvMTcnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDEzNzQyMyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0J1ZmZ5IFJ1c3NlbGwnLFxuICAgICAgICAncG9zaXRpb24nOiAnTGFjdXMgUXVpc3F1ZSBMdGQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0VjdWFkb3InLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMC8xNycpLFxuICAgICAgICAnc2FsYXJ5JzogNjEyMTg0LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ09mZmljZSBTa2lsbHMnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnS2FpdGxpbiBMYW1iJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ01hbGVzdWFkYSBGcmluZ2lsbGEgRXN0IEFzc29jaWF0ZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ0FsZ2VyaWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMC8xOCcpLFxuICAgICAgICAnc2FsYXJ5JzogMzI3MzY3LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ09mZmljZSBTa2lsbHMnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTGVpbGFuaSBZYXRlcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdNdXMgUHJvaW4gTExDJyxcbiAgICAgICAgJ29mZmljZSc6ICdTb3V0aCBTdWRhbicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA1LzI3JyksXG4gICAgICAgICdzYWxhcnknOiA3NDM0OTMsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnT2ZmaWNlIFNraWxscyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdKZW1pbWEgTW9vbicsXG4gICAgICAgICdwb3NpdGlvbic6ICdQaGFzZWxsdXMgQ29ycC4nLFxuICAgICAgICAnb2ZmaWNlJzogJ1NvdXRoIEdlb3JnaWEgYW5kIFRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDUvMjEnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDQ5NjA2NyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydPZmZpY2UgU2tpbGxzJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0hpcm9rbyBTY2h3YXJ0eicsXG4gICAgICAgICdwb3NpdGlvbic6ICdOZXF1ZSBJbnN0aXR1dGUnLFxuICAgICAgICAnb2ZmaWNlJzogJ1NhaW50IFZpbmNlbnQgYW5kIFRoZSBHcmVuYWRpbmVzJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDMvMTMnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDE3ODc4MixcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydPZmZpY2UgU2tpbGxzJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ05hdGhhbmllbCBKZW5zZW4nLFxuICAgICAgICAncG9zaXRpb24nOiAnTWkgVGVtcG9yIExpbWl0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0RvbWluaWNhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMTIvMDUnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDM3NDQxLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ09mZmljZSBTa2lsbHMnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnU2lsYXMgU3dlZW5leScsXG4gICAgICAgICdwb3NpdGlvbic6ICdVbHRyaWNlcyBJbnN0aXR1dGUnLFxuICAgICAgICAnb2ZmaWNlJzogJ1R1cmttZW5pc3RhbicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzExLzEzJyksXG4gICAgICAgICdzYWxhcnknOiAxNTI5ODAsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnT2ZmaWNlIFNraWxscyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdKZXJtYWluZSBCYXJyeScsXG4gICAgICAgICdwb3NpdGlvbic6ICdEYXBpYnVzIENvcnBvcmF0aW9uJyxcbiAgICAgICAgJ29mZmljZSc6ICdVemJla2lzdGFuJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDMvMDYnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDQwOTQ2MyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydPZmZpY2UgU2tpbGxzJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1RhdGlhbmEgTmljaG9scycsXG4gICAgICAgICdwb3NpdGlvbic6ICdOZWMgRGlhbSBJbmR1c3RyaWVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdDb29rIElzbGFuZHMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNS8yMicpLFxuICAgICAgICAnc2FsYXJ5JzogNTExNTUsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnT2ZmaWNlIFNraWxscyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdSYW1hIFdhbGxlcicsXG4gICAgICAgICdwb3NpdGlvbic6ICdTZW0gUGVsbGVudGVzcXVlIExMQycsXG4gICAgICAgICdvZmZpY2UnOiAnQW5kb3JyYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzEyLzAxJyksXG4gICAgICAgICdzYWxhcnknOiAyMjMyMjcsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnT2ZmaWNlIFNraWxscyddXG4gICAgfV07XG4iXX0=

/***/ },

/***/ 756:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TableDemoComponent = exports.ExtraDetails = exports.StatusCell = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class, _dec2, _class2, _dec3, _class3; // NG2
	
	// APP
	
	// Vendor
	
	
	var _core = __webpack_require__(1);
	
	var _TableData = __webpack_require__(755);
	
	var _TableDemo = __webpack_require__(879);
	
	var _TableDemo2 = _interopRequireDefault(_TableDemo);
	
	var _DetailsTableDemo = __webpack_require__(877);
	
	var _DetailsTableDemo2 = _interopRequireDefault(_DetailsTableDemo);
	
	var _SelectAllTableDemo = __webpack_require__(878);
	
	var _SelectAllTableDemo2 = _interopRequireDefault(_SelectAllTableDemo);
	
	var _novoElements = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var template = '\n<div class="container">\n    <h1>Table <small><a target="_blank" href="https://bullhorn.github.io/novo-elements/tree/master/src/elements/table">(source)</a></small></h1>\n    <p>Tables allow users to view date in a tabular format and perform actions such as Sorting and Filtering. Different configuration are possible for pagination or infinite scroll. Feature to be added include: Custom Item Renderers, etc...</p>\n\n    <h2>Types</h2>\n\n    <h5>Basic Table</h5>\n    <p>This is the most basic table.</p>\n    <div class="example table-demo">' + _TableDemo2.default + '</div>\n    <code-snippet [code]="TableDemoTpl"></code-snippet>\n    <h5>Details Table</h5>\n    <p>This has a row renderer to show a new details row that is expanded when you click on the action column.</p>\n    <div class="example table-demo">' + _DetailsTableDemo2.default + '</div>\n    <code-snippet [code]="DetailsTableDemoTpl"></code-snippet>\n\n    <h5>Select All Table w/ Custom Actions</h5>\n    <p>This has checkboxes for selection with custom actions.</p>\n    <div class="example table-demo">' + _SelectAllTableDemo2.default + '</div>\n    <code-snippet [code]="SelectAllTableDemoTpl"></code-snippet>\n</div>\n';
	
	var HEADER_COLORS = ['aqua', 'ocean', 'mint', 'grass', 'sunflower', 'company', 'lead', 'positive', 'black'];
	
	var StatusCell = exports.StatusCell = (_dec = (0, _core.Component)({
	    selector: 'status-cell',
	    template: '\n        <div class="status-cell">\n            <i class="bhi-info"></i>\n            <label>{{ value }}</label>\n        </div>\n    '
	}), _dec(_class = function (_BaseRenderer) {
	    _inherits(StatusCell, _BaseRenderer);
	
	    function StatusCell() {
	        _classCallCheck(this, StatusCell);
	
	        return _possibleConstructorReturn(this, (StatusCell.__proto__ || Object.getPrototypeOf(StatusCell)).apply(this, arguments));
	    }
	
	    return StatusCell;
	}(_novoElements.BaseRenderer)) || _class);
	var ExtraDetails = exports.ExtraDetails = (_dec2 = (0, _core.Component)({
	    selector: 'extra-details',
	    template: '\n        <div class="extra-data">\n            <label><i class="bhi-info"></i>Description</label>\n            <p>{{ data.description }}</p>\n            <label><i class="bhi-info"></i>Categories</label>\n            <p>{{ data.categories }}</p>\n        </div>\n    '
	}), _dec2(_class2 = function (_BaseRenderer2) {
	    _inherits(ExtraDetails, _BaseRenderer2);
	
	    function ExtraDetails() {
	        _classCallCheck(this, ExtraDetails);
	
	        return _possibleConstructorReturn(this, (ExtraDetails.__proto__ || Object.getPrototypeOf(ExtraDetails)).apply(this, arguments));
	    }
	
	    return ExtraDetails;
	}(_novoElements.BaseRenderer)) || _class2);
	var TableDemoComponent = exports.TableDemoComponent = (_dec3 = (0, _core.Component)({
	    selector: 'table-demo',
	    template: template
	}), _dec3(_class3 = function () {
	    function TableDemoComponent() {
	        var _this3 = this;
	
	        _classCallCheck(this, TableDemoComponent);
	
	        this.TableDemoTpl = _TableDemo2.default;
	        this.DetailsTableDemoTpl = _DetailsTableDemo2.default;
	        this.SelectAllTableDemoTpl = _SelectAllTableDemo2.default;
	
	        this.customRowOptions = [{ label: '10', value: 10 }, { label: '20', value: 20 }, { label: '30', value: 30 }, { label: '40', value: 40 }];
	
	        var columns = [{ title: 'Name', name: 'name', ordering: true, type: 'link', filtering: true }, { title: 'Position', name: 'position', ordering: true, filtering: true }, {
	            title: 'Extn.',
	            name: 'ext',
	            ordering: true,
	            renderer: function renderer(object) {
	                return object.ext.obj;
	            },
	            compare: function compare(sort, previous, current) {
	                var first = previous.obj,
	                    second = current.obj;
	
	                if (first > second) {
	                    return sort === 'desc' ? -1 : 1;
	                }
	                if (first < second) {
	                    return sort === 'asc' ? -1 : 1;
	                }
	                return 0;
	            }
	        }, {
	            title: 'Start date',
	            type: 'date',
	            name: 'startDate',
	            renderer: _novoElements.DateCell,
	            ordering: true,
	            filtering: true,
	            range: true
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Status',
	            name: 'status',
	            options: ['New Lead', 'Active', 'Archived'],
	            ordering: true,
	            multiple: true,
	            renderer: StatusCell,
	            filtering: true
	        }];
	
	        this.basic = {
	            columns: columns.slice(),
	            rows: _TableData.TableData.slice(),
	            config: {
	                paging: {
	                    current: 1,
	                    itemsPerPage: 10,
	                    onPageChange: function onPageChange(event) {
	                        _this3.basic.config.paging.current = event.page;
	                        _this3.basic.config.paging.itemsPerPage = event.itemsPerPage;
	                    }
	                },
	                filtering: true,
	                sorting: true,
	                ordering: true,
	                resizing: true
	            },
	            onTableChange: function onTableChange(event) {
	                _this3.basic.rows = event.rows;
	            }
	        };
	
	        this.details = {
	            columns: columns.slice(),
	            rows: _TableData.TableData.slice(),
	            config: {
	                paging: {
	                    current: 1,
	                    itemsPerPage: 10,
	                    onPageChange: function onPageChange(event) {
	                        _this3.details.config.paging.current = event.page;
	                        _this3.details.config.paging.itemsPerPage = event.itemsPerPage;
	                    }
	                },
	                sorting: true,
	                filtering: true,
	                ordering: true,
	                resizing: true,
	                hasDetails: true,
	                detailsRenderer: ExtraDetails
	            },
	            onTableChange: function onTableChange(event) {
	                _this3.details.rows = event.rows;
	            }
	        };
	
	        this.selectAll = {
	            columns: columns.slice(),
	            rows: _TableData.TableData.slice(),
	            config: {
	                paging: {
	                    current: 1,
	                    itemsPerPage: 10,
	                    onPageChange: function onPageChange(event) {
	                        _this3.selectAll.config.paging.current = event.page;
	                        _this3.selectAll.config.paging.itemsPerPage = event.itemsPerPage;
	                    }
	                },
	                sorting: true,
	                filtering: true,
	                ordering: true,
	                resizing: true,
	                rowSelectionStyle: 'checkbox'
	            },
	            onTableChange: function onTableChange(event) {
	                _this3.selectAll.rows = event.rows;
	            }
	        };
	    }
	
	    _createClass(TableDemoComponent, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.theme = HEADER_COLORS[0];
	        }
	    }, {
	        key: 'changeTheme',
	        value: function changeTheme() {
	            var idx = HEADER_COLORS.indexOf(this.theme);
	            if (idx === HEADER_COLORS.length - 1) {
	                idx = -1;
	            }
	            this.theme = HEADER_COLORS[idx + 1];
	        }
	    }, {
	        key: 'singleAction',
	        value: function singleAction() {
	            window.alert('HI!');
	        }
	    }, {
	        key: 'selectedAction',
	        value: function selectedAction(action) {
	            window.alert('You clicked ' + action + '!');
	        }
	    }]);
	
	    return TableDemoComponent;
	}()) || _class3);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvdGFibGUvVGFibGVEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztrREFBQTs7QUFFQTs7QUFLQTs7O0FBTkE7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLDByQ0FBTjs7QUF1QkEsSUFBTSxnQkFBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixNQUFsQixFQUEwQixPQUExQixFQUFtQyxXQUFuQyxFQUFnRCxTQUFoRCxFQUEyRCxNQUEzRCxFQUFtRSxVQUFuRSxFQUErRSxPQUEvRSxDQUF0Qjs7SUFXYSxVLFdBQUEsVSxXQVRaLHFCQUFVO0FBQ1AsY0FBVSxhQURIO0FBRVA7QUFGTyxDQUFWLEM7Ozs7Ozs7Ozs7O0lBdUJZLFksV0FBQSxZLFlBWFoscUJBQVU7QUFDUCxjQUFVLGVBREg7QUFFUDtBQUZPLENBQVYsQzs7Ozs7Ozs7Ozs7SUFrQlksa0IsV0FBQSxrQixZQUpaLHFCQUFVO0FBQ1AsY0FBVSxZQURIO0FBRVAsY0FBVTtBQUZILENBQVYsQztBQUtHLGtDQUFjO0FBQUE7O0FBQUE7O0FBQ1YsYUFBSyxZQUFMO0FBQ0EsYUFBSyxtQkFBTDtBQUNBLGFBQUsscUJBQUw7O0FBRUEsYUFBSyxnQkFBTCxHQUF3QixDQUNwQixFQUFFLE9BQU8sSUFBVCxFQUFlLE9BQU8sRUFBdEIsRUFEb0IsRUFFcEIsRUFBRSxPQUFPLElBQVQsRUFBZSxPQUFPLEVBQXRCLEVBRm9CLEVBR3BCLEVBQUUsT0FBTyxJQUFULEVBQWUsT0FBTyxFQUF0QixFQUhvQixFQUlwQixFQUFFLE9BQU8sSUFBVCxFQUFlLE9BQU8sRUFBdEIsRUFKb0IsQ0FBeEI7O0FBT0EsWUFBSSxVQUFVLENBQ1YsRUFBRSxPQUFPLE1BQVQsRUFBaUIsTUFBTSxNQUF2QixFQUErQixVQUFVLElBQXpDLEVBQStDLE1BQU0sTUFBckQsRUFBNkQsV0FBVyxJQUF4RSxFQURVLEVBRVYs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QixPQUE3QixHQUF1QyxNQUFNLElBQTdDO0FBQ0EsK0JBQUssU0FBTCxDQUFlLE1BQWYsQ0FBc0IsTUFBdEIsQ0FBNkIsWUFBN0IsR0FBNEMsTUFBTSxZQUFsRDtBQUNIO0FBTkcsaUJBREo7QUFTSix5QkFBUyxJQVRMO0FBVUosMkJBQVcsSUFWUDtBQVdKLDBCQUFVLElBWE47QUFZSiwwQkFBVSxJQVpOO0FBYUosbUNBQW1CO0FBYmYsYUFISztBQWtCYiwyQkFBZSx1QkFBQyxLQUFELEVBQVc7QUFDdEIsdUJBQUssU0FBTCxDQUFlLElBQWYsR0FBc0IsTUFBTSxJQUE1QjtBQUNIO0FBcEJZLFNBQWpCO0FBc0JIOzs7O21DQUVVO0FBQ1AsaUJBQUssS0FBTCxHQUFhLGNBQWMsQ0FBZCxDQUFiO0FBQ0g7OztzQ0FFYTtBQUNWLGdCQUFJLE1BQU0sY0FBYyxPQUFkLENBQXNCLEtBQUssS0FBM0IsQ0FBVjtBQUNBLGdCQUFJLFFBQVEsY0FBYyxNQUFkLEdBQXVCLENBQW5DLEVBQXNDO0FBQ2xDLHNCQUFNLENBQUMsQ0FBUDtBQUNIO0FBQ0QsaUJBQUssS0FBTCxHQUFhLGNBQWMsTUFBTSxDQUFwQixDQUFiO0FBQ0g7Ozt1Q0FFYztBQUNYLG1CQUFPLEtBQVAsQ0FBYSxLQUFiO0FBQ0g7Ozt1Q0FFYyxNLEVBQVE7QUFDbkIsbUJBQU8sS0FBUCxrQkFBNEIsTUFBNUI7QUFDSCIsImZpbGUiOiJUYWJsZURlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IFRhYmxlRGF0YSB9IGZyb20gJy4vVGFibGVEYXRhJztcbmltcG9ydCBUYWJsZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVGFibGVEZW1vLmh0bWwnO1xuaW1wb3J0IERldGFpbHNUYWJsZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvRGV0YWlsc1RhYmxlRGVtby5odG1sJztcbmltcG9ydCBTZWxlY3RBbGxUYWJsZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvU2VsZWN0QWxsVGFibGVEZW1vLmh0bWwnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBEYXRlQ2VsbCwgQmFzZVJlbmRlcmVyIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5UYWJsZSA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vYnVsbGhvcm4uZ2l0aHViLmlvL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL3RhYmxlXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPlRhYmxlcyBhbGxvdyB1c2VycyB0byB2aWV3IGRhdGUgaW4gYSB0YWJ1bGFyIGZvcm1hdCBhbmQgcGVyZm9ybSBhY3Rpb25zIHN1Y2ggYXMgU29ydGluZyBhbmQgRmlsdGVyaW5nLiBEaWZmZXJlbnQgY29uZmlndXJhdGlvbiBhcmUgcG9zc2libGUgZm9yIHBhZ2luYXRpb24gb3IgaW5maW5pdGUgc2Nyb2xsLiBGZWF0dXJlIHRvIGJlIGFkZGVkIGluY2x1ZGU6IEN1c3RvbSBJdGVtIFJlbmRlcmVycywgZXRjLi4uPC9wPlxuXG4gICAgPGgyPlR5cGVzPC9oMj5cblxuICAgIDxoNT5CYXNpYyBUYWJsZTwvaDU+XG4gICAgPHA+VGhpcyBpcyB0aGUgbW9zdCBiYXNpYyB0YWJsZS48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgdGFibGUtZGVtb1wiPiR7VGFibGVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiVGFibGVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG4gICAgPGg1PkRldGFpbHMgVGFibGU8L2g1PlxuICAgIDxwPlRoaXMgaGFzIGEgcm93IHJlbmRlcmVyIHRvIHNob3cgYSBuZXcgZGV0YWlscyByb3cgdGhhdCBpcyBleHBhbmRlZCB3aGVuIHlvdSBjbGljayBvbiB0aGUgYWN0aW9uIGNvbHVtbi48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgdGFibGUtZGVtb1wiPiR7RGV0YWlsc1RhYmxlRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkRldGFpbHNUYWJsZURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5TZWxlY3QgQWxsIFRhYmxlIHcvIEN1c3RvbSBBY3Rpb25zPC9oNT5cbiAgICA8cD5UaGlzIGhhcyBjaGVja2JveGVzIGZvciBzZWxlY3Rpb24gd2l0aCBjdXN0b20gYWN0aW9ucy48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgdGFibGUtZGVtb1wiPiR7U2VsZWN0QWxsVGFibGVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiU2VsZWN0QWxsVGFibGVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbmNvbnN0IEhFQURFUl9DT0xPUlMgPSBbJ2FxdWEnLCAnb2NlYW4nLCAnbWludCcsICdncmFzcycsICdzdW5mbG93ZXInLCAnY29tcGFueScsICdsZWFkJywgJ3Bvc2l0aXZlJywgJ2JsYWNrJ107XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc3RhdHVzLWNlbGwnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMtY2VsbFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktaW5mb1wiPjwvaT5cbiAgICAgICAgICAgIDxsYWJlbD57eyB2YWx1ZSB9fTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgU3RhdHVzQ2VsbCBleHRlbmRzIEJhc2VSZW5kZXJlciB7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXh0cmEtZGV0YWlscycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLWRhdGFcIj5cbiAgICAgICAgICAgIDxsYWJlbD48aSBjbGFzcz1cImJoaS1pbmZvXCI+PC9pPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDxwPnt7IGRhdGEuZGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICA8bGFiZWw+PGkgY2xhc3M9XCJiaGktaW5mb1wiPjwvaT5DYXRlZ29yaWVzPC9sYWJlbD5cbiAgICAgICAgICAgIDxwPnt7IGRhdGEuY2F0ZWdvcmllcyB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBFeHRyYURldGFpbHMgZXh0ZW5kcyBCYXNlUmVuZGVyZXIge1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RhYmxlLWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZURlbW9Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLlRhYmxlRGVtb1RwbCA9IFRhYmxlRGVtb1RwbDtcbiAgICAgICAgdGhpcy5EZXRhaWxzVGFibGVEZW1vVHBsID0gRGV0YWlsc1RhYmxlRGVtb1RwbDtcbiAgICAgICAgdGhpcy5TZWxlY3RBbGxUYWJsZURlbW9UcGwgPSBTZWxlY3RBbGxUYWJsZURlbW9UcGw7XG5cbiAgICAgICAgdGhpcy5jdXN0b21Sb3dPcHRpb25zID0gW1xuICAgICAgICAgICAgeyBsYWJlbDogJzEwJywgdmFsdWU6IDEwIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnMjAnLCB2YWx1ZTogMjAgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICczMCcsIHZhbHVlOiAzMCB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJzQwJywgdmFsdWU6IDQwIH1cbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHsgdGl0bGU6ICdOYW1lJywgbmFtZTogJ25hbWUnLCBvcmRlcmluZzogdHJ1ZSwgdHlwZTogJ2xpbmsnLCBmaWx0ZXJpbmc6IHRydWUgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6ICdQb3NpdGlvbicsIG5hbWU6ICdwb3NpdGlvbicsIG9yZGVyaW5nOiB0cnVlLCBmaWx0ZXJpbmc6IHRydWUgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0V4dG4uJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZXh0JyxcbiAgICAgICAgICAgICAgICBvcmRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXJlcjogb2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5leHQub2JqO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29tcGFyZTogKHNvcnQsIHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdCA9IHByZXZpb3VzLm9iaixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZCA9IGN1cnJlbnQub2JqO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdCA+IHNlY29uZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvcnQgPT09ICdkZXNjJyA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3QgPCBzZWNvbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3J0ID09PSAnYXNjJyA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3RhcnQgZGF0ZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzdGFydERhdGUnLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiBEYXRlQ2VsbCxcbiAgICAgICAgICAgICAgICBvcmRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgcmFuZ2U6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTYWxhcnknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzYWxhcnknLFxuICAgICAgICAgICAgICAgIG9yZGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJCAke051bWJlcihvYmplY3Quc2FsYXJ5KS50b0ZpeGVkKDIpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NhbGFyeScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NhbGFyeScsXG4gICAgICAgICAgICAgICAgb3JkZXJpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyZXI6IChvYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAkICR7TnVtYmVyKG9iamVjdC5zYWxhcnkpLnRvRml4ZWQoMil9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2FsYXJ5JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2FsYXJ5JyxcbiAgICAgICAgICAgICAgICBvcmRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXJlcjogKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCQgJHtOdW1iZXIob2JqZWN0LnNhbGFyeSkudG9GaXhlZCgyKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTYWxhcnknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzYWxhcnknLFxuICAgICAgICAgICAgICAgIG9yZGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJCAke051bWJlcihvYmplY3Quc2FsYXJ5KS50b0ZpeGVkKDIpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NhbGFyeScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NhbGFyeScsXG4gICAgICAgICAgICAgICAgb3JkZXJpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyZXI6IChvYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAkICR7TnVtYmVyKG9iamVjdC5zYWxhcnkpLnRvRml4ZWQoMil9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2FsYXJ5JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2FsYXJ5JyxcbiAgICAgICAgICAgICAgICBvcmRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXJlcjogKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCQgJHtOdW1iZXIob2JqZWN0LnNhbGFyeSkudG9GaXhlZCgyKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTYWxhcnknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzYWxhcnknLFxuICAgICAgICAgICAgICAgIG9yZGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJCAke051bWJlcihvYmplY3Quc2FsYXJ5KS50b0ZpeGVkKDIpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NhbGFyeScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NhbGFyeScsXG4gICAgICAgICAgICAgICAgb3JkZXJpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyZXI6IChvYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAkICR7TnVtYmVyKG9iamVjdC5zYWxhcnkpLnRvRml4ZWQoMil9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2FsYXJ5JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2FsYXJ5JyxcbiAgICAgICAgICAgICAgICBvcmRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXJlcjogKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCQgJHtOdW1iZXIob2JqZWN0LnNhbGFyeSkudG9GaXhlZCgyKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTYWxhcnknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzYWxhcnknLFxuICAgICAgICAgICAgICAgIG9yZGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJCAke051bWJlcihvYmplY3Quc2FsYXJ5KS50b0ZpeGVkKDIpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NhbGFyeScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NhbGFyeScsXG4gICAgICAgICAgICAgICAgb3JkZXJpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyZXI6IChvYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAkICR7TnVtYmVyKG9iamVjdC5zYWxhcnkpLnRvRml4ZWQoMil9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2FsYXJ5JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2FsYXJ5JyxcbiAgICAgICAgICAgICAgICBvcmRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXJlcjogKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCQgJHtOdW1iZXIob2JqZWN0LnNhbGFyeSkudG9GaXhlZCgyKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTYWxhcnknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzYWxhcnknLFxuICAgICAgICAgICAgICAgIG9yZGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJCAke051bWJlcihvYmplY3Quc2FsYXJ5KS50b0ZpeGVkKDIpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NhbGFyeScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NhbGFyeScsXG4gICAgICAgICAgICAgICAgb3JkZXJpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyZXI6IChvYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAkICR7TnVtYmVyKG9iamVjdC5zYWxhcnkpLnRvRml4ZWQoMil9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2FsYXJ5JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2FsYXJ5JyxcbiAgICAgICAgICAgICAgICBvcmRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXJlcjogKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCQgJHtOdW1iZXIob2JqZWN0LnNhbGFyeSkudG9GaXhlZCgyKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTYWxhcnknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzYWxhcnknLFxuICAgICAgICAgICAgICAgIG9yZGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJCAke051bWJlcihvYmplY3Quc2FsYXJ5KS50b0ZpeGVkKDIpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NhbGFyeScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NhbGFyeScsXG4gICAgICAgICAgICAgICAgb3JkZXJpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyZXI6IChvYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAkICR7TnVtYmVyKG9iamVjdC5zYWxhcnkpLnRvRml4ZWQoMil9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3RhdHVzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3RhdHVzJyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBbJ05ldyBMZWFkJywgJ0FjdGl2ZScsICdBcmNoaXZlZCddLFxuICAgICAgICAgICAgICAgIG9yZGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiBTdGF0dXNDZWxsLFxuICAgICAgICAgICAgICAgIGZpbHRlcmluZzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuYmFzaWMgPSB7XG4gICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLnNsaWNlKCksXG4gICAgICAgICAgICByb3dzOiBUYWJsZURhdGEuc2xpY2UoKSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHBhZ2luZzoge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiAxLFxuICAgICAgICAgICAgICAgICAgICBpdGVtc1BlclBhZ2U6IDEwLFxuICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U6IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzaWMuY29uZmlnLnBhZ2luZy5jdXJyZW50ID0gZXZlbnQucGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzaWMuY29uZmlnLnBhZ2luZy5pdGVtc1BlclBhZ2UgPSBldmVudC5pdGVtc1BlclBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZpbHRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzb3J0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9yZGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlc2l6aW5nOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25UYWJsZUNoYW5nZTogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNpYy5yb3dzID0gZXZlbnQucm93cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRldGFpbHMgPSB7XG4gICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLnNsaWNlKCksXG4gICAgICAgICAgICByb3dzOiBUYWJsZURhdGEuc2xpY2UoKSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHBhZ2luZzoge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiAxLFxuICAgICAgICAgICAgICAgICAgICBpdGVtc1BlclBhZ2U6IDEwLFxuICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U6IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5jb25maWcucGFnaW5nLmN1cnJlbnQgPSBldmVudC5wYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLmNvbmZpZy5wYWdpbmcuaXRlbXNQZXJQYWdlID0gZXZlbnQuaXRlbXNQZXJQYWdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzb3J0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZpbHRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcmRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZXNpemluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYXNEZXRhaWxzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRldGFpbHNSZW5kZXJlcjogRXh0cmFEZXRhaWxzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25UYWJsZUNoYW5nZTogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLnJvd3MgPSBldmVudC5yb3dzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsID0ge1xuICAgICAgICAgICAgY29sdW1uczogY29sdW1ucy5zbGljZSgpLFxuICAgICAgICAgICAgcm93czogVGFibGVEYXRhLnNsaWNlKCksXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBwYWdpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDogMSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNQZXJQYWdlOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEFsbC5jb25maWcucGFnaW5nLmN1cnJlbnQgPSBldmVudC5wYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGwuY29uZmlnLnBhZ2luZy5pdGVtc1BlclBhZ2UgPSBldmVudC5pdGVtc1BlclBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNvcnRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgZmlsdGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9yZGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlc2l6aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvblN0eWxlOiAnY2hlY2tib3gnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25UYWJsZUNoYW5nZTogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGwucm93cyA9IGV2ZW50LnJvd3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudGhlbWUgPSBIRUFERVJfQ09MT1JTWzBdO1xuICAgIH1cblxuICAgIGNoYW5nZVRoZW1lKCkge1xuICAgICAgICBsZXQgaWR4ID0gSEVBREVSX0NPTE9SUy5pbmRleE9mKHRoaXMudGhlbWUpO1xuICAgICAgICBpZiAoaWR4ID09PSBIRUFERVJfQ09MT1JTLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGlkeCA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGhlbWUgPSBIRUFERVJfQ09MT1JTW2lkeCArIDFdO1xuICAgIH1cblxuICAgIHNpbmdsZUFjdGlvbigpIHtcbiAgICAgICAgd2luZG93LmFsZXJ0KCdISSEnKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZEFjdGlvbihhY3Rpb24pIHtcbiAgICAgICAgd2luZG93LmFsZXJ0KGBZb3UgY2xpY2tlZCAke2FjdGlvbn0hYCk7XG4gICAgfVxufVxuIl19

/***/ },

/***/ 877:
/***/ function(module, exports) {

	module.exports = "<novo-table [rows]=\"details.rows\" [columns]=\"details.columns\" [config]=\"details.config\" (onTableChange)=\"details.onTableChange($event)\"></novo-table>\n"

/***/ },

/***/ 878:
/***/ function(module, exports) {

	module.exports = "<novo-table [rows]=\"selectAll.rows\" [columns]=\"selectAll.columns\" [config]=\"selectAll.config\" (onTableChange)=\"selectAll.onTableChange($event)\" #table>\n    <novo-table-actions>\n        <button theme=\"secondary\" (click)=\"singleAction()\">Click Me!</button>\n        <novo-dropdown side=\"right\" *ngIf=\"table.selected.length\">\n            <button theme=\"primary\" icon=\"collapse\" inverse>{{table.selected.length}} Selected</button>\n            <list>\n                <item (action)=\"selectedAction('action 1')\">Action 1</item>\n                <item (action)=\"selectedAction('action 2')\">Action 2</item>\n                <item (action)=\"selectedAction('action 3')\" disabled=\"true\">Action 3</item>\n            </list>\n        </novo-dropdown>\n    </novo-table-actions>\n</novo-table>\n"

/***/ },

/***/ 879:
/***/ function(module, exports) {

	module.exports = "<novo-table [theme]=\"theme\" [rows]=\"basic.rows\" [columns]=\"basic.columns\" [config]=\"basic.config\" (onTableChange)=\"basic.onTableChange($event)\">\n    <novo-table-header class=\"demo-custom-header\">\n        TEST :)\n        <button theme=\"secondary\" (click)=\"changeTheme()\">Change Theme!</button>\n    </novo-table-header>\n</novo-table>\n"

/***/ },

/***/ 757:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TabsDemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// APP
	
	
	var _core = __webpack_require__(1);
	
	var _ButtonTabDemo = __webpack_require__(880);
	
	var _ButtonTabDemo2 = _interopRequireDefault(_ButtonTabDemo);
	
	var _ColorDemo = __webpack_require__(881);
	
	var _ColorDemo2 = _interopRequireDefault(_ColorDemo);
	
	var _RouterDemo = __webpack_require__(882);
	
	var _RouterDemo2 = _interopRequireDefault(_RouterDemo);
	
	var _VerticalDemo = __webpack_require__(883);
	
	var _VerticalDemo2 = _interopRequireDefault(_VerticalDemo);
	
	var _WhiteDemo = __webpack_require__(884);
	
	var _WhiteDemo2 = _interopRequireDefault(_WhiteDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Tabs <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/tabs">(source)</a></small></h1>\n    <p>Tabs make it easy to explore and switch between different views or functional aspects of an app or to browse categorized data sets. Tabs in Bullhorn have two different themes; A \'color\' theme for tabbed navigation on a colored background, and a \'white\' theme for tabs on a white background.</p>\n\n    <h2>Themes</h2>\n\n    <h5>Color</h5>\n    <p>Colored background tab navigation gets the theme <code>theme="color"</code></p>\n    <div class="example color-tab-demo">' + _ColorDemo2.default + '</div>\n    <code-snippet [code]="ColorDemoTpl"></code-snippet>\n\n    <h5>White</h5>\n    <p>White background tab navigation gets the theme <code>theme="white"</code></p>\n    <div class="example transparent-tab-demo">' + _WhiteDemo2.default + '</div>\n    <code-snippet [code]="WhiteDemoTpl"></code-snippet>\n\n    <h2>Types</h2>\n\n    <h5>Vertical</h5>\n    <p>Vertical tabs get a direction attribute <code>direction="vertical"</code></p>\n    <div class="example vertical-tab-demo">' + _VerticalDemo2.default + '</div>\n    <code-snippet [code]="VerticalDemoTpl"></code-snippet>\n\n    <h5>Button Tab Bars</h5>\n    <p>Tabbed Button Bars get a similar style treatment to the <code>"header"</code> theme button.</p>\n    <div class="example example button-tab-demo">' + _ButtonTabDemo2.default + '</div>\n    <code-snippet [code]="ButtonTabDemoTpl"></code-snippet>\n\n    <h2>As Application Routing Mechanism</h2>\n    <p>Follows the same color/white theme as above, but doesn\'t use the "novo-tabs" tag and you have to add the classes and html accordingly. The header will now control and route your application and put the content in the "router-outlet" and look/feel like our tabs component.</p>\n    <div class="example transparent-tab-demo">' + _RouterDemo2.default + '</div>\n    <code-snippet [code]="RouterDemoTpl"></code-snippet>\n</div>\n';
	
	var TabsDemoComponent = exports.TabsDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'tabs-demo',
	    template: template
	}), _dec(_class = function () {
	    function TabsDemoComponent() {
	        _classCallCheck(this, TabsDemoComponent);
	
	        this.ColorDemoTpl = _ColorDemo2.default;
	        this.WhiteDemoTpl = _WhiteDemo2.default;
	        this.VerticalDemoTpl = _VerticalDemo2.default;
	        this.ButtonTabDemoTpl = _ButtonTabDemo2.default;
	        this.RouterDemoTpl = _RouterDemo2.default;
	    }
	
	    _createClass(TabsDemoComponent, [{
	        key: 'tabSelected',
	        value: function tabSelected() {
	            console.log('TAB SELECTED'); // eslint-disable-line
	        }
	    }, {
	        key: 'tabDeselected',
	        value: function tabDeselected() {
	            console.log('TAB DESELECTED'); // eslint-disable-line
	        }
	    }]);
	
	    return TabsDemoComponent;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvdGFicy9UYWJzRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7a0JBQUE7O0FBRUE7OztBQURBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSw0L0RBQU47O0lBd0NhLGlCLFdBQUEsaUIsV0FKWixxQkFBVTtBQUNQLGNBQVUsV0FESDtBQUVQLGNBQVU7QUFGSCxDQUFWLEM7QUFLRyxpQ0FBYztBQUFBOztBQUNWLGFBQUssWUFBTDtBQUNBLGFBQUssWUFBTDtBQUNBLGFBQUssZUFBTDtBQUNBLGFBQUssZ0JBQUw7QUFDQSxhQUFLLGFBQUw7QUFDSDs7OztzQ0FFYTtBQUNWLG9CQUFRLEdBQVIsQ0FBWSxjQUFaLEVBRFUsQ0FDbUI7QUFDaEM7Ozt3Q0FFZTtBQUNaLG9CQUFRLEdBQVIsQ0FBWSxnQkFBWixFQURZLENBQ21CO0FBQ2xDIiwiZmlsZSI6IlRhYnNEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgQnV0dG9uVGFiRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9CdXR0b25UYWJEZW1vLmh0bWwnO1xuaW1wb3J0IENvbG9yRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9Db2xvckRlbW8uaHRtbCc7XG5pbXBvcnQgUm91dGVyRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9Sb3V0ZXJEZW1vLmh0bWwnO1xuaW1wb3J0IFZlcnRpY2FsRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9WZXJ0aWNhbERlbW8uaHRtbCc7XG5pbXBvcnQgV2hpdGVEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1doaXRlRGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPlRhYnMgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvdGFic1wiPihzb3VyY2UpPC9hPjwvc21hbGw+PC9oMT5cbiAgICA8cD5UYWJzIG1ha2UgaXQgZWFzeSB0byBleHBsb3JlIGFuZCBzd2l0Y2ggYmV0d2VlbiBkaWZmZXJlbnQgdmlld3Mgb3IgZnVuY3Rpb25hbCBhc3BlY3RzIG9mIGFuIGFwcCBvciB0byBicm93c2UgY2F0ZWdvcml6ZWQgZGF0YSBzZXRzLiBUYWJzIGluIEJ1bGxob3JuIGhhdmUgdHdvIGRpZmZlcmVudCB0aGVtZXM7IEEgJ2NvbG9yJyB0aGVtZSBmb3IgdGFiYmVkIG5hdmlnYXRpb24gb24gYSBjb2xvcmVkIGJhY2tncm91bmQsIGFuZCBhICd3aGl0ZScgdGhlbWUgZm9yIHRhYnMgb24gYSB3aGl0ZSBiYWNrZ3JvdW5kLjwvcD5cblxuICAgIDxoMj5UaGVtZXM8L2gyPlxuXG4gICAgPGg1PkNvbG9yPC9oNT5cbiAgICA8cD5Db2xvcmVkIGJhY2tncm91bmQgdGFiIG5hdmlnYXRpb24gZ2V0cyB0aGUgdGhlbWUgPGNvZGU+dGhlbWU9XCJjb2xvclwiPC9jb2RlPjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBjb2xvci10YWItZGVtb1wiPiR7Q29sb3JEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQ29sb3JEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+V2hpdGU8L2g1PlxuICAgIDxwPldoaXRlIGJhY2tncm91bmQgdGFiIG5hdmlnYXRpb24gZ2V0cyB0aGUgdGhlbWUgPGNvZGU+dGhlbWU9XCJ3aGl0ZVwiPC9jb2RlPjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB0cmFuc3BhcmVudC10YWItZGVtb1wiPiR7V2hpdGVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiV2hpdGVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDI+VHlwZXM8L2gyPlxuXG4gICAgPGg1PlZlcnRpY2FsPC9oNT5cbiAgICA8cD5WZXJ0aWNhbCB0YWJzIGdldCBhIGRpcmVjdGlvbiBhdHRyaWJ1dGUgPGNvZGU+ZGlyZWN0aW9uPVwidmVydGljYWxcIjwvY29kZT48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgdmVydGljYWwtdGFiLWRlbW9cIj4ke1ZlcnRpY2FsRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlZlcnRpY2FsRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PkJ1dHRvbiBUYWIgQmFyczwvaDU+XG4gICAgPHA+VGFiYmVkIEJ1dHRvbiBCYXJzIGdldCBhIHNpbWlsYXIgc3R5bGUgdHJlYXRtZW50IHRvIHRoZSA8Y29kZT5cImhlYWRlclwiPC9jb2RlPiB0aGVtZSBidXR0b24uPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGV4YW1wbGUgYnV0dG9uLXRhYi1kZW1vXCI+JHtCdXR0b25UYWJEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQnV0dG9uVGFiRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGgyPkFzIEFwcGxpY2F0aW9uIFJvdXRpbmcgTWVjaGFuaXNtPC9oMj5cbiAgICA8cD5Gb2xsb3dzIHRoZSBzYW1lIGNvbG9yL3doaXRlIHRoZW1lIGFzIGFib3ZlLCBidXQgZG9lc24ndCB1c2UgdGhlIFwibm92by10YWJzXCIgdGFnIGFuZCB5b3UgaGF2ZSB0byBhZGQgdGhlIGNsYXNzZXMgYW5kIGh0bWwgYWNjb3JkaW5nbHkuIFRoZSBoZWFkZXIgd2lsbCBub3cgY29udHJvbCBhbmQgcm91dGUgeW91ciBhcHBsaWNhdGlvbiBhbmQgcHV0IHRoZSBjb250ZW50IGluIHRoZSBcInJvdXRlci1vdXRsZXRcIiBhbmQgbG9vay9mZWVsIGxpa2Ugb3VyIHRhYnMgY29tcG9uZW50LjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB0cmFuc3BhcmVudC10YWItZGVtb1wiPiR7Um91dGVyRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlJvdXRlckRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0YWJzLWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzRGVtb0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuQ29sb3JEZW1vVHBsID0gQ29sb3JEZW1vVHBsO1xuICAgICAgICB0aGlzLldoaXRlRGVtb1RwbCA9IFdoaXRlRGVtb1RwbDtcbiAgICAgICAgdGhpcy5WZXJ0aWNhbERlbW9UcGwgPSBWZXJ0aWNhbERlbW9UcGw7XG4gICAgICAgIHRoaXMuQnV0dG9uVGFiRGVtb1RwbCA9IEJ1dHRvblRhYkRlbW9UcGw7XG4gICAgICAgIHRoaXMuUm91dGVyRGVtb1RwbCA9IFJvdXRlckRlbW9UcGw7XG4gICAgfVxuXG4gICAgdGFiU2VsZWN0ZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUQUIgU0VMRUNURUQnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH1cblxuICAgIHRhYkRlc2VsZWN0ZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUQUIgREVTRUxFQ1RFRCcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfVxufVxuIl19

/***/ },

/***/ 880:
/***/ function(module, exports) {

	module.exports = "<header class=\"color\">\n    <novo-nav theme=\"color\" [outlet]=\"buttonTab\" type=\"button-bar\">\n        <novo-tab-button>Button 1</novo-tab-button>\n        <novo-tab-button>Button 2</novo-tab-button>\n        <novo-tab-button>Button 3</novo-tab-button>\n    </novo-nav>\n</header>\n\n<novo-nav-outlet #buttonTab>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 3 Content</h1>\n    </novo-nav-content>\n</novo-nav-outlet>\n\n<header>\n    <novo-nav theme=\"white\" [outlet]=\"buttonTabWhite\" type=\"button-bar\">\n        <novo-tab-button>Button 1</novo-tab-button>\n        <novo-tab-button>Button 2</novo-tab-button>\n        <novo-tab-button>Button 3</novo-tab-button>\n    </novo-nav>\n</header>\n\n<novo-nav-outlet #buttonTabWhite>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 3 Content</h1>\n    </novo-nav-content>\n</novo-nav-outlet>\n"

/***/ },

/***/ 881:
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-nav theme=\"color\" [outlet]=\"colornav\" direction=\"horizontal\">\n        <novo-tab>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 1</span>\n        </novo-tab>\n        <novo-tab>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 2</span>\n        </novo-tab>\n    </novo-nav>\n</header>\n\n<novo-nav-outlet #colornav>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n    </novo-nav-content>\n</novo-nav-outlet>\n"

/***/ },

/***/ 882:
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-nav theme=\"white\" router>\n        <novo-tab-link>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 1</span>\n        </novo-tab-link>\n        <novo-tab-link>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 2</span>\n        </novo-tab-link>\n    </novo-nav>\n</header>\n"

/***/ },

/***/ 883:
/***/ function(module, exports) {

	module.exports = "<novo-nav theme=\"white\" [outlet]=\"colorVert\" direction=\"vertical\">\n    <novo-tab>\n        <span>\n            <i class=\"bhi-person\"></i>Tab 1</span>\n    </novo-tab>\n    <novo-tab>\n        <span>\n            <i class=\"bhi-person\"></i>Tab 2</span>\n    </novo-tab>\n</novo-nav>\n\n<novo-nav-outlet #colorVert>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n\n        <p>\n            Synth polaroid bitters chillwave pickled. Vegan disrupt tousled,\n            Portland keffiyeh aesthetic food truck sriracha cornhole\n            single-origin coffee church-key roof party. Leggings\n            ethical McSweeney's, normcore you probably haven't\n            heard of them Marfa organic squid. Slow-carb 90's\n            ennui Godard pug asymmetrical, narwhal VHS Tonx High\n            Life. Retro dreamcatcher synth Godard pickled Etsy\n            jean shorts beard, pour-over fanny pack mumblecore.\n            Quinoa retro aesthetic polaroid, Williamsburg American\n            Apparel plaid small batch. Blue Bottle Vice fanny\n            pack, Williamsburg roof party Wes Anderson mlkshk\n            seitan brunch before they sold out lo-fi XOXO tofu\n            scenester small batch.\n        </p>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n\n        <p>\n            Synth polaroid bitters chillwave pickled.\n        </p>\n    </novo-nav-content>\n</novo-nav-outlet>\n"

/***/ },

/***/ 884:
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-nav theme=\"white\" [outlet]=\"whitenav\">\n        <novo-tab>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 1</span>\n        </novo-tab>\n        <novo-tab>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 2</span>\n        </novo-tab>\n    </novo-nav>\n</header>\n\n<novo-nav-outlet #whitenav>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n    </novo-nav-content>\n</novo-nav-outlet>\n"

/***/ },

/***/ 758:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TilesDemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// APP
	
	
	var _core = __webpack_require__(1);
	
	var _TilesDemo = __webpack_require__(885);
	
	var _TilesDemo2 = _interopRequireDefault(_TilesDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Tiles <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/tiles">(source)</a></small></h1>\n    <p>\n        This component is intended to behave akin to the radio button component.\n    </p>\n    <h4>Demo</h4>\n    <div>' + _TilesDemo2.default + '</div>\n    <br>\n    You have picked (output): <strong>{{ currentColor || \'No selection\' }}</strong>\n    <br/>\n    You have picked (ngModel): <strong>{{ value || \'No selection\' }}</strong>\n    <h4>Code</h4>\n    <code-snippet [code]="TilesDemoTpl"></code-snippet>\n</div>\n';
	
	var TilesDemoComponent = exports.TilesDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'tiles-demo',
	    template: template
	}), _dec(_class = function () {
	    function TilesDemoComponent() {
	        _classCallCheck(this, TilesDemoComponent);
	
	        this.TilesDemoTpl = _TilesDemo2.default;
	        this.demoTiles = [{
	            label: 'Red',
	            value: 'red'
	        }, {
	            label: 'Green',
	            value: 'green'
	        }, {
	            label: 'Blue',
	            value: 'blue'
	        }];
	    }
	
	    _createClass(TilesDemoComponent, [{
	        key: 'colorSelect',
	        value: function colorSelect(newColorValue) {
	            this.currentColor = newColorValue;
	        }
	    }]);
	
	    return TilesDemoComponent;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvdGlsZXMvVGlsZXNEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztrQkFBQTs7QUFFQTs7O0FBREE7O0FBRUE7Ozs7Ozs7O0FBRUEsSUFBTSxnbkJBQU47O0lBcUJhLGtCLFdBQUEsa0IsV0FKWixxQkFBVTtBQUNQLGNBQVUsWUFESDtBQUVQLGNBQVU7QUFGSCxDQUFWLEM7QUFLRyxrQ0FBYztBQUFBOztBQUNWLGFBQUssWUFBTDtBQUNBLGFBQUssU0FBTCxHQUFpQixDQUNiO0FBQ0ksbUJBQU8sS0FEWDtBQUVJLG1CQUFPO0FBRlgsU0FEYSxFQUtiO0FBQ0ksbUJBQU8sT0FEWDtBQUVJLG1CQUFPO0FBRlgsU0FMYSxFQVNiO0FBQ0ksbUJBQU8sTUFEWDtBQUVJLG1CQUFPO0FBRlgsU0FUYSxDQUFqQjtBQWNIOzs7O29DQUVXLGEsRUFBZTtBQUN2QixpQkFBSyxZQUFMLEdBQW9CLGFBQXBCO0FBQ0giLCJmaWxlIjoiVGlsZXNEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgVGlsZXNEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1RpbGVzRGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPlRpbGVzIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL3RpbGVzXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPlxuICAgICAgICBUaGlzIGNvbXBvbmVudCBpcyBpbnRlbmRlZCB0byBiZWhhdmUgYWtpbiB0byB0aGUgcmFkaW8gYnV0dG9uIGNvbXBvbmVudC5cbiAgICA8L3A+XG4gICAgPGg0PkRlbW88L2g0PlxuICAgIDxkaXY+JHtUaWxlc0RlbW9UcGx9PC9kaXY+XG4gICAgPGJyPlxuICAgIFlvdSBoYXZlIHBpY2tlZCAob3V0cHV0KTogPHN0cm9uZz57eyBjdXJyZW50Q29sb3IgfHwgJ05vIHNlbGVjdGlvbicgfX08L3N0cm9uZz5cbiAgICA8YnIvPlxuICAgIFlvdSBoYXZlIHBpY2tlZCAobmdNb2RlbCk6IDxzdHJvbmc+e3sgdmFsdWUgfHwgJ05vIHNlbGVjdGlvbicgfX08L3N0cm9uZz5cbiAgICA8aDQ+Q29kZTwvaDQ+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJUaWxlc0RlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0aWxlcy1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgVGlsZXNEZW1vQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5UaWxlc0RlbW9UcGwgPSBUaWxlc0RlbW9UcGw7XG4gICAgICAgIHRoaXMuZGVtb1RpbGVzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUmVkJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3JlZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdHcmVlbicsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdncmVlbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdCbHVlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2JsdWUnXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgY29sb3JTZWxlY3QobmV3Q29sb3JWYWx1ZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRDb2xvciA9IG5ld0NvbG9yVmFsdWU7XG4gICAgfVxufVxuIl19

/***/ },

/***/ 885:
/***/ function(module, exports) {

	module.exports = "<novo-tiles [options]=\"demoTiles\" (onChange)=\"colorSelect($event)\" [(ngModel)]=\"value\"></novo-tiles>\n"

/***/ },

/***/ 759:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TipWellDemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// App
	
	
	var _core = __webpack_require__(1);
	
	var _TipWellDemo = __webpack_require__(886);
	
	var _TipWellDemo2 = _interopRequireDefault(_TipWellDemo);
	
	var _TipWellNoButtonDemo = __webpack_require__(888);
	
	var _TipWellNoButtonDemo2 = _interopRequireDefault(_TipWellNoButtonDemo);
	
	var _TipWellIconDemo = __webpack_require__(887);
	
	var _TipWellIconDemo2 = _interopRequireDefault(_TipWellIconDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>TipWell <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/tip-well">(source)</a></small></h1>\n    <p>\n        This component is meant to be akin to Bootstrap\'s \'well\'. It\'s a small container for help text.\n    </p>\n    <h4>Demo</h4>\n    <div>' + _TipWellDemo2.default + '</div>\n    <br />\n    <p>Did you hide the TipWell?</p>\n    <button theme="primary" color="success" icon="refresh" (click)="clearLocalStorage()">Reset localStorage and Reload</button>\n    <br />\n    <h4>Code</h4>\n    <code-snippet [code]="TipWellDemoTpl"></code-snippet>\n    <h4>No Button Demo</h4>\n    <div>' + _TipWellNoButtonDemo2.default + '</div>\n    <br />\n    <h4>Code</h4>\n    <code-snippet [code]="TipWellNoButtonDemoTpl"></code-snippet>\n    <h4>Icon Demo</h4>\n    <div>' + _TipWellIconDemo2.default + '</div>\n    <br />\n    <p>Did you hide the TipWell?</p>\n    <button theme="primary" color="success" icon="refresh" (click)="clearLocalStorage()">Reset localStorage and Reload</button>\n    <br />\n    <h4>Code</h4>\n    <code-snippet [code]="TipWellIconDemoTpl"></code-snippet>\n</div>\n';
	
	var TipWellDemoComponent = exports.TipWellDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'tip-well-demo',
	    template: template
	}), _dec(_class = function () {
	    function TipWellDemoComponent() {
	        _classCallCheck(this, TipWellDemoComponent);
	
	        this.TipWellDemoTpl = _TipWellDemo2.default;
	        this.TipWellNoButtonDemoTpl = _TipWellNoButtonDemo2.default;
	        this.TipWellIconDemoTpl = _TipWellIconDemo2.default;
	        this.demoTip = 'Sed sodales ligula et fermentum bibendum. Aliquam tincidunt sagittis leo eget auctor. Fusce eu sagittis metus, ut viverra magna. Mauris mollis nisl nec libero tincidunt posuere.';
	    }
	
	    _createClass(TipWellDemoComponent, [{
	        key: 'clearLocalStorage',
	        value: function clearLocalStorage() {
	            localStorage.removeItem('novo-tw_Demo');
	            location.reload();
	        }
	    }]);
	
	    return TipWellDemoComponent;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvdGlwLXdlbGwvVGlwV2VsbERlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tCQUFBOztBQUVBOzs7QUFEQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSxzcUNBQU47O0lBa0NhLG9CLFdBQUEsb0IsV0FKWixxQkFBVTtBQUNQLGNBQVUsZUFESDtBQUVQLGNBQVU7QUFGSCxDQUFWLEM7QUFLRyxvQ0FBYztBQUFBOztBQUNWLGFBQUssY0FBTDtBQUNBLGFBQUssc0JBQUw7QUFDQSxhQUFLLGtCQUFMO0FBQ0EsYUFBSyxPQUFMLEdBQWUsbUxBQWY7QUFDSDs7Ozs0Q0FFbUI7QUFDaEIseUJBQWEsVUFBYixDQUF3QixjQUF4QjtBQUNBLHFCQUFTLE1BQVQ7QUFDSCIsImZpbGUiOiJUaXBXZWxsRGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFwcFxuaW1wb3J0IFRpcFdlbGxEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1RpcFdlbGxEZW1vLmh0bWwnO1xuaW1wb3J0IFRpcFdlbGxOb0J1dHRvbkRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVGlwV2VsbE5vQnV0dG9uRGVtby5odG1sJztcbmltcG9ydCBUaXBXZWxsSWNvbkRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVGlwV2VsbEljb25EZW1vLmh0bWwnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+VGlwV2VsbCA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy90aXAtd2VsbFwiPihzb3VyY2UpPC9hPjwvc21hbGw+PC9oMT5cbiAgICA8cD5cbiAgICAgICAgVGhpcyBjb21wb25lbnQgaXMgbWVhbnQgdG8gYmUgYWtpbiB0byBCb290c3RyYXAncyAnd2VsbCcuIEl0J3MgYSBzbWFsbCBjb250YWluZXIgZm9yIGhlbHAgdGV4dC5cbiAgICA8L3A+XG4gICAgPGg0PkRlbW88L2g0PlxuICAgIDxkaXY+JHtUaXBXZWxsRGVtb1RwbH08L2Rpdj5cbiAgICA8YnIgLz5cbiAgICA8cD5EaWQgeW91IGhpZGUgdGhlIFRpcFdlbGw/PC9wPlxuICAgIDxidXR0b24gdGhlbWU9XCJwcmltYXJ5XCIgY29sb3I9XCJzdWNjZXNzXCIgaWNvbj1cInJlZnJlc2hcIiAoY2xpY2spPVwiY2xlYXJMb2NhbFN0b3JhZ2UoKVwiPlJlc2V0IGxvY2FsU3RvcmFnZSBhbmQgUmVsb2FkPC9idXR0b24+XG4gICAgPGJyIC8+XG4gICAgPGg0PkNvZGU8L2g0PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiVGlwV2VsbERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbiAgICA8aDQ+Tm8gQnV0dG9uIERlbW88L2g0PlxuICAgIDxkaXY+JHtUaXBXZWxsTm9CdXR0b25EZW1vVHBsfTwvZGl2PlxuICAgIDxiciAvPlxuICAgIDxoND5Db2RlPC9oND5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlRpcFdlbGxOb0J1dHRvbkRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbiAgICA8aDQ+SWNvbiBEZW1vPC9oND5cbiAgICA8ZGl2PiR7VGlwV2VsbEljb25EZW1vVHBsfTwvZGl2PlxuICAgIDxiciAvPlxuICAgIDxwPkRpZCB5b3UgaGlkZSB0aGUgVGlwV2VsbD88L3A+XG4gICAgPGJ1dHRvbiB0aGVtZT1cInByaW1hcnlcIiBjb2xvcj1cInN1Y2Nlc3NcIiBpY29uPVwicmVmcmVzaFwiIChjbGljayk9XCJjbGVhckxvY2FsU3RvcmFnZSgpXCI+UmVzZXQgbG9jYWxTdG9yYWdlIGFuZCBSZWxvYWQ8L2J1dHRvbj5cbiAgICA8YnIgLz5cbiAgICA8aDQ+Q29kZTwvaDQ+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJUaXBXZWxsSWNvbkRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0aXAtd2VsbC1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgVGlwV2VsbERlbW9Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLlRpcFdlbGxEZW1vVHBsID0gVGlwV2VsbERlbW9UcGw7XG4gICAgICAgIHRoaXMuVGlwV2VsbE5vQnV0dG9uRGVtb1RwbCA9IFRpcFdlbGxOb0J1dHRvbkRlbW9UcGw7XG4gICAgICAgIHRoaXMuVGlwV2VsbEljb25EZW1vVHBsID0gVGlwV2VsbEljb25EZW1vVHBsO1xuICAgICAgICB0aGlzLmRlbW9UaXAgPSAnU2VkIHNvZGFsZXMgbGlndWxhIGV0IGZlcm1lbnR1bSBiaWJlbmR1bS4gQWxpcXVhbSB0aW5jaWR1bnQgc2FnaXR0aXMgbGVvIGVnZXQgYXVjdG9yLiBGdXNjZSBldSBzYWdpdHRpcyBtZXR1cywgdXQgdml2ZXJyYSBtYWduYS4gTWF1cmlzIG1vbGxpcyBuaXNsIG5lYyBsaWJlcm8gdGluY2lkdW50IHBvc3VlcmUuJztcbiAgICB9XG5cbiAgICBjbGVhckxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ25vdm8tdHdfRGVtbycpO1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 886:
/***/ function(module, exports) {

	module.exports = "<novo-tip-well name=\"Demo\" [tip]=\"demoTip\"></novo-tip-well>"

/***/ },

/***/ 887:
/***/ function(module, exports) {

	module.exports = "<novo-tip-well name=\"Demo\" [tip]=\"demoTip\" icon=\"info\" button=\"false\"></novo-tip-well>"

/***/ },

/***/ 888:
/***/ function(module, exports) {

	module.exports = "<novo-tip-well name=\"Demo\" [tip]=\"demoTip\" button=\"false\"></novo-tip-well>\n"

/***/ },

/***/ 760:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ToastDemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// APP
	
	// Vendor
	
	
	var _core = __webpack_require__(1);
	
	var _ToastDemo = __webpack_require__(889);
	
	var _ToastDemo2 = _interopRequireDefault(_ToastDemo);
	
	var _ToastServiceDemo = __webpack_require__(890);
	
	var _ToastServiceDemo2 = _interopRequireDefault(_ToastServiceDemo);
	
	var _novoElements = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Toast Notifications\n        <small>\n            <a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/toast">(source)</a>\n        </small>\n    </h1>\n    <p>Toasts are used as system notifications. They can contain custom\n    text titles and messages, as well as any icons from bh-icons and any color\n    from our color palletes.</p>\n\n    <h2>Types</h2>\n\n    <h5>Alert</h5>\n    <p>This type of toast notification takes a template, a style,\n        and a location.</p>\n    <div class="example toast-demo">\n        <h2>Embedded Toast</h2>\n        ' + _ToastDemo2.default + '\n    </div>\n    <code-snippet [code]="ToastDemoTpl"></code-snippet>\n\n    <div class="example toast-demo">\n        <h2>Toaster Service</h2>\n        ' + _ToastServiceDemo2.default + '\n    </div>\n    <code-snippet [code]="ToastServiceDemoTpl"></code-snippet>\n</div>\n';
	
	var ToastDemoComponent = exports.ToastDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'toast-demo',
	    template: template
	}), _dec(_class = function () {
	    function ToastDemoComponent(toaster) {
	        _classCallCheck(this, ToastDemoComponent);
	
	        // Templates
	        this.ToastDemoTpl = _ToastDemo2.default;
	        this.ToastServiceDemoTpl = _ToastServiceDemo2.default;
	
	        // Toaster Service
	        this.toaster = toaster;
	
	        // Default Toast styles
	        this.positions = ['fixedTop', 'fixedBottom', 'growlTopLeft', 'growlTopRight', 'growlBottomLeft', 'growlBottomRight'];
	        this.themes = ['default', 'success', 'info', 'warning', 'danger'];
	        this.options = {
	            'title': 'Title',
	            'message': 'Some Message...'
	        };
	    }
	
	    _createClass(ToastDemoComponent, [{
	        key: 'toastToggled',
	        value: function toastToggled(arg) {
	            if (arg === 'top') {
	                this.options = {
	                    title: 'Top',
	                    message: 'This positioning is fixedTop',
	                    icon: 'coffee',
	                    theme: 'success',
	                    position: 'fixedTop'
	                };
	            } else if (arg === 'bottom') {
	                this.options = {
	                    title: 'Bottom',
	                    message: 'This positioning is fixedBottom',
	                    icon: 'check',
	                    theme: 'ocean',
	                    position: 'fixedBottom'
	                };
	            } else if (arg === 'growlTopRight') {
	                this.options = {
	                    title: 'Growl',
	                    message: 'This positioning is growlTopRight',
	                    icon: 'times',
	                    theme: 'danger',
	                    position: 'growlTopRight',
	                    hideDelay: 100000000
	                };
	            } else if (arg === 'growlTopLeft') {
	                this.options = {
	                    title: 'Growl',
	                    message: 'This positioning is growlTopLeft',
	                    icon: 'coffee',
	                    theme: 'ocean',
	                    position: 'growlTopLeft',
	                    hideDelay: 100000000
	                };
	            } else if (arg === 'growlBottomRight') {
	                this.options = {
	                    title: 'Growl',
	                    message: 'This positioning is growlTopRight',
	                    icon: 'times',
	                    theme: 'danger',
	                    position: 'growlBottomRight'
	                };
	            } else if (arg === 'growlBottomLeft') {
	                this.options = {
	                    title: 'Growl',
	                    message: 'This positioning is growlTopLeft',
	                    icon: 'coffee',
	                    theme: 'ocean',
	                    position: 'growlBottomLeft'
	                };
	            }
	            this.toaster.alert(this.options);
	        }
	    }]);
	
	    return ToastDemoComponent;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_novoElements.NovoToastService], ToastDemoComponent);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvdG9hc3QvVG9hc3REZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztrQkFBQTs7QUFFQTs7QUFHQTs7O0FBSkE7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNLGs3QkFBTjs7SUFrQ2Esa0IsV0FBQSxrQixXQUpaLHFCQUFVO0FBQ1AsY0FBVSxZQURIO0FBRVAsY0FBVTtBQUZILENBQVYsQztBQUtHLGdDQUFZLE9BQVosRUFBc0M7QUFBQTs7QUFDbEM7QUFDQSxhQUFLLFlBQUw7QUFDQSxhQUFLLG1CQUFMOztBQUVBO0FBQ0EsYUFBSyxPQUFMLEdBQWUsT0FBZjs7QUFFQTtBQUNBLGFBQUssU0FBTCxHQUFpQixDQUNiLFVBRGEsRUFFYixhQUZhLEVBR2IsY0FIYSxFQUliLGVBSmEsRUFLYixpQkFMYSxFQU1iLGtCQU5hLENBQWpCO0FBUUEsYUFBSyxNQUFMLEdBQWMsQ0FDVixTQURVLEVBRVYsU0FGVSxFQUdWLE1BSFUsRUFJVixTQUpVLEVBS1YsUUFMVSxDQUFkO0FBT0EsYUFBSyxPQUFMLEdBQWU7QUFDWCxxQkFBUyxPQURFO0FBRVgsdUJBQVc7QUFGQSxTQUFmO0FBSUg7Ozs7cUNBRVksRyxFQUFLO0FBQ2QsZ0JBQUksUUFBUSxLQUFaLEVBQW1CO0FBQ2YscUJBQUssT0FBTCxHQUFlO0FBQ1gsMkJBQU8sS0FESTtBQUVYLDZCQUFTLDhCQUZFO0FBR1gsMEJBQU0sUUFISztBQUlYLDJCQUFPLFNBSkk7QUFLWCw4QkFBVTtBQUxDLGlCQUFmO0FBT0gsYUFSRCxNQVFPLElBQUksUUFBUSxRQUFaLEVBQXNCO0FBQ3pCLHFCQUFLLE9BQUwsR0FBZTtBQUNYLDJCQUFPLFFBREk7QUFFWCw2QkFBUyxpQ0FGRTtBQUdYLDBCQUFNLE9BSEs7QUFJWCwyQkFBTyxPQUpJO0FBS1gsOEJBQVU7QUFMQyxpQkFBZjtBQU9ILGFBUk0sTUFRQSxJQUFJLFFBQVEsZUFBWixFQUE2QjtBQUNoQyxxQkFBSyxPQUFMLEdBQWU7QUFDWCwyQkFBTyxPQURJO0FBRVgsNkJBQVMsbUNBRkU7QUFHWCwwQkFBTSxPQUhLO0FBSVgsMkJBQU8sUUFKSTtBQUtYLDhCQUFVLGVBTEM7QUFNWCwrQkFBVztBQU5BLGlCQUFmO0FBUUgsYUFUTSxNQVNBLElBQUksUUFBUSxjQUFaLEVBQTRCO0FBQy9CLHFCQUFLLE9BQUwsR0FBZTtBQUNYLDJCQUFPLE9BREk7QUFFWCw2QkFBUyxrQ0FGRTtBQUdYLDBCQUFNLFFBSEs7QUFJWCwyQkFBTyxPQUpJO0FBS1gsOEJBQVUsY0FMQztBQU1YLCtCQUFXO0FBTkEsaUJBQWY7QUFRSCxhQVRNLE1BU0EsSUFBSSxRQUFRLGtCQUFaLEVBQWdDO0FBQ25DLHFCQUFLLE9BQUwsR0FBZTtBQUNYLDJCQUFPLE9BREk7QUFFWCw2QkFBUyxtQ0FGRTtBQUdYLDBCQUFNLE9BSEs7QUFJWCwyQkFBTyxRQUpJO0FBS1gsOEJBQVU7QUFMQyxpQkFBZjtBQU9ILGFBUk0sTUFRQSxJQUFJLFFBQVEsaUJBQVosRUFBK0I7QUFDbEMscUJBQUssT0FBTCxHQUFlO0FBQ1gsMkJBQU8sT0FESTtBQUVYLDZCQUFTLGtDQUZFO0FBR1gsMEJBQU0sUUFISztBQUlYLDJCQUFPLE9BSkk7QUFLWCw4QkFBVTtBQUxDLGlCQUFmO0FBT0g7QUFDRCxpQkFBSyxPQUFMLENBQWEsS0FBYixDQUFtQixLQUFLLE9BQXhCO0FBQ0g7Ozs7OzhFQXBGUSxrQiIsImZpbGUiOiJUb2FzdERlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCBUb2FzdERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVG9hc3REZW1vLmh0bWwnO1xuaW1wb3J0IFRvYXN0U2VydmljZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVG9hc3RTZXJ2aWNlRGVtby5odG1sJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgTm92b1RvYXN0U2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+VG9hc3QgTm90aWZpY2F0aW9uc1xuICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL3RvYXN0XCI+KHNvdXJjZSk8L2E+XG4gICAgICAgIDwvc21hbGw+XG4gICAgPC9oMT5cbiAgICA8cD5Ub2FzdHMgYXJlIHVzZWQgYXMgc3lzdGVtIG5vdGlmaWNhdGlvbnMuIFRoZXkgY2FuIGNvbnRhaW4gY3VzdG9tXG4gICAgdGV4dCB0aXRsZXMgYW5kIG1lc3NhZ2VzLCBhcyB3ZWxsIGFzIGFueSBpY29ucyBmcm9tIGJoLWljb25zIGFuZCBhbnkgY29sb3JcbiAgICBmcm9tIG91ciBjb2xvciBwYWxsZXRlcy48L3A+XG5cbiAgICA8aDI+VHlwZXM8L2gyPlxuXG4gICAgPGg1PkFsZXJ0PC9oNT5cbiAgICA8cD5UaGlzIHR5cGUgb2YgdG9hc3Qgbm90aWZpY2F0aW9uIHRha2VzIGEgdGVtcGxhdGUsIGEgc3R5bGUsXG4gICAgICAgIGFuZCBhIGxvY2F0aW9uLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB0b2FzdC1kZW1vXCI+XG4gICAgICAgIDxoMj5FbWJlZGRlZCBUb2FzdDwvaDI+XG4gICAgICAgICR7VG9hc3REZW1vVHBsfVxuICAgIDwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiVG9hc3REZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB0b2FzdC1kZW1vXCI+XG4gICAgICAgIDxoMj5Ub2FzdGVyIFNlcnZpY2U8L2gyPlxuICAgICAgICAke1RvYXN0U2VydmljZURlbW9UcGx9XG4gICAgPC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJUb2FzdFNlcnZpY2VEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndG9hc3QtZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0RGVtb0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IodG9hc3RlcjpOb3ZvVG9hc3RTZXJ2aWNlKSB7XG4gICAgICAgIC8vIFRlbXBsYXRlc1xuICAgICAgICB0aGlzLlRvYXN0RGVtb1RwbCA9IFRvYXN0RGVtb1RwbDtcbiAgICAgICAgdGhpcy5Ub2FzdFNlcnZpY2VEZW1vVHBsID0gVG9hc3RTZXJ2aWNlRGVtb1RwbDtcblxuICAgICAgICAvLyBUb2FzdGVyIFNlcnZpY2VcbiAgICAgICAgdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcblxuICAgICAgICAvLyBEZWZhdWx0IFRvYXN0IHN0eWxlc1xuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IFtcbiAgICAgICAgICAgICdmaXhlZFRvcCcsXG4gICAgICAgICAgICAnZml4ZWRCb3R0b20nLFxuICAgICAgICAgICAgJ2dyb3dsVG9wTGVmdCcsXG4gICAgICAgICAgICAnZ3Jvd2xUb3BSaWdodCcsXG4gICAgICAgICAgICAnZ3Jvd2xCb3R0b21MZWZ0JyxcbiAgICAgICAgICAgICdncm93bEJvdHRvbVJpZ2h0J1xuICAgICAgICBdO1xuICAgICAgICB0aGlzLnRoZW1lcyA9IFtcbiAgICAgICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgICAgICdzdWNjZXNzJyxcbiAgICAgICAgICAgICdpbmZvJyxcbiAgICAgICAgICAgICd3YXJuaW5nJyxcbiAgICAgICAgICAgICdkYW5nZXInXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICd0aXRsZSc6ICdUaXRsZScsXG4gICAgICAgICAgICAnbWVzc2FnZSc6ICdTb21lIE1lc3NhZ2UuLi4nXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdG9hc3RUb2dnbGVkKGFyZykge1xuICAgICAgICBpZiAoYXJnID09PSAndG9wJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnVG9wJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhpcyBwb3NpdGlvbmluZyBpcyBmaXhlZFRvcCcsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2NvZmZlZScsXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkVG9wJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChhcmcgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdCb3R0b20nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGlzIHBvc2l0aW9uaW5nIGlzIGZpeGVkQm90dG9tJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnY2hlY2snLFxuICAgICAgICAgICAgICAgIHRoZW1lOiAnb2NlYW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWRCb3R0b20nXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJ2dyb3dsVG9wUmlnaHQnKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdHcm93bCcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoaXMgcG9zaXRpb25pbmcgaXMgZ3Jvd2xUb3BSaWdodCcsXG4gICAgICAgICAgICAgICAgaWNvbjogJ3RpbWVzJyxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdncm93bFRvcFJpZ2h0JyxcbiAgICAgICAgICAgICAgICBoaWRlRGVsYXk6IDEwMDAwMDAwMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChhcmcgPT09ICdncm93bFRvcExlZnQnKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdHcm93bCcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoaXMgcG9zaXRpb25pbmcgaXMgZ3Jvd2xUb3BMZWZ0JyxcbiAgICAgICAgICAgICAgICBpY29uOiAnY29mZmVlJyxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ29jZWFuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2dyb3dsVG9wTGVmdCcsXG4gICAgICAgICAgICAgICAgaGlkZURlbGF5OiAxMDAwMDAwMDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoYXJnID09PSAnZ3Jvd2xCb3R0b21SaWdodCcpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0dyb3dsJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhpcyBwb3NpdGlvbmluZyBpcyBncm93bFRvcFJpZ2h0JyxcbiAgICAgICAgICAgICAgICBpY29uOiAndGltZXMnLFxuICAgICAgICAgICAgICAgIHRoZW1lOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2dyb3dsQm90dG9tUmlnaHQnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJ2dyb3dsQm90dG9tTGVmdCcpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0dyb3dsJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhpcyBwb3NpdGlvbmluZyBpcyBncm93bFRvcExlZnQnLFxuICAgICAgICAgICAgICAgIGljb246ICdjb2ZmZWUnLFxuICAgICAgICAgICAgICAgIHRoZW1lOiAnb2NlYW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZ3Jvd2xCb3R0b21MZWZ0J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvYXN0ZXIuYWxlcnQodGhpcy5vcHRpb25zKTtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 889:
/***/ function(module, exports) {

	module.exports = "<div class=\"fake-card\">\n    <header title=\"John Deere\" icon=\"person\" theme=\"contact\">\n        <utils>\n            <util-action icon=\"flag\"></util-action>\n            <util-action icon=\"refresh\"></util-action>\n            <util-action icon=\"times\"></util-action>\n        </utils>\n    </header>\n    <novo-toast theme=\"danger\" title=\"Save Failed\" message=\"Oops! Looks like you're missing some required fields\"\n                icon=\"caution\" position=\"growlTopRight\"></novo-toast>\n    <div class=\"content\">\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n            do eiusmod tempor incididunt ut labore et dolore\n            magna aliqua. Ut enim ad minim veniam, quis nostrud\n            exercitation ullamco laboris nisi ut aliquip ex ea\n            commodo consequat. Duis aute irure dolor in reprehenderit\n            in voluptate velit esse cillum dolore eu fugiat nulla\n            pariatur. Excepteur sint occaecat cupidatat non proident,\n            sunt in culpa qui officia deserunt mollit anim id\n            est laborum.\n        </p>\n    </div>\n</div>\n"

/***/ },

/***/ 890:
/***/ function(module, exports) {

	module.exports = "<button theme=\"dialogue\" color=\"success\" icon=\"coffee\" (click)=\"toastToggled('top')\" data-automation-id=\"toast-trigger\">Fixed Top</button>\n<button theme=\"dialogue\" color=\"primary\" icon=\"check\" (click)=\"toastToggled('bottom')\">Fixed Bottom</button>\n<button theme=\"dialogue\" color=\"negative\" icon=\"times\" (click)=\"toastToggled('growlTopRight')\">Growl: Top Right</button>\n<button theme=\"dialogue\" color=\"primary\" icon=\"coffee\" (click)=\"toastToggled('growlTopLeft')\">Growl: Top Left</button>\n<button theme=\"dialogue\" color=\"negative\" icon=\"times\" (click)=\"toastToggled('growlBottomRight')\">Growl: Bottom Right</button>\n<button theme=\"dialogue\" color=\"primary\" icon=\"coffee\" (click)=\"toastToggled('growlBottomLeft')\">Growl: Bottom Left</button>\n"

/***/ },

/***/ 761:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TooltipDemoComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // NG2
	
	// APP
	
	
	var _core = __webpack_require__(1);
	
	var _TooltipOptionsDemo = __webpack_require__(892);
	
	var _TooltipOptionsDemo2 = _interopRequireDefault(_TooltipOptionsDemo);
	
	var _TooltipPlacementDemo = __webpack_require__(893);
	
	var _TooltipPlacementDemo2 = _interopRequireDefault(_TooltipPlacementDemo);
	
	var _TooltipAlignDemo = __webpack_require__(891);
	
	var _TooltipAlignDemo2 = _interopRequireDefault(_TooltipAlignDemo);
	
	var _TooltipTypesDemo = __webpack_require__(895);
	
	var _TooltipTypesDemo2 = _interopRequireDefault(_TooltipTypesDemo);
	
	var _TooltipToggleDemo = __webpack_require__(894);
	
	var _TooltipToggleDemo2 = _interopRequireDefault(_TooltipToggleDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Tooltips <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/tooltip">(source)</a></small></h1>\n    <p>We use the <a href="http://kushagragour.in/lab/hint/">hint.css</a> module for our tooltip implementation, wrapping it inside a directive.</p>\n\n    <h2>Helper</h2>\n    <p>Helper tooltips contain basic text that provides some additional information about an element.</p>\n\n    <h5>Placement</h5>\n    <div class="example tooltip-demo">' + _TooltipPlacementDemo2.default + '</div>\n    <code-snippet [code]="TooltipPlacementDemoTpl"></code-snippet>\n\n    <h5>Alignment</h5>\n    <div class="example tooltip-demo">' + _TooltipAlignDemo2.default + '</div>\n    <code-snippet [code]="TooltipAlignDemoTpl"></code-snippet>\n\n    <h5>Types</h5>\n    <div class="example tooltip-demo">' + _TooltipTypesDemo2.default + '</div>\n    <code-snippet [code]="TooltipTypesDemoTpl"></code-snippet>\n\n    <h5>Options</h5>\n    <div class="example tooltip-demo">' + _TooltipOptionsDemo2.default + '</div>\n    <code-snippet [code]="TooltipOptionsDemoTpl"></code-snippet>\n\n    <h5>Toggle Trigger</h5>\n    <div class="example tooltip-demo">' + _TooltipToggleDemo2.default + '</div>\n    <code-snippet [code]="TooltipToggleDemoTpl"></code-snippet>\n</div>\n';
	var TooltipDemoComponent = exports.TooltipDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'tooltip-demo',
	    template: template
	}), _dec(_class = function () {
	    function TooltipDemoComponent() {
	        _classCallCheck(this, TooltipDemoComponent);
	
	        this.TooltipOptionsDemoTpl = _TooltipOptionsDemo2.default;
	        this.TooltipTypesDemoTpl = _TooltipTypesDemo2.default;
	        this.TooltipPlacementDemoTpl = _TooltipPlacementDemo2.default;
	        this.TooltipAlignDemoTpl = _TooltipAlignDemo2.default;
	        this.TooltipToggleDemoTpl = _TooltipToggleDemo2.default;
	    }
	
	    _createClass(TooltipDemoComponent, [{
	        key: 'toggleTooltip',
	        value: function toggleTooltip() {
	            this.tooltipActive = !this.tooltipActive;
	        }
	    }]);
	
	    return TooltipDemoComponent;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZWxlbWVudHMvdG9vbHRpcC9Ub29sdGlwRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7a0JBQUE7O0FBRUE7OztBQURBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSwrekNBQU47SUFpQ2Esb0IsV0FBQSxvQixXQUpaLHFCQUFVO0FBQ1AsY0FBVSxjQURIO0FBRVAsY0FBVTtBQUZILENBQVYsQztBQUtHLG9DQUFjO0FBQUE7O0FBQ1YsYUFBSyxxQkFBTDtBQUNBLGFBQUssbUJBQUw7QUFDQSxhQUFLLHVCQUFMO0FBQ0EsYUFBSyxtQkFBTDtBQUNBLGFBQUssb0JBQUw7QUFDSDs7Ozt3Q0FFZTtBQUNaLGlCQUFLLGFBQUwsR0FBcUIsQ0FBQyxLQUFLLGFBQTNCO0FBQ0giLCJmaWxlIjoiVG9vbHRpcERlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCBUb29sdGlwT3B0aW9uc0RlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVG9vbHRpcE9wdGlvbnNEZW1vLmh0bWwnO1xuaW1wb3J0IFRvb2x0aXBQbGFjZW1lbnREZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1Rvb2x0aXBQbGFjZW1lbnREZW1vLmh0bWwnO1xuaW1wb3J0IFRvb2x0aXBBbGlnbkRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVG9vbHRpcEFsaWduRGVtby5odG1sJztcbmltcG9ydCBUb29sdGlwVHlwZXNEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1Rvb2x0aXBUeXBlc0RlbW8uaHRtbCc7XG5pbXBvcnQgVG9vbHRpcFRvZ2dsZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVG9vbHRpcFRvZ2dsZURlbW8uaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5Ub29sdGlwcyA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy90b29sdGlwXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPldlIHVzZSB0aGUgPGEgaHJlZj1cImh0dHA6Ly9rdXNoYWdyYWdvdXIuaW4vbGFiL2hpbnQvXCI+aGludC5jc3M8L2E+IG1vZHVsZSBmb3Igb3VyIHRvb2x0aXAgaW1wbGVtZW50YXRpb24sIHdyYXBwaW5nIGl0IGluc2lkZSBhIGRpcmVjdGl2ZS48L3A+XG5cbiAgICA8aDI+SGVscGVyPC9oMj5cbiAgICA8cD5IZWxwZXIgdG9vbHRpcHMgY29udGFpbiBiYXNpYyB0ZXh0IHRoYXQgcHJvdmlkZXMgc29tZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IGFuIGVsZW1lbnQuPC9wPlxuXG4gICAgPGg1PlBsYWNlbWVudDwvaDU+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgdG9vbHRpcC1kZW1vXCI+JHtUb29sdGlwUGxhY2VtZW50RGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlRvb2x0aXBQbGFjZW1lbnREZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+QWxpZ25tZW50PC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB0b29sdGlwLWRlbW9cIj4ke1Rvb2x0aXBBbGlnbkRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJUb29sdGlwQWxpZ25EZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+VHlwZXM8L2g1PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHRvb2x0aXAtZGVtb1wiPiR7VG9vbHRpcFR5cGVzRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlRvb2x0aXBUeXBlc0RlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5PcHRpb25zPC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB0b29sdGlwLWRlbW9cIj4ke1Rvb2x0aXBPcHRpb25zRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlRvb2x0aXBPcHRpb25zRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PlRvZ2dsZSBUcmlnZ2VyPC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB0b29sdGlwLWRlbW9cIj4ke1Rvb2x0aXBUb2dnbGVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiVG9vbHRpcFRvZ2dsZURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndG9vbHRpcC1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERlbW9Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLlRvb2x0aXBPcHRpb25zRGVtb1RwbCA9IFRvb2x0aXBPcHRpb25zRGVtb1RwbDtcbiAgICAgICAgdGhpcy5Ub29sdGlwVHlwZXNEZW1vVHBsID0gVG9vbHRpcFR5cGVzRGVtb1RwbDtcbiAgICAgICAgdGhpcy5Ub29sdGlwUGxhY2VtZW50RGVtb1RwbCA9IFRvb2x0aXBQbGFjZW1lbnREZW1vVHBsO1xuICAgICAgICB0aGlzLlRvb2x0aXBBbGlnbkRlbW9UcGwgPSBUb29sdGlwQWxpZ25EZW1vVHBsO1xuICAgICAgICB0aGlzLlRvb2x0aXBUb2dnbGVEZW1vVHBsID0gVG9vbHRpcFRvZ2dsZURlbW9UcGw7XG4gICAgfVxuXG4gICAgdG9nZ2xlVG9vbHRpcCgpIHtcbiAgICAgICAgdGhpcy50b29sdGlwQWN0aXZlID0gIXRoaXMudG9vbHRpcEFjdGl2ZTtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 891:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"bottom-left\" tooltipPosition=\"bottom-left\">Bottom Left</span>\n<span tooltip=\"bottom-right\" tooltipPosition=\"bottom-right\">Bottom Right</span>\n<span tooltip=\"top-left\" tooltipPosition=\"top-left\">Top Left</span>\n<span tooltip=\"top-right\" tooltipPosition=\"top-right\">Top Right</span>\n"

/***/ },

/***/ 892:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"ALWAYS\" tooltipAlways=\"true\">Always Shown</span>\n<span tooltip=\"ROUNDED\" tooltipRounded=\"true\">Rounded</span>\n<span tooltip=\"NO ANIMATE\" tooltipNoAnimate=\"true\">No Animation</span>\n<span tooltip=\"BOUNCE\" tooltipBounce=\"true\">Bounce</span>\n"

/***/ },

/***/ 893:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"left\" tooltipPosition=\"left\">Left</span>\n<span tooltip=\"right\" tooltipPosition=\"right\">Right</span>\n<span tooltip=\"top\" tooltipPosition=\"top\">Top</span>\n<span tooltip=\"bottom\" tooltipPosition=\"bottom\">Bottom</span>\n"

/***/ },

/***/ 894:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"I HAVE A TOOLTIP!\" [tooltipActive]=\"tooltipActive\">\n    <span *ngIf=\"tooltipActive\">My tooltip can display!</span>\n    <span *ngIf=\"!tooltipActive\">My tooltip is disabled!</span>\n</span>\n<button theme=\"secondary\" (click)=\"toggleTooltip()\">Toggle</button>\n"

/***/ },

/***/ 895:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"ERROR\" tooltipType=\"error\">Error</span>\n<span tooltip=\"INFO\" tooltipType=\"info\">Info</span>\n<span tooltip=\"WARNING\" tooltipType=\"warning\">Warning</span>\n<span tooltip=\"SUCCESS\" tooltipType=\"success\">Success</span>\n"

/***/ },

/***/ 896:
/***/ function(module, exports) {

	module.exports = "<header class=\"design container\">\n    <div>\n        <h1 class=\"title\">Introduction</h1>\n        <h2 class=\"sub-title\">Crafted amid Complexity</h2>\n\n        <p class=\"description\">\n            Enterprise software is highly complex and demands a\n            high level of flexibility. Design offers clarity and enables us to make\n            deep, powerful connections.\n        </p>\n    </div>\n    <img src=\"assets/images/IntroPageHeaderImage.svg\" alt=\"\"/>\n</header>\n\n<section class=\"design container\">\n    <h5>A NEW STANDARD</h5>\n    <p>Elegance in utility helps to create a system for humans, not robots. We strive not just to empower users but to delight them in the process.</p>\n\n    <h5>INSIGHTS AT SCALE</h5>\n    <p>Vast data reservoirs need a finely tuned system to surface the critical information right when it is needed, no matter the scale or setting.</p>\n\n    <h5>POWER IN FLEXIBILITY</h5>\n    <p>Users have vastly differing needs and goals. By identifying key commonalities and themes, we provide a strong experience for all.</p>\n\n    <article class=\"jump-to code\">\n        <i class=\"bhi-link\"></i>\n        <span>Are you a developer and what to skip right to the code?<br><a href=\"#\" routerLink=\"Buttons\">View Components here</a></span>\n    </article>\n\n    <article class=\"jump-to brand\">\n        <i class=\"bhi-link\"></i>\n        <span>Looking for the Bullhorn corporate brand guidelines? <br/><a href=\"https://brandfolder.com/bullhorn\" target=\"_blank\">Bullhorn Brand Folder</a></span>\n    </article>\n</section>\n"

/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Home = undefined;
	
	var _dec, _class; // NG2
	
	
	var _core = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Home = exports.Home = (_dec = (0, _core.Component)({
	    selector: 'home',
	    template: __webpack_require__(896)
	}), _dec(_class = function Home() {
	    _classCallCheck(this, Home);
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvaG9tZS9Ib21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7a0JBQUE7OztBQUNBOzs7O0lBTWEsSSxXQUFBLEksV0FKWixxQkFBVTtBQUNQLGNBQVUsTUFESDtBQUVQLGNBQVUsUUFBUSxhQUFSO0FBRkgsQ0FBVixDIiwiZmlsZSI6IkhvbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaG9tZScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vSG9tZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgSG9tZSB7XG59XG4iXX0=

/***/ },

/***/ 762:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PipesDemo = __webpack_require__(443);
	
	Object.keys(_PipesDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _PipesDemo[key];
	    }
	  });
	});
	
	var _UtilsDemo = __webpack_require__(444);
	
	Object.keys(_UtilsDemo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _UtilsDemo[key];
	    }
	  });
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdXRpbHMvYWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9waXBlcy9QaXBlc0RlbW8nO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscy9VdGlsc0RlbW8nO1xuIl19

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PipesDemoComponent = undefined;
	
	var _dec, _class; // NG2
	
	// APP
	
	
	var _core = __webpack_require__(1);
	
	var _PluralizeDemo = __webpack_require__(897);
	
	var _PluralizeDemo2 = _interopRequireDefault(_PluralizeDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Pipes</h1>\n    <p>Utility and helpful pipes.</p>\n\n    <h5>Pluralize <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/pipes/plural">(source)</a></small></h5>\n    <p>Makes works plural or vice-versa</p>\n    <div class="example pipes-demo">' + _PluralizeDemo2.default + '</div>\n    <code-snippet [code]="PluralizeDemoTpl"></code-snippet>\n</div>\n';
	
	var PipesDemoComponent = exports.PipesDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'pipes-demo',
	    template: template
	}), _dec(_class = function PipesDemoComponent() {
	    _classCallCheck(this, PipesDemoComponent);
	
	    this.PluralizeDemoTpl = _PluralizeDemo2.default;
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdXRpbHMvcGlwZXMvUGlwZXNEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7a0JBQUE7O0FBRUE7OztBQURBOztBQUVBOzs7Ozs7OztBQUVBLElBQU0sdWJBQU47O0lBZ0JhLGtCLFdBQUEsa0IsV0FKWixxQkFBVTtBQUNQLGNBQVUsWUFESDtBQUVQLGNBQVU7QUFGSCxDQUFWLEMsZ0JBS0csOEJBQWM7QUFBQTs7QUFDVixTQUFLLGdCQUFMO0FBQ0gsQyIsImZpbGUiOiJQaXBlc0RlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCBQbHVyYWxpemVEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1BsdXJhbGl6ZURlbW8uaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5QaXBlczwvaDE+XG4gICAgPHA+VXRpbGl0eSBhbmQgaGVscGZ1bCBwaXBlcy48L3A+XG5cbiAgICA8aDU+UGx1cmFsaXplIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL3BpcGVzL3BsdXJhbFwiPihzb3VyY2UpPC9hPjwvc21hbGw+PC9oNT5cbiAgICA8cD5NYWtlcyB3b3JrcyBwbHVyYWwgb3IgdmljZS12ZXJzYTwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBwaXBlcy1kZW1vXCI+JHtQbHVyYWxpemVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiUGx1cmFsaXplRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BpcGVzLWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxufSlcbmV4cG9ydCBjbGFzcyBQaXBlc0RlbW9Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLlBsdXJhbGl6ZURlbW9UcGwgPSBQbHVyYWxpemVEZW1vVHBsO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 897:
/***/ function(module, exports) {

	module.exports = "<p>{{'Kitty' | plural}}</p>\n<p>{{'Cat' | plural}}</p>\n"

/***/ },

/***/ 898:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n    <h1>Utils</h1>\n    <p>Helpful utility functions and objects.</p>\n\n    <h5>Key Codes\n        <small><a target=\"_blank\" href=\"https://github.com/bullhorn/novo-elements/tree/master/src/utils/key-codes\">(source)</a></small>\n    </h5>\n    <p>List of all Key Codes to import and use, no magic strings!</p>\n\n    <h5>Deferred\n        <small><a target=\"_blank\" href=\"https://github.com/bullhorn/novo-elements/tree/master/src/utils/deferred\">(source)</a></small>\n    </h5>\n    <p>Custom deferred object</p>\n\n    <h5>Outside Click\n        <small><a target=\"_blank\" href=\"https://github.com/bullhorn/novo-elements/tree/master/src/utils/outside-click\">(source)</a></small>\n    </h5>\n    <p>Helper class to listen to and automatically close a component when an outside click is detected.</p>\n</div>\n"

/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.UtilsDemoComponent = undefined;
	
	var _dec, _class; // NG2
	
	
	var _core = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UtilsDemoComponent = exports.UtilsDemoComponent = (_dec = (0, _core.Component)({
	    selector: 'utils-demo',
	    template: __webpack_require__(898)
	}), _dec(_class = function UtilsDemoComponent() {
	    _classCallCheck(this, UtilsDemoComponent);
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdXRpbHMvdXRpbHMvVXRpbHNEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7a0JBQUE7OztBQUNBOzs7O0lBTWEsa0IsV0FBQSxrQixXQUpaLHFCQUFVO0FBQ1AsY0FBVSxZQURIO0FBRVAsY0FBVSxRQUFRLGtCQUFSO0FBRkgsQ0FBVixDIiwiZmlsZSI6IlV0aWxzRGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd1dGlscy1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9VdGlsc0RlbW8uaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIFV0aWxzRGVtb0NvbXBvbmVudCB7XG59XG4iXX0=

/***/ }

});
//# sourceMappingURL=demo.50be3c32741a510fb49b.bundle.map