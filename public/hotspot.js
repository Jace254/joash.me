(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(`html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}*,:before,:after{--un-rotate: 0;--un-rotate-x: 0;--un-rotate-y: 0;--un-rotate-z: 0;--un-scale-x: 1;--un-scale-y: 1;--un-scale-z: 1;--un-skew-x: 0;--un-skew-y: 0;--un-translate-x: 0;--un-translate-y: 0;--un-translate-z: 0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness: proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x: 0;--un-border-spacing-y: 0;--un-ring-offset-shadow: 0 0 rgb(0 0 0 / 0);--un-ring-shadow: 0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow: 0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width: 0px;--un-ring-offset-color: #fff;--un-ring-width: 0px;--un-ring-color: rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate: 0;--un-rotate-x: 0;--un-rotate-y: 0;--un-rotate-z: 0;--un-scale-x: 1;--un-scale-y: 1;--un-scale-z: 1;--un-skew-x: 0;--un-skew-y: 0;--un-translate-x: 0;--un-translate-y: 0;--un-translate-z: 0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness: proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x: 0;--un-border-spacing-y: 0;--un-ring-offset-shadow: 0 0 rgb(0 0 0 / 0);--un-ring-shadow: 0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow: 0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width: 0px;--un-ring-offset-color: #fff;--un-ring-width: 0px;--un-ring-color: rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-greek-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-greek-400-normal.woff) format("woff");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-latin-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-latin-400-normal.woff) format("woff");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-cyrillic-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-cyrillic-400-normal.woff) format("woff");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-greek-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-greek-ext-400-normal.woff) format("woff");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-latin-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-latin-ext-400-normal.woff) format("woff");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-vietnamese-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-vietnamese-400-normal.woff) format("woff");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-cyrillic-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-cyrillic-ext-400-normal.woff) format("woff");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-latin-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-latin-400-normal.woff) format("woff");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-latin-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-latin-ext-400-normal.woff) format("woff");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-vietnamese-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-vietnamese-400-normal.woff) format("woff");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}.theme-blue{--background-hotspot: 0 0% 100%;--foreground-hotspot: 222.2 84% 4.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 222.2 84% 4.9%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 222.2 84% 4.9%;--primary-hotspot: 221.2 83.2% 53.3%;--primary-foreground-hotspot: 210 40% 98%;--secondary-hotspot: 210 40% 96.1%;--secondary-foreground-hotspot: 222.2 47.4% 11.2%;--muted-hotspot: 210 40% 96.1%;--muted-foreground-hotspot: 215.4 16.3% 46.9%;--accent-hotspot: 210 40% 96.1%;--accent-foreground-hotspot: 222.2 47.4% 11.2%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 40% 98%;--border-hotspot: 214.3 31.8% 91.4%;--input-hotspot: 214.3 31.8% 91.4%;--ring-hotspot: 221.2 83.2% 53.3%;--radius-hotspot: .5rem}.theme-blue.dark{--background-hotspot: 222.2 84% 4.9%;--foreground-hotspot: 210 40% 98%;--card-hotspot: 222.2 84% 4.9%;--card-foreground-hotspot: 210 40% 98%;--popover-hotspot: 222.2 84% 4.9%;--popover-foreground-hotspot: 210 40% 98%;--primary-hotspot: 217.2 91.2% 59.8%;--primary-foreground-hotspot: 222.2 47.4% 11.2%;--secondary-hotspot: 217.2 32.6% 17.5%;--secondary-foreground-hotspot: 210 40% 98%;--muted-hotspot: 217.2 32.6% 17.5%;--muted-foreground-hotspot: 215 20.2% 65.1%;--accent-hotspot: 217.2 32.6% 17.5%;--accent-foreground-hotspot: 210 40% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 210 40% 98%;--border-hotspot: 217.2 32.6% 17.5%;--input-hotspot: 217.2 32.6% 17.5%;--ring-hotspot: 224.3 76.3% 48%}.i-bi-grid-fill{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 16 16' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-clarity-success-standard-line{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 36 36' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14' class='clr-i-outline clr-i-outline-path-1'/%3E%3Cpath fill='currentColor' d='M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05l-6-6A1 1 0 0 0 8 18.53L15.49 26L28 13.52a1 1 0 0 0 0-1.42' class='clr-i-outline clr-i-outline-path-2'/%3E%3Cpath fill='none' d='M0 0h36v36H0z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-eos-icons-loading{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z' opacity='.5'/%3E%3Cpath fill='currentColor' d='M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z'%3E%3CanimateTransform attributeName='transform' dur='1s' from='0 12 12' repeatCount='indefinite' to='360 12 12' type='rotate'/%3E%3C/path%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-iconamoon-information-circle-duotone{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none'%3E%3Ccircle cx='12' cy='12' r='9' fill='currentColor' opacity='.16'/%3E%3Ccircle cx='12' cy='12' r='9' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cpath stroke='currentColor' stroke-linejoin='round' stroke-width='3' d='M12 8h.01v.01H12z'/%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 12v4'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-ion-wallet{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 512 512' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M95.5 104h320a87.73 87.73 0 0 1 11.18.71a66 66 0 0 0-77.51-55.56L86 94.08h-.3a66 66 0 0 0-41.07 26.13A87.57 87.57 0 0 1 95.5 104m320 24h-320a64.07 64.07 0 0 0-64 64v192a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V192a64.07 64.07 0 0 0-64-64M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32'/%3E%3Cpath fill='currentColor' d='M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16s-18.5 24.5 0 24.5s0 23.5 0 23.5L85.5 236Z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-error-outline-rounded{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 17q.425 0 .713-.288T13 16q0-.425-.288-.712T12 15q-.425 0-.712.288T11 16q0 .425.288.713T12 17m0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8v4q0 .425.288.713T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-movie-info-outline-rounded{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm8-4q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11q-.425 0-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9M8 19h8V5H8zM8 5h8zM4 19h2v-2H4zm14 0h2v-2h-2zM4 15h2v-2H4zm14 0h2v-2h-2zM4 11h2V9H4zm14 0h2V9h-2zM4 7h2V5H4zm14 0h2V5h-2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-wifi-password{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M2.125 11.1L0 8.975q2.325-2.325 5.388-3.65T12 4q3.55 0 6.613 1.325T24 8.975L21.875 11.1q-1.9-1.925-4.437-3.012T12 7Q9.1 7 6.563 8.088T2.125 11.1m4.225 4.25l-2.1-2.125q1.5-1.5 3.488-2.362T12 10q2.275 0 4.263.863t3.487 2.362l-2.1 2.125q-1.1-1.1-2.55-1.725T12 13q-1.65 0-3.1.625T6.35 15.35M12 21q-1.05 0-1.775-.725T9.5 18.5q0-1.05.725-1.775T12 16q1.05 0 1.775.725T14.5 18.5q0 1.05-.725 1.775T12 21m7 3q-.425 0-.712-.288T18 23v-3q0-.425.288-.712T19 19v-1q0-.825.588-1.412T21 16q.825 0 1.413.588T23 18v1q.425 0 .713.288T24 20v3q0 .425-.288.713T23 24zm1-5h2v-1q0-.425-.288-.712T21 17q-.425 0-.712.288T20 18z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-arrow-down-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 4v16m0 0l6-6m-6 6l-6-6'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-arrow-right-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 12h16m0 0l-6-6m6 6l-6 6'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-arrow-up-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 20V4m0 0l6 6m-6-6l-6 6'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-gift-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none' stroke='currentColor' stroke-width='1.5'%3E%3Cpath stroke-linecap='round' d='M22 12H2M12 2v20m1-10a4 4 0 0 0 4 4m-6-4a4 4 0 0 1-4 4'/%3E%3Cpath d='M12 10.035a3.247 3.247 0 0 1 2.46-3.15c1.603-.4 3.056 1.052 2.655 2.656a3.247 3.247 0 0 1-3.15 2.46H12zm0 0a3.247 3.247 0 0 0-2.46-3.15c-1.603-.4-3.056 1.052-2.655 2.656a3.247 3.247 0 0 0 3.15 2.46H12z'/%3E%3Cpath d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-global-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none' stroke='currentColor' stroke-width='1.5'%3E%3Cpath d='M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12z'/%3E%3Cpath d='M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761c-.525 0-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.614 23.614 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2c.525 0 1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12z'/%3E%3Cpath stroke-linecap='round' d='M2 12h20'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-streamline-ticket-1-solid{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 14 14' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8.605 1.55h-7.05a1.5 1.5 0 0 0-1.5 1.5v2a.5.5 0 0 0 .374.483a1.517 1.517 0 0 1 0 2.933a.5.5 0 0 0-.373.484v1.999a1.5 1.5 0 0 0 1.5 1.5h7.05v-1.715a.625.625 0 1 1 1.25 0v1.715h2.588a1.5 1.5 0 0 0 1.5-1.5V8.946a.5.5 0 0 0-.369-.483a1.517 1.517 0 0 1 0-2.926a.5.5 0 0 0 .37-.483V3.051a1.5 1.5 0 0 0-1.5-1.5h-2.59v1.723a.625.625 0 0 1-1.25 0zm.625 3.816c.346 0 .625.28.625.625v2.016a.625.625 0 0 1-1.25 0V5.991c0-.345.28-.625.625-.625' clip-rule='evenodd'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.inset-x-0{left:0;right:0}.bottom-\\[-30px\\]{bottom:-30px}.left-\\[-50px\\]{left:-50px}.right-\\[-90px\\]{right:-90px}.top-\\[-100px\\]{top:-100px}.top-\\[50\\%\\],.top-1\\/2{top:50%}.z--1{z-index:-1}.z-0{z-index:0}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.mx-auto{margin-left:auto;margin-right:auto}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mt-\\[-250px\\]{margin-top:-250px}.mt-\\[-30px\\]{margin-top:-30px}.mt-24{margin-top:6rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-auto{margin-top:auto}.h-\\[1px\\],.h-px{height:1px}.h-\\[200px\\]{height:200px}.h-\\[400px\\]{height:400px}.h-\\[42px\\]{height:42px}.h-2{height:.5rem}.h-40{height:10rem}.h-80{height:20rem}.h-auto{height:auto}.max-h-\\[100dvh\\],.max-h-100dvh{max-height:100dvh}.max-w-4xl{max-width:56rem}.min-h-\\[100dvh\\]{min-height:100dvh}.w-\\[100px\\]{width:100px}.w-\\[1px\\],.w-px{width:1px}.w-\\[42px\\]{width:42px}.w-40{width:10rem}.w-80{width:20rem}.w-9{width:2.25rem}.shrink-0{flex-shrink:0}.flex-row{flex-direction:row}.-translate-x-1\\/2,.translate-x-\\[-50\\%\\]{--un-translate-x: -50%;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.-translate-y-1\\/2,.translate-y-\\[-50\\%\\]{--un-translate-y: -50%;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.hover\\:-translate-y-1:hover{--un-translate-y: -.25rem;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.gap-1\\.5{gap:.375rem}.gap-6{gap:1.5rem}.space-y-1>:not([hidden])~:not([hidden]){--un-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.25rem * var(--un-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--un-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.5rem * var(--un-space-y-reverse))}.of-hidden,.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.border-2{border-width:2px}.border-3{border-width:3px}.border-border{--un-border-opacity: 1;border-color:hsl(var(--border-hotspot) / var(--un-border-opacity))}.border-green-400{--un-border-opacity: 1;border-color:rgb(74 222 128 / var(--un-border-opacity))}.border-input{--un-border-opacity: 1;border-color:hsl(var(--input-hotspot) / var(--un-border-opacity))}.border-neutral-200{--un-border-opacity: 1;border-color:rgb(229 229 229 / var(--un-border-opacity))}.border-white\\/15{border-color:#ffffff26}.border-white\\/20{border-color:#fff3}.dark .dark\\:border-neutral-800{--un-border-opacity: 1;border-color:rgb(38 38 38 / var(--un-border-opacity))}.rounded-b-2xl{border-bottom-left-radius:1rem;border-bottom-right-radius:1rem}.rounded-t-\\[10px\\]{border-top-left-radius:10px;border-top-right-radius:10px}.bg-accent{--un-bg-opacity: 1;background-color:hsl(var(--accent-hotspot) / var(--un-bg-opacity))}.bg-background,.data-\\[state\\=active\\]\\:bg-background[data-state=active]{--un-bg-opacity: 1;background-color:hsl(var(--background-hotspot) / var(--un-bg-opacity))}.bg-black\\/80{background-color:#000c}.bg-blue-400\\/20{background-color:#60a5fa33}.bg-blue-500{--un-bg-opacity: 1;background-color:rgb(59 130 246 / var(--un-bg-opacity))}.bg-border{--un-bg-opacity: 1;background-color:hsl(var(--border-hotspot) / var(--un-bg-opacity))}.bg-destructive{--un-bg-opacity: 1;background-color:hsl(var(--destructive-hotspot) / var(--un-bg-opacity))}.bg-muted{--un-bg-opacity: 1;background-color:hsl(var(--muted-hotspot) / var(--un-bg-opacity))}.bg-neutral-100{--un-bg-opacity: 1;background-color:rgb(245 245 245 / var(--un-bg-opacity))}.bg-neutral-200{--un-bg-opacity: 1;background-color:rgb(229 229 229 / var(--un-bg-opacity))}.bg-primary{--un-bg-opacity: 1;background-color:hsl(var(--primary-hotspot) / var(--un-bg-opacity))}.bg-secondary{--un-bg-opacity: 1;background-color:hsl(var(--secondary-hotspot) / var(--un-bg-opacity))}.bg-white{--un-bg-opacity: 1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.dark .dark\\:bg-neutral-800{--un-bg-opacity: 1;background-color:rgb(38 38 38 / var(--un-bg-opacity))}.dark .dark\\:bg-neutral-950{--un-bg-opacity: 1;background-color:rgb(10 10 10 / var(--un-bg-opacity))}.hover\\:bg-accent:hover{--un-bg-opacity: 1;background-color:hsl(var(--accent-hotspot) / var(--un-bg-opacity))}.hover\\:bg-primary:hover{--un-bg-opacity: 1;background-color:hsl(var(--primary-hotspot) / var(--un-bg-opacity))}.hover\\:bg-primary\\/20:hover{background-color:hsl(var(--primary-hotspot) / .2)}.from-blue-600{--un-gradient-from-position: 0%;--un-gradient-from: rgb(37 99 235 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position: 100%;--un-gradient-to: rgb(37 99 235 / 0) var(--un-gradient-to-position);--un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to)}.from-white\\/20{--un-gradient-from-position: 0%;--un-gradient-from: rgb(255 255 255 / .2) var(--un-gradient-from-position);--un-gradient-to-position: 100%;--un-gradient-to: rgb(255 255 255 / 0) var(--un-gradient-to-position);--un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to)}.to-blue-900{--un-gradient-to-position: 100%;--un-gradient-to: rgb(30 58 138 / var(--un-to-opacity, 1)) var(--un-gradient-to-position)}.to-transparent{--un-gradient-to-position: 100%;--un-gradient-to: transparent var(--un-gradient-to-position)}.to-40\\%{--un-gradient-to-position: 40%}.bg-gradient-to-bl{--un-gradient-shape: to bottom left;--un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient))}.bg-gradient-to-r{--un-gradient-shape: to right;--un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient))}.bg-gradient-to-tr{--un-gradient-shape: to top right;--un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient))}.px-1{padding-left:.25rem;padding-right:.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-12{padding-top:3rem;padding-bottom:3rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.pb-10{padding-bottom:2.5rem}.pb-28{padding-bottom:7rem}.pt-6{padding-top:1.5rem}.dark .dark\\:text-neutral-400{--un-text-opacity: 1;color:rgb(163 163 163 / var(--un-text-opacity))}.data-\\[state\\=active\\]\\:text-foreground[data-state=active],.text-foreground{--un-text-opacity: 1;color:hsl(var(--foreground-hotspot) / var(--un-text-opacity))}.text-destructive-foreground{--un-text-opacity: 1;color:hsl(var(--destructive-foreground-hotspot) / var(--un-text-opacity))}.text-green,.text-green-400{--un-text-opacity: 1;color:rgb(74 222 128 / var(--un-text-opacity))}.text-muted-foreground{--un-text-opacity: 1;color:hsl(var(--muted-foreground-hotspot) / var(--un-text-opacity))}.text-neutral-500{--un-text-opacity: 1;color:rgb(115 115 115 / var(--un-text-opacity))}.text-orange{--un-text-opacity: 1;color:rgb(251 146 60 / var(--un-text-opacity))}.text-primary{--un-text-opacity: 1;color:hsl(var(--primary-hotspot) / var(--un-text-opacity))}.text-primary-foreground{--un-text-opacity: 1;color:hsl(var(--primary-foreground-hotspot) / var(--un-text-opacity))}.text-red{--un-text-opacity: 1;color:rgb(248 113 113 / var(--un-text-opacity))}.text-secondary{--un-text-opacity: 1;color:hsl(var(--secondary-hotspot) / var(--un-text-opacity))}.text-secondary-foreground{--un-text-opacity: 1;color:hsl(var(--secondary-foreground-hotspot) / var(--un-text-opacity))}.text-white{--un-text-opacity: 1;color:rgb(255 255 255 / var(--un-text-opacity))}.hover\\:text-accent-foreground:hover{--un-text-opacity: 1;color:hsl(var(--accent-foreground-hotspot) / var(--un-text-opacity))}.placeholder\\:text-muted-foreground::placeholder{--un-text-opacity: 1;color:hsl(var(--muted-foreground-hotspot) / var(--un-text-opacity))}.font-thin{font-weight:100}.opacity-80{opacity:.8}.opacity-90{opacity:.9}.data-\\[state\\=active\\]\\:shadow-md[data-state=active],.shadow-md{--un-shadow: var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-lg{--un-shadow: var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-xl{--un-shadow: var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.hover\\:shadow-md:hover{--un-shadow: var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus\\:shadow-\\[0_0_0_2px\\]:focus{--un-shadow: 0 0 0 2px var(--un-shadow-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus\\:shadow-secondary:focus{--un-shadow-opacity: 1;--un-shadow-color: hsl(var(--secondary-hotspot) / var(--un-shadow-opacity))}.ring-2{--un-ring-width: 2px;--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-1:focus-visible{--un-ring-width: 1px;--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-2:focus-visible{--un-ring-width: 2px;--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-offset-0:focus-visible{--un-ring-offset-width: 0px}.focus-visible\\:ring-offset-2:focus-visible{--un-ring-offset-width: 2px}.ring-primary\\/30{--un-ring-color: hsl(var(--primary-hotspot) / .3)}.focus-visible\\:ring-ring:focus-visible{--un-ring-opacity: 1;--un-ring-color: hsl(var(--ring-hotspot) / var(--un-ring-opacity))}.ring-offset-background{--un-ring-offset-opacity: 1;--un-ring-offset-color: hsl( var(--background-hotspot) / var(--un-ring-offset-opacity) )}.backdrop-blur{--un-backdrop-blur: blur(8px);-webkit-backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)}.backdrop-blur-sm{--un-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)}.blur-sm{--un-blur: blur(4px);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}.brightness-110{--un-brightness: brightness(1.1);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}[duration~="1"]{transition-duration:1ms}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:shadcn-enter;animation-duration:var(--un-animate-duration);--un-animate-duration: .15s;--un-enter-opacity: initial;--un-enter-scale: initial;--un-enter-rotate: initial;--un-enter-translate-x: initial;--un-enter-translate-y: initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:shadcn-exit;animation-duration:var(--un-animate-duration);--un-animate-duration: .15s;--un-exit-opacity: initial;--un-exit-scale: initial;--un-exit-rotate: initial;--un-exit-translate-x: initial;--un-exit-translate-y: initial}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--un-enter-opacity: 0}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--un-exit-opacity: 0}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--un-enter-scale: .95}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--un-exit-scale: .95}.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open]{--un-enter-translate-y: -48%}.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open]{--un-enter-translate-x: -50%}.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed]{--un-exit-translate-y: -48%}.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed]{--un-exit-translate-x: -50%}@media (max-width: 639.9px){.max-sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.max-sm\\:max-w-full{max-width:100%}.max-sm\\:rounded-none{border-radius:0}}@media (min-width: 640px){.sm\\:max-w-\\[425px\\]{max-width:425px}.sm\\:flex-row{flex-direction:row}.sm\\:place-items-center{place-items:center}.sm\\:justify-start{justify-content:flex-start}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-2>:not([hidden])~:not([hidden]){--un-space-x-reverse: 0;margin-left:calc(.5rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(.5rem * var(--un-space-x-reverse))}.sm\\:space-y-0>:not([hidden])~:not([hidden]){--un-space-y-reverse: 0;margin-top:calc(0px * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0px * var(--un-space-y-reverse))}.sm\\:rounded-lg{border-radius:var(--radius-hotspot)}.sm\\:rounded-b-sm{border-bottom-left-radius:calc(var(--radius-hotspot) - 4px);border-bottom-right-radius:calc(var(--radius-hotspot) - 4px)}.sm\\:bg-\\[radial-gradient\\(rgba\\(0\\,0\\,0\\,0\\.5\\)_40\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)\\)\\]{background-color:radial-gradient(rgba(0,0,0,.5) 40%,rgba(0,0,0,.7))}.sm\\:text-left{text-align:left}}@media (min-width: 768px){.md\\:mx-auto{margin-left:auto;margin-right:auto}.md\\:w-\\[460px\\]{width:460px}.md\\:w-full{width:100%}}input[type=number][data-v-da37922d]{-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}:host{all:unset}body,html{position:fixed;width:100%;height:100%}body{background:var(--background-hotspot);color:var(--foreground-hotspot);min-height:screen;position:relative;font-family:Inter,sans-serif}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-greek-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-greek-400-normal.woff) format("woff");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-latin-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-latin-400-normal.woff) format("woff");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-cyrillic-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-cyrillic-400-normal.woff) format("woff");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-greek-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-greek-ext-400-normal.woff) format("woff");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-latin-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-latin-ext-400-normal.woff) format("woff");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-vietnamese-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-vietnamese-400-normal.woff) format("woff");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-cyrillic-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-cyrillic-ext-400-normal.woff) format("woff");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-latin-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-latin-400-normal.woff) format("woff");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-latin-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-latin-ext-400-normal.woff) format("woff");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-vietnamese-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-vietnamese-400-normal.woff) format("woff");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@keyframes shadcn-down{0%{height:0}to{height:var(--radix-accordion-content-height)}}@keyframes shadcn-up{0%{height:var(--radix-accordion-content-height)}to{height:0}}@keyframes shadcn-enter{0%{opacity:var(--un-enter-opacity, 1);transform:translate3d(var(--un-enter-translate-x, 0),var(--un-enter-translate-y, 0),0) scale3d(var(--un-enter-scale, 1),var(--un-enter-scale, 1),var(--un-enter-scale, 1)) rotate(var(--un-enter-rotate, 0))}}@keyframes shadcn-exit{to{opacity:var(--un-exit-opacity, 1);transform:translate3d(var(--un-exit-translate-x, 0),var(--un-exit-translate-y, 0),0) scale3d(var(--un-exit-scale, 1),var(--un-exit-scale, 1),var(--un-exit-scale, 1)) rotate(var(--un-exit-rotate, 0))}}html{color-scheme:light}html.dark{color-scheme:dark}.theme-blue{--background-hotspot: 0 0% 100%;--foreground-hotspot: 222.2 84% 4.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 222.2 84% 4.9%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 222.2 84% 4.9%;--primary-hotspot: 221.2 83.2% 53.3%;--primary-foreground-hotspot: 210 40% 98%;--secondary-hotspot: 210 40% 96.1%;--secondary-foreground-hotspot: 222.2 47.4% 11.2%;--muted-hotspot: 210 40% 96.1%;--muted-foreground-hotspot: 215.4 16.3% 46.9%;--accent-hotspot: 210 40% 96.1%;--accent-foreground-hotspot: 222.2 47.4% 11.2%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 40% 98%;--border-hotspot:214.3 31.8% 91.4%;--input-hotspot:214.3 31.8% 91.4%;--ring-hotspot:221.2 83.2% 53.3%;--radius-hotspot: .5rem}.theme-blue.dark{--background-hotspot:222.2 84% 4.9%;--foreground-hotspot:210 40% 98%;--card-hotspot:222.2 84% 4.9%;--card-foreground-hotspot:210 40% 98%;--popover-hotspot:222.2 84% 4.9%;--popover-foreground-hotspot:210 40% 98%;--primary-hotspot:217.2 91.2% 59.8%;--primary-foreground-hotspot:222.2 47.4% 11.2%;--secondary-hotspot:217.2 32.6% 17.5%;--secondary-foreground-hotspot:210 40% 98%;--muted-hotspot:217.2 32.6% 17.5%;--muted-foreground-hotspot:215 20.2% 65.1%;--accent-hotspot:217.2 32.6% 17.5%;--accent-foreground-hotspot:210 40% 98%;--destructive-hotspot:0 62.8% 30.6%;--destructive-foreground-hotspot:210 40% 98%;--border-hotspot:217.2 32.6% 17.5%;--input-hotspot:217.2 32.6% 17.5%;--ring-hotspot:224.3 76.3% 48%}.theme-zinc{--background-hotspot: 0 0% 100%;--foreground-hotspot: 240 10% 3.9%;--muted-hotspot: 240 4.8% 95.9%;--muted-foreground-hotspot: 240 3.8% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 240 10% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 240 10% 3.9%;--border-hotspot: 240 5.9% 90%;--input-hotspot: 240 5.9% 90%;--primary-hotspot: 240 5.9% 10%;--primary-foreground-hotspot: 0 0% 98%;--secondary-hotspot: 240 4.8% 95.9%;--secondary-foreground-hotspot: 240 5.9% 10%;--accent-hotspot: 240 4.8% 95.9%;--accent-foreground-hotspot: 240 5.9% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 240 5.9% 10%;--radius-hotspot: .5rem}.theme-zinc.dark{--background-hotspot: 240 10% 3.9%;--foreground-hotspot: 0 0% 98%;--muted-hotspot: 240 3.7% 15.9%;--muted-foreground-hotspot: 240 5% 64.9%;--popover-hotspot: 240 10% 3.9%;--popover-foreground-hotspot: 0 0% 98%;--card-hotspot: 240 10% 3.9%;--card-foreground-hotspot: 0 0% 98%;--border-hotspot: 240 3.7% 15.9%;--input-hotspot: 240 3.7% 15.9%;--primary-hotspot: 0 0% 98%;--primary-foreground-hotspot: 240 5.9% 10%;--secondary-hotspot: 240 3.7% 15.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 240 3.7% 15.9%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 240 4.9% 83.9%}.theme-slate{--background-hotspot: 0 0% 100%;--foreground-hotspot: 222.2 84% 4.9%;--muted-hotspot: 210 40% 96.1%;--muted-foreground-hotspot: 215.4 16.3% 46.9%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 222.2 84% 4.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 222.2 84% 4.9%;--border-hotspot: 214.3 31.8% 91.4%;--input-hotspot: 214.3 31.8% 91.4%;--primary-hotspot: 222.2 47.4% 11.2%;--primary-foreground-hotspot: 210 40% 98%;--secondary-hotspot: 210 40% 96.1%;--secondary-foreground-hotspot: 222.2 47.4% 11.2%;--accent-hotspot: 210 40% 96.1%;--accent-foreground-hotspot: 222.2 47.4% 11.2%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 40% 98%;--ring-hotspot: 222.2 84% 4.9%;--radius-hotspot: .5rem}.theme-slate.dark{--background-hotspot: 222.2 84% 4.9%;--foreground-hotspot: 210 40% 98%;--muted-hotspot: 217.2 32.6% 17.5%;--muted-foreground-hotspot: 215 20.2% 65.1%;--popover-hotspot: 222.2 84% 4.9%;--popover-foreground-hotspot: 210 40% 98%;--card-hotspot: 222.2 84% 4.9%;--card-foreground-hotspot: 210 40% 98%;--border-hotspot: 217.2 32.6% 17.5%;--input-hotspot: 217.2 32.6% 17.5%;--primary-hotspot: 210 40% 98%;--primary-foreground-hotspot: 222.2 47.4% 11.2%;--secondary-hotspot: 217.2 32.6% 17.5%;--secondary-foreground-hotspot: 210 40% 98%;--accent-hotspot: 217.2 32.6% 17.5%;--accent-foreground-hotspot: 210 40% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 210 40% 98%;--ring-hotspot: 212.7 26.8% 83.9}.theme-stone{--background-hotspot: 0 0% 100%;--foreground-hotspot: 20 14.3% 4.1%;--muted-hotspot: 60 4.8% 95.9%;--muted-foreground-hotspot: 25 5.3% 44.7%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 20 14.3% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 20 14.3% 4.1%;--border-hotspot: 20 5.9% 90%;--input-hotspot: 20 5.9% 90%;--primary-hotspot: 24 9.8% 10%;--primary-foreground-hotspot: 60 9.1% 97.8%;--secondary-hotspot: 60 4.8% 95.9%;--secondary-foreground-hotspot: 24 9.8% 10%;--accent-hotspot: 60 4.8% 95.9%;--accent-foreground-hotspot: 24 9.8% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 20 14.3% 4.1%;--radius-hotspot: .5rem}.theme-stone.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 60 9.1% 97.8%;--muted-hotspot: 12 6.5% 15.1%;--muted-foreground-hotspot: 24 5.4% 63.9%;--popover-hotspot: 20 14.3% 4.1%;--popover-foreground-hotspot: 60 9.1% 97.8%;--card-hotspot: 20 14.3% 4.1%;--card-foreground-hotspot: 60 9.1% 97.8%;--border-hotspot: 12 6.5% 15.1%;--input-hotspot: 12 6.5% 15.1%;--primary-hotspot: 60 9.1% 97.8%;--primary-foreground-hotspot: 24 9.8% 10%;--secondary-hotspot: 12 6.5% 15.1%;--secondary-foreground-hotspot: 60 9.1% 97.8%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 60 9.1% 97.8%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 24 5.7% 82.9%}.theme-gray{--background-hotspot: 0 0% 100%;--foreground-hotspot: 224 71.4% 4.1%;--muted-hotspot: 220 14.3% 95.9%;--muted-foreground-hotspot: 220 8.9% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 224 71.4% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 224 71.4% 4.1%;--border-hotspot: 220 13% 91%;--input-hotspot: 220 13% 91%;--primary-hotspot: 220.9 39.3% 11%;--primary-foreground-hotspot: 210 20% 98%;--secondary-hotspot: 220 14.3% 95.9%;--secondary-foreground-hotspot: 220.9 39.3% 11%;--accent-hotspot: 220 14.3% 95.9%;--accent-foreground-hotspot: 220.9 39.3% 11%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 20% 98%;--ring-hotspot: 224 71.4% 4.1%;--radius-hotspot: .5rem}.theme-gray.dark{--background-hotspot: 224 71.4% 4.1%;--foreground-hotspot: 210 20% 98%;--muted-hotspot: 215 27.9% 16.9%;--muted-foreground-hotspot: 217.9 10.6% 64.9%;--popover-hotspot: 224 71.4% 4.1%;--popover-foreground-hotspot: 210 20% 98%;--card-hotspot: 224 71.4% 4.1%;--card-foreground-hotspot: 210 20% 98%;--border-hotspot: 215 27.9% 16.9%;--input-hotspot: 215 27.9% 16.9%;--primary-hotspot: 210 20% 98%;--primary-foreground-hotspot: 220.9 39.3% 11%;--secondary-hotspot: 215 27.9% 16.9%;--secondary-foreground-hotspot: 210 20% 98%;--accent-hotspot: 215 27.9% 16.9%;--accent-foreground-hotspot: 210 20% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 210 20% 98%;--ring-hotspot: 216 12.2% 83.9%}.theme-neutral{--background-hotspot: 0 0% 100%;--foreground-hotspot: 0 0% 3.9%;--muted-hotspot: 0 0% 96.1%;--muted-foreground-hotspot: 0 0% 45.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 0 0% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 0 0% 3.9%;--border-hotspot: 0 0% 89.8%;--input-hotspot: 0 0% 89.8%;--primary-hotspot: 0 0% 9%;--primary-foreground-hotspot: 0 0% 98%;--secondary-hotspot: 0 0% 96.1%;--secondary-foreground-hotspot: 0 0% 9%;--accent-hotspot: 0 0% 96.1%;--accent-foreground-hotspot: 0 0% 9%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 0 0% 3.9%;--radius-hotspot: .5rem}.theme-neutral.dark{--background-hotspot: 0 0% 3.9%;--foreground-hotspot: 0 0% 98%;--muted-hotspot: 0 0% 14.9%;--muted-foreground-hotspot: 0 0% 63.9%;--popover-hotspot: 0 0% 3.9%;--popover-foreground-hotspot: 0 0% 98%;--card-hotspot: 0 0% 3.9%;--card-foreground-hotspot: 0 0% 98%;--border-hotspot: 0 0% 14.9%;--input-hotspot: 0 0% 14.9%;--primary-hotspot: 0 0% 98%;--primary-foreground-hotspot: 0 0% 9%;--secondary-hotspot: 0 0% 14.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 0 0% 14.9%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 0 0% 83.1%}.theme-red{--background-hotspot: 0 0% 100%;--foreground-hotspot: 0 0% 3.9%;--muted-hotspot: 0 0% 96.1%;--muted-foreground-hotspot: 0 0% 45.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 0 0% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 0 0% 3.9%;--border-hotspot: 0 0% 89.8%;--input-hotspot: 0 0% 89.8%;--primary-hotspot: 0 72.2% 50.6%;--primary-foreground-hotspot: 0 85.7% 97.3%;--secondary-hotspot: 0 0% 96.1%;--secondary-foreground-hotspot: 0 0% 9%;--accent-hotspot: 0 0% 96.1%;--accent-foreground-hotspot: 0 0% 9%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 0 72.2% 50.6%;--radius-hotspot: .5rem}.theme-red.dark{--background-hotspot: 0 0% 3.9%;--foreground-hotspot: 0 0% 98%;--muted-hotspot: 0 0% 14.9%;--muted-foreground-hotspot: 0 0% 63.9%;--popover-hotspot: 0 0% 3.9%;--popover-foreground-hotspot: 0 0% 98%;--card-hotspot: 0 0% 3.9%;--card-foreground-hotspot: 0 0% 98%;--border-hotspot: 0 0% 14.9%;--input-hotspot: 0 0% 14.9%;--primary-hotspot: 0 72.2% 50.6%;--primary-foreground-hotspot: 0 85.7% 97.3%;--secondary-hotspot: 0 0% 14.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 0 0% 14.9%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 0 72.2% 50.6%}.theme-rose{--background-hotspot: 0 0% 100%;--foreground-hotspot: 240 10% 3.9%;--muted-hotspot: 240 4.8% 95.9%;--muted-foreground-hotspot: 240 3.8% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 240 10% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 240 10% 3.9%;--border-hotspot: 240 5.9% 90%;--input-hotspot: 240 5.9% 90%;--primary-hotspot: 346.8 77.2% 49.8%;--primary-foreground-hotspot: 355.7 100% 97.3%;--secondary-hotspot: 240 4.8% 95.9%;--secondary-foreground-hotspot: 240 5.9% 10%;--accent-hotspot: 240 4.8% 95.9%;--accent-foreground-hotspot: 240 5.9% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 346.8 77.2% 49.8%;--radius-hotspot: .5rem}.theme-rose.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 0 0% 95%;--muted-hotspot: 0 0% 15%;--muted-foreground-hotspot: 240 5% 64.9%;--popover-hotspot: 0 0% 9%;--popover-foreground-hotspot: 0 0% 95%;--card-hotspot: 24 9.8% 10%;--card-foreground-hotspot: 0 0% 95%;--border-hotspot: 240 3.7% 15.9%;--input-hotspot: 240 3.7% 15.9%;--primary-hotspot: 346.8 77.2% 49.8%;--primary-foreground-hotspot: 355.7 100% 97.3%;--secondary-hotspot: 240 3.7% 15.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 85.7% 97.3%;--ring-hotspot: 346.8 77.2% 49.8%}.theme-orange{--background-hotspot: 0 0% 100%;--foreground-hotspot: 20 14.3% 4.1%;--muted-hotspot: 60 4.8% 95.9%;--muted-foreground-hotspot: 25 5.3% 44.7%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 20 14.3% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 20 14.3% 4.1%;--border-hotspot: 20 5.9% 90%;--input-hotspot: 20 5.9% 90%;--primary-hotspot: 24.6 95% 53.1%;--primary-foreground-hotspot: 60 9.1% 97.8%;--secondary-hotspot: 60 4.8% 95.9%;--secondary-foreground-hotspot: 24 9.8% 10%;--accent-hotspot: 60 4.8% 95.9%;--accent-foreground-hotspot: 24 9.8% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 24.6 95% 53.1%;--radius-hotspot: .5rem}.theme-orange.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 60 9.1% 97.8%;--muted-hotspot: 12 6.5% 15.1%;--muted-foreground-hotspot: 24 5.4% 63.9%;--popover-hotspot: 20 14.3% 4.1%;--popover-foreground-hotspot: 60 9.1% 97.8%;--card-hotspot: 20 14.3% 4.1%;--card-foreground-hotspot: 60 9.1% 97.8%;--border-hotspot: 12 6.5% 15.1%;--input-hotspot: 12 6.5% 15.1%;--primary-hotspot: 20.5 90.2% 48.2%;--primary-foreground-hotspot: 60 9.1% 97.8%;--secondary-hotspot: 12 6.5% 15.1%;--secondary-foreground-hotspot: 60 9.1% 97.8%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 60 9.1% 97.8%;--destructive-hotspot: 0 72.2% 50.6%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 20.5 90.2% 48.2%}.theme-green{--background-hotspot: 0 0% 100%;--foreground-hotspot: 240 10% 3.9%;--muted-hotspot: 240 4.8% 95.9%;--muted-foreground-hotspot: 240 3.8% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 240 10% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 240 10% 3.9%;--border-hotspot: 240 5.9% 90%;--input-hotspot: 240 5.9% 90%;--primary-hotspot: 142.1 76.2% 36.3%;--primary-foreground-hotspot: 355.7 100% 97.3%;--secondary-hotspot: 240 4.8% 95.9%;--secondary-foreground-hotspot: 240 5.9% 10%;--accent-hotspot: 240 4.8% 95.9%;--accent-foreground-hotspot: 240 5.9% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 142.1 76.2% 36.3%;--radius-hotspot: .5rem}.theme-green.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 0 0% 95%;--muted-hotspot: 0 0% 15%;--muted-foreground-hotspot: 240 5% 64.9%;--popover-hotspot: 0 0% 9%;--popover-foreground-hotspot: 0 0% 95%;--card-hotspot: 24 9.8% 10%;--card-foreground-hotspot: 0 0% 95%;--border-hotspot: 240 3.7% 15.9%;--input-hotspot: 240 3.7% 15.9%;--primary-hotspot: 142.1 70.6% 45.3%;--primary-foreground-hotspot: 144.9 80.4% 10%;--secondary-hotspot: 240 3.7% 15.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 85.7% 97.3%;--ring-hotspot: 142.4 71.8% 29.2%}.theme-yellow{--background-hotspot: 0 0% 100%;--foreground-hotspot: 20 14.3% 4.1%;--muted-hotspot: 60 4.8% 95.9%;--muted-foreground-hotspot: 25 5.3% 44.7%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 20 14.3% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 20 14.3% 4.1%;--border-hotspot: 20 5.9% 90%;--input-hotspot: 20 5.9% 90%;--primary-hotspot: 47.9 95.8% 53.1%;--primary-foreground-hotspot: 26 83.3% 14.1%;--secondary-hotspot: 60 4.8% 95.9%;--secondary-foreground-hotspot: 24 9.8% 10%;--accent-hotspot: 60 4.8% 95.9%;--accent-foreground-hotspot: 24 9.8% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 20 14.3% 4.1%;--radius-hotspot: .5rem}.theme-yellow.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 60 9.1% 97.8%;--muted-hotspot: 12 6.5% 15.1%;--muted-foreground-hotspot: 24 5.4% 63.9%;--popover-hotspot: 20 14.3% 4.1%;--popover-foreground-hotspot: 60 9.1% 97.8%;--card-hotspot: 20 14.3% 4.1%;--card-foreground-hotspot: 60 9.1% 97.8%;--border-hotspot: 12 6.5% 15.1%;--input-hotspot: 12 6.5% 15.1%;--primary-hotspot: 47.9 95.8% 53.1%;--primary-foreground-hotspot: 26 83.3% 14.1%;--secondary-hotspot: 12 6.5% 15.1%;--secondary-foreground-hotspot: 60 9.1% 97.8%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 60 9.1% 97.8%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 35.5 91.7% 32.9%}.theme-violet{--background-hotspot: 0 0% 100%;--foreground-hotspot: 224 71.4% 4.1%;--muted-hotspot: 220 14.3% 95.9%;--muted-foreground-hotspot: 220 8.9% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 224 71.4% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 224 71.4% 4.1%;--border-hotspot: 220 13% 91%;--input-hotspot: 220 13% 91%;--primary-hotspot: 262.1 83.3% 57.8%;--primary-foreground-hotspot: 210 20% 98%;--secondary-hotspot: 220 14.3% 95.9%;--secondary-foreground-hotspot: 220.9 39.3% 11%;--accent-hotspot: 220 14.3% 95.9%;--accent-foreground-hotspot: 220.9 39.3% 11%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 20% 98%;--ring-hotspot: 262.1 83.3% 57.8%;--radius-hotspot: .5rem}.theme-violet.dark{--background-hotspot: 224 71.4% 4.1%;--foreground-hotspot: 210 20% 98%;--muted-hotspot: 215 27.9% 16.9%;--muted-foreground-hotspot: 217.9 10.6% 64.9%;--popover-hotspot: 224 71.4% 4.1%;--popover-foreground-hotspot: 210 20% 98%;--card-hotspot: 224 71.4% 4.1%;--card-foreground-hotspot: 210 20% 98%;--border-hotspot: 215 27.9% 16.9%;--input-hotspot: 215 27.9% 16.9%;--primary-hotspot: 263.4 70% 50.4%;--primary-foreground-hotspot: 210 20% 98%;--secondary-hotspot: 215 27.9% 16.9%;--secondary-foreground-hotspot: 210 20% 98%;--accent-hotspot: 215 27.9% 16.9%;--accent-foreground-hotspot: 210 20% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 210 20% 98%;--ring-hotspot: 263.4 70% 50.4%}.i-clarity-success-standard-line{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 36 36' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14' class='clr-i-outline clr-i-outline-path-1'/%3E%3Cpath fill='currentColor' d='M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05l-6-6A1 1 0 0 0 8 18.53L15.49 26L28 13.52a1 1 0 0 0 0-1.42' class='clr-i-outline clr-i-outline-path-2'/%3E%3Cpath fill='none' d='M0 0h36v36H0z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-eos-icons-loading{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z' opacity='.5'/%3E%3Cpath fill='currentColor' d='M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z'%3E%3CanimateTransform attributeName='transform' dur='1s' from='0 12 12' repeatCount='indefinite' to='360 12 12' type='rotate'/%3E%3C/path%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-iconamoon-information-circle-duotone{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none'%3E%3Ccircle cx='12' cy='12' r='9' fill='currentColor' opacity='.16'/%3E%3Ccircle cx='12' cy='12' r='9' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cpath stroke='currentColor' stroke-linejoin='round' stroke-width='3' d='M12 8h.01v.01H12z'/%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 12v4'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-error-outline-rounded{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 17q.425 0 .713-.288T13 16q0-.425-.288-.712T12 15q-.425 0-.712.288T11 16q0 .425.288.713T12 17m0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8v4q0 .425.288.713T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-movie-info-outline-rounded{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm8-4q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11q-.425 0-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9M8 19h8V5H8zM8 5h8zM4 19h2v-2H4zm14 0h2v-2h-2zM4 15h2v-2H4zm14 0h2v-2h-2zM4 11h2V9H4zm14 0h2V9h-2zM4 7h2V5H4zm14 0h2V5h-2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-arrow-right-linear{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 12h16m0 0l-6-6m6 6l-6 6'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-gift-linear{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none' stroke='currentColor' stroke-width='1.5'%3E%3Cpath stroke-linecap='round' d='M22 12H2M12 2v20m1-10a4 4 0 0 0 4 4m-6-4a4 4 0 0 1-4 4'/%3E%3Cpath d='M12 10.035a3.247 3.247 0 0 1 2.46-3.15c1.603-.4 3.056 1.052 2.655 2.656a3.247 3.247 0 0 1-3.15 2.46H12zm0 0a3.247 3.247 0 0 0-2.46-3.15c-1.603-.4-3.056 1.052-2.655 2.656a3.247 3.247 0 0 0 3.15 2.46H12z'/%3E%3Cpath d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-global-linear{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none' stroke='currentColor' stroke-width='1.5'%3E%3Cpath d='M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12z'/%3E%3Cpath d='M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761c-.525 0-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.614 23.614 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2c.525 0 1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12z'/%3E%3Cpath stroke-linecap='round' d='M2 12h20'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.disabled\\:pointer-events-none:disabled{pointer-events:none}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:0}.-top-3{top:-.75rem}.bottom-0{bottom:0}.bottom-150px{bottom:150px}.bottom-20px{bottom:20px}.left-\\[50\\%\\],.left-1\\/2{left:50%}.left-0{left:0}.left-10px{left:10px}.right-\\[10px\\],.right-10px{right:10px}.top-\\[10px\\],.top-10px{top:10px}.top-\\[50\\%\\]{top:50%}.top-0{top:0}.z-1{z-index:1}.z-10{z-index:10}.z-50{z-index:50}.grid{display:grid}.grid-rows-\\[auto_1fr_auto\\]{grid-template-rows:auto 1fr auto}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.my-4{margin-top:1rem;margin-bottom:1rem}.my-75px{margin-top:75px;margin-bottom:75px}.-mt-0\\.5{margin-top:-.125rem}.mb-1{margin-bottom:.25rem}.mb-6{margin-bottom:1.5rem}.me-2{margin-inline-end:.5rem}.ml-1{margin-left:.25rem}.mt-1{margin-top:.25rem}.mt-1\\.5{margin-top:.375rem}.mt-2{margin-top:.5rem}.block{display:block}.hidden{display:none}.h-\\[100dvh\\]{height:100dvh}.h-\\[25px\\]{height:25px}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-12{height:3rem}.h-30{height:7.5rem}.h-4{height:1rem}.h-40px{height:40px}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-9{height:2.25rem}.h-fit{height:fit-content}.h-full{height:100%}.max-h-100dvh{max-height:100dvh}.max-h-90dvh{max-height:90dvh}.max-h-full{max-height:100%}.max-w-lg{max-width:32rem}.w-\\[25px\\]{width:25px}.w-10{width:2.5rem}.w-100dvw{width:100dvw}.w-12{width:3rem}.w-4{width:1rem}.w-6{width:1.5rem}.w-7{width:1.75rem}.w-full{width:100%}.flex{display:flex}.inline-flex{display:inline-flex}.flex-col{flex-direction:column}.-translate-x-1\\/2,.translate-x-\\[-50\\%\\]{--un-translate-x:-50%;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.translate-y-\\[-50\\%\\]{--un-translate-y:-50%;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.hover\\:-translate-y-1:hover{--un-translate-y:-.25rem;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.transform{transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.appearance-none{-webkit-appearance:none;appearance:none}.place-items-end{place-items:end}.items-start{align-items:flex-start}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.space-y-1>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(.25rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.25rem * var(--un-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.5rem * var(--un-space-y-reverse))}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.border{border-width:1px}.file\\:border-0::file-selector-button{border-width:0px}.border-border{--un-border-opacity:1;border-color:hsl(var(--border-hotspot) / var(--un-border-opacity))}.border-input{--un-border-opacity:1;border-color:hsl(var(--input-hotspot) / var(--un-border-opacity))}.border-primary\\/20{border-color:hsl(var(--primary-hotspot) / .2)}.border-primary\\/50{border-color:hsl(var(--primary-hotspot) / .5)}.hover\\:border-primary\\/20:hover{border-color:hsl(var(--primary-hotspot) / .2)}.rounded-\\[0px\\],.rounded-0{border-radius:0}.rounded-full{border-radius:9999px}.rounded-md{border-radius:calc(var(--radius-hotspot) - 2px)}.rounded-sm{border-radius:calc(var(--radius-hotspot) - 4px)}.rounded-xl{border-radius:.75rem}.rounded-b-md{border-bottom-left-radius:calc(var(--radius-hotspot) - 2px);border-bottom-right-radius:calc(var(--radius-hotspot) - 2px)}.rounded-s{border-end-start-radius:.25rem;border-start-start-radius:.25rem}.rounded-s-\\[0px\\]{border-end-start-radius:0px;border-start-start-radius:0px}.border-none{border-style:none}.bg-\\[radial-gradient\\(circle_at_50\\%_100\\%\\,rgba\\(0\\,0\\,0\\,0\\.5\\)_40\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)\\)\\]{background-color:radial-gradient(circle at 50% 100%,rgba(0,0,0,.5) 40%,rgba(0,0,0,.7))}.bg-accent{--un-bg-opacity:1;background-color:hsl(var(--accent-hotspot) / var(--un-bg-opacity))}.bg-background,.data-\\[state\\=active\\]\\:bg-background[data-state=active]{--un-bg-opacity:1;background-color:hsl(var(--background-hotspot) / var(--un-bg-opacity))}.bg-black\\/50{background-color:#00000080}.bg-blue-500{--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity))}.bg-border{--un-bg-opacity:1;background-color:hsl(var(--border-hotspot) / var(--un-bg-opacity))}.bg-destructive{--un-bg-opacity:1;background-color:hsl(var(--destructive-hotspot) / var(--un-bg-opacity))}.bg-muted{--un-bg-opacity:1;background-color:hsl(var(--muted-hotspot) / var(--un-bg-opacity))}.bg-primary{--un-bg-opacity:1;background-color:hsl(var(--primary-hotspot) / var(--un-bg-opacity))}.bg-primary\\/10{background-color:hsl(var(--primary-hotspot) / .1)}.bg-primary\\/90{background-color:hsl(var(--primary-hotspot) / .9)}.bg-secondary{--un-bg-opacity:1;background-color:hsl(var(--secondary-hotspot) / var(--un-bg-opacity))}.bg-white\\/10{background-color:#ffffff1a}.hover\\:bg-accent:hover{--un-bg-opacity:1;background-color:hsl(var(--accent-hotspot) / var(--un-bg-opacity))}.hover\\:bg-black\\/70:hover{background-color:#000000b3}.hover\\:bg-destructive\\:90:hover{background-color:hsl(var(--destructive-hotspot) / .9)}.hover\\:bg-primary:hover{--un-bg-opacity:1;background-color:hsl(var(--primary-hotspot) / var(--un-bg-opacity))}.hover\\:bg-primary\\:20:hover{background-color:hsl(var(--primary-hotspot) / .2)}.hover\\:bg-primary\\:90:hover{background-color:hsl(var(--primary-hotspot) / .9)}.hover\\:bg-secondary\\:80:hover{background-color:hsl(var(--secondary-hotspot) / .8)}.file\\:bg-transparent::file-selector-button{background-color:transparent}[stroke-width~="4"]{stroke-width:4px}.object-cover{object-fit:cover}.p-0{padding:0}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.text-center{text-align:center}.text-left{text-align:left}.text-10px{font-size:10px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.file\\:text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.data-\\[state\\=active\\]\\:text-foreground[data-state=active],.text-foreground{--un-text-opacity:1;color:hsl(var(--foreground-hotspot) / var(--un-text-opacity))}.text-destructive-foreground{--un-text-opacity:1;color:hsl(var(--destructive-foreground-hotspot) / var(--un-text-opacity))}.text-gray-600\\/40{color:#4b556366}.text-green{--un-text-opacity:1;color:rgb(74 222 128 / var(--un-text-opacity))}.text-muted-foreground{--un-text-opacity:1;color:hsl(var(--muted-foreground-hotspot) / var(--un-text-opacity))}.text-orange{--un-text-opacity:1;color:rgb(251 146 60 / var(--un-text-opacity))}.text-primary{--un-text-opacity:1;color:hsl(var(--primary-hotspot) / var(--un-text-opacity))}.text-primary-foreground{--un-text-opacity:1;color:hsl(var(--primary-foreground-hotspot) / var(--un-text-opacity))}.text-red{--un-text-opacity:1;color:rgb(248 113 113 / var(--un-text-opacity))}.text-secondary{--un-text-opacity:1;color:hsl(var(--secondary-hotspot) / var(--un-text-opacity))}.text-secondary-foreground{--un-text-opacity:1;color:hsl(var(--secondary-foreground-hotspot) / var(--un-text-opacity))}.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.hover\\:text-accent-foreground:hover{--un-text-opacity:1;color:hsl(var(--accent-foreground-hotspot) / var(--un-text-opacity))}.placeholder\\:text-muted-foreground::placeholder{--un-text-opacity:1;color:hsl(var(--muted-foreground-hotspot) / var(--un-text-opacity))}.font-400,.font-normal{font-weight:400}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.file\\:font-medium::file-selector-button{font-weight:500}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.uppercase{text-transform:uppercase}.underline,.hover\\:underline:hover{text-decoration-line:underline}.underline-offset-4{text-underline-offset:4px}.opacity-60{opacity:.6}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[state\\=active\\]\\:shadow-md[data-state=active]{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-lg{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.hover\\:shadow-md:hover{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus\\:shadow-\\[0_0_0_2px\\]:focus{--un-shadow:0 0 0 2px var(--un-shadow-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus\\:shadow-secondary:focus{--un-shadow-opacity:1;--un-shadow-color:hsl(var(--secondary-hotspot) / var(--un-shadow-opacity))}.outline{outline-style:solid}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.ring-2{--un-ring-width:2px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-1:focus-visible{--un-ring-width:1px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-2:focus-visible{--un-ring-width:2px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-offset-0:focus-visible{--un-ring-offset-width:0px}.focus-visible\\:ring-offset-2:focus-visible{--un-ring-offset-width:2px}.ring-primary\\/30{--un-ring-color:hsl(var(--primary-hotspot) / .3)}.focus-visible\\:ring-ring:focus-visible{--un-ring-opacity:1;--un-ring-color:hsl(var(--ring-hotspot) / var(--un-ring-opacity))}.ring-offset-background{--un-ring-offset-opacity:1;--un-ring-offset-color:hsl(var(--background-hotspot) / var(--un-ring-offset-opacity))}.backdrop-blur{--un-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)}.blur-sm{--un-blur:blur(4px);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}.brightness-110{--un-brightness:brightness(1.1);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:shadcn-enter;animation-duration:var(--un-animate-duration);--un-animate-duration:.15s;--un-enter-opacity:initial;--un-enter-scale:initial;--un-enter-rotate:initial;--un-enter-translate-x:initial;--un-enter-translate-y:initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:shadcn-exit;animation-duration:var(--un-animate-duration);--un-animate-duration:.15s;--un-exit-opacity:initial;--un-exit-scale:initial;--un-exit-rotate:initial;--un-exit-translate-x:initial;--un-exit-translate-y:initial}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--un-enter-opacity:0}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--un-exit-opacity:0}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--un-enter-scale:.95}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--un-exit-scale:.95}.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open]{--un-enter-translate-y:-48%}.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open]{--un-enter-translate-x:-50%}.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed]{--un-exit-translate-y:-48%}.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed]{--un-exit-translate-x:-50%}@media (max-width: 1023.9px){.max-lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (max-width: 639.9px){.max-sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width: 640px){.sm\\:max-w-\\[425px\\]{max-width:425px}.sm\\:flex-row{flex-direction:row}.sm\\:place-items-center{place-items:center}.sm\\:justify-start{justify-content:flex-start}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-2>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(.5rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(.5rem * var(--un-space-x-reverse))}.sm\\:space-y-0>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0px * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0px * var(--un-space-y-reverse))}.sm\\:rounded-lg{border-radius:var(--radius-hotspot)}.sm\\:rounded-b-sm{border-bottom-left-radius:calc(var(--radius-hotspot) - 4px);border-bottom-right-radius:calc(var(--radius-hotspot) - 4px)}.sm\\:bg-\\[radial-gradient\\(rgba\\(0\\,0\\,0\\,0\\.5\\)_40\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)\\)\\]{background-color:radial-gradient(rgba(0,0,0,.5) 40%,rgba(0,0,0,.7))}.sm\\:text-left{text-align:left}}@media (min-width: 768px){.md\\:w-full{width:100%}}input[data-v-da37922d]::-webkit-outer-spin-button,input[data-v-da37922d]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-da37922d]{-moz-appearance:textfield;appearance:textfield}input[data-v-da37922d]:focus::placeholder{color:transparent}.link[data-v-da37922d]{text-decoration:underline;color:#2b74e2}.link[data-v-da37922d]:hover{text-decoration:underline;text-decoration-style:dotted}`)),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
function yt(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const be = {}, ao = [], Ve = () => {
}, Tr = () => !1, Yn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ya = (e) => e.startsWith("onUpdate:"), xe = Object.assign, ba = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Pd = Object.prototype.hasOwnProperty, ve = (e, t) => Pd.call(e, t), Z = Array.isArray, io = (e) => wo(e) === "[object Map]", xo = (e) => wo(e) === "[object Set]", Ai = (e) => wo(e) === "[object Date]", re = (e) => typeof e == "function", le = (e) => typeof e == "string", Dt = (e) => typeof e == "symbol", we = (e) => e !== null && typeof e == "object", xa = (e) => (we(e) || re(e)) && re(e.then) && re(e.catch), Wl = Object.prototype.toString, wo = (e) => Wl.call(e), Dd = (e) => wo(e).slice(8, -1), Hl = (e) => wo(e) === "[object Object]", wa = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fn = yt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Ld = yt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), ns = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, $d = /-(\w)/g, Re = ns((e) => e.replace($d, (t, n) => n ? n.toUpperCase() : "")), jd = /\B([A-Z])/g, St = ns((e) => e.replace(jd, "-$1").toLowerCase()), Zn = ns((e) => e.charAt(0).toUpperCase() + e.slice(1)), On = ns((e) => e ? `on${Zn(e)}` : ""), Lt = (e, t) => !Object.is(e, t), lo = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Fr = (e, t, n) => {
  Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
}, Or = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ur = (e) => {
  const t = le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Si;
const Vd = () => Si || (Si = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), zd = yt("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error");
function Sn(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = le(o) ? Kl(o) : Sn(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  }
  if (le(e) || we(e))
    return e;
}
const qd = /;(?![^(]*\))/g, Jd = /:([^]+)/, Wd = /\/\*[^]*?\*\//g;
function Kl(e) {
  const t = {};
  return e.replace(Wd, "").split(qd).forEach((n) => {
    if (n) {
      const o = n.split(Jd);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function gt(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (Z(e))
    for (let n = 0; n < e.length; n++) {
      const o = gt(e[n]);
      o && (t += o + " ");
    }
  else if (we(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function os(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !le(t) && (e.class = gt(t)), n && (e.style = Sn(n)), e;
}
const Hd = yt("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"), Kd = yt("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"), Gd = yt("annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics"), Qd = yt("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr"), Yd = yt("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function Ei(e) {
  return !!e || e === "";
}
function Vn(e, t) {
  if (e === t)
    return !0;
  let n = Ai(e), o = Ai(t);
  if (n || o)
    return !(!n || !o) && e.getTime() === t.getTime();
  if (n = Dt(e), o = Dt(t), n || o)
    return e === t;
  if (n = Z(e), o = Z(t), n || o)
    return !(!n || !o) && function(r, s) {
      if (r.length !== s.length)
        return !1;
      let a = !0;
      for (let i = 0; a && i < r.length; i++)
        a = Vn(r[i], s[i]);
      return a;
    }(e, t);
  if (n = we(e), o = we(t), n || o) {
    if (!n || !o || Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const r in e) {
      const s = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (s && !a || !s && a || !Vn(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ka(e, t) {
  return e.findIndex((n) => Vn(n, t));
}
const Te = (e) => le(e) ? e : e == null ? "" : Z(e) || we(e) && (e.toString === Wl || !re(e.toString)) ? JSON.stringify(e, Gl, 2) : String(e), Gl = (e, t) => t && t.__v_isRef ? Gl(e, t.value) : io(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r], s) => (n[bs(o, s) + " =>"] = r, n), {}) } : xo(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => bs(n)) } : Dt(t) ? bs(t) : !we(t) || Z(t) || Hl(t) ? t : String(t), bs = (e, t = "") => {
  var n;
  return Dt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
let mt, Un;
class Ca {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = mt, !t && mt && (this.index = (mt.scopes || (mt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = mt;
      try {
        return mt = this, t();
      } finally {
        mt = n;
      }
    }
  }
  on() {
    mt = this;
  }
  off() {
    mt = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function _a(e) {
  return new Ca(e);
}
function Ql(e, t = mt) {
  t && t.active && t.effects.push(e);
}
function Aa() {
  return mt;
}
function Yl(e) {
  mt && mt.cleanups.push(e);
}
let po = class {
  constructor(t, n, o, r) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, Ql(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      this._dirtyLevel = 0, this._queryings++, zn();
      for (const t of this.deps)
        if (t.computed && (Zd(t.computed), this._dirtyLevel >= 2))
          break;
      qn(), this._queryings--;
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 3 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = wn, n = Un;
    try {
      return wn = !0, Un = this, this._runnings++, Ii(this), this.fn();
    } finally {
      Ti(this), this._runnings--, Un = n, wn = t;
    }
  }
  stop() {
    var t;
    this.active && (Ii(this), Ti(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
};
function Zd(e) {
  return e.value;
}
function Ii(e) {
  e._trackId++, e._depsLength = 0;
}
function Ti(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Zl(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Zl(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
function Xd(e, t) {
  e.effect instanceof po && (e = e.effect.fn);
  const n = new po(e, Ve, () => {
    n.dirty && n.run();
  });
  t && (xe(n, t), t.scope && Ql(n, t.scope)), t && t.lazy || n.run();
  const o = n.run.bind(n);
  return o.effect = n, o;
}
function ep(e) {
  e.effect.stop();
}
let wn = !0, Ls = 0;
const Xl = [];
function zn() {
  Xl.push(wn), wn = !1;
}
function qn() {
  const e = Xl.pop();
  wn = e === void 0 || e;
}
function Sa() {
  Ls++;
}
function Ea() {
  for (Ls--; !Ls && $s.length; )
    $s.shift()();
}
function ec(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const o = e.deps[e._depsLength];
    o !== t ? (o && Zl(o, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const $s = [];
function tc(e, t, n) {
  Sa();
  for (const o of e.keys())
    if ((o.allowRecurse || !o._runnings) && o._dirtyLevel < t && (!o._runnings || t !== 2)) {
      const r = o._dirtyLevel;
      o._dirtyLevel = t, r !== 0 || o._queryings && t === 2 || (o.trigger(), o.scheduler && $s.push(o.scheduler));
    }
  Ea();
}
const nc = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Pr = /* @__PURE__ */ new WeakMap(), Pn = Symbol(""), js = Symbol("");
function ut(e, t, n) {
  if (wn && Un) {
    let o = Pr.get(e);
    o || Pr.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = nc(() => o.delete(n))), ec(Un, r);
  }
}
function en(e, t, n, o, r, s) {
  const a = Pr.get(e);
  if (!a)
    return;
  let i = [];
  if (t === "clear")
    i = [...a.values()];
  else if (n === "length" && Z(e)) {
    const l = Number(o);
    a.forEach((c, u) => {
      (u === "length" || !Dt(u) && u >= l) && i.push(c);
    });
  } else
    switch (n !== void 0 && i.push(a.get(n)), t) {
      case "add":
        Z(e) ? wa(n) && i.push(a.get("length")) : (i.push(a.get(Pn)), io(e) && i.push(a.get(js)));
        break;
      case "delete":
        Z(e) || (i.push(a.get(Pn)), io(e) && i.push(a.get(js)));
        break;
      case "set":
        io(e) && i.push(a.get(Pn));
    }
  Sa();
  for (const l of i)
    l && tc(l, 3);
  Ea();
}
const tp = yt("__proto__,__v_isRef,__isVue"), oc = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Dt)), Ri = np();
function np() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = me(this);
      for (let s = 0, a = this.length; s < a; s++)
        ut(o, 0, s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(me)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      zn(), Sa();
      const o = me(this)[t].apply(this, n);
      return Ea(), qn(), o;
    };
  }), e;
}
function op(e) {
  const t = me(this);
  return ut(t, 0, e), t.hasOwnProperty(e);
}
class rc {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, o) {
    const r = this._isReadonly, s = this._shallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return o === (r ? s ? uc : cc : s ? lc : ic).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const a = Z(t);
    if (!r) {
      if (a && ve(Ri, n))
        return Reflect.get(Ri, n, o);
      if (n === "hasOwnProperty")
        return op;
    }
    const i = Reflect.get(t, n, o);
    return (Dt(n) ? oc.has(n) : tp(n)) ? i : (r || ut(t, 0, n), s ? i : qe(i) ? a && wa(n) ? i : i.value : we(i) ? r ? Ta(i) : ko(i) : i);
  }
}
let sc = class extends rc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (!this._shallow) {
      const l = Jn(s);
      if (Bn(o) || Jn(o) || (s = me(s), o = me(o)), !Z(t) && qe(s) && !qe(o))
        return !l && (s.value = o, !0);
    }
    const a = Z(t) && wa(n) ? Number(n) < t.length : ve(t, n), i = Reflect.set(t, n, o, r);
    return t === me(r) && (a ? Lt(o, s) && en(t, "set", n, o) : en(t, "add", n, o)), i;
  }
  deleteProperty(t, n) {
    const o = ve(t, n), r = Reflect.deleteProperty(t, n);
    return r && o && en(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return Dt(n) && oc.has(n) || ut(t, 0, n), o;
  }
  ownKeys(t) {
    return ut(t, 0, Z(t) ? "length" : Pn), Reflect.ownKeys(t);
  }
};
class ac extends rc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const rp = new sc(), sp = new ac(), ap = new sc(!0), ip = new ac(!0), Ia = (e) => e, rs = (e) => Reflect.getPrototypeOf(e);
function lr(e, t, n = !1, o = !1) {
  const r = me(e = e.__v_raw), s = me(t);
  n || (Lt(t, s) && ut(r, 0, t), ut(r, 0, s));
  const { has: a } = rs(r), i = o ? Ia : n ? Na : $o;
  return a.call(r, t) ? i(e.get(t)) : a.call(r, s) ? i(e.get(s)) : void (e !== r && e.get(t));
}
function cr(e, t = !1) {
  const n = this.__v_raw, o = me(n), r = me(e);
  return t || (Lt(e, r) && ut(o, 0, e), ut(o, 0, r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function ur(e, t = !1) {
  return e = e.__v_raw, !t && ut(me(e), 0, Pn), Reflect.get(e, "size", e);
}
function Ni(e) {
  e = me(e);
  const t = me(this);
  return rs(t).has.call(t, e) || (t.add(e), en(t, "add", e, e)), this;
}
function Bi(e, t) {
  t = me(t);
  const n = me(this), { has: o, get: r } = rs(n);
  let s = o.call(n, e);
  s || (e = me(e), s = o.call(n, e));
  const a = r.call(n, e);
  return n.set(e, t), s ? Lt(t, a) && en(n, "set", e, t) : en(n, "add", e, t), this;
}
function Mi(e) {
  const t = me(this), { has: n, get: o } = rs(t);
  let r = n.call(t, e);
  r || (e = me(e), r = n.call(t, e)), o && o.call(t, e);
  const s = t.delete(e);
  return r && en(t, "delete", e, void 0), s;
}
function Fi() {
  const e = me(this), t = e.size !== 0, n = e.clear();
  return t && en(e, "clear", void 0, void 0), n;
}
function dr(e, t) {
  return function(n, o) {
    const r = this, s = r.__v_raw, a = me(s), i = t ? Ia : e ? Na : $o;
    return !e && ut(a, 0, Pn), s.forEach((l, c) => n.call(o, i(l), i(c), r));
  };
}
function pr(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = me(r), a = io(s), i = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = r[e](...o), u = n ? Ia : t ? Na : $o;
    return !t && ut(s, 0, l ? js : Pn), { next() {
      const { value: d, done: p } = c.next();
      return p ? { value: d, done: p } : { value: i ? [u(d[0]), u(d[1])] : u(d), done: p };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function an(e) {
  return function(...t) {
    return e !== "delete" && (e === "clear" ? void 0 : this);
  };
}
function lp() {
  const e = { get(r) {
    return lr(this, r);
  }, get size() {
    return ur(this);
  }, has: cr, add: Ni, set: Bi, delete: Mi, clear: Fi, forEach: dr(!1, !1) }, t = { get(r) {
    return lr(this, r, !1, !0);
  }, get size() {
    return ur(this);
  }, has: cr, add: Ni, set: Bi, delete: Mi, clear: Fi, forEach: dr(!1, !0) }, n = { get(r) {
    return lr(this, r, !0);
  }, get size() {
    return ur(this, !0);
  }, has(r) {
    return cr.call(this, r, !0);
  }, add: an("add"), set: an("set"), delete: an("delete"), clear: an("clear"), forEach: dr(!0, !1) }, o = { get(r) {
    return lr(this, r, !0, !0);
  }, get size() {
    return ur(this, !0);
  }, has(r) {
    return cr.call(this, r, !0);
  }, add: an("add"), set: an("set"), delete: an("delete"), clear: an("clear"), forEach: dr(!0, !0) };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = pr(r, !1, !1), n[r] = pr(r, !0, !1), t[r] = pr(r, !1, !0), o[r] = pr(r, !0, !0);
  }), [e, n, t, o];
}
const [cp, up, dp, pp] = lp();
function ss(e, t) {
  const n = t ? e ? pp : dp : e ? up : cp;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(ve(n, r) && r in o ? n : o, r, s);
}
const fp = { get: ss(!1, !1) }, hp = { get: ss(!1, !0) }, mp = { get: ss(!0, !1) }, gp = { get: ss(!0, !0) }, ic = /* @__PURE__ */ new WeakMap(), lc = /* @__PURE__ */ new WeakMap(), cc = /* @__PURE__ */ new WeakMap(), uc = /* @__PURE__ */ new WeakMap();
function ko(e) {
  return Jn(e) ? e : as(e, !1, rp, fp, ic);
}
function dc(e) {
  return as(e, !1, ap, hp, lc);
}
function Ta(e) {
  return as(e, !0, sp, mp, cc);
}
function vp(e) {
  return as(e, !0, ip, gp, uc);
}
function as(e, t, n, o, r) {
  if (!we(e) || e.__v_raw && (!t || !e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const a = (i = e).__v_skip || !Object.isExtensible(i) ? 0 : function(c) {
    switch (c) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }(Dd(i));
  var i;
  if (a === 0)
    return e;
  const l = new Proxy(e, a === 2 ? o : n);
  return r.set(e, l), l;
}
function Dn(e) {
  return Jn(e) ? Dn(e.__v_raw) : !(!e || !e.__v_isReactive);
}
function Jn(e) {
  return !(!e || !e.__v_isReadonly);
}
function Bn(e) {
  return !(!e || !e.__v_isShallow);
}
function Ra(e) {
  return Dn(e) || Jn(e);
}
function me(e) {
  const t = e && e.__v_raw;
  return t ? me(t) : e;
}
function is(e) {
  return Fr(e, "__v_skip", !0), e;
}
const $o = (e) => we(e) ? ko(e) : e, Na = (e) => we(e) ? Ta(e) : e;
let pc = class {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new po(() => t(this._value), () => jo(this, 1)), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = me(this);
    return Ba(t), t._cacheable && !t.effect.dirty || Lt(t._value, t._value = t.effect.run()) && jo(t, 2), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
};
function Ba(e) {
  wn && Un && (e = me(e), ec(Un, e.dep || (e.dep = nc(() => e.dep = void 0, e instanceof pc ? e : void 0))));
}
function jo(e, t = 3, n) {
  const o = (e = me(e)).dep;
  o && tc(o, t);
}
function qe(e) {
  return !(!e || e.__v_isRef !== !0);
}
function te(e) {
  return fc(e, !1);
}
function yp(e) {
  return fc(e, !0);
}
function fc(e, t) {
  return qe(e) ? e : new bp(e, t);
}
class bp {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : me(t), this._value = n ? t : $o(t);
  }
  get value() {
    return Ba(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Bn(t) || Jn(t);
    t = n ? t : me(t), Lt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : $o(t), jo(this, 3));
  }
}
function xp(e) {
  jo(e, 3);
}
function k(e) {
  return qe(e) ? e.value : e;
}
function wp(e) {
  return re(e) ? e() : k(e);
}
const kp = { get: (e, t, n) => k(Reflect.get(e, t, n)), set: (e, t, n, o) => {
  const r = e[t];
  return qe(r) && !qe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
} };
function Ma(e) {
  return Dn(e) ? e : new Proxy(e, kp);
}
class Cp {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: o } = t(() => Ba(this), () => jo(this));
    this._get = n, this._set = o;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function hc(e) {
  return new Cp(e);
}
function Co(e) {
  const t = Z(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = gc(e, n);
  return t;
}
let _p = class {
  constructor(t, n, o) {
    this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return t = me(this._object), n = this._key, (o = Pr.get(t)) == null ? void 0 : o.get(n);
    var t, n, o;
  }
};
class Ap {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function mc(e, t, n) {
  return qe(e) ? e : re(e) ? new Ap(e) : we(e) && arguments.length > 1 ? gc(e, t, n) : te(e);
}
function gc(e, t, n) {
  const o = e[t];
  return qe(o) ? o : new _p(e, t, n);
}
const Sp = { GET: "get", HAS: "has", ITERATE: "iterate" }, Ep = { SET: "set", ADD: "add", DELETE: "delete", CLEAR: "clear" };
function Ip(e, t) {
}
const Tp = { SETUP_FUNCTION: 0, 0: "SETUP_FUNCTION", RENDER_FUNCTION: 1, 1: "RENDER_FUNCTION", WATCH_GETTER: 2, 2: "WATCH_GETTER", WATCH_CALLBACK: 3, 3: "WATCH_CALLBACK", WATCH_CLEANUP: 4, 4: "WATCH_CLEANUP", NATIVE_EVENT_HANDLER: 5, 5: "NATIVE_EVENT_HANDLER", COMPONENT_EVENT_HANDLER: 6, 6: "COMPONENT_EVENT_HANDLER", VNODE_HOOK: 7, 7: "VNODE_HOOK", DIRECTIVE_HOOK: 8, 8: "DIRECTIVE_HOOK", TRANSITION_HOOK: 9, 9: "TRANSITION_HOOK", APP_ERROR_HANDLER: 10, 10: "APP_ERROR_HANDLER", APP_WARN_HANDLER: 11, 11: "APP_WARN_HANDLER", FUNCTION_REF: 12, 12: "FUNCTION_REF", ASYNC_COMPONENT_LOADER: 13, 13: "ASYNC_COMPONENT_LOADER", SCHEDULER: 14, 14: "SCHEDULER" };
function tn(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    Xn(s, t, n);
  }
  return r;
}
function Rt(e, t, n, o) {
  if (re(e)) {
    const s = tn(e, t, n, o);
    return s && xa(s) && s.catch((a) => {
      Xn(a, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(Rt(e[s], t, n, o));
  return r;
}
function Xn(e, t, n, o = !0) {
  if (t) {
    let r = t.parent;
    const s = t.proxy, a = `https://vuejs.org/errors/#runtime-${n}`;
    for (; r; ) {
      const l = r.ec;
      if (l) {
        for (let c = 0; c < l.length; c++)
          if (l[c](e, s, a) === !1)
            return;
      }
      r = r.parent;
    }
    const i = t.appContext.config.errorHandler;
    if (i)
      return void tn(i, null, 10, [e, s, a]);
  }
  (function(r, s, a, i = !0) {
    console.error(r);
  })(e, 0, 0, o);
}
let Vo = !1, Vs = !1;
const Xe = [];
let qt = 0;
const co = [];
let Yt = null, Rn = 0;
const vc = Promise.resolve();
let Fa = null;
function jt(e) {
  const t = Fa || vc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ls(e) {
  Xe.length && Xe.includes(e, Vo && e.allowRecurse ? qt + 1 : qt) || (e.id == null ? Xe.push(e) : Xe.splice(function(t) {
    let n = qt + 1, o = Xe.length;
    for (; n < o; ) {
      const r = n + o >>> 1, s = Xe[r], a = zo(s);
      a < t || a === t && s.pre ? n = r + 1 : o = r;
    }
    return n;
  }(e.id), 0, e), yc());
}
function yc() {
  Vo || Vs || (Vs = !0, Fa = vc.then(bc));
}
function Dr(e) {
  Z(e) ? co.push(...e) : Yt && Yt.includes(e, e.allowRecurse ? Rn + 1 : Rn) || co.push(e), yc();
}
function Oi(e, t, n = Vo ? qt + 1 : 0) {
  for (; n < Xe.length; n++) {
    const o = Xe[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid)
        continue;
      Xe.splice(n, 1), n--, o();
    }
  }
}
function Lr(e) {
  if (co.length) {
    const t = [...new Set(co)];
    if (co.length = 0, Yt)
      return void Yt.push(...t);
    for (Yt = t, Yt.sort((n, o) => zo(n) - zo(o)), Rn = 0; Rn < Yt.length; Rn++)
      Yt[Rn]();
    Yt = null, Rn = 0;
  }
}
const zo = (e) => e.id == null ? 1 / 0 : e.id, Rp = (e, t) => {
  const n = zo(e) - zo(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function bc(e) {
  Vs = !1, Vo = !0, Xe.sort(Rp);
  try {
    for (qt = 0; qt < Xe.length; qt++) {
      const t = Xe[qt];
      t && t.active !== !1 && tn(t, null, 14);
    }
  } finally {
    qt = 0, Xe.length = 0, Lr(), Vo = !1, Fa = null, (Xe.length || co.length) && bc();
  }
}
function Np(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || be;
  let r = n;
  const s = t.startsWith("update:"), a = s && t.slice(7);
  if (a && a in o) {
    const u = `${a === "modelValue" ? "model" : a}Modifiers`, { number: d, trim: p } = o[u] || be;
    p && (r = n.map((m) => le(m) ? m.trim() : m)), d && (r = n.map(Or));
  }
  let i, l = o[i = On(t)] || o[i = On(Re(t))];
  !l && s && (l = o[i = On(St(t))]), l && Rt(l, e, 6, r);
  const c = o[i + "Once"];
  if (c) {
    if (e.emitted) {
      if (e.emitted[i])
        return;
    } else
      e.emitted = {};
    e.emitted[i] = !0, Rt(c, e, 6, r);
  }
}
function xc(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let a = {}, i = !1;
  if (!re(e)) {
    const l = (c) => {
      const u = xc(c, t, !0);
      u && (i = !0, xe(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return s || i ? (Z(s) ? s.forEach((l) => a[l] = null) : xe(a, s), we(e) && o.set(e, a), a) : (we(e) && o.set(e, null), null);
}
function $r(e, t) {
  return !(!e || !Yn(t)) && (t = t.slice(2).replace(/Once$/, ""), ve(e, t[0].toLowerCase() + t.slice(1)) || ve(e, St(t)) || ve(e, t));
}
let ze = null, cs = null;
function jr(e) {
  const t = ze;
  return ze = e, cs = e && e.type.__scopeId || null, t;
}
function wc(e) {
  cs = e;
}
function kc() {
  cs = null;
}
const Bp = (e) => F;
function F(e, t = ze, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Gs(-1);
    const s = jr(t);
    let a;
    try {
      a = e(...r);
    } finally {
      jr(s), o._d && Gs(1);
    }
    return a;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function xs(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [a], slots: i, attrs: l, emit: c, render: u, renderCache: d, data: p, setupState: m, ctx: f, inheritAttrs: g } = e;
  let y, _;
  const h = jr(e);
  try {
    if (4 & n.shapeFlag) {
      const b = r || o;
      y = At(u.call(b, b, d, s, m, p, f)), _ = l;
    } else {
      const b = t;
      y = At(b(s, b.length > 1 ? { attrs: l, slots: i, emit: c } : null)), _ = t.props ? l : Mp(l);
    }
  } catch (b) {
    Uo.length = 0, Xn(b, e, 1), y = j(We);
  }
  let x = y;
  if (_ && g !== !1) {
    const b = Object.keys(_), { shapeFlag: w } = x;
    b.length && 7 & w && (a && b.some(ya) && (_ = Fp(_, a)), x = $t(x, _));
  }
  return n.dirs && (x = $t(x), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition && (x.transition = n.transition), y = x, jr(h), y;
}
const Mp = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Yn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Fp = (e, t) => {
  const n = {};
  for (const o in e)
    ya(o) && o.slice(9) in t || (n[o] = e[o]);
  return n;
};
function Ui(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !$r(n, s))
      return !0;
  }
  return !1;
}
function Oa({ vnode: e, parent: t }, n) {
  if (n)
    for (; t; ) {
      const o = t.subTree;
      if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o !== e)
        break;
      (e = t.vnode).el = n, t = t.parent;
    }
}
const Ua = "components";
function Op(e, t) {
  return Pa(Ua, e, !0, t) || e;
}
const Cc = Symbol.for("v-ndc");
function Up(e) {
  return le(e) ? Pa(Ua, e, !1) || e : e || Cc;
}
function Pp(e) {
  return Pa("directives", e);
}
function Pa(e, t, n = !0, o = !1) {
  const r = ze || De;
  if (r) {
    const s = r.type;
    if (e === Ua) {
      const i = Xs(s, !1);
      if (i && (i === t || i === Re(t) || i === Zn(Re(t))))
        return s;
    }
    const a = Pi(r[e] || s[e], t) || Pi(r.appContext[e], t);
    return !a && o ? s : a;
  }
}
function Pi(e, t) {
  return e && (e[t] || e[Re(t)] || e[Zn(Re(t))]);
}
const _c = (e) => e.__isSuspense;
let Di = 0;
const Dp = { name: "Suspense", __isSuspense: !0, process(e, t, n, o, r, s, a, i, l, c) {
  e == null ? function(u, d, p, m, f, g, y, _, h) {
    const { p: x, o: { createElement: b } } = h, w = b("div"), I = u.suspense = ws(u, f, m, d, w, p, g, y, _, h);
    x(null, I.pendingBranch = u.ssContent, w, null, m, I, g, y), I.deps > 0 ? (Fo(u, "onPending"), Fo(u, "onFallback"), x(null, u.ssFallback, d, p, m, null, g, y), oo(I, u.ssFallback)) : I.resolve(!1, !0);
  }(t, n, o, r, s, a, i, l, c) : function(u, d, p, m, f, g, y, _, { p: h, um: x, o: { createElement: b } }) {
    const w = d.suspense = u.suspense;
    w.vnode = d, d.el = u.el;
    const I = d.ssContent, q = d.ssFallback, { activeBranch: A, pendingBranch: E, isInFallback: B, isHydrating: z } = w;
    if (E)
      w.pendingBranch = I, Ut(I, E) ? (h(E, I, w.hiddenContainer, null, f, w, g, y, _), w.deps <= 0 ? w.resolve() : B && (z || (h(A, q, p, m, f, null, g, y, _), oo(w, q)))) : (w.pendingId = Di++, z ? (w.isHydrating = !1, w.activeBranch = E) : x(E, f, w), w.deps = 0, w.effects.length = 0, w.hiddenContainer = b("div"), B ? (h(null, I, w.hiddenContainer, null, f, w, g, y, _), w.deps <= 0 ? w.resolve() : (h(A, q, p, m, f, null, g, y, _), oo(w, q))) : A && Ut(I, A) ? (h(A, I, p, m, f, w, g, y, _), w.resolve(!0)) : (h(null, I, w.hiddenContainer, null, f, w, g, y, _), w.deps <= 0 && w.resolve()));
    else if (A && Ut(I, A))
      h(A, I, p, m, f, w, g, y, _), oo(w, I);
    else if (Fo(d, "onPending"), w.pendingBranch = I, w.pendingId = 512 & I.shapeFlag ? I.component.suspenseId : Di++, h(null, I, w.hiddenContainer, null, f, w, g, y, _), w.deps <= 0)
      w.resolve();
    else {
      const { timeout: S, pendingId: P } = w;
      S > 0 ? setTimeout(() => {
        w.pendingId === P && w.fallback(q);
      }, S) : S === 0 && w.fallback(q);
    }
  }(e, t, n, o, r, a, i, l, c);
}, hydrate: function(e, t, n, o, r, s, a, i, l) {
  const c = t.suspense = ws(t, o, n, e.parentNode, document.createElement("div"), null, r, s, a, i, !0), u = l(e, c.pendingBranch = t.ssContent, n, c, s, a);
  return c.deps === 0 && c.resolve(!1, !0), u;
}, create: ws, normalize: function(e) {
  const { shapeFlag: t, children: n } = e, o = 32 & t;
  e.ssContent = Li(o ? n.default : n), e.ssFallback = o ? Li(n.fallback) : j(We);
} };
function Fo(e, t) {
  const n = e.props && e.props[t];
  re(n) && n();
}
function ws(e, t, n, o, r, s, a, i, l, c, u = !1) {
  const { p: d, m: p, um: m, n: f, o: { parentNode: g, remove: y } } = c;
  let _;
  const h = function(w) {
    var I;
    return ((I = w.props) == null ? void 0 : I.suspensible) != null && w.props.suspensible !== !1;
  }(e);
  h && t?.pendingBranch && (_ = t.pendingId, t.deps++);
  const x = e.props ? Ur(e.props.timeout) : void 0, b = { vnode: e, parent: t, parentComponent: n, namespace: a, container: o, hiddenContainer: r, anchor: s, deps: 0, pendingId: 0, timeout: typeof x == "number" ? x : -1, activeBranch: null, pendingBranch: null, isInFallback: !u, isHydrating: u, isUnmounted: !1, effects: [], resolve(w = !1, I = !1) {
    const { vnode: q, activeBranch: A, pendingBranch: E, pendingId: B, effects: z, parentComponent: S, container: P } = b;
    let W = !1;
    if (b.isHydrating)
      b.isHydrating = !1;
    else if (!w) {
      W = A && E.transition && E.transition.mode === "out-in", W && (A.transition.afterLeave = () => {
        B === b.pendingId && (p(E, P, f(A), 0), Dr(z));
      });
      let { anchor: G } = b;
      A && (G = f(A), m(A, S, b, !0)), W || p(E, P, G, 0);
    }
    oo(b, E), b.pendingBranch = null, b.isInFallback = !1;
    let X = b.parent, Y = !1;
    for (; X; ) {
      if (X.pendingBranch) {
        X.effects.push(...z), Y = !0;
        break;
      }
      X = X.parent;
    }
    Y || W || Dr(z), b.effects = [], h && t && t.pendingBranch && _ === t.pendingId && (t.deps--, t.deps !== 0 || I || t.resolve()), Fo(q, "onResolve");
  }, fallback(w) {
    if (!b.pendingBranch)
      return;
    const { vnode: I, activeBranch: q, parentComponent: A, container: E, namespace: B } = b;
    Fo(I, "onFallback");
    const z = f(q), S = () => {
      b.isInFallback && (d(null, w, E, z, A, null, B, i, l), oo(b, w));
    }, P = w.transition && w.transition.mode === "out-in";
    P && (q.transition.afterLeave = S), b.isInFallback = !0, m(q, A, null, !0), P || S();
  }, move(w, I, q) {
    b.activeBranch && p(b.activeBranch, w, I, q), b.container = w;
  }, next: () => b.activeBranch && f(b.activeBranch), registerDep(w, I) {
    const q = !!b.pendingBranch;
    q && b.deps++;
    const A = w.vnode.el;
    w.asyncDep.catch((E) => {
      Xn(E, w, 0);
    }).then((E) => {
      if (w.isUnmounted || b.isUnmounted || b.pendingId !== w.suspenseId)
        return;
      w.asyncResolved = !0;
      const { vnode: B } = w;
      Zs(w, E, !1), A && (B.el = A);
      const z = !A && w.subTree.el;
      I(w, B, g(A || w.subTree.el), A ? null : f(w.subTree), b, a, l), z && y(z), Oa(w, B.el), q && --b.deps == 0 && b.resolve();
    });
  }, unmount(w, I) {
    b.isUnmounted = !0, b.activeBranch && m(b.activeBranch, n, w, I), b.pendingBranch && m(b.pendingBranch, n, w, I);
  } };
  return b;
}
function Li(e) {
  let t;
  if (re(e)) {
    const n = Kn && e._c;
    n && (e._d = !1, K()), e = e(), n && (e._d = !0, t = lt, su());
  }
  return Z(e) && (e = function(o) {
    let r;
    for (let s = 0; s < o.length; s++) {
      const a = o[s];
      if (!Gn(a))
        return;
      if (a.type !== We || a.children === "v-if") {
        if (r)
          return;
        r = a;
      }
    }
    return r;
  }(e)), e = At(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function Ac(e, t) {
  t && t.pendingBranch ? Z(e) ? t.effects.push(...e) : t.effects.push(e) : Dr(e);
}
function oo(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: o } = e, r = n.el = t.el;
  o && o.subTree === n && (o.vnode.el = r, Oa(o, r));
}
const Sc = Symbol.for("v-scx"), Lp = () => uo(Sc);
function Cn(e, t) {
  return Yo(e, null, t);
}
function Ec(e, t) {
  return Yo(e, null, { flush: "post" });
}
function Ic(e, t) {
  return Yo(e, null, { flush: "sync" });
}
const fr = {};
function et(e, t, n) {
  return Yo(e, t, n);
}
function Yo(e, t, { immediate: n, deep: o, flush: r, once: s } = be) {
  var a;
  if (t && s) {
    const h = t;
    t = (...x) => {
      h(...x), _();
    };
  }
  const i = Aa() === ((a = De) == null ? void 0 : a.scope) ? De : null;
  let l, c, u = !1, d = !1;
  if (qe(e) ? (l = () => e.value, u = Bn(e)) : Dn(e) ? (l = Bn(e) || o === !1 ? () => Xt(e, 1) : () => Xt(e), u = !0) : Z(e) ? (d = !0, u = e.some((h) => Dn(h) || Bn(h)), l = () => e.map((h) => qe(h) ? h.value : Dn(h) ? Xt(h, Bn(h) || o === !1 ? 1 : void 0) : re(h) ? tn(h, i, 2) : void 0)) : l = re(e) ? t ? () => tn(e, i, 2) : () => {
    if (!i || !i.isUnmounted)
      return c && c(), Rt(e, i, 3, [p]);
  } : Ve, t && o) {
    const h = l;
    l = () => Xt(h());
  }
  let p = (h) => {
    c = y.onStop = () => {
      tn(h, i, 4), c = y.onStop = void 0;
    };
  }, m = d ? new Array(e.length).fill(fr) : fr;
  const f = () => {
    if (y.active && y.dirty)
      if (t) {
        const h = y.run();
        (o || u || (d ? h.some((x, b) => Lt(x, m[b])) : Lt(h, m))) && (c && c(), Rt(t, i, 3, [h, m === fr ? void 0 : d && m[0] === fr ? [] : m, p]), m = h);
      } else
        y.run();
  };
  let g;
  f.allowRecurse = !!t, r === "sync" ? g = f : r === "post" ? g = () => Je(f, i && i.suspense) : (f.pre = !0, i && (f.id = i.uid), g = () => ls(f));
  const y = new po(l, Ve, g), _ = () => {
    y.stop(), i && i.scope && ba(i.scope.effects, y);
  };
  return t ? n ? f() : m = y.run() : r === "post" ? Je(y.run.bind(y), i && i.suspense) : y.run(), _;
}
function $p(e, t, n) {
  const o = this.proxy, r = le(e) ? e.includes(".") ? Tc(o, e) : () => o[e] : e.bind(o, o);
  let s;
  re(t) ? s = t : (s = t.handler, n = t);
  const a = De;
  _n(this);
  const i = Yo(r, s.bind(o), n);
  return a ? _n(a) : kn(), i;
}
function Tc(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function Xt(e, t, n = 0, o) {
  if (!we(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if ((o = o || /* @__PURE__ */ new Set()).has(e))
    return e;
  if (o.add(e), qe(e))
    Xt(e.value, t, n, o);
  else if (Z(e))
    for (let r = 0; r < e.length; r++)
      Xt(e[r], t, n, o);
  else if (xo(e) || io(e))
    e.forEach((r) => {
      Xt(r, t, n, o);
    });
  else if (Hl(e))
    for (const r in e)
      Xt(e[r], t, n, o);
  return e;
}
function Rc(e, t) {
  const n = ze;
  if (n === null)
    return e;
  const o = hs(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [a, i, l, c = be] = t[s];
    a && (re(a) && (a = { mounted: a, updated: a }), a.deep && Xt(i), r.push({ dir: a, instance: o, value: i, oldValue: void 0, arg: l, modifiers: c }));
  }
  return e;
}
function zt(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let a = 0; a < r.length; a++) {
    const i = r[a];
    s && (i.oldValue = s[a].value);
    let l = i.dir[o];
    l && (zn(), Rt(l, n, 8, [e.el, i, e, t]), qn());
  }
}
const yn = Symbol("_leaveCb"), hr = Symbol("_enterCb");
function Da() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: /* @__PURE__ */ new Map() };
  return bt(() => {
    e.isMounted = !0;
  }), Xo(() => {
    e.isUnmounting = !0;
  }), e;
}
const _t = [Function, Array], La = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: _t, onEnter: _t, onAfterEnter: _t, onEnterCancelled: _t, onBeforeLeave: _t, onLeave: _t, onAfterLeave: _t, onLeaveCancelled: _t, onBeforeAppear: _t, onAppear: _t, onAfterAppear: _t, onAppearCancelled: _t }, Nc = { name: "BaseTransition", props: La, setup(e, { slots: t }) {
  const n = He(), o = Da();
  let r;
  return () => {
    const s = t.default && us(t.default(), !0);
    if (!s || !s.length)
      return;
    let a = s[0];
    if (s.length > 1) {
      for (const g of s)
        if (g.type !== We) {
          a = g;
          break;
        }
    }
    const i = me(e), { mode: l } = i;
    if (o.isLeaving)
      return ks(a);
    const c = $i(a);
    if (!c)
      return ks(a);
    const u = fo(c, i, o, n);
    Wn(c, u);
    const d = n.subTree, p = d && $i(d);
    let m = !1;
    const { getTransitionKey: f } = c.type;
    if (f) {
      const g = f();
      r === void 0 ? r = g : g !== r && (r = g, m = !0);
    }
    if (p && p.type !== We && (!Ut(c, p) || m)) {
      const g = fo(p, i, o, n);
      if (Wn(p, g), l === "out-in")
        return o.isLeaving = !0, g.afterLeave = () => {
          o.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
        }, ks(a);
      l === "in-out" && c.type !== We && (g.delayLeave = (y, _, h) => {
        Bc(o, p)[String(p.key)] = p, y[yn] = () => {
          _(), y[yn] = void 0, delete u.delayedLeave;
        }, u.delayedLeave = h;
      });
    }
    return a;
  };
} };
function Bc(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function fo(e, t, n, o) {
  const { appear: r, mode: s, persisted: a = !1, onBeforeEnter: i, onEnter: l, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: d, onLeave: p, onAfterLeave: m, onLeaveCancelled: f, onBeforeAppear: g, onAppear: y, onAfterAppear: _, onAppearCancelled: h } = t, x = String(e.key), b = Bc(n, e), w = (A, E) => {
    A && Rt(A, o, 9, E);
  }, I = (A, E) => {
    const B = E[1];
    w(A, E), Z(A) ? A.every((z) => z.length <= 1) && B() : A.length <= 1 && B();
  }, q = { mode: s, persisted: a, beforeEnter(A) {
    let E = i;
    if (!n.isMounted) {
      if (!r)
        return;
      E = g || i;
    }
    A[yn] && A[yn](!0);
    const B = b[x];
    B && Ut(e, B) && B.el[yn] && B.el[yn](), w(E, [A]);
  }, enter(A) {
    let E = l, B = c, z = u;
    if (!n.isMounted) {
      if (!r)
        return;
      E = y || l, B = _ || c, z = h || u;
    }
    let S = !1;
    const P = A[hr] = (W) => {
      S || (S = !0, w(W ? z : B, [A]), q.delayedLeave && q.delayedLeave(), A[hr] = void 0);
    };
    E ? I(E, [A, P]) : P();
  }, leave(A, E) {
    const B = String(e.key);
    if (A[hr] && A[hr](!0), n.isUnmounting)
      return E();
    w(d, [A]);
    let z = !1;
    const S = A[yn] = (P) => {
      z || (z = !0, E(), w(P ? f : m, [A]), A[yn] = void 0, b[B] === e && delete b[B]);
    };
    b[B] = e, p ? I(p, [A, S]) : S();
  }, clone: (A) => fo(A, t, n, o) };
  return q;
}
function ks(e) {
  if (Zo(e))
    return (e = $t(e)).children = null, e;
}
function $i(e) {
  return Zo(e) ? e.children ? e.children[0] : void 0 : e;
}
function Wn(e, t) {
  6 & e.shapeFlag && e.component ? Wn(e.component.subTree, t) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function us(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let a = e[s];
    const i = n == null ? a.key : String(n) + String(a.key != null ? a.key : s);
    a.type === _e ? (128 & a.patchFlag && r++, o = o.concat(us(a.children, t, i))) : (t || a.type !== We) && o.push(i != null ? $t(a, { key: i }) : a);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function se(e, t) {
  return re(e) ? xe({ name: e.name }, t, { setup: e }) : e;
}
const Ln = (e) => !!e.type.__asyncLoader;
function jp(e) {
  re(e) && (e = { loader: e });
  const { loader: t, loadingComponent: n, errorComponent: o, delay: r = 200, timeout: s, suspensible: a = !0, onError: i } = e;
  let l, c = null, u = 0;
  const d = () => {
    let p;
    return c || (p = c = t().catch((m) => {
      if (m = m instanceof Error ? m : new Error(String(m)), i)
        return new Promise((f, g) => {
          i(m, () => f((u++, c = null, d())), () => g(m), u + 1);
        });
      throw m;
    }).then((m) => p !== c && c ? c : (m && (m.__esModule || m[Symbol.toStringTag] === "Module") && (m = m.default), l = m, m)));
  };
  return /* @__PURE__ */ se({ name: "AsyncComponentWrapper", __asyncLoader: d, get __asyncResolved() {
    return l;
  }, setup() {
    const p = De;
    if (l)
      return () => Cs(l, p);
    const m = (_) => {
      c = null, Xn(_, p, 13, !o);
    };
    if (a && p.suspense)
      return d().then((_) => () => Cs(_, p)).catch((_) => (m(_), () => o ? j(o, { error: _ }) : null));
    const f = te(!1), g = te(), y = te(!!r);
    return r && setTimeout(() => {
      y.value = !1;
    }, r), s != null && setTimeout(() => {
      if (!f.value && !g.value) {
        const _ = new Error(`Async component timed out after ${s}ms.`);
        m(_), g.value = _;
      }
    }, s), d().then(() => {
      f.value = !0, p.parent && Zo(p.parent.vnode) && (p.parent.effect.dirty = !0, ls(p.parent.update));
    }).catch((_) => {
      m(_), g.value = _;
    }), () => f.value && l ? Cs(l, p) : g.value && o ? j(o, { error: g.value }) : n && !y.value ? j(n) : void 0;
  } });
}
function Cs(e, t) {
  const { ref: n, props: o, children: r, ce: s } = t.vnode, a = j(e, o, r);
  return a.ref = n, a.ce = s, delete t.vnode.ce, a;
}
const Zo = (e) => e.type.__isKeepAlive, Vp = { name: "KeepAlive", __isKeepAlive: !0, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e, { slots: t }) {
  const n = He(), o = n.ctx, r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
  let a = null;
  const i = n.suspense, { renderer: { p: l, m: c, um: u, o: { createElement: d } } } = o, p = d("div");
  function m(h) {
    _s(h), u(h, n, i, !0);
  }
  function f(h) {
    r.forEach((x, b) => {
      const w = Xs(x.type);
      !w || h && h(w) || g(b);
    });
  }
  function g(h) {
    const x = r.get(h);
    a && Ut(x, a) ? a && _s(a) : m(x), r.delete(h), s.delete(h);
  }
  o.activate = (h, x, b, w, I) => {
    const q = h.component;
    c(h, x, b, 0, i), l(q.vnode, h, x, b, q, i, w, h.slotScopeIds, I), Je(() => {
      q.isDeactivated = !1, q.a && lo(q.a);
      const A = h.props && h.props.onVnodeMounted;
      A && it(A, q.parent, h);
    }, i);
  }, o.deactivate = (h) => {
    const x = h.component;
    c(h, p, null, 1, i), Je(() => {
      x.da && lo(x.da);
      const b = h.props && h.props.onVnodeUnmounted;
      b && it(b, x.parent, h), x.isDeactivated = !0;
    }, i);
  }, et(() => [e.include, e.exclude], ([h, x]) => {
    h && f((b) => No(h, b)), x && f((b) => !No(x, b));
  }, { flush: "post", deep: !0 });
  let y = null;
  const _ = () => {
    y != null && r.set(y, As(n.subTree));
  };
  return bt(_), ps(_), Xo(() => {
    r.forEach((h) => {
      const { subTree: x, suspense: b } = n, w = As(x);
      if (h.type !== w.type || h.key !== w.key)
        m(h);
      else {
        _s(w);
        const I = w.component.da;
        I && Je(I, b);
      }
    });
  }), () => {
    if (y = null, !t.default)
      return null;
    const h = t.default(), x = h[0];
    if (h.length > 1)
      return a = null, h;
    if (!(Gn(x) && (4 & x.shapeFlag || 128 & x.shapeFlag)))
      return a = null, x;
    let b = As(x);
    const w = b.type, I = Xs(Ln(b) ? b.type.__asyncResolved || {} : w), { include: q, exclude: A, max: E } = e;
    if (q && (!I || !No(q, I)) || A && I && No(A, I))
      return a = b, x;
    const B = b.key == null ? w : b.key, z = r.get(B);
    return b.el && (b = $t(b), 128 & x.shapeFlag && (x.ssContent = b)), y = B, z ? (b.el = z.el, b.component = z.component, b.transition && Wn(b, b.transition), b.shapeFlag |= 512, s.delete(B), s.add(B)) : (s.add(B), E && s.size > parseInt(E, 10) && g(s.values().next().value)), b.shapeFlag |= 256, a = b, _c(x.type) ? x : b;
  };
} };
function No(e, t) {
  return Z(e) ? e.some((n) => No(n, t)) : le(e) ? e.split(",").includes(t) : wo(e) === "[object RegExp]" && e.test(t);
}
function Mc(e, t) {
  Oc(e, "a", t);
}
function Fc(e, t) {
  Oc(e, "da", t);
}
function Oc(e, t, n = De) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ds(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Zo(r.parent.vnode) && zp(o, t, n, r), r = r.parent;
  }
}
function zp(e, t, n, o) {
  const r = ds(t, e, o, !0);
  on(() => {
    ba(o[t], r);
  }, n);
}
function _s(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function As(e) {
  return 128 & e.shapeFlag ? e.ssContent : e;
}
function ds(e, t, n = De, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...a) => {
      if (n.isUnmounted)
        return;
      zn(), _n(n);
      const i = Rt(t, n, e, a);
      return kn(), qn(), i;
    });
    return o ? r.unshift(s) : r.push(s), s;
  }
}
const nn = (e) => (t, n = De) => (!Wa || e === "sp") && ds(e, (...o) => t(...o), n), Uc = nn("bm"), bt = nn("m"), Pc = nn("bu"), ps = nn("u"), Xo = nn("bum"), on = nn("um"), Dc = nn("sp"), Lc = nn("rtg"), $c = nn("rtc");
function jc(e, t = De) {
  ds("ec", e, t);
}
function zs(e, t, n, o) {
  let r;
  const s = n && n[o];
  if (Z(e) || le(e)) {
    r = new Array(e.length);
    for (let a = 0, i = e.length; a < i; a++)
      r[a] = t(e[a], a, void 0, s && s[a]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let a = 0; a < e; a++)
      r[a] = t(a + 1, a, void 0, s && s[a]);
  } else if (we(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (a, i) => t(a, i, void 0, s && s[i]));
    else {
      const a = Object.keys(e);
      r = new Array(a.length);
      for (let i = 0, l = a.length; i < l; i++) {
        const c = a[i];
        r[i] = t(e[c], c, i, s && s[i]);
      }
    }
  else
    r = [];
  return n && (n[o] = r), r;
}
function qp(e, t) {
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (Z(o))
      for (let r = 0; r < o.length; r++)
        e[o[r].name] = o[r].fn;
    else
      o && (e[o.name] = o.key ? (...r) => {
        const s = o.fn(...r);
        return s && (s.key = o.key), s;
      } : o.fn);
  }
  return e;
}
function fe(e, t, n = {}, o, r) {
  if (ze.isCE || ze.parent && Ln(ze.parent) && ze.parent.isCE)
    return t !== "default" && (n.name = t), j("slot", n, o && o());
  let s = e[t];
  s && s._c && (s._d = !1), K();
  const a = s && Vc(s(n)), i = ie(_e, { key: n.key || a && a.key || `_${t}` }, a || (o ? o() : []), a && e._ === 1 ? 64 : -2);
  return !r && i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]), s && s._c && (s._d = !0), i;
}
function Vc(e) {
  return e.some((t) => !Gn(t) || t.type !== We && !(t.type === _e && !Vc(t.children))) ? e : null;
}
function Jp(e, t) {
  const n = {};
  for (const o in e)
    n[t && /[A-Z]/.test(o) ? `on:${o}` : On(o)] = e[o];
  return n;
}
const qs = (e) => e ? lu(e) ? hs(e) || e.proxy : qs(e.parent) : null, Oo = xe(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => qs(e.parent), $root: (e) => qs(e.root), $emit: (e) => e.emit, $options: (e) => $a(e), $forceUpdate: (e) => e.f || (e.f = () => {
  e.effect.dirty = !0, ls(e.update);
}), $nextTick: (e) => e.n || (e.n = jt.bind(e.proxy)), $watch: (e) => $p.bind(e) }), Ss = (e, t) => e !== be && !e.__isScriptSetup && ve(e, t), Js = { get({ _: e }, t) {
  const { ctx: n, setupState: o, data: r, props: s, accessCache: a, type: i, appContext: l } = e;
  let c;
  if (t[0] !== "$") {
    const m = a[t];
    if (m !== void 0)
      switch (m) {
        case 1:
          return o[t];
        case 2:
          return r[t];
        case 4:
          return n[t];
        case 3:
          return s[t];
      }
    else {
      if (Ss(o, t))
        return a[t] = 1, o[t];
      if (r !== be && ve(r, t))
        return a[t] = 2, r[t];
      if ((c = e.propsOptions[0]) && ve(c, t))
        return a[t] = 3, s[t];
      if (n !== be && ve(n, t))
        return a[t] = 4, n[t];
      Ws && (a[t] = 0);
    }
  }
  const u = Oo[t];
  let d, p;
  return u ? (t === "$attrs" && ut(e, 0, t), u(e)) : (d = i.__cssModules) && (d = d[t]) ? d : n !== be && ve(n, t) ? (a[t] = 4, n[t]) : (p = l.config.globalProperties, ve(p, t) ? p[t] : void 0);
}, set({ _: e }, t, n) {
  const { data: o, setupState: r, ctx: s } = e;
  return Ss(r, t) ? (r[t] = n, !0) : o !== be && ve(o, t) ? (o[t] = n, !0) : !ve(e.props, t) && (t[0] !== "$" || !(t.slice(1) in e)) && (s[t] = n, !0);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, a) {
  let i;
  return !!n[a] || e !== be && ve(e, a) || Ss(t, a) || (i = s[0]) && ve(i, a) || ve(o, a) || ve(Oo, a) || ve(r.config.globalProperties, a);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : ve(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} }, Wp = xe({}, Js, { get(e, t) {
  if (t !== Symbol.unscopables)
    return Js.get(e, t, e);
}, has: (e, t) => t[0] !== "_" && !zd(t) });
function Hp() {
  return null;
}
function Kp() {
  return null;
}
function Gp(e) {
}
function Qp(e) {
}
function Yp() {
  return null;
}
function Zp() {
}
function Xp(e, t) {
  return null;
}
function ef() {
  return Jc().slots;
}
function zc() {
  return Jc().attrs;
}
function qc(e, t, n = be) {
  const o = He(), r = Re(t), s = hc((i, l) => {
    let c;
    return Ic(() => {
      const u = e[t];
      Lt(c, u) && (c = u, l());
    }), { get: () => (i(), n.get ? n.get(c) : c), set(u) {
      const d = o.vnode.props;
      d && (t in d || r in d) && (`onUpdate:${t}` in d || `onUpdate:${r}` in d) || !Lt(u, c) || (c = u, l()), o.emit(`update:${t}`, n.set ? n.set(u) : u);
    } };
  }), a = t === "modelValue" ? "modelModifiers" : `${t}Modifiers`;
  return s[Symbol.iterator] = () => {
    let i = 0;
    return { next: () => i < 2 ? { value: i++ ? e[a] || {} : s, done: !1 } : { done: !0 } };
  }, s;
}
function Jc() {
  const e = He();
  return e.setupContext || (e.setupContext = du(e));
}
function qo(e) {
  return Z(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
function tf(e, t) {
  const n = qo(e);
  for (const o in t) {
    if (o.startsWith("__skip"))
      continue;
    let r = n[o];
    r ? Z(r) || re(r) ? r = n[o] = { type: r, default: t[o] } : r.default = t[o] : r === null && (r = n[o] = { default: t[o] }), r && t[`__skip_${o}`] && (r.skipFactory = !0);
  }
  return n;
}
function Wc(e, t) {
  return e && t ? Z(e) && Z(t) ? e.concat(t) : xe({}, qo(e), qo(t)) : e || t;
}
function nf(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || Object.defineProperty(n, o, { enumerable: !0, get: () => e[o] });
  return n;
}
function of(e) {
  const t = He();
  let n = e();
  return kn(), xa(n) && (n = n.catch((o) => {
    throw _n(t), o;
  })), [n, () => _n(t)];
}
let Ws = !0;
function rf(e) {
  const t = $a(e), n = e.proxy, o = e.ctx;
  Ws = !1, t.beforeCreate && ji(t.beforeCreate, e, "bc");
  const { data: r, computed: s, methods: a, watch: i, provide: l, inject: c, created: u, beforeMount: d, mounted: p, beforeUpdate: m, updated: f, activated: g, deactivated: y, beforeUnmount: _, unmounted: h, render: x, renderTracked: b, renderTriggered: w, errorCaptured: I, serverPrefetch: q, expose: A, inheritAttrs: E, components: B, directives: z } = t;
  if (c && function(P, W, X = Ve) {
    Z(P) && (P = Hs(P));
    for (const Y in P) {
      const G = P[Y];
      let M;
      M = we(G) ? "default" in G ? uo(G.from || Y, G.default, !0) : uo(G.from || Y) : uo(G), qe(M) ? Object.defineProperty(W, Y, { enumerable: !0, configurable: !0, get: () => M.value, set: (ae) => M.value = ae }) : W[Y] = M;
    }
  }(c, o, null), a)
    for (const P in a) {
      const W = a[P];
      re(W) && (o[P] = W.bind(n));
    }
  if (r) {
    const P = r.call(n, n);
    we(P) && (e.data = ko(P));
  }
  if (Ws = !0, s)
    for (const P in s) {
      const W = s[P], X = re(W) ? W.bind(n, n) : re(W.get) ? W.get.bind(n, n) : Ve, Y = !re(W) && re(W.set) ? W.set.bind(n) : Ve, G = ye({ get: X, set: Y });
      Object.defineProperty(o, P, { enumerable: !0, configurable: !0, get: () => G.value, set: (M) => G.value = M });
    }
  if (i)
    for (const P in i)
      Hc(i[P], o, n, P);
  if (l) {
    const P = re(l) ? l.call(n) : l;
    Reflect.ownKeys(P).forEach((W) => {
      ja(W, P[W]);
    });
  }
  function S(P, W) {
    Z(W) ? W.forEach((X) => P(X.bind(n))) : W && P(W.bind(n));
  }
  if (u && ji(u, e, "c"), S(Uc, d), S(bt, p), S(Pc, m), S(ps, f), S(Mc, g), S(Fc, y), S(jc, I), S($c, b), S(Lc, w), S(Xo, _), S(on, h), S(Dc, q), Z(A))
    if (A.length) {
      const P = e.exposed || (e.exposed = {});
      A.forEach((W) => {
        Object.defineProperty(P, W, { get: () => n[W], set: (X) => n[W] = X });
      });
    } else
      e.exposed || (e.exposed = {});
  x && e.render === Ve && (e.render = x), E != null && (e.inheritAttrs = E), B && (e.components = B), z && (e.directives = z);
}
function ji(e, t, n) {
  Rt(Z(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Hc(e, t, n, o) {
  const r = o.includes(".") ? Tc(n, o) : () => n[o];
  if (le(e)) {
    const s = t[e];
    re(s) && et(r, s);
  } else if (re(e))
    et(r, e.bind(n));
  else if (we(e))
    if (Z(e))
      e.forEach((s) => Hc(s, t, n, o));
    else {
      const s = re(e.handler) ? e.handler.bind(n) : t[e.handler];
      re(s) && et(r, s, e);
    }
}
function $a(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: a } } = e.appContext, i = s.get(t);
  let l;
  return i ? l = i : r.length || n || o ? (l = {}, r.length && r.forEach((c) => Vr(l, c, a, !0)), Vr(l, t, a)) : l = t, we(t) && s.set(t, l), l;
}
function Vr(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Vr(e, s, n, !0), r && r.forEach((a) => Vr(e, a, n, !0));
  for (const a in t)
    if (!(o && a === "expose")) {
      const i = sf[a] || n && n[a];
      e[a] = i ? i(e[a], t[a]) : t[a];
    }
  return e;
}
const sf = { data: Vi, props: zi, emits: zi, methods: So, computed: So, beforeCreate: nt, created: nt, beforeMount: nt, mounted: nt, beforeUpdate: nt, updated: nt, beforeDestroy: nt, beforeUnmount: nt, destroyed: nt, unmounted: nt, activated: nt, deactivated: nt, errorCaptured: nt, serverPrefetch: nt, components: So, directives: So, watch: function(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = xe(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = nt(e[o], t[o]);
  return n;
}, provide: Vi, inject: function(e, t) {
  return So(Hs(e), Hs(t));
} };
function Vi(e, t) {
  return t ? e ? function() {
    return xe(re(e) ? e.call(this, this) : e, re(t) ? t.call(this, this) : t);
  } : t : e;
}
function Hs(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function nt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function So(e, t) {
  return e ? xe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function zi(e, t) {
  return e ? Z(e) && Z(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : xe(/* @__PURE__ */ Object.create(null), qo(e), qo(t ?? {})) : t;
}
function Kc() {
  return { app: null, config: { isNativeTag: Tr, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let af = 0;
function lf(e, t) {
  return function(n, o = null) {
    re(n) || (n = xe({}, n)), o == null || we(o) || (o = null);
    const r = Kc(), s = /* @__PURE__ */ new WeakSet();
    let a = !1;
    const i = r.app = { _uid: af++, _component: n, _props: o, _container: null, _context: r, _instance: null, version: fu, get config() {
      return r.config;
    }, set config(l) {
    }, use: (l, ...c) => (s.has(l) || (l && re(l.install) ? (s.add(l), l.install(i, ...c)) : re(l) && (s.add(l), l(i, ...c))), i), mixin: (l) => (r.mixins.includes(l) || r.mixins.push(l), i), component: (l, c) => c ? (r.components[l] = c, i) : r.components[l], directive: (l, c) => c ? (r.directives[l] = c, i) : r.directives[l], mount(l, c, u) {
      if (!a) {
        const d = j(n, o);
        return d.appContext = r, u === !0 ? u = "svg" : u === !1 && (u = void 0), c && t ? t(d, l) : e(d, l, u), a = !0, i._container = l, l.__vue_app__ = i, hs(d.component) || d.component.proxy;
      }
    }, unmount() {
      a && (e(null, i._container), delete i._container.__vue_app__);
    }, provide: (l, c) => (r.provides[l] = c, i), runWithContext(l) {
      Jo = i;
      try {
        return l();
      } finally {
        Jo = null;
      }
    } };
    return i;
  };
}
let Jo = null;
function ja(e, t) {
  if (De) {
    let n = De.provides;
    const o = De.parent && De.parent.provides;
    o === n && (n = De.provides = Object.create(o)), n[e] = t;
  }
}
function uo(e, t, n = !1) {
  const o = De || ze;
  if (o || Jo) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : Jo._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && re(t) ? t.call(o && o.proxy) : t;
  }
}
function cf() {
  return !!(De || ze || Jo);
}
function qi(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let a, i = !1;
  if (t)
    for (let l in t) {
      if (Fn(l))
        continue;
      const c = t[l];
      let u;
      r && ve(r, u = Re(l)) ? s && s.includes(u) ? (a || (a = {}))[u] = c : n[u] = c : $r(e.emitsOptions, l) || l in o && c === o[l] || (o[l] = c, i = !0);
    }
  if (s) {
    const l = me(n), c = a || be;
    for (let u = 0; u < s.length; u++) {
      const d = s[u];
      n[d] = Ks(r, l, d, c[d], e, !ve(c, d));
    }
  }
  return i;
}
function Ks(e, t, n, o, r, s) {
  const a = e[n];
  if (a != null) {
    const i = ve(a, "default");
    if (i && o === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && re(l)) {
        const { propsDefaults: c } = r;
        n in c ? o = c[n] : (_n(r), o = c[n] = l.call(null, t), kn());
      } else
        o = l;
    }
    a[0] && (s && !i ? o = !1 : !a[1] || o !== "" && o !== St(n) || (o = !0));
  }
  return o;
}
function Gc(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, a = {}, i = [];
  let l = !1;
  if (!re(e)) {
    const u = (d) => {
      l = !0;
      const [p, m] = Gc(d, t, !0);
      xe(a, p), m && i.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return we(e) && o.set(e, ao), ao;
  if (Z(s))
    for (let u = 0; u < s.length; u++) {
      const d = Re(s[u]);
      Ji(d) && (a[d] = be);
    }
  else if (s)
    for (const u in s) {
      const d = Re(u);
      if (Ji(d)) {
        const p = s[u], m = a[d] = Z(p) || re(p) ? { type: p } : xe({}, p);
        if (m) {
          const f = Ki(Boolean, m.type), g = Ki(String, m.type);
          m[0] = f > -1, m[1] = g < 0 || f < g, (f > -1 || ve(m, "default")) && i.push(d);
        }
      }
    }
  const c = [a, i];
  return we(e) && o.set(e, c), c;
}
function Ji(e) {
  return e[0] !== "$";
}
function Wi(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Hi(e, t) {
  return Wi(e) === Wi(t);
}
function Ki(e, t) {
  return Z(t) ? t.findIndex((n) => Hi(n, e)) : re(t) && Hi(t, e) ? 0 : -1;
}
const Qc = (e) => e[0] === "_" || e === "$stable", Va = (e) => Z(e) ? e.map(At) : [At(e)], uf = (e, t, n) => {
  if (t._n)
    return t;
  const o = F((...r) => Va(t(...r)), n);
  return o._c = !1, o;
}, Yc = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Qc(r))
      continue;
    const s = e[r];
    if (re(s))
      t[r] = uf(0, s, o);
    else if (s != null) {
      const a = Va(s);
      t[r] = () => a;
    }
  }
}, Zc = (e, t) => {
  const n = Va(t);
  e.slots.default = () => n;
}, df = (e, t) => {
  if (32 & e.vnode.shapeFlag) {
    const n = t._;
    n ? (e.slots = me(t), Fr(t, "_", n)) : Yc(t, e.slots = {});
  } else
    e.slots = {}, t && Zc(e, t);
  Fr(e.slots, fs, 1);
}, pf = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, a = be;
  if (32 & o.shapeFlag) {
    const i = t._;
    i ? n && i === 1 ? s = !1 : (xe(r, t), n || i !== 1 || delete r._) : (s = !t.$stable, Yc(t, r)), a = t;
  } else
    t && (Zc(e, t), a = { default: 1 });
  if (s)
    for (const i in r)
      Qc(i) || a[i] != null || delete r[i];
};
function zr(e, t, n, o, r = !1) {
  if (Z(e))
    return void e.forEach((p, m) => zr(p, t && (Z(t) ? t[m] : t), n, o, r));
  if (Ln(o) && !r)
    return;
  const s = 4 & o.shapeFlag ? hs(o.component) || o.component.proxy : o.el, a = r ? null : s, { i, r: l } = e, c = t && t.r, u = i.refs === be ? i.refs = {} : i.refs, d = i.setupState;
  if (c != null && c !== l && (le(c) ? (u[c] = null, ve(d, c) && (d[c] = null)) : qe(c) && (c.value = null)), re(l))
    tn(l, i, 12, [a, u]);
  else {
    const p = le(l), m = qe(l);
    if (p || m) {
      const f = () => {
        if (e.f) {
          const g = p ? ve(d, l) ? d[l] : u[l] : l.value;
          r ? Z(g) && ba(g, s) : Z(g) ? g.includes(s) || g.push(s) : p ? (u[l] = [s], ve(d, l) && (d[l] = u[l])) : (l.value = [s], e.k && (u[e.k] = l.value));
        } else
          p ? (u[l] = a, ve(d, l) && (d[l] = a)) : m && (l.value = a, e.k && (u[e.k] = a));
      };
      a ? (f.id = -1, Je(f, n)) : f();
    }
  }
}
let ln = !1;
const mr = (e) => ((t) => t.namespaceURI.includes("svg") && t.tagName !== "foreignObject")(e) ? "svg" : ((t) => t.namespaceURI.includes("MathML"))(e) ? "mathml" : void 0, gr = (e) => e.nodeType === 8;
function ff(e) {
  const { mt: t, p: n, o: { patchProp: o, createText: r, nextSibling: s, parentNode: a, remove: i, insert: l, createComment: c } } = e, u = (h, x, b, w, I, q = !1) => {
    const A = gr(h) && h.data === "[", E = () => f(h, x, b, w, I, A), { type: B, ref: z, shapeFlag: S, patchFlag: P } = x;
    let W = h.nodeType;
    x.el = h, P === -2 && (q = !1, x.dynamicChildren = null);
    let X = null;
    switch (B) {
      case Hn:
        W !== 3 ? x.children === "" ? (l(x.el = r(""), a(h), h), X = h) : X = E() : (h.data !== x.children && (ln = !0, h.data = x.children), X = s(h));
        break;
      case We:
        _(h) ? (X = s(h), y(x.el = h.content.firstChild, h, b)) : X = W !== 8 || A ? E() : s(h);
        break;
      case $n:
        if (A && (W = (h = s(h)).nodeType), W === 1 || W === 3) {
          X = h;
          const Y = !x.children.length;
          for (let G = 0; G < x.staticCount; G++)
            Y && (x.children += X.nodeType === 1 ? X.outerHTML : X.data), G === x.staticCount - 1 && (x.anchor = X), X = s(X);
          return A ? s(X) : X;
        }
        E();
        break;
      case _e:
        X = A ? m(h, x, b, w, I, q) : E();
        break;
      default:
        if (1 & S)
          X = W === 1 && x.type.toLowerCase() === h.tagName.toLowerCase() || _(h) ? d(h, x, b, w, I, q) : E();
        else if (6 & S) {
          x.slotScopeIds = I;
          const Y = a(h);
          if (X = A ? g(h) : gr(h) && h.data === "teleport start" ? g(h, h.data, "teleport end") : s(h), t(x, Y, null, b, w, mr(Y), q), Ln(x)) {
            let G;
            A ? (G = j(_e), G.anchor = X ? X.previousSibling : Y.lastChild) : G = h.nodeType === 3 ? pe("") : j("div"), G.el = h, x.component.subTree = G;
          }
        } else
          64 & S ? X = W !== 8 ? E() : x.type.hydrate(h, x, b, w, I, q, e, p) : 128 & S && (X = x.type.hydrate(h, x, b, w, mr(a(h)), I, q, e, u));
    }
    return z != null && zr(z, null, w, x), X;
  }, d = (h, x, b, w, I, q) => {
    q = q || !!x.dynamicChildren;
    const { type: A, props: E, patchFlag: B, shapeFlag: z, dirs: S, transition: P } = x, W = A === "input" || A === "option";
    if (W || B !== -1) {
      S && zt(x, null, b, "created");
      let X, Y = !1;
      if (_(h)) {
        Y = nu(w, P) && b && b.vnode.props && b.vnode.props.appear;
        const G = h.content.firstChild;
        Y && P.beforeEnter(G), y(G, h, b), x.el = h = G;
      }
      if (16 & z && (!E || !E.innerHTML && !E.textContent)) {
        let G = p(h.firstChild, x, h, b, w, I, q);
        for (; G; ) {
          ln = !0;
          const M = G;
          G = G.nextSibling, i(M);
        }
      } else
        8 & z && h.textContent !== x.children && (ln = !0, h.textContent = x.children);
      if (E)
        if (W || !q || 48 & B)
          for (const G in E)
            (W && (G.endsWith("value") || G === "indeterminate") || Yn(G) && !Fn(G) || G[0] === ".") && o(h, G, null, E[G], void 0, void 0, b);
        else
          E.onClick && o(h, "onClick", null, E.onClick, void 0, void 0, b);
      (X = E && E.onVnodeBeforeMount) && it(X, b, x), S && zt(x, null, b, "beforeMount"), ((X = E && E.onVnodeMounted) || S || Y) && Ac(() => {
        X && it(X, b, x), Y && P.enter(h), S && zt(x, null, b, "mounted");
      }, w);
    }
    return h.nextSibling;
  }, p = (h, x, b, w, I, q, A) => {
    A = A || !!x.dynamicChildren;
    const E = x.children, B = E.length;
    for (let z = 0; z < B; z++) {
      const S = A ? E[z] : E[z] = At(E[z]);
      if (h)
        h = u(h, S, w, I, q, A);
      else {
        if (S.type === Hn && !S.children)
          continue;
        ln = !0, n(null, S, b, null, w, I, mr(b), q);
      }
    }
    return h;
  }, m = (h, x, b, w, I, q) => {
    const { slotScopeIds: A } = x;
    A && (I = I ? I.concat(A) : A);
    const E = a(h), B = p(s(h), x, E, b, w, I, q);
    return B && gr(B) && B.data === "]" ? s(x.anchor = B) : (ln = !0, l(x.anchor = c("]"), E, B), B);
  }, f = (h, x, b, w, I, q) => {
    if (ln = !0, x.el = null, q) {
      const B = g(h);
      for (; ; ) {
        const z = s(h);
        if (!z || z === B)
          break;
        i(z);
      }
    }
    const A = s(h), E = a(h);
    return i(h), n(null, x, E, A, b, w, mr(E), I), A;
  }, g = (h, x = "[", b = "]") => {
    let w = 0;
    for (; h; )
      if ((h = s(h)) && gr(h) && (h.data === x && w++, h.data === b)) {
        if (w === 0)
          return s(h);
        w--;
      }
    return h;
  }, y = (h, x, b) => {
    const w = x.parentNode;
    w && w.replaceChild(h, x);
    let I = b;
    for (; I; )
      I.vnode.el === x && (I.vnode.el = I.subTree.el = h), I = I.parent;
  }, _ = (h) => h.nodeType === 1 && h.tagName.toLowerCase() === "template";
  return [(h, x) => {
    if (!x.hasChildNodes())
      return n(null, h, x), Lr(), void (x._vnode = h);
    ln = !1, u(x.firstChild, h, null, null, null), Lr(), x._vnode = h, ln && console.error("Hydration completed but contains mismatches.");
  }, u];
}
const Je = Ac;
function Xc(e) {
  return tu(e);
}
function eu(e) {
  return tu(e, ff);
}
function tu(e, t) {
  Vd().__VUE__ = !0;
  const { insert: n, remove: o, patchProp: r, createElement: s, createText: a, createComment: i, setText: l, setElementText: c, parentNode: u, nextSibling: d, setScopeId: p = Ve, insertStaticContent: m } = e, f = (v, C, R, D = null, N = null, O = null, H = void 0, L = null, U = !!C.dynamicChildren) => {
    if (v === C)
      return;
    v && !Ut(v, C) && (D = dt(v), ae(v, N, O, !0), v = null), C.patchFlag === -2 && (U = !1, C.dynamicChildren = null);
    const { type: T, ref: $, shapeFlag: ee } = C;
    switch (T) {
      case Hn:
        g(v, C, R, D);
        break;
      case We:
        y(v, C, R, D);
        break;
      case $n:
        v == null && _(C, R, D, H);
        break;
      case _e:
        E(v, C, R, D, N, O, H, L, U);
        break;
      default:
        1 & ee ? h(v, C, R, D, N, O, H, L, U) : 6 & ee ? B(v, C, R, D, N, O, H, L, U) : (64 & ee || 128 & ee) && T.process(v, C, R, D, N, O, H, L, U, wt);
    }
    $ != null && N && zr($, v && v.ref, O, C || v, !C);
  }, g = (v, C, R, D) => {
    if (v == null)
      n(C.el = a(C.children), R, D);
    else {
      const N = C.el = v.el;
      C.children !== v.children && l(N, C.children);
    }
  }, y = (v, C, R, D) => {
    v == null ? n(C.el = i(C.children || ""), R, D) : C.el = v.el;
  }, _ = (v, C, R, D) => {
    [v.el, v.anchor] = m(v.children, C, R, D, v.el, v.anchor);
  }, h = (v, C, R, D, N, O, H, L, U) => {
    C.type === "svg" ? H = "svg" : C.type === "math" && (H = "mathml"), v == null ? x(C, R, D, N, O, H, L, U) : I(v, C, N, O, H, L, U);
  }, x = (v, C, R, D, N, O, H, L) => {
    let U, T;
    const { props: $, shapeFlag: ee, transition: Q, dirs: J } = v;
    if (U = v.el = s(v.type, O, $ && $.is, $), 8 & ee ? c(U, v.children) : 16 & ee && w(v.children, U, null, D, N, Es(v, O), H, L), J && zt(v, null, D, "created"), b(U, v, v.scopeId, H, D), $) {
      for (const oe in $)
        oe === "value" || Fn(oe) || r(U, oe, null, $[oe], O, v.children, D, N, Fe);
      "value" in $ && r(U, "value", null, $.value, O), (T = $.onVnodeBeforeMount) && it(T, D, v);
    }
    J && zt(v, null, D, "beforeMount");
    const ne = nu(N, Q);
    ne && Q.beforeEnter(U), n(U, C, R), ((T = $ && $.onVnodeMounted) || ne || J) && Je(() => {
      T && it(T, D, v), ne && Q.enter(U), J && zt(v, null, D, "mounted");
    }, N);
  }, b = (v, C, R, D, N) => {
    if (R && p(v, R), D)
      for (let O = 0; O < D.length; O++)
        p(v, D[O]);
    if (N && C === N.subTree) {
      const O = N.vnode;
      b(v, O, O.scopeId, O.slotScopeIds, N.parent);
    }
  }, w = (v, C, R, D, N, O, H, L, U = 0) => {
    for (let T = U; T < v.length; T++) {
      const $ = v[T] = L ? bn(v[T]) : At(v[T]);
      f(null, $, C, R, D, N, O, H, L);
    }
  }, I = (v, C, R, D, N, O, H) => {
    const L = C.el = v.el;
    let { patchFlag: U, dynamicChildren: T, dirs: $ } = C;
    U |= 16 & v.patchFlag;
    const ee = v.props || be, Q = C.props || be;
    let J;
    if (R && En(R, !1), (J = Q.onVnodeBeforeUpdate) && it(J, R, C, v), $ && zt(C, v, R, "beforeUpdate"), R && En(R, !0), T ? q(v.dynamicChildren, T, L, R, D, Es(C, N), O) : H || X(v, C, L, null, R, D, Es(C, N), O, !1), U > 0) {
      if (16 & U)
        A(L, C, ee, Q, R, D, N);
      else if (2 & U && ee.class !== Q.class && r(L, "class", null, Q.class, N), 4 & U && r(L, "style", ee.style, Q.style, N), 8 & U) {
        const ne = C.dynamicProps;
        for (let oe = 0; oe < ne.length; oe++) {
          const ue = ne[oe], ge = ee[ue], Ee = Q[ue];
          Ee === ge && ue !== "value" || r(L, ue, ge, Ee, N, v.children, R, D, Fe);
        }
      }
      1 & U && v.children !== C.children && c(L, C.children);
    } else
      H || T != null || A(L, C, ee, Q, R, D, N);
    ((J = Q.onVnodeUpdated) || $) && Je(() => {
      J && it(J, R, C, v), $ && zt(C, v, R, "updated");
    }, D);
  }, q = (v, C, R, D, N, O, H) => {
    for (let L = 0; L < C.length; L++) {
      const U = v[L], T = C[L], $ = U.el && (U.type === _e || !Ut(U, T) || 70 & U.shapeFlag) ? u(U.el) : R;
      f(U, T, $, null, D, N, O, H, !0);
    }
  }, A = (v, C, R, D, N, O, H) => {
    if (R !== D) {
      if (R !== be)
        for (const L in R)
          Fn(L) || L in D || r(v, L, R[L], null, H, C.children, N, O, Fe);
      for (const L in D) {
        if (Fn(L))
          continue;
        const U = D[L], T = R[L];
        U !== T && L !== "value" && r(v, L, T, U, H, C.children, N, O, Fe);
      }
      "value" in D && r(v, "value", R.value, D.value, H);
    }
  }, E = (v, C, R, D, N, O, H, L, U) => {
    const T = C.el = v ? v.el : a(""), $ = C.anchor = v ? v.anchor : a("");
    let { patchFlag: ee, dynamicChildren: Q, slotScopeIds: J } = C;
    J && (L = L ? L.concat(J) : J), v == null ? (n(T, R, D), n($, R, D), w(C.children, R, $, N, O, H, L, U)) : ee > 0 && 64 & ee && Q && v.dynamicChildren ? (q(v.dynamicChildren, Q, R, N, O, H, L), (C.key != null || N && C === N.subTree) && za(v, C, !0)) : X(v, C, R, $, N, O, H, L, U);
  }, B = (v, C, R, D, N, O, H, L, U) => {
    C.slotScopeIds = L, v == null ? 512 & C.shapeFlag ? N.ctx.activate(C, R, D, H, U) : z(C, R, D, N, O, H, U) : S(v, C, U);
  }, z = (v, C, R, D, N, O, H) => {
    const L = v.component = function(U, T, $) {
      const ee = U.type, Q = (T ? T.appContext : U.appContext) || gf, J = { uid: vf++, vnode: U, type: ee, parent: T, appContext: Q, root: null, next: null, subTree: null, effect: null, update: null, scope: new Ca(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: T ? T.provides : Object.create(Q.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Gc(ee, Q), emitsOptions: xc(ee, Q), emit: null, emitted: null, propsDefaults: be, inheritAttrs: ee.inheritAttrs, ctx: be, data: be, props: be, attrs: be, slots: be, refs: be, setupState: be, setupContext: null, attrsProxy: null, slotsProxy: null, suspense: $, suspenseId: $ ? $.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
      return J.ctx = { _: J }, J.root = T ? T.root : J, J.emit = Np.bind(null, J), U.ce && U.ce(J), J;
    }(v, D, N);
    if (Zo(v) && (L.ctx.renderer = wt), function(U, T = !1) {
      T && Qs(T);
      const { props: $, children: ee } = U.vnode, Q = lu(U);
      (function(J, ne, oe, ue = !1) {
        const ge = {}, Ee = {};
        Fr(Ee, fs, 1), J.propsDefaults = /* @__PURE__ */ Object.create(null), qi(J, ne, ge, Ee);
        for (const pt in J.propsOptions[0])
          pt in ge || (ge[pt] = void 0);
        J.props = oe ? ue ? ge : dc(ge) : J.type.props ? ge : Ee, J.attrs = Ee;
      })(U, $, Q, T), df(U, ee), Q && function(J, ne) {
        const oe = J.type;
        J.accessCache = /* @__PURE__ */ Object.create(null), J.proxy = is(new Proxy(J.ctx, Js));
        const { setup: ue } = oe;
        if (ue) {
          const ge = J.setupContext = ue.length > 1 ? du(J) : null;
          _n(J), zn();
          const Ee = tn(ue, J, 0, [J.props, ge]);
          if (qn(), kn(), xa(Ee)) {
            if (Ee.then(kn, kn), ne)
              return Ee.then((pt) => {
                Zs(J, pt, ne);
              }).catch((pt) => {
                Xn(pt, J, 0);
              });
            J.asyncDep = Ee;
          } else
            Zs(J, Ee, ne);
        } else
          uu(J, ne);
      }(U, T), T && Qs(!1);
    }(L), L.asyncDep) {
      if (N && N.registerDep(L, P), !v.el) {
        const U = L.subTree = j(We);
        y(null, U, C, R);
      }
    } else
      P(L, v, C, R, N, O, H);
  }, S = (v, C, R) => {
    const D = C.component = v.component;
    if (function(N, O, H) {
      const { props: L, children: U, component: T } = N, { props: $, children: ee, patchFlag: Q } = O, J = T.emitsOptions;
      if (O.dirs || O.transition)
        return !0;
      if (!(H && Q >= 0))
        return !(!U && !ee || ee && ee.$stable) || L !== $ && (L ? !$ || Ui(L, $, J) : !!$);
      if (1024 & Q)
        return !0;
      if (16 & Q)
        return L ? Ui(L, $, J) : !!$;
      if (8 & Q) {
        const ne = O.dynamicProps;
        for (let oe = 0; oe < ne.length; oe++) {
          const ue = ne[oe];
          if ($[ue] !== L[ue] && !$r(J, ue))
            return !0;
        }
      }
      return !1;
    }(v, C, R)) {
      if (D.asyncDep && !D.asyncResolved)
        return void W(D, C, R);
      D.next = C, function(N) {
        const O = Xe.indexOf(N);
        O > qt && Xe.splice(O, 1);
      }(D.update), D.effect.dirty = !0, D.update();
    } else
      C.el = v.el, D.vnode = C;
  }, P = (v, C, R, D, N, O, H) => {
    const L = () => {
      if (v.isMounted) {
        let { next: $, bu: ee, u: Q, parent: J, vnode: ne } = v;
        {
          const pt = ou(v);
          if (pt)
            return $ && ($.el = ne.el, W(v, $, H)), void pt.asyncDep.then(() => {
              v.isUnmounted || L();
            });
        }
        let oe, ue = $;
        En(v, !1), $ ? ($.el = ne.el, W(v, $, H)) : $ = ne, ee && lo(ee), (oe = $.props && $.props.onVnodeBeforeUpdate) && it(oe, J, $, ne), En(v, !0);
        const ge = xs(v), Ee = v.subTree;
        v.subTree = ge, f(Ee, ge, u(Ee.el), dt(Ee), v, N, O), $.el = ge.el, ue === null && Oa(v, ge.el), Q && Je(Q, N), (oe = $.props && $.props.onVnodeUpdated) && Je(() => it(oe, J, $, ne), N);
      } else {
        let $;
        const { el: ee, props: Q } = C, { bm: J, m: ne, parent: oe } = v, ue = Ln(C);
        if (En(v, !1), J && lo(J), !ue && ($ = Q && Q.onVnodeBeforeMount) && it($, oe, C), En(v, !0), ee && Vt) {
          const ge = () => {
            v.subTree = xs(v), Vt(ee, v.subTree, v, N, null);
          };
          ue ? C.type.__asyncLoader().then(() => !v.isUnmounted && ge()) : ge();
        } else {
          const ge = v.subTree = xs(v);
          f(null, ge, R, D, v, N, O), C.el = ge.el;
        }
        if (ne && Je(ne, N), !ue && ($ = Q && Q.onVnodeMounted)) {
          const ge = C;
          Je(() => it($, oe, ge), N);
        }
        (256 & C.shapeFlag || oe && Ln(oe.vnode) && 256 & oe.vnode.shapeFlag) && v.a && Je(v.a, N), v.isMounted = !0, C = R = D = null;
      }
    }, U = v.effect = new po(L, Ve, () => ls(T), v.scope), T = v.update = () => {
      U.dirty && U.run();
    };
    T.id = v.uid, En(v, !0), T();
  }, W = (v, C, R) => {
    C.component = v;
    const D = v.vnode.props;
    v.vnode = C, v.next = null, function(N, O, H, L) {
      const { props: U, attrs: T, vnode: { patchFlag: $ } } = N, ee = me(U), [Q] = N.propsOptions;
      let J = !1;
      if (!(L || $ > 0) || 16 & $) {
        let ne;
        qi(N, O, U, T) && (J = !0);
        for (const oe in ee)
          O && (ve(O, oe) || (ne = St(oe)) !== oe && ve(O, ne)) || (Q ? !H || H[oe] === void 0 && H[ne] === void 0 || (U[oe] = Ks(Q, ee, oe, void 0, N, !0)) : delete U[oe]);
        if (T !== ee)
          for (const oe in T)
            O && ve(O, oe) || (delete T[oe], J = !0);
      } else if (8 & $) {
        const ne = N.vnode.dynamicProps;
        for (let oe = 0; oe < ne.length; oe++) {
          let ue = ne[oe];
          if ($r(N.emitsOptions, ue))
            continue;
          const ge = O[ue];
          if (Q)
            if (ve(T, ue))
              ge !== T[ue] && (T[ue] = ge, J = !0);
            else {
              const Ee = Re(ue);
              U[Ee] = Ks(Q, ee, Ee, ge, N, !1);
            }
          else
            ge !== T[ue] && (T[ue] = ge, J = !0);
        }
      }
      J && en(N, "set", "$attrs");
    }(v, C.props, D, R), pf(v, C.children, R), zn(), Oi(v), qn();
  }, X = (v, C, R, D, N, O, H, L, U = !1) => {
    const T = v && v.children, $ = v ? v.shapeFlag : 0, ee = C.children, { patchFlag: Q, shapeFlag: J } = C;
    if (Q > 0) {
      if (128 & Q)
        return void G(T, ee, R, D, N, O, H, L, U);
      if (256 & Q)
        return void Y(T, ee, R, D, N, O, H, L, U);
    }
    8 & J ? (16 & $ && Fe(T, N, O), ee !== T && c(R, ee)) : 16 & $ ? 16 & J ? G(T, ee, R, D, N, O, H, L, U) : Fe(T, N, O, !0) : (8 & $ && c(R, ""), 16 & J && w(ee, R, D, N, O, H, L, U));
  }, Y = (v, C, R, D, N, O, H, L, U) => {
    const T = (v = v || ao).length, $ = (C = C || ao).length, ee = Math.min(T, $);
    let Q;
    for (Q = 0; Q < ee; Q++) {
      const J = C[Q] = U ? bn(C[Q]) : At(C[Q]);
      f(v[Q], J, R, null, N, O, H, L, U);
    }
    T > $ ? Fe(v, N, O, !0, !1, ee) : w(C, R, D, N, O, H, L, U, ee);
  }, G = (v, C, R, D, N, O, H, L, U) => {
    let T = 0;
    const $ = C.length;
    let ee = v.length - 1, Q = $ - 1;
    for (; T <= ee && T <= Q; ) {
      const J = v[T], ne = C[T] = U ? bn(C[T]) : At(C[T]);
      if (!Ut(J, ne))
        break;
      f(J, ne, R, null, N, O, H, L, U), T++;
    }
    for (; T <= ee && T <= Q; ) {
      const J = v[ee], ne = C[Q] = U ? bn(C[Q]) : At(C[Q]);
      if (!Ut(J, ne))
        break;
      f(J, ne, R, null, N, O, H, L, U), ee--, Q--;
    }
    if (T > ee) {
      if (T <= Q) {
        const J = Q + 1, ne = J < $ ? C[J].el : D;
        for (; T <= Q; )
          f(null, C[T] = U ? bn(C[T]) : At(C[T]), R, ne, N, O, H, L, U), T++;
      }
    } else if (T > Q)
      for (; T <= ee; )
        ae(v[T], N, O, !0), T++;
    else {
      const J = T, ne = T, oe = /* @__PURE__ */ new Map();
      for (T = ne; T <= Q; T++) {
        const Pe = C[T] = U ? bn(C[T]) : At(C[T]);
        Pe.key != null && oe.set(Pe.key, T);
      }
      let ue, ge = 0;
      const Ee = Q - ne + 1;
      let pt = !1, Ci = 0;
      const Ao = new Array(Ee);
      for (T = 0; T < Ee; T++)
        Ao[T] = 0;
      for (T = J; T <= ee; T++) {
        const Pe = v[T];
        if (ge >= Ee) {
          ae(Pe, N, O, !0);
          continue;
        }
        let at;
        if (Pe.key != null)
          at = oe.get(Pe.key);
        else
          for (ue = ne; ue <= Q; ue++)
            if (Ao[ue - ne] === 0 && Ut(Pe, C[ue])) {
              at = ue;
              break;
            }
        at === void 0 ? ae(Pe, N, O, !0) : (Ao[at - ne] = T + 1, at >= Ci ? Ci = at : pt = !0, f(Pe, C[at], R, null, N, O, H, L, U), ge++);
      }
      const _i = pt ? function(Pe) {
        const at = Pe.slice(), tt = [0];
        let rn, ys, Ct, sn, ar;
        const Ud = Pe.length;
        for (rn = 0; rn < Ud; rn++) {
          const ir = Pe[rn];
          if (ir !== 0) {
            if (ys = tt[tt.length - 1], Pe[ys] < ir) {
              at[rn] = ys, tt.push(rn);
              continue;
            }
            for (Ct = 0, sn = tt.length - 1; Ct < sn; )
              ar = Ct + sn >> 1, Pe[tt[ar]] < ir ? Ct = ar + 1 : sn = ar;
            ir < Pe[tt[Ct]] && (Ct > 0 && (at[rn] = tt[Ct - 1]), tt[Ct] = rn);
          }
        }
        for (Ct = tt.length, sn = tt[Ct - 1]; Ct-- > 0; )
          tt[Ct] = sn, sn = at[sn];
        return tt;
      }(Ao) : ao;
      for (ue = _i.length - 1, T = Ee - 1; T >= 0; T--) {
        const Pe = ne + T, at = C[Pe], tt = Pe + 1 < $ ? C[Pe + 1].el : D;
        Ao[T] === 0 ? f(null, at, R, tt, N, O, H, L, U) : pt && (ue < 0 || T !== _i[ue] ? M(at, R, tt, 2) : ue--);
      }
    }
  }, M = (v, C, R, D, N = null) => {
    const { el: O, type: H, transition: L, children: U, shapeFlag: T } = v;
    if (6 & T)
      return void M(v.component.subTree, C, R, D);
    if (128 & T)
      return void v.suspense.move(C, R, D);
    if (64 & T)
      return void H.move(v, C, R, wt);
    if (H === _e) {
      n(O, C, R);
      for (let $ = 0; $ < U.length; $++)
        M(U[$], C, R, D);
      return void n(v.anchor, C, R);
    }
    if (H === $n)
      return void (({ el: $, anchor: ee }, Q, J) => {
        let ne;
        for (; $ && $ !== ee; )
          ne = d($), n($, Q, J), $ = ne;
        n(ee, Q, J);
      })(v, C, R);
    if (D !== 2 && 1 & T && L)
      if (D === 0)
        L.beforeEnter(O), n(O, C, R), Je(() => L.enter(O), N);
      else {
        const { leave: $, delayLeave: ee, afterLeave: Q } = L, J = () => n(O, C, R), ne = () => {
          $(O, () => {
            J(), Q && Q();
          });
        };
        ee ? ee(O, J, ne) : ne();
      }
    else
      n(O, C, R);
  }, ae = (v, C, R, D = !1, N = !1) => {
    const { type: O, props: H, ref: L, children: U, dynamicChildren: T, shapeFlag: $, patchFlag: ee, dirs: Q } = v;
    if (L != null && zr(L, null, R, v, !0), 256 & $)
      return void C.ctx.deactivate(v);
    const J = 1 & $ && Q, ne = !Ln(v);
    let oe;
    if (ne && (oe = H && H.onVnodeBeforeUnmount) && it(oe, C, v), 6 & $)
      Ge(v.component, R, D);
    else {
      if (128 & $)
        return void v.suspense.unmount(R, D);
      J && zt(v, null, C, "beforeUnmount"), 64 & $ ? v.type.remove(v, C, R, N, wt, D) : T && (O !== _e || ee > 0 && 64 & ee) ? Fe(T, C, R, !1, !0) : (O === _e && 384 & ee || !N && 16 & $) && Fe(U, C, R), D && ke(v);
    }
    (ne && (oe = H && H.onVnodeUnmounted) || J) && Je(() => {
      oe && it(oe, C, v), J && zt(v, null, C, "unmounted");
    }, R);
  }, ke = (v) => {
    const { type: C, el: R, anchor: D, transition: N } = v;
    if (C === _e)
      return void Ae(R, D);
    if (C === $n)
      return void (({ el: H, anchor: L }) => {
        let U;
        for (; H && H !== L; )
          U = d(H), o(H), H = U;
        o(L);
      })(v);
    const O = () => {
      o(R), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (1 & v.shapeFlag && N && !N.persisted) {
      const { leave: H, delayLeave: L } = N, U = () => H(R, O);
      L ? L(v.el, O, U) : U();
    } else
      O();
  }, Ae = (v, C) => {
    let R;
    for (; v !== C; )
      R = d(v), o(v), v = R;
    o(C);
  }, Ge = (v, C, R) => {
    const { bum: D, scope: N, update: O, subTree: H, um: L } = v;
    D && lo(D), N.stop(), O && (O.active = !1, ae(H, v, C, R)), L && Je(L, C), Je(() => {
      v.isUnmounted = !0;
    }, C), C && C.pendingBranch && !C.isUnmounted && v.asyncDep && !v.asyncResolved && v.suspenseId === C.pendingId && (C.deps--, C.deps === 0 && C.resolve());
  }, Fe = (v, C, R, D = !1, N = !1, O = 0) => {
    for (let H = O; H < v.length; H++)
      ae(v[H], C, R, D, N);
  }, dt = (v) => 6 & v.shapeFlag ? dt(v.component.subTree) : 128 & v.shapeFlag ? v.suspense.next() : d(v.anchor || v.el), Nt = (v, C, R) => {
    v == null ? C._vnode && ae(C._vnode, null, null, !0) : f(C._vnode || null, v, C, null, null, null, R), Oi(), Lr(), C._vnode = v;
  }, wt = { p: f, um: ae, m: M, r: ke, mt: z, mc: w, pc: X, pbc: q, n: dt, o: e };
  let kt, Vt;
  return t && ([kt, Vt] = t(wt)), { render: Nt, hydrate: kt, createApp: lf(Nt, kt) };
}
function Es({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function En({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function nu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function za(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (Z(o) && Z(r))
    for (let s = 0; s < o.length; s++) {
      const a = o[s];
      let i = r[s];
      1 & i.shapeFlag && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[s] = bn(r[s]), i.el = a.el), n || za(a, i)), i.type === Hn && (i.el = a.el);
    }
}
function ou(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ou(t);
}
const Bo = (e) => e && (e.disabled || e.disabled === ""), Gi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Qi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Is = (e, t) => {
  const n = e && e.to;
  return le(n) ? t ? t(n) : null : n;
};
function vr(e, t, n, { o: { insert: o }, m: r }, s = 2) {
  s === 0 && o(e.targetAnchor, t, n);
  const { el: a, anchor: i, shapeFlag: l, children: c, props: u } = e, d = s === 2;
  if (d && o(a, t, n), (!d || Bo(u)) && 16 & l)
    for (let p = 0; p < c.length; p++)
      r(c[p], t, n, 2);
  d && o(i, t, n);
}
const ru = { name: "Teleport", __isTeleport: !0, process(e, t, n, o, r, s, a, i, l, c) {
  const { mc: u, pc: d, pbc: p, o: { insert: m, querySelector: f, createText: g } } = c, y = Bo(t.props);
  let { shapeFlag: _, children: h, dynamicChildren: x } = t;
  if (e == null) {
    const b = t.el = g(""), w = t.anchor = g("");
    m(b, n, o), m(w, n, o);
    const I = t.target = Is(t.props, f), q = t.targetAnchor = g("");
    I && (m(q, I), a === "svg" || Gi(I) ? a = "svg" : (a === "mathml" || Qi(I)) && (a = "mathml"));
    const A = (E, B) => {
      16 & _ && u(h, E, B, r, s, a, i, l);
    };
    y ? A(n, w) : I && A(I, q);
  } else {
    t.el = e.el;
    const b = t.anchor = e.anchor, w = t.target = e.target, I = t.targetAnchor = e.targetAnchor, q = Bo(e.props), A = q ? n : w, E = q ? b : I;
    if (a === "svg" || Gi(w) ? a = "svg" : (a === "mathml" || Qi(w)) && (a = "mathml"), x ? (p(e.dynamicChildren, x, A, r, s, a, i), za(e, t, !0)) : l || d(e, t, A, E, r, s, a, i, !1), y)
      q ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : vr(t, n, b, c, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const B = t.target = Is(t.props, f);
      B && vr(t, B, null, c, 0);
    } else
      q && vr(t, w, I, c, 1);
  }
  Yi(t);
}, remove(e, t, n, o, { um: r, o: { remove: s } }, a) {
  const { shapeFlag: i, children: l, anchor: c, targetAnchor: u, target: d, props: p } = e;
  if (d && s(u), a && s(c), 16 & i) {
    const m = a || !Bo(p);
    for (let f = 0; f < l.length; f++) {
      const g = l[f];
      r(g, t, n, m, !!g.dynamicChildren);
    }
  }
}, move: vr, hydrate: function(e, t, n, o, r, s, { o: { nextSibling: a, parentNode: i, querySelector: l } }, c) {
  const u = t.target = Is(t.props, l);
  if (u) {
    const d = u._lpa || u.firstChild;
    if (16 & t.shapeFlag)
      if (Bo(t.props))
        t.anchor = c(a(e), t, i(e), n, o, r, s), t.targetAnchor = d;
      else {
        t.anchor = a(e);
        let p = d;
        for (; p; )
          if (p = a(p), p && p.nodeType === 8 && p.data === "teleport anchor") {
            t.targetAnchor = p, u._lpa = t.targetAnchor && a(t.targetAnchor);
            break;
          }
        c(d, t, u, n, o, r, s);
      }
    Yi(t);
  }
  return t.anchor && a(t.anchor);
} };
function Yi(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const _e = Symbol.for("v-fgt"), Hn = Symbol.for("v-txt"), We = Symbol.for("v-cmt"), $n = Symbol.for("v-stc"), Uo = [];
let lt = null;
function K(e = !1) {
  Uo.push(lt = e ? null : []);
}
function su() {
  Uo.pop(), lt = Uo[Uo.length - 1] || null;
}
let Kn = 1;
function Gs(e) {
  Kn += e;
}
function au(e) {
  return e.dynamicChildren = Kn > 0 ? lt || ao : null, su(), Kn > 0 && lt && lt.push(e), e;
}
function he(e, t, n, o, r, s) {
  return au(V(e, t, n, o, r, s, !0));
}
function ie(e, t, n, o, r) {
  return au(j(e, t, n, o, r, !0));
}
function Gn(e) {
  return !!e && e.__v_isVNode === !0;
}
function Ut(e, t) {
  return e.type === t.type && e.key === t.key;
}
function hf(e) {
}
const fs = "__vInternal", iu = ({ key: e }) => e ?? null, Rr = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || qe(e) || re(e) ? { i: ze, r: e, k: t, f: !!n } : e : null);
function V(e, t = null, n = null, o = 0, r = null, s = e === _e ? 0 : 1, a = !1, i = !1) {
  const l = { __v_isVNode: !0, __v_skip: !0, type: e, props: t, key: t && iu(t), ref: t && Rr(t), scopeId: cs, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: s, patchFlag: o, dynamicProps: r, dynamicChildren: null, appContext: null, ctx: ze };
  return i ? (qa(l, n), 128 & s && e.normalize(l)) : n && (l.shapeFlag |= le(n) ? 8 : 16), Kn > 0 && !a && lt && (l.patchFlag > 0 || 6 & s) && l.patchFlag !== 32 && lt.push(l), l;
}
const j = function(e, t = null, n = null, o = 0, r = null, s = !1) {
  if (e && e !== Cc || (e = We), Gn(e)) {
    const l = $t(e, t, !0);
    return n && qa(l, n), Kn > 0 && !s && lt && (6 & l.shapeFlag ? lt[lt.indexOf(e)] = l : lt.push(l)), l.patchFlag |= -2, l;
  }
  a = e, re(a) && "__vccOpts" in a && (e = e.__vccOpts);
  var a;
  if (t) {
    t = er(t);
    let { class: l, style: c } = t;
    l && !le(l) && (t.class = gt(l)), we(c) && (Ra(c) && !Z(c) && (c = xe({}, c)), t.style = Sn(c));
  }
  const i = le(e) ? 1 : _c(e) ? 128 : ((l) => l.__isTeleport)(e) ? 64 : we(e) ? 4 : re(e) ? 2 : 0;
  return V(e, t, n, o, r, i, s, !0);
};
function er(e) {
  return e ? Ra(e) || fs in e ? xe({}, e) : e : null;
}
function $t(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: a } = e, i = t ? Be(o || {}, t) : o;
  return { __v_isVNode: !0, __v_skip: !0, type: e.type, props: i, key: i && iu(i), ref: t && t.ref ? n && r ? Z(r) ? r.concat(Rr(t)) : [r, Rr(t)] : Rr(t) : r, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: a, target: e.target, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== _e ? s === -1 ? 16 : 16 | s : s, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: e.transition, component: e.component, suspense: e.suspense, ssContent: e.ssContent && $t(e.ssContent), ssFallback: e.ssFallback && $t(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
}
function pe(e = " ", t = 0) {
  return j(Hn, null, e, t);
}
function mf(e, t) {
  const n = j($n, null, e);
  return n.staticCount = t, n;
}
function rt(e = "", t = !1) {
  return t ? (K(), ie(We, null, e)) : j(We, null, e);
}
function At(e) {
  return e == null || typeof e == "boolean" ? j(We) : Z(e) ? j(_e, null, e.slice()) : typeof e == "object" ? bn(e) : j(Hn, null, String(e));
}
function bn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : $t(e);
}
function qa(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (Z(t))
    n = 16;
  else if (typeof t == "object") {
    if (65 & o) {
      const r = t.default;
      return void (r && (r._c && (r._d = !1), qa(e, r()), r._c && (r._d = !0)));
    }
    {
      n = 32;
      const r = t._;
      r || fs in t ? r === 3 && ze && (ze.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = ze;
    }
  } else
    re(t) ? (t = { default: t, _ctx: ze }, n = 32) : (t = String(t), 64 & o ? (n = 16, t = [pe(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Be(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = gt([t.class, o.class]));
      else if (r === "style")
        t.style = Sn([t.style, o.style]);
      else if (Yn(r)) {
        const s = t[r], a = o[r];
        !a || s === a || Z(s) && s.includes(a) || (t[r] = s ? [].concat(s, a) : a);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function it(e, t, n, o = null) {
  Rt(e, t, 7, [n, o]);
}
const gf = Kc();
let vf = 0, De = null;
const He = () => De || ze;
let Ja, Qs;
Ja = (e) => {
  De = e;
}, Qs = (e) => {
  Wa = e;
};
const _n = (e) => {
  Ja(e), e.scope.on();
}, kn = () => {
  De && De.scope.off(), Ja(null);
};
function lu(e) {
  return 4 & e.vnode.shapeFlag;
}
let qr, Ys, Wa = !1;
function Zs(e, t, n) {
  re(t) ? e.render = t : we(t) && (e.setupState = Ma(t)), uu(e, n);
}
function cu(e) {
  qr = e, Ys = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Wp));
  };
}
const yf = () => !qr;
function uu(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && qr && !o.render) {
      const r = o.template || $a(e).template;
      if (r) {
        const { isCustomElement: s, compilerOptions: a } = e.appContext.config, { delimiters: i, compilerOptions: l } = o, c = xe(xe({ isCustomElement: s, delimiters: i }, a), l);
        o.render = qr(r, c);
      }
    }
    e.render = o.render || Ve, Ys && Ys(e);
  }
  _n(e), zn();
  try {
    rf(e);
  } finally {
    qn(), kn();
  }
}
function du(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { get attrs() {
    return function(n) {
      return n.attrsProxy || (n.attrsProxy = new Proxy(n.attrs, { get: (o, r) => (ut(n, 0, "$attrs"), o[r]) }));
    }(e);
  }, slots: e.slots, emit: e.emit, expose: t };
}
function hs(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ma(is(e.exposed)), { get: (t, n) => n in t ? t[n] : n in Oo ? Oo[n](e) : void 0, has: (t, n) => n in t || n in Oo }));
}
function Xs(e, t = !0) {
  return re(e) ? e.displayName || e.name : e.name || t && e.__name;
}
const ye = (e, t) => function(n, o, r = !1) {
  let s, a;
  const i = re(n);
  return i ? (s = n, a = Ve) : (s = n.get, a = n.set), new pc(s, a, i || !a, r);
}(e, 0, Wa);
function Jt(e, t, n) {
  const o = arguments.length;
  return o === 2 ? we(t) && !Z(t) ? Gn(t) ? j(e, null, [t]) : j(e, t) : j(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Gn(n) && (n = [n]), j(e, t, n));
}
function bf() {
}
function xf(e, t, n, o) {
  const r = n[o];
  if (r && pu(r, e))
    return r;
  const s = t();
  return s.memo = e.slice(), n[o] = s;
}
function pu(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (Lt(n[o], t[o]))
      return !1;
  return Kn > 0 && lt && lt.push(e), !0;
}
const fu = "3.4.3", wf = Ve, kf = void 0, Cf = Ve, xn = typeof document < "u" ? document : null, Zi = xn && xn.createElement("template"), _f = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, o) => {
  const r = t === "svg" ? xn.createElementNS("http://www.w3.org/2000/svg", e) : t === "mathml" ? xn.createElementNS("http://www.w3.org/1998/Math/MathML", e) : xn.createElement(e, n ? { is: n } : void 0);
  return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
}, createText: (e) => xn.createTextNode(e), createComment: (e) => xn.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => xn.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, o, r, s) {
  const a = n ? n.previousSibling : t.lastChild;
  if (r && (r === s || r.nextSibling))
    for (; t.insertBefore(r.cloneNode(!0), n), r !== s && (r = r.nextSibling); )
      ;
  else {
    Zi.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
    const i = Zi.content;
    if (o === "svg" || o === "mathml") {
      const l = i.firstChild;
      for (; l.firstChild; )
        i.appendChild(l.firstChild);
      i.removeChild(l);
    }
    t.insertBefore(i, n);
  }
  return [a ? a.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, cn = "transition", Eo = "animation", ho = Symbol("_vtc"), Ha = (e, { slots: t }) => Jt(Nc, mu(e), t);
Ha.displayName = "Transition";
const hu = { name: String, type: String, css: { type: Boolean, default: !0 }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Af = Ha.props = xe({}, La, hu), In = (e, t = []) => {
  Z(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Xi = (e) => !!e && (Z(e) ? e.some((t) => t.length > 1) : e.length > 1);
function mu(e) {
  const t = {};
  for (const S in e)
    S in hu || (t[S] = e[S]);
  if (e.css === !1)
    return t;
  const { name: n = "v", type: o, duration: r, enterFromClass: s = `${n}-enter-from`, enterActiveClass: a = `${n}-enter-active`, enterToClass: i = `${n}-enter-to`, appearFromClass: l = s, appearActiveClass: c = a, appearToClass: u = i, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, f = function(S) {
    if (S == null)
      return null;
    if (we(S))
      return [Ts(S.enter), Ts(S.leave)];
    {
      const P = Ts(S);
      return [P, P];
    }
  }(r), g = f && f[0], y = f && f[1], { onBeforeEnter: _, onEnter: h, onEnterCancelled: x, onLeave: b, onLeaveCancelled: w, onBeforeAppear: I = _, onAppear: q = h, onAppearCancelled: A = x } = t, E = (S, P, W) => {
    gn(S, P ? u : i), gn(S, P ? c : a), W && W();
  }, B = (S, P) => {
    S._isLeaving = !1, gn(S, d), gn(S, m), gn(S, p), P && P();
  }, z = (S) => (P, W) => {
    const X = S ? q : h, Y = () => E(P, S, W);
    In(X, [P, Y]), el(() => {
      gn(P, S ? l : s), Gt(P, S ? u : i), Xi(X) || tl(P, o, g, Y);
    });
  };
  return xe(t, { onBeforeEnter(S) {
    In(_, [S]), Gt(S, s), Gt(S, a);
  }, onBeforeAppear(S) {
    In(I, [S]), Gt(S, l), Gt(S, c);
  }, onEnter: z(!1), onAppear: z(!0), onLeave(S, P) {
    S._isLeaving = !0;
    const W = () => B(S, P);
    Gt(S, d), vu(), Gt(S, p), el(() => {
      S._isLeaving && (gn(S, d), Gt(S, m), Xi(b) || tl(S, o, y, W));
    }), In(b, [S, W]);
  }, onEnterCancelled(S) {
    E(S, !1), In(x, [S]);
  }, onAppearCancelled(S) {
    E(S, !0), In(A, [S]);
  }, onLeaveCancelled(S) {
    B(S), In(w, [S]);
  } });
}
function Ts(e) {
  return Ur(e);
}
function Gt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[ho] || (e[ho] = /* @__PURE__ */ new Set())).add(t);
}
function gn(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[ho];
  n && (n.delete(t), n.size || (e[ho] = void 0));
}
function el(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Sf = 0;
function tl(e, t, n, o) {
  const r = e._endId = ++Sf, s = () => {
    r === e._endId && o();
  };
  if (n)
    return setTimeout(s, n);
  const { type: a, timeout: i, propCount: l } = gu(e, t);
  if (!a)
    return o();
  const c = a + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(c, p), s();
  }, p = (m) => {
    m.target === e && ++u >= l && d();
  };
  setTimeout(() => {
    u < l && d();
  }, i + 1), e.addEventListener(c, p);
}
function gu(e, t) {
  const n = window.getComputedStyle(e), o = (m) => (n[m] || "").split(", "), r = o(`${cn}Delay`), s = o(`${cn}Duration`), a = nl(r, s), i = o(`${Eo}Delay`), l = o(`${Eo}Duration`), c = nl(i, l);
  let u = null, d = 0, p = 0;
  return t === cn ? a > 0 && (u = cn, d = a, p = s.length) : t === Eo ? c > 0 && (u = Eo, d = c, p = l.length) : (d = Math.max(a, c), u = d > 0 ? a > c ? cn : Eo : null, p = u ? u === cn ? s.length : l.length : 0), { type: u, timeout: d, propCount: p, hasTransform: u === cn && /\b(transform|all)(,|$)/.test(o(`${cn}Property`).toString()) };
}
function nl(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => ol(n) + ol(e[o])));
}
function ol(e) {
  return e === "auto" ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."));
}
function vu() {
  return document.body.offsetHeight;
}
const Ka = Symbol("_vod"), Ef = { beforeMount(e, { value: t }, { transition: n }) {
  e[Ka] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Io(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: o }) {
  !t != !n && (o ? t ? (o.beforeEnter(e), Io(e, !0), o.enter(e)) : o.leave(e, () => {
    Io(e, !1);
  }) : Io(e, t));
}, beforeUnmount(e, { value: t }) {
  Io(e, t);
} };
function Io(e, t) {
  e.style.display = t ? e[Ka] : "none";
}
const yu = Symbol("");
function If(e) {
  const t = He();
  if (!t)
    return;
  const n = t.ut = (r = e(t.proxy)) => {
    Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((s) => ta(s, r));
  }, o = () => {
    const r = e(t.proxy);
    ea(t.subTree, r), n(r);
  };
  Ec(o), bt(() => {
    const r = new MutationObserver(o);
    r.observe(t.subTree.el.parentNode, { childList: !0 }), on(() => r.disconnect());
  });
}
function ea(e, t) {
  if (128 & e.shapeFlag) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      ea(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (1 & e.shapeFlag && e.el)
    ta(e.el, t);
  else if (e.type === _e)
    e.children.forEach((n) => ea(n, t));
  else if (e.type === $n) {
    let { el: n, anchor: o } = e;
    for (; n && (ta(n, t), n !== o); )
      n = n.nextSibling;
  }
}
function ta(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let o = "";
    for (const r in t)
      n.setProperty(`--${r}`, t[r]), o += `--${r}: ${t[r]};`;
    n[yu] = o;
  }
}
const rl = /\s*!important$/;
function na(e, t, n) {
  if (Z(n))
    n.forEach((o) => na(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = function(r, s) {
      const a = Rs[s];
      if (a)
        return a;
      let i = Re(s);
      if (i !== "filter" && i in r)
        return Rs[s] = i;
      i = Zn(i);
      for (let l = 0; l < sl.length; l++) {
        const c = sl[l] + i;
        if (c in r)
          return Rs[s] = c;
      }
      return s;
    }(e, t);
    rl.test(n) ? e.setProperty(St(o), n.replace(rl, ""), "important") : e[o] = n;
  }
}
const sl = ["Webkit", "Moz", "ms"], Rs = {}, al = "http://www.w3.org/1999/xlink";
function Zt(e, t, n, o) {
  e.addEventListener(t, n, o);
}
const il = Symbol("_vei");
function Tf(e, t, n, o, r = null) {
  const s = e[il] || (e[il] = {}), a = s[t];
  if (o && a)
    a.value = o;
  else {
    const [i, l] = function(c) {
      let u;
      if (ll.test(c)) {
        let p;
        for (u = {}; p = c.match(ll); )
          c = c.slice(0, c.length - p[0].length), u[p[0].toLowerCase()] = !0;
      }
      return [c[2] === ":" ? c.slice(3) : St(c.slice(2)), u];
    }(t);
    if (o) {
      const c = s[t] = function(u, d) {
        const p = (m) => {
          if (m._vts) {
            if (m._vts <= p.attached)
              return;
          } else
            m._vts = Date.now();
          Rt(function(f, g) {
            if (Z(g)) {
              const y = f.stopImmediatePropagation;
              return f.stopImmediatePropagation = () => {
                y.call(f), f._stopped = !0;
              }, g.map((_) => (h) => !h._stopped && _ && _(h));
            }
            return g;
          }(m, p.value), d, 5, [m]);
        };
        return p.value = u, p.attached = Nf(), p;
      }(o, r);
      Zt(e, i, c, l);
    } else
      a && (function(c, u, d, p) {
        c.removeEventListener(u, d, p);
      }(e, i, a, l), s[t] = void 0);
  }
}
const ll = /(?:Once|Passive|Capture)$/;
let Ns = 0;
const Rf = Promise.resolve(), Nf = () => Ns || (Rf.then(() => Ns = 0), Ns = Date.now()), cl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ga(e, t) {
  const n = /* @__PURE__ */ se(e);
  class o extends ms {
    constructor(s) {
      super(n, s, t);
    }
  }
  return o.def = n, o;
}
/*! #__NO_SIDE_EFFECTS__ */
const Bf = /* @__NO_SIDE_EFFECTS__ */ (e) => /* @__PURE__ */ Ga(e, Ru), Mf = typeof HTMLElement < "u" ? HTMLElement : class {
};
class ms extends Mf {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), jt(() => {
      this._connected || (ra(null, this.shadowRoot), this._instance = null);
    });
  }
  _resolveDef() {
    this._resolved = !0;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver((o) => {
      for (const r of o)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (o, r = !1) => {
      const { props: s, styles: a } = o;
      let i;
      if (s && !Z(s))
        for (const l in s) {
          const c = s[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = Ur(this._props[l])), (i || (i = /* @__PURE__ */ Object.create(null)))[Re(l)] = !0);
        }
      this._numberProps = i, r && this._resolveProps(o), this._applyStyles(a), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((o) => t(o, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, o = Z(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && o.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of o.map(Re))
      Object.defineProperty(this, r, { get() {
        return this._getProp(r);
      }, set(s) {
        this._setProp(r, s);
      } });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const o = Re(t);
    this._numberProps && this._numberProps[o] && (n = Ur(n)), this._setProp(o, n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, o = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), o && (n === !0 ? this.setAttribute(St(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(St(t), n + "") : n || this.removeAttribute(St(t))));
  }
  _update() {
    ra(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = j(this._def, xe({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const o = (s, a) => {
        this.dispatchEvent(new CustomEvent(s, { detail: a }));
      };
      n.emit = (s, ...a) => {
        o(s, a), St(s) !== s && o(St(s), a);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof ms) {
          n.parent = r._instance, n.provides = r._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const o = document.createElement("style");
      o.textContent = n, this.shadowRoot.appendChild(o);
    });
  }
}
function Ff(e = "$style") {
  {
    const t = He();
    if (!t)
      return be;
    const n = t.type.__cssModules;
    return n && n[e] || be;
  }
}
const bu = /* @__PURE__ */ new WeakMap(), xu = /* @__PURE__ */ new WeakMap(), Jr = Symbol("_moveCb"), ul = Symbol("_enterCb"), Of = { name: "TransitionGroup", props: xe({}, Af, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = He(), o = Da();
  let r, s;
  return ps(() => {
    if (!r.length)
      return;
    const a = e.moveClass || `${e.name || "v"}-move`;
    if (!function(l, c, u) {
      const d = l.cloneNode(), p = l[ho];
      p && p.forEach((g) => {
        g.split(/\s+/).forEach((y) => y && d.classList.remove(y));
      }), u.split(/\s+/).forEach((g) => g && d.classList.add(g)), d.style.display = "none";
      const m = c.nodeType === 1 ? c : c.parentNode;
      m.appendChild(d);
      const { hasTransform: f } = gu(d);
      return m.removeChild(d), f;
    }(r[0].el, n.vnode.el, a))
      return;
    r.forEach(Pf), r.forEach(Df);
    const i = r.filter(Lf);
    vu(), i.forEach((l) => {
      const c = l.el, u = c.style;
      Gt(c, a), u.transform = u.webkitTransform = u.transitionDuration = "";
      const d = c[Jr] = (p) => {
        p && p.target !== c || p && !/transform$/.test(p.propertyName) || (c.removeEventListener("transitionend", d), c[Jr] = null, gn(c, a));
      };
      c.addEventListener("transitionend", d);
    });
  }), () => {
    const a = me(e), i = mu(a);
    let l = a.tag || _e;
    r = s, s = t.default ? us(t.default()) : [];
    for (let c = 0; c < s.length; c++) {
      const u = s[c];
      u.key != null && Wn(u, fo(u, i, o, n));
    }
    if (r)
      for (let c = 0; c < r.length; c++) {
        const u = r[c];
        Wn(u, fo(u, i, o, n)), bu.set(u, u.el.getBoundingClientRect());
      }
    return j(l, null, s);
  };
} }, Uf = Of;
function Pf(e) {
  const t = e.el;
  t[Jr] && t[Jr](), t[ul] && t[ul]();
}
function Df(e) {
  xu.set(e, e.el.getBoundingClientRect());
}
function Lf(e) {
  const t = bu.get(e), n = xu.get(e), o = t.left - n.left, r = t.top - n.top;
  if (o || r) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${o}px,${r}px)`, s.transitionDuration = "0s", e;
  }
}
const An = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Z(t) ? (n) => lo(t, n) : t;
};
function $f(e) {
  e.target.composing = !0;
}
function dl(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Tt = Symbol("_assign"), oa = { created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
  e[Tt] = An(r);
  const s = o || r.props && r.props.type === "number";
  Zt(e, t ? "change" : "input", (a) => {
    if (a.target.composing)
      return;
    let i = e.value;
    n && (i = i.trim()), s && (i = Or(i)), e[Tt](i);
  }), n && Zt(e, "change", () => {
    e.value = e.value.trim();
  }), t || (Zt(e, "compositionstart", $f), Zt(e, "compositionend", dl), Zt(e, "change", dl));
}, mounted(e, { value: t }) {
  e.value = t ?? "";
}, beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: o, number: r } }, s) {
  if (e[Tt] = An(s), e.composing)
    return;
  const a = t ?? "";
  if ((r || e.type === "number" ? Or(e.value) : e.value) !== a) {
    if (document.activeElement === e && e.type !== "range" && (n || o && e.value.trim() === a))
      return;
    e.value = a;
  }
} }, wu = { deep: !0, created(e, t, n) {
  e[Tt] = An(n), Zt(e, "change", () => {
    const o = e._modelValue, r = mo(e), s = e.checked, a = e[Tt];
    if (Z(o)) {
      const i = ka(o, r), l = i !== -1;
      if (s && !l)
        a(o.concat(r));
      else if (!s && l) {
        const c = [...o];
        c.splice(i, 1), a(c);
      }
    } else if (xo(o)) {
      const i = new Set(o);
      s ? i.add(r) : i.delete(r), a(i);
    } else
      a(_u(e, s));
  });
}, mounted: pl, beforeUpdate(e, t, n) {
  e[Tt] = An(n), pl(e, t, n);
} };
function pl(e, { value: t, oldValue: n }, o) {
  e._modelValue = t, Z(t) ? e.checked = ka(t, o.props.value) > -1 : xo(t) ? e.checked = t.has(o.props.value) : t !== n && (e.checked = Vn(t, _u(e, !0)));
}
const ku = { created(e, { value: t }, n) {
  e.checked = Vn(t, n.props.value), e[Tt] = An(n), Zt(e, "change", () => {
    e[Tt](mo(e));
  });
}, beforeUpdate(e, { value: t, oldValue: n }, o) {
  e[Tt] = An(o), t !== n && (e.checked = Vn(t, o.props.value));
} }, Cu = { deep: !0, created(e, { value: t, modifiers: { number: n } }, o) {
  const r = xo(t);
  Zt(e, "change", () => {
    const s = Array.prototype.filter.call(e.options, (a) => a.selected).map((a) => n ? Or(mo(a)) : mo(a));
    e[Tt](e.multiple ? r ? new Set(s) : s : s[0]);
  }), e[Tt] = An(o);
}, mounted(e, { value: t }) {
  fl(e, t);
}, beforeUpdate(e, t, n) {
  e[Tt] = An(n);
}, updated(e, { value: t }) {
  fl(e, t);
} };
function fl(e, t) {
  const n = e.multiple;
  if (!n || Z(t) || xo(t)) {
    for (let o = 0, r = e.options.length; o < r; o++) {
      const s = e.options[o], a = mo(s);
      if (n)
        s.selected = Z(t) ? ka(t, a) > -1 : t.has(a);
      else if (Vn(mo(s), t))
        return void (e.selectedIndex !== o && (e.selectedIndex = o));
    }
    n || e.selectedIndex === -1 || (e.selectedIndex = -1);
  }
}
function mo(e) {
  return "_value" in e ? e._value : e.value;
}
function _u(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Au = { created(e, t, n) {
  yr(e, t, n, null, "created");
}, mounted(e, t, n) {
  yr(e, t, n, null, "mounted");
}, beforeUpdate(e, t, n, o) {
  yr(e, t, n, o, "beforeUpdate");
}, updated(e, t, n, o) {
  yr(e, t, n, o, "updated");
} };
function yr(e, t, n, o, r) {
  const s = function(a, i) {
    switch (a) {
      case "SELECT":
        return Cu;
      case "TEXTAREA":
        return oa;
      default:
        switch (i) {
          case "checkbox":
            return wu;
          case "radio":
            return ku;
          default:
            return oa;
        }
    }
  }(e.tagName, n.props && n.props.type)[r];
  s && s(e, t, n, o);
}
const jf = ["ctrl", "shift", "alt", "meta"], Vf = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => jf.some((n) => e[`${n}Key`] && !t.includes(n)) }, Po = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const i = Vf[t[a]];
      if (i && i(r, t))
        return;
    }
    return e(r, ...s);
  });
}, zf = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" }, Su = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (r) => {
    if (!("key" in r))
      return;
    const s = St(r.key);
    return t.some((a) => a === s || zf[a] === s) ? e(r) : void 0;
  });
}, Eu = xe({ patchProp: (e, t, n, o, r, s, a, i, l) => {
  const c = r === "svg";
  t === "class" ? function(u, d, p) {
    const m = u[ho];
    m && (d = (d ? [d, ...m] : [...m]).join(" ")), d == null ? u.removeAttribute("class") : p ? u.setAttribute("class", d) : u.className = d;
  }(e, o, c) : t === "style" ? function(u, d, p) {
    const m = u.style, f = le(p);
    if (p && !f) {
      if (d && !le(d))
        for (const g in d)
          p[g] == null && na(m, g, "");
      for (const g in p)
        na(m, g, p[g]);
    } else {
      const g = m.display;
      if (f) {
        if (d !== p) {
          const y = m[yu];
          y && (p += ";" + y), m.cssText = p;
        }
      } else
        d && u.removeAttribute("style");
      Ka in u && (m.display = g);
    }
  }(e, n, o) : Yn(t) ? ya(t) || Tf(e, t, 0, o, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : function(u, d, p, m) {
    if (m)
      return d === "innerHTML" || d === "textContent" || !!(d in u && cl(d) && re(p));
    if (d === "spellcheck" || d === "draggable" || d === "translate" || d === "form" || d === "list" && u.tagName === "INPUT" || d === "type" && u.tagName === "TEXTAREA")
      return !1;
    if (d === "width" || d === "height") {
      const f = u.tagName;
      if (f === "IMG" || f === "VIDEO" || f === "CANVAS" || f === "SOURCE")
        return !1;
    }
    return cl(d) && le(p) ? !1 : d in u;
  }(e, t, o, c)) ? function(u, d, p, m, f, g, y) {
    if (d === "innerHTML" || d === "textContent")
      return m && y(m, f, g), void (u[d] = p ?? "");
    const _ = u.tagName;
    if (d === "value" && _ !== "PROGRESS" && !_.includes("-")) {
      u._value = p;
      const x = p ?? "";
      return (_ === "OPTION" ? u.getAttribute("value") : u.value) !== x && (u.value = x), void (p == null && u.removeAttribute(d));
    }
    let h = !1;
    if (p === "" || p == null) {
      const x = typeof u[d];
      x === "boolean" ? p = Ei(p) : p == null && x === "string" ? (p = "", h = !0) : x === "number" && (p = 0, h = !0);
    }
    try {
      u[d] = p;
    } catch {
    }
    h && u.removeAttribute(d);
  }(e, t, o, s, a, i, l) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), function(u, d, p, m, f) {
    if (m && d.startsWith("xlink:"))
      p == null ? u.removeAttributeNS(al, d.slice(6, d.length)) : u.setAttributeNS(al, d, p);
    else {
      const g = Yd(d);
      p == null || g && !Ei(p) ? u.removeAttribute(d) : u.setAttribute(d, g ? "" : p);
    }
  }(e, t, o, c));
} }, _f);
let Do, hl = !1;
function Iu() {
  return Do || (Do = Xc(Eu));
}
function Tu() {
  return Do = hl ? Do : eu(Eu), hl = !0, Do;
}
const ra = (...e) => {
  Iu().render(...e);
}, Ru = (...e) => {
  Tu().hydrate(...e);
}, qf = (...e) => {
  const t = Iu().createApp(...e), { mount: n } = t;
  return t.mount = (o) => {
    const r = Bu(o);
    if (!r)
      return;
    const s = t._component;
    re(s) || s.render || s.template || (s.template = r.innerHTML), r.innerHTML = "";
    const a = n(r, !1, Nu(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
  }, t;
}, Jf = (...e) => {
  const t = Tu().createApp(...e), { mount: n } = t;
  return t.mount = (o) => {
    const r = Bu(o);
    if (r)
      return n(r, !0, Nu(r));
  }, t;
};
function Nu(e) {
  return e instanceof SVGElement ? "svg" : typeof MathMLElement == "function" && e instanceof MathMLElement ? "mathml" : void 0;
}
function Bu(e) {
  return le(e) ? document.querySelector(e) : e;
}
const Wf = Ve;
var Hf = Object.freeze({ __proto__: null, BaseTransition: Nc, BaseTransitionPropsValidators: La, Comment: We, DeprecationTypes: null, EffectScope: Ca, ErrorCodes: Tp, ErrorTypeStrings: null, Fragment: _e, KeepAlive: Vp, ReactiveEffect: po, Static: $n, Suspense: Dp, Teleport: ru, Text: Hn, TrackOpTypes: Sp, Transition: Ha, TransitionGroup: Uf, TriggerOpTypes: Ep, VueElement: ms, assertNumber: Ip, callWithAsyncErrorHandling: Rt, callWithErrorHandling: tn, camelize: Re, capitalize: Zn, cloneVNode: $t, compatUtils: null, computed: ye, createApp: qf, createBlock: ie, createCommentVNode: rt, createElementBlock: he, createElementVNode: V, createHydrationRenderer: eu, createPropsRestProxy: nf, createRenderer: Xc, createSSRApp: Jf, createSlots: qp, createStaticVNode: mf, createTextVNode: pe, createVNode: j, customRef: hc, defineAsyncComponent: jp, defineComponent: se, defineCustomElement: Ga, defineEmits: Kp, defineExpose: Gp, defineModel: Zp, defineOptions: Qp, defineProps: Hp, defineSSRCustomElement: Bf, defineSlots: Yp, devtools: kf, effect: Xd, effectScope: _a, getCurrentInstance: He, getCurrentScope: Aa, getTransitionRawChildren: us, guardReactiveProps: er, h: Jt, handleError: Xn, hasInjectionContext: cf, hydrate: Ru, initCustomFormatter: bf, initDirectivesForSSR: Wf, inject: uo, isMemoSame: pu, isProxy: Ra, isReactive: Dn, isReadonly: Jn, isRef: qe, isRuntimeOnly: yf, isShallow: Bn, isVNode: Gn, markRaw: is, mergeDefaults: tf, mergeModels: Wc, mergeProps: Be, nextTick: jt, normalizeClass: gt, normalizeProps: os, normalizeStyle: Sn, onActivated: Mc, onBeforeMount: Uc, onBeforeUnmount: Xo, onBeforeUpdate: Pc, onDeactivated: Fc, onErrorCaptured: jc, onMounted: bt, onRenderTracked: $c, onRenderTriggered: Lc, onScopeDispose: Yl, onServerPrefetch: Dc, onUnmounted: on, onUpdated: ps, openBlock: K, popScopeId: kc, provide: ja, proxyRefs: Ma, pushScopeId: wc, queuePostFlushCb: Dr, reactive: ko, readonly: Ta, ref: te, registerRuntimeCompiler: cu, render: ra, renderList: zs, renderSlot: fe, resolveComponent: Op, resolveDirective: Pp, resolveDynamicComponent: Up, resolveFilter: null, resolveTransitionHooks: fo, setBlockTracking: Gs, setDevtoolsHook: Cf, setTransitionHooks: Wn, shallowReactive: dc, shallowReadonly: vp, shallowRef: yp, ssrContextKey: Sc, ssrUtils: null, stop: ep, toDisplayString: Te, toHandlerKey: On, toHandlers: Jp, toRaw: me, toRef: mc, toRefs: Co, toValue: wp, transformVNodeArgs: hf, triggerRef: xp, unref: k, useAttrs: zc, useCssModule: Ff, useCssVars: If, useModel: qc, useSSRContext: Lp, useSlots: ef, useTransitionState: Da, vModelCheckbox: wu, vModelDynamic: Au, vModelRadio: ku, vModelSelect: Cu, vModelText: oa, vShow: Ef, version: fu, warn: wf, watch: et, watchEffect: Cn, watchPostEffect: Ec, watchSyncEffect: Ic, withAsyncContext: of, withCtx: F, withDefaults: Xp, withDirectives: Rc, withKeys: Su, withMemo: xf, withModifiers: Po, withScopeId: Bp });
const Wo = Symbol(""), Lo = Symbol(""), Qa = Symbol(""), Wr = Symbol(""), Mu = Symbol(""), Qn = Symbol(""), Fu = Symbol(""), Ou = Symbol(""), Ya = Symbol(""), Za = Symbol(""), tr = Symbol(""), Xa = Symbol(""), Uu = Symbol(""), ei = Symbol(""), sa = Symbol(""), ti = Symbol(""), Kf = Symbol(""), ni = Symbol(""), oi = Symbol(""), Pu = Symbol(""), Du = Symbol(""), gs = Symbol(""), Hr = Symbol(""), ri = Symbol(""), si = Symbol(""), Ho = Symbol(""), nr = Symbol(""), ai = Symbol(""), aa = Symbol(""), Gf = Symbol(""), ia = Symbol(""), Kr = Symbol(""), Qf = Symbol(""), Yf = Symbol(""), ii = Symbol(""), Zf = Symbol(""), Xf = Symbol(""), li = Symbol(""), Lu = Symbol(""), go = { [Wo]: "Fragment", [Lo]: "Teleport", [Qa]: "Suspense", [Wr]: "KeepAlive", [Mu]: "BaseTransition", [Qn]: "openBlock", [Fu]: "createBlock", [Ou]: "createElementBlock", [Ya]: "createVNode", [Za]: "createElementVNode", [tr]: "createCommentVNode", [Xa]: "createTextVNode", [Uu]: "createStaticVNode", [ei]: "resolveComponent", [sa]: "resolveDynamicComponent", [ti]: "resolveDirective", [Kf]: "resolveFilter", [ni]: "withDirectives", [oi]: "renderList", [Pu]: "renderSlot", [Du]: "createSlots", [gs]: "toDisplayString", [Hr]: "mergeProps", [ri]: "normalizeClass", [si]: "normalizeStyle", [Ho]: "normalizeProps", [nr]: "guardReactiveProps", [ai]: "toHandlers", [aa]: "camelize", [Gf]: "capitalize", [ia]: "toHandlerKey", [Kr]: "setBlockTracking", [Qf]: "pushScopeId", [Yf]: "popScopeId", [ii]: "withCtx", [Zf]: "unref", [Xf]: "isRef", [li]: "withMemo", [Lu]: "isMemoSame" }, xt = { start: { line: 1, column: 1, offset: 0 }, end: { line: 1, column: 1, offset: 0 }, source: "" };
function Ko(e, t, n, o, r, s, a, i = !1, l = !1, c = !1, u = xt) {
  return e && (i ? (e.helper(Qn), e.helper(bo(e.inSSR, c))) : e.helper(yo(e.inSSR, c)), a && e.helper(ni)), { type: 13, tag: t, props: n, children: o, patchFlag: r, dynamicProps: s, directives: a, isBlock: i, disableTracking: l, isComponent: c, loc: u };
}
function Go(e, t = xt) {
  return { type: 17, loc: t, elements: e };
}
function Et(e, t = xt) {
  return { type: 15, loc: t, properties: e };
}
function Ne(e, t) {
  return { type: 16, loc: xt, key: le(e) ? de(e, !0) : e, value: t };
}
function de(e, t = !1, n = xt, o = 0) {
  return { type: 4, loc: n, content: e, isStatic: t, constType: t ? 3 : o };
}
function Pt(e, t = xt) {
  return { type: 8, loc: t, children: e };
}
function je(e, t = [], n = xt) {
  return { type: 14, loc: n, callee: e, arguments: t };
}
function vo(e, t = void 0, n = !1, o = !1, r = xt) {
  return { type: 18, params: e, returns: t, newline: n, isSlot: o, loc: r };
}
function la(e, t, n, o = !0) {
  return { type: 19, test: e, consequent: t, alternate: n, newline: o, loc: xt };
}
function yo(e, t) {
  return e || t ? Ya : Za;
}
function bo(e, t) {
  return e || t ? Fu : Ou;
}
function ci(e, { helper: t, removeHelper: n, inSSR: o }) {
  e.isBlock || (e.isBlock = !0, n(yo(o, e.isComponent)), t(Qn), t(bo(o, e.isComponent)));
}
const ml = new Uint8Array([123, 123]), gl = new Uint8Array([125, 125]);
function vl(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function ht(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function un(e) {
  return e === 47 || e === 62 || ht(e);
}
function Gr(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const Qe = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) };
function ui(e) {
  throw e;
}
function $u(e) {
}
function Ue(e, t, n, o) {
  const r = new SyntaxError(`https://vuejs.org/errors/#compiler-${e}`);
  return r.code = e, r.loc = t, r;
}
const ct = (e) => e.type === 4 && e.isStatic;
function ju(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return Lo;
    case "Suspense":
    case "suspense":
      return Qa;
    case "KeepAlive":
    case "keep-alive":
      return Wr;
    case "BaseTransition":
    case "base-transition":
      return Mu;
  }
}
const eh = /^\d|[^\$\w]/, di = (e) => !eh.test(e), th = /[A-Za-z_$\xA0-\uFFFF]/, nh = /[\.\?\w$\xA0-\uFFFF]/, oh = /\s+[.[]\s*|\s*[.[]\s+/g, Vu = (e) => {
  e = e.trim().replace(oh, (a) => a.trim());
  let t = 0, n = [], o = 0, r = 0, s = null;
  for (let a = 0; a < e.length; a++) {
    const i = e.charAt(a);
    switch (t) {
      case 0:
        if (i === "[")
          n.push(t), t = 1, o++;
        else if (i === "(")
          n.push(t), t = 2, r++;
        else if (!(a === 0 ? th : nh).test(i))
          return !1;
        break;
      case 1:
        i === "'" || i === '"' || i === "`" ? (n.push(t), t = 3, s = i) : i === "[" ? o++ : i === "]" && (--o || (t = n.pop()));
        break;
      case 2:
        if (i === "'" || i === '"' || i === "`")
          n.push(t), t = 3, s = i;
        else if (i === "(")
          r++;
        else if (i === ")") {
          if (a === e.length - 1)
            return !1;
          --r || (t = n.pop());
        }
        break;
      case 3:
        i === s && (t = n.pop(), s = null);
    }
  }
  return !o && !r;
};
function Ot(e, t, n = !1) {
  for (let o = 0; o < e.props.length; o++) {
    const r = e.props[o];
    if (r.type === 7 && (n || r.exp) && (le(t) ? r.name === t : t.test(r.name)))
      return r;
  }
}
function vs(e, t, n = !1, o = !1) {
  for (let r = 0; r < e.props.length; r++) {
    const s = e.props[r];
    if (s.type === 6) {
      if (n)
        continue;
      if (s.name === t && (s.value || o))
        return s;
    } else if (s.name === "bind" && (s.exp || o) && ro(s.arg, t))
      return s;
  }
}
function ro(e, t) {
  return !(!e || !ct(e) || e.content !== t);
}
function Bs(e) {
  return e.type === 5 || e.type === 2;
}
function rh(e) {
  return e.type === 7 && e.name === "slot";
}
function Qr(e) {
  return e.type === 1 && e.tagType === 3;
}
function Yr(e) {
  return e.type === 1 && e.tagType === 2;
}
const sh = /* @__PURE__ */ new Set([Ho, nr]);
function zu(e, t = []) {
  if (e && !le(e) && e.type === 14) {
    const n = e.callee;
    if (!le(n) && sh.has(n))
      return zu(e.arguments[0], t.concat(e));
  }
  return [e, t];
}
function Zr(e, t, n) {
  let o, r, s = e.type === 13 ? e.props : e.arguments[2], a = [];
  if (s && !le(s) && s.type === 14) {
    const i = zu(s);
    s = i[0], a = i[1], r = a[a.length - 1];
  }
  if (s == null || le(s))
    o = Et([t]);
  else if (s.type === 14) {
    const i = s.arguments[0];
    le(i) || i.type !== 15 ? s.callee === ai ? o = je(n.helper(Hr), [Et([t]), s]) : s.arguments.unshift(Et([t])) : yl(t, i) || i.properties.unshift(t), !o && (o = s);
  } else
    s.type === 15 ? (yl(t, s) || s.properties.unshift(t), o = s) : (o = je(n.helper(Hr), [Et([t]), s]), r && r.callee === nr && (r = a[a.length - 2]));
  e.type === 13 ? r ? r.arguments[0] = o : e.props = o : r ? r.arguments[0] = o : e.arguments[2] = o;
}
function yl(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const o = e.key.content;
    n = t.properties.some((r) => r.key.type === 4 && r.key.content === o);
  }
  return n;
}
function ca(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, o) => n === "-" ? "_" : e.charCodeAt(o).toString())}`;
}
const ah = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, qu = { parseMode: "base", ns: 0, delimiters: ["{{", "}}"], getNamespace: () => 0, isVoidTag: Tr, isPreTag: Tr, isCustomElement: Tr, onError: ui, onWarn: $u, comments: !1, prefixIdentifiers: !1 };
let Se = qu, Xr = null, jn = "", Ze = null, Ce = null, ft = "", Qt = -1, Tn = -1, es = 0, Nn = !1, ua = null;
const $e = [], Oe = new class {
  constructor(e, t) {
    this.stack = e, this.cbs = t, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = ml, this.delimiterClose = gl, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = ml, this.delimiterClose = gl;
  }
  getPos(e) {
    let t = 1, n = e + 1;
    for (let o = this.newlines.length - 1; o >= 0; o--) {
      const r = this.newlines[o];
      if (e > r) {
        t = o + 2, n = e - r;
        break;
      }
    }
    return { column: n, line: t, offset: e };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(e) {
    e === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : this.inVPre || e !== this.delimiterOpen[0] || (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e));
  }
  stateInterpolationOpen(e) {
    if (e === this.delimiterOpen[this.delimiterIndex])
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const t = this.index + 1 - this.delimiterOpen.length;
        t > this.sectionStart && this.cbs.ontext(this.sectionStart, t), this.state = 3, this.sectionStart = t;
      } else
        this.delimiterIndex++;
    else
      this.inRCDATA ? (this.state = 32, this.stateInRCDATA(e)) : (this.state = 1, this.stateText(e));
  }
  stateInterpolation(e) {
    e === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(e));
  }
  stateInterpolationClose(e) {
    e === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.state = this.inRCDATA ? 32 : 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(e));
  }
  stateSpecialStartSequence(e) {
    const t = this.sequenceIndex === this.currentSequence.length;
    if (t ? un(e) : (32 | e) === this.currentSequence[this.sequenceIndex]) {
      if (!t)
        return void this.sequenceIndex++;
    } else
      this.inRCDATA = !1;
    this.sequenceIndex = 0, this.state = 6, this.stateInTagName(e);
  }
  stateInRCDATA(e) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (e === 62 || ht(e)) {
        const t = this.index - this.currentSequence.length;
        if (this.sectionStart < t) {
          const n = this.index;
          this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = n;
        }
        return this.sectionStart = t + 2, this.stateInClosingTagName(e), void (this.inRCDATA = !1);
      }
      this.sequenceIndex = 0;
    }
    (32 | e) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Qe.TitleEnd || this.currentSequence === Qe.TextareaEnd && !this.inSFCRoot ? e === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === 60);
  }
  stateCDATASequence(e) {
    e === Qe.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Qe.Cdata.length && (this.state = 28, this.currentSequence = Qe.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(e));
  }
  fastForwardTo(e) {
    for (; ++this.index < this.buffer.length; ) {
      const t = this.buffer.charCodeAt(this.index);
      if (t === 10 && this.newlines.push(this.index), t === e)
        return !0;
    }
    return this.index = this.buffer.length - 1, !1;
  }
  stateInCommentLike(e) {
    e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Qe.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  startSpecial(e, t) {
    this.enterRCDATA(e, t), this.state = 31;
  }
  enterRCDATA(e, t) {
    this.inRCDATA = !0, this.currentSequence = e, this.sequenceIndex = t;
  }
  stateBeforeTagName(e) {
    if (e === 33)
      this.state = 22, this.sectionStart = this.index + 1;
    else if (e === 63)
      this.state = 24, this.sectionStart = this.index + 1;
    else if (vl(e))
      if (this.sectionStart = this.index, this.mode === 0)
        this.state = 6;
      else if (this.inSFCRoot)
        this.state = 34;
      else if (this.inXML)
        this.state = 6;
      else {
        const t = 32 | e;
        this.state = t === 116 ? 30 : t === 115 ? 29 : 6;
      }
    else
      e === 47 ? this.state = 8 : (this.state = 1, this.stateText(e));
  }
  stateInTagName(e) {
    un(e) && this.handleTagName(e);
  }
  stateInSFCRootTagName(e) {
    if (un(e)) {
      const t = this.buffer.slice(this.sectionStart, this.index);
      t !== "template" && this.enterRCDATA(Gr("</" + t), 0), this.handleTagName(e);
    }
  }
  handleTagName(e) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e);
  }
  stateBeforeClosingTagName(e) {
    ht(e) || (e === 62 ? (this.state = 1, this.sectionStart = this.index + 1) : (this.state = vl(e) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(e) {
    (e === 62 || ht(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(e));
  }
  stateAfterClosingTagName(e) {
    e === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(e) {
    e === 62 ? (this.cbs.onopentagend(this.index), this.state = this.inRCDATA ? 32 : 1, this.sectionStart = this.index + 1) : e === 47 ? this.state = 7 : e === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : ht(e) || this.handleAttrStart(e);
  }
  handleAttrStart(e) {
    e === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : e === 46 || e === 58 || e === 64 || e === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(e) {
    e === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : ht(e) || (this.state = 11, this.stateBeforeAttrName(e));
  }
  stateInAttrName(e) {
    (e === 61 || un(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(e));
  }
  stateInDirName(e) {
    e === 61 || un(e) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : e === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : e === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(e) {
    e === 61 || un(e) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : e === 91 ? this.state = 15 : e === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(e) {
    e === 93 ? this.state = 14 : (e === 61 || un(e)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(e));
  }
  stateInDirModifier(e) {
    e === 61 || un(e) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : e === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
  }
  handleAttrNameEnd(e) {
    this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(e);
  }
  stateAfterAttrName(e) {
    e === 61 ? this.state = 18 : e === 47 || e === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e)) : ht(e) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(e));
  }
  stateBeforeAttrValue(e) {
    e === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : e === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : ht(e) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(e));
  }
  handleInAttrValue(e, t) {
    (e === t || this.fastForwardTo(t)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === 34 ? 3 : 2, this.index + 1), this.state = 11);
  }
  stateInAttrValueDoubleQuotes(e) {
    this.handleInAttrValue(e, 34);
  }
  stateInAttrValueSingleQuotes(e) {
    this.handleInAttrValue(e, 39);
  }
  stateInAttrValueNoQuotes(e) {
    ht(e) || e === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(e)) : e !== 39 && e !== 60 && e !== 61 && e !== 96 || this.cbs.onerr(18, this.index);
  }
  stateBeforeDeclaration(e) {
    e === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = e === 45 ? 25 : 23;
  }
  stateInDeclaration(e) {
    (e === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(e) {
    (e === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(e) {
    e === 45 ? (this.state = 28, this.currentSequence = Qe.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(e) {
    (e === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(e) {
    const t = 32 | e;
    t === Qe.ScriptEnd[3] ? this.startSpecial(Qe.ScriptEnd, 4) : t === Qe.StyleEnd[3] ? this.startSpecial(Qe.StyleEnd, 4) : (this.state = 6, this.stateInTagName(e));
  }
  stateBeforeSpecialT(e) {
    const t = 32 | e;
    t === Qe.TitleEnd[3] ? this.startSpecial(Qe.TitleEnd, 4) : t === Qe.TextareaEnd[3] ? this.startSpecial(Qe.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(e));
  }
  startEntity() {
  }
  stateInEntity() {
  }
  parse(e) {
    for (this.buffer = e; this.index < this.buffer.length; ) {
      const t = this.buffer.charCodeAt(this.index);
      switch (t === 10 && this.newlines.push(this.index), this.state) {
        case 1:
          this.stateText(t);
          break;
        case 2:
          this.stateInterpolationOpen(t);
          break;
        case 3:
          this.stateInterpolation(t);
          break;
        case 4:
          this.stateInterpolationClose(t);
          break;
        case 31:
          this.stateSpecialStartSequence(t);
          break;
        case 32:
          this.stateInRCDATA(t);
          break;
        case 26:
          this.stateCDATASequence(t);
          break;
        case 19:
          this.stateInAttrValueDoubleQuotes(t);
          break;
        case 12:
          this.stateInAttrName(t);
          break;
        case 13:
          this.stateInDirName(t);
          break;
        case 14:
          this.stateInDirArg(t);
          break;
        case 15:
          this.stateInDynamicDirArg(t);
          break;
        case 16:
          this.stateInDirModifier(t);
          break;
        case 28:
          this.stateInCommentLike(t);
          break;
        case 27:
          this.stateInSpecialComment(t);
          break;
        case 11:
          this.stateBeforeAttrName(t);
          break;
        case 6:
          this.stateInTagName(t);
          break;
        case 34:
          this.stateInSFCRootTagName(t);
          break;
        case 9:
          this.stateInClosingTagName(t);
          break;
        case 5:
          this.stateBeforeTagName(t);
          break;
        case 17:
          this.stateAfterAttrName(t);
          break;
        case 20:
          this.stateInAttrValueSingleQuotes(t);
          break;
        case 18:
          this.stateBeforeAttrValue(t);
          break;
        case 8:
          this.stateBeforeClosingTagName(t);
          break;
        case 10:
          this.stateAfterClosingTagName(t);
          break;
        case 29:
          this.stateBeforeSpecialS(t);
          break;
        case 30:
          this.stateBeforeSpecialT(t);
          break;
        case 21:
          this.stateInAttrValueNoQuotes(t);
          break;
        case 7:
          this.stateInSelfClosingTag(t);
          break;
        case 23:
          this.stateInDeclaration(t);
          break;
        case 22:
          this.stateBeforeDeclaration(t);
          break;
        case 25:
          this.stateBeforeComment(t);
          break;
        case 24:
          this.stateInProcessingInstruction(t);
          break;
        case 33:
          this.stateInEntity();
      }
      this.index++;
    }
    this.cleanup(), this.finish();
  }
  cleanup() {
    this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : this.state !== 19 && this.state !== 20 && this.state !== 21 || (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  finish() {
    this.handleTrailingData(), this.cbs.onend();
  }
  handleTrailingData() {
    const e = this.buffer.length;
    this.sectionStart >= e || (this.state === 28 ? this.currentSequence === Qe.CdataEnd ? this.cbs.oncdata(this.sectionStart, e) : this.cbs.oncomment(this.sectionStart, e) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, e));
  }
  emitCodePoint(e, t) {
  }
}($e, { onerr: wl, ontext(e, t) {
  br(Ye(e, t), e, t);
}, ontextentity(e, t, n) {
  br(e, t, n);
}, oninterpolation(e, t) {
  if (Nn)
    return br(Ye(e, t), e, t);
  let n = e + Oe.delimiterOpen.length, o = t - Oe.delimiterClose.length;
  for (; ht(jn.charCodeAt(n)); )
    n++;
  for (; ht(jn.charCodeAt(o - 1)); )
    o--;
  let r = Ye(n, o);
  r.includes("&") && (r = Se.decodeEntities(r, !1)), da({ type: 5, content: xr(r, !1, Le(n, o)), loc: Le(e, t) });
}, onopentagname(e, t) {
  const n = Ye(e, t);
  Ze = { type: 1, tag: n, ns: Se.getNamespace(n, $e[0], Se.ns), tagType: 0, props: [], children: [], loc: Le(e - 1, t), codegenNode: void 0 };
}, onopentagend(e) {
  xl(e);
}, onclosetag(e, t) {
  const n = Ye(e, t);
  if (!Se.isVoidTag(n)) {
    let o = !1;
    for (let r = 0; r < $e.length; r++)
      if ($e[r].tag.toLowerCase() === n.toLowerCase()) {
        o = !0;
        for (let s = 0; s <= r; s++)
          Nr($e.shift(), t, s < r);
        break;
      }
    o || Ju(e, 60);
  }
}, onselfclosingtag(e) {
  var t;
  const n = Ze.tag;
  Ze.isSelfClosing = !0, xl(e), ((t = $e[0]) == null ? void 0 : t.tag) === n && Nr($e.shift(), e);
}, onattribname(e, t) {
  Ce = { type: 6, name: Ye(e, t), nameLoc: Le(e, t), value: void 0, loc: Le(e) };
}, ondirname(e, t) {
  const n = Ye(e, t), o = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
  if (Nn || o === "")
    Ce = { type: 6, name: n, nameLoc: Le(e, t), value: void 0, loc: Le(e) };
  else if (Ce = { type: 7, name: o, rawName: n, exp: void 0, arg: void 0, modifiers: n === "." ? ["prop"] : [], loc: Le(e) }, o === "pre") {
    Nn = Oe.inVPre = !0, ua = Ze;
    const r = Ze.props;
    for (let s = 0; s < r.length; s++)
      r[s].type === 7 && (r[s] = ph(r[s]));
  }
}, ondirarg(e, t) {
  if (e === t)
    return;
  const n = Ye(e, t);
  if (Nn)
    Ce.name += n, so(Ce.nameLoc, t);
  else {
    const o = n[0] !== "[";
    Ce.arg = xr(o ? n : n.slice(1, -1), o, Le(e, t), o ? 3 : 0);
  }
}, ondirmodifier(e, t) {
  const n = Ye(e, t);
  if (Nn)
    Ce.name += "." + n, so(Ce.nameLoc, t);
  else if (Ce.name === "slot") {
    const o = Ce.arg;
    o && (o.content += "." + n, so(o.loc, t));
  } else
    Ce.modifiers.push(n);
}, onattribdata(e, t) {
  ft += Ye(e, t), Qt < 0 && (Qt = e), Tn = t;
}, onattribentity(e, t, n) {
  ft += e, Qt < 0 && (Qt = t), Tn = n;
}, onattribnameend(e) {
  const t = Ye(Ce.loc.start.offset, e);
  Ce.type === 7 && (Ce.rawName = t), Ze.props.some((n) => (n.type === 7 ? n.rawName : n.name) === t);
}, onattribend(e, t) {
  if (Ze && Ce) {
    if (so(Ce.loc, t), e !== 0)
      if (ft.includes("&") && (ft = Se.decodeEntities(ft, !0)), Ce.type === 6)
        Ce.name === "class" && (ft = Hu(ft).trim()), Ce.value = { type: 2, content: ft, loc: e === 1 ? Le(Qt, Tn) : Le(Qt - 1, Tn + 1) }, Oe.inSFCRoot && Ze.tag === "template" && Ce.name === "lang" && ft && ft !== "html" && Oe.enterRCDATA(Gr("</template"), 0);
      else {
        let n = 0;
        Ce.exp = xr(ft, !1, Le(Qt, Tn), 0, n), Ce.name === "for" && (Ce.forParseResult = function(o) {
          const r = o.loc, s = o.content, a = s.match(ah);
          if (!a)
            return;
          const [, i, l] = a, c = (f, g, y = !1) => {
            const _ = r.start.offset + g;
            return xr(f, !1, Le(_, _ + f.length), 0, y ? 1 : 0);
          }, u = { source: c(l.trim(), s.indexOf(l, i.length)), value: void 0, key: void 0, index: void 0, finalized: !1 };
          let d = i.trim().replace(ih, "").trim();
          const p = i.indexOf(d), m = d.match(bl);
          if (m) {
            d = d.replace(bl, "").trim();
            const f = m[1].trim();
            let g;
            if (f && (g = s.indexOf(f, p + d.length), u.key = c(f, g, !0)), m[2]) {
              const y = m[2].trim();
              y && (u.index = c(y, s.indexOf(y, u.key ? g + f.length : p + d.length), !0));
            }
          }
          return d && (u.value = c(d, p, !0)), u;
        }(Ce.exp));
      }
    Ce.type === 7 && Ce.name === "pre" || Ze.props.push(Ce);
  }
  ft = "", Qt = Tn = -1;
}, oncomment(e, t) {
  Se.comments && da({ type: 3, content: Ye(e, t), loc: Le(e - 4, t + 3) });
}, onend() {
  const e = jn.length;
  for (let t = 0; t < $e.length; t++)
    Nr($e[t], e - 1);
}, oncdata(e, t) {
  $e[0].ns !== 0 && br(Ye(e, t), e, t);
}, onprocessinginstruction(e) {
  ($e[0] ? $e[0].ns : Se.ns) === 0 && wl(21, e - 1);
} }), bl = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, ih = /^\(|\)$/g;
function Ye(e, t) {
  return jn.slice(e, t);
}
function xl(e) {
  Oe.inSFCRoot && (Ze.innerLoc = Le(e + 1, e + 1)), da(Ze);
  const { tag: t, ns: n } = Ze;
  n === 0 && Se.isPreTag(t) && es++, Se.isVoidTag(t) ? Nr(Ze, e) : ($e.unshift(Ze), n !== 1 && n !== 2 || (Oe.inXML = !0)), Ze = null;
}
function br(e, t, n) {
  var o;
  {
    const a = (o = $e[0]) == null ? void 0 : o.tag;
    a !== "script" && a !== "style" && e.includes("&") && (e = Se.decodeEntities(e, !1));
  }
  const r = $e[0] || Xr, s = r.children[r.children.length - 1];
  s?.type === 2 ? (s.content += e, so(s.loc, n)) : r.children.push({ type: 2, content: e, loc: Le(t, n) });
}
function Nr(e, t, n = !1) {
  so(e.loc, n ? Ju(t, 60) : t + 1), Oe.inSFCRoot && (e.innerLoc.end = xe({}, e.children.length ? e.children[e.children.length - 1].loc.end : e.innerLoc.start), e.innerLoc.source = Ye(e.innerLoc.start.offset, e.innerLoc.end.offset));
  const { tag: o, ns: r } = e;
  Nn || (o === "slot" ? e.tagType = 2 : function({ tag: s, props: a }) {
    if (s === "template") {
      for (let i = 0; i < a.length; i++)
        if (a[i].type === 7 && lh.has(a[i].name))
          return !0;
    }
    return !1;
  }(e) ? e.tagType = 3 : function({ tag: s, props: a }) {
    var i;
    if (Se.isCustomElement(s))
      return !1;
    if (s === "component" || (l = s.charCodeAt(0), l > 64 && l < 91) || ju(s) || (i = Se.isBuiltInComponent) != null && i.call(Se, s) || Se.isNativeTag && !Se.isNativeTag(s))
      return !0;
    var l;
    for (let c = 0; c < a.length; c++) {
      const u = a[c];
      if (u.type === 6 && u.name === "is" && u.value && u.value.content.startsWith("vue:"))
        return !0;
    }
    return !1;
  }(e) && (e.tagType = 1)), Oe.inRCDATA || (e.children = Wu(e.children, e.tag)), r === 0 && Se.isPreTag(o) && es--, ua === e && (Nn = Oe.inVPre = !1, ua = null), Oe.inXML && ($e[0] ? $e[0].ns : Se.ns) === 0 && (Oe.inXML = !1);
}
function Ju(e, t) {
  let n = e;
  for (; jn.charCodeAt(n) !== t && n >= 0; )
    n--;
  return n;
}
const lh = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]), ch = /\r\n/g;
function Wu(e, t) {
  var n, o;
  const r = Se.whitespace !== "preserve";
  let s = !1;
  for (let a = 0; a < e.length; a++) {
    const i = e[a];
    if (i.type === 2)
      if (es)
        i.content = i.content.replace(ch, `
`);
      else if (uh(i.content)) {
        const l = (n = e[a - 1]) == null ? void 0 : n.type, c = (o = e[a + 1]) == null ? void 0 : o.type;
        !l || !c || r && (l === 3 && (c === 3 || c === 1) || l === 1 && (c === 3 || c === 1 && dh(i.content))) ? (s = !0, e[a] = null) : i.content = " ";
      } else
        r && (i.content = Hu(i.content));
  }
  if (es && t && Se.isPreTag(t)) {
    const a = e[0];
    a && a.type === 2 && (a.content = a.content.replace(/^\r?\n/, ""));
  }
  return s ? e.filter(Boolean) : e;
}
function uh(e) {
  for (let t = 0; t < e.length; t++)
    if (!ht(e.charCodeAt(t)))
      return !1;
  return !0;
}
function dh(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function Hu(e) {
  let t = "", n = !1;
  for (let o = 0; o < e.length; o++)
    ht(e.charCodeAt(o)) ? n || (t += " ", n = !0) : (t += e[o], n = !1);
  return t;
}
function da(e) {
  ($e[0] || Xr).children.push(e);
}
function Le(e, t) {
  return { start: Oe.getPos(e), end: t == null ? t : Oe.getPos(t), source: t == null ? t : Ye(e, t) };
}
function so(e, t) {
  e.end = Oe.getPos(t), e.source = Ye(e.start.offset, t);
}
function ph(e) {
  const t = { type: 6, name: e.rawName, nameLoc: Le(e.loc.start.offset, e.loc.start.offset + e.rawName.length), value: void 0, loc: e.loc };
  if (e.exp) {
    const n = e.exp.loc;
    n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = { type: 2, content: e.exp.content, loc: n };
  }
  return t;
}
function xr(e, t = !1, n, o = 0, r = 0) {
  return de(e, t, n, o);
}
function wl(e, t, n) {
  Se.onError(Ue(e, Le(t, t)));
}
function fh(e, t) {
  if (Oe.reset(), Ze = null, Ce = null, ft = "", Qt = -1, Tn = -1, $e.length = 0, jn = e, Se = xe({}, qu), t) {
    let r;
    for (r in t)
      t[r] != null && (Se[r] = t[r]);
  }
  Oe.mode = Se.parseMode === "html" ? 1 : Se.parseMode === "sfc" ? 2 : 0, Oe.inXML = Se.ns === 1 || Se.ns === 2;
  const n = t?.delimiters;
  n && (Oe.delimiterOpen = Gr(n[0]), Oe.delimiterClose = Gr(n[1]));
  const o = Xr = /* @__PURE__ */ function(r, s = "") {
    return { type: 0, source: s, children: r, helpers: /* @__PURE__ */ new Set(), components: [], directives: [], hoists: [], imports: [], cached: 0, temps: 0, codegenNode: void 0, loc: xt };
  }([], e);
  return Oe.parse(jn), o.loc = Le(0, e.length), o.children = Wu(o.children), Xr = null, o;
}
function hh(e, t) {
  Br(e, t, Ku(e, e.children[0]));
}
function Ku(e, t) {
  const { children: n } = e;
  return n.length === 1 && t.type === 1 && !Yr(t);
}
function Br(e, t, n = !1) {
  const { children: o } = e, r = o.length;
  let s = 0;
  for (let a = 0; a < o.length; a++) {
    const i = o[a];
    if (i.type === 1 && i.tagType === 0) {
      const l = n ? 0 : It(i, t);
      if (l > 0) {
        if (l >= 2) {
          i.codegenNode.patchFlag = "-1", i.codegenNode = t.hoist(i.codegenNode), s++;
          continue;
        }
      } else {
        const c = i.codegenNode;
        if (c.type === 13) {
          const u = Zu(c);
          if ((!u || u === 512 || u === 1) && Qu(i, t) >= 2) {
            const d = Yu(i);
            d && (c.props = t.hoist(d));
          }
          c.dynamicProps && (c.dynamicProps = t.hoist(c.dynamicProps));
        }
      }
    }
    if (i.type === 1) {
      const l = i.tagType === 1;
      l && t.scopes.vSlot++, Br(i, t), l && t.scopes.vSlot--;
    } else if (i.type === 11)
      Br(i, t, i.children.length === 1);
    else if (i.type === 9)
      for (let l = 0; l < i.branches.length; l++)
        Br(i.branches[l], t, i.branches[l].children.length === 1);
  }
  if (s && t.transformHoist && t.transformHoist(o, t, e), s && s === r && e.type === 1 && e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && Z(e.codegenNode.children)) {
    const a = t.hoist(Go(e.codegenNode.children));
    t.hmr && (a.content = `[...${a.content}]`), e.codegenNode.children = a;
  }
}
function It(e, t) {
  const { constantCache: n } = t;
  switch (e.type) {
    case 1:
      if (e.tagType !== 0)
        return 0;
      const o = n.get(e);
      if (o !== void 0)
        return o;
      const r = e.codegenNode;
      if (r.type !== 13 || r.isBlock && e.tag !== "svg" && e.tag !== "foreignObject")
        return 0;
      if (Zu(r))
        return n.set(e, 0), 0;
      {
        let a = 3;
        const i = Qu(e, t);
        if (i === 0)
          return n.set(e, 0), 0;
        i < a && (a = i);
        for (let l = 0; l < e.children.length; l++) {
          const c = It(e.children[l], t);
          if (c === 0)
            return n.set(e, 0), 0;
          c < a && (a = c);
        }
        if (a > 1)
          for (let l = 0; l < e.props.length; l++) {
            const c = e.props[l];
            if (c.type === 7 && c.name === "bind" && c.exp) {
              const u = It(c.exp, t);
              if (u === 0)
                return n.set(e, 0), 0;
              u < a && (a = u);
            }
          }
        if (r.isBlock) {
          for (let l = 0; l < e.props.length; l++)
            if (e.props[l].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(Qn), t.removeHelper(bo(t.inSSR, r.isComponent)), r.isBlock = !1, t.helper(yo(t.inSSR, r.isComponent));
        }
        return n.set(e, a), a;
      }
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
    default:
      return 0;
    case 5:
    case 12:
      return It(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let s = 3;
      for (let a = 0; a < e.children.length; a++) {
        const i = e.children[a];
        if (le(i) || Dt(i))
          continue;
        const l = It(i, t);
        if (l === 0)
          return 0;
        l < s && (s = l);
      }
      return s;
  }
}
const mh = /* @__PURE__ */ new Set([ri, si, Ho, nr]);
function Gu(e, t) {
  if (e.type === 14 && !le(e.callee) && mh.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return It(n, t);
    if (n.type === 14)
      return Gu(n, t);
  }
  return 0;
}
function Qu(e, t) {
  let n = 3;
  const o = Yu(e);
  if (o && o.type === 15) {
    const { properties: r } = o;
    for (let s = 0; s < r.length; s++) {
      const { key: a, value: i } = r[s], l = It(a, t);
      if (l === 0)
        return l;
      let c;
      if (l < n && (n = l), c = i.type === 4 ? It(i, t) : i.type === 14 ? Gu(i, t) : 0, c === 0)
        return c;
      c < n && (n = c);
    }
  }
  return n;
}
function Yu(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function Zu(e) {
  const t = e.patchFlag;
  return t ? parseInt(t, 10) : void 0;
}
function gh(e, { filename: t = "", prefixIdentifiers: n = !1, hoistStatic: o = !1, hmr: r = !1, cacheHandlers: s = !1, nodeTransforms: a = [], directiveTransforms: i = {}, transformHoist: l = null, isBuiltInComponent: c = Ve, isCustomElement: u = Ve, expressionPlugins: d = [], scopeId: p = null, slotted: m = !0, ssr: f = !1, inSSR: g = !1, ssrCssVars: y = "", bindingMetadata: _ = be, inline: h = !1, isTS: x = !1, onError: b = ui, onWarn: w = $u, compatConfig: I }) {
  const q = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), A = { filename: t, selfName: q && Zn(Re(q[1])), prefixIdentifiers: n, hoistStatic: o, hmr: r, cacheHandlers: s, nodeTransforms: a, directiveTransforms: i, transformHoist: l, isBuiltInComponent: c, isCustomElement: u, expressionPlugins: d, scopeId: p, slotted: m, ssr: f, inSSR: g, ssrCssVars: y, bindingMetadata: _, inline: h, isTS: x, onError: b, onWarn: w, compatConfig: I, root: e, helpers: /* @__PURE__ */ new Map(), components: /* @__PURE__ */ new Set(), directives: /* @__PURE__ */ new Set(), hoists: [], imports: [], constantCache: /* @__PURE__ */ new WeakMap(), temps: 0, cached: 0, identifiers: /* @__PURE__ */ Object.create(null), scopes: { vFor: 0, vSlot: 0, vPre: 0, vOnce: 0 }, parent: null, currentNode: e, childIndex: 0, inVOnce: !1, helper(E) {
    const B = A.helpers.get(E) || 0;
    return A.helpers.set(E, B + 1), E;
  }, removeHelper(E) {
    const B = A.helpers.get(E);
    if (B) {
      const z = B - 1;
      z ? A.helpers.set(E, z) : A.helpers.delete(E);
    }
  }, helperString: (E) => `_${go[A.helper(E)]}`, replaceNode(E) {
    A.parent.children[A.childIndex] = A.currentNode = E;
  }, removeNode(E) {
    const B = E ? A.parent.children.indexOf(E) : A.currentNode ? A.childIndex : -1;
    E && E !== A.currentNode ? A.childIndex > B && (A.childIndex--, A.onNodeRemoved()) : (A.currentNode = null, A.onNodeRemoved()), A.parent.children.splice(B, 1);
  }, onNodeRemoved: () => {
  }, addIdentifiers(E) {
  }, removeIdentifiers(E) {
  }, hoist(E) {
    le(E) && (E = de(E)), A.hoists.push(E);
    const B = de(`_hoisted_${A.hoists.length}`, !1, E.loc, 2);
    return B.hoisted = E, B;
  }, cache: (E, B = !1) => /* @__PURE__ */ function(z, S, P = !1) {
    return { type: 20, index: z, value: S, isVNode: P, loc: xt };
  }(A.cached++, E, B) };
  return A;
}
function vh(e, t) {
  const n = gh(e, t);
  ts(e, n), t.hoistStatic && hh(e, n), t.ssr || function(o, r) {
    const { helper: s } = r, { children: a } = o;
    if (a.length === 1) {
      const i = a[0];
      if (Ku(o, i) && i.codegenNode) {
        const l = i.codegenNode;
        l.type === 13 && ci(l, r), o.codegenNode = l;
      } else
        o.codegenNode = i;
    } else if (a.length > 1) {
      let i = 64;
      o.codegenNode = Ko(r, s(Wo), void 0, o.children, i + "", void 0, void 0, !0, void 0, !1);
    }
  }(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0;
}
function ts(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, o = [];
  for (let s = 0; s < n.length; s++) {
    const a = n[s](e, t);
    if (a && (Z(a) ? o.push(...a) : o.push(a)), !t.currentNode)
      return;
    e = t.currentNode;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(tr);
      break;
    case 5:
      t.ssr || t.helper(gs);
      break;
    case 9:
      for (let s = 0; s < e.branches.length; s++)
        ts(e.branches[s], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      (function(s, a) {
        let i = 0;
        const l = () => {
          i--;
        };
        for (; i < s.children.length; i++) {
          const c = s.children[i];
          le(c) || (a.parent = s, a.childIndex = i, a.onNodeRemoved = l, ts(c, a));
        }
      })(e, t);
  }
  t.currentNode = e;
  let r = o.length;
  for (; r--; )
    o[r]();
}
function Xu(e, t) {
  const n = le(e) ? (o) => o === e : (o) => e.test(o);
  return (o, r) => {
    if (o.type === 1) {
      const { props: s } = o;
      if (o.tagType === 3 && s.some(rh))
        return;
      const a = [];
      for (let i = 0; i < s.length; i++) {
        const l = s[i];
        if (l.type === 7 && n(l.name)) {
          s.splice(i, 1), i--;
          const c = t(o, l, r);
          c && a.push(c);
        }
      }
      return a;
    }
  };
}
const wr = "/*#__PURE__*/", kl = (e) => `${go[e]}: _${go[e]}`;
function yh(e, { mode: t = "function", prefixIdentifiers: n = t === "module", sourceMap: o = !1, filename: r = "template.vue.html", scopeId: s = null, optimizeImports: a = !1, runtimeGlobalName: i = "Vue", runtimeModuleName: l = "vue", ssrRuntimeModuleName: c = "vue/server-renderer", ssr: u = !1, isTS: d = !1, inSSR: p = !1 }) {
  const m = { mode: t, prefixIdentifiers: n, sourceMap: o, filename: r, scopeId: s, optimizeImports: a, runtimeGlobalName: i, runtimeModuleName: l, ssrRuntimeModuleName: c, ssr: u, isTS: d, inSSR: p, source: e.source, code: "", column: 1, line: 1, offset: 0, indentLevel: 0, pure: !1, map: void 0, helper: (g) => `_${go[g]}`, push(g, y = -2, _) {
    m.code += g;
  }, indent() {
    f(++m.indentLevel);
  }, deindent(g = !1) {
    g ? --m.indentLevel : f(--m.indentLevel);
  }, newline() {
    f(m.indentLevel);
  } };
  function f(g) {
    m.push(`
` + "  ".repeat(g), 0);
  }
  return m;
}
function bh(e, t = {}) {
  const n = yh(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const { mode: o, push: r, prefixIdentifiers: s, indent: a, deindent: i, newline: l, ssr: c } = n, u = Array.from(e.helpers), d = u.length > 0, p = !s && o !== "module";
  if (function(f, g) {
    const { push: y, newline: _, runtimeGlobalName: h } = g, x = h, b = Array.from(f.helpers);
    b.length > 0 && (y(`const _Vue = ${x}
`, -1), f.hoists.length) && y(`const { ${[Ya, Za, tr, Xa, Uu].filter((w) => b.includes(w)).map(kl).join(", ")} } = _Vue
`, -1), function(w, I) {
      if (!w.length)
        return;
      I.pure = !0;
      const { push: q, newline: A } = I;
      A();
      for (let E = 0; E < w.length; E++) {
        const B = w[E];
        B && (q(`const _hoisted_${E + 1} = `), ot(B, I), A());
      }
      I.pure = !1;
    }(f.hoists, g), _(), y("return ");
  }(e, n), r(`function ${c ? "ssrRender" : "render"}(${(c ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ")}) {`), a(), p && (r("with (_ctx) {"), a(), d && (r(`const { ${u.map(kl).join(", ")} } = _Vue
`, -1), l())), e.components.length && (Cl(e.components, "component", n), (e.directives.length || e.temps > 0) && l()), e.directives.length && (Cl(e.directives, "directive", n), e.temps > 0 && l()), e.temps > 0) {
    r("let ");
    for (let f = 0; f < e.temps; f++)
      r(`${f > 0 ? ", " : ""}_temp${f}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (r(`
`, 0), l()), c || r("return "), e.codegenNode ? ot(e.codegenNode, n) : r("null"), p && (i(), r("}")), i(), r("}"), { ast: e, code: n.code, preamble: "", map: n.map ? n.map.toJSON() : void 0 };
}
function Cl(e, t, { helper: n, push: o, newline: r, isTS: s }) {
  const a = n(t === "component" ? ei : ti);
  for (let i = 0; i < e.length; i++) {
    let l = e[i];
    const c = l.endsWith("__self");
    c && (l = l.slice(0, -6)), o(`const ${ca(l, t)} = ${a}(${JSON.stringify(l)}${c ? ", true" : ""})${s ? "!" : ""}`), i < e.length - 1 && r();
  }
}
function pa(e, t) {
  const n = e.length > 3 || !1;
  t.push("["), n && t.indent(), Mo(e, t, n), n && t.deindent(), t.push("]");
}
function Mo(e, t, n = !1, o = !0) {
  const { push: r, newline: s } = t;
  for (let a = 0; a < e.length; a++) {
    const i = e[a];
    le(i) ? r(i, -3) : Z(i) ? pa(i, t) : ot(i, t), a < e.length - 1 && (n ? (o && r(","), s()) : o && r(", "));
  }
}
function ot(e, t) {
  if (le(e))
    t.push(e, -3);
  else if (Dt(e))
    t.push(t.helper(e));
  else
    switch (e.type) {
      case 1:
      case 9:
      case 11:
      case 12:
        ot(e.codegenNode, t);
        break;
      case 2:
        (function(n, o) {
          o.push(JSON.stringify(n.content), -3, n);
        })(e, t);
        break;
      case 4:
        _l(e, t);
        break;
      case 5:
        (function(n, o) {
          const { push: r, helper: s, pure: a } = o;
          a && r(wr), r(`${s(gs)}(`), ot(n.content, o), r(")");
        })(e, t);
        break;
      case 8:
        ed(e, t);
        break;
      case 3:
        (function(n, o) {
          const { push: r, helper: s, pure: a } = o;
          a && r(wr), r(`${s(tr)}(${JSON.stringify(n.content)})`, -3, n);
        })(e, t);
        break;
      case 13:
        (function(n, o) {
          const { push: r, helper: s, pure: a } = o, { tag: i, props: l, children: c, patchFlag: u, dynamicProps: d, directives: p, isBlock: m, disableTracking: f, isComponent: g } = n;
          p && r(s(ni) + "("), m && r(`(${s(Qn)}(${f ? "true" : ""}), `), a && r(wr);
          const y = m ? bo(o.inSSR, g) : yo(o.inSSR, g);
          r(s(y) + "(", -2, n), Mo(function(_) {
            let h = _.length;
            for (; h-- && _[h] == null; )
              ;
            return _.slice(0, h + 1).map((x) => x || "null");
          }([i, l, c, u, d]), o), r(")"), m && r(")"), p && (r(", "), ot(p, o), r(")"));
        })(e, t);
        break;
      case 14:
        (function(n, o) {
          const { push: r, helper: s, pure: a } = o, i = le(n.callee) ? n.callee : s(n.callee);
          a && r(wr), r(i + "(", -2, n), Mo(n.arguments, o), r(")");
        })(e, t);
        break;
      case 15:
        (function(n, o) {
          const { push: r, indent: s, deindent: a, newline: i } = o, { properties: l } = n;
          if (!l.length)
            return void r("{}", -2, n);
          const c = l.length > 1 || !1;
          r(c ? "{" : "{ "), c && s();
          for (let u = 0; u < l.length; u++) {
            const { key: d, value: p } = l[u];
            xh(d, o), r(": "), ot(p, o), u < l.length - 1 && (r(","), i());
          }
          c && a(), r(c ? "}" : " }");
        })(e, t);
        break;
      case 17:
        (function(n, o) {
          pa(n.elements, o);
        })(e, t);
        break;
      case 18:
        (function(n, o) {
          const { push: r, indent: s, deindent: a } = o, { params: i, returns: l, body: c, newline: u, isSlot: d } = n;
          d && r(`_${go[ii]}(`), r("(", -2, n), Z(i) ? Mo(i, o) : i && ot(i, o), r(") => "), (u || c) && (r("{"), s()), l ? (u && r("return "), Z(l) ? pa(l, o) : ot(l, o)) : c && ot(c, o), (u || c) && (a(), r("}")), d && r(")");
        })(e, t);
        break;
      case 19:
        (function(n, o) {
          const { test: r, consequent: s, alternate: a, newline: i } = n, { push: l, indent: c, deindent: u, newline: d } = o;
          if (r.type === 4) {
            const m = !di(r.content);
            m && l("("), _l(r, o), m && l(")");
          } else
            l("("), ot(r, o), l(")");
          i && c(), o.indentLevel++, i || l(" "), l("? "), ot(s, o), o.indentLevel--, i && d(), i || l(" "), l(": ");
          const p = a.type === 19;
          p || o.indentLevel++, ot(a, o), p || o.indentLevel--, i && u(!0);
        })(e, t);
        break;
      case 20:
        (function(n, o) {
          const { push: r, helper: s, indent: a, deindent: i, newline: l } = o;
          r(`_cache[${n.index}] || (`), n.isVNode && (a(), r(`${s(Kr)}(-1),`), l()), r(`_cache[${n.index}] = `), ot(n.value, o), n.isVNode && (r(","), l(), r(`${s(Kr)}(1),`), l(), r(`_cache[${n.index}]`), i()), r(")");
        })(e, t);
        break;
      case 21:
        Mo(e.body, t, !0, !1);
    }
}
function _l(e, t) {
  const { content: n, isStatic: o } = e;
  t.push(o ? JSON.stringify(n) : n, -3, e);
}
function ed(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const o = e.children[n];
    le(o) ? t.push(o, -3) : ot(o, t);
  }
}
function xh(e, t) {
  const { push: n } = t;
  e.type === 8 ? (n("["), ed(e, t), n("]")) : e.isStatic ? n(di(e.content) ? e.content : JSON.stringify(e.content), -2, e) : n(`[${e.content}]`, -3, e);
}
const wh = Xu(/^(if|else|else-if)$/, (e, t, n) => function(o, r, s, a) {
  if (!(r.name === "else" || r.exp && r.exp.content.trim())) {
    const i = r.exp ? r.exp.loc : o.loc;
    s.onError(Ue(28, r.loc)), r.exp = de("true", !1, i);
  }
  if (r.name === "if") {
    const i = Al(o, r), l = { type: 9, loc: o.loc, branches: [i] };
    if (s.replaceNode(l), a)
      return a(l, i, !0);
  } else {
    const i = s.parent.children;
    let l = i.indexOf(o);
    for (; l-- >= -1; ) {
      const c = i[l];
      if (c && c.type === 3)
        s.removeNode(c);
      else {
        if (!c || c.type !== 2 || c.content.trim().length) {
          if (c && c.type === 9) {
            r.name === "else-if" && c.branches[c.branches.length - 1].condition === void 0 && s.onError(Ue(30, o.loc)), s.removeNode();
            const u = Al(o, r);
            c.branches.push(u);
            const d = a && a(c, u, !1);
            ts(u, s), d && d(), s.currentNode = null;
          } else
            s.onError(Ue(30, o.loc));
          break;
        }
        s.removeNode(c);
      }
    }
  }
}(e, t, n, (o, r, s) => {
  const a = n.parent.children;
  let i = a.indexOf(o), l = 0;
  for (; i-- >= 0; ) {
    const c = a[i];
    c && c.type === 9 && (l += c.branches.length);
  }
  return () => {
    if (s)
      o.codegenNode = Sl(r, l, n);
    else {
      const c = function(u) {
        for (; ; )
          if (u.type === 19) {
            if (u.alternate.type !== 19)
              return u;
            u = u.alternate;
          } else
            u.type === 20 && (u = u.value);
      }(o.codegenNode);
      c.alternate = Sl(r, l + o.branches.length - 1, n);
    }
  };
}));
function Al(e, t) {
  const n = e.tagType === 3;
  return { type: 10, loc: e.loc, condition: t.name === "else" ? void 0 : t.exp, children: n && !Ot(e, "for") ? e.children : [e], userKey: vs(e, "key"), isTemplateIf: n };
}
function Sl(e, t, n) {
  return e.condition ? la(e.condition, El(e, t, n), je(n.helper(tr), ['""', "true"])) : El(e, t, n);
}
function El(e, t, n) {
  const { helper: o } = n, r = Ne("key", de(`${t}`, !1, xt, 2)), { children: s } = e, a = s[0];
  if (s.length !== 1 || a.type !== 1) {
    if (s.length === 1 && a.type === 11) {
      const l = a.codegenNode;
      return Zr(l, r, n), l;
    }
    return Ko(n, o(Wo), Et([r]), s, 64 + "", void 0, void 0, !0, !1, !1, e.loc);
  }
  {
    const l = a.codegenNode, c = (i = l).type === 14 && i.callee === li ? i.arguments[1].returns : i;
    return c.type === 13 && ci(c, n), Zr(c, r, n), l;
  }
  var i;
}
const kh = Xu("for", (e, t, n) => {
  const { helper: o, removeHelper: r } = n;
  return function(s, a, i, l) {
    if (!a.exp)
      return void i.onError(Ue(31, a.loc));
    const c = a.forParseResult;
    if (!c)
      return void i.onError(Ue(32, a.loc));
    td(c);
    const { scopes: u } = i, { source: d, value: p, key: m, index: f } = c, g = { type: 11, loc: a.loc, source: d, valueAlias: p, keyAlias: m, objectIndexAlias: f, parseResult: c, children: Qr(s) ? s.children : [s] };
    i.replaceNode(g), u.vFor++;
    const y = l && l(g);
    return () => {
      u.vFor--, y && y();
    };
  }(e, t, n, (s) => {
    const a = je(o(oi), [s.source]), i = Qr(e), l = Ot(e, "memo"), c = vs(e, "key"), u = c && (c.type === 6 ? de(c.value.content, !0) : c.exp), d = c ? Ne("key", u) : null, p = s.source.type === 4 && s.source.constType > 0, m = p ? 64 : c ? 128 : 256;
    return s.codegenNode = Ko(n, o(Wo), void 0, a, m + "", void 0, void 0, !0, !p, !1, e.loc), () => {
      let f;
      const { children: g } = s, y = g.length !== 1 || g[0].type !== 1, _ = Yr(e) ? e : i && e.children.length === 1 && Yr(e.children[0]) ? e.children[0] : null;
      if (_ ? (f = _.codegenNode, i && d && Zr(f, d, n)) : y ? f = Ko(n, o(Wo), d ? Et([d]) : void 0, e.children, "64", void 0, void 0, !0, void 0, !1) : (f = g[0].codegenNode, i && d && Zr(f, d, n), f.isBlock !== !p && (f.isBlock ? (r(Qn), r(bo(n.inSSR, f.isComponent))) : r(yo(n.inSSR, f.isComponent))), f.isBlock = !p, f.isBlock ? (o(Qn), o(bo(n.inSSR, f.isComponent))) : o(yo(n.inSSR, f.isComponent))), l) {
        const h = vo(fa(s.parseResult, [de("_cached")]));
        h.body = { type: 21, body: [Pt(["const _memo = (", l.exp, ")"]), Pt(["if (_cached", ...u ? [" && _cached.key === ", u] : [], ` && ${n.helperString(Lu)}(_cached, _memo)) return _cached`]), Pt(["const _item = ", f]), de("_item.memo = _memo"), de("return _item")], loc: xt }, a.arguments.push(h, de("_cache"), de(String(n.cached++)));
      } else
        a.arguments.push(vo(fa(s.parseResult), f, !0));
    };
  });
});
function td(e, t) {
  e.finalized || (e.finalized = !0);
}
function fa({ value: e, key: t, index: n }, o = []) {
  return function(r) {
    let s = r.length;
    for (; s-- && !r[s]; )
      ;
    return r.slice(0, s + 1).map((a, i) => a || de("_".repeat(i + 1), !1));
  }([e, t, n, ...o]);
}
const Il = de("undefined", !1), Ch = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3) && Ot(e, "slot"))
    return t.scopes.vSlot++, () => {
      t.scopes.vSlot--;
    };
}, _h = (e, t, n, o) => vo(e, n, !1, !0, n.length ? n[0].loc : o);
function Ah(e, t, n = _h) {
  t.helper(ii);
  const { children: o, loc: r } = e, s = [], a = [];
  let i = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const l = Ot(e, "slot", !0);
  if (l) {
    const { arg: y, exp: _ } = l;
    y && !ct(y) && (i = !0), s.push(Ne(y || de("default", !0), n(_, void 0, o, r)));
  }
  let c = !1, u = !1;
  const d = [], p = /* @__PURE__ */ new Set();
  let m = 0;
  for (let y = 0; y < o.length; y++) {
    const _ = o[y];
    let h;
    if (!Qr(_) || !(h = Ot(_, "slot", !0))) {
      _.type !== 3 && d.push(_);
      continue;
    }
    if (l) {
      t.onError(Ue(37, h.loc));
      break;
    }
    c = !0;
    const { children: x, loc: b } = _, { arg: w = de("default", !0), exp: I, loc: q } = h;
    let A;
    ct(w) ? A = w ? w.content : "default" : i = !0;
    const E = Ot(_, "for"), B = n(I, E, x, b);
    let z, S;
    if (z = Ot(_, "if"))
      i = !0, a.push(la(z.exp, kr(w, B, m++), Il));
    else if (S = Ot(_, /^else(-if)?$/, !0)) {
      let P, W = y;
      for (; W-- && (P = o[W], P.type === 3); )
        ;
      if (P && Qr(P) && Ot(P, "if")) {
        o.splice(y, 1), y--;
        let X = a[a.length - 1];
        for (; X.alternate.type === 19; )
          X = X.alternate;
        X.alternate = S.exp ? la(S.exp, kr(w, B, m++), Il) : kr(w, B, m++);
      } else
        t.onError(Ue(30, S.loc));
    } else if (E) {
      i = !0;
      const P = E.forParseResult;
      P ? (td(P), a.push(je(t.helper(oi), [P.source, vo(fa(P), kr(w, B), !0)]))) : t.onError(Ue(32, E.loc));
    } else {
      if (A) {
        if (p.has(A)) {
          t.onError(Ue(38, q));
          continue;
        }
        p.add(A), A === "default" && (u = !0);
      }
      s.push(Ne(w, B));
    }
  }
  if (!l) {
    const y = (_, h) => Ne("default", n(_, void 0, h, r));
    c ? d.length && d.some((_) => nd(_)) && (u ? t.onError(Ue(39, d[0].loc)) : s.push(y(void 0, d))) : s.push(y(void 0, o));
  }
  const f = i ? 2 : Mr(e.children) ? 3 : 1;
  let g = Et(s.concat(Ne("_", de(f + "", !1))), r);
  return a.length && (g = je(t.helper(Du), [g, Go(a)])), { slots: g, hasDynamicSlots: i };
}
function kr(e, t, n) {
  const o = [Ne("name", e), Ne("fn", t)];
  return n != null && o.push(Ne("key", de(String(n), !0))), Et(o);
}
function Mr(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || Mr(n.children))
          return !0;
        break;
      case 9:
        if (Mr(n.branches))
          return !0;
        break;
      case 10:
      case 11:
        if (Mr(n.children))
          return !0;
    }
  }
  return !1;
}
function nd(e) {
  return e.type !== 2 && e.type !== 12 || (e.type === 2 ? !!e.content.trim() : nd(e.content));
}
const od = /* @__PURE__ */ new WeakMap(), Sh = (e, t) => function() {
  if ((e = t.currentNode).type !== 1 || e.tagType !== 0 && e.tagType !== 1)
    return;
  const { tag: n, props: o } = e, r = e.tagType === 1;
  let s = r ? function(g, y, _ = !1) {
    let { tag: h } = g;
    const x = ha(h), b = vs(g, "is");
    if (b)
      if (x) {
        const I = b.type === 6 ? b.value && de(b.value.content, !0) : b.exp;
        if (I)
          return je(y.helper(sa), [I]);
      } else
        b.type === 6 && b.value.content.startsWith("vue:") && (h = b.value.content.slice(4));
    const w = ju(h) || y.isBuiltInComponent(h);
    return w ? (_ || y.helper(w), w) : (y.helper(ei), y.components.add(h), ca(h, "component"));
  }(e, t) : `"${n}"`;
  const a = we(s) && s.callee === sa;
  let i, l, c, u, d, p, m = 0, f = a || s === Lo || s === Qa || !r && (n === "svg" || n === "foreignObject");
  if (o.length > 0) {
    const g = rd(e, t, void 0, r, a);
    i = g.props, m = g.patchFlag, d = g.dynamicPropNames;
    const y = g.directives;
    p = y && y.length ? Go(y.map((_) => function(h, x) {
      const b = [], w = od.get(h);
      w ? b.push(x.helperString(w)) : (x.helper(ti), x.directives.add(h.name), b.push(ca(h.name, "directive")));
      const { loc: I } = h;
      if (h.exp && b.push(h.exp), h.arg && (h.exp || b.push("void 0"), b.push(h.arg)), Object.keys(h.modifiers).length) {
        h.arg || (h.exp || b.push("void 0"), b.push("void 0"));
        const q = de("true", !1, I);
        b.push(Et(h.modifiers.map((A) => Ne(A, q)), I));
      }
      return Go(b, h.loc);
    }(_, t))) : void 0, g.shouldUseBlock && (f = !0);
  }
  if (e.children.length > 0)
    if (s === Wr && (f = !0, m |= 1024), r && s !== Lo && s !== Wr) {
      const { slots: g, hasDynamicSlots: y } = Ah(e, t);
      l = g, y && (m |= 1024);
    } else if (e.children.length === 1 && s !== Lo) {
      const g = e.children[0], y = g.type, _ = y === 5 || y === 8;
      _ && It(g, t) === 0 && (m |= 1), l = _ || y === 2 ? g : e.children;
    } else
      l = e.children;
  m !== 0 && (c = String(m), d && d.length && (u = function(g) {
    let y = "[";
    for (let _ = 0, h = g.length; _ < h; _++)
      y += JSON.stringify(g[_]), _ < h - 1 && (y += ", ");
    return y + "]";
  }(d))), e.codegenNode = Ko(t, s, i, l, c, u, p, !!f, !1, r, e.loc);
};
function rd(e, t, n = e.props, o, r, s = !1) {
  const { tag: a, loc: i, children: l } = e;
  let c = [];
  const u = [], d = [], p = l.length > 0;
  let m = !1, f = 0, g = !1, y = !1, _ = !1, h = !1, x = !1, b = !1;
  const w = [], I = (E) => {
    c.length && (u.push(Et(Tl(c), i)), c = []), E && u.push(E);
  }, q = ({ key: E, value: B }) => {
    if (ct(E)) {
      const z = E.content, S = Yn(z);
      if (!S || o && !r || z.toLowerCase() === "onclick" || z === "onUpdate:modelValue" || Fn(z) || (h = !0), S && Fn(z) && (b = !0), S && B.type === 14 && (B = B.arguments[0]), B.type === 20 || (B.type === 4 || B.type === 8) && It(B, t) > 0)
        return;
      z === "ref" ? g = !0 : z === "class" ? y = !0 : z === "style" ? _ = !0 : z === "key" || w.includes(z) || w.push(z), !o || z !== "class" && z !== "style" || w.includes(z) || w.push(z);
    } else
      x = !0;
  };
  for (let E = 0; E < n.length; E++) {
    const B = n[E];
    if (B.type === 6) {
      const { loc: z, name: S, nameLoc: P, value: W } = B;
      let X = !0;
      if (S === "ref" && (g = !0, t.scopes.vFor > 0 && c.push(Ne(de("ref_for", !0), de("true")))), S === "is" && (ha(a) || W && W.content.startsWith("vue:")))
        continue;
      c.push(Ne(de(S, !0, P), de(W ? W.content : "", X, W ? W.loc : z)));
    } else {
      const { name: z, arg: S, exp: P, loc: W, modifiers: X } = B, Y = z === "bind", G = z === "on";
      if (z === "slot") {
        o || t.onError(Ue(40, W));
        continue;
      }
      if (z === "once" || z === "memo" || z === "is" || Y && ro(S, "is") && ha(a) || G && s)
        continue;
      if ((Y && ro(S, "key") || G && p && ro(S, "vue:before-update")) && (m = !0), Y && ro(S, "ref") && t.scopes.vFor > 0 && c.push(Ne(de("ref_for", !0), de("true"))), !S && (Y || G)) {
        x = !0, P ? Y ? (I(), u.push(P)) : I({ type: 14, loc: W, callee: t.helper(ai), arguments: o ? [P] : [P, "true"] }) : t.onError(Ue(Y ? 34 : 35, W));
        continue;
      }
      Y && X.includes("prop") && (f |= 32);
      const M = t.directiveTransforms[z];
      if (M) {
        const { props: ae, needRuntime: ke } = M(B, e, t);
        !s && ae.forEach(q), G && S && !ct(S) ? I(Et(ae, i)) : c.push(...ae), ke && (d.push(B), Dt(ke) && od.set(B, ke));
      } else
        Ld(z) || (d.push(B), p && (m = !0));
    }
  }
  let A;
  if (u.length ? (I(), A = u.length > 1 ? je(t.helper(Hr), u, i) : u[0]) : c.length && (A = Et(Tl(c), i)), x ? f |= 16 : (y && !o && (f |= 2), _ && !o && (f |= 4), w.length && (f |= 8), h && (f |= 32)), m || f !== 0 && f !== 32 || !(g || b || d.length > 0) || (f |= 512), !t.inSSR && A)
    switch (A.type) {
      case 15:
        let E = -1, B = -1, z = !1;
        for (let W = 0; W < A.properties.length; W++) {
          const X = A.properties[W].key;
          ct(X) ? X.content === "class" ? E = W : X.content === "style" && (B = W) : X.isHandlerKey || (z = !0);
        }
        const S = A.properties[E], P = A.properties[B];
        z ? A = je(t.helper(Ho), [A]) : (S && !ct(S.value) && (S.value = je(t.helper(ri), [S.value])), P && (_ || P.value.type === 4 && P.value.content.trim()[0] === "[" || P.value.type === 17) && (P.value = je(t.helper(si), [P.value])));
        break;
      case 14:
        break;
      default:
        A = je(t.helper(Ho), [je(t.helper(nr), [A])]);
    }
  return { props: A, directives: d, patchFlag: f, dynamicPropNames: w, shouldUseBlock: m };
}
function Tl(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (r.key.type === 8 || !r.key.isStatic) {
      n.push(r);
      continue;
    }
    const s = r.key.content, a = t.get(s);
    a ? (s === "style" || s === "class" || Yn(s)) && Eh(a, r) : (t.set(s, r), n.push(r));
  }
  return n;
}
function Eh(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = Go([e.value, t.value], e.loc);
}
function ha(e) {
  return e === "component" || e === "Component";
}
const Ih = (e, t) => {
  if (Yr(e)) {
    const { children: n, loc: o } = e, { slotName: r, slotProps: s } = function(l, c) {
      let u, d = '"default"';
      const p = [];
      for (let m = 0; m < l.props.length; m++) {
        const f = l.props[m];
        f.type === 6 ? f.value && (f.name === "name" ? d = JSON.stringify(f.value.content) : (f.name = Re(f.name), p.push(f))) : f.name === "bind" && ro(f.arg, "name") ? f.exp && (d = f.exp) : (f.name === "bind" && f.arg && ct(f.arg) && (f.arg.content = Re(f.arg.content)), p.push(f));
      }
      if (p.length > 0) {
        const { props: m, directives: f } = rd(l, c, p, !1, !1);
        u = m, f.length && c.onError(Ue(36, f[0].loc));
      }
      return { slotName: d, slotProps: u };
    }(e, t), a = [t.prefixIdentifiers ? "_ctx.$slots" : "$slots", r, "{}", "undefined", "true"];
    let i = 2;
    s && (a[2] = s, i = 3), n.length && (a[3] = vo([], n, !1, !1, o), i = 4), t.scopeId && !t.slotted && (i = 5), a.splice(i), e.codegenNode = je(t.helper(Pu), a, o);
  }
}, Th = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, sd = (e, t, n, o) => {
  const { loc: r, modifiers: s, arg: a } = e;
  let i;
  if (a.type === 4)
    if (a.isStatic) {
      let d = a.content;
      d.startsWith("vue:") && (d = `vnode-${d.slice(4)}`), i = de(t.tagType !== 0 || d.startsWith("vnode") || !/[A-Z]/.test(d) ? On(Re(d)) : `on:${d}`, !0, a.loc);
    } else
      i = Pt([`${n.helperString(ia)}(`, a, ")"]);
  else
    i = a, i.children.unshift(`${n.helperString(ia)}(`), i.children.push(")");
  let l = e.exp;
  l && !l.content.trim() && (l = void 0);
  let c = n.cacheHandlers && !l && !n.inVOnce;
  if (l) {
    const d = Vu(l.content), p = !(d || Th.test(l.content)), m = l.content.includes(";");
    (p || c && d) && (l = Pt([`${p ? "$event" : "(...args)"} => ${m ? "{" : "("}`, l, m ? "}" : ")"]));
  }
  let u = { props: [Ne(i, l || de("() => {}", !1, r))] };
  return o && (u = o(u)), c && (u.props[0].value = n.cache(u.props[0].value)), u.props.forEach((d) => d.key.isHandlerKey = !0), u;
}, Rh = (e, t, n) => {
  const { modifiers: o, loc: r } = e, s = e.arg;
  let { exp: a } = e;
  if (!a && s.type === 4) {
    const i = Re(s.content);
    a = e.exp = de(i, !1, s.loc);
  }
  return s.type !== 4 ? (s.children.unshift("("), s.children.push(') || ""')) : s.isStatic || (s.content = `${s.content} || ""`), o.includes("camel") && (s.type === 4 ? s.content = s.isStatic ? Re(s.content) : `${n.helperString(aa)}(${s.content})` : (s.children.unshift(`${n.helperString(aa)}(`), s.children.push(")"))), n.inSSR || (o.includes("prop") && Rl(s, "."), o.includes("attr") && Rl(s, "^")), !a || a.type === 4 && !a.content.trim() ? { props: [Ne(s, de("", !0, r))] } : { props: [Ne(s, a)] };
}, Rl = (e, t) => {
  e.type === 4 ? e.content = e.isStatic ? t + e.content : `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, Nh = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let o, r = !1;
      for (let s = 0; s < n.length; s++) {
        const a = n[s];
        if (Bs(a)) {
          r = !0;
          for (let i = s + 1; i < n.length; i++) {
            const l = n[i];
            if (!Bs(l)) {
              o = void 0;
              break;
            }
            o || (o = n[s] = Pt([a], a.loc)), o.children.push(" + ", l), n.splice(i, 1), i--;
          }
        }
      }
      if (r && (n.length !== 1 || e.type !== 0 && (e.type !== 1 || e.tagType !== 0 || e.props.find((s) => s.type === 7 && !t.directiveTransforms[s.name]))))
        for (let s = 0; s < n.length; s++) {
          const a = n[s];
          if (Bs(a) || a.type === 8) {
            const i = [];
            a.type === 2 && a.content === " " || i.push(a), t.ssr || It(a, t) !== 0 || i.push("1"), n[s] = { type: 12, content: a, loc: a.loc, codegenNode: je(t.helper(Xa), i) };
          }
        }
    };
}, Nl = /* @__PURE__ */ new WeakSet(), Bh = (e, t) => {
  if (e.type === 1 && Ot(e, "once", !0))
    return Nl.has(e) || t.inVOnce || t.inSSR ? void 0 : (Nl.add(e), t.inVOnce = !0, t.helper(Kr), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(n.codegenNode, !0));
    });
}, ad = (e, t, n) => {
  const { exp: o, arg: r } = e;
  if (!o)
    return n.onError(Ue(41, e.loc)), Cr();
  const s = o.loc.source, a = o.type === 4 ? o.content : s, i = n.bindingMetadata[s];
  if (i === "props" || i === "props-aliased")
    return Cr();
  if (!a.trim() || !Vu(a))
    return n.onError(Ue(42, o.loc)), Cr();
  const l = r || de("modelValue", !0), c = r ? ct(r) ? `onUpdate:${Re(r.content)}` : Pt(['"onUpdate:" + ', r]) : "onUpdate:modelValue";
  let u;
  u = Pt([`${n.isTS ? "($event: any)" : "$event"} => ((`, o, ") = $event)"]);
  const d = [Ne(l, e.exp), Ne(c, u)];
  if (e.modifiers.length && t.tagType === 1) {
    const p = e.modifiers.map((f) => (di(f) ? f : JSON.stringify(f)) + ": true").join(", "), m = r ? ct(r) ? `${r.content}Modifiers` : Pt([r, ' + "Modifiers"']) : "modelModifiers";
    d.push(Ne(m, de(`{ ${p} }`, !1, e.loc, 2)));
  }
  return Cr(d);
};
function Cr(e = []) {
  return { props: e };
}
const Bl = /* @__PURE__ */ new WeakSet(), Mh = (e, t) => {
  if (e.type === 1) {
    const n = Ot(e, "memo");
    return !n || Bl.has(e) ? void 0 : (Bl.add(e), () => {
      const o = e.codegenNode || t.currentNode.codegenNode;
      o && o.type === 13 && (e.tagType !== 1 && ci(o, t), e.codegenNode = je(t.helper(li), [n.exp, vo(void 0, o), "_cache", String(t.cached++)]));
    });
  }
};
function Fh(e, t = {}) {
  const n = t.onError || ui, o = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(Ue(47)) : o && n(Ue(48)), t.cacheHandlers && n(Ue(49)), t.scopeId && !o && n(Ue(50));
  const r = xe({}, t, { prefixIdentifiers: !1 }), s = le(e) ? fh(e, r) : e, [a, i] = [[Bh, wh, Mh, kh, Ih, Sh, Ch, Nh], { on: sd, bind: Rh, model: ad }];
  return vh(s, xe({}, r, { nodeTransforms: [...a, ...t.nodeTransforms || []], directiveTransforms: xe({}, i, t.directiveTransforms || {}) })), bh(s, r);
}
const id = Symbol(""), ld = Symbol(""), cd = Symbol(""), ud = Symbol(""), ma = Symbol(""), dd = Symbol(""), pd = Symbol(""), fd = Symbol(""), hd = Symbol(""), md = Symbol("");
var Ms;
let to;
Ms = { [id]: "vModelRadio", [ld]: "vModelCheckbox", [cd]: "vModelText", [ud]: "vModelSelect", [ma]: "vModelDynamic", [dd]: "withModifiers", [pd]: "withKeys", [fd]: "vShow", [hd]: "Transition", [md]: "TransitionGroup" }, Object.getOwnPropertySymbols(Ms).forEach((e) => {
  go[e] = Ms[e];
});
const Oh = { parseMode: "html", isVoidTag: Qd, isNativeTag: (e) => Hd(e) || Kd(e) || Gd(e), isPreTag: (e) => e === "pre", decodeEntities: function(e, t = !1) {
  return to || (to = document.createElement("div")), t ? (to.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, to.children[0].getAttribute("foo")) : (to.innerHTML = e, to.textContent);
}, isBuiltInComponent: (e) => e === "Transition" || e === "transition" ? hd : e === "TransitionGroup" || e === "transition-group" ? md : void 0, getNamespace(e, t, n) {
  let o = t ? t.ns : n;
  if (t && o === 2)
    if (t.tag === "annotation-xml") {
      if (e === "svg")
        return 1;
      t.props.some((r) => r.type === 6 && r.name === "encoding" && r.value != null && (r.value.content === "text/html" || r.value.content === "application/xhtml+xml")) && (o = 0);
    } else
      /^m(?:[ions]|text)$/.test(t.tag) && e !== "mglyph" && e !== "malignmark" && (o = 0);
  else
    t && o === 1 && (t.tag !== "foreignObject" && t.tag !== "desc" && t.tag !== "title" || (o = 0));
  if (o === 0) {
    if (e === "svg")
      return 1;
    if (e === "math")
      return 2;
  }
  return o;
} }, Uh = (e, t) => {
  const n = Kl(e);
  return de(JSON.stringify(n), !1, t, 3);
};
function dn(e, t) {
  return Ue(e, t);
}
const Ph = yt("passive,once,capture"), Dh = yt("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"), Lh = yt("left,right"), Ml = yt("onkeyup,onkeydown,onkeypress", !0), Fl = (e, t) => ct(e) && e.content.toLowerCase() === "onclick" ? de(t, !0) : e.type !== 4 ? Pt(["(", e, `) === "onClick" ? "${t}" : (`, e, ")"]) : e, $h = (e, t) => {
  e.type !== 1 || e.tagType !== 0 || e.tag !== "script" && e.tag !== "style" || t.removeNode();
}, jh = [(e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = { type: 7, name: "bind", arg: de("style", !0, t.loc), exp: Uh(t.value.content, t.loc), modifiers: [], loc: t.loc });
  });
}], Vh = { cloak: () => ({ props: [] }), html: (e, t, n) => {
  const { exp: o, loc: r } = e;
  return o || n.onError(dn(53, r)), t.children.length && (n.onError(dn(54, r)), t.children.length = 0), { props: [Ne(de("innerHTML", !0, r), o || de("", !0))] };
}, text: (e, t, n) => {
  const { exp: o, loc: r } = e;
  return o || n.onError(dn(55, r)), t.children.length && (n.onError(dn(56, r)), t.children.length = 0), { props: [Ne(de("textContent", !0), o ? It(o, n) > 0 ? o : je(n.helperString(gs), [o], r) : de("", !0))] };
}, model: (e, t, n) => {
  const o = ad(e, t, n);
  if (!o.props.length || t.tagType === 1)
    return o;
  e.arg && n.onError(dn(58, e.arg.loc));
  const { tag: r } = t, s = n.isCustomElement(r);
  if (r === "input" || r === "textarea" || r === "select" || s) {
    let a = cd, i = !1;
    if (r === "input" || s) {
      const l = vs(t, "type");
      if (l) {
        if (l.type === 7)
          a = ma;
        else if (l.value)
          switch (l.value.content) {
            case "radio":
              a = id;
              break;
            case "checkbox":
              a = ld;
              break;
            case "file":
              i = !0, n.onError(dn(59, e.loc));
          }
      } else
        (function(c) {
          return c.props.some((u) => !(u.type !== 7 || u.name !== "bind" || u.arg && u.arg.type === 4 && u.arg.isStatic));
        })(t) && (a = ma);
    } else
      r === "select" && (a = ud);
    i || (o.needRuntime = n.helper(a));
  } else
    n.onError(dn(57, e.loc));
  return o.props = o.props.filter((a) => !(a.key.type === 4 && a.key.content === "modelValue")), o;
}, on: (e, t, n) => sd(e, t, n, (o) => {
  const { modifiers: r } = e;
  if (!r.length)
    return o;
  let { key: s, value: a } = o.props[0];
  const { keyModifiers: i, nonKeyModifiers: l, eventOptionModifiers: c } = ((u, d, p, m) => {
    const f = [], g = [], y = [];
    for (let _ = 0; _ < d.length; _++) {
      const h = d[_];
      Ph(h) ? y.push(h) : Lh(h) ? ct(u) ? Ml(u.content) ? f.push(h) : g.push(h) : (f.push(h), g.push(h)) : Dh(h) ? g.push(h) : f.push(h);
    }
    return { keyModifiers: f, nonKeyModifiers: g, eventOptionModifiers: y };
  })(s, r);
  if (l.includes("right") && (s = Fl(s, "onContextmenu")), l.includes("middle") && (s = Fl(s, "onMouseup")), l.length && (a = je(n.helper(dd), [a, JSON.stringify(l)])), !i.length || ct(s) && !Ml(s.content) || (a = je(n.helper(pd), [a, JSON.stringify(i)])), c.length) {
    const u = c.map(Zn).join("");
    s = ct(s) ? de(`${s.content}${u}`, !0) : Pt(["(", s, `) + "${u}"`]);
  }
  return { props: [Ne(s, a)] };
}), show: (e, t, n) => {
  const { exp: o, loc: r } = e;
  return o || n.onError(dn(61, r)), { props: [], needRuntime: n.helper(fd) };
} }, Ol = /* @__PURE__ */ new WeakMap();
function zh(e, t) {
  if (!le(e)) {
    if (!e.nodeType)
      return Ve;
    e = e.innerHTML;
  }
  const n = e, o = function(l) {
    let c = Ol.get(l ?? be);
    return c || (c = /* @__PURE__ */ Object.create(null), Ol.set(l ?? be, c)), c;
  }(t), r = o[n];
  if (r)
    return r;
  if (e[0] === "#") {
    const l = document.querySelector(e);
    e = l ? l.innerHTML : "";
  }
  const s = xe({ hoistStatic: !0, onError: void 0, onWarn: Ve }, t);
  s.isCustomElement || typeof customElements > "u" || (s.isCustomElement = (l) => !!customElements.get(l));
  const { code: a } = function(l, c = {}) {
    return Fh(l, xe({}, Oh, c, { nodeTransforms: [$h, ...jh, ...c.nodeTransforms || []], directiveTransforms: xe({}, Vh, c.directiveTransforms || {}), transformHoist: null }));
  }(e, s), i = new Function("Vue", a)(Hf);
  return i._rc = !0, o[n] = i;
}
cu(zh);
const qh = `:host{all:unset}body,html{position:fixed;width:100%;height:100%}body{background:var(--background-hotspot);color:var(--foreground-hotspot);min-height:screen;position:relative;font-family:Inter,sans-serif}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--un-rotate: 0;--un-rotate-x: 0;--un-rotate-y: 0;--un-rotate-z: 0;--un-scale-x: 1;--un-scale-y: 1;--un-scale-z: 1;--un-skew-x: 0;--un-skew-y: 0;--un-translate-x: 0;--un-translate-y: 0;--un-translate-z: 0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness: proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x: 0;--un-border-spacing-y: 0;--un-ring-offset-shadow: 0 0 rgb(0 0 0 / 0);--un-ring-shadow: 0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow: 0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width: 0px;--un-ring-offset-color: #fff;--un-ring-width: 0px;--un-ring-color: rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate: 0;--un-rotate-x: 0;--un-rotate-y: 0;--un-rotate-z: 0;--un-scale-x: 1;--un-scale-y: 1;--un-scale-z: 1;--un-skew-x: 0;--un-skew-y: 0;--un-translate-x: 0;--un-translate-y: 0;--un-translate-z: 0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness: proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x: 0;--un-border-spacing-y: 0;--un-ring-offset-shadow: 0 0 rgb(0 0 0 / 0);--un-ring-shadow: 0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow: 0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width: 0px;--un-ring-offset-color: #fff;--un-ring-width: 0px;--un-ring-color: rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-greek-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-greek-400-normal.woff) format("woff");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-latin-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-latin-400-normal.woff) format("woff");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-cyrillic-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-cyrillic-400-normal.woff) format("woff");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-greek-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-greek-ext-400-normal.woff) format("woff");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-latin-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-latin-ext-400-normal.woff) format("woff");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-vietnamese-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-vietnamese-400-normal.woff) format("woff");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-cyrillic-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-cyrillic-ext-400-normal.woff) format("woff");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-latin-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-latin-400-normal.woff) format("woff");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-latin-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-latin-ext-400-normal.woff) format("woff");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-vietnamese-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-vietnamese-400-normal.woff) format("woff");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@keyframes shadcn-down{0%{height:0}to{height:var(--radix-accordion-content-height)}}@keyframes shadcn-up{0%{height:var(--radix-accordion-content-height)}to{height:0}}@keyframes shadcn-enter{0%{opacity:var(--un-enter-opacity, 1);transform:translate3d(var(--un-enter-translate-x, 0),var(--un-enter-translate-y, 0),0) scale3d(var(--un-enter-scale, 1),var(--un-enter-scale, 1),var(--un-enter-scale, 1)) rotate(var(--un-enter-rotate, 0))}}@keyframes shadcn-exit{to{opacity:var(--un-exit-opacity, 1);transform:translate3d(var(--un-exit-translate-x, 0),var(--un-exit-translate-y, 0),0) scale3d(var(--un-exit-scale, 1),var(--un-exit-scale, 1),var(--un-exit-scale, 1)) rotate(var(--un-exit-rotate, 0))}}html{color-scheme:light}html.dark{color-scheme:dark}.theme-blue{--background-hotspot: 0 0% 100%;--foreground-hotspot: 222.2 84% 4.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 222.2 84% 4.9%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 222.2 84% 4.9%;--primary-hotspot: 221.2 83.2% 53.3%;--primary-foreground-hotspot: 210 40% 98%;--secondary-hotspot: 210 40% 96.1%;--secondary-foreground-hotspot: 222.2 47.4% 11.2%;--muted-hotspot: 210 40% 96.1%;--muted-foreground-hotspot: 215.4 16.3% 46.9%;--accent-hotspot: 210 40% 96.1%;--accent-foreground-hotspot: 222.2 47.4% 11.2%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 40% 98%;--border-hotspot: 214.3 31.8% 91.4%;--input-hotspot: 214.3 31.8% 91.4%;--ring-hotspot: 221.2 83.2% 53.3%;--radius-hotspot: .5rem}.theme-blue.dark{--background-hotspot: 222.2 84% 4.9%;--foreground-hotspot: 210 40% 98%;--card-hotspot: 222.2 84% 4.9%;--card-foreground-hotspot: 210 40% 98%;--popover-hotspot: 222.2 84% 4.9%;--popover-foreground-hotspot: 210 40% 98%;--primary-hotspot: 217.2 91.2% 59.8%;--primary-foreground-hotspot: 222.2 47.4% 11.2%;--secondary-hotspot: 217.2 32.6% 17.5%;--secondary-foreground-hotspot: 210 40% 98%;--muted-hotspot: 217.2 32.6% 17.5%;--muted-foreground-hotspot: 215 20.2% 65.1%;--accent-hotspot: 217.2 32.6% 17.5%;--accent-foreground-hotspot: 210 40% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 210 40% 98%;--border-hotspot: 217.2 32.6% 17.5%;--input-hotspot: 217.2 32.6% 17.5%;--ring-hotspot: 224.3 76.3% 48%}.theme-zinc{--background-hotspot: 0 0% 100%;--foreground-hotspot: 240 10% 3.9%;--muted-hotspot: 240 4.8% 95.9%;--muted-foreground-hotspot: 240 3.8% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 240 10% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 240 10% 3.9%;--border-hotspot: 240 5.9% 90%;--input-hotspot: 240 5.9% 90%;--primary-hotspot: 240 5.9% 10%;--primary-foreground-hotspot: 0 0% 98%;--secondary-hotspot: 240 4.8% 95.9%;--secondary-foreground-hotspot: 240 5.9% 10%;--accent-hotspot: 240 4.8% 95.9%;--accent-foreground-hotspot: 240 5.9% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 240 5.9% 10%;--radius-hotspot: .5rem}.theme-zinc.dark{--background-hotspot: 240 10% 3.9%;--foreground-hotspot: 0 0% 98%;--muted-hotspot: 240 3.7% 15.9%;--muted-foreground-hotspot: 240 5% 64.9%;--popover-hotspot: 240 10% 3.9%;--popover-foreground-hotspot: 0 0% 98%;--card-hotspot: 240 10% 3.9%;--card-foreground-hotspot: 0 0% 98%;--border-hotspot: 240 3.7% 15.9%;--input-hotspot: 240 3.7% 15.9%;--primary-hotspot: 0 0% 98%;--primary-foreground-hotspot: 240 5.9% 10%;--secondary-hotspot: 240 3.7% 15.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 240 3.7% 15.9%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 240 4.9% 83.9%}.theme-slate{--background-hotspot: 0 0% 100%;--foreground-hotspot: 222.2 84% 4.9%;--muted-hotspot: 210 40% 96.1%;--muted-foreground-hotspot: 215.4 16.3% 46.9%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 222.2 84% 4.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 222.2 84% 4.9%;--border-hotspot: 214.3 31.8% 91.4%;--input-hotspot: 214.3 31.8% 91.4%;--primary-hotspot: 222.2 47.4% 11.2%;--primary-foreground-hotspot: 210 40% 98%;--secondary-hotspot: 210 40% 96.1%;--secondary-foreground-hotspot: 222.2 47.4% 11.2%;--accent-hotspot: 210 40% 96.1%;--accent-foreground-hotspot: 222.2 47.4% 11.2%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 40% 98%;--ring-hotspot: 222.2 84% 4.9%;--radius-hotspot: .5rem}.theme-slate.dark{--background-hotspot: 222.2 84% 4.9%;--foreground-hotspot: 210 40% 98%;--muted-hotspot: 217.2 32.6% 17.5%;--muted-foreground-hotspot: 215 20.2% 65.1%;--popover-hotspot: 222.2 84% 4.9%;--popover-foreground-hotspot: 210 40% 98%;--card-hotspot: 222.2 84% 4.9%;--card-foreground-hotspot: 210 40% 98%;--border-hotspot: 217.2 32.6% 17.5%;--input-hotspot: 217.2 32.6% 17.5%;--primary-hotspot: 210 40% 98%;--primary-foreground-hotspot: 222.2 47.4% 11.2%;--secondary-hotspot: 217.2 32.6% 17.5%;--secondary-foreground-hotspot: 210 40% 98%;--accent-hotspot: 217.2 32.6% 17.5%;--accent-foreground-hotspot: 210 40% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 210 40% 98%;--ring-hotspot: 212.7 26.8% 83.9}.theme-stone{--background-hotspot: 0 0% 100%;--foreground-hotspot: 20 14.3% 4.1%;--muted-hotspot: 60 4.8% 95.9%;--muted-foreground-hotspot: 25 5.3% 44.7%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 20 14.3% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 20 14.3% 4.1%;--border-hotspot: 20 5.9% 90%;--input-hotspot: 20 5.9% 90%;--primary-hotspot: 24 9.8% 10%;--primary-foreground-hotspot: 60 9.1% 97.8%;--secondary-hotspot: 60 4.8% 95.9%;--secondary-foreground-hotspot: 24 9.8% 10%;--accent-hotspot: 60 4.8% 95.9%;--accent-foreground-hotspot: 24 9.8% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 20 14.3% 4.1%;--radius-hotspot: .5rem}.theme-stone.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 60 9.1% 97.8%;--muted-hotspot: 12 6.5% 15.1%;--muted-foreground-hotspot: 24 5.4% 63.9%;--popover-hotspot: 20 14.3% 4.1%;--popover-foreground-hotspot: 60 9.1% 97.8%;--card-hotspot: 20 14.3% 4.1%;--card-foreground-hotspot: 60 9.1% 97.8%;--border-hotspot: 12 6.5% 15.1%;--input-hotspot: 12 6.5% 15.1%;--primary-hotspot: 60 9.1% 97.8%;--primary-foreground-hotspot: 24 9.8% 10%;--secondary-hotspot: 12 6.5% 15.1%;--secondary-foreground-hotspot: 60 9.1% 97.8%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 60 9.1% 97.8%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 24 5.7% 82.9%}.theme-gray{--background-hotspot: 0 0% 100%;--foreground-hotspot: 224 71.4% 4.1%;--muted-hotspot: 220 14.3% 95.9%;--muted-foreground-hotspot: 220 8.9% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 224 71.4% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 224 71.4% 4.1%;--border-hotspot: 220 13% 91%;--input-hotspot: 220 13% 91%;--primary-hotspot: 220.9 39.3% 11%;--primary-foreground-hotspot: 210 20% 98%;--secondary-hotspot: 220 14.3% 95.9%;--secondary-foreground-hotspot: 220.9 39.3% 11%;--accent-hotspot: 220 14.3% 95.9%;--accent-foreground-hotspot: 220.9 39.3% 11%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 20% 98%;--ring-hotspot: 224 71.4% 4.1%;--radius-hotspot: .5rem}.theme-gray.dark{--background-hotspot: 224 71.4% 4.1%;--foreground-hotspot: 210 20% 98%;--muted-hotspot: 215 27.9% 16.9%;--muted-foreground-hotspot: 217.9 10.6% 64.9%;--popover-hotspot: 224 71.4% 4.1%;--popover-foreground-hotspot: 210 20% 98%;--card-hotspot: 224 71.4% 4.1%;--card-foreground-hotspot: 210 20% 98%;--border-hotspot: 215 27.9% 16.9%;--input-hotspot: 215 27.9% 16.9%;--primary-hotspot: 210 20% 98%;--primary-foreground-hotspot: 220.9 39.3% 11%;--secondary-hotspot: 215 27.9% 16.9%;--secondary-foreground-hotspot: 210 20% 98%;--accent-hotspot: 215 27.9% 16.9%;--accent-foreground-hotspot: 210 20% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 210 20% 98%;--ring-hotspot: 216 12.2% 83.9%}.theme-neutral{--background-hotspot: 0 0% 100%;--foreground-hotspot: 0 0% 3.9%;--muted-hotspot: 0 0% 96.1%;--muted-foreground-hotspot: 0 0% 45.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 0 0% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 0 0% 3.9%;--border-hotspot: 0 0% 89.8%;--input-hotspot: 0 0% 89.8%;--primary-hotspot: 0 0% 9%;--primary-foreground-hotspot: 0 0% 98%;--secondary-hotspot: 0 0% 96.1%;--secondary-foreground-hotspot: 0 0% 9%;--accent-hotspot: 0 0% 96.1%;--accent-foreground-hotspot: 0 0% 9%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 0 0% 3.9%;--radius-hotspot: .5rem}.theme-neutral.dark{--background-hotspot: 0 0% 3.9%;--foreground-hotspot: 0 0% 98%;--muted-hotspot: 0 0% 14.9%;--muted-foreground-hotspot: 0 0% 63.9%;--popover-hotspot: 0 0% 3.9%;--popover-foreground-hotspot: 0 0% 98%;--card-hotspot: 0 0% 3.9%;--card-foreground-hotspot: 0 0% 98%;--border-hotspot: 0 0% 14.9%;--input-hotspot: 0 0% 14.9%;--primary-hotspot: 0 0% 98%;--primary-foreground-hotspot: 0 0% 9%;--secondary-hotspot: 0 0% 14.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 0 0% 14.9%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 0 0% 83.1%}.theme-red{--background-hotspot: 0 0% 100%;--foreground-hotspot: 0 0% 3.9%;--muted-hotspot: 0 0% 96.1%;--muted-foreground-hotspot: 0 0% 45.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 0 0% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 0 0% 3.9%;--border-hotspot: 0 0% 89.8%;--input-hotspot: 0 0% 89.8%;--primary-hotspot: 0 72.2% 50.6%;--primary-foreground-hotspot: 0 85.7% 97.3%;--secondary-hotspot: 0 0% 96.1%;--secondary-foreground-hotspot: 0 0% 9%;--accent-hotspot: 0 0% 96.1%;--accent-foreground-hotspot: 0 0% 9%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 0 72.2% 50.6%;--radius-hotspot: .5rem}.theme-red.dark{--background-hotspot: 0 0% 3.9%;--foreground-hotspot: 0 0% 98%;--muted-hotspot: 0 0% 14.9%;--muted-foreground-hotspot: 0 0% 63.9%;--popover-hotspot: 0 0% 3.9%;--popover-foreground-hotspot: 0 0% 98%;--card-hotspot: 0 0% 3.9%;--card-foreground-hotspot: 0 0% 98%;--border-hotspot: 0 0% 14.9%;--input-hotspot: 0 0% 14.9%;--primary-hotspot: 0 72.2% 50.6%;--primary-foreground-hotspot: 0 85.7% 97.3%;--secondary-hotspot: 0 0% 14.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 0 0% 14.9%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 0 72.2% 50.6%}.theme-rose{--background-hotspot: 0 0% 100%;--foreground-hotspot: 240 10% 3.9%;--muted-hotspot: 240 4.8% 95.9%;--muted-foreground-hotspot: 240 3.8% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 240 10% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 240 10% 3.9%;--border-hotspot: 240 5.9% 90%;--input-hotspot: 240 5.9% 90%;--primary-hotspot: 346.8 77.2% 49.8%;--primary-foreground-hotspot: 355.7 100% 97.3%;--secondary-hotspot: 240 4.8% 95.9%;--secondary-foreground-hotspot: 240 5.9% 10%;--accent-hotspot: 240 4.8% 95.9%;--accent-foreground-hotspot: 240 5.9% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 346.8 77.2% 49.8%;--radius-hotspot: .5rem}.theme-rose.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 0 0% 95%;--muted-hotspot: 0 0% 15%;--muted-foreground-hotspot: 240 5% 64.9%;--popover-hotspot: 0 0% 9%;--popover-foreground-hotspot: 0 0% 95%;--card-hotspot: 24 9.8% 10%;--card-foreground-hotspot: 0 0% 95%;--border-hotspot: 240 3.7% 15.9%;--input-hotspot: 240 3.7% 15.9%;--primary-hotspot: 346.8 77.2% 49.8%;--primary-foreground-hotspot: 355.7 100% 97.3%;--secondary-hotspot: 240 3.7% 15.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 85.7% 97.3%;--ring-hotspot: 346.8 77.2% 49.8%}.theme-orange{--background-hotspot: 0 0% 100%;--foreground-hotspot: 20 14.3% 4.1%;--muted-hotspot: 60 4.8% 95.9%;--muted-foreground-hotspot: 25 5.3% 44.7%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 20 14.3% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 20 14.3% 4.1%;--border-hotspot: 20 5.9% 90%;--input-hotspot: 20 5.9% 90%;--primary-hotspot: 24.6 95% 53.1%;--primary-foreground-hotspot: 60 9.1% 97.8%;--secondary-hotspot: 60 4.8% 95.9%;--secondary-foreground-hotspot: 24 9.8% 10%;--accent-hotspot: 60 4.8% 95.9%;--accent-foreground-hotspot: 24 9.8% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 24.6 95% 53.1%;--radius-hotspot: .5rem}.theme-orange.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 60 9.1% 97.8%;--muted-hotspot: 12 6.5% 15.1%;--muted-foreground-hotspot: 24 5.4% 63.9%;--popover-hotspot: 20 14.3% 4.1%;--popover-foreground-hotspot: 60 9.1% 97.8%;--card-hotspot: 20 14.3% 4.1%;--card-foreground-hotspot: 60 9.1% 97.8%;--border-hotspot: 12 6.5% 15.1%;--input-hotspot: 12 6.5% 15.1%;--primary-hotspot: 20.5 90.2% 48.2%;--primary-foreground-hotspot: 60 9.1% 97.8%;--secondary-hotspot: 12 6.5% 15.1%;--secondary-foreground-hotspot: 60 9.1% 97.8%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 60 9.1% 97.8%;--destructive-hotspot: 0 72.2% 50.6%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 20.5 90.2% 48.2%}.theme-green{--background-hotspot: 0 0% 100%;--foreground-hotspot: 240 10% 3.9%;--muted-hotspot: 240 4.8% 95.9%;--muted-foreground-hotspot: 240 3.8% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 240 10% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 240 10% 3.9%;--border-hotspot: 240 5.9% 90%;--input-hotspot: 240 5.9% 90%;--primary-hotspot: 142.1 76.2% 36.3%;--primary-foreground-hotspot: 355.7 100% 97.3%;--secondary-hotspot: 240 4.8% 95.9%;--secondary-foreground-hotspot: 240 5.9% 10%;--accent-hotspot: 240 4.8% 95.9%;--accent-foreground-hotspot: 240 5.9% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 142.1 76.2% 36.3%;--radius-hotspot: .5rem}.theme-green.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 0 0% 95%;--muted-hotspot: 0 0% 15%;--muted-foreground-hotspot: 240 5% 64.9%;--popover-hotspot: 0 0% 9%;--popover-foreground-hotspot: 0 0% 95%;--card-hotspot: 24 9.8% 10%;--card-foreground-hotspot: 0 0% 95%;--border-hotspot: 240 3.7% 15.9%;--input-hotspot: 240 3.7% 15.9%;--primary-hotspot: 142.1 70.6% 45.3%;--primary-foreground-hotspot: 144.9 80.4% 10%;--secondary-hotspot: 240 3.7% 15.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 85.7% 97.3%;--ring-hotspot: 142.4 71.8% 29.2%}.theme-yellow{--background-hotspot: 0 0% 100%;--foreground-hotspot: 20 14.3% 4.1%;--muted-hotspot: 60 4.8% 95.9%;--muted-foreground-hotspot: 25 5.3% 44.7%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 20 14.3% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 20 14.3% 4.1%;--border-hotspot: 20 5.9% 90%;--input-hotspot: 20 5.9% 90%;--primary-hotspot: 47.9 95.8% 53.1%;--primary-foreground-hotspot: 26 83.3% 14.1%;--secondary-hotspot: 60 4.8% 95.9%;--secondary-foreground-hotspot: 24 9.8% 10%;--accent-hotspot: 60 4.8% 95.9%;--accent-foreground-hotspot: 24 9.8% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 20 14.3% 4.1%;--radius-hotspot: .5rem}.theme-yellow.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 60 9.1% 97.8%;--muted-hotspot: 12 6.5% 15.1%;--muted-foreground-hotspot: 24 5.4% 63.9%;--popover-hotspot: 20 14.3% 4.1%;--popover-foreground-hotspot: 60 9.1% 97.8%;--card-hotspot: 20 14.3% 4.1%;--card-foreground-hotspot: 60 9.1% 97.8%;--border-hotspot: 12 6.5% 15.1%;--input-hotspot: 12 6.5% 15.1%;--primary-hotspot: 47.9 95.8% 53.1%;--primary-foreground-hotspot: 26 83.3% 14.1%;--secondary-hotspot: 12 6.5% 15.1%;--secondary-foreground-hotspot: 60 9.1% 97.8%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 60 9.1% 97.8%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 35.5 91.7% 32.9%}.theme-violet{--background-hotspot: 0 0% 100%;--foreground-hotspot: 224 71.4% 4.1%;--muted-hotspot: 220 14.3% 95.9%;--muted-foreground-hotspot: 220 8.9% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 224 71.4% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 224 71.4% 4.1%;--border-hotspot: 220 13% 91%;--input-hotspot: 220 13% 91%;--primary-hotspot: 262.1 83.3% 57.8%;--primary-foreground-hotspot: 210 20% 98%;--secondary-hotspot: 220 14.3% 95.9%;--secondary-foreground-hotspot: 220.9 39.3% 11%;--accent-hotspot: 220 14.3% 95.9%;--accent-foreground-hotspot: 220.9 39.3% 11%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 20% 98%;--ring-hotspot: 262.1 83.3% 57.8%;--radius-hotspot: .5rem}.theme-violet.dark{--background-hotspot: 224 71.4% 4.1%;--foreground-hotspot: 210 20% 98%;--muted-hotspot: 215 27.9% 16.9%;--muted-foreground-hotspot: 217.9 10.6% 64.9%;--popover-hotspot: 224 71.4% 4.1%;--popover-foreground-hotspot: 210 20% 98%;--card-hotspot: 224 71.4% 4.1%;--card-foreground-hotspot: 210 20% 98%;--border-hotspot: 215 27.9% 16.9%;--input-hotspot: 215 27.9% 16.9%;--primary-hotspot: 263.4 70% 50.4%;--primary-foreground-hotspot: 210 20% 98%;--secondary-hotspot: 215 27.9% 16.9%;--secondary-foreground-hotspot: 210 20% 98%;--accent-hotspot: 215 27.9% 16.9%;--accent-foreground-hotspot: 210 20% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 210 20% 98%;--ring-hotspot: 263.4 70% 50.4%}.i-bi-grid-fill{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 16 16' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-clarity-success-standard-line{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 36 36' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14' class='clr-i-outline clr-i-outline-path-1'/%3E%3Cpath fill='currentColor' d='M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05l-6-6A1 1 0 0 0 8 18.53L15.49 26L28 13.52a1 1 0 0 0 0-1.42' class='clr-i-outline clr-i-outline-path-2'/%3E%3Cpath fill='none' d='M0 0h36v36H0z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-eos-icons-loading{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z' opacity='.5'/%3E%3Cpath fill='currentColor' d='M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z'%3E%3CanimateTransform attributeName='transform' dur='1s' from='0 12 12' repeatCount='indefinite' to='360 12 12' type='rotate'/%3E%3C/path%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-iconamoon-information-circle-duotone{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none'%3E%3Ccircle cx='12' cy='12' r='9' fill='currentColor' opacity='.16'/%3E%3Ccircle cx='12' cy='12' r='9' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cpath stroke='currentColor' stroke-linejoin='round' stroke-width='3' d='M12 8h.01v.01H12z'/%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 12v4'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-ion-wallet{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 512 512' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M95.5 104h320a87.73 87.73 0 0 1 11.18.71a66 66 0 0 0-77.51-55.56L86 94.08h-.3a66 66 0 0 0-41.07 26.13A87.57 87.57 0 0 1 95.5 104m320 24h-320a64.07 64.07 0 0 0-64 64v192a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V192a64.07 64.07 0 0 0-64-64M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32'/%3E%3Cpath fill='currentColor' d='M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16s-18.5 24.5 0 24.5s0 23.5 0 23.5L85.5 236Z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-error-outline-rounded{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 17q.425 0 .713-.288T13 16q0-.425-.288-.712T12 15q-.425 0-.712.288T11 16q0 .425.288.713T12 17m0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8v4q0 .425.288.713T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-movie-info-outline-rounded{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm8-4q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11q-.425 0-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9M8 19h8V5H8zM8 5h8zM4 19h2v-2H4zm14 0h2v-2h-2zM4 15h2v-2H4zm14 0h2v-2h-2zM4 11h2V9H4zm14 0h2V9h-2zM4 7h2V5H4zm14 0h2V5h-2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-wifi-password{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M2.125 11.1L0 8.975q2.325-2.325 5.388-3.65T12 4q3.55 0 6.613 1.325T24 8.975L21.875 11.1q-1.9-1.925-4.437-3.012T12 7Q9.1 7 6.563 8.088T2.125 11.1m4.225 4.25l-2.1-2.125q1.5-1.5 3.488-2.362T12 10q2.275 0 4.263.863t3.487 2.362l-2.1 2.125q-1.1-1.1-2.55-1.725T12 13q-1.65 0-3.1.625T6.35 15.35M12 21q-1.05 0-1.775-.725T9.5 18.5q0-1.05.725-1.775T12 16q1.05 0 1.775.725T14.5 18.5q0 1.05-.725 1.775T12 21m7 3q-.425 0-.712-.288T18 23v-3q0-.425.288-.712T19 19v-1q0-.825.588-1.412T21 16q.825 0 1.413.588T23 18v1q.425 0 .713.288T24 20v3q0 .425-.288.713T23 24zm1-5h2v-1q0-.425-.288-.712T21 17q-.425 0-.712.288T20 18z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-arrow-down-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 4v16m0 0l6-6m-6 6l-6-6'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-arrow-right-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 12h16m0 0l-6-6m6 6l-6 6'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-arrow-up-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 20V4m0 0l6 6m-6-6l-6 6'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-gift-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none' stroke='currentColor' stroke-width='1.5'%3E%3Cpath stroke-linecap='round' d='M22 12H2M12 2v20m1-10a4 4 0 0 0 4 4m-6-4a4 4 0 0 1-4 4'/%3E%3Cpath d='M12 10.035a3.247 3.247 0 0 1 2.46-3.15c1.603-.4 3.056 1.052 2.655 2.656a3.247 3.247 0 0 1-3.15 2.46H12zm0 0a3.247 3.247 0 0 0-2.46-3.15c-1.603-.4-3.056 1.052-2.655 2.656a3.247 3.247 0 0 0 3.15 2.46H12z'/%3E%3Cpath d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-global-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none' stroke='currentColor' stroke-width='1.5'%3E%3Cpath d='M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12z'/%3E%3Cpath d='M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761c-.525 0-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.614 23.614 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2c.525 0 1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12z'/%3E%3Cpath stroke-linecap='round' d='M2 12h20'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-streamline-ticket-1-solid{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 14 14' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8.605 1.55h-7.05a1.5 1.5 0 0 0-1.5 1.5v2a.5.5 0 0 0 .374.483a1.517 1.517 0 0 1 0 2.933a.5.5 0 0 0-.373.484v1.999a1.5 1.5 0 0 0 1.5 1.5h7.05v-1.715a.625.625 0 1 1 1.25 0v1.715h2.588a1.5 1.5 0 0 0 1.5-1.5V8.946a.5.5 0 0 0-.369-.483a1.517 1.517 0 0 1 0-2.926a.5.5 0 0 0 .37-.483V3.051a1.5 1.5 0 0 0-1.5-1.5h-2.59v1.723a.625.625 0 0 1-1.25 0zm.625 3.816c.346 0 .625.28.625.625v2.016a.625.625 0 0 1-1.25 0V5.991c0-.345.28-.625.625-.625' clip-rule='evenodd'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.disabled\\:pointer-events-none:disabled{pointer-events:none}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:0}.inset-x-0{left:0;right:0}.-top-3{top:-.75rem}.bottom-\\[-30px\\]{bottom:-30px}.bottom-0{bottom:0}.bottom-150px{bottom:150px}.bottom-20px{bottom:20px}.left-\\[-50px\\]{left:-50px}.left-\\[50\\%\\],.left-1\\/2{left:50%}.left-0{left:0}.left-10px{left:10px}.right-\\[-90px\\]{right:-90px}.right-\\[10px\\],.right-10px{right:10px}.top-\\[-100px\\]{top:-100px}.top-\\[10px\\],.top-10px{top:10px}.top-\\[50\\%\\],.top-1\\/2{top:50%}.top-0{top:0}.z--1{z-index:-1}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.z-50{z-index:50}.grid{display:grid}.grid-rows-\\[auto_1fr_auto\\]{grid-template-rows:auto 1fr auto}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-4{margin-top:1rem;margin-bottom:1rem}.my-75px{margin-top:75px;margin-bottom:75px}.-mt-0\\.5{margin-top:-.125rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.me-2{margin-inline-end:.5rem}.ml-1{margin-left:.25rem}.mt-\\[-250px\\]{margin-top:-250px}.mt-\\[-30px\\]{margin-top:-30px}.mt-1{margin-top:.25rem}.mt-1\\.5{margin-top:.375rem}.mt-2{margin-top:.5rem}.mt-24{margin-top:6rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-auto{margin-top:auto}.block{display:block}.hidden{display:none}.h-\\[100dvh\\]{height:100dvh}.h-\\[1px\\],.h-px{height:1px}.h-\\[200px\\]{height:200px}.h-\\[25px\\]{height:25px}.h-\\[400px\\]{height:400px}.h-\\[42px\\]{height:42px}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-12{height:3rem}.h-2{height:.5rem}.h-30{height:7.5rem}.h-4{height:1rem}.h-40{height:10rem}.h-40px{height:40px}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-80{height:20rem}.h-9{height:2.25rem}.h-auto{height:auto}.h-fit{height:fit-content}.h-full{height:100%}.max-h-\\[100dvh\\],.max-h-100dvh{max-height:100dvh}.max-h-90dvh{max-height:90dvh}.max-h-full{max-height:100%}.max-w-4xl{max-width:56rem}.max-w-lg{max-width:32rem}.min-h-\\[100dvh\\]{min-height:100dvh}.w-\\[100px\\]{width:100px}.w-\\[1px\\],.w-px{width:1px}.w-\\[25px\\]{width:25px}.w-\\[42px\\]{width:42px}.w-10{width:2.5rem}.w-100dvw{width:100dvw}.w-12{width:3rem}.w-4{width:1rem}.w-40{width:10rem}.w-6{width:1.5rem}.w-7{width:1.75rem}.w-80{width:20rem}.w-9{width:2.25rem}.w-full{width:100%}.flex{display:flex}.inline-flex{display:inline-flex}.shrink-0{flex-shrink:0}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.-translate-x-1\\/2,.translate-x-\\[-50\\%\\]{--un-translate-x: -50%;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.-translate-y-1\\/2,.translate-y-\\[-50\\%\\]{--un-translate-y: -50%;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.hover\\:-translate-y-1:hover{--un-translate-y: -.25rem;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.transform{transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.place-items-end{place-items:end}.items-start{align-items:flex-start}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.space-y-1>:not([hidden])~:not([hidden]){--un-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.25rem * var(--un-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--un-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.5rem * var(--un-space-y-reverse))}.of-hidden,.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.border{border-width:1px}.border-2{border-width:2px}.border-3{border-width:3px}.file\\:border-0::file-selector-button{border-width:0px}.border-border{--un-border-opacity: 1;border-color:hsl(var(--border-hotspot) / var(--un-border-opacity))}.border-green-400{--un-border-opacity: 1;border-color:rgb(74 222 128 / var(--un-border-opacity))}.border-input{--un-border-opacity: 1;border-color:hsl(var(--input-hotspot) / var(--un-border-opacity))}.border-neutral-200{--un-border-opacity: 1;border-color:rgb(229 229 229 / var(--un-border-opacity))}.border-primary\\/20{border-color:hsl(var(--primary-hotspot) / .2)}.border-primary\\/50{border-color:hsl(var(--primary-hotspot) / .5)}.border-white\\/15{border-color:#ffffff26}.border-white\\/20{border-color:#fff3}.dark .dark\\:border-neutral-800{--un-border-opacity: 1;border-color:rgb(38 38 38 / var(--un-border-opacity))}.hover\\:border-primary\\/20:hover{border-color:hsl(var(--primary-hotspot) / .2)}.rounded-\\[0px\\],.rounded-0{border-radius:0}.rounded-full{border-radius:9999px}.rounded-md{border-radius:calc(var(--radius-hotspot) - 2px)}.rounded-sm{border-radius:calc(var(--radius-hotspot) - 4px)}.rounded-xl{border-radius:.75rem}.rounded-b-2xl{border-bottom-left-radius:1rem;border-bottom-right-radius:1rem}.rounded-b-md{border-bottom-left-radius:calc(var(--radius-hotspot) - 2px);border-bottom-right-radius:calc(var(--radius-hotspot) - 2px)}.rounded-s{border-end-start-radius:.25rem;border-start-start-radius:.25rem}.rounded-s-\\[0px\\]{border-end-start-radius:0px;border-start-start-radius:0px}.rounded-t-\\[10px\\]{border-top-left-radius:10px;border-top-right-radius:10px}.border-none{border-style:none}.bg-\\[radial-gradient\\(circle_at_50\\%_100\\%\\,rgba\\(0\\,0\\,0\\,0\\.5\\)_40\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)\\)\\]{background-color:radial-gradient(circle at 50% 100%,rgba(0,0,0,.5) 40%,rgba(0,0,0,.7))}.bg-accent{--un-bg-opacity: 1;background-color:hsl(var(--accent-hotspot) / var(--un-bg-opacity))}.bg-background,.data-\\[state\\=active\\]\\:bg-background[data-state=active]{--un-bg-opacity: 1;background-color:hsl(var(--background-hotspot) / var(--un-bg-opacity))}.bg-black\\/50{background-color:#00000080}.bg-black\\/80{background-color:#000c}.bg-blue-400\\/20{background-color:#60a5fa33}.bg-blue-500{--un-bg-opacity: 1;background-color:rgb(59 130 246 / var(--un-bg-opacity))}.bg-border{--un-bg-opacity: 1;background-color:hsl(var(--border-hotspot) / var(--un-bg-opacity))}.bg-destructive{--un-bg-opacity: 1;background-color:hsl(var(--destructive-hotspot) / var(--un-bg-opacity))}.bg-muted{--un-bg-opacity: 1;background-color:hsl(var(--muted-hotspot) / var(--un-bg-opacity))}.bg-neutral-100{--un-bg-opacity: 1;background-color:rgb(245 245 245 / var(--un-bg-opacity))}.bg-neutral-200{--un-bg-opacity: 1;background-color:rgb(229 229 229 / var(--un-bg-opacity))}.bg-primary{--un-bg-opacity: 1;background-color:hsl(var(--primary-hotspot) / var(--un-bg-opacity))}.bg-primary\\/10{background-color:hsl(var(--primary-hotspot) / .1)}.bg-primary\\/90{background-color:hsl(var(--primary-hotspot) / .9)}.bg-secondary{--un-bg-opacity: 1;background-color:hsl(var(--secondary-hotspot) / var(--un-bg-opacity))}.bg-white{--un-bg-opacity: 1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.bg-white\\/10{background-color:#ffffff1a}.dark .dark\\:bg-neutral-800{--un-bg-opacity: 1;background-color:rgb(38 38 38 / var(--un-bg-opacity))}.dark .dark\\:bg-neutral-950{--un-bg-opacity: 1;background-color:rgb(10 10 10 / var(--un-bg-opacity))}.hover\\:bg-accent:hover{--un-bg-opacity: 1;background-color:hsl(var(--accent-hotspot) / var(--un-bg-opacity))}.hover\\:bg-black\\/70:hover{background-color:#000000b3}.hover\\:bg-destructive\\:90:hover{background-color:hsl(var(--destructive-hotspot) / .9)}.hover\\:bg-primary:hover{--un-bg-opacity: 1;background-color:hsl(var(--primary-hotspot) / var(--un-bg-opacity))}.hover\\:bg-primary\\:20:hover{background-color:hsl(var(--primary-hotspot) / .2)}.hover\\:bg-primary\\:90:hover{background-color:hsl(var(--primary-hotspot) / .9)}.hover\\:bg-primary\\/20:hover{background-color:hsl(var(--primary-hotspot) / .2)}.hover\\:bg-secondary\\:80:hover{background-color:hsl(var(--secondary-hotspot) / .8)}.file\\:bg-transparent::file-selector-button{background-color:transparent}.from-blue-600{--un-gradient-from-position: 0%;--un-gradient-from: rgb(37 99 235 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position: 100%;--un-gradient-to: rgb(37 99 235 / 0) var(--un-gradient-to-position);--un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to)}.from-white\\/20{--un-gradient-from-position: 0%;--un-gradient-from: rgb(255 255 255 / .2) var(--un-gradient-from-position);--un-gradient-to-position: 100%;--un-gradient-to: rgb(255 255 255 / 0) var(--un-gradient-to-position);--un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to)}.to-blue-900{--un-gradient-to-position: 100%;--un-gradient-to: rgb(30 58 138 / var(--un-to-opacity, 1)) var(--un-gradient-to-position)}.to-transparent{--un-gradient-to-position: 100%;--un-gradient-to: transparent var(--un-gradient-to-position)}.to-40\\%{--un-gradient-to-position: 40%}.bg-gradient-to-bl{--un-gradient-shape: to bottom left;--un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient))}.bg-gradient-to-r{--un-gradient-shape: to right;--un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient))}.bg-gradient-to-tr{--un-gradient-shape: to top right;--un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient))}[stroke-width~="4"]{stroke-width:4px}.object-cover{object-fit:cover}.p-0{padding:0}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-12{padding-top:3rem;padding-bottom:3rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.pb-10{padding-bottom:2.5rem}.pb-28{padding-bottom:7rem}.pt-6{padding-top:1.5rem}.text-center{text-align:center}.text-left{text-align:left}.text-10px{font-size:10px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.file\\:text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.dark .dark\\:text-neutral-400{--un-text-opacity: 1;color:rgb(163 163 163 / var(--un-text-opacity))}.data-\\[state\\=active\\]\\:text-foreground[data-state=active],.text-foreground{--un-text-opacity: 1;color:hsl(var(--foreground-hotspot) / var(--un-text-opacity))}.text-destructive-foreground{--un-text-opacity: 1;color:hsl(var(--destructive-foreground-hotspot) / var(--un-text-opacity))}.text-gray-600\\/40{color:#4b556366}.text-green,.text-green-400{--un-text-opacity: 1;color:rgb(74 222 128 / var(--un-text-opacity))}.text-muted-foreground{--un-text-opacity: 1;color:hsl(var(--muted-foreground-hotspot) / var(--un-text-opacity))}.text-neutral-500{--un-text-opacity: 1;color:rgb(115 115 115 / var(--un-text-opacity))}.text-orange{--un-text-opacity: 1;color:rgb(251 146 60 / var(--un-text-opacity))}.text-primary{--un-text-opacity: 1;color:hsl(var(--primary-hotspot) / var(--un-text-opacity))}.text-primary-foreground{--un-text-opacity: 1;color:hsl(var(--primary-foreground-hotspot) / var(--un-text-opacity))}.text-red{--un-text-opacity: 1;color:rgb(248 113 113 / var(--un-text-opacity))}.text-secondary{--un-text-opacity: 1;color:hsl(var(--secondary-hotspot) / var(--un-text-opacity))}.text-secondary-foreground{--un-text-opacity: 1;color:hsl(var(--secondary-foreground-hotspot) / var(--un-text-opacity))}.text-white{--un-text-opacity: 1;color:rgb(255 255 255 / var(--un-text-opacity))}.hover\\:text-accent-foreground:hover{--un-text-opacity: 1;color:hsl(var(--accent-foreground-hotspot) / var(--un-text-opacity))}.placeholder\\:text-muted-foreground::placeholder{--un-text-opacity: 1;color:hsl(var(--muted-foreground-hotspot) / var(--un-text-opacity))}.font-400,.font-normal{font-weight:400}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-thin{font-weight:100}.file\\:font-medium::file-selector-button{font-weight:500}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.uppercase{text-transform:uppercase}.underline,.hover\\:underline:hover{text-decoration-line:underline}.underline-offset-4{text-underline-offset:4px}.opacity-60{opacity:.6}.opacity-80{opacity:.8}.opacity-90{opacity:.9}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[state\\=active\\]\\:shadow-md[data-state=active],.shadow-md{--un-shadow: var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-lg{--un-shadow: var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-xl{--un-shadow: var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.hover\\:shadow-md:hover{--un-shadow: var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus\\:shadow-\\[0_0_0_2px\\]:focus{--un-shadow: 0 0 0 2px var(--un-shadow-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus\\:shadow-secondary:focus{--un-shadow-opacity: 1;--un-shadow-color: hsl(var(--secondary-hotspot) / var(--un-shadow-opacity))}.outline{outline-style:solid}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.ring-2{--un-ring-width: 2px;--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-1:focus-visible{--un-ring-width: 1px;--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-2:focus-visible{--un-ring-width: 2px;--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-offset-0:focus-visible{--un-ring-offset-width: 0px}.focus-visible\\:ring-offset-2:focus-visible{--un-ring-offset-width: 2px}.ring-primary\\/30{--un-ring-color: hsl(var(--primary-hotspot) / .3)}.focus-visible\\:ring-ring:focus-visible{--un-ring-opacity: 1;--un-ring-color: hsl(var(--ring-hotspot) / var(--un-ring-opacity))}.ring-offset-background{--un-ring-offset-opacity: 1;--un-ring-offset-color: hsl( var(--background-hotspot) / var(--un-ring-offset-opacity) )}.backdrop-blur{--un-backdrop-blur: blur(8px);-webkit-backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)}.backdrop-blur-sm{--un-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)}.blur-sm{--un-blur: blur(4px);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}.brightness-110{--un-brightness: brightness(1.1);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}[duration~="1"]{transition-duration:1ms}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:shadcn-enter;animation-duration:var(--un-animate-duration);--un-animate-duration: .15s;--un-enter-opacity: initial;--un-enter-scale: initial;--un-enter-rotate: initial;--un-enter-translate-x: initial;--un-enter-translate-y: initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:shadcn-exit;animation-duration:var(--un-animate-duration);--un-animate-duration: .15s;--un-exit-opacity: initial;--un-exit-scale: initial;--un-exit-rotate: initial;--un-exit-translate-x: initial;--un-exit-translate-y: initial}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--un-enter-opacity: 0}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--un-exit-opacity: 0}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--un-enter-scale: .95}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--un-exit-scale: .95}.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open]{--un-enter-translate-y: -48%}.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open]{--un-enter-translate-x: -50%}.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed]{--un-exit-translate-y: -48%}.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed]{--un-exit-translate-x: -50%}@media (max-width: 1023.9px){.max-lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (max-width: 639.9px){.max-sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.max-sm\\:max-w-full{max-width:100%}.max-sm\\:rounded-none{border-radius:0}}@media (min-width: 640px){.sm\\:max-w-\\[425px\\]{max-width:425px}.sm\\:flex-row{flex-direction:row}.sm\\:place-items-center{place-items:center}.sm\\:justify-start{justify-content:flex-start}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-2>:not([hidden])~:not([hidden]){--un-space-x-reverse: 0;margin-left:calc(.5rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(.5rem * var(--un-space-x-reverse))}.sm\\:space-y-0>:not([hidden])~:not([hidden]){--un-space-y-reverse: 0;margin-top:calc(0px * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0px * var(--un-space-y-reverse))}.sm\\:rounded-lg{border-radius:var(--radius-hotspot)}.sm\\:rounded-b-sm{border-bottom-left-radius:calc(var(--radius-hotspot) - 4px);border-bottom-right-radius:calc(var(--radius-hotspot) - 4px)}.sm\\:bg-\\[radial-gradient\\(rgba\\(0\\,0\\,0\\,0\\.5\\)_40\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)\\)\\]{background-color:radial-gradient(rgba(0,0,0,.5) 40%,rgba(0,0,0,.7))}.sm\\:text-left{text-align:left}}@media (min-width: 768px){.md\\:mx-auto{margin-left:auto;margin-right:auto}.md\\:w-\\[460px\\]{width:460px}.md\\:w-full{width:100%}}input[data-v-da37922d]::-webkit-outer-spin-button,input[data-v-da37922d]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-da37922d]{-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}input[data-v-da37922d]:focus::placeholder{color:transparent}.link[data-v-da37922d]{text-decoration:underline;color:#2b74e2}.link[data-v-da37922d]:hover{text-decoration:underline;text-decoration-style:dotted}`, Jh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAQ5QTFRFR3BMsRkA7YcA4m4AtyEArxcAtyIA74MA1FgAuy4A1FIA8IsA85EApQ8A95kA64AA4GsA+6IA74cA9JYA00wA1FMA+6IAuiwAxDIAykAA3GUA5XEA3mMA/6gA7YAAoAwA6HUAnAYA6noA8owA7oYA7H0AoxIA7oMA5nAA+qAA5GsA74kA4mYAphYA8o8A9ZgA32EA+JwA2VEAsCYA3VwArCEA21cA/aYA1ksAqRwA8IcAyS8A8pQA/KMAxSUAsysA2GkAxEcA0FsA5X4AylEAx0wA1WQAzTcAzVYA6IMA7o0A224A1EYAtTAA3nIA0D0A018A43kAvxkAuDQAwUIAvDsA0kEAvz8AujcA4HYA09Tw2QAAAB10Uk5TAGYifoiyRP4QH2KYXd15wETb3T3dmrEw2r7a7bYmt4JNAAApm0lEQVR42uzWzWrEIBRA4ZJZOGAYi0I3LRKi4S4GfIDZ9v3fqdFETCalLf1bnU/jA+TgTR4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfOTcdc71G8657sx7+W+d60/aWBtnt3hbXK/zzsLVWqMvvet4U3+u67W2XpRIlFgtPfKzCrNyWKN7x435G91JG+9lXkopmUXZNKlakyItWS5U+VVnp82rn6n8SKWi1B6bIkuTkNcq5W10zwj7rRiTnya/UjJvpSTL57tFitCShJRXspqb8jPnk3meCu8nX5UU9ZDY3OK+SN6hSZnhonxXdzJLiXzmII3yJcjapPWId5ekFqlSYTVNvlNjHKdx2vIbUqiyRO6KtCihDC6a/HxSjcVdE7+hZKcWaUna4DokKSyz64sezdi0HsdPyfJxr2J1O86tvbQKTz1v+/PL8TwO485xbu2atN8tOc6t7DC3UqhFkr1wTT7iXoYh9xiGrwRR3ouvn/bi+A/c3F+SN/bMJbVhIAiiRl6MQWCCswg4XgySQc04+AS+/7lCjabdtEqfrDN6knwAP6qrR8q8ns/2c//fF2cVXBQl05B07MTKZHzubgWmLiEj6uSyT675WRUzXTbioCbx9R4QEt2Ah62QGLuSTR2mhKV4I6ZE5xaAG5tcauVh7Cn5sw5Hh0elsBJuE01IFkJzyzYuDklfjLx2JW9Mh6HFTkrmN2Cc3Y37QAfFR3bS45n46PeUeD6+JcYouB2+3umgSCHRHVihlCxkBFaKkj0l2KxEomQdeAiKCe1bfg2GleBSAqjfyUjhdWkONdPcxGAfHa1cq1Uy2A4c3Aes0iPLb4GhRQdX29RcHs6GPh5NSFycW+ZkXIAVPig6Jx4bXJdzveUxYU6HJqWbQEKUYbQSQnCf3ekDlg8JLmv3pspVV5KTUW5I8VpMRlxfuOxYAoqXtxI8mcdKvdc6txCPJDDCUjghLiRkhE+KugKH8kPvgWnlopjUtm+dbiklwTUh6sXdvt3uLiXIB3/kpS7hJqkwJIgHbOAHF8Fzq3PTi7qdY1KEbBgBdE6sLiSnYxoROAGJM5IRignPLVfvnqAbcPZCC9e6EtAeaqC5JiD6Ax2Miwj1CMWEE6JVEngFnvvK64ukr+iYeEwOwcXlDuKsFNZCTWIEPpQA23+V3juxmJwraHNCJCvhhOAm1lPCX0sGEBY+KOLKEQFeSaE9Hf4xX9eUfnAbUm5Yme128rG9cbmxhfdbv+2deXPbxrLFhyQIA+CqhaS2PFWq9HQjS/K+PttyvCS+VuwokWMl/v5f5E0P0Go2emZIyRIAKjgDwFd1K/pDvzp9egbAAI1yiz2d4puWkEductlKNg9uH+jDZhLMEjErkUi8RMgjJEoSmigCFDEr2ZdIXt457t7Y+DjQAn/AyOUIBcqcNpFEpEt4D4wX6woXyjpR7N/Q+DjIxKoWoyJg8Mm7v3ARDOmTW1i46MY7UhGPaEsm++PoJna7iCO7Siy84ZIJL5EIk3hcQu3WLQaEZClbEO4A5eYFySTjQTAsOLSsOHJJsjkYdDotrW6iR0ur0xkMlqVP5CwR75bYp+4WJHfgvIHRPtwkHoTFHiZwFUg0j83NrVZ32Iw8r4AOW5oMv6fIVlPAJuJZCHo4hZpgsbp1w6K9dXDvHocBQ9YsosGRaBTDpppXK8PWYJm7BIUewSRBiWzPTUrg0r9JPAAHnEyEhIsx2Ry0hpeJ1GjYGchpiUFCTPTxf/lHIeAEi8DBWuCbQ6R1D0RIROVyZQnAUN+jlRa8DgdDprtpg90LwTJMiMji89AozAUODiO9SCSahsUZl3PKMm+AIUBwERjkaIAJCUHp3xx/EBEunLkfcCIbYI0rk2ZikBATMgkUrgyIvlC8203Svxk8EAmczrpFSIjGdTG5RY+fokkQingQgud7/+bwSHHY6xYohXGwiTSugYnOEgSiZXAYKlMTRZD3ceD+ovN4BCQkFOLB5iRbrehaN+ZYzi/M0xvvsge2M+nfKB4HCAXFyDBzXJdN8jewzAGyELG+EtdfbB4CCWUJx7IJ5ihAzQ5/OgWJ0MI867eIyuL3WgnikGVLWGQDcRSBpLVsnZZoERKSqFr7C0pk+OjeIy3AIZHwMNlKVLHqEhI0CLXArvcYiMqKWkDFKQxEYiOC7sDoKBgJ5gicKRTeApPy4b7fXEAeG48y3YPDDK7MIZtJWZt3iDd5b8HwLKYQk8VbjY82kAae96xyRHlx8U4r87ewdOGbJWbd0U7kznKkFktbj548IkGKmKEPVrZGkSpTzQEL98woO5glvHbxfbgGC9bwPmJyWGRLhEcZUSJfU7zFZooyShZvOpKQP0giSJJK1NbO/8rnhWQTLOeK+91FarCePHkEg+EwlYuYbFWlCjeX+b137ICNSf4jZiXIY4FarWj1CRCx6XyiuDGsUoGVr5bAscOaYORBK8ELE+yjJyDjEIaFJoqP0B5VNAkWLCxfHMk+mWRRgj0BfxiPpKf0CaZHJU1yyzwPPK0dlMj2hYiR5pMpWXBoe2DxraRJ6IX384dP3R3wIsTIKqPBw92opSqpZoc/wiVNIusWxkj1A8TtEkjziqrFbrxP370iIvkb7x1VcQ0FDs5ko8omb+J9dypcGOy3duTTKYbISsUDRBesB3pIi6TXkaq0mgP5qCMtqViX5neiahesBwDDWbUSVXV1NBE2dTdIaLZIYYJZUuneN9E8zLBDYfFR2SABUZSwzYFv2VrgCve+8aph4WCyEatFUHdTb53C4p32NcfVFPaS4nJU5YIFQhqLxoOiXcvyjuItcZs3LVudyhokK1jIhGGBxZJFJULtFlQwTgRU1U5rlQzyIOVBTEZX9Vm2brffgQ+CLR+/1Lp79+XS0tJ43On3uyvRlRLJbfmUAYHBV+Z1vi9XNdFJT+BEm1wJj2ilqzkcHx/rt5mAhD5Jd+/fv3tfn0tjzeUquA+yaJfPaJuGy7gEcWj1K2l0ZhBzoj8etL6XhUaxr1kcAxCD5A6i0CYxAiJw7t2/P+50m99NxLmtOSgjgrp1q1ndREcqWLlgtL4HRn/wcWdnXwuQGN1BIoiEiGgee3t7r/ZeLY0ByncTEfGOAZ8L90ElE10QycaleUTaGR93Pu5/3IdjCsnLO/o4R0JEUHtA5dVSZ+X7icjXq3ETAoZkpYqJ/gxhcDCjS3/06KORRqKZHGse+kCTvDyeqlqsbO3B0AIkT7VRvpfI/3Aips8yF/YQV+Uskgge6I/RJT969I5wGIscZ1QAB5jkGOsWEiGP7KFH9KGL18r3EQEe5kAiYkfHW3qe2K2aQZ49AyTSJOuX2u76ndZHRKJJAJPj1CKIRNOQVQvGlEuACDDpNy/b/ZJYtKeFK1Wa68sVM8gzQ0PaZDW6uDk2UxxajMjODhUtIAJMyCNYttAkRobH01dPnz4dr1wJEYLCnxfSo18xg2TKIVmNL2qOrT81CDgNk4+ofaxbyASLlrAIeuR+DsnSJYrKZNNDBCfvWLeiShkkdQiWrcvyGA7+fPcn6F1KRA90SJok2Gv5my1ukpTJ0x9+uETlWvHs2PwfM32nR4b6VTQIgTGaXBDHtz+/fTM4GBFkcqyv+mKAULMFJklxcCKYI8DDj8S/Gu/eh8tM2WkbrgpZJJlmMZUkyQVxaGkcaBFRtsgj1GzpXWH4HBGA5DyS8QAiF0fSAY+4P1oyfeO9VT2DABVKktaFcPz++zdGBE3CPQIOobKlacAgIrmqha0WR6IupIF931OyCX65rzopknAcDzIoq2puNUe//45AvnGPABOe7VS2DJLMItRskUn2LCbRuli8R8uWTTZ5E4z9Vrd6BqFe65kIdF+j+/s3JCLKlpiQgEFgEJI7IkjQIUiEPGKQjJsXarUkkNz+gVndWq6OQUjokPkDfbjx2+9GHMk73mwhEhxUtcTyLwqznSySEgH1owsEu9w/UBYuswa8UhGDfJIWedaa1x4jjSMjon1CQFi3xZMdYkSfPEgICdIQRIDJZepWx7avOZyMiNZAVUDDT5rHp7xH1ufe++830O/MI+5max9NgsFugLAcIY9Q0ZImkXXLHyOzv8trllOqYJGRBgKDQZkzQKKt337+LRW6BLOdkFCzhUgo2feRCFYtMglI5AgRuZBJJt6d5ulLyVWwSPxJS3gkmTM9fv4ZgeSqFvFg2U409tObVpnAIlr5W1YU7jLaQZ25Y4SAuJEAkUiVrRbg0CcjMprvP9U0YJBHRLKbcEccPEmOgQibtcMQ0X7fFu1kknnL1sD1QTLOpAKTw9XUIXCYAZpriTcGe4CICS9a5BK5tIXzEc2EWi1gIorWXXaHRBB52ldzqbnJgLijRJWs0PBAl2jBZThPufr1V8RBMWLzCNAgIrzXwnskWoCDXCKDxJ7s85etlvdzDASl7Fhf1xwQCabJPAWr9evPv5JDhEcQiPAIq1qAZQerFkaJvK0ro52CZP6yNeA84GSlK3PIoOxIZ5q3w4pGv4KQCeIQvRZ6BEZuhniMOcIWtsghFCQOIuSRpZW5ipb/CxlaKZNyYz2ZgoHXZI74MDjgdOTIN0bkHRyuhS3ebB0729890WsRk7mCpGX93igpS5FWyZF+9imn9Xl4/JE6BA5ftIO4R8wFeeyASdIooVbLuIRbhO60y6o1P5FoU3x033KzpNyaFQMOzuRZPNP7f/yR8uA4fs5w+IkADm6Snf2LPLIl54jzR/sKfSDDN1FsqvI0Ojs7y3lkpmMT4IFEhEX4JNGF5F3+RjubkEyva4le676DyHieXLd+cz9vklaZFetMi1kEE93LA5FwImIVRYslO8aIaLWOafHXRLt1HcW1IP8DNlvR7Fx3ff9qmkmZNWsCOLhJklk83hoeHAlKIvmGk0Rn92tSfYevNb5ky/HcJHuybM1PpEUfwOJZwtQss2IBDgJytqr8ar19+zalgUHCmy1etb7Byabt9qcfIEiACyG5A8rlCFtGEd0WEfHnuvWjvMwkJdas9TMUUklm8QClBoEDLSLqFt4jIY8YHNbbiLjUOBUk2Go57rWzx4NwRvJ0HiItxOH7ct+gvB6LYJzN0/ImKQ99GFGys15LRjt5hKYjcGQG2TH97/LyoIMaDwbLaBGR7ITEEJFVy28RFCAgKOyOYqTKUXJG+mS4hDN5ZBYRSGS0y/u6mXIW0Ry63WZke7Vkpd8ZLNsXf3O3ETHbx/NbxFwNFZHurXIrFslvkMl/3/4XiZyXLZohgiQSDBL0yLtpIsudliQhufTHSwBF5Ag9aYpABBF/iuBEkam8mhWdnZxxj3gNEgMPOIiIiRHLJBFFJhHJrmEMo4t8F6Gz5LuNSET6sy3i/5aiJrJZTs0KTzgRv0Gaq//VIotQ+0viHpErWwhkc3CZ3X6b/bFrZetpJk7EbxGKd9kDD8tpek9ONBBi4jVIBDxAzCPoEkEEkdCEhIAMul4afqOMxTqKmLR3Z1iEAzGXvEk65USI5qEP1Il3DrKV8aCqhUULPUJJIssWIRHeuLhPlsSEhAfJ0+ZMizAmltl7KSESn2RCJolyq/X+PdAgjxjJObtt8ZeIXNHnkFbG6BFBZJ7mtyU/Xi2SJColQgwMGDMNEr7XQN4jDz2ABlzkwhbikI+jzL9NfHOl2++Px+MlOLTENg/Njv0hOtDMVisSOGS6D0uKkIyJltcg8WoKBF3CqpZ3rZGShOHwdVPjpR+s0m9/9jUWqlyOZgvUmbHoKz5ejcmOXumUEiEkyJJYOaV5gJDHLCSWxcYNgVtKzzfSvydcXJraUACQuIisKI+GPyEPrgwHYCkhRKITrpHHSxkPYRGRI3QXka2jbLZmbzEwfvUDKsPy1A1lJXOJDBKjWcE+QIc4v7m/WUaEfGAWCZVLyftf3juREBFhESQys1hF/THaAg0CJ1xh4P8UTCBL7Ku/M2KklX3h/SdGg/XATVW0Eo1hCsmqJ0A0D33YqxbIHSRAZKs5q2d6lffCU3MwQohomkkTkCw57uv2vZ2v+cq7gcJEiymt4iOEOeRD4i5Yv/xCOAgJ4SAk5ziIx8ZwhjmW0j+hgQDjKQEgv8DF4ptxN4uSPYHEHyNbGgcciITJMCk+1dc+fDiBkSl2OukXo/dTULwe4UhakR8H61hzcf4USbCSlbFDm3ShbuXfoDZa8rkSHGKgcCSAAlTC1DDSMIBGhmTdU7AyIihKEQJCtxFZzeL2kDjumz8hv/OHXsmQoG8QEKJgSLpLzCNzFK3NDAcMEkEpPtXDD5oHnKkSd8F6kwGBgR7xdr8obg+J4y7+DTkSJJL70yOSqcwnJM2xbWWr6Y11NIkZkkrRqZ6kOHAoh5I3mgcqowEXFiT2pS3/5/T6d+/v0fpgLpHNQAYoQkQ/EZI+eoTo+jqtYUoDqVjUVcUqMDjQIyPnGu8bJCJzxL/6690kfgWn2XBm4j4RmU6JTj8RknFzZUlOEfv+mkU58pOcmLSKbrI0CmISupytcQASIiKCxJIjAGQU+b7jxR9GRCaidtFfndUqRgjB9ZsySF5FnppFsrZbncKbLBBCiRyJ/uavN4aHQMLWGuHIzdpbyq0ubQ5AojYJV25BDAbZAk4xdVky3RZvtjqemsWJiNWUolMdYZix7kr0N5kQhz5sVQvEiCQ+e9AjC4CF1y4Z8tTo6oE2QSJ8ftLPBQlORvw1i5AQkOLbrMmHaSXKqvAvcIiRxyNyaWtj4kmPZdxCg5BIn4hWmKzBfoAxZaFxnshTd66PfuISMdIsvOulkhUrq1YJB/IQMxK0CCX7243YV65ADiR7cFh9gjMR4Q6QcRG2W3dz3a/TIl3pEBA1wcOCu94prSmrkr+0gAd5hJvkv9ZJu4dH1MGH35CLqF2CCSFhhiCX8EzRCynzWSS6/dNtYRIY5fS9wbRDAkfuaxxExO8RIrIRebZAvJMKcYhn4PzFiyJcrHeRxoyIxyJbwANOiaWEvnc07ZDQZRAQ5QhO2X1B4ueRvmurhz6ET+ReygSFNcPMKHDwgF+6y9bjnRZp3b6NSGS/pUen4GnICz0yRXaD/J0BAVHZYjhA0xOSP1Y9PM6fbTcmEUyIioBieFAzzLzBb5+YfQBpc0CfRYYaCOCAi63f2iprGuJoehPgIT2CQhrMI289r/t0gQecBAWJSKNMiflE2IQ3YCgqeR6LRJu3tQwMgQTGoGggYBBjksBhECKS98h7cyGLoDZ8PLQQCO61aMT7LrGjBkNCUChGaPZIa2DTRJwW2QKHpDaRKnpmCChemIsjQsK/QV6PCCQ+f+zwlztxu/GXs2sXMRGNF2IROfKKiLgt0jI04IQBB++BVYGKXsyKkPW/ORGS7H4zIm8nHh47+g0p2pWURNvJybdzMOOXxp1+t9tdAcEHesbjPZozojUo5OEAIuc5YrdIpEMEkWjJXitSxSkGb6TDPguJvxoejrIlu19Akrjz3OzJj0hwexPaBBNjXvjkJXzbxfmOAhqFfEJU9qaIOPql5m0UZjun0lTFKXwBSmPEmumjr18BCatahIM0haTl6Xen37eVPgEmuH8vCmD0V2b4vJtBoZJFd36nvnpxP1JWbdwmAQvAUhYQgJEhaSipSPMgJGgRChKakpzzWPfyABGUHXAJnFNM+JzxznjOR+RX+kspEhxaaRc2Nb3su1IdZU33YcEOASRwhEoqMTgsHkGJHHEHerSMb68hFRxoE7aHAzAZ9D00JPAxMAHxR1OoZ15ypTqJ4r0UIIlGgUQiJbX2lSwCEkjE6q870Dv8xXRjEixfRtwoL48v8aGj7hJOGulZFQh2ZGL/jcnt2wcCCZWtRBWnxgsjg0VJxf/888/XTC6TsBj5xR0gLXrHkwldsnO8Y8oXtsL96JKvKAAO/jTRHrbMjlhvEg9WuTJ1S3GINdMDAkIWoSARRHwBQrtgMir7hOQjIiEcl0KyBPMTFMUIEHHE+sFtGBwJjlIcAkwCW8XKOYSAEA42R3QGSLyML3myHRxIOxkWg6RzORxUuOgFUDh10UIkXXubhTRI5JDbBTsE1VBCoebBkfhz5H3iDhC2o4bc6ATOLE52Bivqe9XP3Wjcw/Wwsb3NQoscWMK9LIeEtopFRDzdFnrEU7C6uFsAUnHnyceuugI1x/wpCVx7sdes1gGQsCUJAinBIRNLxfqCRLhJXJP22L036zctjoScwrAMmupq1L8/veD1CpfDrLiTAzAIeYSHe7dYh6AiWbG+fAEiRikOfSAP2Wu9abkL1rdULp8Qkr66MjWXpm/I309l77OGB6ksJtEjKQeIEgq+cCKIBGSpWqtuH7JN5YiIYLK8oq5SHeh0sXThTUgrOwSCg6kcIGu2iiWIyBwhJcqlDbHTHzJhfReUq6tVf2q1fi8FYp0bRgckUbNK6rJkIMdfMvminSziTvRWhsNcUBafeJrdy89JUiAw7qey1qzNA+GRsh0SyP/vMwFhRKwzEk+iT+0ZIJlQnLTUNQge9EWlt7qW7BMRUq4BLrbLCl8cOYEEnz8jEtFsSSIj5dLot1RWJkgFeVwHEVzIylIkmgkEzimbDAsFAjqyAln7TEREjoiq5TEI334c61fOJi11TYqWYP6RAgFZG98thMEKVwlAYg3jyD5Rjz+D8jmSMhG9ls8guG2AgIJMkMf1EckEPOwhMuI8CEsZQPShRyLMAzwASQplRvfrNgjbEghEJqHaBTyum8ieJgJacgKRVEyWNFVxigCGUSgjBCWSXXrEZxCUwybXyYNyBC0CimxrJ/f0IJFD9BGpAoUGkUDWXxMQQwSZkEcIiXuV9xyHmwnwuGYiGgMBWbEAuSdw0NRdFak1tIgA8hqByCAR/e+62yC4wwbKUrs21LVrxZDIiPRtQDQRM2TV2igYiCZic8jktRYjArIT+dszSf/1Z75Vk0yUjSJqdP/uuWypnmgUWhaLFA2kDTBgTBRXCECESWSvBVpTLiW/otw+KSYzO0RkyQYk5UE2IW2pIjUyOHTVihVXYAeCYkDckb51jiNnE4LSUoUoWnoJMMzFAcThkZEqUsGR1gsLkDbwYEgkEZwkuiOdbx/LN+tPkYxUQVpJn7oDIk0nkIP0wmpWSxWpBuCAI86HS8rDEe1fp2ft7khPaP8AEitdECAFqX/+0YuuxyEwOJFEFalJ6pAj4ZCHDxGI9AhPdl+k/4HiRAhKoorT4GWmvhUIiSfJUBWpGGgAkjAHSvNAzWp/3RWLNqPhTDBQsGAVV7RAdzsSCIPBs2SiChXwgDMHJHz4+iEReU1EZLPlqVj5HYJEnjRVkepkRMazHXKPSpdSRU9EbPOQxkMtAcR6hyRx91h8YwfJpKUKVaSfUAWHLMuJocCBTfDBhipWbQAiHRI8BJFLPFXL/XQ139hMQtlQBaubPVZvAfKII8Ee+B5MQwrve8EiDSsQlGdG4q5YQ9zaQTJJkSSqaC2nRCKLQ/JIMEog5grue42SnHGAB0PiqlqBcmkEr7fJvX1RYJCitZIWLRFdI40DhhHHkqhiFWdAAglkLpN8DZVLq2ybILnjXKKK1+D4WBNZEWn3CCSAQIgMVcGyA+k9RNmarc9TQNwRijiMUSSSDVWCuvBC0MuuBGLsgddpRapgrVmBvH74+BwIIZFzxC+eCIGXcj1QElWG9uFlIAFk41EqxEHaUKr4VAetKabHjw0QWbVQaBF3hCRsoyCxxdnbWJWh/v7xHTlVT2nooa8cyZYqWFHDBcTnEYoRd4Ssy21p4ESNVCmK9jURCQQlqlZLFa3JUSoe9Y+NRUhWi4AiDxCSxScTVY4GO/sCSAwsGJNzo0Cml5PqUR4IM4lraWtNOTX9rrT0yaoqSSs7O3c6+bibwoFRUlKm01w9FkBAvGhJk7TdzqMNBcgopESVpeWdYwsQEiYJRkgZqX5KaycCiC/bv3gyfcg2eRC1K1ZlqSOBtB5x0SSxjKQLj4waAoisWtIj7kxPLBtvUNu1qkrTysf9PJDRoyePLConQlR0dAoWaTMgzxGHPj1EvrijucX3QskZZaRKU/RxJw9kS/N4wqBgD9xUqpwQkUBQ/vbXnXlBbsNM/jmYoSpPg495IE+0gAJcGJQNpcoLEV6yiAh5RBL5opxaF3tvTDNRJaqbf5Mx0jiewClqVjlGDoHHKet7o+daZJHHroWtdT+QHBP6/Mi6KlHDdzkgw9Qh5uAqx8jREfDgbZYB8pw84giSthcIQ0LCLVFK0585IMmTVDLZI1WK2ibWGwwIWUSWLSISKKdWcxs5MSahKlODlmIapTTgwrN9S5WjxpFos3qGCFUtq0e8QNbodTcJJVJlqpUL9Y1zh+SIJKocRSZD1gQQkH9C0vA5BPVGFi9Vqro5IA8QCAY7ImmqktQ+1TXrNFKkNgHxBIkEIjfEptcQicm6KlWTjsx0EmHZUGUpOMVUl0Ce+4iEPiBadia/jFSpijr2TMcMwX9HqizFxiHBNJDD5yhbzYIxBxAHk78SVa5auXk6E0X7RJWmtgbCUj0AICibR2Y7ROzUSHESqnI15Gn35IEeeWHFKqtmnfKpYePw8BBxuIjMBsKREJahKldNlih5GtgDl1lYY+BxGqpzhZoHEhFTRKxbXiDr/A3qv6apxKpcRSxCHjwAh0jFSpVZs7RHgilCh1osRyQSP5ARvdMjjBKpCmlL8wAgeSgbqkw1INXbivQcLGL3yGMJxL2jKVJhTFSVpHmgRxiTpFwTg0OmZyK9w1SWaCckfiBfORLySaWADIGGHkaiYpXbZ502pvteTsS+Hu8BkvyDkj5RFdIoJQFDUyGTbKlyFZ5qBdN9L0gkO7+N+Lrh+YX8NRJU5YCsGhzmQrVLcxmqknUERYv1vQKJtIgHSCxe20VVCkj8AIQszDBIVlXZCqBmhbzN8uWIUaDc+ucLIhFMVHWUPGB6guneUmUrytWsw91dxIFExOqvF8iaeN9Kx3zlgKwTCkPDJAlFeulTkakfEYiYkFCOPPYBCfC9Bc4EFFWtYgmbjBSq5FinmhVoILv2IKGi1VZuNdLHIIRPtOIqVaxnnAUMivTSLdImPrtgEZL1BknPB5g9ls2YTCrUYz0zSN4bGCiK9NItQguM0S4SEUFCRF77Qun1ZxL3SVidiiUcYi6JqoR6mkiDfjJESNZVlNiX6q8JCfdJQ1VEo2fPnmkieSarqhpqYM3CEBFIBJPQl+r5J4Ex5f8JKlOxNAzgwamgQarR+UYUIpzIc1uQNHwl8HUqYZTP61WJdDII8SCDlK9geioSHe7mkaAISeANERI3ylpVJiEaCDKBCxmkkhZpIw9CIpK97W3bpl6FIyLQCUfViPQMhyGCUNAglbEIxXpjF+Um8tCbSfigo3BJWJVIRyQIAw1SIYtQrMfb2wLI8xwSb5sV82eG0CvaI5Vos6LVZ0gkZZKOVVUlNaZn6+1tq0XYLZKGv2YhkhyUdjUinYRVCw1SHfWmLBKgRVzRLlNd7Clk36LjSzV6Xq6qGYSm6zHVLC1GRKxs9bxFQTymjQqrYRBCgeNZoiqm9pRF2hoHByJXfyPvL6ObWax6fQ6qYJBPz4TAIBW2SMM4xO8Rb4iEj404ERjtChjkE4x8jMRKVdgi0baRr/31z0Sih7QyzPMkKt0ghkbeJSNVPcVTFmkjEbdHesqnwPUWVqNsg3zSAhzMJauxqqACskioaQgkqKz3Df2xTmJM2mUbBHCADAhkkqhKqkcW2UUg287uN/DTdT2JOinfICkTwIEGUdVUSBYJtlHOZstfs+KUmjRKULZBjNAmMDDRq1m0QrxvuC09woPEW7PoXawckcevo7INQkjg0ERGqqqKyCJtDsQod4MkmGURFCdSYqzHxiAcCiZ6ZYtWg2JdVi1mksdqDotIKCXG+ujTmeDxqaKJTpORiCzi6rWewzGrZkX8QTtCEpZmkE82YcGqbNEKHBaRE5K28irI8p9UskXWz7RD9MGEBavCRWtCFmFMZLRHfrg9upVCKs8iydkZEOFInoWq4gow18Mff9z2li0R6wLu4XSFI/VKSnSNQ4u7ZKSqrqiHud6eArLLiKB60YxEOrSvFDdKSfQzg8OcVLBU9TXR83W0yI/+IOFLvlJxj+CxlcmonIJFSBBKrBZAjdM2WmRW1eopvxq8DUAmh0EZBQtFSXKWqIVQOytasebBPEJIZlmEP1IkbRIWX7BOCAeIBUj1YyS1cgAWYcoD6c38VTlTZUx6USkFixwCl9VILYgmWdGKtn8ESSCEZJZFQhk9BklQcME6OQGHMGGALEaMBOm/CMSJxGsR+dgdKSx0Skg8qG4laoEUnIaY6zLZUdwi/hiRHVqsClOgeQARBiVQC6V2LzbF60dJhAfJ82hmjCBHDqW4GJmcnIuYrKvFUtRrY66DqNtiqyj6mN3CxkSEPcbdLipA1k4EkQUKdPozBikY4OEMkkM94pm/atdS7vQoqGisnjABjhO2pLgwrVYD5+sg+4wEPNKe/asMEcmkUViAEI6USKwWUOHphIoWiHBwjzRmd20cJqoIIo2TD3pwJCehWkg10mDv5YiIROjF8xGRUHqTa/e5hmGOaSVqQRWYTijeZkRk1dptzwEX/lsBZftwct2BjjRI0PAuqoI2TQ9FkBCReUpPuI08OdPGdfP4oMWYBGqBFQQ0PTSSFgEi88zyJlD6JJPtayQSGR4nOIw+tJRacCLU+7pXtnpzNdL8V6ACdV1aN/5AGh/QH4tOhGKEF63d6RwJ5iRCv4I80o7UtSj4YHDgBfNj0RU0aDZimbWjwrl+FzcaqhdfGw9kAif640YQCXjRkhOSw1jNEPUHMo8a18mDYgR43FAiMtp7kZqvbFmZtONr40EiHotPhFotx4L84XZbzaMIyfIS+GOvcU08KEICdWPUaMhWS3okmHcBgPMwSPTRjq/XH0D8RhGJex6PgOZtYGMyGzEBKMHV8XihBxxkklDdKMVIxGuSQM2nCf9N2XFldWsEBDiPtYlSN5DItosIqjH/wqVMErheAZJo7cWLFzmLrMXqxilqRGqCRGTZuiiRGMJdQNHqNeLvXL8yNAwOPNcjdRPViJGInLV7ifijRKodqktrspbZY8olgbqhCiNfshOR+ZH0HEh6wSVrfgIcQBkROBJ1YxWHYmYnsz24UB20INlOmbQ1/4sqSFmQRzDOb6ri2OMRV6/lV+iqXBDxQThxkAwb8v+J1g0NEGKB+LjZCmPhEXKIez7it4mFCf36XjtoNMIwThWGjaDd06Ts8UHlKkXSUDdfkyj395Meacfqwkx6LiKigSAaTA3EQVSwXN1wRXylkYjsoksutaA+kUbJswC7OLriyMQHJxJE6t+hCSyjO2+QwOl+NsivSRg4rLK9q1m4Yz5c4yzgEqp/jaJoIoNERvvlm7mGDgqtnh7tdhA0wgmicNrjyBwkluY3X7lotz50FauCFK5xHsIe/5og8SPpFdPiRAHBwH8hPf59CnsciDRJOy7CHkfGHtkArYXq36m4LZotwlGMSeL2kcaQIkGLBOrfq8a2e9ZegEl0mAMOvBguBbhyMUyynSeCCuJrrFaIAga4ZD1U/3Y1enaPXHvdCtePQC/wCuFR42AmEStbhOS6cBgWWLKCGoa8RW7fZgCQXC0OhIGCVrcmYatbrq04rhBJ2D46PSIUcNQ4RL/Ts76MyJHEV4Qjr7VGjcMWJdvOZMfPubbD7wa/lqdRd1ZuJLvet9qNet/TBYfBERQrpnaNw6046G1vu19qRyaNyaXM0cBadUpY6uiYpYZGIt5pR+HXrA4v/ARDZJLjNBuGSm2OuUMXKEzJ/j2rw3YwL5RYe+MUB1pkvQ7yuRWDTXbdSGj72J6mMvH/qqC9dormOP+nHcT1n/lCmrR7gEFULcKhB2x4DZdeux00wnASxwoUxfEE7hlqFK/h7w8yIAyLmsblWyLN5BSoSCQIRe7WT19HevgQUSAM+KFdV6rv0KQBeXIKVKxV61yCSIoiO+ECh65vNY0rMEp7e/dQ/1WBBM0RySMcyenjUxThqGFcscJGu7ernQI6hJH7Uvvp81M4HFprNyb13/AqRc9ctQ/BK3NLN2E1i+uWeTo3gIeuek4Oa6btqnupwhXFocZDMs9U11FRq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq5ZX/w+loBGfFSAo/gAAAA5lWElmTU0AKgAAAAgAAAAAAAAA0lOTAAAAAElFTkSuQmCC";
var Wh = {};
function or(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(r) => {
    const s = uo(o, r);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (r) => (ja(o, r), r)];
}
function gd(e, t, n) {
  const o = n.originalEvent.target, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
function vd(e) {
  return Aa() ? (Yl(e), !0) : !1;
}
function Hh(e) {
  let t = !1, n;
  const o = _a(!0);
  return (...r) => (t || (n = o.run(() => e(...r)), t = !0), n);
}
function Kh(e) {
  let t = 0, n, o;
  const r = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...s) => (t += 1, n || (o = _a(!0), n = o.run(() => e(...s))), vd(r), n);
}
function pi(e) {
  return typeof e == "function" ? e() : k(e);
}
const eo = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Gh = (e) => typeof e < "u", Qh = Object.prototype.toString, Yh = (e) => Qh.call(e) === "[object Object]", Zh = () => {
}, Ul = /* @__PURE__ */ Xh();
function Xh() {
  var e, t;
  return eo && ((e = window?.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window?.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function em(e) {
  return He();
}
function tm(e, t) {
  em() && Xo(e, t);
}
function rr(e) {
  var t;
  const n = pi(e);
  return (t = n?.$el) != null ? t : n;
}
const fi = eo ? window : void 0;
function yd(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = fi) : [t, n, o, r] = e, !t)
    return Zh;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], a = () => {
    s.forEach((u) => u()), s.length = 0;
  }, i = (u, d, p, m) => (u.addEventListener(d, p, m), () => u.removeEventListener(d, p, m)), l = et(
    () => [rr(t), pi(r)],
    ([u, d]) => {
      if (a(), !u)
        return;
      const p = Yh(d) ? { ...d } : d;
      s.push(
        ...n.flatMap((m) => o.map((f) => i(u, m, f, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    l(), a();
  };
  return vd(c), c;
}
function nm(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function om(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: r = fi,
    eventName: s = "keydown",
    passive: a = !1,
    dedupe: i = !1
  } = o, l = nm(t);
  return yd(r, s, (c) => {
    c.repeat && pi(i) || l(c) && n(c);
  }, a);
}
function rm() {
  const e = te(!1), t = He();
  return t && bt(() => {
    e.value = !0;
  }, t), e;
}
function sm(e) {
  return JSON.parse(JSON.stringify(e));
}
function hi(e, t, n, o = {}) {
  var r, s, a;
  const {
    clone: i = !1,
    passive: l = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: d,
    shouldEmit: p
  } = o, m = He(), f = n || m?.emit || ((r = m?.$emit) == null ? void 0 : r.bind(m)) || ((a = (s = m?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : a.bind(m?.proxy));
  let g = c;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const y = (x) => i ? typeof i == "function" ? i(x) : sm(x) : x, _ = () => Gh(e[t]) ? y(e[t]) : d, h = (x) => {
    p ? p(x) && f(g, x) : f(g, x);
  };
  if (l) {
    const x = _(), b = te(x);
    let w = !1;
    return et(
      () => e[t],
      (I) => {
        w || (w = !0, b.value = y(I), jt(() => w = !1));
      }
    ), et(
      b,
      (I) => {
        !w && (I !== e[t] || u) && h(I);
      },
      { deep: u }
    ), b;
  } else
    return ye({
      get() {
        return _();
      },
      set(x) {
        h(x);
      }
    });
}
function mi(e) {
  return e ? e.flatMap((t) => t.type === _e ? mi(t.children) : [t]) : [];
}
function Fs(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function ga(e, t, n = ".", o) {
  if (!Fs(t))
    return ga(e, {}, n, o);
  const r = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const a = e[s];
    a != null && (o && o(r, s, a, n) || (Array.isArray(a) && Array.isArray(r[s]) ? r[s] = [...a, ...r[s]] : Fs(a) && Fs(r[s]) ? r[s] = ga(
      a,
      r[s],
      (n ? `${n}.` : "") + s.toString(),
      o
    ) : r[s] = a));
  }
  return r;
}
function am(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => ga(n, o, "", e), {})
  );
}
const im = am(), [gi, Av] = or("ConfigProvider");
let lm = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", cm = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += lm[Math.random() * 64 | 0];
  return t;
};
const um = Kh(() => {
  const e = te(/* @__PURE__ */ new Map()), t = te(), n = ye(() => {
    for (const a of e.value.values())
      if (a)
        return !0;
    return !1;
  }), o = gi({
    scrollBody: te(!0)
  });
  let r = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Ul && r?.(), t.value = void 0;
  };
  return et(n, (a, i) => {
    var l;
    if (!eo)
      return;
    if (!a) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, u = { padding: c, margin: 0 }, d = (l = o.scrollBody) != null && l.value ? typeof o.scrollBody.value == "object" ? im({
      padding: o.scrollBody.value.padding === !0 ? c : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? c : o.scrollBody.value.margin
    }, u) : u : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof d.padding == "number" ? `${d.padding}px` : String(d.padding), document.body.style.marginRight = typeof d.margin == "number" ? `${d.margin}px` : String(d.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Ul && (r = yd(
      document,
      "touchmove",
      (p) => pm(p),
      { passive: !1 }
    )), jt(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function dm(e) {
  const t = cm(6), n = um();
  n.value.set(t, e ?? !1);
  const o = ye({
    get: () => n.value.get(t) ?? !1,
    set: (r) => n.value.set(t, r)
  });
  return tm(() => {
    n.value.delete(t);
  }), o;
}
function bd(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !n || n.tagName === "BODY" ? !1 : bd(n);
  }
}
function pm(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && bd(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function xd(e) {
  const t = gi({
    dir: te("ltr")
  });
  return ye(() => {
    var n;
    return e?.value || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function sr(e) {
  const t = He(), n = t?.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t?.type.__name}`
  ), n?.forEach((r) => {
    o[On(Re(r))] = (...s) => e(r, ...s);
  }), o;
}
function fm(e) {
  const t = He(), n = Object.keys(t?.type.props ?? {}).reduce((r, s) => {
    const a = (t?.type.props[s]).default;
    return a !== void 0 && (r[s] = a), r;
  }, {}), o = mc(e);
  return ye(() => {
    const r = {}, s = t?.vnode.props ?? {};
    return Object.keys(s).forEach((a) => {
      r[Re(a)] = s[a];
    }), Object.keys({ ...n, ...r }).reduce((a, i) => (o.value[i] !== void 0 && (a[i] = o.value[i]), a), {});
  });
}
function hm(e, t) {
  const n = fm(e), o = t ? sr(t) : {};
  return ye(() => ({
    ...n.value,
    ...o
  }));
}
function Ke() {
  const e = He(), t = te(), n = ye(() => {
    var a, i;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : rr(t);
  }), o = Object.assign({}, e.exposed), r = {};
  for (const a in e.props)
    Object.defineProperty(r, a, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[a]
    });
  if (Object.keys(o).length > 0)
    for (const a in o)
      Object.defineProperty(r, a, {
        enumerable: !0,
        configurable: !0,
        get: () => o[a]
      });
  Object.defineProperty(r, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = r;
  function s(a) {
    t.value = a, !(a instanceof Element || !a) && (Object.defineProperty(r, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => a.$el
    }), e.exposed = r);
  }
  return { forwardRef: s, currentRef: t, currentElement: n };
}
var mm = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, no = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), Ar = {}, Os = 0, wd = function(e) {
  return e && (e.host || wd(e.parentNode));
}, gm = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = wd(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, vm = function(e, t, n, o) {
  var r = gm(t, Array.isArray(e) ? e : [e]);
  Ar[n] || (Ar[n] = /* @__PURE__ */ new WeakMap());
  var s = Ar[n], a = [], i = /* @__PURE__ */ new Set(), l = new Set(r), c = function(d) {
    !d || i.has(d) || (i.add(d), c(d.parentNode));
  };
  r.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (i.has(p))
        u(p);
      else
        try {
          var m = p.getAttribute(o), f = m !== null && m !== "false", g = (no.get(p) || 0) + 1, y = (s.get(p) || 0) + 1;
          no.set(p, g), s.set(p, y), a.push(p), g === 1 && f && _r.set(p, !0), y === 1 && p.setAttribute(n, "true"), f || p.setAttribute(o, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", p, _);
        }
    });
  };
  return u(t), i.clear(), Os++, function() {
    a.forEach(function(d) {
      var p = no.get(d) - 1, m = s.get(d) - 1;
      no.set(d, p), s.set(d, m), p || (_r.has(d) || d.removeAttribute(o), _r.delete(d)), m || d.removeAttribute(n);
    }), Os--, Os || (no = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), Ar = {});
  };
}, ym = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = mm(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), vm(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
function bm(e) {
  let t;
  et(() => rr(e), (n) => {
    n ? t = ym(n) : t && t();
  }), on(() => {
    t && t();
  });
}
let xm = 0;
function Qo(e, t = "radix") {
  if (e)
    return e;
  const n = gi({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++xm}`;
}
function wm(e, t) {
  const n = te(e);
  function o(r) {
    return t[n.value][r] ?? n.value;
  }
  return {
    state: n,
    dispatch: (r) => {
      n.value = o(r);
    }
  };
}
const vi = /* @__PURE__ */ se({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, r;
      if (!n.default)
        return null;
      const s = mi(n.default()), a = s.findIndex((u) => u.type !== We);
      if (a === -1)
        return s;
      const i = s[a];
      (o = i.props) == null || delete o.ref;
      const l = i.props ? Be(t, i.props) : t;
      t.class && (r = i.props) != null && r.class && delete i.props.class;
      const c = $t(i, l);
      for (const u in l)
        u.startsWith("on") && (c.props || (c.props = {}), c.props[u] = l[u]);
      return s.length === 1 ? c : (s[a] = c, s);
    };
  }
}), st = /* @__PURE__ */ se({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: n }) {
    const o = e.asChild ? "template" : e.as;
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => Jt(o, t) : o !== "template" ? () => Jt(e.as, t, { default: n.default }) : () => Jt(vi, t, { default: n.default });
  }
});
function yi() {
  const e = te(), t = ye(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : rr(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function km(e, t) {
  var n;
  const o = te({}), r = te("none"), s = te(e), a = e.value ? "mounted" : "unmounted";
  let i;
  const l = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? fi, { state: c, dispatch: u } = wm(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  }), d = (y) => {
    var _;
    if (eo) {
      const h = new CustomEvent(y, { bubbles: !1, cancelable: !1 });
      (_ = t.value) == null || _.dispatchEvent(h);
    }
  };
  et(
    e,
    async (y, _) => {
      var h;
      const x = _ !== y;
      if (await jt(), x) {
        const b = r.value, w = Sr(t.value);
        y ? (u("MOUNT"), d("enter"), w === "none" && d("after-enter")) : w === "none" || ((h = o.value) == null ? void 0 : h.display) === "none" ? (u("UNMOUNT"), d("leave"), d("after-leave")) : _ && b !== w ? (u("ANIMATION_OUT"), d("leave")) : (u("UNMOUNT"), d("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const p = (y) => {
    const _ = Sr(t.value), h = _.includes(
      y.animationName
    ), x = c.value === "mounted" ? "enter" : "leave";
    if (y.target === t.value && h && (d(`after-${x}`), u("ANIMATION_END"), !s.value)) {
      const b = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = l?.setTimeout(() => {
        var w;
        ((w = t.value) == null ? void 0 : w.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = b);
      });
    }
    y.target === t.value && _ === "none" && u("ANIMATION_END");
  }, m = (y) => {
    y.target === t.value && (r.value = Sr(t.value));
  }, f = et(
    t,
    (y, _) => {
      y ? (o.value = getComputedStyle(y), y.addEventListener("animationstart", m), y.addEventListener("animationcancel", p), y.addEventListener("animationend", p)) : (u("ANIMATION_END"), l?.clearTimeout(i), _?.removeEventListener("animationstart", m), _?.removeEventListener("animationcancel", p), _?.removeEventListener("animationend", p));
    },
    { immediate: !0 }
  ), g = et(c, () => {
    const y = Sr(t.value);
    r.value = c.value === "mounted" ? y : "none";
  });
  return on(() => {
    f(), g();
  }), {
    isPresent: ye(
      () => ["mounted", "unmountSuspended"].includes(c.value)
    )
  };
}
function Sr(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const bi = /* @__PURE__ */ se({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(e, { slots: t, expose: n }) {
    var o;
    const { present: r, forceMount: s } = Co(e), a = te(), { isPresent: i } = km(r, a);
    n({ present: i });
    let l = t.default({ present: i });
    l = mi(l || []);
    const c = He();
    if (l && l?.length > 1) {
      const u = (o = c?.parent) != null && o.type.name ? `<${c.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${u}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((d) => `  - ${d}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => s.value || r.value || i.value ? Jt(t.default({ present: i })[0], {
      ref: (u) => {
        const d = rr(u);
        return typeof d?.hasAttribute > "u" || (d != null && d.hasAttribute("data-radix-popper-content-wrapper") ? a.value = d.firstElementChild : a.value = d), d;
      }
    }) : null;
  }
}), [Wt, Cm] = or("DialogRoot"), _m = /* @__PURE__ */ se({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = hi(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = te(), s = te(), { modal: a } = Co(n);
    return Cm({
      open: o,
      modal: a,
      openModal: () => {
        o.value = !0;
      },
      onOpenChange: (i) => {
        o.value = i;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: r,
      contentElement: s
    }), (i, l) => fe(i.$slots, "default", { open: k(o) });
  }
}), Am = /* @__PURE__ */ se({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Wt(), { forwardRef: o, currentElement: r } = Ke();
    return n.contentId || (n.contentId = Qo(void 0, "radix-vue-dialog-content")), bt(() => {
      n.triggerElement.value = r.value;
    }), (s, a) => (K(), ie(k(st), Be(t, {
      ref: k(o),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": k(n).open.value || !1,
      "aria-controls": k(n).open.value ? k(n).contentId : void 0,
      "data-state": k(n).open.value ? "open" : "closed",
      onClick: k(n).onOpenToggle
    }), {
      default: F(() => [
        fe(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), Sm = /* @__PURE__ */ se({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = rm();
    return (n, o) => k(t) || n.forceMount ? (K(), ie(ru, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      fe(n.$slots, "default")
    ], 8, ["to", "disabled"])) : rt("", !0);
  }
}), Em = /* @__PURE__ */ se({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (K(), ie(k(Sm), os(er(t)), {
      default: F(() => [
        fe(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Im = "dismissableLayer.pointerDownOutside", Tm = "dismissableLayer.focusOutside";
function kd(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), r = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || r.indexOf(o) < r.indexOf(n));
}
function Rm(e, t) {
  var n;
  const o = ((n = t?.value) == null ? void 0 : n.ownerDocument) ?? globalThis?.document, r = te(!1), s = te(() => {
  });
  return Cn((a) => {
    if (!eo)
      return;
    const i = async (c) => {
      const u = c.target;
      if (t != null && t.value) {
        if (kd(t.value, u)) {
          r.value = !1;
          return;
        }
        if (c.target && !r.value) {
          let d = function() {
            gd(
              Im,
              e,
              p
            );
          };
          const p = { originalEvent: c };
          c.pointerType === "touch" ? (o.removeEventListener("click", s.value), s.value = d, o.addEventListener("click", s.value, {
            once: !0
          })) : d();
        } else
          o.removeEventListener("click", s.value);
        r.value = !1;
      }
    }, l = window.setTimeout(() => {
      o.addEventListener("pointerdown", i);
    }, 0);
    a(() => {
      window.clearTimeout(l), o.removeEventListener("pointerdown", i), o.removeEventListener("click", s.value);
    });
  }), {
    onPointerDownCapture: () => r.value = !0
  };
}
function Nm(e, t) {
  var n;
  const o = ((n = t?.value) == null ? void 0 : n.ownerDocument) ?? globalThis?.document, r = te(!1);
  return Cn((s) => {
    if (!eo)
      return;
    const a = async (i) => {
      t != null && t.value && (await jt(), !(!t.value || kd(t.value, i.target)) && i.target && !r.value && gd(
        Tm,
        e,
        { originalEvent: i }
      ));
    };
    o.addEventListener("focusin", a), s(() => o.removeEventListener("focusin", a));
  }), {
    onFocusCapture: () => r.value = !0,
    onBlurCapture: () => r.value = !1
  };
}
const Ht = ko({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Bm = /* @__PURE__ */ se({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: s } = Ke(), a = ye(
      () => {
        var f;
        return ((f = s.value) == null ? void 0 : f.ownerDocument) ?? globalThis.document;
      }
    ), i = ye(() => Ht.layersRoot), l = ye(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), c = ye(() => Ht.layersWithOutsidePointerEventsDisabled.size > 0), u = ye(() => {
      const f = Array.from(i.value), [g] = [...Ht.layersWithOutsidePointerEventsDisabled].slice(-1), y = f.indexOf(g);
      return l.value >= y;
    }), d = Rm(async (f) => {
      const g = [...Ht.branches].some(
        (y) => y?.contains(f.target)
      );
      !u.value || g || (o("pointerDownOutside", f), o("interactOutside", f), await jt(), f.defaultPrevented || o("dismiss"));
    }, s), p = Nm((f) => {
      [...Ht.branches].some(
        (g) => g?.contains(f.target)
      ) || (o("focusOutside", f), o("interactOutside", f), f.defaultPrevented || o("dismiss"));
    }, s);
    om("Escape", (f) => {
      l.value === i.value.size - 1 && (o("escapeKeyDown", f), f.defaultPrevented || o("dismiss"));
    });
    let m;
    return Cn((f) => {
      s.value && (n.disableOutsidePointerEvents && (Ht.layersWithOutsidePointerEventsDisabled.size === 0 && (m = a.value.body.style.pointerEvents, a.value.body.style.pointerEvents = "none"), Ht.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), f(() => {
        n.disableOutsidePointerEvents && Ht.layersWithOutsidePointerEventsDisabled.size === 1 && (a.value.body.style.pointerEvents = m);
      }));
    }), Cn((f) => {
      f(() => {
        s.value && (i.value.delete(s.value), Ht.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (f, g) => (K(), ie(k(st), {
      ref: k(r),
      "as-child": f.asChild,
      as: f.as,
      "data-dismissable-layer": "",
      style: Sn({
        pointerEvents: c.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: k(p).onFocusCapture,
      onBlurCapture: k(p).onBlurCapture,
      onPointerdownCapture: k(d).onPointerDownCapture
    }, {
      default: F(() => [
        fe(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Us = "focusScope.autoFocusOnMount", Ps = "focusScope.autoFocusOnUnmount", Pl = { bubbles: !1, cancelable: !0 };
function Mm(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (vn(o, { select: t }), document.activeElement !== n)
      return !0;
}
function Fm(e) {
  const t = Cd(e), n = Dl(t, e), o = Dl(t.reverse(), e);
  return [n, o];
}
function Cd(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Dl(e, t) {
  for (const n of e)
    if (!Om(n, { upTo: t }))
      return n;
}
function Om(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function Um(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function vn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Um(e) && t && e.select();
  }
}
const Pm = Hh(() => te([]));
function Dm() {
  const e = Pm();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && n?.pause(), e.value = Ll(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Ll(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Ll(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function Lm(e) {
  return e.filter((t) => t.tagName !== "A");
}
const $m = /* @__PURE__ */ se({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: r, currentElement: s } = Ke(), a = te(null), i = Dm(), l = ko({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    Cn((u) => {
      if (!eo)
        return;
      const d = s.value;
      if (!n.trapped)
        return;
      function p(y) {
        if (l.paused || !d)
          return;
        const _ = y.target;
        d.contains(_) ? a.value = _ : vn(a.value, { select: !0 });
      }
      function m(y) {
        if (l.paused || !d)
          return;
        const _ = y.relatedTarget;
        _ !== null && (d.contains(_) || vn(a.value, { select: !0 }));
      }
      function f(y) {
        d.contains(a.value) || vn(d);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", m);
      const g = new MutationObserver(f);
      d && g.observe(d, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), Cn(async (u) => {
      const d = s.value;
      if (await jt(), !d)
        return;
      i.add(l);
      const p = document.activeElement;
      if (!d.contains(p)) {
        const m = new CustomEvent(Us, Pl);
        d.addEventListener(Us, (f) => o("mountAutoFocus", f)), d.dispatchEvent(m), m.defaultPrevented || (Mm(Lm(Cd(d)), {
          select: !0
        }), document.activeElement === p && vn(d));
      }
      u(() => {
        d.removeEventListener(Us, (g) => o("mountAutoFocus", g));
        const m = new CustomEvent(Ps, Pl), f = (g) => {
          o("unmountAutoFocus", g);
        };
        d.addEventListener(Ps, f), d.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || vn(p ?? document.body, { select: !0 }), d.removeEventListener(Ps, f), i.remove(l);
        }, 0);
      });
    });
    function c(u) {
      if (!n.loop && !n.trapped || l.paused)
        return;
      const d = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, p = document.activeElement;
      if (d && p) {
        const m = u.currentTarget, [f, g] = Fm(m);
        f && g ? !u.shiftKey && p === g ? (u.preventDefault(), n.loop && vn(f, { select: !0 })) : u.shiftKey && p === f && (u.preventDefault(), n.loop && vn(g, { select: !0 })) : p === m && u.preventDefault();
      }
    }
    return (u, d) => (K(), ie(k(st), {
      ref_key: "currentRef",
      ref: r,
      tabindex: "-1",
      "as-child": u.asChild,
      as: u.as,
      onKeydown: c
    }, {
      default: F(() => [
        fe(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function jm(e) {
  return e ? "open" : "closed";
}
const Vm = "DialogTitle", zm = "DialogContent";
function qm({
  titleName: e = Vm,
  contentName: t = zm,
  componentLink: n = "dialog.html#title",
  titleId: o,
  descriptionId: r,
  contentElement: s
}) {
  const a = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  bt(() => {
    var l;
    document.getElementById(o) || console.warn(a);
    const c = (l = s.value) == null ? void 0 : l.getAttribute("aria-describedby");
    r && c && (document.getElementById(r) || console.warn(i));
  });
}
const _d = /* @__PURE__ */ se({
  __name: "DialogContentImpl",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Wt(), { forwardRef: s, currentElement: a } = Ke();
    return r.titleId || (r.titleId = Qo(void 0, "radix-vue-dialog-title")), r.descriptionId || (r.descriptionId = Qo(void 0, "radix-vue-dialog-description")), bt(() => {
      r.contentElement = a, document.activeElement !== document.body && (r.triggerElement.value = document.activeElement);
    }), Wh.NODE_ENV !== "production" && qm({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: r.titleId,
      descriptionId: r.descriptionId,
      contentElement: a
    }), (i, l) => (K(), ie(k($m), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: l[5] || (l[5] = (c) => o("openAutoFocus", c)),
      onUnmountAutoFocus: l[6] || (l[6] = (c) => o("closeAutoFocus", c))
    }, {
      default: F(() => [
        j(k(Bm), Be({
          id: k(r).contentId,
          ref: k(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": k(r).descriptionId,
          "aria-labelledby": k(r).titleId,
          "data-state": k(jm)(k(r).open.value)
        }, i.$attrs, {
          onDismiss: l[0] || (l[0] = (c) => k(r).onOpenChange(!1)),
          onEscapeKeyDown: l[1] || (l[1] = (c) => o("escapeKeyDown", c)),
          onFocusOutside: l[2] || (l[2] = (c) => o("focusOutside", c)),
          onInteractOutside: l[3] || (l[3] = (c) => o("interactOutside", c)),
          onPointerDownOutside: l[4] || (l[4] = (c) => o("pointerDownOutside", c))
        }), {
          default: F(() => [
            fe(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Jm = /* @__PURE__ */ se({
  __name: "DialogContentModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Wt(), s = sr(o), { forwardRef: a, currentElement: i } = Ke();
    return bm(i), (l, c) => (K(), ie(_d, Be({ ...n, ...k(s) }, {
      ref: k(a),
      "trap-focus": k(r).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: c[0] || (c[0] = (u) => {
        var d;
        u.defaultPrevented || (u.preventDefault(), (d = k(r).triggerElement.value) == null || d.focus());
      }),
      onPointerDownOutside: c[1] || (c[1] = (u) => {
        const d = u.detail.originalEvent, p = d.button === 0 && d.ctrlKey === !0;
        (d.button === 2 || p) && u.preventDefault();
      }),
      onFocusOutside: c[2] || (c[2] = (u) => {
        u.preventDefault();
      })
    }), {
      default: F(() => [
        fe(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Wm = /* @__PURE__ */ se({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = sr(t);
    Ke();
    const r = Wt(), s = te(!1), a = te(!1);
    return (i, l) => (K(), ie(_d, Be({ ...n, ...k(o) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: l[0] || (l[0] = (c) => {
        var u;
        c.defaultPrevented || (s.value || (u = k(r).triggerElement.value) == null || u.focus(), c.preventDefault()), s.value = !1, a.value = !1;
      }),
      onInteractOutside: l[1] || (l[1] = (c) => {
        var u;
        c.defaultPrevented || (s.value = !0, c.detail.originalEvent.type === "pointerdown" && (a.value = !0));
        const d = c.target;
        (u = k(r).triggerElement.value) != null && u.contains(d) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && a.value && c.preventDefault();
      })
    }), {
      default: F(() => [
        fe(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hm = /* @__PURE__ */ se({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Wt(), s = sr(o), { forwardRef: a } = Ke();
    return (i, l) => (K(), ie(k(bi), {
      present: i.forceMount || k(r).open.value
    }, {
      default: F(() => [
        k(r).modal.value ? (K(), ie(Jm, Be({
          key: 0,
          ref: k(a)
        }, { ...n, ...k(s), ...i.$attrs }), {
          default: F(() => [
            fe(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (K(), ie(Wm, Be({
          key: 1,
          ref: k(a)
        }, { ...n, ...k(s), ...i.$attrs }), {
          default: F(() => [
            fe(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Km = /* @__PURE__ */ se({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Wt();
    return dm(!0), Ke(), (n, o) => (K(), ie(k(st), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": k(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: F(() => [
        fe(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Gm = /* @__PURE__ */ se({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Wt(), { forwardRef: n } = Ke();
    return (o, r) => {
      var s;
      return (s = k(t)) != null && s.modal.value ? (K(), ie(k(bi), {
        key: 0,
        present: o.forceMount || k(t).open.value
      }, {
        default: F(() => [
          j(Km, Be(o.$attrs, {
            ref: k(n),
            as: o.as,
            "as-child": o.asChild
          }), {
            default: F(() => [
              fe(o.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : rt("", !0);
    };
  }
}), Qm = /* @__PURE__ */ se({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    Ke();
    const n = Wt();
    return (o, r) => (K(), ie(k(st), Be(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: r[0] || (r[0] = (s) => k(n).onOpenChange(!1))
    }), {
      default: F(() => [
        fe(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Ym = /* @__PURE__ */ se({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = Wt();
    return Ke(), (o, r) => (K(), ie(k(st), Be(t, {
      id: k(n).titleId
    }), {
      default: F(() => [
        fe(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Zm = /* @__PURE__ */ se({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    Ke();
    const n = Wt();
    return (o, r) => (K(), ie(k(st), Be(t, {
      id: k(n).descriptionId
    }), {
      default: F(() => [
        fe(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Xm = "data-radix-vue-collection-item", [xi, e0] = or("CollectionProvider");
function t0(e = Xm) {
  const t = te(/* @__PURE__ */ new Map()), n = te(), o = e0({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: r } = Ad(o), s = ye(() => Array.from(o.itemMap.value.values())), a = ye(() => o.itemMap.value.size);
  return { getItems: r, reactiveItems: s, itemMapSize: a };
}
const n0 = /* @__PURE__ */ se({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = xi(), { primitiveElement: o, currentElement: r } = yi();
    return et(r, () => {
      n.collectionRef.value = r.value;
    }), () => Jt(vi, { ref: o }, t);
  }
}), o0 = /* @__PURE__ */ se({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = xi(), { primitiveElement: r, currentElement: s } = yi();
    return Cn((a) => {
      if (s.value) {
        const i = is(s.value);
        o.itemMap.value.set(i, { ref: s.value, value: e.value }), a(() => o.itemMap.value.delete(i));
      }
    }), () => Jt(vi, { ...n, [o.attrName]: "", ref: r }, t);
  }
});
function Ad(e) {
  const t = e ?? xi();
  return { getItems: () => {
    const n = t.collectionRef.value;
    if (!n)
      return [];
    const o = Array.from(n.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (r, s) => o.indexOf(r.ref) - o.indexOf(s.ref)
    );
  } };
}
const r0 = "rovingFocusGroup.onEntryFocus", s0 = { bubbles: !1, cancelable: !0 }, a0 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function i0(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function l0(e, t, n) {
  const o = i0(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return a0[o];
}
function Sd(e, t = !1, n) {
  const o = n?.activeElement ?? document.activeElement;
  for (const r of e)
    if (r === o || (r.focus({ preventScroll: t }), document.activeElement !== o))
      return;
}
function c0(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [u0, d0] = or("RovingFocusGroup"), p0 = /* @__PURE__ */ se({
  __name: "RovingFocusGroup",
  props: {
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: !1 },
    currentTabStopId: {},
    defaultCurrentTabStopId: {},
    preventScrollOnEntryFocus: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, { loop: s, orientation: a, dir: i } = Co(o), l = xd(i), c = hi(o, "currentTabStopId", r, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), u = te(!1), d = te(!1), p = te(0), { getItems: m } = t0();
    function f(y) {
      const _ = !d.value;
      if (y.currentTarget && y.target === y.currentTarget && _ && !u.value) {
        const h = new CustomEvent(r0, s0);
        if (y.currentTarget.dispatchEvent(h), r("entryFocus", h), !h.defaultPrevented) {
          const x = m().map((q) => q.ref).filter((q) => q.dataset.disabled !== ""), b = x.find((q) => q.getAttribute("data-active") === "true"), w = x.find(
            (q) => q.id === c.value
          ), I = [b, w, ...x].filter(
            Boolean
          );
          Sd(I, o.preventScrollOnEntryFocus);
        }
      }
      d.value = !1;
    }
    function g() {
      setTimeout(() => {
        d.value = !1;
      }, 1);
    }
    return t({
      getItems: m
    }), d0({
      loop: s,
      dir: l,
      orientation: a,
      currentTabStopId: c,
      onItemFocus: (y) => {
        c.value = y;
      },
      onItemShiftTab: () => {
        u.value = !0;
      },
      onFocusableItemAdd: () => {
        p.value++;
      },
      onFocusableItemRemove: () => {
        p.value--;
      }
    }), (y, _) => (K(), ie(k(n0), null, {
      default: F(() => [
        j(k(st), {
          tabindex: u.value || p.value === 0 ? -1 : 0,
          "data-orientation": k(a),
          as: y.as,
          "as-child": y.asChild,
          dir: k(l),
          style: { outline: "none" },
          onMousedown: _[0] || (_[0] = (h) => d.value = !0),
          onMouseup: g,
          onFocus: f,
          onBlur: _[1] || (_[1] = (h) => u.value = !1)
        }, {
          default: F(() => [
            fe(y.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), f0 = /* @__PURE__ */ se({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: !0 },
    active: { type: Boolean, default: !0 },
    allowShiftKey: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = u0(), o = ye(() => t.tabStopId || Qo()), r = ye(
      () => n.currentTabStopId.value === o.value
    ), { getItems: s } = Ad(), { primitiveElement: a, currentElement: i } = yi(), l = ye(() => {
      var u;
      return (u = i.value) == null ? void 0 : u.getRootNode();
    });
    bt(() => {
      t.focusable && n.onFocusableItemAdd();
    }), on(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function c(u) {
      if (u.key === "Tab" && u.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (u.target !== u.currentTarget)
        return;
      const d = l0(
        u,
        n.orientation.value,
        n.dir.value
      );
      if (d !== void 0) {
        if (u.metaKey || u.ctrlKey || u.altKey || !t.allowShiftKey && u.shiftKey)
          return;
        u.preventDefault();
        let p = [...s().map((m) => m.ref).filter((m) => m.dataset.disabled !== "")];
        if (d === "last")
          p.reverse();
        else if (d === "prev" || d === "next") {
          d === "prev" && p.reverse();
          const m = p.indexOf(
            u.currentTarget
          );
          p = n.loop.value ? c0(p, m + 1) : p.slice(m + 1);
        }
        jt(() => Sd(p, !1, l.value));
      }
    }
    return (u, d) => (K(), ie(k(o0), null, {
      default: F(() => [
        j(k(st), {
          ref_key: "primitiveElement",
          ref: a,
          tabindex: r.value ? 0 : -1,
          "data-orientation": k(n).orientation.value,
          "data-active": u.active,
          "data-disabled": u.focusable ? void 0 : "",
          as: u.as,
          "as-child": u.asChild,
          onMousedown: d[0] || (d[0] = (p) => {
            u.focusable ? k(n).onItemFocus(o.value) : p.preventDefault();
          }),
          onFocus: d[1] || (d[1] = (p) => k(n).onItemFocus(o.value)),
          onKeydown: c
        }, {
          default: F(() => [
            fe(u.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), h0 = /* @__PURE__ */ se({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return Ke(), (n, o) => (K(), ie(k(st), Be(t, {
      onMousedown: o[0] || (o[0] = (r) => {
        !r.defaultPrevented && r.detail > 1 && r.preventDefault();
      })
    }), {
      default: F(() => [
        fe(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function m0() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
m0();
const [wi, g0] = or("TabsRoot"), v0 = /* @__PURE__ */ se({
  __name: "TabsRoot",
  props: {
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: {},
    activationMode: { default: "automatic" },
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { orientation: r, dir: s } = Co(n), a = xd(s);
    Ke();
    const i = hi(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), l = te();
    return g0({
      modelValue: i,
      changeModelValue: (c) => {
        i.value = c;
      },
      orientation: r,
      dir: a,
      activationMode: n.activationMode,
      baseId: Qo(void 0, "radix-vue-tabs"),
      tabsList: l
    }), (c, u) => (K(), ie(k(st), {
      dir: k(a),
      "data-orientation": k(r),
      "as-child": c.asChild,
      as: c.as
    }, {
      default: F(() => [
        fe(c.$slots, "default", { modelValue: k(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), y0 = /* @__PURE__ */ se({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = Co(t), { forwardRef: o, currentElement: r } = Ke(), s = wi();
    return s.tabsList = r, (a, i) => (K(), ie(k(p0), {
      "as-child": "",
      orientation: k(s).orientation.value,
      dir: k(s).dir.value,
      loop: k(n)
    }, {
      default: F(() => [
        j(k(st), {
          ref: k(o),
          role: "tablist",
          "as-child": a.asChild,
          as: a.as,
          "aria-orientation": k(s).orientation.value
        }, {
          default: F(() => [
            fe(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function Ed(e, t) {
  return `${e}-trigger-${t}`;
}
function Id(e, t) {
  return `${e}-content-${t}`;
}
const b0 = /* @__PURE__ */ se({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = Ke(), o = wi(), r = ye(() => Ed(o.baseId, t.value)), s = ye(() => Id(o.baseId, t.value)), a = ye(() => t.value === o.modelValue.value), i = te(a.value);
    return bt(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (l, c) => (K(), ie(k(bi), {
      present: a.value,
      "force-mount": ""
    }, {
      default: F(({ present: u }) => [
        j(k(st), {
          id: s.value,
          ref: k(n),
          "as-child": l.asChild,
          as: l.as,
          role: "tabpanel",
          "data-state": a.value ? "active" : "inactive",
          "data-orientation": k(o).orientation.value,
          "aria-labelledby": r.value,
          hidden: !u.value,
          tabindex: "0",
          style: Sn({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: F(() => [
            l.forceMount || a.value ? fe(l.$slots, "default", { key: 0 }) : rt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), x0 = /* @__PURE__ */ se({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = Ke(), o = wi(), r = ye(() => Ed(o.baseId, t.value)), s = ye(() => Id(o.baseId, t.value)), a = ye(() => t.value === o.modelValue.value);
    return (i, l) => (K(), ie(k(f0), {
      "as-child": "",
      focusable: !i.disabled,
      active: a.value
    }, {
      default: F(() => [
        j(k(st), {
          id: r.value,
          ref: k(n),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": a.value ? "true" : "false",
          "aria-controls": s.value,
          "data-state": a.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": k(o).orientation.value,
          onMousedown: l[0] || (l[0] = Po((c) => {
            !i.disabled && c.ctrlKey === !1 ? k(o).changeModelValue(i.value) : c.preventDefault();
          }, ["left"])),
          onKeydown: l[1] || (l[1] = Su((c) => k(o).changeModelValue(i.value), ["enter", "space"])),
          onFocus: l[2] || (l[2] = () => {
            const c = k(o).activationMode !== "manual";
            !a.value && !i.disabled && c && k(o).changeModelValue(i.value);
          })
        }, {
          default: F(() => [
            fe(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), w0 = /* @__PURE__ */ se({
  __name: "Dialog",
  setup(e) {
    return (t, n) => (K(), ie(k(_m), null, {
      default: F(() => [
        fe(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), k0 = /* @__PURE__ */ se({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (K(), ie(k(Am), os(er(t)), {
      default: F(() => [
        fe(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Td(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var r = e.length;
      for (t = 0; t < r; t++)
        e[t] && (n = Td(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function C0() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)
    (e = arguments[n]) && (t = Td(e)) && (o && (o += " "), o += t);
  return o;
}
const ki = "-";
function _0(e) {
  const t = S0(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  function r(a) {
    const i = a.split(ki);
    return i[0] === "" && i.length !== 1 && i.shift(), Rd(i, t) || A0(a);
  }
  function s(a, i) {
    const l = n[a] || [];
    return i && o[a] ? [...l, ...o[a]] : l;
  }
  return {
    getClassGroupId: r,
    getConflictingClassGroupIds: s
  };
}
function Rd(e, t) {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? Rd(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const s = e.join(ki);
  return t.validators.find(({
    validator: a
  }) => a(s))?.classGroupId;
}
const $l = /^\[(.+)\]$/;
function A0(e) {
  if ($l.test(e)) {
    const t = $l.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function S0(e) {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return I0(Object.entries(e.classGroups), n).forEach(([s, a]) => {
    va(a, o, s, t);
  }), o;
}
function va(e, t, n, o) {
  e.forEach((r) => {
    if (typeof r == "string") {
      const s = r === "" ? t : jl(t, r);
      s.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (E0(r)) {
        va(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([s, a]) => {
      va(a, jl(t, s), n, o);
    });
  });
}
function jl(e, t) {
  let n = e;
  return t.split(ki).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}
function E0(e) {
  return e.isThemeGetter;
}
function I0(e, t) {
  return t ? e.map(([n, o]) => {
    const r = o.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([a, i]) => [t + a, i])) : s);
    return [n, r];
  }) : e;
}
function T0(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function r(s, a) {
    n.set(s, a), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(s) {
      let a = n.get(s);
      if (a !== void 0)
        return a;
      if ((a = o.get(s)) !== void 0)
        return r(s, a), a;
    },
    set(s, a) {
      n.has(s) ? n.set(s, a) : r(s, a);
    }
  };
}
const Nd = "!";
function R0(e) {
  const t = e.separator, n = t.length === 1, o = t[0], r = t.length;
  return function(a) {
    const i = [];
    let l = 0, c = 0, u;
    for (let g = 0; g < a.length; g++) {
      let y = a[g];
      if (l === 0) {
        if (y === o && (n || a.slice(g, g + r) === t)) {
          i.push(a.slice(c, g)), c = g + r;
          continue;
        }
        if (y === "/") {
          u = g;
          continue;
        }
      }
      y === "[" ? l++ : y === "]" && l--;
    }
    const d = i.length === 0 ? a : a.substring(c), p = d.startsWith(Nd), m = p ? d.substring(1) : d, f = u && u > c ? u - c : void 0;
    return {
      modifiers: i,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: f
    };
  };
}
function N0(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}
function B0(e) {
  return {
    cache: T0(e.cacheSize),
    splitModifiers: R0(e),
    ..._0(e)
  };
}
const M0 = /\s+/;
function F0(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r
  } = t, s = /* @__PURE__ */ new Set();
  return e.trim().split(M0).map((a) => {
    const {
      modifiers: i,
      hasImportantModifier: l,
      baseClassName: c,
      maybePostfixModifierPosition: u
    } = n(a);
    let d = o(u ? c.substring(0, u) : c), p = !!u;
    if (!d) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (d = o(c), !d)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      p = !1;
    }
    const m = N0(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? m + Nd : m,
      classGroupId: d,
      originalClassName: a,
      hasPostfixModifier: p
    };
  }).reverse().filter((a) => {
    if (!a.isTailwindClass)
      return !0;
    const {
      modifierId: i,
      classGroupId: l,
      hasPostfixModifier: c
    } = a, u = i + l;
    return s.has(u) ? !1 : (s.add(u), r(l, c).forEach((d) => s.add(i + d)), !0);
  }).reverse().map((a) => a.originalClassName).join(" ");
}
function O0() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Bd(t)) && (o && (o += " "), o += n);
  return o;
}
function Bd(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Bd(e[o])) && (n && (n += " "), n += t);
  return n;
}
function U0(e, ...t) {
  let n, o, r, s = a;
  function a(l) {
    const c = t.reduce((u, d) => d(u), e());
    return n = B0(c), o = n.cache.get, r = n.cache.set, s = i, i(l);
  }
  function i(l) {
    const c = o(l);
    if (c)
      return c;
    const u = F0(l, n);
    return r(l, u), u;
  }
  return function() {
    return s(O0.apply(null, arguments));
  };
}
function Ie(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const Md = /^\[(?:([a-z-]+):)?(.+)\]$/i, P0 = /^\d+\/\d+$/, D0 = /* @__PURE__ */ new Set(["px", "full", "screen"]), L0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, $0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, j0 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, V0 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Kt(e) {
  return Mn(e) || D0.has(e) || P0.test(e);
}
function pn(e) {
  return _o(e, "length", Q0);
}
function Mn(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Er(e) {
  return _o(e, "number", Mn);
}
function To(e) {
  return !!e && Number.isInteger(Number(e));
}
function z0(e) {
  return e.endsWith("%") && Mn(e.slice(0, -1));
}
function ce(e) {
  return Md.test(e);
}
function fn(e) {
  return L0.test(e);
}
const q0 = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function J0(e) {
  return _o(e, q0, Fd);
}
function W0(e) {
  return _o(e, "position", Fd);
}
const H0 = /* @__PURE__ */ new Set(["image", "url"]);
function K0(e) {
  return _o(e, H0, Z0);
}
function G0(e) {
  return _o(e, "", Y0);
}
function Ro() {
  return !0;
}
function _o(e, t, n) {
  const o = Md.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}
function Q0(e) {
  return $0.test(e);
}
function Fd() {
  return !1;
}
function Y0(e) {
  return j0.test(e);
}
function Z0(e) {
  return V0.test(e);
}
function X0() {
  const e = Ie("colors"), t = Ie("spacing"), n = Ie("blur"), o = Ie("brightness"), r = Ie("borderColor"), s = Ie("borderRadius"), a = Ie("borderSpacing"), i = Ie("borderWidth"), l = Ie("contrast"), c = Ie("grayscale"), u = Ie("hueRotate"), d = Ie("invert"), p = Ie("gap"), m = Ie("gradientColorStops"), f = Ie("gradientColorStopPositions"), g = Ie("inset"), y = Ie("margin"), _ = Ie("opacity"), h = Ie("padding"), x = Ie("saturate"), b = Ie("scale"), w = Ie("sepia"), I = Ie("skew"), q = Ie("space"), A = Ie("translate"), E = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], z = () => ["auto", ce, t], S = () => [ce, t], P = () => ["", Kt, pn], W = () => ["auto", Mn, ce], X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Y = () => ["solid", "dashed", "dotted", "double", "none"], G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], M = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ae = () => ["", "0", ce], ke = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Ae = () => [Mn, Er], Ge = () => [Mn, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ro],
      spacing: [Kt, pn],
      blur: ["none", "", fn, ce],
      brightness: Ae(),
      borderColor: [e],
      borderRadius: ["none", "", "full", fn, ce],
      borderSpacing: S(),
      borderWidth: P(),
      contrast: Ae(),
      grayscale: ae(),
      hueRotate: Ge(),
      invert: ae(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [z0, pn],
      inset: z(),
      margin: z(),
      opacity: Ae(),
      padding: S(),
      saturate: Ae(),
      scale: Ae(),
      sepia: ae(),
      skew: Ge(),
      space: S(),
      translate: S()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ce]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [fn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ke()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ke()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...X(), ce]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: B()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": B()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": B()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", To, ce]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: z()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ce]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ae()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ae()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", To, ce]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ro]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", To, ce]
        }, ce]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ro]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [To, ce]
        }, ce]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ce]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ce]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...M()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...M(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...M(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [h]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [h]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [h]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [h]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [h]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [h]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [h]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [h]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [h]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [y]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [y]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [y]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [y]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [y]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [y]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [y]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [y]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [y]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [q]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [q]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ce, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ce, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ce, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [fn]
        }, fn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ce, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ce, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ce, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ce, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", fn, pn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Er]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ro]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Mn, Er]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Kt, ce]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ce]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ce]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [_]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [_]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Y(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Kt, pn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Kt, ce]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ce]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ce]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [_]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...X(), W0]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", J0]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, K0]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [f]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [_]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Y(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [i]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [_]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: Y()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [r]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [r]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [r]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [r]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [r]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [r]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [r]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [r]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...Y()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Kt, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Kt, pn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: P()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [_]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Kt, pn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", fn, G0]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ro]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [_]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": G()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": G()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", fn, ce]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [w]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [_]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [w]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ce]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Ge()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ce]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Ge()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ce]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [b]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [b]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [b]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [To, ce]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [A]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [A]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [I]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [I]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ce]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ce]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ce]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Kt, pn, Er]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const eg = /* @__PURE__ */ U0(X0);
function vt(...e) {
  return eg(C0(e));
}
function tg(e) {
  return e.startsWith("+") && (e = e.substring(1)), e.startsWith("0") && (e = "254" + e.substring(1)), e.match(/^(7|1)/) && (e = "254" + e), e;
}
function ng(e) {
  const t = e.slice(-1), n = e.slice(0, -1);
  return t === "G" ? n + " GB" : t === "M" ? n + " MB" : n + " KB";
}
const Bt = /* @__PURE__ */ se({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (K(), he("div", {
      class: gt(k(vt)("flex flex-col space-y-2 text-center sm:text-left", t.class))
    }, [
      fe(n.$slots, "default")
    ], 2));
  }
}), Mt = /* @__PURE__ */ se({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (K(), ie(k(Ym), Be(t, {
      class: k(vt)(
        "text-lg text-foreground font-semibold leading-none tracking-tight",
        t.class
      )
    }), {
      default: F(() => [
        fe(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ft = /* @__PURE__ */ se({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (K(), ie(k(Zm), Be(t, {
      class: k(vt)("text-muted-foreground text-sm", t.class)
    }), {
      default: F(() => [
        fe(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ir = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const og = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), rg = (e, t) => ({ size: n, strokeWidth: o = 2, absoluteStrokeWidth: r, color: s, class: a, ...i }, { attrs: l, slots: c }) => Jt(
  "svg",
  {
    ...Ir,
    width: n || Ir.width,
    height: n || Ir.height,
    stroke: s || Ir.stroke,
    "stroke-width": r ? Number(o) * 24 / Number(n) : o,
    ...l,
    class: ["lucide", `lucide-${og(e)}`],
    ...i
  },
  [
    ...t.map((u) => Jt(...u)),
    ...c.default ? [c.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sg = rg("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), ag = /* @__PURE__ */ V("span", { class: "sr-only" }, "Close", -1), Vl = /* @__PURE__ */ se({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = sr(t);
    function s(l) {
      l.stopPropagation(), l.preventDefault();
    }
    function a(l) {
      l.stopPropagation(), l.preventDefault();
    }
    function i(l) {
      l.stopPropagation(), l.preventDefault();
    }
    return (l, c) => (K(), ie(k(Em), null, {
      default: F(() => [
        j(k(Gm), {
          class: "fixed inset-0 z-50 grid place-items-end overflow-y-auto bg-[radial-gradient(circle_at_50%_100%,rgba(0,0,0,0.5)_40%,rgba(0,0,0,0.7))] p-3 backdrop-blur sm:place-items-center sm:bg-[radial-gradient(rgba(0,0,0,0.5)_40%,rgba(0,0,0,0.7))] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          style: { opacity: "1", "--visual-viewport-height": "924px", "--black-05": "black" }
        }),
        j(k(Hm), Be({
          class: k(vt)(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
            n.class
          )
        }, { ...n, ...k(r) }, {
          onPointerDownOutside: s,
          onFocusOutside: a,
          onInteractOutside: i
        }), {
          default: F(() => [
            fe(l.$slots, "default"),
            j(k(Qm), {
              class: "text-primary hover:bg-primary:20 focus:shadow-secondary absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none",
              "aria-label": "Close"
            }, {
              default: F(() => [
                ag,
                j(k(sg), { class: "w-4 h-4 text-primary" })
              ]),
              _: 1
            })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), hn = /* @__PURE__ */ se({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (K(), he("div", {
      class: gt(
        k(vt)(
          "flex flex-col space-y-2 sm:space-y-0 mt-1.5 sm:flex-row sm:justify-end sm:space-x-2",
          t.class
        )
      )
    }, [
      fe(n.$slots, "default")
    ], 2));
  }
}), ig = {
  key: 0,
  class: "absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-secondary text-10px font-medium py-1 px-3 rounded-full"
}, lg = { class: "flex justify-between items-center" }, cg = { class: "w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-md" }, ug = { class: "text-xs font-medium text-primary border border-border bg-accent rounded-full py-0.5 px-3" }, dg = { class: "flex flex-col items-start mt-2" }, pg = { class: "font-semibold text-xs mb-1" }, fg = { class: "text-xs text-muted-foreground" }, hg = { class: "flex flex-col items-start gap-1 mt-1" }, mg = { class: "text-sm ml-1 font-normal text-muted-foreground" }, gg = /* @__PURE__ */ V("div", { class: "i-solar-arrow-right-linear" }, null, -1), vg = /* @__PURE__ */ se({
  __name: "PackageCard",
  props: {
    duration: {},
    devices: {},
    price: {},
    id: { default: "" },
    name: { default: "Internet Package" },
    currency: { default: "KES" },
    type: { default: "PAID" },
    quota: { default: "Unlimited" },
    isFeatured: { type: Boolean, default: !1 },
    isBestValue: { type: Boolean, default: !1 },
    onSelect: {},
    handleDialogClose: {}
  },
  setup(e) {
    const t = e, n = te(!1);
    function o(l) {
      const c = l.target;
      setTimeout(() => {
        c.blur(), document.activeElement.blur();
        const u = document.getElementById("phone");
        u && (u.addEventListener("focusin", (d) => {
          const p = d.target;
          document.activeElement !== p && p.focus();
        }, !0), u.focus(), u.click(), u.scrollIntoView({ behavior: "smooth", block: "center" })), t.onSelect && t.onSelect();
      }, 200);
    }
    function r(l) {
      t.handleDialogClose && t.handleDialogClose(l);
    }
    const s = ye(() => {
      switch (t.type) {
        case "AD":
          return "i-material-symbols-movie-info-outline-rounded";
        case "FREE":
          return "i-solar-gift-linear";
        default:
          return "i-solar-global-linear";
      }
    }), a = ye(() => t.name || `${t.quota} - ${t.duration}`), i = ye(() => {
      switch (t.type) {
        case "AD":
          return "Watch Ad";
        case "FREE":
          return "Connect";
        default:
          return "Buy Now";
      }
    });
    return (l, c) => (K(), he("div", {
      class: gt(["relative flex flex-col justify-between bg-background rounded-xl p-4 border border-border transition-all duration-300 mt-2 hover:shadow-md hover:border-primary/20", {
        "ring-2 ring-primary/30 border-primary/20": l.isFeatured,
        "transform hover:-translate-y-1": !n.value
      }]),
      onMouseenter: c[0] || (c[0] = (u) => n.value = !0),
      onMouseleave: c[1] || (c[1] = (u) => n.value = !1)
    }, [
      l.isBestValue ? (K(), he("div", ig, " Best Value ")) : rt("", !0),
      V("div", lg, [
        V("div", cg, [
          V("div", {
            class: gt(s.value)
          }, null, 2)
        ]),
        V("div", ug, Te(l.quota), 1)
      ]),
      V("div", dg, [
        V("div", pg, Te(a.value), 1),
        V("div", fg, Te(l.duration) + " • " + Te(l.devices) + " device(s) ", 1)
      ]),
      V("div", hg, [
        V("div", {
          class: gt(["text-xl font-bold flex items-center", { "text-primary": l.isFeatured }])
        }, [
          l.type === "FREE" ? (K(), he(_e, { key: 0 }, [
            pe(" Free ")
          ], 64)) : (K(), he(_e, { key: 1 }, [
            pe(Te(l.price) + " ", 1),
            V("span", mg, Te(l.currency), 1)
          ], 64))
        ], 2),
        j(k(w0), { "onUpdate:open": r }, {
          default: F(() => [
            j(k(k0), { "as-child": "" }, {
              default: F(() => [
                V("button", {
                  id: "dialog-trigger-button",
                  class: "bg-primary/90 w-full text-primary-foreground px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:bg-primary flex items-center justify-center gap-2",
                  onClick: o
                }, [
                  pe(Te(i.value) + " ", 1),
                  gg
                ])
              ]),
              _: 1
            }),
            fe(l.$slots, "default")
          ]),
          _: 3
        })
      ])
    ], 34));
  }
}), yg = ["src"], bg = {
  key: 0,
  class: "absolute bottom-0 left-0 w-full h-30",
  style: { background: "linear-gradient(to top, black, rgba(0, 0, 0, 1))" }
}, xg = { class: "absolute top-10px left-10px w-12 h-12" }, wg = {
  class: "w-full h-full",
  style: { transform: "rotate(-90deg)" }
}, kg = /* @__PURE__ */ V("circle", {
  class: "text-gray-600/40",
  "stroke-width": "4",
  stroke: "currentColor",
  fill: "transparent",
  r: "20",
  cx: "24",
  cy: "24"
}, null, -1), Cg = ["stroke-dashoffset"], _g = {
  class: "absolute inset-0 flex items-center justify-center text-white font-bold text-xs",
  style: { transform: "rotate(0deg)" }
}, Ag = /* @__PURE__ */ V("svg", {
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ V("path", { d: "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" })
], -1), Sg = [
  Ag
], Eg = /* @__PURE__ */ se({
  __name: "VideoPlayer",
  props: /* @__PURE__ */ Wc({
    videoUrl: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = qc(e, "modelValue"), n = 2 * Math.PI * 20, o = te(0), r = te(0), s = te(0), a = te(!1), i = te(!1), l = ye(() => n * (1 - o.value / 100)), c = ye(() => {
      const f = Math.floor(s.value / 60), g = Math.floor(s.value % 60);
      return `${f}:${g.toString().padStart(2, "0")}`;
    });
    function u(f) {
      f.data.property === "duration" && (r.value = f.data.value, s.value = r.value), f.data.property === "currentTime" && (o.value = f.data.value / r.value * 100, s.value = r.value - f.data.value), f.data.property === "ended" && f.data.value === !0 && (t.value = !1, a.value = !1), f.data.property === "paused" && (a.value = !f.data.value), f.data.__privateUnstableMessageType === "iframeReady" && (i.value = !0), f.data.property === "play" && (window.cloudflareVideoController.hideControls(), a.value = f.data.value);
    }
    function d() {
      return window.cloudflareVideoController?.muted;
    }
    function p() {
      window.cloudflareVideoController.unmute();
    }
    class m {
      iframe;
      player;
      constructor() {
        this.iframe = null, this.player = null, this.initialize();
      }
      initialize() {
        if (this.iframe = document.querySelector('iframe[src*="cloudflarestream.com"]'), !this.iframe) {
          console.error("Cloudflare Stream iframe not found");
          return;
        }
        const g = () => {
          window.Stream ? this.setupPlayer() : setTimeout(g, 100);
        };
        g();
      }
      setupPlayer() {
        try {
          this.player = window.Stream(this.iframe), this.showControls(), this.player.addEventListener("play", () => {
            this.postMessage("play", !0);
          }), this.player.addEventListener("pause", () => {
            this.postMessage("paused", !0);
          });
        } catch (g) {
          console.error("Error setting up Cloudflare Stream player:", g);
        }
      }
      // Helper method to post messages to the parent window
      postMessage(g, y) {
        window.parent.postMessage({ property: g, value: y }, "*");
      }
      play() {
        this.iframe?.focus(), this.player && this.player.play().catch((g) => {
          this.postMessage("muted", !0), this.player.play();
        });
      }
      pause() {
        this.player && this.player.pause();
      }
      hideControls() {
        this.player && (this.player.controls = !1);
      }
      showControls() {
        this.player && (this.player.controls = !0);
      }
      togglePlay() {
        this.player && (this.player.paused ? this.play() : this.pause());
      }
    }
    return bt(() => {
      if (window.addEventListener("message", u), window.Stream)
        window.cloudflareVideoController = new m();
      else {
        const f = document.createElement("script");
        f.src = "https://embed.cloudflarestream.com/embed/sdk.latest.js", f.async = !0, f.defer = !0, f.onload = () => {
          window.cloudflareVideoController = new m();
        }, document.head.appendChild(f);
      }
    }), on(() => {
      window.removeEventListener("message", u);
    }), (f, g) => (K(), he("div", {
      class: "relative",
      style: Sn([{ "padding-top": "56.25%" }, {
        width: "100%",
        height: "100%"
      }])
    }, [
      V("iframe", {
        id: "video-frame",
        src: f.videoUrl,
        class: "video-frame absolute top-0 left-0 w-full h-full",
        style: { "border-radius": "0px" },
        allow: "accelerometer;gyroscope;encrypted-media;fullscreen",
        allowfullscreen: "",
        loading: "lazy"
      }, null, 8, yg),
      i.value && !a.value ? (K(), he("div", bg)) : rt("", !0),
      V("div", xg, [
        (K(), he("svg", wg, [
          kg,
          V("circle", {
            class: "text-primary",
            "stroke-width": "4",
            stroke: "currentColor",
            fill: "transparent",
            r: "20",
            cx: "24",
            cy: "24",
            "stroke-dasharray": n,
            "stroke-dashoffset": l.value,
            "stroke-linecap": "round"
          }, null, 8, Cg)
        ])),
        V("div", _g, Te(c.value), 1)
      ]),
      a.value && d() ? (K(), he("button", {
        key: 1,
        class: "absolute bottom-150px right-10px bg-black/50 rounded-full p-2 hover:bg-black/70 transition-all focus:outline-none",
        onClick: g[0] || (g[0] = () => p())
      }, Sg)) : rt("", !0)
    ]));
  }
}), Ig = {
  blue: "theme-blue",
  green: "theme-green",
  red: "theme-red",
  orange: "theme-orange",
  yellow: "theme-yellow",
  slate: "theme-slate",
  stone: "theme-stone",
  neutral: "theme-neutral",
  violet: "theme-violet",
  zinc: "theme-zinc",
  rose: "theme-rose",
  gray: "theme-gray"
};
function Od(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Od(e[t])) && (o && (o += " "), o += n);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function Tg() {
  for (var e, t, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Od(e)) && (o && (o += " "), o += t);
  return o;
}
const zl = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, ql = Tg, Rg = (e, t) => (n) => {
  var o;
  if (t?.variants == null)
    return ql(e, n?.class, n?.className);
  const { variants: r, defaultVariants: s } = t, a = Object.keys(r).map((c) => {
    const u = n?.[c], d = s?.[c];
    if (u === null)
      return null;
    const p = zl(u) || zl(d);
    return r[c][p];
  }), i = n && Object.entries(n).reduce((c, u) => {
    let [d, p] = u;
    return p === void 0 || (c[d] = p), c;
  }, {}), l = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, u) => {
    let { class: d, className: p, ...m } = u;
    return Object.entries(m).every((f) => {
      let [g, y] = f;
      return Array.isArray(y) ? y.includes({
        ...s,
        ...i
      }[g]) : {
        ...s,
        ...i
      }[g] === y;
    }) ? [
      ...c,
      d,
      p
    ] : c;
  }, []);
  return ql(e, a, l, n?.class, n?.className);
}, mn = /* @__PURE__ */ se({
  __name: "Button",
  props: {
    variant: {},
    size: {},
    as: { default: "button" },
    asChild: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (K(), ie(k(st), {
      as: t.as,
      "as-child": t.asChild,
      class: gt(k(vt)(k(Ng)({ variant: t.variant, size: t.size }), t.$attrs.class ?? ""))
    }, {
      default: F(() => [
        fe(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Ng = Rg(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary:90 rounded-full",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive:90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary:80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Bg = (e) => typeof e < "u";
function Mg(e) {
  return JSON.parse(JSON.stringify(e));
}
function Fg(e, t, n, o = {}) {
  var r, s, a;
  const {
    clone: i = !1,
    passive: l = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: d,
    shouldEmit: p
  } = o, m = He(), f = n || m?.emit || ((r = m?.$emit) == null ? void 0 : r.bind(m)) || ((a = (s = m?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : a.bind(m?.proxy));
  let g = c;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const y = (x) => i ? typeof i == "function" ? i(x) : Mg(x) : x, _ = () => Bg(e[t]) ? y(e[t]) : d, h = (x) => {
    p ? p(x) && f(g, x) : f(g, x);
  };
  if (l) {
    const x = _(), b = te(x);
    let w = !1;
    return et(
      () => e[t],
      (I) => {
        w || (w = !0, b.value = y(I), jt(() => w = !1));
      }
    ), et(
      b,
      (I) => {
        !w && (I !== e[t] || u) && h(I);
      },
      { deep: u }
    ), b;
  } else
    return ye({
      get() {
        return _();
      },
      set(x) {
        h(x);
      }
    });
}
const Og = /* @__PURE__ */ se({
  inheritAttrs: !1,
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { class: r, ...s } = zc(), a = Fg(n, "modelValue", o, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (i, l) => Rc((K(), he("input", Be({
      "onUpdate:modelValue": l[0] || (l[0] = (c) => qe(a) ? a.value = c : null),
      class: k(vt)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50", k(r) ?? "")
    }, s), null, 16)), [
      [Au, k(a)]
    ]);
  }
}), Jl = /* @__PURE__ */ se({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (K(), ie(k(h0), Be(t, {
      class: k(vt)(
        "block text-sm tracking-tight font-medium text-foreground text-left",
        t.class
      )
    }), {
      default: F(() => [
        fe(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ug = /* @__PURE__ */ se({
  __name: "Tabs",
  props: {
    defaultValue: {},
    orientation: {},
    dir: {},
    activationMode: {},
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = hm(e, t);
    return (s, a) => (K(), ie(k(v0), os(er(k(r))), {
      default: F(() => [
        fe(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pg = /* @__PURE__ */ se({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (K(), ie(k(x0), Be(t, {
      class: k(vt)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md",
        t.class
      )
    }), {
      default: F(() => [
        fe(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dg = /* @__PURE__ */ se({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (K(), ie(k(y0), Be(t, {
      class: k(vt)(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        t.class
      )
    }), {
      default: F(() => [
        fe(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ds = /* @__PURE__ */ se({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (K(), ie(k(b0), Be({
      class: k(vt)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", t.class)
    }, t), {
      default: F(() => [
        fe(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Me = (e) => (wc("data-v-da37922d"), e = e(), kc(), e), Lg = {
  key: 0,
  class: "h-full w-full bg-background"
}, $g = {
  key: 0,
  class: "fixed inset-0"
}, jg = ["src"], Vg = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "absolute inset-0 bg-white/10" }, null, -1)), zg = { class: "w-full grid grid-rows-[auto_1fr_auto]" }, qg = { class: "w-full z-10 fixed top-0 left-0" }, Jg = { class: "w-full rounded-b-md bg-muted p-4 flex items-center justify-center" }, Wg = {
  key: 0,
  src: Jh,
  style: { height: "50px" }
}, Hg = ["src"], Kg = { class: "w-full h-full justify-between flex flex-col items-center" }, Gg = { class: "w-full h-full flex flex-col items-center" }, Qg = { class: "grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-2 p-6 overflow-y-auto w-full max-h-full my-75px" }, Yg = { key: 0 }, Zg = { class: "uppercase" }, Xg = { class: "grid gap-4 py-4" }, e1 = { class: "hotspot-input" }, t1 = { class: "flex flex-col gap-2" }, n1 = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "flex w-full items-center" }, [
  /* @__PURE__ */ V("div", { class: "px-2 py-2 bg-accent text-muted-foreground border border-border rounded-s h-40px" }, " +254 "),
  /* @__PURE__ */ V("input", {
    id: "phone",
    type: "number",
    name: "phone",
    class: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 rounded-s-[0px]"
  })
], -1)), o1 = ["value"], r1 = ["value"], s1 = ["value"], a1 = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("input", {
  type: "hidden",
  name: "payment_method",
  value: "mpesa"
}, null, -1)), i1 = { class: "grid gap-4 py-4" }, l1 = { class: "hotspot-input" }, c1 = { class: "flex w-full items-center" }, u1 = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "px-2 py-2 bg-accent text-muted-foreground border border-border rounded-s h-40px" }, "+250", -1)), d1 = ["value"], p1 = ["value"], f1 = ["value"], h1 = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("input", {
  type: "hidden",
  name: "payment_method",
  value: "kpay_mtn"
}, null, -1)), m1 = { class: "grid gap-4 py-4" }, g1 = { class: "hotspot-input" }, v1 = ["value"], y1 = ["value"], b1 = ["value"], x1 = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("input", {
  type: "hidden",
  name: "payment_method",
  value: "kpay_card"
}, null, -1)), w1 = {
  key: 1,
  class: "relative flex flex-col items-stretch justify-center w-full"
}, k1 = { class: "grid gap-4 py-4" }, C1 = { class: "hotspot-input" }, _1 = ["value"], A1 = ["value"], S1 = ["value"], E1 = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("input", {
  type: "hidden",
  name: "payment_method",
  value: "ad"
}, null, -1)), I1 = { class: "grid gap-4 py-4" }, T1 = { class: "hotspot-input" }, R1 = ["value"], N1 = ["value"], B1 = ["value"], M1 = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("input", {
  type: "hidden",
  name: "payment_method",
  value: "free"
}, null, -1)), F1 = { key: 0 }, O1 = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "text-2xl font-400 text-red" }, " Do not reload this page ", -1)), U1 = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "i-eos-icons-loading text-3xl" }, null, -1)), P1 = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "font-semibold py-2" }, " Please wait while we process your request ", -1)), D1 = { key: 1 }, L1 = { key: 0 }, $1 = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "i-clarity-success-standard-line text-3xl" }, null, -1)), j1 = { class: "font-semibold py-2" }, V1 = { key: 1 }, z1 = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "i-material-symbols-error-outline-rounded text-3xl" }, null, -1)), q1 = { class: "font-semibold py-2" }, J1 = { key: 0 }, W1 = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "text-2xl font-400 text-red" }, " Do not reload this page ", -1)), H1 = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "i-eos-icons-loading text-3xl" }, null, -1)), K1 = { key: 1 }, G1 = { key: 0 }, Q1 = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "i-clarity-success-standard-line text-3xl" }, null, -1)), Y1 = { class: "font-semibold py-2" }, Z1 = { key: 1 }, X1 = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "i-material-symbols-error-outline-rounded text-3xl" }, null, -1)), ev = { class: "font-semibold py-2" }, tv = { key: 0 }, nv = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "text-2xl font-400 text-red" }, " Do not reload this page ", -1)), ov = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "i-eos-icons-loading text-3xl" }, null, -1)), rv = { key: 1 }, sv = { key: 0 }, av = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "i-clarity-success-standard-line text-3xl" }, null, -1)), iv = { class: "font-semibold py-2" }, lv = { key: 1 }, cv = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "i-material-symbols-error-outline-rounded text-3xl" }, null, -1)), uv = { class: "font-semibold py-2" }, dv = /* @__PURE__ */ Me(() => /* @__PURE__ */ V("div", { class: "w-full rounded-0 bg-muted p-4 flex items-center justify-center z-1 gap-2 fixed bottom-0 left-0" }, [
  /* @__PURE__ */ V("a", {
    href: "https://wezeshanet.com/terms",
    target: "_blank",
    rel: "noopener",
    class: "link"
  }, "Terms of Service"),
  /* @__PURE__ */ pe(" and "),
  /* @__PURE__ */ V("a", {
    href: "https://wezeshanet.com/privacy-policy",
    target: "_blank",
    rel: "noopener",
    class: "link"
  }, "Privacy Policy")
], -1)), pv = /* @__PURE__ */ se({
  __name: "hotspot",
  props: {
    gatewayBaseUrl: {},
    org: {},
    router: {}
  },
  setup(e) {
    const t = e, n = te(!1), o = te(!0), r = te(!1), s = te(!1), a = te(""), i = te(!1), l = te(), c = te(), u = te(!1), d = te(null), p = te(!0), m = te([]), f = te(""), g = te(""), y = te(), _ = te(), h = te({
      transactionId: null,
      packageId: null,
      packageName: null,
      amount: null,
      paymentMethod: null,
      mac: null,
      status: null,
      // 'processing', 'payment-successful', 'error'
      timestamp: null,
      currentSelectedVideo: null
    });
    function x() {
      localStorage.setItem("purchase_state", JSON.stringify({
        ...h.value,
        timestamp: Date.now()
      }));
    }
    function b() {
      localStorage.removeItem("purchase_state"), h.value = {
        transactionId: null,
        packageId: null,
        packageName: null,
        amount: null,
        paymentMethod: null,
        mac: null,
        status: null,
        timestamp: null,
        currentSelectedVideo: null
      };
    }
    function w(Y) {
      return Y.startsWith("http") || Y.startsWith("data:image");
    }
    function I(Y) {
      Y === !1 && (o.value = !0);
    }
    function q() {
      const Y = document.getElementById("loginForm"), G = document.getElementById("usernameInput");
      G.value = f.value;
      const M = document.getElementById("passwordInput");
      M.value = g.value, Y.submit();
    }
    function A(Y) {
      const G = Y.slice(-1).toLowerCase(), M = Number.parseInt(Y.slice(0, -1));
      switch (G) {
        case "h":
          return M > 48 && M % 24 === 0 ? `${Math.round(M / 24)} Days` : M === 1 ? `${M} Hour` : `${M} Hours`;
        case "m":
          return M === 1 ? `${M} Minute` : `${M} Minutes`;
        case "d":
          return M === 1 ? `${M} Day` : `${M} Days`;
        default:
          return Y;
      }
    }
    async function E(Y) {
      Y.preventDefault(), n.value = !0;
      const G = `hotspot.${t.org}`;
      a.value = "We are sending you a push", r.value = !0, s.value = !0;
      const M = new FormData(Y.target), ae = document.getElementById("macInput") || { value: "" }, ke = M.get("payment_method"), Ae = {
        phoneNumber: ke === "mpesa" ? tg(M.get("phone")) : `250${M.get("phone")}`,
        packageId: M.get("package"),
        packageName: M.get("package_name"),
        amount: M.get("amount"),
        paymentMethod: ke,
        mac: ae.value,
        routerId: t.router,
        adUrl: ke === "ad" ? _.value : void 0
      };
      if (t.gatewayBaseUrl)
        try {
          const Fe = await (await fetch(`${t.gatewayBaseUrl}/backend/api/hotspot.purchase`, {
            method: "POST",
            body: JSON.stringify(Ae),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${G}`
            }
          })).json();
          if (Fe.error)
            s.value = !1, i.value = !1, c.value = Fe.error.message, n.value = !1, b();
          else {
            h.value = {
              transactionId: Fe.id,
              packageId: Ae.packageId,
              packageName: Ae.packageName,
              amount: Ae.amount,
              paymentMethod: ke,
              mac: ae.value,
              status: "processing",
              timestamp: Date.now(),
              currentSelectedVideo: ke === "ad" ? _.value : null
            }, x(), a.value = ke === "mpesa" ? "STK push sent, enter PIN" : "Sent you a push, enter PIN", localStorage.setItem("creds", JSON.stringify({ username: Fe.username, password: Fe.password }));
            let dt = !1;
            const Nt = setInterval(async () => {
              if (dt) {
                clearInterval(Nt);
                return;
              }
              try {
                const kt = await (await fetch(`${t.gatewayBaseUrl}/backend/api/hotspot.check-purchase?id=${Fe.id}`, {
                  method: "GET",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${G}`
                  }
                })).json();
                if (kt.paymentState === "PROCESSING")
                  return;
                if (dt = !0, clearInterval(Nt), kt.paymentState === "SUCCESSFUL" && a.value !== "Purchase successful, please wait as we connect you") {
                  a.value = "Purchase successful, please wait as we connect you";
                  const Vt = JSON.parse(localStorage.getItem("creds"));
                  h.value.status = "payment-successful", x();
                  try {
                    const v = `${t.gatewayBaseUrl}/backend/api/hotspot.connect?routerId=${t.router}&id=${kt.id}&username=${Vt.username}&password=${Vt.password}&mac=${ae.value}`, C = await fetch(v, {
                      method: "GET",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${G}`
                      }
                    }), R = await C.json();
                    C.ok ? (s.value = !1, i.value = !0, n.value = !1, f.value = Vt.username, g.value = Vt.password, localStorage.setItem("expiry_trial", JSON.stringify({ expiry: R.purchasableExpiry, trial: 2 })), b(), q()) : b();
                  } catch (v) {
                    console.error("Connection error:", v), s.value = !1, i.value = !1, n.value = !1, c.value = "Error connecting to the internet", b();
                  }
                } else
                  localStorage.removeItem("creds"), s.value = !1, i.value = !1, n.value = !1, c.value = kt.paymentState === "FAILED" ? "Transaction Failed" : kt.paymentState === "CANCELLED" ? "Transaction Cancelled" : "An Error Occurred", b();
              } catch (wt) {
                console.error("Check purchase error:", wt), dt = !0, clearInterval(Nt), s.value = !1, n.value = !1, c.value = "Error checking transaction status", b();
              }
            }, 1e3);
          }
        } catch (Ge) {
          s.value = !1, n.value = !1, c.value = Ge.message, b();
        }
      else
        throw s.value = !1, n.value = !1, c.value = "It's not you it's us", new Error("packagePurchaseUrl not set");
    }
    async function B() {
      const Y = `hotspot.${t.org}`, G = localStorage.getItem("purchase_state");
      if (!G)
        return;
      const M = JSON.parse(G);
      h.value = M;
      const ae = 30 * 60 * 1e3;
      if (Date.now() - M.timestamp > ae) {
        b();
        return;
      }
      if (r.value = !0, M.status === "processing") {
        s.value = !0, n.value = !0;
        const ke = M.paymentMethod;
        if (a.value = "Package purchase resumed, checking status", M.transactionId) {
          let Ae = !1;
          const Ge = setInterval(async () => {
            if (Ae) {
              clearInterval(Ge);
              return;
            }
            try {
              const dt = await (await fetch(`${t.gatewayBaseUrl}/backend/api/hotspot.check-purchase?id=${M.transactionId}`, {
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${Y}`
                }
              })).json();
              if (dt.paymentState === "PROCESSING")
                return;
              if (Ae = !0, clearInterval(Ge), dt.paymentState === "SUCCESSFUL" && a.value !== "Purchase successful, please wait as we connect you") {
                a.value = "Purchase successful, please wait as we connect you";
                const Nt = JSON.parse(localStorage.getItem("creds"));
                h.value.status = "payment-successful", x();
                try {
                  const wt = `${t.gatewayBaseUrl}/backend/api/hotspot.connect?routerId=${t.router}&id=${M.transactionId}&username=${Nt.username}&password=${Nt.password}&mac=${M.mac}${M.paymentMethod === "ad" ? `&adUrl=${M.currentSelectedVideo}` : ""}`, kt = await fetch(wt, {
                    method: "GET",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${Y}`
                    }
                  }), Vt = await kt.json();
                  kt.ok ? (s.value = !1, i.value = !0, n.value = !1, f.value = Nt.username, g.value = Nt.password, localStorage.setItem("expiry_trial", JSON.stringify({ expiry: Vt.purchasableExpiry, trial: 2 })), b(), q()) : b();
                } catch (wt) {
                  console.error("Connection error:", wt), s.value = !1, i.value = !1, n.value = !1, c.value = "Error connecting to the internet", b();
                }
              } else
                localStorage.removeItem("creds"), s.value = !1, i.value = !1, n.value = !1, c.value = dt.paymentState === "FAILED" ? "Transaction Failed" : dt.paymentState === "CANCELLED" ? "Transaction Cancelled" : "An Error Occurred", b();
            } catch (Fe) {
              console.error("Check purchase error:", Fe), Ae = !0, clearInterval(Ge), s.value = !1, n.value = !1, c.value = "Error checking transaction status", b();
            }
          }, 1e3);
        }
      } else if (M.status === "payment-successful") {
        s.value = !0, n.value = !0, a.value = "Purchase successful, please wait as we connect you";
        const ke = JSON.parse(localStorage.getItem("creds"));
        try {
          const Ae = `${t.gatewayBaseUrl}/backend/api/hotspot.connect?routerId=${t.router}&id=${M.transactionId}&username=${ke.username}&password=${ke.password}&mac=${M.mac}${M.paymentMethod === "ad" ? `&adUrl=${M.currentSelectedVideo}` : ""}`, Ge = await fetch(Ae, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${Y}`
            }
          }), Fe = await Ge.json();
          Ge.ok ? (s.value = !1, i.value = !0, n.value = !1, f.value = ke.username, g.value = ke.password, localStorage.setItem("expiry_trial", JSON.stringify({ expiry: Fe.purchasableExpiry, trial: 2 })), b(), q()) : b();
        } catch (Ae) {
          console.error("Connection error:", Ae), s.value = !1, i.value = !1, n.value = !1, c.value = "Error connecting to the internet", b();
        }
      }
    }
    function z() {
      b(), r.value = !1;
    }
    async function S() {
      const Y = `hotspot.${t.org}`, G = await fetch(`${t.gatewayBaseUrl}/backend/api/hotspot.get-config?routerId=${t.router}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${Y}`
        }
      }).then(async (Ae) => await Ae.json());
      d.value = G, d.value.dark ? l.value.classList.add("dark") : l.value.classList.remove("dark"), d.value.theme && (l.value.classList.remove("theme-blue"), l.value.classList.add(Ig[d.value.theme]));
      const M = await fetch(`${t.gatewayBaseUrl}/backend/api/integrations.get-payment-options?routerId=${t.router}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${Y}`
        }
      }).then((Ae) => Ae.json());
      m.value = Array.from(new Set(M.options));
      const ke = await (await fetch(`${t.gatewayBaseUrl}/backend/api/hotspot_plans.all?routerId=${t.router}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${Y}`
        }
      })).json();
      p.value = !1, ke.length > 0 && (y.value = ke.map((Ae) => ({ ...Ae, type: "PAID" })));
    }
    function P() {
      u.value = window.orientation === 90 || window.orientation === -90;
    }
    const W = te(/* @__PURE__ */ new Map());
    function X(Y, G) {
      if (W.value.has(Y))
        return W.value.get(Y);
      const M = G.split(","), ae = M[Math.floor(Math.random() * M.length)];
      return W.value.set(Y, ae), _.value = ae, ae;
    }
    return on(() => {
      window.removeEventListener("orientationchange", P);
    }), bt(async () => {
      l.value = document.documentElement, l.value.classList.add("theme-blue"), window.addEventListener("orientationchange", P), P();
      const Y = JSON.parse(localStorage.getItem("expiry_trial") ?? '"empty"');
      if (Y !== "empty")
        if (Y.expiry > Date.now() && Y.trial !== 0) {
          const G = JSON.parse(localStorage.getItem("creds") ?? '"empty"');
          G !== "empty" && (localStorage.setItem("expiry_trial", JSON.stringify({ expiry: Y.expiry, trial: Y.trial - 1 })), f.value = G.username, g.value = G.password, q());
        } else
          localStorage.removeItem("creds"), localStorage.removeItem("expiry_trial");
      setTimeout(async () => {
        await S(), B();
      }, 100);
    }), (Y, G) => d.value ? (K(), he("div", Lg, [
      d.value.background ? (K(), he("div", $g, [
        V("img", {
          src: d.value.background,
          alt: "Colorful background",
          class: "w-full h-full object-cover blur-sm brightness-110"
        }, null, 8, jg),
        Vg
      ])) : rt("", !0),
      V("div", zg, [
        V("div", qg, [
          V("div", Jg, [
            w(d.value.logo || "") ? (K(), he("img", {
              key: 1,
              src: d.value.logo,
              style: { height: "50px" }
            }, null, 8, Hg)) : (K(), he("img", Wg))
          ])
        ]),
        V("div", Kg, [
          V("div", Gg, [
            V("div", Qg, [
              (K(!0), he(_e, null, zs(y.value, (M) => (K(), ie(vg, {
                key: M.id,
                id: M.id,
                name: M.name,
                duration: A(M.validity),
                devices: `${M.sharedUsers}`,
                price: M.price?.toString() || "0",
                currency: d.value?.currency,
                quota: M.quotaLimit?.split(",")[0] ? k(ng)(M.quotaLimit?.split(",")[0]) : "Unlimited",
                type: M.planType === "PAID" ? "PAID" : M.planType === "AD" ? "AD" : "FREE",
                "handle-dialog-close": I
              }, {
                default: F(() => [
                  r.value ? (K(), ie(k(Vl), {
                    key: 1,
                    class: "sm:max-w-[425px]",
                    onInteractOutside: G[1] || (G[1] = Po(() => {
                    }, ["prevent"])),
                    onFocusOutside: G[2] || (G[2] = Po(() => {
                    }, ["prevent"])),
                    onPointerDownOutside: G[3] || (G[3] = Po(() => {
                    }, ["prevent"]))
                  }, {
                    default: F(() => [
                      M.planType === "PAID" ? (K(), he(_e, { key: 0 }, [
                        s.value ? (K(), he("div", F1, [
                          j(k(Bt), { class: "flex flex-col items-start" }, {
                            default: F(() => [
                              O1,
                              j(k(Mt), { class: "flex gap-3 items-center justify-center sm:justify-start text-orange" }, {
                                default: F(() => [
                                  U1,
                                  pe(" " + Te(a.value === "Purchase successful, please wait as we connect you" ? "Connecting" : "Processing"), 1)
                                ]),
                                _: 1
                              }),
                              j(k(Ft), null, {
                                default: F(() => [
                                  pe(Te(a.value), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          P1
                        ])) : (K(), he("div", D1, [
                          i.value ? (K(), he("div", L1, [
                            j(k(Bt), { class: "flex flex-col items-start" }, {
                              default: F(() => [
                                j(k(Mt), { class: "text-green flex gap-3 items-center justify-center sm:justify-start" }, {
                                  default: F(() => [
                                    $1,
                                    pe(" Success ")
                                  ]),
                                  _: 1
                                }),
                                j(k(Ft), null, {
                                  default: F(() => [
                                    pe(" Successfully connected ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            V("div", j1, " Package " + Te(M.name) + " purchased successfully ", 1)
                          ])) : (K(), he("div", V1, [
                            j(k(Bt), { class: "flex flex-col items-start" }, {
                              default: F(() => [
                                j(k(Mt), { class: "text-red flex gap-3 items-center justify-center sm:justify-start" }, {
                                  default: F(() => [
                                    z1,
                                    pe(" Error ")
                                  ]),
                                  _: 1
                                }),
                                j(k(Ft), null, {
                                  default: F(() => [
                                    pe(" An error occured ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            V("div", q1, Te(c.value), 1),
                            j(k(hn), null, {
                              default: F(() => [
                                j(k(mn), {
                                  variant: "default",
                                  class: "w-full",
                                  onClick: z
                                }, {
                                  default: F(() => [
                                    pe(" Try Again ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]))
                        ]))
                      ], 64)) : rt("", !0),
                      M.planType === "FREE TRIAL" ? (K(), he(_e, { key: 1 }, [
                        s.value ? (K(), he("div", J1, [
                          j(k(Bt), { class: "flex flex-col items-start" }, {
                            default: F(() => [
                              W1,
                              j(k(Mt), { class: "text-orange flex gap-3 items-center justify-center sm:justify-start" }, {
                                default: F(() => [
                                  H1,
                                  pe(" Connecting ")
                                ]),
                                _: 1
                              }),
                              j(k(Ft), null, {
                                default: F(() => [
                                  pe(" Wait a moment as we connect you to the internet ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])) : (K(), he("div", K1, [
                          i.value ? (K(), he("div", G1, [
                            j(k(Bt), { class: "flex flex-col items-start" }, {
                              default: F(() => [
                                j(k(Mt), { class: "text-green flex gap-3 items-center justify-center sm:justify-start" }, {
                                  default: F(() => [
                                    Q1,
                                    pe(" Success ")
                                  ]),
                                  _: 1
                                }),
                                j(k(Ft), null, {
                                  default: F(() => [
                                    pe(" Successfully connected ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            V("div", Y1, " Package " + Te(M.name) + " purchased successfully ", 1)
                          ])) : (K(), he("div", Z1, [
                            j(k(Bt), { class: "flex flex-col items-start" }, {
                              default: F(() => [
                                j(k(Mt), { class: "text-red flex gap-3 items-center justify-center sm:justify-start" }, {
                                  default: F(() => [
                                    X1,
                                    pe(" Error ")
                                  ]),
                                  _: 1
                                }),
                                j(k(Ft), null, {
                                  default: F(() => [
                                    pe(" An error occured ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            V("div", ev, Te(c.value), 1),
                            j(k(hn), null, {
                              default: F(() => [
                                j(k(mn), {
                                  variant: "default",
                                  class: "w-full",
                                  onClick: z
                                }, {
                                  default: F(() => [
                                    pe(" Try Again ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]))
                        ]))
                      ], 64)) : rt("", !0),
                      M.planType === "AD" ? (K(), he(_e, { key: 2 }, [
                        s.value ? (K(), he("div", tv, [
                          j(k(Bt), { class: "flex flex-col items-start" }, {
                            default: F(() => [
                              nv,
                              j(k(Mt), { class: "text-orange flex gap-3 items-center justify-center sm:justify-start" }, {
                                default: F(() => [
                                  ov,
                                  pe(" Connecting ")
                                ]),
                                _: 1
                              }),
                              j(k(Ft), null, {
                                default: F(() => [
                                  pe(" Wait a moment as we connect you to the internet ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])) : (K(), he("div", rv, [
                          i.value ? (K(), he("div", sv, [
                            j(k(Bt), { class: "flex flex-col items-start" }, {
                              default: F(() => [
                                j(k(Mt), { class: "text-green flex gap-3 items-center justify-center sm:justify-start" }, {
                                  default: F(() => [
                                    av,
                                    pe(" Success ")
                                  ]),
                                  _: 1
                                }),
                                j(k(Ft), null, {
                                  default: F(() => [
                                    pe(" Successfully connected ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            V("div", iv, " Package " + Te(M.name) + " purchased successfully ", 1)
                          ])) : (K(), he("div", lv, [
                            j(k(Bt), { class: "flex flex-col items-start" }, {
                              default: F(() => [
                                j(k(Mt), { class: "text-red flex gap-3 items-center justify-center sm:justify-start" }, {
                                  default: F(() => [
                                    cv,
                                    pe(" Error ")
                                  ]),
                                  _: 1
                                }),
                                j(k(Ft), null, {
                                  default: F(() => [
                                    pe(" An error occured ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            V("div", uv, Te(c.value), 1),
                            j(k(hn), null, {
                              default: F(() => [
                                j(k(mn), {
                                  variant: "default",
                                  class: "w-full",
                                  onClick: z
                                }, {
                                  default: F(() => [
                                    pe(" Try Again ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]))
                        ]))
                      ], 64)) : rt("", !0)
                    ]),
                    _: 2
                  }, 1024)) : (K(), ie(k(Vl), {
                    key: 0,
                    class: gt(["border-none", k(vt)(u.value ? "p-0 w-100dvw h-full" : "sm:max-w-[425px]", M.planType === "AD" ? "p-0 h-[100dvh] max-h-100dvh" : "max-h-90dvh")])
                  }, {
                    default: F(() => [
                      M.planType === "PAID" ? (K(), he(_e, { key: 0 }, [
                        j(k(Bt), { class: "flex flex-col items-start" }, {
                          default: F(() => [
                            j(k(Mt), null, {
                              default: F(() => [
                                pe("Buy Package")
                              ]),
                              _: 1
                            }),
                            j(k(Ft), null, {
                              default: F(() => [
                                pe(" Buy the " + Te(A(M.validity)) + " package for " + Te(M.sharedUsers) + " devices for " + Te(M.price) + " " + Te(d.value.currency !== null ? d.value.currency : "KES"), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        m.value.length === 0 ? (K(), he("div", Yg, " No payment option set up for this organization ")) : (K(), ie(k(Ug), {
                          key: 1,
                          "default-value": m.value[0] === "kpay_momo" || m.value[0] === "mtn" ? "mtn" : m.value[0] === "kpay_card" ? "card" : m.value[0]
                        }, {
                          default: F(() => [
                            j(k(Dg), {
                              class: gt(["grid w-full h-fit sm:rounded-b-sm rounded-[0px] z-1", k(vt)(`grid-cols-${m.value.length}`)])
                            }, {
                              default: F(() => [
                                (K(!0), he(_e, null, zs(m.value, (ae, ke) => (K(), ie(k(Pg), {
                                  key: ke,
                                  class: "w-full",
                                  value: ae === "kpay_momo" || ae === "mtn" ? "mtn" : ae === "kpay_card" ? "card" : ae
                                }, {
                                  default: F(() => [
                                    V("span", Zg, Te(ae === "kpay_momo" || ae === "mtn" ? "momo" : ae === "kpay_card" ? "card" : ae === "kpay_airtel" ? "airtel" : ae), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]))), 128))
                              ]),
                              _: 1
                            }, 8, ["class"]),
                            j(k(Ds), { value: "mpesa" }, {
                              default: F(() => [
                                V("form", { onsubmit: E }, [
                                  V("div", Xg, [
                                    V("div", e1, [
                                      V("div", t1, [
                                        j(k(Jl), { for: "phone" }, {
                                          default: F(() => [
                                            pe(" Phone ")
                                          ]),
                                          _: 1
                                        }),
                                        n1
                                      ]),
                                      V("input", {
                                        type: "hidden",
                                        name: "package",
                                        value: M.id
                                      }, null, 8, o1),
                                      V("input", {
                                        type: "hidden",
                                        name: "package_name",
                                        value: M.name
                                      }, null, 8, r1),
                                      V("input", {
                                        type: "hidden",
                                        name: "amount",
                                        value: M.price
                                      }, null, 8, s1),
                                      a1
                                    ])
                                  ]),
                                  j(k(hn), null, {
                                    default: F(() => [
                                      j(k(mn), {
                                        type: "submit",
                                        class: "w-full",
                                        disabled: n.value
                                      }, {
                                        default: F(() => [
                                          pe(" Pay ")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled"])
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            j(k(Ds), { value: "mtn" }, {
                              default: F(() => [
                                V("form", { onsubmit: E }, [
                                  V("div", i1, [
                                    V("div", l1, [
                                      j(k(Jl), {
                                        for: "phone",
                                        class: "flex flex-col gap-2"
                                      }, {
                                        default: F(() => [
                                          pe(" Phone "),
                                          V("div", c1, [
                                            u1,
                                            j(k(Og), {
                                              id: "phone",
                                              type: "number",
                                              name: "phone",
                                              class: "rounded-s-[0px]"
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      V("input", {
                                        type: "hidden",
                                        name: "package",
                                        value: M.id
                                      }, null, 8, d1),
                                      V("input", {
                                        type: "hidden",
                                        name: "package_name",
                                        value: M.name
                                      }, null, 8, p1),
                                      V("input", {
                                        type: "hidden",
                                        name: "amount",
                                        value: M.price
                                      }, null, 8, f1),
                                      h1
                                    ])
                                  ]),
                                  j(k(hn), null, {
                                    default: F(() => [
                                      j(k(mn), {
                                        type: "submit",
                                        class: "w-full",
                                        disabled: n.value
                                      }, {
                                        default: F(() => [
                                          pe(" Pay ")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled"])
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            j(k(Ds), { value: "card" }, {
                              default: F(() => [
                                V("form", { onsubmit: E }, [
                                  V("div", m1, [
                                    V("div", g1, [
                                      V("input", {
                                        type: "hidden",
                                        name: "package",
                                        value: M.id
                                      }, null, 8, v1),
                                      V("input", {
                                        type: "hidden",
                                        name: "package_name",
                                        value: M.name
                                      }, null, 8, y1),
                                      V("input", {
                                        type: "hidden",
                                        name: "amount",
                                        value: M.price
                                      }, null, 8, b1),
                                      x1
                                    ])
                                  ]),
                                  j(k(hn), null, {
                                    default: F(() => [
                                      j(k(mn), {
                                        type: "submit",
                                        class: "w-full bg-blue-500",
                                        disabled: n.value
                                      }, {
                                        default: F(() => [
                                          pe(" Checkout ")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled"])
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["default-value"]))
                      ], 64)) : rt("", !0),
                      M.planType === "AD" ? (K(), he("div", w1, [
                        j(Eg, {
                          modelValue: o.value,
                          "onUpdate:modelValue": G[0] || (G[0] = (ae) => o.value = ae),
                          "video-url": X(M.id, M.mediaUrls).replace("autoplay=true", "autoplay=false")
                        }, null, 8, ["modelValue", "video-url"]),
                        V("form", {
                          class: "absolute bottom-20px w-full p-4",
                          onsubmit: E
                        }, [
                          V("div", k1, [
                            V("div", C1, [
                              V("input", {
                                type: "hidden",
                                name: "package",
                                value: M.id
                              }, null, 8, _1),
                              V("input", {
                                type: "hidden",
                                name: "package_name",
                                value: M.name
                              }, null, 8, A1),
                              V("input", {
                                type: "hidden",
                                name: "amount",
                                value: M.price
                              }, null, 8, S1),
                              E1
                            ])
                          ]),
                          j(k(hn), null, {
                            default: F(() => [
                              j(k(mn), {
                                type: "submit",
                                class: "w-full bg-primary",
                                disabled: o.value
                              }, {
                                default: F(() => [
                                  pe(" Connect ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ]),
                            _: 1
                          })
                        ])
                      ])) : rt("", !0),
                      M.planType === "FREE TRIAL" ? (K(), he(_e, { key: 2 }, [
                        j(k(Bt), { class: "flex flex-col items-start" }, {
                          default: F(() => [
                            j(k(Mt), null, {
                              default: F(() => [
                                pe("Free Plan")
                              ]),
                              _: 1
                            }),
                            j(k(Ft), null, {
                              default: F(() => [
                                pe(" Connect to the " + Te(A(M.validity)) + " package for " + Te(M.sharedUsers) + " devices ", 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        V("form", { onsubmit: E }, [
                          V("div", I1, [
                            V("div", T1, [
                              V("input", {
                                type: "hidden",
                                name: "package",
                                value: M.id
                              }, null, 8, R1),
                              V("input", {
                                type: "hidden",
                                name: "package_name",
                                value: M.name
                              }, null, 8, N1),
                              V("input", {
                                type: "hidden",
                                name: "amount",
                                value: M.price
                              }, null, 8, B1),
                              M1
                            ])
                          ]),
                          j(k(hn), null, {
                            default: F(() => [
                              j(k(mn), {
                                type: "submit",
                                class: "w-full bg-blue-500",
                                disabled: n.value
                              }, {
                                default: F(() => [
                                  pe(" Connect ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ]),
                            _: 1
                          })
                        ])
                      ], 64)) : rt("", !0)
                    ]),
                    _: 2
                  }, 1032, ["class"]))
                ]),
                _: 2
              }, 1032, ["id", "name", "duration", "devices", "price", "currency", "quota", "type"]))), 128))
            ])
          ]),
          dv
        ])
      ])
    ])) : rt("", !0);
  }
}), fv = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, hv = /* @__PURE__ */ fv(pv, [["__scopeId", "data-v-da37922d"]]), mv = /* @__PURE__ */ Ga({ ...hv, styles: [qh] });
function gv() {
  typeof window > "u" || customElements.define("hotspot-standard", mv);
}
function vv(e) {
  const t = e.id ? document.getElementById(e.id) : document.querySelector("hotspot-standard");
  if (!t)
    throw new Error("<hotspot-standard> element not found.");
  Object.assign(t, e);
}
function yv() {
  return {
    initHotspot: vv
  };
}
function bv(e) {
  typeof window > "u" || (window.Hotspot = { ...e });
}
gv();
const xv = yv();
bv(xv);
export {
  xv as default
};
//# sourceMappingURL=web.js.map
