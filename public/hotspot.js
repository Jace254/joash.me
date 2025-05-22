(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(`html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}*,:before,:after{--un-rotate: 0;--un-rotate-x: 0;--un-rotate-y: 0;--un-rotate-z: 0;--un-scale-x: 1;--un-scale-y: 1;--un-scale-z: 1;--un-skew-x: 0;--un-skew-y: 0;--un-translate-x: 0;--un-translate-y: 0;--un-translate-z: 0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness: proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x: 0;--un-border-spacing-y: 0;--un-ring-offset-shadow: 0 0 rgb(0 0 0 / 0);--un-ring-shadow: 0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow: 0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width: 0px;--un-ring-offset-color: #fff;--un-ring-width: 0px;--un-ring-color: rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate: 0;--un-rotate-x: 0;--un-rotate-y: 0;--un-rotate-z: 0;--un-scale-x: 1;--un-scale-y: 1;--un-scale-z: 1;--un-skew-x: 0;--un-skew-y: 0;--un-translate-x: 0;--un-translate-y: 0;--un-translate-z: 0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness: proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x: 0;--un-border-spacing-y: 0;--un-ring-offset-shadow: 0 0 rgb(0 0 0 / 0);--un-ring-shadow: 0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow: 0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width: 0px;--un-ring-offset-color: #fff;--un-ring-width: 0px;--un-ring-color: rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-greek-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-greek-400-normal.woff) format("woff");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-latin-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-latin-400-normal.woff) format("woff");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-cyrillic-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-cyrillic-400-normal.woff) format("woff");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-greek-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-greek-ext-400-normal.woff) format("woff");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-latin-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-latin-ext-400-normal.woff) format("woff");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-vietnamese-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-vietnamese-400-normal.woff) format("woff");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-cyrillic-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-cyrillic-ext-400-normal.woff) format("woff");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-latin-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-latin-400-normal.woff) format("woff");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-latin-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-latin-ext-400-normal.woff) format("woff");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-vietnamese-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-vietnamese-400-normal.woff) format("woff");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}.theme-blue{--background-hotspot: 0 0% 100%;--foreground-hotspot: 222.2 84% 4.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 222.2 84% 4.9%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 222.2 84% 4.9%;--primary-hotspot: 221.2 83.2% 53.3%;--primary-foreground-hotspot: 210 40% 98%;--secondary-hotspot: 210 40% 96.1%;--secondary-foreground-hotspot: 222.2 47.4% 11.2%;--muted-hotspot: 210 40% 96.1%;--muted-foreground-hotspot: 215.4 16.3% 46.9%;--accent-hotspot: 210 40% 96.1%;--accent-foreground-hotspot: 222.2 47.4% 11.2%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 40% 98%;--border-hotspot: 214.3 31.8% 91.4%;--input-hotspot: 214.3 31.8% 91.4%;--ring-hotspot: 221.2 83.2% 53.3%;--radius-hotspot: .5rem}.theme-blue.dark{--background-hotspot: 222.2 84% 4.9%;--foreground-hotspot: 210 40% 98%;--card-hotspot: 222.2 84% 4.9%;--card-foreground-hotspot: 210 40% 98%;--popover-hotspot: 222.2 84% 4.9%;--popover-foreground-hotspot: 210 40% 98%;--primary-hotspot: 217.2 91.2% 59.8%;--primary-foreground-hotspot: 222.2 47.4% 11.2%;--secondary-hotspot: 217.2 32.6% 17.5%;--secondary-foreground-hotspot: 210 40% 98%;--muted-hotspot: 217.2 32.6% 17.5%;--muted-foreground-hotspot: 215 20.2% 65.1%;--accent-hotspot: 217.2 32.6% 17.5%;--accent-foreground-hotspot: 210 40% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 210 40% 98%;--border-hotspot: 217.2 32.6% 17.5%;--input-hotspot: 217.2 32.6% 17.5%;--ring-hotspot: 224.3 76.3% 48%}.i-bi-grid-fill{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 16 16' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-clarity-success-standard-line{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 36 36' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14' class='clr-i-outline clr-i-outline-path-1'/%3E%3Cpath fill='currentColor' d='M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05l-6-6A1 1 0 0 0 8 18.53L15.49 26L28 13.52a1 1 0 0 0 0-1.42' class='clr-i-outline clr-i-outline-path-2'/%3E%3Cpath fill='none' d='M0 0h36v36H0z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-eos-icons-loading{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z' opacity='.5'/%3E%3Cpath fill='currentColor' d='M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z'%3E%3CanimateTransform attributeName='transform' dur='1s' from='0 12 12' repeatCount='indefinite' to='360 12 12' type='rotate'/%3E%3C/path%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-iconamoon-information-circle-duotone{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none'%3E%3Ccircle cx='12' cy='12' r='9' fill='currentColor' opacity='.16'/%3E%3Ccircle cx='12' cy='12' r='9' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cpath stroke='currentColor' stroke-linejoin='round' stroke-width='3' d='M12 8h.01v.01H12z'/%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 12v4'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-ion-wallet{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 512 512' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M95.5 104h320a87.73 87.73 0 0 1 11.18.71a66 66 0 0 0-77.51-55.56L86 94.08h-.3a66 66 0 0 0-41.07 26.13A87.57 87.57 0 0 1 95.5 104m320 24h-320a64.07 64.07 0 0 0-64 64v192a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V192a64.07 64.07 0 0 0-64-64M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32'/%3E%3Cpath fill='currentColor' d='M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16s-18.5 24.5 0 24.5s0 23.5 0 23.5L85.5 236Z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-error-outline-rounded{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 17q.425 0 .713-.288T13 16q0-.425-.288-.712T12 15q-.425 0-.712.288T11 16q0 .425.288.713T12 17m0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8v4q0 .425.288.713T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-movie-info-outline-rounded{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm8-4q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11q-.425 0-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9M8 19h8V5H8zM8 5h8zM4 19h2v-2H4zm14 0h2v-2h-2zM4 15h2v-2H4zm14 0h2v-2h-2zM4 11h2V9H4zm14 0h2V9h-2zM4 7h2V5H4zm14 0h2V5h-2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-wifi-password{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M2.125 11.1L0 8.975q2.325-2.325 5.388-3.65T12 4q3.55 0 6.613 1.325T24 8.975L21.875 11.1q-1.9-1.925-4.437-3.012T12 7Q9.1 7 6.563 8.088T2.125 11.1m4.225 4.25l-2.1-2.125q1.5-1.5 3.488-2.362T12 10q2.275 0 4.263.863t3.487 2.362l-2.1 2.125q-1.1-1.1-2.55-1.725T12 13q-1.65 0-3.1.625T6.35 15.35M12 21q-1.05 0-1.775-.725T9.5 18.5q0-1.05.725-1.775T12 16q1.05 0 1.775.725T14.5 18.5q0 1.05-.725 1.775T12 21m7 3q-.425 0-.712-.288T18 23v-3q0-.425.288-.712T19 19v-1q0-.825.588-1.412T21 16q.825 0 1.413.588T23 18v1q.425 0 .713.288T24 20v3q0 .425-.288.713T23 24zm1-5h2v-1q0-.425-.288-.712T21 17q-.425 0-.712.288T20 18z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-arrow-down-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 4v16m0 0l6-6m-6 6l-6-6'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-arrow-right-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 12h16m0 0l-6-6m6 6l-6 6'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-arrow-up-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 20V4m0 0l6 6m-6-6l-6 6'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-gift-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none' stroke='currentColor' stroke-width='1.5'%3E%3Cpath stroke-linecap='round' d='M22 12H2M12 2v20m1-10a4 4 0 0 0 4 4m-6-4a4 4 0 0 1-4 4'/%3E%3Cpath d='M12 10.035a3.247 3.247 0 0 1 2.46-3.15c1.603-.4 3.056 1.052 2.655 2.656a3.247 3.247 0 0 1-3.15 2.46H12zm0 0a3.247 3.247 0 0 0-2.46-3.15c-1.603-.4-3.056 1.052-2.655 2.656a3.247 3.247 0 0 0 3.15 2.46H12z'/%3E%3Cpath d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-global-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none' stroke='currentColor' stroke-width='1.5'%3E%3Cpath d='M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12z'/%3E%3Cpath d='M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761c-.525 0-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.614 23.614 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2c.525 0 1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12z'/%3E%3Cpath stroke-linecap='round' d='M2 12h20'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-streamline-ticket-1-solid{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 14 14' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8.605 1.55h-7.05a1.5 1.5 0 0 0-1.5 1.5v2a.5.5 0 0 0 .374.483a1.517 1.517 0 0 1 0 2.933a.5.5 0 0 0-.373.484v1.999a1.5 1.5 0 0 0 1.5 1.5h7.05v-1.715a.625.625 0 1 1 1.25 0v1.715h2.588a1.5 1.5 0 0 0 1.5-1.5V8.946a.5.5 0 0 0-.369-.483a1.517 1.517 0 0 1 0-2.926a.5.5 0 0 0 .37-.483V3.051a1.5 1.5 0 0 0-1.5-1.5h-2.59v1.723a.625.625 0 0 1-1.25 0zm.625 3.816c.346 0 .625.28.625.625v2.016a.625.625 0 0 1-1.25 0V5.991c0-.345.28-.625.625-.625' clip-rule='evenodd'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.bottom-\\[-30px\\]{bottom:-30px}.left-\\[-50px\\]{left:-50px}.right-\\[-90px\\]{right:-90px}.top-\\[-100px\\]{top:-100px}.z--1{z-index:-1}.z-0{z-index:0}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mt-\\[-250px\\]{margin-top:-250px}.mt-\\[-30px\\]{margin-top:-30px}.mt-6{margin-top:1.5rem}.h-\\[200px\\]{height:200px}.h-\\[400px\\]{height:400px}.h-\\[42px\\]{height:42px}.h-40{height:10rem}.h-80{height:20rem}.max-w-4xl{max-width:56rem}.w-\\[42px\\]{width:42px}.w-40{width:10rem}.w-80{width:20rem}.w-9{width:2.25rem}.flex-row{flex-direction:row}.-translate-x-1\\/2,.translate-x-\\[-50\\%\\]{--un-translate-x: -50%;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.-translate-y-1\\/2,.translate-y-\\[-50\\%\\]{--un-translate-y: -50%;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.hover\\:-translate-y-1:hover{--un-translate-y: -.25rem;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.gap-6{gap:1.5rem}.space-y-1\\.5>:not([hidden])~:not([hidden]){--un-space-y-reverse: 0;margin-top:calc(.375rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.375rem * var(--un-space-y-reverse))}.space-y-1>:not([hidden])~:not([hidden]){--un-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.25rem * var(--un-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--un-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.5rem * var(--un-space-y-reverse))}.of-hidden,.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.border-2{border-width:2px}.border-3{border-width:3px}.border-border{--un-border-opacity: 1;border-color:hsl(var(--border-hotspot) / var(--un-border-opacity))}.border-green-400{--un-border-opacity: 1;border-color:rgb(74 222 128 / var(--un-border-opacity))}.border-input{--un-border-opacity: 1;border-color:hsl(var(--input-hotspot) / var(--un-border-opacity))}.border-neutral-200{--un-border-opacity: 1;border-color:rgb(229 229 229 / var(--un-border-opacity))}.border-white\\/15{border-color:#ffffff26}.border-white\\/20{border-color:#fff3}.dark .dark\\:border-neutral-800{--un-border-opacity: 1;border-color:rgb(38 38 38 / var(--un-border-opacity))}.rounded-b-2xl{border-bottom-left-radius:1rem;border-bottom-right-radius:1rem}.bg-accent{--un-bg-opacity: 1;background-color:hsl(var(--accent-hotspot) / var(--un-bg-opacity))}.bg-background,.data-\\[state\\=active\\]\\:bg-background[data-state=active]{--un-bg-opacity: 1;background-color:hsl(var(--background-hotspot) / var(--un-bg-opacity))}.bg-blue-400\\/20{background-color:#60a5fa33}.bg-blue-500{--un-bg-opacity: 1;background-color:rgb(59 130 246 / var(--un-bg-opacity))}.bg-border{--un-bg-opacity: 1;background-color:hsl(var(--border-hotspot) / var(--un-bg-opacity))}.bg-card{--un-bg-opacity: 1;background-color:hsl(var(--card-hotspot) / var(--un-bg-opacity))}.bg-destructive{--un-bg-opacity: 1;background-color:hsl(var(--destructive-hotspot) / var(--un-bg-opacity))}.bg-muted{--un-bg-opacity: 1;background-color:hsl(var(--muted-hotspot) / var(--un-bg-opacity))}.bg-neutral-100{--un-bg-opacity: 1;background-color:rgb(245 245 245 / var(--un-bg-opacity))}.bg-neutral-200{--un-bg-opacity: 1;background-color:rgb(229 229 229 / var(--un-bg-opacity))}.bg-primary{--un-bg-opacity: 1;background-color:hsl(var(--primary-hotspot) / var(--un-bg-opacity))}.bg-secondary{--un-bg-opacity: 1;background-color:hsl(var(--secondary-hotspot) / var(--un-bg-opacity))}.bg-white{--un-bg-opacity: 1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.dark .dark\\:bg-neutral-800{--un-bg-opacity: 1;background-color:rgb(38 38 38 / var(--un-bg-opacity))}.dark .dark\\:bg-neutral-950{--un-bg-opacity: 1;background-color:rgb(10 10 10 / var(--un-bg-opacity))}.hover\\:bg-accent:hover{--un-bg-opacity: 1;background-color:hsl(var(--accent-hotspot) / var(--un-bg-opacity))}.hover\\:bg-primary:hover{--un-bg-opacity: 1;background-color:hsl(var(--primary-hotspot) / var(--un-bg-opacity))}.hover\\:bg-primary\\/20:hover{background-color:hsl(var(--primary-hotspot) / .2)}.from-blue-600{--un-gradient-from-position: 0%;--un-gradient-from: rgb(37 99 235 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position: 100%;--un-gradient-to: rgb(37 99 235 / 0) var(--un-gradient-to-position);--un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to)}.from-white\\/20{--un-gradient-from-position: 0%;--un-gradient-from: rgb(255 255 255 / .2) var(--un-gradient-from-position);--un-gradient-to-position: 100%;--un-gradient-to: rgb(255 255 255 / 0) var(--un-gradient-to-position);--un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to)}.to-blue-900{--un-gradient-to-position: 100%;--un-gradient-to: rgb(30 58 138 / var(--un-to-opacity, 1)) var(--un-gradient-to-position)}.to-transparent{--un-gradient-to-position: 100%;--un-gradient-to: transparent var(--un-gradient-to-position)}.to-40\\%{--un-gradient-to-position: 40%}.bg-gradient-to-bl{--un-gradient-shape: to bottom left;--un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient))}.bg-gradient-to-r{--un-gradient-shape: to right;--un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient))}.bg-gradient-to-tr{--un-gradient-shape: to top right;--un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient))}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-12{padding-top:3rem;padding-bottom:3rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.pb-10{padding-bottom:2.5rem}.pb-28{padding-bottom:7rem}.pt-6{padding-top:1.5rem}.dark .dark\\:text-neutral-400{--un-text-opacity: 1;color:rgb(163 163 163 / var(--un-text-opacity))}.data-\\[state\\=active\\]\\:text-foreground[data-state=active],.text-foreground{--un-text-opacity: 1;color:hsl(var(--foreground-hotspot) / var(--un-text-opacity))}.text-card-foreground{--un-text-opacity: 1;color:hsl(var(--card-foreground-hotspot) / var(--un-text-opacity))}.text-destructive-foreground{--un-text-opacity: 1;color:hsl(var(--destructive-foreground-hotspot) / var(--un-text-opacity))}.text-green,.text-green-400{--un-text-opacity: 1;color:rgb(74 222 128 / var(--un-text-opacity))}.text-muted-foreground{--un-text-opacity: 1;color:hsl(var(--muted-foreground-hotspot) / var(--un-text-opacity))}.text-neutral-500{--un-text-opacity: 1;color:rgb(115 115 115 / var(--un-text-opacity))}.text-orange{--un-text-opacity: 1;color:rgb(251 146 60 / var(--un-text-opacity))}.text-primary{--un-text-opacity: 1;color:hsl(var(--primary-hotspot) / var(--un-text-opacity))}.text-primary-foreground{--un-text-opacity: 1;color:hsl(var(--primary-foreground-hotspot) / var(--un-text-opacity))}.text-red{--un-text-opacity: 1;color:rgb(248 113 113 / var(--un-text-opacity))}.text-secondary{--un-text-opacity: 1;color:hsl(var(--secondary-hotspot) / var(--un-text-opacity))}.text-secondary-foreground{--un-text-opacity: 1;color:hsl(var(--secondary-foreground-hotspot) / var(--un-text-opacity))}.text-white{--un-text-opacity: 1;color:rgb(255 255 255 / var(--un-text-opacity))}.hover\\:text-accent-foreground:hover{--un-text-opacity: 1;color:hsl(var(--accent-foreground-hotspot) / var(--un-text-opacity))}.placeholder\\:text-muted-foreground::placeholder{--un-text-opacity: 1;color:hsl(var(--muted-foreground-hotspot) / var(--un-text-opacity))}.font-thin{font-weight:100}.opacity-80{opacity:.8}.opacity-90{opacity:.9}.data-\\[state\\=active\\]\\:shadow-md[data-state=active],.shadow-md{--un-shadow: var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-lg{--un-shadow: var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-sm{--un-shadow: var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgb(0 0 0 / .05));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-xl{--un-shadow: var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.hover\\:shadow-md:hover{--un-shadow: var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus\\:shadow-\\[0_0_0_2px\\]:focus{--un-shadow: 0 0 0 2px var(--un-shadow-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus\\:shadow-secondary:focus{--un-shadow-opacity: 1;--un-shadow-color: hsl(var(--secondary-hotspot) / var(--un-shadow-opacity))}.ring-2{--un-ring-width: 2px;--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-1:focus-visible{--un-ring-width: 1px;--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-2:focus-visible{--un-ring-width: 2px;--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-offset-0:focus-visible{--un-ring-offset-width: 0px}.focus-visible\\:ring-offset-2:focus-visible{--un-ring-offset-width: 2px}.ring-primary\\/30{--un-ring-color: hsl(var(--primary-hotspot) / .3)}.focus-visible\\:ring-ring:focus-visible{--un-ring-opacity: 1;--un-ring-color: hsl(var(--ring-hotspot) / var(--un-ring-opacity))}.ring-offset-background{--un-ring-offset-opacity: 1;--un-ring-offset-color: hsl( var(--background-hotspot) / var(--un-ring-offset-opacity) )}.backdrop-blur{--un-backdrop-blur: blur(8px);-webkit-backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)}.backdrop-blur-sm{--un-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)}.blur-sm{--un-blur: blur(4px);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}.brightness-110{--un-brightness: brightness(1.1);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}[duration~="1"]{transition-duration:1ms}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:shadcn-enter;animation-duration:var(--un-animate-duration);--un-animate-duration: .15s;--un-enter-opacity: initial;--un-enter-scale: initial;--un-enter-rotate: initial;--un-enter-translate-x: initial;--un-enter-translate-y: initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:shadcn-exit;animation-duration:var(--un-animate-duration);--un-animate-duration: .15s;--un-exit-opacity: initial;--un-exit-scale: initial;--un-exit-rotate: initial;--un-exit-translate-x: initial;--un-exit-translate-y: initial}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--un-enter-opacity: 0}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--un-exit-opacity: 0}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--un-enter-scale: .95}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--un-exit-scale: .95}.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open]{--un-enter-translate-y: -48%}.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open]{--un-enter-translate-x: -50%}.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed]{--un-exit-translate-y: -48%}.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed]{--un-exit-translate-x: -50%}@media (max-width: 639.9px){.max-sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.max-sm\\:max-w-full{max-width:100%}.max-sm\\:rounded-none{border-radius:0}}@media (min-width: 640px){.sm\\:max-w-\\[425px\\]{max-width:425px}.sm\\:flex-row{flex-direction:row}.sm\\:place-items-center{place-items:center}.sm\\:justify-start{justify-content:flex-start}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-2>:not([hidden])~:not([hidden]){--un-space-x-reverse: 0;margin-left:calc(.5rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(.5rem * var(--un-space-x-reverse))}.sm\\:space-y-0>:not([hidden])~:not([hidden]){--un-space-y-reverse: 0;margin-top:calc(0px * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0px * var(--un-space-y-reverse))}.sm\\:rounded-lg{border-radius:var(--radius-hotspot)}.sm\\:rounded-b-sm{border-bottom-left-radius:calc(var(--radius-hotspot) - 4px);border-bottom-right-radius:calc(var(--radius-hotspot) - 4px)}.sm\\:bg-\\[radial-gradient\\(rgba\\(0\\,0\\,0\\,0\\.5\\)_40\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)\\)\\]{background-color:radial-gradient(rgba(0,0,0,.5) 40%,rgba(0,0,0,.7))}.sm\\:text-left{text-align:left}}input[type=number][data-v-56540ed3]{-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}:host{all:unset}body,html{overflow:hidden;position:fixed;width:100%;height:100%}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-greek-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-greek-400-normal.woff) format("woff");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-latin-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-latin-400-normal.woff) format("woff");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-cyrillic-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-cyrillic-400-normal.woff) format("woff");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-greek-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-greek-ext-400-normal.woff) format("woff");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-latin-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-latin-ext-400-normal.woff) format("woff");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-vietnamese-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-vietnamese-400-normal.woff) format("woff");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-cyrillic-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-cyrillic-ext-400-normal.woff) format("woff");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-latin-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-latin-400-normal.woff) format("woff");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-latin-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-latin-ext-400-normal.woff) format("woff");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-vietnamese-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-vietnamese-400-normal.woff) format("woff");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@keyframes shadcn-down{0%{height:0}to{height:var(--radix-accordion-content-height)}}@keyframes shadcn-up{0%{height:var(--radix-accordion-content-height)}to{height:0}}@keyframes shadcn-enter{0%{opacity:var(--un-enter-opacity, 1);transform:translate3d(var(--un-enter-translate-x, 0),var(--un-enter-translate-y, 0),0) scale3d(var(--un-enter-scale, 1),var(--un-enter-scale, 1),var(--un-enter-scale, 1)) rotate(var(--un-enter-rotate, 0))}}@keyframes shadcn-exit{to{opacity:var(--un-exit-opacity, 1);transform:translate3d(var(--un-exit-translate-x, 0),var(--un-exit-translate-y, 0),0) scale3d(var(--un-exit-scale, 1),var(--un-exit-scale, 1),var(--un-exit-scale, 1)) rotate(var(--un-exit-rotate, 0))}}html{color-scheme:light}html.dark{color-scheme:dark}.theme-blue{--background-hotspot: 0 0% 100%;--foreground-hotspot: 222.2 84% 4.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 222.2 84% 4.9%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 222.2 84% 4.9%;--primary-hotspot: 221.2 83.2% 53.3%;--primary-foreground-hotspot: 210 40% 98%;--secondary-hotspot: 210 40% 96.1%;--secondary-foreground-hotspot: 222.2 47.4% 11.2%;--muted-hotspot: 210 40% 96.1%;--muted-foreground-hotspot: 215.4 16.3% 46.9%;--accent-hotspot: 210 40% 96.1%;--accent-foreground-hotspot: 222.2 47.4% 11.2%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 40% 98%;--border-hotspot:214.3 31.8% 91.4%;--input-hotspot:214.3 31.8% 91.4%;--ring-hotspot:221.2 83.2% 53.3%;--radius-hotspot: .5rem}.theme-blue.dark{--background-hotspot:222.2 84% 4.9%;--foreground-hotspot:210 40% 98%;--card-hotspot:222.2 84% 4.9%;--card-foreground-hotspot:210 40% 98%;--popover-hotspot:222.2 84% 4.9%;--popover-foreground-hotspot:210 40% 98%;--primary-hotspot:217.2 91.2% 59.8%;--primary-foreground-hotspot:222.2 47.4% 11.2%;--secondary-hotspot:217.2 32.6% 17.5%;--secondary-foreground-hotspot:210 40% 98%;--muted-hotspot:217.2 32.6% 17.5%;--muted-foreground-hotspot:215 20.2% 65.1%;--accent-hotspot:217.2 32.6% 17.5%;--accent-foreground-hotspot:210 40% 98%;--destructive-hotspot:0 62.8% 30.6%;--destructive-foreground-hotspot:210 40% 98%;--border-hotspot:217.2 32.6% 17.5%;--input-hotspot:217.2 32.6% 17.5%;--ring-hotspot:224.3 76.3% 48%}.theme-zinc{--background-hotspot: 0 0% 100%;--foreground-hotspot: 240 10% 3.9%;--muted-hotspot: 240 4.8% 95.9%;--muted-foreground-hotspot: 240 3.8% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 240 10% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 240 10% 3.9%;--border-hotspot: 240 5.9% 90%;--input-hotspot: 240 5.9% 90%;--primary-hotspot: 240 5.9% 10%;--primary-foreground-hotspot: 0 0% 98%;--secondary-hotspot: 240 4.8% 95.9%;--secondary-foreground-hotspot: 240 5.9% 10%;--accent-hotspot: 240 4.8% 95.9%;--accent-foreground-hotspot: 240 5.9% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 240 5.9% 10%;--radius-hotspot: .5rem}.theme-zinc.dark{--background-hotspot: 240 10% 3.9%;--foreground-hotspot: 0 0% 98%;--muted-hotspot: 240 3.7% 15.9%;--muted-foreground-hotspot: 240 5% 64.9%;--popover-hotspot: 240 10% 3.9%;--popover-foreground-hotspot: 0 0% 98%;--card-hotspot: 240 10% 3.9%;--card-foreground-hotspot: 0 0% 98%;--border-hotspot: 240 3.7% 15.9%;--input-hotspot: 240 3.7% 15.9%;--primary-hotspot: 0 0% 98%;--primary-foreground-hotspot: 240 5.9% 10%;--secondary-hotspot: 240 3.7% 15.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 240 3.7% 15.9%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 240 4.9% 83.9%}.theme-slate{--background-hotspot: 0 0% 100%;--foreground-hotspot: 222.2 84% 4.9%;--muted-hotspot: 210 40% 96.1%;--muted-foreground-hotspot: 215.4 16.3% 46.9%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 222.2 84% 4.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 222.2 84% 4.9%;--border-hotspot: 214.3 31.8% 91.4%;--input-hotspot: 214.3 31.8% 91.4%;--primary-hotspot: 222.2 47.4% 11.2%;--primary-foreground-hotspot: 210 40% 98%;--secondary-hotspot: 210 40% 96.1%;--secondary-foreground-hotspot: 222.2 47.4% 11.2%;--accent-hotspot: 210 40% 96.1%;--accent-foreground-hotspot: 222.2 47.4% 11.2%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 40% 98%;--ring-hotspot: 222.2 84% 4.9%;--radius-hotspot: .5rem}.theme-slate.dark{--background-hotspot: 222.2 84% 4.9%;--foreground-hotspot: 210 40% 98%;--muted-hotspot: 217.2 32.6% 17.5%;--muted-foreground-hotspot: 215 20.2% 65.1%;--popover-hotspot: 222.2 84% 4.9%;--popover-foreground-hotspot: 210 40% 98%;--card-hotspot: 222.2 84% 4.9%;--card-foreground-hotspot: 210 40% 98%;--border-hotspot: 217.2 32.6% 17.5%;--input-hotspot: 217.2 32.6% 17.5%;--primary-hotspot: 210 40% 98%;--primary-foreground-hotspot: 222.2 47.4% 11.2%;--secondary-hotspot: 217.2 32.6% 17.5%;--secondary-foreground-hotspot: 210 40% 98%;--accent-hotspot: 217.2 32.6% 17.5%;--accent-foreground-hotspot: 210 40% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 210 40% 98%;--ring-hotspot: 212.7 26.8% 83.9}.theme-stone{--background-hotspot: 0 0% 100%;--foreground-hotspot: 20 14.3% 4.1%;--muted-hotspot: 60 4.8% 95.9%;--muted-foreground-hotspot: 25 5.3% 44.7%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 20 14.3% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 20 14.3% 4.1%;--border-hotspot: 20 5.9% 90%;--input-hotspot: 20 5.9% 90%;--primary-hotspot: 24 9.8% 10%;--primary-foreground-hotspot: 60 9.1% 97.8%;--secondary-hotspot: 60 4.8% 95.9%;--secondary-foreground-hotspot: 24 9.8% 10%;--accent-hotspot: 60 4.8% 95.9%;--accent-foreground-hotspot: 24 9.8% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 20 14.3% 4.1%;--radius-hotspot: .5rem}.theme-stone.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 60 9.1% 97.8%;--muted-hotspot: 12 6.5% 15.1%;--muted-foreground-hotspot: 24 5.4% 63.9%;--popover-hotspot: 20 14.3% 4.1%;--popover-foreground-hotspot: 60 9.1% 97.8%;--card-hotspot: 20 14.3% 4.1%;--card-foreground-hotspot: 60 9.1% 97.8%;--border-hotspot: 12 6.5% 15.1%;--input-hotspot: 12 6.5% 15.1%;--primary-hotspot: 60 9.1% 97.8%;--primary-foreground-hotspot: 24 9.8% 10%;--secondary-hotspot: 12 6.5% 15.1%;--secondary-foreground-hotspot: 60 9.1% 97.8%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 60 9.1% 97.8%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 24 5.7% 82.9%}.theme-gray{--background-hotspot: 0 0% 100%;--foreground-hotspot: 224 71.4% 4.1%;--muted-hotspot: 220 14.3% 95.9%;--muted-foreground-hotspot: 220 8.9% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 224 71.4% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 224 71.4% 4.1%;--border-hotspot: 220 13% 91%;--input-hotspot: 220 13% 91%;--primary-hotspot: 220.9 39.3% 11%;--primary-foreground-hotspot: 210 20% 98%;--secondary-hotspot: 220 14.3% 95.9%;--secondary-foreground-hotspot: 220.9 39.3% 11%;--accent-hotspot: 220 14.3% 95.9%;--accent-foreground-hotspot: 220.9 39.3% 11%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 20% 98%;--ring-hotspot: 224 71.4% 4.1%;--radius-hotspot: .5rem}.theme-gray.dark{--background-hotspot: 224 71.4% 4.1%;--foreground-hotspot: 210 20% 98%;--muted-hotspot: 215 27.9% 16.9%;--muted-foreground-hotspot: 217.9 10.6% 64.9%;--popover-hotspot: 224 71.4% 4.1%;--popover-foreground-hotspot: 210 20% 98%;--card-hotspot: 224 71.4% 4.1%;--card-foreground-hotspot: 210 20% 98%;--border-hotspot: 215 27.9% 16.9%;--input-hotspot: 215 27.9% 16.9%;--primary-hotspot: 210 20% 98%;--primary-foreground-hotspot: 220.9 39.3% 11%;--secondary-hotspot: 215 27.9% 16.9%;--secondary-foreground-hotspot: 210 20% 98%;--accent-hotspot: 215 27.9% 16.9%;--accent-foreground-hotspot: 210 20% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 210 20% 98%;--ring-hotspot: 216 12.2% 83.9%}.theme-neutral{--background-hotspot: 0 0% 100%;--foreground-hotspot: 0 0% 3.9%;--muted-hotspot: 0 0% 96.1%;--muted-foreground-hotspot: 0 0% 45.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 0 0% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 0 0% 3.9%;--border-hotspot: 0 0% 89.8%;--input-hotspot: 0 0% 89.8%;--primary-hotspot: 0 0% 9%;--primary-foreground-hotspot: 0 0% 98%;--secondary-hotspot: 0 0% 96.1%;--secondary-foreground-hotspot: 0 0% 9%;--accent-hotspot: 0 0% 96.1%;--accent-foreground-hotspot: 0 0% 9%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 0 0% 3.9%;--radius-hotspot: .5rem}.theme-neutral.dark{--background-hotspot: 0 0% 3.9%;--foreground-hotspot: 0 0% 98%;--muted-hotspot: 0 0% 14.9%;--muted-foreground-hotspot: 0 0% 63.9%;--popover-hotspot: 0 0% 3.9%;--popover-foreground-hotspot: 0 0% 98%;--card-hotspot: 0 0% 3.9%;--card-foreground-hotspot: 0 0% 98%;--border-hotspot: 0 0% 14.9%;--input-hotspot: 0 0% 14.9%;--primary-hotspot: 0 0% 98%;--primary-foreground-hotspot: 0 0% 9%;--secondary-hotspot: 0 0% 14.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 0 0% 14.9%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 0 0% 83.1%}.theme-red{--background-hotspot: 0 0% 100%;--foreground-hotspot: 0 0% 3.9%;--muted-hotspot: 0 0% 96.1%;--muted-foreground-hotspot: 0 0% 45.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 0 0% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 0 0% 3.9%;--border-hotspot: 0 0% 89.8%;--input-hotspot: 0 0% 89.8%;--primary-hotspot: 0 72.2% 50.6%;--primary-foreground-hotspot: 0 85.7% 97.3%;--secondary-hotspot: 0 0% 96.1%;--secondary-foreground-hotspot: 0 0% 9%;--accent-hotspot: 0 0% 96.1%;--accent-foreground-hotspot: 0 0% 9%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 0 72.2% 50.6%;--radius-hotspot: .5rem}.theme-red.dark{--background-hotspot: 0 0% 3.9%;--foreground-hotspot: 0 0% 98%;--muted-hotspot: 0 0% 14.9%;--muted-foreground-hotspot: 0 0% 63.9%;--popover-hotspot: 0 0% 3.9%;--popover-foreground-hotspot: 0 0% 98%;--card-hotspot: 0 0% 3.9%;--card-foreground-hotspot: 0 0% 98%;--border-hotspot: 0 0% 14.9%;--input-hotspot: 0 0% 14.9%;--primary-hotspot: 0 72.2% 50.6%;--primary-foreground-hotspot: 0 85.7% 97.3%;--secondary-hotspot: 0 0% 14.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 0 0% 14.9%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 0 72.2% 50.6%}.theme-rose{--background-hotspot: 0 0% 100%;--foreground-hotspot: 240 10% 3.9%;--muted-hotspot: 240 4.8% 95.9%;--muted-foreground-hotspot: 240 3.8% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 240 10% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 240 10% 3.9%;--border-hotspot: 240 5.9% 90%;--input-hotspot: 240 5.9% 90%;--primary-hotspot: 346.8 77.2% 49.8%;--primary-foreground-hotspot: 355.7 100% 97.3%;--secondary-hotspot: 240 4.8% 95.9%;--secondary-foreground-hotspot: 240 5.9% 10%;--accent-hotspot: 240 4.8% 95.9%;--accent-foreground-hotspot: 240 5.9% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 346.8 77.2% 49.8%;--radius-hotspot: .5rem}.theme-rose.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 0 0% 95%;--muted-hotspot: 0 0% 15%;--muted-foreground-hotspot: 240 5% 64.9%;--popover-hotspot: 0 0% 9%;--popover-foreground-hotspot: 0 0% 95%;--card-hotspot: 24 9.8% 10%;--card-foreground-hotspot: 0 0% 95%;--border-hotspot: 240 3.7% 15.9%;--input-hotspot: 240 3.7% 15.9%;--primary-hotspot: 346.8 77.2% 49.8%;--primary-foreground-hotspot: 355.7 100% 97.3%;--secondary-hotspot: 240 3.7% 15.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 85.7% 97.3%;--ring-hotspot: 346.8 77.2% 49.8%}.theme-orange{--background-hotspot: 0 0% 100%;--foreground-hotspot: 20 14.3% 4.1%;--muted-hotspot: 60 4.8% 95.9%;--muted-foreground-hotspot: 25 5.3% 44.7%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 20 14.3% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 20 14.3% 4.1%;--border-hotspot: 20 5.9% 90%;--input-hotspot: 20 5.9% 90%;--primary-hotspot: 24.6 95% 53.1%;--primary-foreground-hotspot: 60 9.1% 97.8%;--secondary-hotspot: 60 4.8% 95.9%;--secondary-foreground-hotspot: 24 9.8% 10%;--accent-hotspot: 60 4.8% 95.9%;--accent-foreground-hotspot: 24 9.8% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 24.6 95% 53.1%;--radius-hotspot: .5rem}.theme-orange.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 60 9.1% 97.8%;--muted-hotspot: 12 6.5% 15.1%;--muted-foreground-hotspot: 24 5.4% 63.9%;--popover-hotspot: 20 14.3% 4.1%;--popover-foreground-hotspot: 60 9.1% 97.8%;--card-hotspot: 20 14.3% 4.1%;--card-foreground-hotspot: 60 9.1% 97.8%;--border-hotspot: 12 6.5% 15.1%;--input-hotspot: 12 6.5% 15.1%;--primary-hotspot: 20.5 90.2% 48.2%;--primary-foreground-hotspot: 60 9.1% 97.8%;--secondary-hotspot: 12 6.5% 15.1%;--secondary-foreground-hotspot: 60 9.1% 97.8%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 60 9.1% 97.8%;--destructive-hotspot: 0 72.2% 50.6%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 20.5 90.2% 48.2%}.theme-green{--background-hotspot: 0 0% 100%;--foreground-hotspot: 240 10% 3.9%;--muted-hotspot: 240 4.8% 95.9%;--muted-foreground-hotspot: 240 3.8% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 240 10% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 240 10% 3.9%;--border-hotspot: 240 5.9% 90%;--input-hotspot: 240 5.9% 90%;--primary-hotspot: 142.1 76.2% 36.3%;--primary-foreground-hotspot: 355.7 100% 97.3%;--secondary-hotspot: 240 4.8% 95.9%;--secondary-foreground-hotspot: 240 5.9% 10%;--accent-hotspot: 240 4.8% 95.9%;--accent-foreground-hotspot: 240 5.9% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 142.1 76.2% 36.3%;--radius-hotspot: .5rem}.theme-green.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 0 0% 95%;--muted-hotspot: 0 0% 15%;--muted-foreground-hotspot: 240 5% 64.9%;--popover-hotspot: 0 0% 9%;--popover-foreground-hotspot: 0 0% 95%;--card-hotspot: 24 9.8% 10%;--card-foreground-hotspot: 0 0% 95%;--border-hotspot: 240 3.7% 15.9%;--input-hotspot: 240 3.7% 15.9%;--primary-hotspot: 142.1 70.6% 45.3%;--primary-foreground-hotspot: 144.9 80.4% 10%;--secondary-hotspot: 240 3.7% 15.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 85.7% 97.3%;--ring-hotspot: 142.4 71.8% 29.2%}.theme-yellow{--background-hotspot: 0 0% 100%;--foreground-hotspot: 20 14.3% 4.1%;--muted-hotspot: 60 4.8% 95.9%;--muted-foreground-hotspot: 25 5.3% 44.7%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 20 14.3% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 20 14.3% 4.1%;--border-hotspot: 20 5.9% 90%;--input-hotspot: 20 5.9% 90%;--primary-hotspot: 47.9 95.8% 53.1%;--primary-foreground-hotspot: 26 83.3% 14.1%;--secondary-hotspot: 60 4.8% 95.9%;--secondary-foreground-hotspot: 24 9.8% 10%;--accent-hotspot: 60 4.8% 95.9%;--accent-foreground-hotspot: 24 9.8% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 20 14.3% 4.1%;--radius-hotspot: .5rem}.theme-yellow.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 60 9.1% 97.8%;--muted-hotspot: 12 6.5% 15.1%;--muted-foreground-hotspot: 24 5.4% 63.9%;--popover-hotspot: 20 14.3% 4.1%;--popover-foreground-hotspot: 60 9.1% 97.8%;--card-hotspot: 20 14.3% 4.1%;--card-foreground-hotspot: 60 9.1% 97.8%;--border-hotspot: 12 6.5% 15.1%;--input-hotspot: 12 6.5% 15.1%;--primary-hotspot: 47.9 95.8% 53.1%;--primary-foreground-hotspot: 26 83.3% 14.1%;--secondary-hotspot: 12 6.5% 15.1%;--secondary-foreground-hotspot: 60 9.1% 97.8%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 60 9.1% 97.8%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 35.5 91.7% 32.9%}.theme-violet{--background-hotspot: 0 0% 100%;--foreground-hotspot: 224 71.4% 4.1%;--muted-hotspot: 220 14.3% 95.9%;--muted-foreground-hotspot: 220 8.9% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 224 71.4% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 224 71.4% 4.1%;--border-hotspot: 220 13% 91%;--input-hotspot: 220 13% 91%;--primary-hotspot: 262.1 83.3% 57.8%;--primary-foreground-hotspot: 210 20% 98%;--secondary-hotspot: 220 14.3% 95.9%;--secondary-foreground-hotspot: 220.9 39.3% 11%;--accent-hotspot: 220 14.3% 95.9%;--accent-foreground-hotspot: 220.9 39.3% 11%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 20% 98%;--ring-hotspot: 262.1 83.3% 57.8%;--radius-hotspot: .5rem}.theme-violet.dark{--background-hotspot: 224 71.4% 4.1%;--foreground-hotspot: 210 20% 98%;--muted-hotspot: 215 27.9% 16.9%;--muted-foreground-hotspot: 217.9 10.6% 64.9%;--popover-hotspot: 224 71.4% 4.1%;--popover-foreground-hotspot: 210 20% 98%;--card-hotspot: 224 71.4% 4.1%;--card-foreground-hotspot: 210 20% 98%;--border-hotspot: 215 27.9% 16.9%;--input-hotspot: 215 27.9% 16.9%;--primary-hotspot: 263.4 70% 50.4%;--primary-foreground-hotspot: 210 20% 98%;--secondary-hotspot: 215 27.9% 16.9%;--secondary-foreground-hotspot: 210 20% 98%;--accent-hotspot: 215 27.9% 16.9%;--accent-foreground-hotspot: 210 20% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 210 20% 98%;--ring-hotspot: 263.4 70% 50.4%}.i-clarity-success-standard-line{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 36 36' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14' class='clr-i-outline clr-i-outline-path-1'/%3E%3Cpath fill='currentColor' d='M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05l-6-6A1 1 0 0 0 8 18.53L15.49 26L28 13.52a1 1 0 0 0 0-1.42' class='clr-i-outline clr-i-outline-path-2'/%3E%3Cpath fill='none' d='M0 0h36v36H0z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-eos-icons-loading{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z' opacity='.5'/%3E%3Cpath fill='currentColor' d='M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z'%3E%3CanimateTransform attributeName='transform' dur='1s' from='0 12 12' repeatCount='indefinite' to='360 12 12' type='rotate'/%3E%3C/path%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-iconamoon-information-circle-duotone{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none'%3E%3Ccircle cx='12' cy='12' r='9' fill='currentColor' opacity='.16'/%3E%3Ccircle cx='12' cy='12' r='9' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cpath stroke='currentColor' stroke-linejoin='round' stroke-width='3' d='M12 8h.01v.01H12z'/%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 12v4'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-error-outline-rounded{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 17q.425 0 .713-.288T13 16q0-.425-.288-.712T12 15q-.425 0-.712.288T11 16q0 .425.288.713T12 17m0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8v4q0 .425.288.713T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-movie-info-outline-rounded{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm8-4q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11q-.425 0-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9M8 19h8V5H8zM8 5h8zM4 19h2v-2H4zm14 0h2v-2h-2zM4 15h2v-2H4zm14 0h2v-2h-2zM4 11h2V9H4zm14 0h2V9h-2zM4 7h2V5H4zm14 0h2V5h-2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-arrow-right-linear{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 12h16m0 0l-6-6m6 6l-6 6'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-gift-linear{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none' stroke='currentColor' stroke-width='1.5'%3E%3Cpath stroke-linecap='round' d='M22 12H2M12 2v20m1-10a4 4 0 0 0 4 4m-6-4a4 4 0 0 1-4 4'/%3E%3Cpath d='M12 10.035a3.247 3.247 0 0 1 2.46-3.15c1.603-.4 3.056 1.052 2.655 2.656a3.247 3.247 0 0 1-3.15 2.46H12zm0 0a3.247 3.247 0 0 0-2.46-3.15c-1.603-.4-3.056 1.052-2.655 2.656a3.247 3.247 0 0 0 3.15 2.46H12z'/%3E%3Cpath d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-global-linear{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none' stroke='currentColor' stroke-width='1.5'%3E%3Cpath d='M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12z'/%3E%3Cpath d='M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761c-.525 0-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.614 23.614 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2c.525 0 1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12z'/%3E%3Cpath stroke-linecap='round' d='M2 12h20'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.disabled\\:pointer-events-none:disabled{pointer-events:none}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:0}.inset-x-0{left:0;right:0}.-top-3{top:-.75rem}.bottom-0{bottom:0}.bottom-150px{bottom:150px}.bottom-20px{bottom:20px}.left-\\[50\\%\\],.left-1\\/2{left:50%}.left-0{left:0}.left-10px{left:10px}.right-\\[10px\\],.right-10px{right:10px}.top-\\[10px\\],.top-10px{top:10px}.top-\\[50\\%\\],.top-1\\/2{top:50%}.top-0{top:0}.z-1{z-index:1}.z-10{z-index:10}.z-50{z-index:50}.grid{display:grid}.grid-rows-\\[auto_1fr_auto\\]{grid-template-rows:auto 1fr auto}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.mx-auto{margin-left:auto;margin-right:auto}.my-4{margin-top:1rem;margin-bottom:1rem}.-mt-0\\.5{margin-top:-.125rem}.mb-1{margin-bottom:.25rem}.mb-6{margin-bottom:1.5rem}.me-2{margin-inline-end:.5rem}.ml-1{margin-left:.25rem}.mt-1{margin-top:.25rem}.mt-1\\.5{margin-top:.375rem}.mt-2{margin-top:.5rem}.mt-24{margin-top:6rem}.mt-4{margin-top:1rem}.mt-auto{margin-top:auto}.block{display:block}.hidden{display:none}.h-\\[100dvh\\]{height:100dvh}.h-\\[1px\\],.h-px{height:1px}.h-\\[25px\\]{height:25px}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-12{height:3rem}.h-2{height:.5rem}.h-30{height:7.5rem}.h-4{height:1rem}.h-40px{height:40px}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-9{height:2.25rem}.h-auto{height:auto}.h-fit{height:fit-content}.h-full{height:100%}.h3{height:.75rem}.max-h-\\[100dvh\\],.max-h-100dvh{max-height:100dvh}.max-h-90dvh{max-height:90dvh}.max-h-full{max-height:100%}.max-w-lg{max-width:32rem}.min-h-\\[100dvh\\]{min-height:100dvh}.w-\\[100px\\]{width:100px}.w-\\[1px\\],.w-px{width:1px}.w-\\[25px\\]{width:25px}.w-10{width:2.5rem}.w-100dvw{width:100dvw}.w-12{width:3rem}.w-4{width:1rem}.w-6{width:1.5rem}.w-7{width:1.75rem}.w-full{width:100%}.flex{display:flex}.inline-flex{display:inline-flex}.shrink-0{flex-shrink:0}.flex-col{flex-direction:column}.-translate-x-1\\/2,.translate-x-\\[-50\\%\\]{--un-translate-x:-50%;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.-translate-y-1\\/2,.translate-y-\\[-50\\%\\]{--un-translate-y:-50%;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.hover\\:-translate-y-1:hover{--un-translate-y:-.25rem;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.transform{transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.appearance-none{-webkit-appearance:none;appearance:none}.place-items-end{place-items:end}.items-start{align-items:flex-start}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.space-y-1\\.5>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(.375rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.375rem * var(--un-space-y-reverse))}.space-y-1>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(.25rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.25rem * var(--un-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.5rem * var(--un-space-y-reverse))}.of-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.border{border-width:1px}.file\\:border-0::file-selector-button{border-width:0px}.border-border{--un-border-opacity:1;border-color:hsl(var(--border-hotspot) / var(--un-border-opacity))}.border-input{--un-border-opacity:1;border-color:hsl(var(--input-hotspot) / var(--un-border-opacity))}.border-neutral-200{--un-border-opacity:1;border-color:rgb(229 229 229 / var(--un-border-opacity))}.border-primary\\/20{border-color:hsl(var(--primary-hotspot) / .2)}.border-primary\\/50{border-color:hsl(var(--primary-hotspot) / .5)}.dark .dark\\:border-neutral-800{--un-border-opacity:1;border-color:rgb(38 38 38 / var(--un-border-opacity))}.hover\\:border-primary\\/20:hover{border-color:hsl(var(--primary-hotspot) / .2)}.rounded-\\[0px\\],.rounded-0{border-radius:0}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius-hotspot)}.rounded-md{border-radius:calc(var(--radius-hotspot) - 2px)}.rounded-sm{border-radius:calc(var(--radius-hotspot) - 4px)}.rounded-xl{border-radius:.75rem}.rounded-b-md{border-bottom-left-radius:calc(var(--radius-hotspot) - 2px);border-bottom-right-radius:calc(var(--radius-hotspot) - 2px)}.rounded-s{border-end-start-radius:.25rem;border-start-start-radius:.25rem}.rounded-s-\\[0px\\]{border-end-start-radius:0px;border-start-start-radius:0px}.rounded-t-\\[10px\\]{border-top-left-radius:10px;border-top-right-radius:10px}.border-none{border-style:none}.bg-\\[radial-gradient\\(circle_at_50\\%_100\\%\\,rgba\\(0\\,0\\,0\\,0\\.5\\)_40\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)\\)\\]{background-color:radial-gradient(circle at 50% 100%,rgba(0,0,0,.5) 40%,rgba(0,0,0,.7))}.bg-accent{--un-bg-opacity:1;background-color:hsl(var(--accent-hotspot) / var(--un-bg-opacity))}.bg-background,.data-\\[state\\=active\\]\\:bg-background[data-state=active]{--un-bg-opacity:1;background-color:hsl(var(--background-hotspot) / var(--un-bg-opacity))}.bg-black\\/50{background-color:#00000080}.bg-black\\/80{background-color:#000c}.bg-blue-500{--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity))}.bg-border{--un-bg-opacity:1;background-color:hsl(var(--border-hotspot) / var(--un-bg-opacity))}.bg-card{--un-bg-opacity:1;background-color:hsl(var(--card-hotspot) / var(--un-bg-opacity))}.bg-destructive{--un-bg-opacity:1;background-color:hsl(var(--destructive-hotspot) / var(--un-bg-opacity))}.bg-muted{--un-bg-opacity:1;background-color:hsl(var(--muted-hotspot) / var(--un-bg-opacity))}.bg-neutral-100{--un-bg-opacity:1;background-color:rgb(245 245 245 / var(--un-bg-opacity))}.bg-neutral-200{--un-bg-opacity:1;background-color:rgb(229 229 229 / var(--un-bg-opacity))}.bg-primary{--un-bg-opacity:1;background-color:hsl(var(--primary-hotspot) / var(--un-bg-opacity))}.bg-primary\\/10{background-color:hsl(var(--primary-hotspot) / .1)}.bg-primary\\/90{background-color:hsl(var(--primary-hotspot) / .9)}.bg-secondary{--un-bg-opacity:1;background-color:hsl(var(--secondary-hotspot) / var(--un-bg-opacity))}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.bg-white\\/10{background-color:#ffffff1a}.dark .dark\\:bg-neutral-800{--un-bg-opacity:1;background-color:rgb(38 38 38 / var(--un-bg-opacity))}.dark .dark\\:bg-neutral-950{--un-bg-opacity:1;background-color:rgb(10 10 10 / var(--un-bg-opacity))}.hover\\:bg-accent:hover{--un-bg-opacity:1;background-color:hsl(var(--accent-hotspot) / var(--un-bg-opacity))}.hover\\:bg-black\\/70:hover{background-color:#000000b3}.hover\\:bg-destructive\\:90:hover{background-color:hsl(var(--destructive-hotspot) / .9)}.hover\\:bg-primary:hover{--un-bg-opacity:1;background-color:hsl(var(--primary-hotspot) / var(--un-bg-opacity))}.hover\\:bg-primary\\:20:hover{background-color:hsl(var(--primary-hotspot) / .2)}.hover\\:bg-primary\\:90:hover{background-color:hsl(var(--primary-hotspot) / .9)}.hover\\:bg-secondary\\:80:hover{background-color:hsl(var(--secondary-hotspot) / .8)}.file\\:bg-transparent::file-selector-button{background-color:transparent}[stroke-width~="4"]{stroke-width:4px}.object-cover{object-fit:cover}.p-0{padding:0}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.pt-0{padding-top:0}.text-center{text-align:center}.text-left{text-align:left}.text-10px{font-size:10px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.file\\:text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.dark .dark\\:text-neutral-400{--un-text-opacity:1;color:rgb(163 163 163 / var(--un-text-opacity))}.data-\\[state\\=active\\]\\:text-foreground[data-state=active],.text-foreground{--un-text-opacity:1;color:hsl(var(--foreground-hotspot) / var(--un-text-opacity))}.text-card-foreground{--un-text-opacity:1;color:hsl(var(--card-foreground-hotspot) / var(--un-text-opacity))}.text-destructive-foreground{--un-text-opacity:1;color:hsl(var(--destructive-foreground-hotspot) / var(--un-text-opacity))}.text-gray-600\\/40{color:#4b556366}.text-green{--un-text-opacity:1;color:rgb(74 222 128 / var(--un-text-opacity))}.text-muted-foreground{--un-text-opacity:1;color:hsl(var(--muted-foreground-hotspot) / var(--un-text-opacity))}.text-neutral-500{--un-text-opacity:1;color:rgb(115 115 115 / var(--un-text-opacity))}.text-orange{--un-text-opacity:1;color:rgb(251 146 60 / var(--un-text-opacity))}.text-primary{--un-text-opacity:1;color:hsl(var(--primary-hotspot) / var(--un-text-opacity))}.text-primary-foreground{--un-text-opacity:1;color:hsl(var(--primary-foreground-hotspot) / var(--un-text-opacity))}.text-red{--un-text-opacity:1;color:rgb(248 113 113 / var(--un-text-opacity))}.text-secondary{--un-text-opacity:1;color:hsl(var(--secondary-hotspot) / var(--un-text-opacity))}.text-secondary-foreground{--un-text-opacity:1;color:hsl(var(--secondary-foreground-hotspot) / var(--un-text-opacity))}.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.hover\\:text-accent-foreground:hover{--un-text-opacity:1;color:hsl(var(--accent-foreground-hotspot) / var(--un-text-opacity))}.placeholder\\:text-muted-foreground::placeholder{--un-text-opacity:1;color:hsl(var(--muted-foreground-hotspot) / var(--un-text-opacity))}.font-400,.font-normal{font-weight:400}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.file\\:font-medium::file-selector-button{font-weight:500}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.tracking-tighter{letter-spacing:-.05em}.uppercase{text-transform:uppercase}.underline,.hover\\:underline:hover{text-decoration-line:underline}.underline-offset-4{text-underline-offset:4px}.opacity-60{opacity:.6}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[state\\=active\\]\\:shadow-md[data-state=active]{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-lg{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-sm{--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgb(0 0 0 / .05));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.hover\\:shadow-md:hover{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus\\:shadow-\\[0_0_0_2px\\]:focus{--un-shadow:0 0 0 2px var(--un-shadow-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus\\:shadow-secondary:focus{--un-shadow-opacity:1;--un-shadow-color:hsl(var(--secondary-hotspot) / var(--un-shadow-opacity))}.outline{outline-style:solid}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.ring-2{--un-ring-width:2px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-1:focus-visible{--un-ring-width:1px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-2:focus-visible{--un-ring-width:2px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-offset-0:focus-visible{--un-ring-offset-width:0px}.focus-visible\\:ring-offset-2:focus-visible{--un-ring-offset-width:2px}.ring-primary\\/30{--un-ring-color:hsl(var(--primary-hotspot) / .3)}.focus-visible\\:ring-ring:focus-visible{--un-ring-opacity:1;--un-ring-color:hsl(var(--ring-hotspot) / var(--un-ring-opacity))}.ring-offset-background{--un-ring-offset-opacity:1;--un-ring-offset-color:hsl(var(--background-hotspot) / var(--un-ring-offset-opacity))}.backdrop-blur{--un-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)}.blur-sm{--un-blur:blur(4px);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}.brightness-110{--un-brightness:brightness(1.1);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:shadcn-enter;animation-duration:var(--un-animate-duration);--un-animate-duration:.15s;--un-enter-opacity:initial;--un-enter-scale:initial;--un-enter-rotate:initial;--un-enter-translate-x:initial;--un-enter-translate-y:initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:shadcn-exit;animation-duration:var(--un-animate-duration);--un-animate-duration:.15s;--un-exit-opacity:initial;--un-exit-scale:initial;--un-exit-rotate:initial;--un-exit-translate-x:initial;--un-exit-translate-y:initial}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--un-enter-opacity:0}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--un-exit-opacity:0}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--un-enter-scale:.95}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--un-exit-scale:.95}.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open]{--un-enter-translate-y:-48%}.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open]{--un-enter-translate-x:-50%}.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed]{--un-exit-translate-y:-48%}.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed]{--un-exit-translate-x:-50%}@media (max-width: 1023.9px){.max-lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (max-width: 639.9px){.max-sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width: 640px){.sm\\:max-w-\\[425px\\]{max-width:425px}.sm\\:flex-row{flex-direction:row}.sm\\:place-items-center{place-items:center}.sm\\:justify-start{justify-content:flex-start}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-2>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(.5rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(.5rem * var(--un-space-x-reverse))}.sm\\:space-y-0>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0px * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0px * var(--un-space-y-reverse))}.sm\\:rounded-lg{border-radius:var(--radius-hotspot)}.sm\\:rounded-b-sm{border-bottom-left-radius:calc(var(--radius-hotspot) - 4px);border-bottom-right-radius:calc(var(--radius-hotspot) - 4px)}.sm\\:bg-\\[radial-gradient\\(rgba\\(0\\,0\\,0\\,0\\.5\\)_40\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)\\)\\]{background-color:radial-gradient(rgba(0,0,0,.5) 40%,rgba(0,0,0,.7))}.sm\\:text-left{text-align:left}}@media (min-width: 768px){.md\\:mx-auto{margin-left:auto;margin-right:auto}.md\\:w-\\[460px\\]{width:460px}.md\\:w-full{width:100%}}body[data-v-56540ed3]{background:var(--background-hotspot);color:var(--foreground-hotspot);min-height:screen;overflow-y:auto;position:relative;font-family:Inter,sans-serif}input[data-v-56540ed3]::-webkit-outer-spin-button,input[data-v-56540ed3]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-56540ed3]{-moz-appearance:textfield;appearance:textfield}input[data-v-56540ed3]:focus::placeholder{color:transparent}.link[data-v-56540ed3]{text-decoration:underline;color:#2b74e2}.link[data-v-56540ed3]:hover{text-decoration:underline;text-decoration-style:dotted}`)),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
function $t(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const Ce = {}, To = [], ot = () => {
}, Zr = () => !1, fo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Xa = (e) => e.startsWith("onUpdate:"), Se = Object.assign, ei = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, zp = Object.prototype.hasOwnProperty, _e = (e, t) => zp.call(e, t), ne = Array.isArray, Oo = (e) => Vo(e) === "[object Map]", zo = (e) => Vo(e) === "[object Set]", ul = (e) => Vo(e) === "[object Date]", ce = (e) => typeof e == "function", he = (e) => typeof e == "string", Kt = (e) => typeof e == "symbol", Ie = (e) => e !== null && typeof e == "object", ti = (e) => (Ie(e) || ce(e)) && ce(e.then) && ce(e.catch), Fu = Object.prototype.toString, Vo = (e) => Fu.call(e), Vp = (e) => Vo(e).slice(8, -1), Pu = (e) => Vo(e) === "[object Object]", ni = (e) => he(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Gn = $t(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), qp = $t("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), Ss = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Wp = /-(\w)/g, Ne = Ss((e) => e.replace(Wp, (t, n) => n ? n.toUpperCase() : "")), Hp = /\B([A-Z])/g, Mt = Ss((e) => e.replace(Hp, "-$1").toLowerCase()), ho = Ss((e) => e.charAt(0).toUpperCase() + e.slice(1)), Nn = Ss((e) => e ? `on${ho(e)}` : ""), Gt = (e, t) => !Object.is(e, t), Bo = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, os = (e, t, n) => {
  Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
}, rs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ss = (e) => {
  const t = he(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let cl;
const Jp = () => cl || (cl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), Kp = $t("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error");
function on(e) {
  if (ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = he(o) ? Mu(o) : on(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  }
  if (he(e) || Ie(e))
    return e;
}
const Gp = /;(?![^(]*\))/g, Qp = /:([^]+)/, Yp = /\/\*[^]*?\*\//g;
function Mu(e) {
  const t = {};
  return e.replace(Yp, "").split(Gp).forEach((n) => {
    if (n) {
      const o = n.split(Qp);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function qe(e) {
  let t = "";
  if (he(e))
    t = e;
  else if (ne(e))
    for (let n = 0; n < e.length; n++) {
      const o = qe(e[n]);
      o && (t += o + " ");
    }
  else if (Ie(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function mo(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !he(t) && (e.class = qe(t)), n && (e.style = on(n)), e;
}
const Zp = $t("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"), Xp = $t("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"), ef = $t("annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics"), tf = $t("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr"), nf = $t("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function dl(e) {
  return !!e || e === "";
}
function oo(e, t) {
  if (e === t)
    return !0;
  let n = ul(e), o = ul(t);
  if (n || o)
    return !(!n || !o) && e.getTime() === t.getTime();
  if (n = Kt(e), o = Kt(t), n || o)
    return e === t;
  if (n = ne(e), o = ne(t), n || o)
    return !(!n || !o) && function(r, s) {
      if (r.length !== s.length)
        return !1;
      let a = !0;
      for (let i = 0; a && i < r.length; i++)
        a = oo(r[i], s[i]);
      return a;
    }(e, t);
  if (n = Ie(e), o = Ie(t), n || o) {
    if (!n || !o || Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const r in e) {
      const s = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (s && !a || !s && a || !oo(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function oi(e, t) {
  return e.findIndex((n) => oo(n, t));
}
const Re = (e) => he(e) ? e : e == null ? "" : ne(e) || Ie(e) && (e.toString === Fu || !ce(e.toString)) ? JSON.stringify(e, Uu, 2) : String(e), Uu = (e, t) => t && t.__v_isRef ? Uu(e, t.value) : Oo(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r], s) => (n[qs(o, s) + " =>"] = r, n), {}) } : zo(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => qs(n)) } : Kt(t) ? qs(t) : !Ie(t) || ne(t) || Pu(t) ? t : String(t), qs = (e, t = "") => {
  var n;
  return Kt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
let Bt, Qn;
class ri {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Bt, !t && Bt && (this.index = (Bt.scopes || (Bt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Bt;
      try {
        return Bt = this, t();
      } finally {
        Bt = n;
      }
    }
  }
  on() {
    Bt = this;
  }
  off() {
    Bt = this.parent;
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
function vr(e) {
  return new ri(e);
}
function Lu(e, t = Bt) {
  t && t.active && t.effects.push(e);
}
function As() {
  return Bt;
}
function si(e) {
  Bt && Bt.cleanups.push(e);
}
let Do = class {
  constructor(t, n, o, r) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, Lu(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      this._dirtyLevel = 0, this._queryings++, ro();
      for (const t of this.deps)
        if (t.computed && (of(t.computed), this._dirtyLevel >= 2))
          break;
      so(), this._queryings--;
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 3 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Fn, n = Qn;
    try {
      return Fn = !0, Qn = this, this._runnings++, pl(this), this.fn();
    } finally {
      fl(this), this._runnings--, Qn = n, Fn = t;
    }
  }
  stop() {
    var t;
    this.active && (pl(this), fl(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
};
function of(e) {
  return e.value;
}
function pl(e) {
  e._trackId++, e._depsLength = 0;
}
function fl(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      ju(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function ju(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
function rf(e, t) {
  e.effect instanceof Do && (e = e.effect.fn);
  const n = new Do(e, ot, () => {
    n.dirty && n.run();
  });
  t && (Se(n, t), t.scope && Lu(n, t.scope)), t && t.lazy || n.run();
  const o = n.run.bind(n);
  return o.effect = n, o;
}
function sf(e) {
  e.effect.stop();
}
let Fn = !0, ya = 0;
const zu = [];
function ro() {
  zu.push(Fn), Fn = !1;
}
function so() {
  const e = zu.pop();
  Fn = e === void 0 || e;
}
function ai() {
  ya++;
}
function ii() {
  for (ya--; !ya && ba.length; )
    ba.shift()();
}
function Vu(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const o = e.deps[e._depsLength];
    o !== t ? (o && ju(o, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const ba = [];
function qu(e, t, n) {
  ai();
  for (const o of e.keys())
    if ((o.allowRecurse || !o._runnings) && o._dirtyLevel < t && (!o._runnings || t !== 2)) {
      const r = o._dirtyLevel;
      o._dirtyLevel = t, r !== 0 || o._queryings && t === 2 || (o.trigger(), o.scheduler && ba.push(o.scheduler));
    }
  ii();
}
const Wu = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, as = /* @__PURE__ */ new WeakMap(), Yn = Symbol(""), wa = Symbol("");
function Et(e, t, n) {
  if (Fn && Qn) {
    let o = as.get(e);
    o || as.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Wu(() => o.delete(n))), Vu(Qn, r);
  }
}
function vn(e, t, n, o, r, s) {
  const a = as.get(e);
  if (!a)
    return;
  let i = [];
  if (t === "clear")
    i = [...a.values()];
  else if (n === "length" && ne(e)) {
    const l = Number(o);
    a.forEach((u, c) => {
      (c === "length" || !Kt(c) && c >= l) && i.push(u);
    });
  } else
    switch (n !== void 0 && i.push(a.get(n)), t) {
      case "add":
        ne(e) ? ni(n) && i.push(a.get("length")) : (i.push(a.get(Yn)), Oo(e) && i.push(a.get(wa)));
        break;
      case "delete":
        ne(e) || (i.push(a.get(Yn)), Oo(e) && i.push(a.get(wa)));
        break;
      case "set":
        Oo(e) && i.push(a.get(Yn));
    }
  ai();
  for (const l of i)
    l && qu(l, 3);
  ii();
}
const af = $t("__proto__,__v_isRef,__isVue"), Hu = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Kt)), hl = lf();
function lf() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = xe(this);
      for (let s = 0, a = this.length; s < a; s++)
        Et(o, 0, s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(xe)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ro(), ai();
      const o = xe(this)[t].apply(this, n);
      return ii(), so(), o;
    };
  }), e;
}
function uf(e) {
  const t = xe(this);
  return Et(t, 0, e), t.hasOwnProperty(e);
}
class Ju {
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
      return o === (r ? s ? Xu : Zu : s ? Yu : Qu).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const a = ne(t);
    if (!r) {
      if (a && _e(hl, n))
        return Reflect.get(hl, n, o);
      if (n === "hasOwnProperty")
        return uf;
    }
    const i = Reflect.get(t, n, o);
    return (Kt(n) ? Hu.has(n) : af(n)) ? i : (r || Et(t, 0, n), s ? i : Je(i) ? a && ni(n) ? i : i.value : Ie(i) ? r ? ui(i) : nn(i) : i);
  }
}
let Ku = class extends Ju {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (!this._shallow) {
      const l = ao(s);
      if (Jn(o) || ao(o) || (s = xe(s), o = xe(o)), !ne(t) && Je(s) && !Je(o))
        return !l && (s.value = o, !0);
    }
    const a = ne(t) && ni(n) ? Number(n) < t.length : _e(t, n), i = Reflect.set(t, n, o, r);
    return t === xe(r) && (a ? Gt(o, s) && vn(t, "set", n, o) : vn(t, "add", n, o)), i;
  }
  deleteProperty(t, n) {
    const o = _e(t, n), r = Reflect.deleteProperty(t, n);
    return r && o && vn(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return Kt(n) && Hu.has(n) || Et(t, 0, n), o;
  }
  ownKeys(t) {
    return Et(t, 0, ne(t) ? "length" : Yn), Reflect.ownKeys(t);
  }
};
class Gu extends Ju {
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
const cf = new Ku(), df = new Gu(), pf = new Ku(!0), ff = new Gu(!0), li = (e) => e, Es = (e) => Reflect.getPrototypeOf(e);
function Ar(e, t, n = !1, o = !1) {
  const r = xe(e = e.__v_raw), s = xe(t);
  n || (Gt(t, s) && Et(r, 0, t), Et(r, 0, s));
  const { has: a } = Es(r), i = o ? li : n ? di : sr;
  return a.call(r, t) ? i(e.get(t)) : a.call(r, s) ? i(e.get(s)) : void (e !== r && e.get(t));
}
function Er(e, t = !1) {
  const n = this.__v_raw, o = xe(n), r = xe(e);
  return t || (Gt(e, r) && Et(o, 0, e), Et(o, 0, r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Ir(e, t = !1) {
  return e = e.__v_raw, !t && Et(xe(e), 0, Yn), Reflect.get(e, "size", e);
}
function ml(e) {
  e = xe(e);
  const t = xe(this);
  return Es(t).has.call(t, e) || (t.add(e), vn(t, "add", e, e)), this;
}
function vl(e, t) {
  t = xe(t);
  const n = xe(this), { has: o, get: r } = Es(n);
  let s = o.call(n, e);
  s || (e = xe(e), s = o.call(n, e));
  const a = r.call(n, e);
  return n.set(e, t), s ? Gt(t, a) && vn(n, "set", e, t) : vn(n, "add", e, t), this;
}
function gl(e) {
  const t = xe(this), { has: n, get: o } = Es(t);
  let r = n.call(t, e);
  r || (e = xe(e), r = n.call(t, e)), o && o.call(t, e);
  const s = t.delete(e);
  return r && vn(t, "delete", e, void 0), s;
}
function yl() {
  const e = xe(this), t = e.size !== 0, n = e.clear();
  return t && vn(e, "clear", void 0, void 0), n;
}
function Tr(e, t) {
  return function(n, o) {
    const r = this, s = r.__v_raw, a = xe(s), i = t ? li : e ? di : sr;
    return !e && Et(a, 0, Yn), s.forEach((l, u) => n.call(o, i(l), i(u), r));
  };
}
function Or(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = xe(r), a = Oo(s), i = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, u = r[e](...o), c = n ? li : t ? di : sr;
    return !t && Et(s, 0, l ? wa : Yn), { next() {
      const { value: d, done: p } = u.next();
      return p ? { value: d, done: p } : { value: i ? [c(d[0]), c(d[1])] : c(d), done: p };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function kn(e) {
  return function(...t) {
    return e !== "delete" && (e === "clear" ? void 0 : this);
  };
}
function hf() {
  const e = { get(r) {
    return Ar(this, r);
  }, get size() {
    return Ir(this);
  }, has: Er, add: ml, set: vl, delete: gl, clear: yl, forEach: Tr(!1, !1) }, t = { get(r) {
    return Ar(this, r, !1, !0);
  }, get size() {
    return Ir(this);
  }, has: Er, add: ml, set: vl, delete: gl, clear: yl, forEach: Tr(!1, !0) }, n = { get(r) {
    return Ar(this, r, !0);
  }, get size() {
    return Ir(this, !0);
  }, has(r) {
    return Er.call(this, r, !0);
  }, add: kn("add"), set: kn("set"), delete: kn("delete"), clear: kn("clear"), forEach: Tr(!0, !1) }, o = { get(r) {
    return Ar(this, r, !0, !0);
  }, get size() {
    return Ir(this, !0);
  }, has(r) {
    return Er.call(this, r, !0);
  }, add: kn("add"), set: kn("set"), delete: kn("delete"), clear: kn("clear"), forEach: Tr(!0, !0) };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = Or(r, !1, !1), n[r] = Or(r, !0, !1), t[r] = Or(r, !1, !0), o[r] = Or(r, !0, !0);
  }), [e, n, t, o];
}
const [mf, vf, gf, yf] = hf();
function Is(e, t) {
  const n = t ? e ? yf : gf : e ? vf : mf;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(_e(n, r) && r in o ? n : o, r, s);
}
const bf = { get: Is(!1, !1) }, wf = { get: Is(!1, !0) }, xf = { get: Is(!0, !1) }, kf = { get: Is(!0, !0) }, Qu = /* @__PURE__ */ new WeakMap(), Yu = /* @__PURE__ */ new WeakMap(), Zu = /* @__PURE__ */ new WeakMap(), Xu = /* @__PURE__ */ new WeakMap();
function nn(e) {
  return ao(e) ? e : Ts(e, !1, cf, bf, Qu);
}
function ec(e) {
  return Ts(e, !1, pf, wf, Yu);
}
function ui(e) {
  return Ts(e, !0, df, xf, Zu);
}
function _f(e) {
  return Ts(e, !0, ff, kf, Xu);
}
function Ts(e, t, n, o, r) {
  if (!Ie(e) || e.__v_raw && (!t || !e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const a = (i = e).__v_skip || !Object.isExtensible(i) ? 0 : function(u) {
    switch (u) {
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
  }(Vp(i));
  var i;
  if (a === 0)
    return e;
  const l = new Proxy(e, a === 2 ? o : n);
  return r.set(e, l), l;
}
function Zn(e) {
  return ao(e) ? Zn(e.__v_raw) : !(!e || !e.__v_isReactive);
}
function ao(e) {
  return !(!e || !e.__v_isReadonly);
}
function Jn(e) {
  return !(!e || !e.__v_isShallow);
}
function ci(e) {
  return Zn(e) || ao(e);
}
function xe(e) {
  const t = e && e.__v_raw;
  return t ? xe(t) : e;
}
function Os(e) {
  return os(e, "__v_skip", !0), e;
}
const sr = (e) => Ie(e) ? nn(e) : e, di = (e) => Ie(e) ? ui(e) : e;
let tc = class {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Do(() => t(this._value), () => ar(this, 1)), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = xe(this);
    return pi(t), t._cacheable && !t.effect.dirty || Gt(t._value, t._value = t.effect.run()) && ar(t, 2), t._value;
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
function pi(e) {
  Fn && Qn && (e = xe(e), Vu(Qn, e.dep || (e.dep = Wu(() => e.dep = void 0, e instanceof tc ? e : void 0))));
}
function ar(e, t = 3, n) {
  const o = (e = xe(e)).dep;
  o && qu(o, t);
}
function Je(e) {
  return !(!e || e.__v_isRef !== !0);
}
function j(e) {
  return oc(e, !1);
}
function nc(e) {
  return oc(e, !0);
}
function oc(e, t) {
  return Je(e) ? e : new Cf(e, t);
}
let Cf = class {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : xe(t), this._value = n ? t : sr(t);
  }
  get value() {
    return pi(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Jn(t) || ao(t);
    t = n ? t : xe(t), Gt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : sr(t), ar(this, 3));
  }
};
function Sf(e) {
  ar(e, 3);
}
function m(e) {
  return Je(e) ? e.value : e;
}
function $o(e) {
  return ce(e) ? e() : m(e);
}
const Af = { get: (e, t, n) => m(Reflect.get(e, t, n)), set: (e, t, n, o) => {
  const r = e[t];
  return Je(r) && !Je(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
} };
function fi(e) {
  return Zn(e) ? e : new Proxy(e, Af);
}
class Ef {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: o } = t(() => pi(this), () => ar(this));
    this._get = n, this._set = o;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function rc(e) {
  return new Ef(e);
}
function Qt(e) {
  const t = ne(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = sc(e, n);
  return t;
}
let If = class {
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
    return t = xe(this._object), n = this._key, (o = as.get(t)) == null ? void 0 : o.get(n);
    var t, n, o;
  }
};
class Tf {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function hi(e, t, n) {
  return Je(e) ? e : ce(e) ? new Tf(e) : Ie(e) && arguments.length > 1 ? sc(e, t, n) : j(e);
}
function sc(e, t, n) {
  const o = e[t];
  return Je(o) ? o : new If(e, t, n);
}
const Of = { GET: "get", HAS: "has", ITERATE: "iterate" }, Bf = { SET: "set", ADD: "add", DELETE: "delete", CLEAR: "clear" };
function $f(e, t) {
}
const Rf = { SETUP_FUNCTION: 0, 0: "SETUP_FUNCTION", RENDER_FUNCTION: 1, 1: "RENDER_FUNCTION", WATCH_GETTER: 2, 2: "WATCH_GETTER", WATCH_CALLBACK: 3, 3: "WATCH_CALLBACK", WATCH_CLEANUP: 4, 4: "WATCH_CLEANUP", NATIVE_EVENT_HANDLER: 5, 5: "NATIVE_EVENT_HANDLER", COMPONENT_EVENT_HANDLER: 6, 6: "COMPONENT_EVENT_HANDLER", VNODE_HOOK: 7, 7: "VNODE_HOOK", DIRECTIVE_HOOK: 8, 8: "DIRECTIVE_HOOK", TRANSITION_HOOK: 9, 9: "TRANSITION_HOOK", APP_ERROR_HANDLER: 10, 10: "APP_ERROR_HANDLER", APP_WARN_HANDLER: 11, 11: "APP_WARN_HANDLER", FUNCTION_REF: 12, 12: "FUNCTION_REF", ASYNC_COMPONENT_LOADER: 13, 13: "ASYNC_COMPONENT_LOADER", SCHEDULER: 14, 14: "SCHEDULER" };
function gn(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    vo(s, t, n);
  }
  return r;
}
function zt(e, t, n, o) {
  if (ce(e)) {
    const s = gn(e, t, n, o);
    return s && ti(s) && s.catch((a) => {
      vo(a, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(zt(e[s], t, n, o));
  return r;
}
function vo(e, t, n, o = !0) {
  if (t) {
    let r = t.parent;
    const s = t.proxy, a = `https://vuejs.org/errors/#runtime-${n}`;
    for (; r; ) {
      const l = r.ec;
      if (l) {
        for (let u = 0; u < l.length; u++)
          if (l[u](e, s, a) === !1)
            return;
      }
      r = r.parent;
    }
    const i = t.appContext.config.errorHandler;
    if (i)
      return void gn(i, null, 10, [e, s, a]);
  }
  (function(r, s, a, i = !0) {
    console.error(r);
  })(e, 0, 0, o);
}
let ir = !1, xa = !1;
const ht = [];
let tn = 0;
const Ro = [];
let pn = null, Wn = 0;
const ac = Promise.resolve();
let mi = null;
function Qe(e) {
  const t = mi || ac;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Bs(e) {
  ht.length && ht.includes(e, ir && e.allowRecurse ? tn + 1 : tn) || (e.id == null ? ht.push(e) : ht.splice(function(t) {
    let n = tn + 1, o = ht.length;
    for (; n < o; ) {
      const r = n + o >>> 1, s = ht[r], a = lr(s);
      a < t || a === t && s.pre ? n = r + 1 : o = r;
    }
    return n;
  }(e.id), 0, e), ic());
}
function ic() {
  ir || xa || (xa = !0, mi = ac.then(lc));
}
function is(e) {
  ne(e) ? Ro.push(...e) : pn && pn.includes(e, e.allowRecurse ? Wn + 1 : Wn) || Ro.push(e), ic();
}
function bl(e, t, n = ir ? tn + 1 : 0) {
  for (; n < ht.length; n++) {
    const o = ht[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid)
        continue;
      ht.splice(n, 1), n--, o();
    }
  }
}
function ls(e) {
  if (Ro.length) {
    const t = [...new Set(Ro)];
    if (Ro.length = 0, pn)
      return void pn.push(...t);
    for (pn = t, pn.sort((n, o) => lr(n) - lr(o)), Wn = 0; Wn < pn.length; Wn++)
      pn[Wn]();
    pn = null, Wn = 0;
  }
}
const lr = (e) => e.id == null ? 1 / 0 : e.id, Df = (e, t) => {
  const n = lr(e) - lr(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function lc(e) {
  xa = !1, ir = !0, ht.sort(Df);
  try {
    for (tn = 0; tn < ht.length; tn++) {
      const t = ht[tn];
      t && t.active !== !1 && gn(t, null, 14);
    }
  } finally {
    tn = 0, ht.length = 0, ls(), ir = !1, mi = null, (ht.length || Ro.length) && lc();
  }
}
function Nf(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || Ce;
  let r = n;
  const s = t.startsWith("update:"), a = s && t.slice(7);
  if (a && a in o) {
    const c = `${a === "modelValue" ? "model" : a}Modifiers`, { number: d, trim: p } = o[c] || Ce;
    p && (r = n.map((h) => he(h) ? h.trim() : h)), d && (r = n.map(rs));
  }
  let i, l = o[i = Nn(t)] || o[i = Nn(Ne(t))];
  !l && s && (l = o[i = Nn(Mt(t))]), l && zt(l, e, 6, r);
  const u = o[i + "Once"];
  if (u) {
    if (e.emitted) {
      if (e.emitted[i])
        return;
    } else
      e.emitted = {};
    e.emitted[i] = !0, zt(u, e, 6, r);
  }
}
function uc(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let a = {}, i = !1;
  if (!ce(e)) {
    const l = (u) => {
      const c = uc(u, t, !0);
      c && (i = !0, Se(a, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return s || i ? (ne(s) ? s.forEach((l) => a[l] = null) : Se(a, s), Ie(e) && o.set(e, a), a) : (Ie(e) && o.set(e, null), null);
}
function us(e, t) {
  return !(!e || !fo(t)) && (t = t.slice(2).replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, Mt(t)) || _e(e, t));
}
let rt = null, $s = null;
function cs(e) {
  const t = rt;
  return rt = e, $s = e && e.type.__scopeId || null, t;
}
function cc(e) {
  $s = e;
}
function dc() {
  $s = null;
}
const Ff = (e) => E;
function E(e, t = rt, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Ia(-1);
    const s = cs(t);
    let a;
    try {
      a = e(...r);
    } finally {
      cs(s), o._d && Ia(1);
    }
    return a;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Ws(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [a], slots: i, attrs: l, emit: u, render: c, renderCache: d, data: p, setupState: h, ctx: f, inheritAttrs: g } = e;
  let b, _;
  const v = cs(e);
  try {
    if (4 & n.shapeFlag) {
      const x = r || o;
      b = Pt(c.call(x, x, d, s, h, p, f)), _ = l;
    } else {
      const x = t;
      b = Pt(x(s, x.length > 1 ? { attrs: l, slots: i, emit: u } : null)), _ = t.props ? l : Pf(l);
    }
  } catch (x) {
    nr.length = 0, vo(x, e, 1), b = B(st);
  }
  let y = b;
  if (_ && g !== !1) {
    const x = Object.keys(_), { shapeFlag: w } = y;
    x.length && 7 & w && (a && x.some(Xa) && (_ = Mf(_, a)), y = Vt(y, _));
  }
  return n.dirs && (y = Vt(y), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && (y.transition = n.transition), b = y, cs(v), b;
}
const Pf = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || fo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Mf = (e, t) => {
  const n = {};
  for (const o in e)
    Xa(o) && o.slice(9) in t || (n[o] = e[o]);
  return n;
};
function wl(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !us(n, s))
      return !0;
  }
  return !1;
}
function vi({ vnode: e, parent: t }, n) {
  if (n)
    for (; t; ) {
      const o = t.subTree;
      if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o !== e)
        break;
      (e = t.vnode).el = n, t = t.parent;
    }
}
const gi = "components";
function Uf(e, t) {
  return yi(gi, e, !0, t) || e;
}
const pc = Symbol.for("v-ndc");
function Lf(e) {
  return he(e) ? yi(gi, e, !1) || e : e || pc;
}
function jf(e) {
  return yi("directives", e);
}
function yi(e, t, n = !0, o = !1) {
  const r = rt || Ge;
  if (r) {
    const s = r.type;
    if (e === gi) {
      const i = $a(s, !1);
      if (i && (i === t || i === Ne(t) || i === ho(Ne(t))))
        return s;
    }
    const a = xl(r[e] || s[e], t) || xl(r.appContext[e], t);
    return !a && o ? s : a;
  }
}
function xl(e, t) {
  return e && (e[t] || e[Ne(t)] || e[ho(Ne(t))]);
}
const fc = (e) => e.__isSuspense;
let kl = 0;
const zf = { name: "Suspense", __isSuspense: !0, process(e, t, n, o, r, s, a, i, l, u) {
  e == null ? function(c, d, p, h, f, g, b, _, v) {
    const { p: y, o: { createElement: x } } = v, w = x("div"), I = c.suspense = Hs(c, f, h, d, w, p, g, b, _, v);
    y(null, I.pendingBranch = c.ssContent, w, null, h, I, g, b), I.deps > 0 ? (er(c, "onPending"), er(c, "onFallback"), y(null, c.ssFallback, d, p, h, null, g, b), Ao(I, c.ssFallback)) : I.resolve(!1, !0);
  }(t, n, o, r, s, a, i, l, u) : function(c, d, p, h, f, g, b, _, { p: v, um: y, o: { createElement: x } }) {
    const w = d.suspense = c.suspense;
    w.vnode = d, d.el = c.el;
    const I = d.ssContent, F = d.ssFallback, { activeBranch: A, pendingBranch: O, isInFallback: M, isHydrating: P } = w;
    if (O)
      w.pendingBranch = I, Ht(I, O) ? (v(O, I, w.hiddenContainer, null, f, w, g, b, _), w.deps <= 0 ? w.resolve() : M && (P || (v(A, F, p, h, f, null, g, b, _), Ao(w, F)))) : (w.pendingId = kl++, P ? (w.isHydrating = !1, w.activeBranch = O) : y(O, f, w), w.deps = 0, w.effects.length = 0, w.hiddenContainer = x("div"), M ? (v(null, I, w.hiddenContainer, null, f, w, g, b, _), w.deps <= 0 ? w.resolve() : (v(A, F, p, h, f, null, g, b, _), Ao(w, F))) : A && Ht(I, A) ? (v(A, I, p, h, f, w, g, b, _), w.resolve(!0)) : (v(null, I, w.hiddenContainer, null, f, w, g, b, _), w.deps <= 0 && w.resolve()));
    else if (A && Ht(I, A))
      v(A, I, p, h, f, w, g, b, _), Ao(w, I);
    else if (er(d, "onPending"), w.pendingBranch = I, w.pendingId = 512 & I.shapeFlag ? I.component.suspenseId : kl++, v(null, I, w.hiddenContainer, null, f, w, g, b, _), w.deps <= 0)
      w.resolve();
    else {
      const { timeout: T, pendingId: W } = w;
      T > 0 ? setTimeout(() => {
        w.pendingId === W && w.fallback(F);
      }, T) : T === 0 && w.fallback(F);
    }
  }(e, t, n, o, r, a, i, l, u);
}, hydrate: function(e, t, n, o, r, s, a, i, l) {
  const u = t.suspense = Hs(t, o, n, e.parentNode, document.createElement("div"), null, r, s, a, i, !0), c = l(e, u.pendingBranch = t.ssContent, n, u, s, a);
  return u.deps === 0 && u.resolve(!1, !0), c;
}, create: Hs, normalize: function(e) {
  const { shapeFlag: t, children: n } = e, o = 32 & t;
  e.ssContent = _l(o ? n.default : n), e.ssFallback = o ? _l(n.fallback) : B(st);
} };
function er(e, t) {
  const n = e.props && e.props[t];
  ce(n) && n();
}
function Hs(e, t, n, o, r, s, a, i, l, u, c = !1) {
  const { p: d, m: p, um: h, n: f, o: { parentNode: g, remove: b } } = u;
  let _;
  const v = function(w) {
    var I;
    return ((I = w.props) == null ? void 0 : I.suspensible) != null && w.props.suspensible !== !1;
  }(e);
  v && t?.pendingBranch && (_ = t.pendingId, t.deps++);
  const y = e.props ? ss(e.props.timeout) : void 0, x = { vnode: e, parent: t, parentComponent: n, namespace: a, container: o, hiddenContainer: r, anchor: s, deps: 0, pendingId: 0, timeout: typeof y == "number" ? y : -1, activeBranch: null, pendingBranch: null, isInFallback: !c, isHydrating: c, isUnmounted: !1, effects: [], resolve(w = !1, I = !1) {
    const { vnode: F, activeBranch: A, pendingBranch: O, pendingId: M, effects: P, parentComponent: T, container: W } = x;
    let G = !1;
    if (x.isHydrating)
      x.isHydrating = !1;
    else if (!w) {
      G = A && O.transition && O.transition.mode === "out-in", G && (A.transition.afterLeave = () => {
        M === x.pendingId && (p(O, W, f(A), 0), is(P));
      });
      let { anchor: ie } = x;
      A && (ie = f(A), h(A, T, x, !0)), G || p(O, W, ie, 0);
    }
    Ao(x, O), x.pendingBranch = null, x.isInFallback = !1;
    let X = x.parent, ee = !1;
    for (; X; ) {
      if (X.pendingBranch) {
        X.effects.push(...P), ee = !0;
        break;
      }
      X = X.parent;
    }
    ee || G || is(P), x.effects = [], v && t && t.pendingBranch && _ === t.pendingId && (t.deps--, t.deps !== 0 || I || t.resolve()), er(F, "onResolve");
  }, fallback(w) {
    if (!x.pendingBranch)
      return;
    const { vnode: I, activeBranch: F, parentComponent: A, container: O, namespace: M } = x;
    er(I, "onFallback");
    const P = f(F), T = () => {
      x.isInFallback && (d(null, w, O, P, A, null, M, i, l), Ao(x, w));
    }, W = w.transition && w.transition.mode === "out-in";
    W && (F.transition.afterLeave = T), x.isInFallback = !0, h(F, A, null, !0), W || T();
  }, move(w, I, F) {
    x.activeBranch && p(x.activeBranch, w, I, F), x.container = w;
  }, next: () => x.activeBranch && f(x.activeBranch), registerDep(w, I) {
    const F = !!x.pendingBranch;
    F && x.deps++;
    const A = w.vnode.el;
    w.asyncDep.catch((O) => {
      vo(O, w, 0);
    }).then((O) => {
      if (w.isUnmounted || x.isUnmounted || x.pendingId !== w.suspenseId)
        return;
      w.asyncResolved = !0;
      const { vnode: M } = w;
      Ba(w, O, !1), A && (M.el = A);
      const P = !A && w.subTree.el;
      I(w, M, g(A || w.subTree.el), A ? null : f(w.subTree), x, a, l), P && b(P), vi(w, M.el), F && --x.deps == 0 && x.resolve();
    });
  }, unmount(w, I) {
    x.isUnmounted = !0, x.activeBranch && h(x.activeBranch, n, w, I), x.pendingBranch && h(x.pendingBranch, n, w, I);
  } };
  return x;
}
function _l(e) {
  let t;
  if (ce(e)) {
    const n = uo && e._c;
    n && (e._d = !1, N()), e = e(), n && (e._d = !0, t = Ct, Kc());
  }
  return ne(e) && (e = function(o) {
    let r;
    for (let s = 0; s < o.length; s++) {
      const a = o[s];
      if (!co(a))
        return;
      if (a.type !== st || a.children === "v-if") {
        if (r)
          return;
        r = a;
      }
    }
    return r;
  }(e)), e = Pt(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function hc(e, t) {
  t && t.pendingBranch ? ne(e) ? t.effects.push(...e) : t.effects.push(e) : is(e);
}
function Ao(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: o } = e, r = n.el = t.el;
  o && o.subTree === n && (o.vnode.el = r, vi(o, r));
}
const mc = Symbol.for("v-scx"), Vf = () => eo(mc);
function it(e, t) {
  return gr(e, null, t);
}
function vc(e, t) {
  return gr(e, null, { flush: "post" });
}
function gc(e, t) {
  return gr(e, null, { flush: "sync" });
}
const Br = {};
function Ee(e, t, n) {
  return gr(e, t, n);
}
function gr(e, t, { immediate: n, deep: o, flush: r, once: s } = Ce) {
  var a;
  if (t && s) {
    const v = t;
    t = (...y) => {
      v(...y), _();
    };
  }
  const i = As() === ((a = Ge) == null ? void 0 : a.scope) ? Ge : null;
  let l, u, c = !1, d = !1;
  if (Je(e) ? (l = () => e.value, c = Jn(e)) : Zn(e) ? (l = Jn(e) || o === !1 ? () => mn(e, 1) : () => mn(e), c = !0) : ne(e) ? (d = !0, c = e.some((v) => Zn(v) || Jn(v)), l = () => e.map((v) => Je(v) ? v.value : Zn(v) ? mn(v, Jn(v) || o === !1 ? 1 : void 0) : ce(v) ? gn(v, i, 2) : void 0)) : l = ce(e) ? t ? () => gn(e, i, 2) : () => {
    if (!i || !i.isUnmounted)
      return u && u(), zt(e, i, 3, [p]);
  } : ot, t && o) {
    const v = l;
    l = () => mn(v());
  }
  let p = (v) => {
    u = b.onStop = () => {
      gn(v, i, 4), u = b.onStop = void 0;
    };
  }, h = d ? new Array(e.length).fill(Br) : Br;
  const f = () => {
    if (b.active && b.dirty)
      if (t) {
        const v = b.run();
        (o || c || (d ? v.some((y, x) => Gt(y, h[x])) : Gt(v, h))) && (u && u(), zt(t, i, 3, [v, h === Br ? void 0 : d && h[0] === Br ? [] : h, p]), h = v);
      } else
        b.run();
  };
  let g;
  f.allowRecurse = !!t, r === "sync" ? g = f : r === "post" ? g = () => at(f, i && i.suspense) : (f.pre = !0, i && (f.id = i.uid), g = () => Bs(f));
  const b = new Do(l, ot, g), _ = () => {
    b.stop(), i && i.scope && ei(i.scope.effects, b);
  };
  return t ? n ? f() : h = b.run() : r === "post" ? at(b.run.bind(b), i && i.suspense) : b.run(), _;
}
function qf(e, t, n) {
  const o = this.proxy, r = he(e) ? e.includes(".") ? yc(o, e) : () => o[e] : e.bind(o, o);
  let s;
  ce(t) ? s = t : (s = t.handler, n = t);
  const a = Ge;
  Un(this);
  const i = gr(r, s.bind(o), n);
  return a ? Un(a) : Pn(), i;
}
function yc(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function mn(e, t, n = 0, o) {
  if (!Ie(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if ((o = o || /* @__PURE__ */ new Set()).has(e))
    return e;
  if (o.add(e), Je(e))
    mn(e.value, t, n, o);
  else if (ne(e))
    for (let r = 0; r < e.length; r++)
      mn(e[r], t, n, o);
  else if (zo(e) || Oo(e))
    e.forEach((r) => {
      mn(r, t, n, o);
    });
  else if (Pu(e))
    for (const r in e)
      mn(e[r], t, n, o);
  return e;
}
function bc(e, t) {
  const n = rt;
  if (n === null)
    return e;
  const o = Ms(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [a, i, l, u = Ce] = t[s];
    a && (ce(a) && (a = { mounted: a, updated: a }), a.deep && mn(i), r.push({ dir: a, instance: o, value: i, oldValue: void 0, arg: l, modifiers: u }));
  }
  return e;
}
function en(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let a = 0; a < r.length; a++) {
    const i = r[a];
    s && (i.oldValue = s[a].value);
    let l = i.dir[o];
    l && (ro(), zt(l, n, 8, [e.el, i, e, t]), so());
  }
}
const $n = Symbol("_leaveCb"), $r = Symbol("_enterCb");
function bi() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: /* @__PURE__ */ new Map() };
  return tt(() => {
    e.isMounted = !0;
  }), go(() => {
    e.isUnmounting = !0;
  }), e;
}
const Nt = [Function, Array], wi = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: Nt, onEnter: Nt, onAfterEnter: Nt, onEnterCancelled: Nt, onBeforeLeave: Nt, onLeave: Nt, onAfterLeave: Nt, onLeaveCancelled: Nt, onBeforeAppear: Nt, onAppear: Nt, onAfterAppear: Nt, onAppearCancelled: Nt }, wc = { name: "BaseTransition", props: wi, setup(e, { slots: t }) {
  const n = Me(), o = bi();
  let r;
  return () => {
    const s = t.default && Rs(t.default(), !0);
    if (!s || !s.length)
      return;
    let a = s[0];
    if (s.length > 1) {
      for (const g of s)
        if (g.type !== st) {
          a = g;
          break;
        }
    }
    const i = xe(e), { mode: l } = i;
    if (o.isLeaving)
      return Js(a);
    const u = Cl(a);
    if (!u)
      return Js(a);
    const c = No(u, i, o, n);
    io(u, c);
    const d = n.subTree, p = d && Cl(d);
    let h = !1;
    const { getTransitionKey: f } = u.type;
    if (f) {
      const g = f();
      r === void 0 ? r = g : g !== r && (r = g, h = !0);
    }
    if (p && p.type !== st && (!Ht(u, p) || h)) {
      const g = No(p, i, o, n);
      if (io(p, g), l === "out-in")
        return o.isLeaving = !0, g.afterLeave = () => {
          o.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
        }, Js(a);
      l === "in-out" && u.type !== st && (g.delayLeave = (b, _, v) => {
        xc(o, p)[String(p.key)] = p, b[$n] = () => {
          _(), b[$n] = void 0, delete c.delayedLeave;
        }, c.delayedLeave = v;
      });
    }
    return a;
  };
} };
function xc(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function No(e, t, n, o) {
  const { appear: r, mode: s, persisted: a = !1, onBeforeEnter: i, onEnter: l, onAfterEnter: u, onEnterCancelled: c, onBeforeLeave: d, onLeave: p, onAfterLeave: h, onLeaveCancelled: f, onBeforeAppear: g, onAppear: b, onAfterAppear: _, onAppearCancelled: v } = t, y = String(e.key), x = xc(n, e), w = (A, O) => {
    A && zt(A, o, 9, O);
  }, I = (A, O) => {
    const M = O[1];
    w(A, O), ne(A) ? A.every((P) => P.length <= 1) && M() : A.length <= 1 && M();
  }, F = { mode: s, persisted: a, beforeEnter(A) {
    let O = i;
    if (!n.isMounted) {
      if (!r)
        return;
      O = g || i;
    }
    A[$n] && A[$n](!0);
    const M = x[y];
    M && Ht(e, M) && M.el[$n] && M.el[$n](), w(O, [A]);
  }, enter(A) {
    let O = l, M = u, P = c;
    if (!n.isMounted) {
      if (!r)
        return;
      O = b || l, M = _ || u, P = v || c;
    }
    let T = !1;
    const W = A[$r] = (G) => {
      T || (T = !0, w(G ? P : M, [A]), F.delayedLeave && F.delayedLeave(), A[$r] = void 0);
    };
    O ? I(O, [A, W]) : W();
  }, leave(A, O) {
    const M = String(e.key);
    if (A[$r] && A[$r](!0), n.isUnmounting)
      return O();
    w(d, [A]);
    let P = !1;
    const T = A[$n] = (W) => {
      P || (P = !0, O(), w(W ? f : h, [A]), A[$n] = void 0, x[M] === e && delete x[M]);
    };
    x[M] = e, p ? I(p, [A, T]) : T();
  }, clone: (A) => No(A, t, n, o) };
  return F;
}
function Js(e) {
  if (yr(e))
    return (e = Vt(e)).children = null, e;
}
function Cl(e) {
  return yr(e) ? e.children ? e.children[0] : void 0 : e;
}
function io(e, t) {
  6 & e.shapeFlag && e.component ? io(e.component.subTree, t) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Rs(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let a = e[s];
    const i = n == null ? a.key : String(n) + String(a.key != null ? a.key : s);
    a.type === Oe ? (128 & a.patchFlag && r++, o = o.concat(Rs(a.children, t, i))) : (t || a.type !== st) && o.push(i != null ? Vt(a, { key: i }) : a);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Z(e, t) {
  return ce(e) ? Se({ name: e.name }, t, { setup: e }) : e;
}
const Xn = (e) => !!e.type.__asyncLoader;
function Wf(e) {
  ce(e) && (e = { loader: e });
  const { loader: t, loadingComponent: n, errorComponent: o, delay: r = 200, timeout: s, suspensible: a = !0, onError: i } = e;
  let l, u = null, c = 0;
  const d = () => {
    let p;
    return u || (p = u = t().catch((h) => {
      if (h = h instanceof Error ? h : new Error(String(h)), i)
        return new Promise((f, g) => {
          i(h, () => f((c++, u = null, d())), () => g(h), c + 1);
        });
      throw h;
    }).then((h) => p !== u && u ? u : (h && (h.__esModule || h[Symbol.toStringTag] === "Module") && (h = h.default), l = h, h)));
  };
  return /* @__PURE__ */ Z({ name: "AsyncComponentWrapper", __asyncLoader: d, get __asyncResolved() {
    return l;
  }, setup() {
    const p = Ge;
    if (l)
      return () => Ks(l, p);
    const h = (_) => {
      u = null, vo(_, p, 13, !o);
    };
    if (a && p.suspense)
      return d().then((_) => () => Ks(_, p)).catch((_) => (h(_), () => o ? B(o, { error: _ }) : null));
    const f = j(!1), g = j(), b = j(!!r);
    return r && setTimeout(() => {
      b.value = !1;
    }, r), s != null && setTimeout(() => {
      if (!f.value && !g.value) {
        const _ = new Error(`Async component timed out after ${s}ms.`);
        h(_), g.value = _;
      }
    }, s), d().then(() => {
      f.value = !0, p.parent && yr(p.parent.vnode) && (p.parent.effect.dirty = !0, Bs(p.parent.update));
    }).catch((_) => {
      h(_), g.value = _;
    }), () => f.value && l ? Ks(l, p) : g.value && o ? B(o, { error: g.value }) : n && !b.value ? B(n) : void 0;
  } });
}
function Ks(e, t) {
  const { ref: n, props: o, children: r, ce: s } = t.vnode, a = B(e, o, r);
  return a.ref = n, a.ce = s, delete t.vnode.ce, a;
}
const yr = (e) => e.type.__isKeepAlive, Hf = { name: "KeepAlive", __isKeepAlive: !0, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e, { slots: t }) {
  const n = Me(), o = n.ctx, r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
  let a = null;
  const i = n.suspense, { renderer: { p: l, m: u, um: c, o: { createElement: d } } } = o, p = d("div");
  function h(v) {
    Gs(v), c(v, n, i, !0);
  }
  function f(v) {
    r.forEach((y, x) => {
      const w = $a(y.type);
      !w || v && v(w) || g(x);
    });
  }
  function g(v) {
    const y = r.get(v);
    a && Ht(y, a) ? a && Gs(a) : h(y), r.delete(v), s.delete(v);
  }
  o.activate = (v, y, x, w, I) => {
    const F = v.component;
    u(v, y, x, 0, i), l(F.vnode, v, y, x, F, i, w, v.slotScopeIds, I), at(() => {
      F.isDeactivated = !1, F.a && Bo(F.a);
      const A = v.props && v.props.onVnodeMounted;
      A && _t(A, F.parent, v);
    }, i);
  }, o.deactivate = (v) => {
    const y = v.component;
    u(v, p, null, 1, i), at(() => {
      y.da && Bo(y.da);
      const x = v.props && v.props.onVnodeUnmounted;
      x && _t(x, y.parent, v), y.isDeactivated = !0;
    }, i);
  }, Ee(() => [e.include, e.exclude], ([v, y]) => {
    v && f((x) => Yo(v, x)), y && f((x) => !Yo(y, x));
  }, { flush: "post", deep: !0 });
  let b = null;
  const _ = () => {
    b != null && r.set(b, Qs(n.subTree));
  };
  return tt(_), Ns(_), go(() => {
    r.forEach((v) => {
      const { subTree: y, suspense: x } = n, w = Qs(y);
      if (v.type !== w.type || v.key !== w.key)
        h(v);
      else {
        Gs(w);
        const I = w.component.da;
        I && at(I, x);
      }
    });
  }), () => {
    if (b = null, !t.default)
      return null;
    const v = t.default(), y = v[0];
    if (v.length > 1)
      return a = null, v;
    if (!(co(y) && (4 & y.shapeFlag || 128 & y.shapeFlag)))
      return a = null, y;
    let x = Qs(y);
    const w = x.type, I = $a(Xn(x) ? x.type.__asyncResolved || {} : w), { include: F, exclude: A, max: O } = e;
    if (F && (!I || !Yo(F, I)) || A && I && Yo(A, I))
      return a = x, y;
    const M = x.key == null ? w : x.key, P = r.get(M);
    return x.el && (x = Vt(x), 128 & y.shapeFlag && (y.ssContent = x)), b = M, P ? (x.el = P.el, x.component = P.component, x.transition && io(x, x.transition), x.shapeFlag |= 512, s.delete(M), s.add(M)) : (s.add(M), O && s.size > parseInt(O, 10) && g(s.values().next().value)), x.shapeFlag |= 256, a = x, fc(y.type) ? y : x;
  };
} };
function Yo(e, t) {
  return ne(e) ? e.some((n) => Yo(n, t)) : he(e) ? e.split(",").includes(t) : Vo(e) === "[object RegExp]" && e.test(t);
}
function kc(e, t) {
  Cc(e, "a", t);
}
function _c(e, t) {
  Cc(e, "da", t);
}
function Cc(e, t, n = Ge) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Ds(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      yr(r.parent.vnode) && Jf(o, t, n, r), r = r.parent;
  }
}
function Jf(e, t, n, o) {
  const r = Ds(t, e, o, !0);
  qt(() => {
    ei(o[t], r);
  }, n);
}
function Gs(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Qs(e) {
  return 128 & e.shapeFlag ? e.ssContent : e;
}
function Ds(e, t, n = Ge, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...a) => {
      if (n.isUnmounted)
        return;
      ro(), Un(n);
      const i = zt(t, n, e, a);
      return Pn(), so(), i;
    });
    return o ? r.unshift(s) : r.push(s), s;
  }
}
const yn = (e) => (t, n = Ge) => (!Ei || e === "sp") && Ds(e, (...o) => t(...o), n), Sc = yn("bm"), tt = yn("m"), Ac = yn("bu"), Ns = yn("u"), go = yn("bum"), qt = yn("um"), Ec = yn("sp"), Ic = yn("rtg"), Tc = yn("rtc");
function Oc(e, t = Ge) {
  Ds("ec", e, t);
}
function ka(e, t, n, o) {
  let r;
  const s = n && n[o];
  if (ne(e) || he(e)) {
    r = new Array(e.length);
    for (let a = 0, i = e.length; a < i; a++)
      r[a] = t(e[a], a, void 0, s && s[a]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let a = 0; a < e; a++)
      r[a] = t(a + 1, a, void 0, s && s[a]);
  } else if (Ie(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (a, i) => t(a, i, void 0, s && s[i]));
    else {
      const a = Object.keys(e);
      r = new Array(a.length);
      for (let i = 0, l = a.length; i < l; i++) {
        const u = a[i];
        r[i] = t(e[u], u, i, s && s[i]);
      }
    }
  else
    r = [];
  return n && (n[o] = r), r;
}
function Kf(e, t) {
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (ne(o))
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
function oe(e, t, n = {}, o, r) {
  if (rt.isCE || rt.parent && Xn(rt.parent) && rt.parent.isCE)
    return t !== "default" && (n.name = t), B("slot", n, o && o());
  let s = e[t];
  s && s._c && (s._d = !1), N();
  const a = s && Bc(s(n)), i = re(Oe, { key: n.key || a && a.key || `_${t}` }, a || (o ? o() : []), a && e._ === 1 ? 64 : -2);
  return !r && i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]), s && s._c && (s._d = !0), i;
}
function Bc(e) {
  return e.some((t) => !co(t) || t.type !== st && !(t.type === Oe && !Bc(t.children))) ? e : null;
}
function Gf(e, t) {
  const n = {};
  for (const o in e)
    n[t && /[A-Z]/.test(o) ? `on:${o}` : Nn(o)] = e[o];
  return n;
}
const _a = (e) => e ? Yc(e) ? Ms(e) || e.proxy : _a(e.parent) : null, tr = Se(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => _a(e.parent), $root: (e) => _a(e.root), $emit: (e) => e.emit, $options: (e) => xi(e), $forceUpdate: (e) => e.f || (e.f = () => {
  e.effect.dirty = !0, Bs(e.update);
}), $nextTick: (e) => e.n || (e.n = Qe.bind(e.proxy)), $watch: (e) => qf.bind(e) }), Ys = (e, t) => e !== Ce && !e.__isScriptSetup && _e(e, t), Ca = { get({ _: e }, t) {
  const { ctx: n, setupState: o, data: r, props: s, accessCache: a, type: i, appContext: l } = e;
  let u;
  if (t[0] !== "$") {
    const h = a[t];
    if (h !== void 0)
      switch (h) {
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
      if (Ys(o, t))
        return a[t] = 1, o[t];
      if (r !== Ce && _e(r, t))
        return a[t] = 2, r[t];
      if ((u = e.propsOptions[0]) && _e(u, t))
        return a[t] = 3, s[t];
      if (n !== Ce && _e(n, t))
        return a[t] = 4, n[t];
      Sa && (a[t] = 0);
    }
  }
  const c = tr[t];
  let d, p;
  return c ? (t === "$attrs" && Et(e, 0, t), c(e)) : (d = i.__cssModules) && (d = d[t]) ? d : n !== Ce && _e(n, t) ? (a[t] = 4, n[t]) : (p = l.config.globalProperties, _e(p, t) ? p[t] : void 0);
}, set({ _: e }, t, n) {
  const { data: o, setupState: r, ctx: s } = e;
  return Ys(r, t) ? (r[t] = n, !0) : o !== Ce && _e(o, t) ? (o[t] = n, !0) : !_e(e.props, t) && (t[0] !== "$" || !(t.slice(1) in e)) && (s[t] = n, !0);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, a) {
  let i;
  return !!n[a] || e !== Ce && _e(e, a) || Ys(t, a) || (i = s[0]) && _e(i, a) || _e(o, a) || _e(tr, a) || _e(r.config.globalProperties, a);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : _e(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} }, Qf = Se({}, Ca, { get(e, t) {
  if (t !== Symbol.unscopables)
    return Ca.get(e, t, e);
}, has: (e, t) => t[0] !== "_" && !Kp(t) });
function Yf() {
  return null;
}
function Zf() {
  return null;
}
function Xf(e) {
}
function eh(e) {
}
function th() {
  return null;
}
function nh() {
}
function oh(e, t) {
  return null;
}
function $c() {
  return Nc().slots;
}
function Rc() {
  return Nc().attrs;
}
function Dc(e, t, n = Ce) {
  const o = Me(), r = Ne(t), s = rc((i, l) => {
    let u;
    return gc(() => {
      const c = e[t];
      Gt(u, c) && (u = c, l());
    }), { get: () => (i(), n.get ? n.get(u) : u), set(c) {
      const d = o.vnode.props;
      d && (t in d || r in d) && (`onUpdate:${t}` in d || `onUpdate:${r}` in d) || !Gt(c, u) || (u = c, l()), o.emit(`update:${t}`, n.set ? n.set(c) : c);
    } };
  }), a = t === "modelValue" ? "modelModifiers" : `${t}Modifiers`;
  return s[Symbol.iterator] = () => {
    let i = 0;
    return { next: () => i < 2 ? { value: i++ ? e[a] || {} : s, done: !1 } : { done: !0 } };
  }, s;
}
function Nc() {
  const e = Me();
  return e.setupContext || (e.setupContext = ed(e));
}
function ur(e) {
  return ne(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
function rh(e, t) {
  const n = ur(e);
  for (const o in t) {
    if (o.startsWith("__skip"))
      continue;
    let r = n[o];
    r ? ne(r) || ce(r) ? r = n[o] = { type: r, default: t[o] } : r.default = t[o] : r === null && (r = n[o] = { default: t[o] }), r && t[`__skip_${o}`] && (r.skipFactory = !0);
  }
  return n;
}
function Fc(e, t) {
  return e && t ? ne(e) && ne(t) ? e.concat(t) : Se({}, ur(e), ur(t)) : e || t;
}
function sh(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || Object.defineProperty(n, o, { enumerable: !0, get: () => e[o] });
  return n;
}
function ah(e) {
  const t = Me();
  let n = e();
  return Pn(), ti(n) && (n = n.catch((o) => {
    throw Un(t), o;
  })), [n, () => Un(t)];
}
let Sa = !0;
function ih(e) {
  const t = xi(e), n = e.proxy, o = e.ctx;
  Sa = !1, t.beforeCreate && Sl(t.beforeCreate, e, "bc");
  const { data: r, computed: s, methods: a, watch: i, provide: l, inject: u, created: c, beforeMount: d, mounted: p, beforeUpdate: h, updated: f, activated: g, deactivated: b, beforeUnmount: _, unmounted: v, render: y, renderTracked: x, renderTriggered: w, errorCaptured: I, serverPrefetch: F, expose: A, inheritAttrs: O, components: M, directives: P } = t;
  if (u && function(W, G, X = ot) {
    ne(W) && (W = Aa(W));
    for (const ee in W) {
      const ie = W[ee];
      let ge;
      ge = Ie(ie) ? "default" in ie ? eo(ie.from || ee, ie.default, !0) : eo(ie.from || ee) : eo(ie), Je(ge) ? Object.defineProperty(G, ee, { enumerable: !0, configurable: !0, get: () => ge.value, set: (Ue) => ge.value = Ue }) : G[ee] = ge;
    }
  }(u, o, null), a)
    for (const W in a) {
      const G = a[W];
      ce(G) && (o[W] = G.bind(n));
    }
  if (r) {
    const W = r.call(n, n);
    Ie(W) && (e.data = nn(W));
  }
  if (Sa = !0, s)
    for (const W in s) {
      const G = s[W], X = ce(G) ? G.bind(n, n) : ce(G.get) ? G.get.bind(n, n) : ot, ee = !ce(G) && ce(G.set) ? G.set.bind(n) : ot, ie = ae({ get: X, set: ee });
      Object.defineProperty(o, W, { enumerable: !0, configurable: !0, get: () => ie.value, set: (ge) => ie.value = ge });
    }
  if (i)
    for (const W in i)
      Pc(i[W], o, n, W);
  if (l) {
    const W = ce(l) ? l.call(n) : l;
    Reflect.ownKeys(W).forEach((G) => {
      Fs(G, W[G]);
    });
  }
  function T(W, G) {
    ne(G) ? G.forEach((X) => W(X.bind(n))) : G && W(G.bind(n));
  }
  if (c && Sl(c, e, "c"), T(Sc, d), T(tt, p), T(Ac, h), T(Ns, f), T(kc, g), T(_c, b), T(Oc, I), T(Tc, x), T(Ic, w), T(go, _), T(qt, v), T(Ec, F), ne(A))
    if (A.length) {
      const W = e.exposed || (e.exposed = {});
      A.forEach((G) => {
        Object.defineProperty(W, G, { get: () => n[G], set: (X) => n[G] = X });
      });
    } else
      e.exposed || (e.exposed = {});
  y && e.render === ot && (e.render = y), O != null && (e.inheritAttrs = O), M && (e.components = M), P && (e.directives = P);
}
function Sl(e, t, n) {
  zt(ne(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Pc(e, t, n, o) {
  const r = o.includes(".") ? yc(n, o) : () => n[o];
  if (he(e)) {
    const s = t[e];
    ce(s) && Ee(r, s);
  } else if (ce(e))
    Ee(r, e.bind(n));
  else if (Ie(e))
    if (ne(e))
      e.forEach((s) => Pc(s, t, n, o));
    else {
      const s = ce(e.handler) ? e.handler.bind(n) : t[e.handler];
      ce(s) && Ee(r, s, e);
    }
}
function xi(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: a } } = e.appContext, i = s.get(t);
  let l;
  return i ? l = i : r.length || n || o ? (l = {}, r.length && r.forEach((u) => ds(l, u, a, !0)), ds(l, t, a)) : l = t, Ie(t) && s.set(t, l), l;
}
function ds(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && ds(e, s, n, !0), r && r.forEach((a) => ds(e, a, n, !0));
  for (const a in t)
    if (!(o && a === "expose")) {
      const i = lh[a] || n && n[a];
      e[a] = i ? i(e[a], t[a]) : t[a];
    }
  return e;
}
const lh = { data: Al, props: El, emits: El, methods: Wo, computed: Wo, beforeCreate: vt, created: vt, beforeMount: vt, mounted: vt, beforeUpdate: vt, updated: vt, beforeDestroy: vt, beforeUnmount: vt, destroyed: vt, unmounted: vt, activated: vt, deactivated: vt, errorCaptured: vt, serverPrefetch: vt, components: Wo, directives: Wo, watch: function(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Se(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = vt(e[o], t[o]);
  return n;
}, provide: Al, inject: function(e, t) {
  return Wo(Aa(e), Aa(t));
} };
function Al(e, t) {
  return t ? e ? function() {
    return Se(ce(e) ? e.call(this, this) : e, ce(t) ? t.call(this, this) : t);
  } : t : e;
}
function Aa(e) {
  if (ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function vt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wo(e, t) {
  return e ? Se(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function El(e, t) {
  return e ? ne(e) && ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Se(/* @__PURE__ */ Object.create(null), ur(e), ur(t ?? {})) : t;
}
function Mc() {
  return { app: null, config: { isNativeTag: Zr, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let uh = 0;
function ch(e, t) {
  return function(n, o = null) {
    ce(n) || (n = Se({}, n)), o == null || Ie(o) || (o = null);
    const r = Mc(), s = /* @__PURE__ */ new WeakSet();
    let a = !1;
    const i = r.app = { _uid: uh++, _component: n, _props: o, _container: null, _context: r, _instance: null, version: nd, get config() {
      return r.config;
    }, set config(l) {
    }, use: (l, ...u) => (s.has(l) || (l && ce(l.install) ? (s.add(l), l.install(i, ...u)) : ce(l) && (s.add(l), l(i, ...u))), i), mixin: (l) => (r.mixins.includes(l) || r.mixins.push(l), i), component: (l, u) => u ? (r.components[l] = u, i) : r.components[l], directive: (l, u) => u ? (r.directives[l] = u, i) : r.directives[l], mount(l, u, c) {
      if (!a) {
        const d = B(n, o);
        return d.appContext = r, c === !0 ? c = "svg" : c === !1 && (c = void 0), u && t ? t(d, l) : e(d, l, c), a = !0, i._container = l, l.__vue_app__ = i, Ms(d.component) || d.component.proxy;
      }
    }, unmount() {
      a && (e(null, i._container), delete i._container.__vue_app__);
    }, provide: (l, u) => (r.provides[l] = u, i), runWithContext(l) {
      cr = i;
      try {
        return l();
      } finally {
        cr = null;
      }
    } };
    return i;
  };
}
let cr = null;
function Fs(e, t) {
  if (Ge) {
    let n = Ge.provides;
    const o = Ge.parent && Ge.parent.provides;
    o === n && (n = Ge.provides = Object.create(o)), n[e] = t;
  }
}
function eo(e, t, n = !1) {
  const o = Ge || rt;
  if (o || cr) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : cr._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && ce(t) ? t.call(o && o.proxy) : t;
  }
}
function dh() {
  return !!(Ge || rt || cr);
}
function Il(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let a, i = !1;
  if (t)
    for (let l in t) {
      if (Gn(l))
        continue;
      const u = t[l];
      let c;
      r && _e(r, c = Ne(l)) ? s && s.includes(c) ? (a || (a = {}))[c] = u : n[c] = u : us(e.emitsOptions, l) || l in o && u === o[l] || (o[l] = u, i = !0);
    }
  if (s) {
    const l = xe(n), u = a || Ce;
    for (let c = 0; c < s.length; c++) {
      const d = s[c];
      n[d] = Ea(r, l, d, u[d], e, !_e(u, d));
    }
  }
  return i;
}
function Ea(e, t, n, o, r, s) {
  const a = e[n];
  if (a != null) {
    const i = _e(a, "default");
    if (i && o === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && ce(l)) {
        const { propsDefaults: u } = r;
        n in u ? o = u[n] : (Un(r), o = u[n] = l.call(null, t), Pn());
      } else
        o = l;
    }
    a[0] && (s && !i ? o = !1 : !a[1] || o !== "" && o !== Mt(n) || (o = !0));
  }
  return o;
}
function Uc(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, a = {}, i = [];
  let l = !1;
  if (!ce(e)) {
    const c = (d) => {
      l = !0;
      const [p, h] = Uc(d, t, !0);
      Se(a, p), h && i.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!s && !l)
    return Ie(e) && o.set(e, To), To;
  if (ne(s))
    for (let c = 0; c < s.length; c++) {
      const d = Ne(s[c]);
      Tl(d) && (a[d] = Ce);
    }
  else if (s)
    for (const c in s) {
      const d = Ne(c);
      if (Tl(d)) {
        const p = s[c], h = a[d] = ne(p) || ce(p) ? { type: p } : Se({}, p);
        if (h) {
          const f = $l(Boolean, h.type), g = $l(String, h.type);
          h[0] = f > -1, h[1] = g < 0 || f < g, (f > -1 || _e(h, "default")) && i.push(d);
        }
      }
    }
  const u = [a, i];
  return Ie(e) && o.set(e, u), u;
}
function Tl(e) {
  return e[0] !== "$";
}
function Ol(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Bl(e, t) {
  return Ol(e) === Ol(t);
}
function $l(e, t) {
  return ne(t) ? t.findIndex((n) => Bl(n, e)) : ce(t) && Bl(t, e) ? 0 : -1;
}
const Lc = (e) => e[0] === "_" || e === "$stable", ki = (e) => ne(e) ? e.map(Pt) : [Pt(e)], ph = (e, t, n) => {
  if (t._n)
    return t;
  const o = E((...r) => ki(t(...r)), n);
  return o._c = !1, o;
}, jc = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Lc(r))
      continue;
    const s = e[r];
    if (ce(s))
      t[r] = ph(0, s, o);
    else if (s != null) {
      const a = ki(s);
      t[r] = () => a;
    }
  }
}, zc = (e, t) => {
  const n = ki(t);
  e.slots.default = () => n;
}, fh = (e, t) => {
  if (32 & e.vnode.shapeFlag) {
    const n = t._;
    n ? (e.slots = xe(t), os(t, "_", n)) : jc(t, e.slots = {});
  } else
    e.slots = {}, t && zc(e, t);
  os(e.slots, Ps, 1);
}, hh = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, a = Ce;
  if (32 & o.shapeFlag) {
    const i = t._;
    i ? n && i === 1 ? s = !1 : (Se(r, t), n || i !== 1 || delete r._) : (s = !t.$stable, jc(t, r)), a = t;
  } else
    t && (zc(e, t), a = { default: 1 });
  if (s)
    for (const i in r)
      Lc(i) || a[i] != null || delete r[i];
};
function ps(e, t, n, o, r = !1) {
  if (ne(e))
    return void e.forEach((p, h) => ps(p, t && (ne(t) ? t[h] : t), n, o, r));
  if (Xn(o) && !r)
    return;
  const s = 4 & o.shapeFlag ? Ms(o.component) || o.component.proxy : o.el, a = r ? null : s, { i, r: l } = e, u = t && t.r, c = i.refs === Ce ? i.refs = {} : i.refs, d = i.setupState;
  if (u != null && u !== l && (he(u) ? (c[u] = null, _e(d, u) && (d[u] = null)) : Je(u) && (u.value = null)), ce(l))
    gn(l, i, 12, [a, c]);
  else {
    const p = he(l), h = Je(l);
    if (p || h) {
      const f = () => {
        if (e.f) {
          const g = p ? _e(d, l) ? d[l] : c[l] : l.value;
          r ? ne(g) && ei(g, s) : ne(g) ? g.includes(s) || g.push(s) : p ? (c[l] = [s], _e(d, l) && (d[l] = c[l])) : (l.value = [s], e.k && (c[e.k] = l.value));
        } else
          p ? (c[l] = a, _e(d, l) && (d[l] = a)) : h && (l.value = a, e.k && (c[e.k] = a));
      };
      a ? (f.id = -1, at(f, n)) : f();
    }
  }
}
let _n = !1;
const Rr = (e) => ((t) => t.namespaceURI.includes("svg") && t.tagName !== "foreignObject")(e) ? "svg" : ((t) => t.namespaceURI.includes("MathML"))(e) ? "mathml" : void 0, Dr = (e) => e.nodeType === 8;
function mh(e) {
  const { mt: t, p: n, o: { patchProp: o, createText: r, nextSibling: s, parentNode: a, remove: i, insert: l, createComment: u } } = e, c = (v, y, x, w, I, F = !1) => {
    const A = Dr(v) && v.data === "[", O = () => f(v, y, x, w, I, A), { type: M, ref: P, shapeFlag: T, patchFlag: W } = y;
    let G = v.nodeType;
    y.el = v, W === -2 && (F = !1, y.dynamicChildren = null);
    let X = null;
    switch (M) {
      case lo:
        G !== 3 ? y.children === "" ? (l(y.el = r(""), a(v), v), X = v) : X = O() : (v.data !== y.children && (_n = !0, v.data = y.children), X = s(v));
        break;
      case st:
        _(v) ? (X = s(v), b(y.el = v.content.firstChild, v, x)) : X = G !== 8 || A ? O() : s(v);
        break;
      case to:
        if (A && (G = (v = s(v)).nodeType), G === 1 || G === 3) {
          X = v;
          const ee = !y.children.length;
          for (let ie = 0; ie < y.staticCount; ie++)
            ee && (y.children += X.nodeType === 1 ? X.outerHTML : X.data), ie === y.staticCount - 1 && (y.anchor = X), X = s(X);
          return A ? s(X) : X;
        }
        O();
        break;
      case Oe:
        X = A ? h(v, y, x, w, I, F) : O();
        break;
      default:
        if (1 & T)
          X = G === 1 && y.type.toLowerCase() === v.tagName.toLowerCase() || _(v) ? d(v, y, x, w, I, F) : O();
        else if (6 & T) {
          y.slotScopeIds = I;
          const ee = a(v);
          if (X = A ? g(v) : Dr(v) && v.data === "teleport start" ? g(v, v.data, "teleport end") : s(v), t(y, ee, null, x, w, Rr(ee), F), Xn(y)) {
            let ie;
            A ? (ie = B(Oe), ie.anchor = X ? X.previousSibling : ee.lastChild) : ie = v.nodeType === 3 ? le("") : B("div"), ie.el = v, y.component.subTree = ie;
          }
        } else
          64 & T ? X = G !== 8 ? O() : y.type.hydrate(v, y, x, w, I, F, e, p) : 128 & T && (X = y.type.hydrate(v, y, x, w, Rr(a(v)), I, F, e, c));
    }
    return P != null && ps(P, null, w, y), X;
  }, d = (v, y, x, w, I, F) => {
    F = F || !!y.dynamicChildren;
    const { type: A, props: O, patchFlag: M, shapeFlag: P, dirs: T, transition: W } = y, G = A === "input" || A === "option";
    if (G || M !== -1) {
      T && en(y, null, x, "created");
      let X, ee = !1;
      if (_(v)) {
        ee = Hc(w, W) && x && x.vnode.props && x.vnode.props.appear;
        const ie = v.content.firstChild;
        ee && W.beforeEnter(ie), b(ie, v, x), y.el = v = ie;
      }
      if (16 & P && (!O || !O.innerHTML && !O.textContent)) {
        let ie = p(v.firstChild, y, v, x, w, I, F);
        for (; ie; ) {
          _n = !0;
          const ge = ie;
          ie = ie.nextSibling, i(ge);
        }
      } else
        8 & P && v.textContent !== y.children && (_n = !0, v.textContent = y.children);
      if (O)
        if (G || !F || 48 & M)
          for (const ie in O)
            (G && (ie.endsWith("value") || ie === "indeterminate") || fo(ie) && !Gn(ie) || ie[0] === ".") && o(v, ie, null, O[ie], void 0, void 0, x);
        else
          O.onClick && o(v, "onClick", null, O.onClick, void 0, void 0, x);
      (X = O && O.onVnodeBeforeMount) && _t(X, x, y), T && en(y, null, x, "beforeMount"), ((X = O && O.onVnodeMounted) || T || ee) && hc(() => {
        X && _t(X, x, y), ee && W.enter(v), T && en(y, null, x, "mounted");
      }, w);
    }
    return v.nextSibling;
  }, p = (v, y, x, w, I, F, A) => {
    A = A || !!y.dynamicChildren;
    const O = y.children, M = O.length;
    for (let P = 0; P < M; P++) {
      const T = A ? O[P] : O[P] = Pt(O[P]);
      if (v)
        v = c(v, T, w, I, F, A);
      else {
        if (T.type === lo && !T.children)
          continue;
        _n = !0, n(null, T, x, null, w, I, Rr(x), F);
      }
    }
    return v;
  }, h = (v, y, x, w, I, F) => {
    const { slotScopeIds: A } = y;
    A && (I = I ? I.concat(A) : A);
    const O = a(v), M = p(s(v), y, O, x, w, I, F);
    return M && Dr(M) && M.data === "]" ? s(y.anchor = M) : (_n = !0, l(y.anchor = u("]"), O, M), M);
  }, f = (v, y, x, w, I, F) => {
    if (_n = !0, y.el = null, F) {
      const M = g(v);
      for (; ; ) {
        const P = s(v);
        if (!P || P === M)
          break;
        i(P);
      }
    }
    const A = s(v), O = a(v);
    return i(v), n(null, y, O, A, x, w, Rr(O), I), A;
  }, g = (v, y = "[", x = "]") => {
    let w = 0;
    for (; v; )
      if ((v = s(v)) && Dr(v) && (v.data === y && w++, v.data === x)) {
        if (w === 0)
          return s(v);
        w--;
      }
    return v;
  }, b = (v, y, x) => {
    const w = y.parentNode;
    w && w.replaceChild(v, y);
    let I = x;
    for (; I; )
      I.vnode.el === y && (I.vnode.el = I.subTree.el = v), I = I.parent;
  }, _ = (v) => v.nodeType === 1 && v.tagName.toLowerCase() === "template";
  return [(v, y) => {
    if (!y.hasChildNodes())
      return n(null, v, y), ls(), void (y._vnode = v);
    _n = !1, c(y.firstChild, v, null, null, null), ls(), y._vnode = v, _n && console.error("Hydration completed but contains mismatches.");
  }, c];
}
const at = hc;
function Vc(e) {
  return Wc(e);
}
function qc(e) {
  return Wc(e, mh);
}
function Wc(e, t) {
  Jp().__VUE__ = !0;
  const { insert: n, remove: o, patchProp: r, createElement: s, createText: a, createComment: i, setText: l, setElementText: u, parentNode: c, nextSibling: d, setScopeId: p = ot, insertStaticContent: h } = e, f = (k, C, $, L = null, R = null, U = null, Q = void 0, H = null, q = !!C.dynamicChildren) => {
    if (k === C)
      return;
    k && !Ht(k, C) && (L = fe(k), Ue(k, R, U, !0), k = null), C.patchFlag === -2 && (q = !1, C.dynamicChildren = null);
    const { type: S, ref: D, shapeFlag: Y } = C;
    switch (S) {
      case lo:
        g(k, C, $, L);
        break;
      case st:
        b(k, C, $, L);
        break;
      case to:
        k == null && _(C, $, L, Q);
        break;
      case Oe:
        O(k, C, $, L, R, U, Q, H, q);
        break;
      default:
        1 & Y ? v(k, C, $, L, R, U, Q, H, q) : 6 & Y ? M(k, C, $, L, R, U, Q, H, q) : (64 & Y || 128 & Y) && S.process(k, C, $, L, R, U, Q, H, q, we);
    }
    D != null && R && ps(D, k && k.ref, U, C || k, !C);
  }, g = (k, C, $, L) => {
    if (k == null)
      n(C.el = a(C.children), $, L);
    else {
      const R = C.el = k.el;
      C.children !== k.children && l(R, C.children);
    }
  }, b = (k, C, $, L) => {
    k == null ? n(C.el = i(C.children || ""), $, L) : C.el = k.el;
  }, _ = (k, C, $, L) => {
    [k.el, k.anchor] = h(k.children, C, $, L, k.el, k.anchor);
  }, v = (k, C, $, L, R, U, Q, H, q) => {
    C.type === "svg" ? Q = "svg" : C.type === "math" && (Q = "mathml"), k == null ? y(C, $, L, R, U, Q, H, q) : I(k, C, R, U, Q, H, q);
  }, y = (k, C, $, L, R, U, Q, H) => {
    let q, S;
    const { props: D, shapeFlag: Y, transition: J, dirs: z } = k;
    if (q = k.el = s(k.type, U, D && D.is, D), 8 & Y ? u(q, k.children) : 16 & Y && w(k.children, q, null, L, R, Zs(k, U), Q, H), z && en(k, null, L, "created"), x(q, k, k.scopeId, Q, L), D) {
      for (const se in D)
        se === "value" || Gn(se) || r(q, se, null, D[se], U, k.children, L, R, pe);
      "value" in D && r(q, "value", null, D.value, U), (S = D.onVnodeBeforeMount) && _t(S, L, k);
    }
    z && en(k, null, L, "beforeMount");
    const te = Hc(R, J);
    te && J.beforeEnter(q), n(q, C, $), ((S = D && D.onVnodeMounted) || te || z) && at(() => {
      S && _t(S, L, k), te && J.enter(q), z && en(k, null, L, "mounted");
    }, R);
  }, x = (k, C, $, L, R) => {
    if ($ && p(k, $), L)
      for (let U = 0; U < L.length; U++)
        p(k, L[U]);
    if (R && C === R.subTree) {
      const U = R.vnode;
      x(k, U, U.scopeId, U.slotScopeIds, R.parent);
    }
  }, w = (k, C, $, L, R, U, Q, H, q = 0) => {
    for (let S = q; S < k.length; S++) {
      const D = k[S] = H ? Rn(k[S]) : Pt(k[S]);
      f(null, D, C, $, L, R, U, Q, H);
    }
  }, I = (k, C, $, L, R, U, Q) => {
    const H = C.el = k.el;
    let { patchFlag: q, dynamicChildren: S, dirs: D } = C;
    q |= 16 & k.patchFlag;
    const Y = k.props || Ce, J = C.props || Ce;
    let z;
    if ($ && zn($, !1), (z = J.onVnodeBeforeUpdate) && _t(z, $, C, k), D && en(C, k, $, "beforeUpdate"), $ && zn($, !0), S ? F(k.dynamicChildren, S, H, $, L, Zs(C, R), U) : Q || X(k, C, H, null, $, L, Zs(C, R), U, !1), q > 0) {
      if (16 & q)
        A(H, C, Y, J, $, L, R);
      else if (2 & q && Y.class !== J.class && r(H, "class", null, J.class, R), 4 & q && r(H, "style", Y.style, J.style, R), 8 & q) {
        const te = C.dynamicProps;
        for (let se = 0; se < te.length; se++) {
          const de = te[se], ye = Y[de], Ae = J[de];
          Ae === ye && de !== "value" || r(H, de, ye, Ae, R, k.children, $, L, pe);
        }
      }
      1 & q && k.children !== C.children && u(H, C.children);
    } else
      Q || S != null || A(H, C, Y, J, $, L, R);
    ((z = J.onVnodeUpdated) || D) && at(() => {
      z && _t(z, $, C, k), D && en(C, k, $, "updated");
    }, L);
  }, F = (k, C, $, L, R, U, Q) => {
    for (let H = 0; H < C.length; H++) {
      const q = k[H], S = C[H], D = q.el && (q.type === Oe || !Ht(q, S) || 70 & q.shapeFlag) ? c(q.el) : $;
      f(q, S, D, null, L, R, U, Q, !0);
    }
  }, A = (k, C, $, L, R, U, Q) => {
    if ($ !== L) {
      if ($ !== Ce)
        for (const H in $)
          Gn(H) || H in L || r(k, H, $[H], null, Q, C.children, R, U, pe);
      for (const H in L) {
        if (Gn(H))
          continue;
        const q = L[H], S = $[H];
        q !== S && H !== "value" && r(k, H, S, q, Q, C.children, R, U, pe);
      }
      "value" in L && r(k, "value", $.value, L.value, Q);
    }
  }, O = (k, C, $, L, R, U, Q, H, q) => {
    const S = C.el = k ? k.el : a(""), D = C.anchor = k ? k.anchor : a("");
    let { patchFlag: Y, dynamicChildren: J, slotScopeIds: z } = C;
    z && (H = H ? H.concat(z) : z), k == null ? (n(S, $, L), n(D, $, L), w(C.children, $, D, R, U, Q, H, q)) : Y > 0 && 64 & Y && J && k.dynamicChildren ? (F(k.dynamicChildren, J, $, R, U, Q, H), (C.key != null || R && C === R.subTree) && _i(k, C, !0)) : X(k, C, $, D, R, U, Q, H, q);
  }, M = (k, C, $, L, R, U, Q, H, q) => {
    C.slotScopeIds = H, k == null ? 512 & C.shapeFlag ? R.ctx.activate(C, $, L, Q, q) : P(C, $, L, R, U, Q, q) : T(k, C, q);
  }, P = (k, C, $, L, R, U, Q) => {
    const H = k.component = function(q, S, D) {
      const Y = q.type, J = (S ? S.appContext : q.appContext) || yh, z = { uid: bh++, vnode: q, type: Y, parent: S, appContext: J, root: null, next: null, subTree: null, effect: null, update: null, scope: new ri(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: S ? S.provides : Object.create(J.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Uc(Y, J), emitsOptions: uc(Y, J), emit: null, emitted: null, propsDefaults: Ce, inheritAttrs: Y.inheritAttrs, ctx: Ce, data: Ce, props: Ce, attrs: Ce, slots: Ce, refs: Ce, setupState: Ce, setupContext: null, attrsProxy: null, slotsProxy: null, suspense: D, suspenseId: D ? D.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
      return z.ctx = { _: z }, z.root = S ? S.root : z, z.emit = Nf.bind(null, z), q.ce && q.ce(z), z;
    }(k, L, R);
    if (yr(k) && (H.ctx.renderer = we), function(q, S = !1) {
      S && Ta(S);
      const { props: D, children: Y } = q.vnode, J = Yc(q);
      (function(z, te, se, de = !1) {
        const ye = {}, Ae = {};
        os(Ae, Ps, 1), z.propsDefaults = /* @__PURE__ */ Object.create(null), Il(z, te, ye, Ae);
        for (const ut in z.propsOptions[0])
          ut in ye || (ye[ut] = void 0);
        z.props = se ? de ? ye : ec(ye) : z.type.props ? ye : Ae, z.attrs = Ae;
      })(q, D, J, S), fh(q, Y), J && function(z, te) {
        const se = z.type;
        z.accessCache = /* @__PURE__ */ Object.create(null), z.proxy = Os(new Proxy(z.ctx, Ca));
        const { setup: de } = se;
        if (de) {
          const ye = z.setupContext = de.length > 1 ? ed(z) : null;
          Un(z), ro();
          const Ae = gn(de, z, 0, [z.props, ye]);
          if (so(), Pn(), ti(Ae)) {
            if (Ae.then(Pn, Pn), te)
              return Ae.then((ut) => {
                Ba(z, ut, te);
              }).catch((ut) => {
                vo(ut, z, 0);
              });
            z.asyncDep = Ae;
          } else
            Ba(z, Ae, te);
        } else
          Xc(z, te);
      }(q, S), S && Ta(!1);
    }(H), H.asyncDep) {
      if (R && R.registerDep(H, W), !k.el) {
        const q = H.subTree = B(st);
        b(null, q, C, $);
      }
    } else
      W(H, k, C, $, R, U, Q);
  }, T = (k, C, $) => {
    const L = C.component = k.component;
    if (function(R, U, Q) {
      const { props: H, children: q, component: S } = R, { props: D, children: Y, patchFlag: J } = U, z = S.emitsOptions;
      if (U.dirs || U.transition)
        return !0;
      if (!(Q && J >= 0))
        return !(!q && !Y || Y && Y.$stable) || H !== D && (H ? !D || wl(H, D, z) : !!D);
      if (1024 & J)
        return !0;
      if (16 & J)
        return H ? wl(H, D, z) : !!D;
      if (8 & J) {
        const te = U.dynamicProps;
        for (let se = 0; se < te.length; se++) {
          const de = te[se];
          if (D[de] !== H[de] && !us(z, de))
            return !0;
        }
      }
      return !1;
    }(k, C, $)) {
      if (L.asyncDep && !L.asyncResolved)
        return void G(L, C, $);
      L.next = C, function(R) {
        const U = ht.indexOf(R);
        U > tn && ht.splice(U, 1);
      }(L.update), L.effect.dirty = !0, L.update();
    } else
      C.el = k.el, L.vnode = C;
  }, W = (k, C, $, L, R, U, Q) => {
    const H = () => {
      if (k.isMounted) {
        let { next: D, bu: Y, u: J, parent: z, vnode: te } = k;
        {
          const ut = Jc(k);
          if (ut)
            return D && (D.el = te.el, G(k, D, Q)), void ut.asyncDep.then(() => {
              k.isUnmounted || H();
            });
        }
        let se, de = D;
        zn(k, !1), D ? (D.el = te.el, G(k, D, Q)) : D = te, Y && Bo(Y), (se = D.props && D.props.onVnodeBeforeUpdate) && _t(se, z, D, te), zn(k, !0);
        const ye = Ws(k), Ae = k.subTree;
        k.subTree = ye, f(Ae, ye, c(Ae.el), fe(Ae), k, R, U), D.el = ye.el, de === null && vi(k, ye.el), J && at(J, R), (se = D.props && D.props.onVnodeUpdated) && at(() => _t(se, z, D, te), R);
      } else {
        let D;
        const { el: Y, props: J } = C, { bm: z, m: te, parent: se } = k, de = Xn(C);
        if (zn(k, !1), z && Bo(z), !de && (D = J && J.onVnodeBeforeMount) && _t(D, se, C), zn(k, !0), Y && $e) {
          const ye = () => {
            k.subTree = Ws(k), $e(Y, k.subTree, k, R, null);
          };
          de ? C.type.__asyncLoader().then(() => !k.isUnmounted && ye()) : ye();
        } else {
          const ye = k.subTree = Ws(k);
          f(null, ye, $, L, k, R, U), C.el = ye.el;
        }
        if (te && at(te, R), !de && (D = J && J.onVnodeMounted)) {
          const ye = C;
          at(() => _t(D, se, ye), R);
        }
        (256 & C.shapeFlag || se && Xn(se.vnode) && 256 & se.vnode.shapeFlag) && k.a && at(k.a, R), k.isMounted = !0, C = $ = L = null;
      }
    }, q = k.effect = new Do(H, ot, () => Bs(S), k.scope), S = k.update = () => {
      q.dirty && q.run();
    };
    S.id = k.uid, zn(k, !0), S();
  }, G = (k, C, $) => {
    C.component = k;
    const L = k.vnode.props;
    k.vnode = C, k.next = null, function(R, U, Q, H) {
      const { props: q, attrs: S, vnode: { patchFlag: D } } = R, Y = xe(q), [J] = R.propsOptions;
      let z = !1;
      if (!(H || D > 0) || 16 & D) {
        let te;
        Il(R, U, q, S) && (z = !0);
        for (const se in Y)
          U && (_e(U, se) || (te = Mt(se)) !== se && _e(U, te)) || (J ? !Q || Q[se] === void 0 && Q[te] === void 0 || (q[se] = Ea(J, Y, se, void 0, R, !0)) : delete q[se]);
        if (S !== Y)
          for (const se in S)
            U && _e(U, se) || (delete S[se], z = !0);
      } else if (8 & D) {
        const te = R.vnode.dynamicProps;
        for (let se = 0; se < te.length; se++) {
          let de = te[se];
          if (us(R.emitsOptions, de))
            continue;
          const ye = U[de];
          if (J)
            if (_e(S, de))
              ye !== S[de] && (S[de] = ye, z = !0);
            else {
              const Ae = Ne(de);
              q[Ae] = Ea(J, Y, Ae, ye, R, !1);
            }
          else
            ye !== S[de] && (S[de] = ye, z = !0);
        }
      }
      z && vn(R, "set", "$attrs");
    }(k, C.props, L, $), hh(k, C.children, $), ro(), bl(k), so();
  }, X = (k, C, $, L, R, U, Q, H, q = !1) => {
    const S = k && k.children, D = k ? k.shapeFlag : 0, Y = C.children, { patchFlag: J, shapeFlag: z } = C;
    if (J > 0) {
      if (128 & J)
        return void ie(S, Y, $, L, R, U, Q, H, q);
      if (256 & J)
        return void ee(S, Y, $, L, R, U, Q, H, q);
    }
    8 & z ? (16 & D && pe(S, R, U), Y !== S && u($, Y)) : 16 & D ? 16 & z ? ie(S, Y, $, L, R, U, Q, H, q) : pe(S, R, U, !0) : (8 & D && u($, ""), 16 & z && w(Y, $, L, R, U, Q, H, q));
  }, ee = (k, C, $, L, R, U, Q, H, q) => {
    const S = (k = k || To).length, D = (C = C || To).length, Y = Math.min(S, D);
    let J;
    for (J = 0; J < Y; J++) {
      const z = C[J] = q ? Rn(C[J]) : Pt(C[J]);
      f(k[J], z, $, null, R, U, Q, H, q);
    }
    S > D ? pe(k, R, U, !0, !1, Y) : w(C, $, L, R, U, Q, H, q, Y);
  }, ie = (k, C, $, L, R, U, Q, H, q) => {
    let S = 0;
    const D = C.length;
    let Y = k.length - 1, J = D - 1;
    for (; S <= Y && S <= J; ) {
      const z = k[S], te = C[S] = q ? Rn(C[S]) : Pt(C[S]);
      if (!Ht(z, te))
        break;
      f(z, te, $, null, R, U, Q, H, q), S++;
    }
    for (; S <= Y && S <= J; ) {
      const z = k[Y], te = C[J] = q ? Rn(C[J]) : Pt(C[J]);
      if (!Ht(z, te))
        break;
      f(z, te, $, null, R, U, Q, H, q), Y--, J--;
    }
    if (S > Y) {
      if (S <= J) {
        const z = J + 1, te = z < D ? C[z].el : L;
        for (; S <= J; )
          f(null, C[S] = q ? Rn(C[S]) : Pt(C[S]), $, te, R, U, Q, H, q), S++;
      }
    } else if (S > J)
      for (; S <= Y; )
        Ue(k[S], R, U, !0), S++;
    else {
      const z = S, te = S, se = /* @__PURE__ */ new Map();
      for (S = te; S <= J; S++) {
        const Le = C[S] = q ? Rn(C[S]) : Pt(C[S]);
        Le.key != null && se.set(Le.key, S);
      }
      let de, ye = 0;
      const Ae = J - te + 1;
      let ut = !1, xo = 0;
      const wn = new Array(Ae);
      for (S = 0; S < Ae; S++)
        wn[S] = 0;
      for (S = z; S <= Y; S++) {
        const Le = k[S];
        if (ye >= Ae) {
          Ue(Le, R, U, !0);
          continue;
        }
        let ct;
        if (Le.key != null)
          ct = se.get(Le.key);
        else
          for (de = te; de <= J; de++)
            if (wn[de - te] === 0 && Ht(Le, C[de])) {
              ct = de;
              break;
            }
        ct === void 0 ? Ue(Le, R, U, !0) : (wn[ct - te] = S + 1, ct >= xo ? xo = ct : ut = !0, f(Le, C[ct], $, null, R, U, Q, H, q), ye++);
      }
      const Xt = ut ? function(Le) {
        const ct = Le.slice(), je = [0];
        let It, ko, Dt, xn, Cr;
        const jp = Le.length;
        for (It = 0; It < jp; It++) {
          const Sr = Le[It];
          if (Sr !== 0) {
            if (ko = je[je.length - 1], Le[ko] < Sr) {
              ct[It] = ko, je.push(It);
              continue;
            }
            for (Dt = 0, xn = je.length - 1; Dt < xn; )
              Cr = Dt + xn >> 1, Le[je[Cr]] < Sr ? Dt = Cr + 1 : xn = Cr;
            Sr < Le[je[Dt]] && (Dt > 0 && (ct[It] = je[Dt - 1]), je[Dt] = It);
          }
        }
        for (Dt = je.length, xn = je[Dt - 1]; Dt-- > 0; )
          je[Dt] = xn, xn = ct[xn];
        return je;
      }(wn) : To;
      for (de = Xt.length - 1, S = Ae - 1; S >= 0; S--) {
        const Le = te + S, ct = C[Le], je = Le + 1 < D ? C[Le + 1].el : L;
        wn[S] === 0 ? f(null, ct, $, je, R, U, Q, H, q) : ut && (de < 0 || S !== Xt[de] ? ge(ct, $, je, 2) : de--);
      }
    }
  }, ge = (k, C, $, L, R = null) => {
    const { el: U, type: Q, transition: H, children: q, shapeFlag: S } = k;
    if (6 & S)
      return void ge(k.component.subTree, C, $, L);
    if (128 & S)
      return void k.suspense.move(C, $, L);
    if (64 & S)
      return void Q.move(k, C, $, we);
    if (Q === Oe) {
      n(U, C, $);
      for (let D = 0; D < q.length; D++)
        ge(q[D], C, $, L);
      return void n(k.anchor, C, $);
    }
    if (Q === to)
      return void (({ el: D, anchor: Y }, J, z) => {
        let te;
        for (; D && D !== Y; )
          te = d(D), n(D, J, z), D = te;
        n(Y, J, z);
      })(k, C, $);
    if (L !== 2 && 1 & S && H)
      if (L === 0)
        H.beforeEnter(U), n(U, C, $), at(() => H.enter(U), R);
      else {
        const { leave: D, delayLeave: Y, afterLeave: J } = H, z = () => n(U, C, $), te = () => {
          D(U, () => {
            z(), J && J();
          });
        };
        Y ? Y(U, z, te) : te();
      }
    else
      n(U, C, $);
  }, Ue = (k, C, $, L = !1, R = !1) => {
    const { type: U, props: Q, ref: H, children: q, dynamicChildren: S, shapeFlag: D, patchFlag: Y, dirs: J } = k;
    if (H != null && ps(H, null, $, k, !0), 256 & D)
      return void C.ctx.deactivate(k);
    const z = 1 & D && J, te = !Xn(k);
    let se;
    if (te && (se = Q && Q.onVnodeBeforeUnmount) && _t(se, C, k), 6 & D)
      Zt(k.component, $, L);
    else {
      if (128 & D)
        return void k.suspense.unmount($, L);
      z && en(k, null, C, "beforeUnmount"), 64 & D ? k.type.remove(k, C, $, R, we, L) : S && (U !== Oe || Y > 0 && 64 & Y) ? pe(S, C, $, !1, !0) : (U === Oe && 384 & Y || !R && 16 & D) && pe(q, C, $), L && mt(k);
    }
    (te && (se = Q && Q.onVnodeUnmounted) || z) && at(() => {
      se && _t(se, C, k), z && en(k, null, C, "unmounted");
    }, $);
  }, mt = (k) => {
    const { type: C, el: $, anchor: L, transition: R } = k;
    if (C === Oe)
      return void bt($, L);
    if (C === to)
      return void (({ el: Q, anchor: H }) => {
        let q;
        for (; Q && Q !== H; )
          q = d(Q), o(Q), Q = q;
        o(H);
      })(k);
    const U = () => {
      o($), R && !R.persisted && R.afterLeave && R.afterLeave();
    };
    if (1 & k.shapeFlag && R && !R.persisted) {
      const { leave: Q, delayLeave: H } = R, q = () => Q($, U);
      H ? H(k.el, U, q) : q();
    } else
      U();
  }, bt = (k, C) => {
    let $;
    for (; k !== C; )
      $ = d(k), o(k), k = $;
    o(C);
  }, Zt = (k, C, $) => {
    const { bum: L, scope: R, update: U, subTree: Q, um: H } = k;
    L && Bo(L), R.stop(), U && (U.active = !1, Ue(Q, k, C, $)), H && at(H, C), at(() => {
      k.isUnmounted = !0;
    }, C), C && C.pendingBranch && !C.isUnmounted && k.asyncDep && !k.asyncResolved && k.suspenseId === C.pendingId && (C.deps--, C.deps === 0 && C.resolve());
  }, pe = (k, C, $, L = !1, R = !1, U = 0) => {
    for (let Q = U; Q < k.length; Q++)
      Ue(k[Q], C, $, L, R);
  }, fe = (k) => 6 & k.shapeFlag ? fe(k.component.subTree) : 128 & k.shapeFlag ? k.suspense.next() : d(k.anchor || k.el), K = (k, C, $) => {
    k == null ? C._vnode && Ue(C._vnode, null, null, !0) : f(C._vnode || null, k, C, null, null, null, $), bl(), ls(), C._vnode = k;
  }, we = { p: f, um: Ue, m: ge, r: mt, mt: P, mc: w, pc: X, pbc: F, n: fe, o: e };
  let ke, $e;
  return t && ([ke, $e] = t(we)), { render: K, hydrate: ke, createApp: ch(K, ke) };
}
function Zs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function zn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Hc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function _i(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (ne(o) && ne(r))
    for (let s = 0; s < o.length; s++) {
      const a = o[s];
      let i = r[s];
      1 & i.shapeFlag && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[s] = Rn(r[s]), i.el = a.el), n || _i(a, i)), i.type === lo && (i.el = a.el);
    }
}
function Jc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Jc(t);
}
const Zo = (e) => e && (e.disabled || e.disabled === ""), Rl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Dl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Xs = (e, t) => {
  const n = e && e.to;
  return he(n) ? t ? t(n) : null : n;
};
function Nr(e, t, n, { o: { insert: o }, m: r }, s = 2) {
  s === 0 && o(e.targetAnchor, t, n);
  const { el: a, anchor: i, shapeFlag: l, children: u, props: c } = e, d = s === 2;
  if (d && o(a, t, n), (!d || Zo(c)) && 16 & l)
    for (let p = 0; p < u.length; p++)
      r(u[p], t, n, 2);
  d && o(i, t, n);
}
const Ci = { name: "Teleport", __isTeleport: !0, process(e, t, n, o, r, s, a, i, l, u) {
  const { mc: c, pc: d, pbc: p, o: { insert: h, querySelector: f, createText: g } } = u, b = Zo(t.props);
  let { shapeFlag: _, children: v, dynamicChildren: y } = t;
  if (e == null) {
    const x = t.el = g(""), w = t.anchor = g("");
    h(x, n, o), h(w, n, o);
    const I = t.target = Xs(t.props, f), F = t.targetAnchor = g("");
    I && (h(F, I), a === "svg" || Rl(I) ? a = "svg" : (a === "mathml" || Dl(I)) && (a = "mathml"));
    const A = (O, M) => {
      16 & _ && c(v, O, M, r, s, a, i, l);
    };
    b ? A(n, w) : I && A(I, F);
  } else {
    t.el = e.el;
    const x = t.anchor = e.anchor, w = t.target = e.target, I = t.targetAnchor = e.targetAnchor, F = Zo(e.props), A = F ? n : w, O = F ? x : I;
    if (a === "svg" || Rl(w) ? a = "svg" : (a === "mathml" || Dl(w)) && (a = "mathml"), y ? (p(e.dynamicChildren, y, A, r, s, a, i), _i(e, t, !0)) : l || d(e, t, A, O, r, s, a, i, !1), b)
      F ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Nr(t, n, x, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const M = t.target = Xs(t.props, f);
      M && Nr(t, M, null, u, 0);
    } else
      F && Nr(t, w, I, u, 1);
  }
  Nl(t);
}, remove(e, t, n, o, { um: r, o: { remove: s } }, a) {
  const { shapeFlag: i, children: l, anchor: u, targetAnchor: c, target: d, props: p } = e;
  if (d && s(c), a && s(u), 16 & i) {
    const h = a || !Zo(p);
    for (let f = 0; f < l.length; f++) {
      const g = l[f];
      r(g, t, n, h, !!g.dynamicChildren);
    }
  }
}, move: Nr, hydrate: function(e, t, n, o, r, s, { o: { nextSibling: a, parentNode: i, querySelector: l } }, u) {
  const c = t.target = Xs(t.props, l);
  if (c) {
    const d = c._lpa || c.firstChild;
    if (16 & t.shapeFlag)
      if (Zo(t.props))
        t.anchor = u(a(e), t, i(e), n, o, r, s), t.targetAnchor = d;
      else {
        t.anchor = a(e);
        let p = d;
        for (; p; )
          if (p = a(p), p && p.nodeType === 8 && p.data === "teleport anchor") {
            t.targetAnchor = p, c._lpa = t.targetAnchor && a(t.targetAnchor);
            break;
          }
        u(d, t, c, n, o, r, s);
      }
    Nl(t);
  }
  return t.anchor && a(t.anchor);
} };
function Nl(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const Oe = Symbol.for("v-fgt"), lo = Symbol.for("v-txt"), st = Symbol.for("v-cmt"), to = Symbol.for("v-stc"), nr = [];
let Ct = null;
function N(e = !1) {
  nr.push(Ct = e ? null : []);
}
function Kc() {
  nr.pop(), Ct = nr[nr.length - 1] || null;
}
let uo = 1;
function Ia(e) {
  uo += e;
}
function Gc(e) {
  return e.dynamicChildren = uo > 0 ? Ct || To : null, Kc(), uo > 0 && Ct && Ct.push(e), e;
}
function ue(e, t, n, o, r, s) {
  return Gc(V(e, t, n, o, r, s, !0));
}
function re(e, t, n, o, r) {
  return Gc(B(e, t, n, o, r, !0));
}
function co(e) {
  return !!e && e.__v_isVNode === !0;
}
function Ht(e, t) {
  return e.type === t.type && e.key === t.key;
}
function vh(e) {
}
const Ps = "__vInternal", Qc = ({ key: e }) => e ?? null, Xr = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? he(e) || Je(e) || ce(e) ? { i: rt, r: e, k: t, f: !!n } : e : null);
function V(e, t = null, n = null, o = 0, r = null, s = e === Oe ? 0 : 1, a = !1, i = !1) {
  const l = { __v_isVNode: !0, __v_skip: !0, type: e, props: t, key: t && Qc(t), ref: t && Xr(t), scopeId: $s, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: s, patchFlag: o, dynamicProps: r, dynamicChildren: null, appContext: null, ctx: rt };
  return i ? (Si(l, n), 128 & s && e.normalize(l)) : n && (l.shapeFlag |= he(n) ? 8 : 16), uo > 0 && !a && Ct && (l.patchFlag > 0 || 6 & s) && l.patchFlag !== 32 && Ct.push(l), l;
}
const B = function(e, t = null, n = null, o = 0, r = null, s = !1) {
  if (e && e !== pc || (e = st), co(e)) {
    const l = Vt(e, t, !0);
    return n && Si(l, n), uo > 0 && !s && Ct && (6 & l.shapeFlag ? Ct[Ct.indexOf(e)] = l : Ct.push(l)), l.patchFlag |= -2, l;
  }
  a = e, ce(a) && "__vccOpts" in a && (e = e.__vccOpts);
  var a;
  if (t) {
    t = jn(t);
    let { class: l, style: u } = t;
    l && !he(l) && (t.class = qe(l)), Ie(u) && (ci(u) && !ne(u) && (u = Se({}, u)), t.style = on(u));
  }
  const i = he(e) ? 1 : fc(e) ? 128 : ((l) => l.__isTeleport)(e) ? 64 : Ie(e) ? 4 : ce(e) ? 2 : 0;
  return V(e, t, n, o, r, i, s, !0);
};
function jn(e) {
  return e ? ci(e) || Ps in e ? Se({}, e) : e : null;
}
function Vt(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: a } = e, i = t ? be(o || {}, t) : o;
  return { __v_isVNode: !0, __v_skip: !0, type: e.type, props: i, key: i && Qc(i), ref: t && t.ref ? n && r ? ne(r) ? r.concat(Xr(t)) : [r, Xr(t)] : Xr(t) : r, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: a, target: e.target, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== Oe ? s === -1 ? 16 : 16 | s : s, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: e.transition, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Vt(e.ssContent), ssFallback: e.ssFallback && Vt(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
}
function le(e = " ", t = 0) {
  return B(lo, null, e, t);
}
function gh(e, t) {
  const n = B(to, null, e);
  return n.staticCount = t, n;
}
function Xe(e = "", t = !1) {
  return t ? (N(), re(st, null, e)) : B(st, null, e);
}
function Pt(e) {
  return e == null || typeof e == "boolean" ? B(st) : ne(e) ? B(Oe, null, e.slice()) : typeof e == "object" ? Rn(e) : B(lo, null, String(e));
}
function Rn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vt(e);
}
function Si(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (ne(t))
    n = 16;
  else if (typeof t == "object") {
    if (65 & o) {
      const r = t.default;
      return void (r && (r._c && (r._d = !1), Si(e, r()), r._c && (r._d = !0)));
    }
    {
      n = 32;
      const r = t._;
      r || Ps in t ? r === 3 && rt && (rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = rt;
    }
  } else
    ce(t) ? (t = { default: t, _ctx: rt }, n = 32) : (t = String(t), 64 & o ? (n = 16, t = [le(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function be(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = qe([t.class, o.class]));
      else if (r === "style")
        t.style = on([t.style, o.style]);
      else if (fo(r)) {
        const s = t[r], a = o[r];
        !a || s === a || ne(s) && s.includes(a) || (t[r] = s ? [].concat(s, a) : a);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function _t(e, t, n, o = null) {
  zt(e, t, 7, [n, o]);
}
const yh = Mc();
let bh = 0, Ge = null;
const Me = () => Ge || rt;
let Ai, Ta;
Ai = (e) => {
  Ge = e;
}, Ta = (e) => {
  Ei = e;
};
const Un = (e) => {
  Ai(e), e.scope.on();
}, Pn = () => {
  Ge && Ge.scope.off(), Ai(null);
};
function Yc(e) {
  return 4 & e.vnode.shapeFlag;
}
let fs, Oa, Ei = !1;
function Ba(e, t, n) {
  ce(t) ? e.render = t : Ie(t) && (e.setupState = fi(t)), Xc(e, n);
}
function Zc(e) {
  fs = e, Oa = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Qf));
  };
}
const wh = () => !fs;
function Xc(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && fs && !o.render) {
      const r = o.template || xi(e).template;
      if (r) {
        const { isCustomElement: s, compilerOptions: a } = e.appContext.config, { delimiters: i, compilerOptions: l } = o, u = Se(Se({ isCustomElement: s, delimiters: i }, a), l);
        o.render = fs(r, u);
      }
    }
    e.render = o.render || ot, Oa && Oa(e);
  }
  Un(e), ro();
  try {
    ih(e);
  } finally {
    so(), Pn();
  }
}
function ed(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { get attrs() {
    return function(n) {
      return n.attrsProxy || (n.attrsProxy = new Proxy(n.attrs, { get: (o, r) => (Et(n, 0, "$attrs"), o[r]) }));
    }(e);
  }, slots: e.slots, emit: e.emit, expose: t };
}
function Ms(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(fi(Os(e.exposed)), { get: (t, n) => n in t ? t[n] : n in tr ? tr[n](e) : void 0, has: (t, n) => n in t || n in tr }));
}
function $a(e, t = !0) {
  return ce(e) ? e.displayName || e.name : e.name || t && e.__name;
}
const ae = (e, t) => function(n, o, r = !1) {
  let s, a;
  const i = ce(n);
  return i ? (s = n, a = ot) : (s = n.get, a = n.set), new tc(s, a, i || !a, r);
}(e, 0, Ei);
function At(e, t, n) {
  const o = arguments.length;
  return o === 2 ? Ie(t) && !ne(t) ? co(t) ? B(e, null, [t]) : B(e, t) : B(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && co(n) && (n = [n]), B(e, t, n));
}
function xh() {
}
function kh(e, t, n, o) {
  const r = n[o];
  if (r && td(r, e))
    return r;
  const s = t();
  return s.memo = e.slice(), n[o] = s;
}
function td(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (Gt(n[o], t[o]))
      return !1;
  return uo > 0 && Ct && Ct.push(e), !0;
}
const nd = "3.4.3", _h = ot, Ch = void 0, Sh = ot, Dn = typeof document < "u" ? document : null, Fl = Dn && Dn.createElement("template"), Ah = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, o) => {
  const r = t === "svg" ? Dn.createElementNS("http://www.w3.org/2000/svg", e) : t === "mathml" ? Dn.createElementNS("http://www.w3.org/1998/Math/MathML", e) : Dn.createElement(e, n ? { is: n } : void 0);
  return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
}, createText: (e) => Dn.createTextNode(e), createComment: (e) => Dn.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => Dn.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, o, r, s) {
  const a = n ? n.previousSibling : t.lastChild;
  if (r && (r === s || r.nextSibling))
    for (; t.insertBefore(r.cloneNode(!0), n), r !== s && (r = r.nextSibling); )
      ;
  else {
    Fl.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
    const i = Fl.content;
    if (o === "svg" || o === "mathml") {
      const l = i.firstChild;
      for (; l.firstChild; )
        i.appendChild(l.firstChild);
      i.removeChild(l);
    }
    t.insertBefore(i, n);
  }
  return [a ? a.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, Cn = "transition", Ho = "animation", Fo = Symbol("_vtc"), Ii = (e, { slots: t }) => At(wc, rd(e), t);
Ii.displayName = "Transition";
const od = { name: String, type: String, css: { type: Boolean, default: !0 }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Eh = Ii.props = Se({}, wi, od), Vn = (e, t = []) => {
  ne(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Pl = (e) => !!e && (ne(e) ? e.some((t) => t.length > 1) : e.length > 1);
function rd(e) {
  const t = {};
  for (const T in e)
    T in od || (t[T] = e[T]);
  if (e.css === !1)
    return t;
  const { name: n = "v", type: o, duration: r, enterFromClass: s = `${n}-enter-from`, enterActiveClass: a = `${n}-enter-active`, enterToClass: i = `${n}-enter-to`, appearFromClass: l = s, appearActiveClass: u = a, appearToClass: c = i, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: h = `${n}-leave-to` } = e, f = function(T) {
    if (T == null)
      return null;
    if (Ie(T))
      return [ea(T.enter), ea(T.leave)];
    {
      const W = ea(T);
      return [W, W];
    }
  }(r), g = f && f[0], b = f && f[1], { onBeforeEnter: _, onEnter: v, onEnterCancelled: y, onLeave: x, onLeaveCancelled: w, onBeforeAppear: I = _, onAppear: F = v, onAppearCancelled: A = y } = t, O = (T, W, G) => {
    Tn(T, W ? c : i), Tn(T, W ? u : a), G && G();
  }, M = (T, W) => {
    T._isLeaving = !1, Tn(T, d), Tn(T, h), Tn(T, p), W && W();
  }, P = (T) => (W, G) => {
    const X = T ? F : v, ee = () => O(W, T, G);
    Vn(X, [W, ee]), Ml(() => {
      Tn(W, T ? l : s), cn(W, T ? c : i), Pl(X) || Ul(W, o, g, ee);
    });
  };
  return Se(t, { onBeforeEnter(T) {
    Vn(_, [T]), cn(T, s), cn(T, a);
  }, onBeforeAppear(T) {
    Vn(I, [T]), cn(T, l), cn(T, u);
  }, onEnter: P(!1), onAppear: P(!0), onLeave(T, W) {
    T._isLeaving = !0;
    const G = () => M(T, W);
    cn(T, d), ad(), cn(T, p), Ml(() => {
      T._isLeaving && (Tn(T, d), cn(T, h), Pl(x) || Ul(T, o, b, G));
    }), Vn(x, [T, G]);
  }, onEnterCancelled(T) {
    O(T, !1), Vn(y, [T]);
  }, onAppearCancelled(T) {
    O(T, !0), Vn(A, [T]);
  }, onLeaveCancelled(T) {
    M(T), Vn(w, [T]);
  } });
}
function ea(e) {
  return ss(e);
}
function cn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Fo] || (e[Fo] = /* @__PURE__ */ new Set())).add(t);
}
function Tn(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[Fo];
  n && (n.delete(t), n.size || (e[Fo] = void 0));
}
function Ml(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ih = 0;
function Ul(e, t, n, o) {
  const r = e._endId = ++Ih, s = () => {
    r === e._endId && o();
  };
  if (n)
    return setTimeout(s, n);
  const { type: a, timeout: i, propCount: l } = sd(e, t);
  if (!a)
    return o();
  const u = a + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, p), s();
  }, p = (h) => {
    h.target === e && ++c >= l && d();
  };
  setTimeout(() => {
    c < l && d();
  }, i + 1), e.addEventListener(u, p);
}
function sd(e, t) {
  const n = window.getComputedStyle(e), o = (h) => (n[h] || "").split(", "), r = o(`${Cn}Delay`), s = o(`${Cn}Duration`), a = Ll(r, s), i = o(`${Ho}Delay`), l = o(`${Ho}Duration`), u = Ll(i, l);
  let c = null, d = 0, p = 0;
  return t === Cn ? a > 0 && (c = Cn, d = a, p = s.length) : t === Ho ? u > 0 && (c = Ho, d = u, p = l.length) : (d = Math.max(a, u), c = d > 0 ? a > u ? Cn : Ho : null, p = c ? c === Cn ? s.length : l.length : 0), { type: c, timeout: d, propCount: p, hasTransform: c === Cn && /\b(transform|all)(,|$)/.test(o(`${Cn}Property`).toString()) };
}
function Ll(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => jl(n) + jl(e[o])));
}
function jl(e) {
  return e === "auto" ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."));
}
function ad() {
  return document.body.offsetHeight;
}
const Ti = Symbol("_vod"), Th = { beforeMount(e, { value: t }, { transition: n }) {
  e[Ti] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Jo(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: o }) {
  !t != !n && (o ? t ? (o.beforeEnter(e), Jo(e, !0), o.enter(e)) : o.leave(e, () => {
    Jo(e, !1);
  }) : Jo(e, t));
}, beforeUnmount(e, { value: t }) {
  Jo(e, t);
} };
function Jo(e, t) {
  e.style.display = t ? e[Ti] : "none";
}
const id = Symbol("");
function Oh(e) {
  const t = Me();
  if (!t)
    return;
  const n = t.ut = (r = e(t.proxy)) => {
    Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((s) => Da(s, r));
  }, o = () => {
    const r = e(t.proxy);
    Ra(t.subTree, r), n(r);
  };
  vc(o), tt(() => {
    const r = new MutationObserver(o);
    r.observe(t.subTree.el.parentNode, { childList: !0 }), qt(() => r.disconnect());
  });
}
function Ra(e, t) {
  if (128 & e.shapeFlag) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Ra(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (1 & e.shapeFlag && e.el)
    Da(e.el, t);
  else if (e.type === Oe)
    e.children.forEach((n) => Ra(n, t));
  else if (e.type === to) {
    let { el: n, anchor: o } = e;
    for (; n && (Da(n, t), n !== o); )
      n = n.nextSibling;
  }
}
function Da(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let o = "";
    for (const r in t)
      n.setProperty(`--${r}`, t[r]), o += `--${r}: ${t[r]};`;
    n[id] = o;
  }
}
const zl = /\s*!important$/;
function Na(e, t, n) {
  if (ne(n))
    n.forEach((o) => Na(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = function(r, s) {
      const a = ta[s];
      if (a)
        return a;
      let i = Ne(s);
      if (i !== "filter" && i in r)
        return ta[s] = i;
      i = ho(i);
      for (let l = 0; l < Vl.length; l++) {
        const u = Vl[l] + i;
        if (u in r)
          return ta[s] = u;
      }
      return s;
    }(e, t);
    zl.test(n) ? e.setProperty(Mt(o), n.replace(zl, ""), "important") : e[o] = n;
  }
}
const Vl = ["Webkit", "Moz", "ms"], ta = {}, ql = "http://www.w3.org/1999/xlink";
function hn(e, t, n, o) {
  e.addEventListener(t, n, o);
}
const Wl = Symbol("_vei");
function Bh(e, t, n, o, r = null) {
  const s = e[Wl] || (e[Wl] = {}), a = s[t];
  if (o && a)
    a.value = o;
  else {
    const [i, l] = function(u) {
      let c;
      if (Hl.test(u)) {
        let p;
        for (c = {}; p = u.match(Hl); )
          u = u.slice(0, u.length - p[0].length), c[p[0].toLowerCase()] = !0;
      }
      return [u[2] === ":" ? u.slice(3) : Mt(u.slice(2)), c];
    }(t);
    if (o) {
      const u = s[t] = function(c, d) {
        const p = (h) => {
          if (h._vts) {
            if (h._vts <= p.attached)
              return;
          } else
            h._vts = Date.now();
          zt(function(f, g) {
            if (ne(g)) {
              const b = f.stopImmediatePropagation;
              return f.stopImmediatePropagation = () => {
                b.call(f), f._stopped = !0;
              }, g.map((_) => (v) => !v._stopped && _ && _(v));
            }
            return g;
          }(h, p.value), d, 5, [h]);
        };
        return p.value = c, p.attached = Rh(), p;
      }(o, r);
      hn(e, i, u, l);
    } else
      a && (function(u, c, d, p) {
        u.removeEventListener(c, d, p);
      }(e, i, a, l), s[t] = void 0);
  }
}
const Hl = /(?:Once|Passive|Capture)$/;
let na = 0;
const $h = Promise.resolve(), Rh = () => na || ($h.then(() => na = 0), na = Date.now()), Jl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Oi(e, t) {
  const n = /* @__PURE__ */ Z(e);
  class o extends Us {
    constructor(s) {
      super(n, s, t);
    }
  }
  return o.def = n, o;
}
/*! #__NO_SIDE_EFFECTS__ */
const Dh = /* @__NO_SIDE_EFFECTS__ */ (e) => /* @__PURE__ */ Oi(e, bd), Nh = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Us extends Nh {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), Qe(() => {
      this._connected || (Pa(null, this.shadowRoot), this._instance = null);
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
      if (s && !ne(s))
        for (const l in s) {
          const u = s[l];
          (u === Number || u && u.type === Number) && (l in this._props && (this._props[l] = ss(this._props[l])), (i || (i = /* @__PURE__ */ Object.create(null)))[Ne(l)] = !0);
        }
      this._numberProps = i, r && this._resolveProps(o), this._applyStyles(a), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((o) => t(o, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, o = ne(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && o.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of o.map(Ne))
      Object.defineProperty(this, r, { get() {
        return this._getProp(r);
      }, set(s) {
        this._setProp(r, s);
      } });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const o = Ne(t);
    this._numberProps && this._numberProps[o] && (n = ss(n)), this._setProp(o, n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, o = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), o && (n === !0 ? this.setAttribute(Mt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Mt(t), n + "") : n || this.removeAttribute(Mt(t))));
  }
  _update() {
    Pa(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = B(this._def, Se({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const o = (s, a) => {
        this.dispatchEvent(new CustomEvent(s, { detail: a }));
      };
      n.emit = (s, ...a) => {
        o(s, a), Mt(s) !== s && o(Mt(s), a);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof Us) {
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
function Fh(e = "$style") {
  {
    const t = Me();
    if (!t)
      return Ce;
    const n = t.type.__cssModules;
    return n && n[e] || Ce;
  }
}
const ld = /* @__PURE__ */ new WeakMap(), ud = /* @__PURE__ */ new WeakMap(), hs = Symbol("_moveCb"), Kl = Symbol("_enterCb"), Ph = { name: "TransitionGroup", props: Se({}, Eh, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = Me(), o = bi();
  let r, s;
  return Ns(() => {
    if (!r.length)
      return;
    const a = e.moveClass || `${e.name || "v"}-move`;
    if (!function(l, u, c) {
      const d = l.cloneNode(), p = l[Fo];
      p && p.forEach((g) => {
        g.split(/\s+/).forEach((b) => b && d.classList.remove(b));
      }), c.split(/\s+/).forEach((g) => g && d.classList.add(g)), d.style.display = "none";
      const h = u.nodeType === 1 ? u : u.parentNode;
      h.appendChild(d);
      const { hasTransform: f } = sd(d);
      return h.removeChild(d), f;
    }(r[0].el, n.vnode.el, a))
      return;
    r.forEach(Uh), r.forEach(Lh);
    const i = r.filter(jh);
    ad(), i.forEach((l) => {
      const u = l.el, c = u.style;
      cn(u, a), c.transform = c.webkitTransform = c.transitionDuration = "";
      const d = u[hs] = (p) => {
        p && p.target !== u || p && !/transform$/.test(p.propertyName) || (u.removeEventListener("transitionend", d), u[hs] = null, Tn(u, a));
      };
      u.addEventListener("transitionend", d);
    });
  }), () => {
    const a = xe(e), i = rd(a);
    let l = a.tag || Oe;
    r = s, s = t.default ? Rs(t.default()) : [];
    for (let u = 0; u < s.length; u++) {
      const c = s[u];
      c.key != null && io(c, No(c, i, o, n));
    }
    if (r)
      for (let u = 0; u < r.length; u++) {
        const c = r[u];
        io(c, No(c, i, o, n)), ld.set(c, c.el.getBoundingClientRect());
      }
    return B(l, null, s);
  };
} }, Mh = Ph;
function Uh(e) {
  const t = e.el;
  t[hs] && t[hs](), t[Kl] && t[Kl]();
}
function Lh(e) {
  ud.set(e, e.el.getBoundingClientRect());
}
function jh(e) {
  const t = ld.get(e), n = ud.get(e), o = t.left - n.left, r = t.top - n.top;
  if (o || r) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${o}px,${r}px)`, s.transitionDuration = "0s", e;
  }
}
const Ln = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ne(t) ? (n) => Bo(t, n) : t;
};
function zh(e) {
  e.target.composing = !0;
}
function Gl(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const jt = Symbol("_assign"), Fa = { created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
  e[jt] = Ln(r);
  const s = o || r.props && r.props.type === "number";
  hn(e, t ? "change" : "input", (a) => {
    if (a.target.composing)
      return;
    let i = e.value;
    n && (i = i.trim()), s && (i = rs(i)), e[jt](i);
  }), n && hn(e, "change", () => {
    e.value = e.value.trim();
  }), t || (hn(e, "compositionstart", zh), hn(e, "compositionend", Gl), hn(e, "change", Gl));
}, mounted(e, { value: t }) {
  e.value = t ?? "";
}, beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: o, number: r } }, s) {
  if (e[jt] = Ln(s), e.composing)
    return;
  const a = t ?? "";
  if ((r || e.type === "number" ? rs(e.value) : e.value) !== a) {
    if (document.activeElement === e && e.type !== "range" && (n || o && e.value.trim() === a))
      return;
    e.value = a;
  }
} }, cd = { deep: !0, created(e, t, n) {
  e[jt] = Ln(n), hn(e, "change", () => {
    const o = e._modelValue, r = Po(e), s = e.checked, a = e[jt];
    if (ne(o)) {
      const i = oi(o, r), l = i !== -1;
      if (s && !l)
        a(o.concat(r));
      else if (!s && l) {
        const u = [...o];
        u.splice(i, 1), a(u);
      }
    } else if (zo(o)) {
      const i = new Set(o);
      s ? i.add(r) : i.delete(r), a(i);
    } else
      a(fd(e, s));
  });
}, mounted: Ql, beforeUpdate(e, t, n) {
  e[jt] = Ln(n), Ql(e, t, n);
} };
function Ql(e, { value: t, oldValue: n }, o) {
  e._modelValue = t, ne(t) ? e.checked = oi(t, o.props.value) > -1 : zo(t) ? e.checked = t.has(o.props.value) : t !== n && (e.checked = oo(t, fd(e, !0)));
}
const dd = { created(e, { value: t }, n) {
  e.checked = oo(t, n.props.value), e[jt] = Ln(n), hn(e, "change", () => {
    e[jt](Po(e));
  });
}, beforeUpdate(e, { value: t, oldValue: n }, o) {
  e[jt] = Ln(o), t !== n && (e.checked = oo(t, o.props.value));
} }, pd = { deep: !0, created(e, { value: t, modifiers: { number: n } }, o) {
  const r = zo(t);
  hn(e, "change", () => {
    const s = Array.prototype.filter.call(e.options, (a) => a.selected).map((a) => n ? rs(Po(a)) : Po(a));
    e[jt](e.multiple ? r ? new Set(s) : s : s[0]);
  }), e[jt] = Ln(o);
}, mounted(e, { value: t }) {
  Yl(e, t);
}, beforeUpdate(e, t, n) {
  e[jt] = Ln(n);
}, updated(e, { value: t }) {
  Yl(e, t);
} };
function Yl(e, t) {
  const n = e.multiple;
  if (!n || ne(t) || zo(t)) {
    for (let o = 0, r = e.options.length; o < r; o++) {
      const s = e.options[o], a = Po(s);
      if (n)
        s.selected = ne(t) ? oi(t, a) > -1 : t.has(a);
      else if (oo(Po(s), t))
        return void (e.selectedIndex !== o && (e.selectedIndex = o));
    }
    n || e.selectedIndex === -1 || (e.selectedIndex = -1);
  }
}
function Po(e) {
  return "_value" in e ? e._value : e.value;
}
function fd(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const hd = { created(e, t, n) {
  Fr(e, t, n, null, "created");
}, mounted(e, t, n) {
  Fr(e, t, n, null, "mounted");
}, beforeUpdate(e, t, n, o) {
  Fr(e, t, n, o, "beforeUpdate");
}, updated(e, t, n, o) {
  Fr(e, t, n, o, "updated");
} };
function Fr(e, t, n, o, r) {
  const s = function(a, i) {
    switch (a) {
      case "SELECT":
        return pd;
      case "TEXTAREA":
        return Fa;
      default:
        switch (i) {
          case "checkbox":
            return cd;
          case "radio":
            return dd;
          default:
            return Fa;
        }
    }
  }(e.tagName, n.props && n.props.type)[r];
  s && s(e, t, n, o);
}
const Vh = ["ctrl", "shift", "alt", "meta"], qh = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => Vh.some((n) => e[`${n}Key`] && !t.includes(n)) }, fn = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const i = qh[t[a]];
      if (i && i(r, t))
        return;
    }
    return e(r, ...s);
  });
}, Wh = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" }, md = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (r) => {
    if (!("key" in r))
      return;
    const s = Mt(r.key);
    return t.some((a) => a === s || Wh[a] === s) ? e(r) : void 0;
  });
}, vd = Se({ patchProp: (e, t, n, o, r, s, a, i, l) => {
  const u = r === "svg";
  t === "class" ? function(c, d, p) {
    const h = c[Fo];
    h && (d = (d ? [d, ...h] : [...h]).join(" ")), d == null ? c.removeAttribute("class") : p ? c.setAttribute("class", d) : c.className = d;
  }(e, o, u) : t === "style" ? function(c, d, p) {
    const h = c.style, f = he(p);
    if (p && !f) {
      if (d && !he(d))
        for (const g in d)
          p[g] == null && Na(h, g, "");
      for (const g in p)
        Na(h, g, p[g]);
    } else {
      const g = h.display;
      if (f) {
        if (d !== p) {
          const b = h[id];
          b && (p += ";" + b), h.cssText = p;
        }
      } else
        d && c.removeAttribute("style");
      Ti in c && (h.display = g);
    }
  }(e, n, o) : fo(t) ? Xa(t) || Bh(e, t, 0, o, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : function(c, d, p, h) {
    if (h)
      return d === "innerHTML" || d === "textContent" || !!(d in c && Jl(d) && ce(p));
    if (d === "spellcheck" || d === "draggable" || d === "translate" || d === "form" || d === "list" && c.tagName === "INPUT" || d === "type" && c.tagName === "TEXTAREA")
      return !1;
    if (d === "width" || d === "height") {
      const f = c.tagName;
      if (f === "IMG" || f === "VIDEO" || f === "CANVAS" || f === "SOURCE")
        return !1;
    }
    return Jl(d) && he(p) ? !1 : d in c;
  }(e, t, o, u)) ? function(c, d, p, h, f, g, b) {
    if (d === "innerHTML" || d === "textContent")
      return h && b(h, f, g), void (c[d] = p ?? "");
    const _ = c.tagName;
    if (d === "value" && _ !== "PROGRESS" && !_.includes("-")) {
      c._value = p;
      const y = p ?? "";
      return (_ === "OPTION" ? c.getAttribute("value") : c.value) !== y && (c.value = y), void (p == null && c.removeAttribute(d));
    }
    let v = !1;
    if (p === "" || p == null) {
      const y = typeof c[d];
      y === "boolean" ? p = dl(p) : p == null && y === "string" ? (p = "", v = !0) : y === "number" && (p = 0, v = !0);
    }
    try {
      c[d] = p;
    } catch {
    }
    v && c.removeAttribute(d);
  }(e, t, o, s, a, i, l) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), function(c, d, p, h, f) {
    if (h && d.startsWith("xlink:"))
      p == null ? c.removeAttributeNS(ql, d.slice(6, d.length)) : c.setAttributeNS(ql, d, p);
    else {
      const g = nf(d);
      p == null || g && !dl(p) ? c.removeAttribute(d) : c.setAttribute(d, g ? "" : p);
    }
  }(e, t, o, u));
} }, Ah);
let or, Zl = !1;
function gd() {
  return or || (or = Vc(vd));
}
function yd() {
  return or = Zl ? or : qc(vd), Zl = !0, or;
}
const Pa = (...e) => {
  gd().render(...e);
}, bd = (...e) => {
  yd().hydrate(...e);
}, Hh = (...e) => {
  const t = gd().createApp(...e), { mount: n } = t;
  return t.mount = (o) => {
    const r = xd(o);
    if (!r)
      return;
    const s = t._component;
    ce(s) || s.render || s.template || (s.template = r.innerHTML), r.innerHTML = "";
    const a = n(r, !1, wd(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
  }, t;
}, Jh = (...e) => {
  const t = yd().createApp(...e), { mount: n } = t;
  return t.mount = (o) => {
    const r = xd(o);
    if (r)
      return n(r, !0, wd(r));
  }, t;
};
function wd(e) {
  return e instanceof SVGElement ? "svg" : typeof MathMLElement == "function" && e instanceof MathMLElement ? "mathml" : void 0;
}
function xd(e) {
  return he(e) ? document.querySelector(e) : e;
}
const Kh = ot;
var Gh = Object.freeze({ __proto__: null, BaseTransition: wc, BaseTransitionPropsValidators: wi, Comment: st, DeprecationTypes: null, EffectScope: ri, ErrorCodes: Rf, ErrorTypeStrings: null, Fragment: Oe, KeepAlive: Hf, ReactiveEffect: Do, Static: to, Suspense: zf, Teleport: Ci, Text: lo, TrackOpTypes: Of, Transition: Ii, TransitionGroup: Mh, TriggerOpTypes: Bf, VueElement: Us, assertNumber: $f, callWithAsyncErrorHandling: zt, callWithErrorHandling: gn, camelize: Ne, capitalize: ho, cloneVNode: Vt, compatUtils: null, computed: ae, createApp: Hh, createBlock: re, createCommentVNode: Xe, createElementBlock: ue, createElementVNode: V, createHydrationRenderer: qc, createPropsRestProxy: sh, createRenderer: Vc, createSSRApp: Jh, createSlots: Kf, createStaticVNode: gh, createTextVNode: le, createVNode: B, customRef: rc, defineAsyncComponent: Wf, defineComponent: Z, defineCustomElement: Oi, defineEmits: Zf, defineExpose: Xf, defineModel: nh, defineOptions: eh, defineProps: Yf, defineSSRCustomElement: Dh, defineSlots: th, devtools: Ch, effect: rf, effectScope: vr, getCurrentInstance: Me, getCurrentScope: As, getTransitionRawChildren: Rs, guardReactiveProps: jn, h: At, handleError: vo, hasInjectionContext: dh, hydrate: bd, initCustomFormatter: xh, initDirectivesForSSR: Kh, inject: eo, isMemoSame: td, isProxy: ci, isReactive: Zn, isReadonly: ao, isRef: Je, isRuntimeOnly: wh, isShallow: Jn, isVNode: co, markRaw: Os, mergeDefaults: rh, mergeModels: Fc, mergeProps: be, nextTick: Qe, normalizeClass: qe, normalizeProps: mo, normalizeStyle: on, onActivated: kc, onBeforeMount: Sc, onBeforeUnmount: go, onBeforeUpdate: Ac, onDeactivated: _c, onErrorCaptured: Oc, onMounted: tt, onRenderTracked: Tc, onRenderTriggered: Ic, onScopeDispose: si, onServerPrefetch: Ec, onUnmounted: qt, onUpdated: Ns, openBlock: N, popScopeId: dc, provide: Fs, proxyRefs: fi, pushScopeId: cc, queuePostFlushCb: is, reactive: nn, readonly: ui, ref: j, registerRuntimeCompiler: Zc, render: Pa, renderList: ka, renderSlot: oe, resolveComponent: Uf, resolveDirective: jf, resolveDynamicComponent: Lf, resolveFilter: null, resolveTransitionHooks: No, setBlockTracking: Ia, setDevtoolsHook: Sh, setTransitionHooks: io, shallowReactive: ec, shallowReadonly: _f, shallowRef: nc, ssrContextKey: mc, ssrUtils: null, stop: sf, toDisplayString: Re, toHandlerKey: Nn, toHandlers: Gf, toRaw: xe, toRef: hi, toRefs: Qt, toValue: $o, transformVNodeArgs: vh, triggerRef: Sf, unref: m, useAttrs: Rc, useCssModule: Fh, useCssVars: Oh, useModel: Dc, useSSRContext: Vf, useSlots: $c, useTransitionState: bi, vModelCheckbox: cd, vModelDynamic: hd, vModelRadio: dd, vModelSelect: pd, vModelText: Fa, vShow: Th, version: nd, warn: _h, watch: Ee, watchEffect: it, watchPostEffect: vc, watchSyncEffect: gc, withAsyncContext: ah, withCtx: E, withDefaults: oh, withDirectives: bc, withKeys: md, withMemo: kh, withModifiers: fn, withScopeId: Ff });
const dr = Symbol(""), rr = Symbol(""), Bi = Symbol(""), ms = Symbol(""), kd = Symbol(""), po = Symbol(""), _d = Symbol(""), Cd = Symbol(""), $i = Symbol(""), Ri = Symbol(""), br = Symbol(""), Di = Symbol(""), Sd = Symbol(""), Ni = Symbol(""), Ma = Symbol(""), Fi = Symbol(""), Qh = Symbol(""), Pi = Symbol(""), Mi = Symbol(""), Ad = Symbol(""), Ed = Symbol(""), Ls = Symbol(""), vs = Symbol(""), Ui = Symbol(""), Li = Symbol(""), pr = Symbol(""), wr = Symbol(""), ji = Symbol(""), Ua = Symbol(""), Yh = Symbol(""), La = Symbol(""), gs = Symbol(""), Zh = Symbol(""), Xh = Symbol(""), zi = Symbol(""), em = Symbol(""), tm = Symbol(""), Vi = Symbol(""), Id = Symbol(""), Mo = { [dr]: "Fragment", [rr]: "Teleport", [Bi]: "Suspense", [ms]: "KeepAlive", [kd]: "BaseTransition", [po]: "openBlock", [_d]: "createBlock", [Cd]: "createElementBlock", [$i]: "createVNode", [Ri]: "createElementVNode", [br]: "createCommentVNode", [Di]: "createTextVNode", [Sd]: "createStaticVNode", [Ni]: "resolveComponent", [Ma]: "resolveDynamicComponent", [Fi]: "resolveDirective", [Qh]: "resolveFilter", [Pi]: "withDirectives", [Mi]: "renderList", [Ad]: "renderSlot", [Ed]: "createSlots", [Ls]: "toDisplayString", [vs]: "mergeProps", [Ui]: "normalizeClass", [Li]: "normalizeStyle", [pr]: "normalizeProps", [wr]: "guardReactiveProps", [ji]: "toHandlers", [Ua]: "camelize", [Yh]: "capitalize", [La]: "toHandlerKey", [gs]: "setBlockTracking", [Zh]: "pushScopeId", [Xh]: "popScopeId", [zi]: "withCtx", [em]: "unref", [tm]: "isRef", [Vi]: "withMemo", [Id]: "isMemoSame" }, Rt = { start: { line: 1, column: 1, offset: 0 }, end: { line: 1, column: 1, offset: 0 }, source: "" };
function fr(e, t, n, o, r, s, a, i = !1, l = !1, u = !1, c = Rt) {
  return e && (i ? (e.helper(po), e.helper(jo(e.inSSR, u))) : e.helper(Lo(e.inSSR, u)), a && e.helper(Pi)), { type: 13, tag: t, props: n, children: o, patchFlag: r, dynamicProps: s, directives: a, isBlock: i, disableTracking: l, isComponent: u, loc: c };
}
function hr(e, t = Rt) {
  return { type: 17, loc: t, elements: e };
}
function Ut(e, t = Rt) {
  return { type: 15, loc: t, properties: e };
}
function Ve(e, t) {
  return { type: 16, loc: Rt, key: he(e) ? ve(e, !0) : e, value: t };
}
function ve(e, t = !1, n = Rt, o = 0) {
  return { type: 4, loc: n, content: e, isStatic: t, constType: t ? 3 : o };
}
function Jt(e, t = Rt) {
  return { type: 8, loc: t, children: e };
}
function et(e, t = [], n = Rt) {
  return { type: 14, loc: n, callee: e, arguments: t };
}
function Uo(e, t = void 0, n = !1, o = !1, r = Rt) {
  return { type: 18, params: e, returns: t, newline: n, isSlot: o, loc: r };
}
function ja(e, t, n, o = !0) {
  return { type: 19, test: e, consequent: t, alternate: n, newline: o, loc: Rt };
}
function Lo(e, t) {
  return e || t ? $i : Ri;
}
function jo(e, t) {
  return e || t ? _d : Cd;
}
function qi(e, { helper: t, removeHelper: n, inSSR: o }) {
  e.isBlock || (e.isBlock = !0, n(Lo(o, e.isComponent)), t(po), t(jo(o, e.isComponent)));
}
const Xl = new Uint8Array([123, 123]), eu = new Uint8Array([125, 125]);
function tu(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Ot(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function Sn(e) {
  return e === 47 || e === 62 || Ot(e);
}
function ys(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const dt = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) };
function Wi(e) {
  throw e;
}
function Td(e) {
}
function He(e, t, n, o) {
  const r = new SyntaxError(`https://vuejs.org/errors/#compiler-${e}`);
  return r.code = e, r.loc = t, r;
}
const St = (e) => e.type === 4 && e.isStatic;
function Od(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return rr;
    case "Suspense":
    case "suspense":
      return Bi;
    case "KeepAlive":
    case "keep-alive":
      return ms;
    case "BaseTransition":
    case "base-transition":
      return kd;
  }
}
const nm = /^\d|[^\$\w]/, Hi = (e) => !nm.test(e), om = /[A-Za-z_$\xA0-\uFFFF]/, rm = /[\.\?\w$\xA0-\uFFFF]/, sm = /\s+[.[]\s*|\s*[.[]\s+/g, Bd = (e) => {
  e = e.trim().replace(sm, (a) => a.trim());
  let t = 0, n = [], o = 0, r = 0, s = null;
  for (let a = 0; a < e.length; a++) {
    const i = e.charAt(a);
    switch (t) {
      case 0:
        if (i === "[")
          n.push(t), t = 1, o++;
        else if (i === "(")
          n.push(t), t = 2, r++;
        else if (!(a === 0 ? om : rm).test(i))
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
function Wt(e, t, n = !1) {
  for (let o = 0; o < e.props.length; o++) {
    const r = e.props[o];
    if (r.type === 7 && (n || r.exp) && (he(t) ? r.name === t : t.test(r.name)))
      return r;
  }
}
function js(e, t, n = !1, o = !1) {
  for (let r = 0; r < e.props.length; r++) {
    const s = e.props[r];
    if (s.type === 6) {
      if (n)
        continue;
      if (s.name === t && (s.value || o))
        return s;
    } else if (s.name === "bind" && (s.exp || o) && Eo(s.arg, t))
      return s;
  }
}
function Eo(e, t) {
  return !(!e || !St(e) || e.content !== t);
}
function oa(e) {
  return e.type === 5 || e.type === 2;
}
function am(e) {
  return e.type === 7 && e.name === "slot";
}
function bs(e) {
  return e.type === 1 && e.tagType === 3;
}
function ws(e) {
  return e.type === 1 && e.tagType === 2;
}
const im = /* @__PURE__ */ new Set([pr, wr]);
function $d(e, t = []) {
  if (e && !he(e) && e.type === 14) {
    const n = e.callee;
    if (!he(n) && im.has(n))
      return $d(e.arguments[0], t.concat(e));
  }
  return [e, t];
}
function xs(e, t, n) {
  let o, r, s = e.type === 13 ? e.props : e.arguments[2], a = [];
  if (s && !he(s) && s.type === 14) {
    const i = $d(s);
    s = i[0], a = i[1], r = a[a.length - 1];
  }
  if (s == null || he(s))
    o = Ut([t]);
  else if (s.type === 14) {
    const i = s.arguments[0];
    he(i) || i.type !== 15 ? s.callee === ji ? o = et(n.helper(vs), [Ut([t]), s]) : s.arguments.unshift(Ut([t])) : nu(t, i) || i.properties.unshift(t), !o && (o = s);
  } else
    s.type === 15 ? (nu(t, s) || s.properties.unshift(t), o = s) : (o = et(n.helper(vs), [Ut([t]), s]), r && r.callee === wr && (r = a[a.length - 2]));
  e.type === 13 ? r ? r.arguments[0] = o : e.props = o : r ? r.arguments[0] = o : e.arguments[2] = o;
}
function nu(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const o = e.key.content;
    n = t.properties.some((r) => r.key.type === 4 && r.key.content === o);
  }
  return n;
}
function za(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, o) => n === "-" ? "_" : e.charCodeAt(o).toString())}`;
}
const lm = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, Rd = { parseMode: "base", ns: 0, delimiters: ["{{", "}}"], getNamespace: () => 0, isVoidTag: Zr, isPreTag: Zr, isCustomElement: Zr, onError: Wi, onWarn: Td, comments: !1, prefixIdentifiers: !1 };
let De = Rd, ks = null, no = "", ft = null, Te = null, Tt = "", dn = -1, qn = -1, _s = 0, Hn = !1, Va = null;
const Ze = [], We = new class {
  constructor(e, t) {
    this.stack = e, this.cbs = t, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = Xl, this.delimiterClose = eu, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = Xl, this.delimiterClose = eu;
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
    if (t ? Sn(e) : (32 | e) === this.currentSequence[this.sequenceIndex]) {
      if (!t)
        return void this.sequenceIndex++;
    } else
      this.inRCDATA = !1;
    this.sequenceIndex = 0, this.state = 6, this.stateInTagName(e);
  }
  stateInRCDATA(e) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (e === 62 || Ot(e)) {
        const t = this.index - this.currentSequence.length;
        if (this.sectionStart < t) {
          const n = this.index;
          this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = n;
        }
        return this.sectionStart = t + 2, this.stateInClosingTagName(e), void (this.inRCDATA = !1);
      }
      this.sequenceIndex = 0;
    }
    (32 | e) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === dt.TitleEnd || this.currentSequence === dt.TextareaEnd && !this.inSFCRoot ? e === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === 60);
  }
  stateCDATASequence(e) {
    e === dt.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === dt.Cdata.length && (this.state = 28, this.currentSequence = dt.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(e));
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
    e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === dt.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
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
    else if (tu(e))
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
    Sn(e) && this.handleTagName(e);
  }
  stateInSFCRootTagName(e) {
    if (Sn(e)) {
      const t = this.buffer.slice(this.sectionStart, this.index);
      t !== "template" && this.enterRCDATA(ys("</" + t), 0), this.handleTagName(e);
    }
  }
  handleTagName(e) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e);
  }
  stateBeforeClosingTagName(e) {
    Ot(e) || (e === 62 ? (this.state = 1, this.sectionStart = this.index + 1) : (this.state = tu(e) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(e) {
    (e === 62 || Ot(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(e));
  }
  stateAfterClosingTagName(e) {
    e === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(e) {
    e === 62 ? (this.cbs.onopentagend(this.index), this.state = this.inRCDATA ? 32 : 1, this.sectionStart = this.index + 1) : e === 47 ? this.state = 7 : e === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : Ot(e) || this.handleAttrStart(e);
  }
  handleAttrStart(e) {
    e === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : e === 46 || e === 58 || e === 64 || e === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(e) {
    e === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : Ot(e) || (this.state = 11, this.stateBeforeAttrName(e));
  }
  stateInAttrName(e) {
    (e === 61 || Sn(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(e));
  }
  stateInDirName(e) {
    e === 61 || Sn(e) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : e === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : e === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(e) {
    e === 61 || Sn(e) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : e === 91 ? this.state = 15 : e === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(e) {
    e === 93 ? this.state = 14 : (e === 61 || Sn(e)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(e));
  }
  stateInDirModifier(e) {
    e === 61 || Sn(e) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : e === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
  }
  handleAttrNameEnd(e) {
    this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(e);
  }
  stateAfterAttrName(e) {
    e === 61 ? this.state = 18 : e === 47 || e === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e)) : Ot(e) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(e));
  }
  stateBeforeAttrValue(e) {
    e === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : e === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : Ot(e) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(e));
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
    Ot(e) || e === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(e)) : e !== 39 && e !== 60 && e !== 61 && e !== 96 || this.cbs.onerr(18, this.index);
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
    e === 45 ? (this.state = 28, this.currentSequence = dt.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(e) {
    (e === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(e) {
    const t = 32 | e;
    t === dt.ScriptEnd[3] ? this.startSpecial(dt.ScriptEnd, 4) : t === dt.StyleEnd[3] ? this.startSpecial(dt.StyleEnd, 4) : (this.state = 6, this.stateInTagName(e));
  }
  stateBeforeSpecialT(e) {
    const t = 32 | e;
    t === dt.TitleEnd[3] ? this.startSpecial(dt.TitleEnd, 4) : t === dt.TextareaEnd[3] ? this.startSpecial(dt.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(e));
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
    this.sectionStart >= e || (this.state === 28 ? this.currentSequence === dt.CdataEnd ? this.cbs.oncdata(this.sectionStart, e) : this.cbs.oncomment(this.sectionStart, e) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, e));
  }
  emitCodePoint(e, t) {
  }
}(Ze, { onerr: su, ontext(e, t) {
  Pr(pt(e, t), e, t);
}, ontextentity(e, t, n) {
  Pr(e, t, n);
}, oninterpolation(e, t) {
  if (Hn)
    return Pr(pt(e, t), e, t);
  let n = e + We.delimiterOpen.length, o = t - We.delimiterClose.length;
  for (; Ot(no.charCodeAt(n)); )
    n++;
  for (; Ot(no.charCodeAt(o - 1)); )
    o--;
  let r = pt(n, o);
  r.includes("&") && (r = De.decodeEntities(r, !1)), qa({ type: 5, content: Mr(r, !1, Ye(n, o)), loc: Ye(e, t) });
}, onopentagname(e, t) {
  const n = pt(e, t);
  ft = { type: 1, tag: n, ns: De.getNamespace(n, Ze[0], De.ns), tagType: 0, props: [], children: [], loc: Ye(e - 1, t), codegenNode: void 0 };
}, onopentagend(e) {
  ru(e);
}, onclosetag(e, t) {
  const n = pt(e, t);
  if (!De.isVoidTag(n)) {
    let o = !1;
    for (let r = 0; r < Ze.length; r++)
      if (Ze[r].tag.toLowerCase() === n.toLowerCase()) {
        o = !0;
        for (let s = 0; s <= r; s++)
          es(Ze.shift(), t, s < r);
        break;
      }
    o || Dd(e, 60);
  }
}, onselfclosingtag(e) {
  var t;
  const n = ft.tag;
  ft.isSelfClosing = !0, ru(e), ((t = Ze[0]) == null ? void 0 : t.tag) === n && es(Ze.shift(), e);
}, onattribname(e, t) {
  Te = { type: 6, name: pt(e, t), nameLoc: Ye(e, t), value: void 0, loc: Ye(e) };
}, ondirname(e, t) {
  const n = pt(e, t), o = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
  if (Hn || o === "")
    Te = { type: 6, name: n, nameLoc: Ye(e, t), value: void 0, loc: Ye(e) };
  else if (Te = { type: 7, name: o, rawName: n, exp: void 0, arg: void 0, modifiers: n === "." ? ["prop"] : [], loc: Ye(e) }, o === "pre") {
    Hn = We.inVPre = !0, Va = ft;
    const r = ft.props;
    for (let s = 0; s < r.length; s++)
      r[s].type === 7 && (r[s] = hm(r[s]));
  }
}, ondirarg(e, t) {
  if (e === t)
    return;
  const n = pt(e, t);
  if (Hn)
    Te.name += n, Io(Te.nameLoc, t);
  else {
    const o = n[0] !== "[";
    Te.arg = Mr(o ? n : n.slice(1, -1), o, Ye(e, t), o ? 3 : 0);
  }
}, ondirmodifier(e, t) {
  const n = pt(e, t);
  if (Hn)
    Te.name += "." + n, Io(Te.nameLoc, t);
  else if (Te.name === "slot") {
    const o = Te.arg;
    o && (o.content += "." + n, Io(o.loc, t));
  } else
    Te.modifiers.push(n);
}, onattribdata(e, t) {
  Tt += pt(e, t), dn < 0 && (dn = e), qn = t;
}, onattribentity(e, t, n) {
  Tt += e, dn < 0 && (dn = t), qn = n;
}, onattribnameend(e) {
  const t = pt(Te.loc.start.offset, e);
  Te.type === 7 && (Te.rawName = t), ft.props.some((n) => (n.type === 7 ? n.rawName : n.name) === t);
}, onattribend(e, t) {
  if (ft && Te) {
    if (Io(Te.loc, t), e !== 0)
      if (Tt.includes("&") && (Tt = De.decodeEntities(Tt, !0)), Te.type === 6)
        Te.name === "class" && (Tt = Fd(Tt).trim()), Te.value = { type: 2, content: Tt, loc: e === 1 ? Ye(dn, qn) : Ye(dn - 1, qn + 1) }, We.inSFCRoot && ft.tag === "template" && Te.name === "lang" && Tt && Tt !== "html" && We.enterRCDATA(ys("</template"), 0);
      else {
        let n = 0;
        Te.exp = Mr(Tt, !1, Ye(dn, qn), 0, n), Te.name === "for" && (Te.forParseResult = function(o) {
          const r = o.loc, s = o.content, a = s.match(lm);
          if (!a)
            return;
          const [, i, l] = a, u = (f, g, b = !1) => {
            const _ = r.start.offset + g;
            return Mr(f, !1, Ye(_, _ + f.length), 0, b ? 1 : 0);
          }, c = { source: u(l.trim(), s.indexOf(l, i.length)), value: void 0, key: void 0, index: void 0, finalized: !1 };
          let d = i.trim().replace(um, "").trim();
          const p = i.indexOf(d), h = d.match(ou);
          if (h) {
            d = d.replace(ou, "").trim();
            const f = h[1].trim();
            let g;
            if (f && (g = s.indexOf(f, p + d.length), c.key = u(f, g, !0)), h[2]) {
              const b = h[2].trim();
              b && (c.index = u(b, s.indexOf(b, c.key ? g + f.length : p + d.length), !0));
            }
          }
          return d && (c.value = u(d, p, !0)), c;
        }(Te.exp));
      }
    Te.type === 7 && Te.name === "pre" || ft.props.push(Te);
  }
  Tt = "", dn = qn = -1;
}, oncomment(e, t) {
  De.comments && qa({ type: 3, content: pt(e, t), loc: Ye(e - 4, t + 3) });
}, onend() {
  const e = no.length;
  for (let t = 0; t < Ze.length; t++)
    es(Ze[t], e - 1);
}, oncdata(e, t) {
  Ze[0].ns !== 0 && Pr(pt(e, t), e, t);
}, onprocessinginstruction(e) {
  (Ze[0] ? Ze[0].ns : De.ns) === 0 && su(21, e - 1);
} }), ou = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, um = /^\(|\)$/g;
function pt(e, t) {
  return no.slice(e, t);
}
function ru(e) {
  We.inSFCRoot && (ft.innerLoc = Ye(e + 1, e + 1)), qa(ft);
  const { tag: t, ns: n } = ft;
  n === 0 && De.isPreTag(t) && _s++, De.isVoidTag(t) ? es(ft, e) : (Ze.unshift(ft), n !== 1 && n !== 2 || (We.inXML = !0)), ft = null;
}
function Pr(e, t, n) {
  var o;
  {
    const a = (o = Ze[0]) == null ? void 0 : o.tag;
    a !== "script" && a !== "style" && e.includes("&") && (e = De.decodeEntities(e, !1));
  }
  const r = Ze[0] || ks, s = r.children[r.children.length - 1];
  s?.type === 2 ? (s.content += e, Io(s.loc, n)) : r.children.push({ type: 2, content: e, loc: Ye(t, n) });
}
function es(e, t, n = !1) {
  Io(e.loc, n ? Dd(t, 60) : t + 1), We.inSFCRoot && (e.innerLoc.end = Se({}, e.children.length ? e.children[e.children.length - 1].loc.end : e.innerLoc.start), e.innerLoc.source = pt(e.innerLoc.start.offset, e.innerLoc.end.offset));
  const { tag: o, ns: r } = e;
  Hn || (o === "slot" ? e.tagType = 2 : function({ tag: s, props: a }) {
    if (s === "template") {
      for (let i = 0; i < a.length; i++)
        if (a[i].type === 7 && cm.has(a[i].name))
          return !0;
    }
    return !1;
  }(e) ? e.tagType = 3 : function({ tag: s, props: a }) {
    var i;
    if (De.isCustomElement(s))
      return !1;
    if (s === "component" || (l = s.charCodeAt(0), l > 64 && l < 91) || Od(s) || (i = De.isBuiltInComponent) != null && i.call(De, s) || De.isNativeTag && !De.isNativeTag(s))
      return !0;
    var l;
    for (let u = 0; u < a.length; u++) {
      const c = a[u];
      if (c.type === 6 && c.name === "is" && c.value && c.value.content.startsWith("vue:"))
        return !0;
    }
    return !1;
  }(e) && (e.tagType = 1)), We.inRCDATA || (e.children = Nd(e.children, e.tag)), r === 0 && De.isPreTag(o) && _s--, Va === e && (Hn = We.inVPre = !1, Va = null), We.inXML && (Ze[0] ? Ze[0].ns : De.ns) === 0 && (We.inXML = !1);
}
function Dd(e, t) {
  let n = e;
  for (; no.charCodeAt(n) !== t && n >= 0; )
    n--;
  return n;
}
const cm = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]), dm = /\r\n/g;
function Nd(e, t) {
  var n, o;
  const r = De.whitespace !== "preserve";
  let s = !1;
  for (let a = 0; a < e.length; a++) {
    const i = e[a];
    if (i.type === 2)
      if (_s)
        i.content = i.content.replace(dm, `
`);
      else if (pm(i.content)) {
        const l = (n = e[a - 1]) == null ? void 0 : n.type, u = (o = e[a + 1]) == null ? void 0 : o.type;
        !l || !u || r && (l === 3 && (u === 3 || u === 1) || l === 1 && (u === 3 || u === 1 && fm(i.content))) ? (s = !0, e[a] = null) : i.content = " ";
      } else
        r && (i.content = Fd(i.content));
  }
  if (_s && t && De.isPreTag(t)) {
    const a = e[0];
    a && a.type === 2 && (a.content = a.content.replace(/^\r?\n/, ""));
  }
  return s ? e.filter(Boolean) : e;
}
function pm(e) {
  for (let t = 0; t < e.length; t++)
    if (!Ot(e.charCodeAt(t)))
      return !1;
  return !0;
}
function fm(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function Fd(e) {
  let t = "", n = !1;
  for (let o = 0; o < e.length; o++)
    Ot(e.charCodeAt(o)) ? n || (t += " ", n = !0) : (t += e[o], n = !1);
  return t;
}
function qa(e) {
  (Ze[0] || ks).children.push(e);
}
function Ye(e, t) {
  return { start: We.getPos(e), end: t == null ? t : We.getPos(t), source: t == null ? t : pt(e, t) };
}
function Io(e, t) {
  e.end = We.getPos(t), e.source = pt(e.start.offset, t);
}
function hm(e) {
  const t = { type: 6, name: e.rawName, nameLoc: Ye(e.loc.start.offset, e.loc.start.offset + e.rawName.length), value: void 0, loc: e.loc };
  if (e.exp) {
    const n = e.exp.loc;
    n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = { type: 2, content: e.exp.content, loc: n };
  }
  return t;
}
function Mr(e, t = !1, n, o = 0, r = 0) {
  return ve(e, t, n, o);
}
function su(e, t, n) {
  De.onError(He(e, Ye(t, t)));
}
function mm(e, t) {
  if (We.reset(), ft = null, Te = null, Tt = "", dn = -1, qn = -1, Ze.length = 0, no = e, De = Se({}, Rd), t) {
    let r;
    for (r in t)
      t[r] != null && (De[r] = t[r]);
  }
  We.mode = De.parseMode === "html" ? 1 : De.parseMode === "sfc" ? 2 : 0, We.inXML = De.ns === 1 || De.ns === 2;
  const n = t?.delimiters;
  n && (We.delimiterOpen = ys(n[0]), We.delimiterClose = ys(n[1]));
  const o = ks = /* @__PURE__ */ function(r, s = "") {
    return { type: 0, source: s, children: r, helpers: /* @__PURE__ */ new Set(), components: [], directives: [], hoists: [], imports: [], cached: 0, temps: 0, codegenNode: void 0, loc: Rt };
  }([], e);
  return We.parse(no), o.loc = Ye(0, e.length), o.children = Nd(o.children), ks = null, o;
}
function vm(e, t) {
  ts(e, t, Pd(e, e.children[0]));
}
function Pd(e, t) {
  const { children: n } = e;
  return n.length === 1 && t.type === 1 && !ws(t);
}
function ts(e, t, n = !1) {
  const { children: o } = e, r = o.length;
  let s = 0;
  for (let a = 0; a < o.length; a++) {
    const i = o[a];
    if (i.type === 1 && i.tagType === 0) {
      const l = n ? 0 : Lt(i, t);
      if (l > 0) {
        if (l >= 2) {
          i.codegenNode.patchFlag = "-1", i.codegenNode = t.hoist(i.codegenNode), s++;
          continue;
        }
      } else {
        const u = i.codegenNode;
        if (u.type === 13) {
          const c = jd(u);
          if ((!c || c === 512 || c === 1) && Ud(i, t) >= 2) {
            const d = Ld(i);
            d && (u.props = t.hoist(d));
          }
          u.dynamicProps && (u.dynamicProps = t.hoist(u.dynamicProps));
        }
      }
    }
    if (i.type === 1) {
      const l = i.tagType === 1;
      l && t.scopes.vSlot++, ts(i, t), l && t.scopes.vSlot--;
    } else if (i.type === 11)
      ts(i, t, i.children.length === 1);
    else if (i.type === 9)
      for (let l = 0; l < i.branches.length; l++)
        ts(i.branches[l], t, i.branches[l].children.length === 1);
  }
  if (s && t.transformHoist && t.transformHoist(o, t, e), s && s === r && e.type === 1 && e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && ne(e.codegenNode.children)) {
    const a = t.hoist(hr(e.codegenNode.children));
    t.hmr && (a.content = `[...${a.content}]`), e.codegenNode.children = a;
  }
}
function Lt(e, t) {
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
      if (jd(r))
        return n.set(e, 0), 0;
      {
        let a = 3;
        const i = Ud(e, t);
        if (i === 0)
          return n.set(e, 0), 0;
        i < a && (a = i);
        for (let l = 0; l < e.children.length; l++) {
          const u = Lt(e.children[l], t);
          if (u === 0)
            return n.set(e, 0), 0;
          u < a && (a = u);
        }
        if (a > 1)
          for (let l = 0; l < e.props.length; l++) {
            const u = e.props[l];
            if (u.type === 7 && u.name === "bind" && u.exp) {
              const c = Lt(u.exp, t);
              if (c === 0)
                return n.set(e, 0), 0;
              c < a && (a = c);
            }
          }
        if (r.isBlock) {
          for (let l = 0; l < e.props.length; l++)
            if (e.props[l].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(po), t.removeHelper(jo(t.inSSR, r.isComponent)), r.isBlock = !1, t.helper(Lo(t.inSSR, r.isComponent));
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
      return Lt(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let s = 3;
      for (let a = 0; a < e.children.length; a++) {
        const i = e.children[a];
        if (he(i) || Kt(i))
          continue;
        const l = Lt(i, t);
        if (l === 0)
          return 0;
        l < s && (s = l);
      }
      return s;
  }
}
const gm = /* @__PURE__ */ new Set([Ui, Li, pr, wr]);
function Md(e, t) {
  if (e.type === 14 && !he(e.callee) && gm.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return Lt(n, t);
    if (n.type === 14)
      return Md(n, t);
  }
  return 0;
}
function Ud(e, t) {
  let n = 3;
  const o = Ld(e);
  if (o && o.type === 15) {
    const { properties: r } = o;
    for (let s = 0; s < r.length; s++) {
      const { key: a, value: i } = r[s], l = Lt(a, t);
      if (l === 0)
        return l;
      let u;
      if (l < n && (n = l), u = i.type === 4 ? Lt(i, t) : i.type === 14 ? Md(i, t) : 0, u === 0)
        return u;
      u < n && (n = u);
    }
  }
  return n;
}
function Ld(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function jd(e) {
  const t = e.patchFlag;
  return t ? parseInt(t, 10) : void 0;
}
function ym(e, { filename: t = "", prefixIdentifiers: n = !1, hoistStatic: o = !1, hmr: r = !1, cacheHandlers: s = !1, nodeTransforms: a = [], directiveTransforms: i = {}, transformHoist: l = null, isBuiltInComponent: u = ot, isCustomElement: c = ot, expressionPlugins: d = [], scopeId: p = null, slotted: h = !0, ssr: f = !1, inSSR: g = !1, ssrCssVars: b = "", bindingMetadata: _ = Ce, inline: v = !1, isTS: y = !1, onError: x = Wi, onWarn: w = Td, compatConfig: I }) {
  const F = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), A = { filename: t, selfName: F && ho(Ne(F[1])), prefixIdentifiers: n, hoistStatic: o, hmr: r, cacheHandlers: s, nodeTransforms: a, directiveTransforms: i, transformHoist: l, isBuiltInComponent: u, isCustomElement: c, expressionPlugins: d, scopeId: p, slotted: h, ssr: f, inSSR: g, ssrCssVars: b, bindingMetadata: _, inline: v, isTS: y, onError: x, onWarn: w, compatConfig: I, root: e, helpers: /* @__PURE__ */ new Map(), components: /* @__PURE__ */ new Set(), directives: /* @__PURE__ */ new Set(), hoists: [], imports: [], constantCache: /* @__PURE__ */ new WeakMap(), temps: 0, cached: 0, identifiers: /* @__PURE__ */ Object.create(null), scopes: { vFor: 0, vSlot: 0, vPre: 0, vOnce: 0 }, parent: null, currentNode: e, childIndex: 0, inVOnce: !1, helper(O) {
    const M = A.helpers.get(O) || 0;
    return A.helpers.set(O, M + 1), O;
  }, removeHelper(O) {
    const M = A.helpers.get(O);
    if (M) {
      const P = M - 1;
      P ? A.helpers.set(O, P) : A.helpers.delete(O);
    }
  }, helperString: (O) => `_${Mo[A.helper(O)]}`, replaceNode(O) {
    A.parent.children[A.childIndex] = A.currentNode = O;
  }, removeNode(O) {
    const M = O ? A.parent.children.indexOf(O) : A.currentNode ? A.childIndex : -1;
    O && O !== A.currentNode ? A.childIndex > M && (A.childIndex--, A.onNodeRemoved()) : (A.currentNode = null, A.onNodeRemoved()), A.parent.children.splice(M, 1);
  }, onNodeRemoved: () => {
  }, addIdentifiers(O) {
  }, removeIdentifiers(O) {
  }, hoist(O) {
    he(O) && (O = ve(O)), A.hoists.push(O);
    const M = ve(`_hoisted_${A.hoists.length}`, !1, O.loc, 2);
    return M.hoisted = O, M;
  }, cache: (O, M = !1) => /* @__PURE__ */ function(P, T, W = !1) {
    return { type: 20, index: P, value: T, isVNode: W, loc: Rt };
  }(A.cached++, O, M) };
  return A;
}
function bm(e, t) {
  const n = ym(e, t);
  Cs(e, n), t.hoistStatic && vm(e, n), t.ssr || function(o, r) {
    const { helper: s } = r, { children: a } = o;
    if (a.length === 1) {
      const i = a[0];
      if (Pd(o, i) && i.codegenNode) {
        const l = i.codegenNode;
        l.type === 13 && qi(l, r), o.codegenNode = l;
      } else
        o.codegenNode = i;
    } else if (a.length > 1) {
      let i = 64;
      o.codegenNode = fr(r, s(dr), void 0, o.children, i + "", void 0, void 0, !0, void 0, !1);
    }
  }(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0;
}
function Cs(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, o = [];
  for (let s = 0; s < n.length; s++) {
    const a = n[s](e, t);
    if (a && (ne(a) ? o.push(...a) : o.push(a)), !t.currentNode)
      return;
    e = t.currentNode;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(br);
      break;
    case 5:
      t.ssr || t.helper(Ls);
      break;
    case 9:
      for (let s = 0; s < e.branches.length; s++)
        Cs(e.branches[s], t);
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
          const u = s.children[i];
          he(u) || (a.parent = s, a.childIndex = i, a.onNodeRemoved = l, Cs(u, a));
        }
      })(e, t);
  }
  t.currentNode = e;
  let r = o.length;
  for (; r--; )
    o[r]();
}
function zd(e, t) {
  const n = he(e) ? (o) => o === e : (o) => e.test(o);
  return (o, r) => {
    if (o.type === 1) {
      const { props: s } = o;
      if (o.tagType === 3 && s.some(am))
        return;
      const a = [];
      for (let i = 0; i < s.length; i++) {
        const l = s[i];
        if (l.type === 7 && n(l.name)) {
          s.splice(i, 1), i--;
          const u = t(o, l, r);
          u && a.push(u);
        }
      }
      return a;
    }
  };
}
const Ur = "/*#__PURE__*/", au = (e) => `${Mo[e]}: _${Mo[e]}`;
function wm(e, { mode: t = "function", prefixIdentifiers: n = t === "module", sourceMap: o = !1, filename: r = "template.vue.html", scopeId: s = null, optimizeImports: a = !1, runtimeGlobalName: i = "Vue", runtimeModuleName: l = "vue", ssrRuntimeModuleName: u = "vue/server-renderer", ssr: c = !1, isTS: d = !1, inSSR: p = !1 }) {
  const h = { mode: t, prefixIdentifiers: n, sourceMap: o, filename: r, scopeId: s, optimizeImports: a, runtimeGlobalName: i, runtimeModuleName: l, ssrRuntimeModuleName: u, ssr: c, isTS: d, inSSR: p, source: e.source, code: "", column: 1, line: 1, offset: 0, indentLevel: 0, pure: !1, map: void 0, helper: (g) => `_${Mo[g]}`, push(g, b = -2, _) {
    h.code += g;
  }, indent() {
    f(++h.indentLevel);
  }, deindent(g = !1) {
    g ? --h.indentLevel : f(--h.indentLevel);
  }, newline() {
    f(h.indentLevel);
  } };
  function f(g) {
    h.push(`
` + "  ".repeat(g), 0);
  }
  return h;
}
function xm(e, t = {}) {
  const n = wm(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const { mode: o, push: r, prefixIdentifiers: s, indent: a, deindent: i, newline: l, ssr: u } = n, c = Array.from(e.helpers), d = c.length > 0, p = !s && o !== "module";
  if (function(f, g) {
    const { push: b, newline: _, runtimeGlobalName: v } = g, y = v, x = Array.from(f.helpers);
    x.length > 0 && (b(`const _Vue = ${y}
`, -1), f.hoists.length) && b(`const { ${[$i, Ri, br, Di, Sd].filter((w) => x.includes(w)).map(au).join(", ")} } = _Vue
`, -1), function(w, I) {
      if (!w.length)
        return;
      I.pure = !0;
      const { push: F, newline: A } = I;
      A();
      for (let O = 0; O < w.length; O++) {
        const M = w[O];
        M && (F(`const _hoisted_${O + 1} = `), gt(M, I), A());
      }
      I.pure = !1;
    }(f.hoists, g), _(), b("return ");
  }(e, n), r(`function ${u ? "ssrRender" : "render"}(${(u ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ")}) {`), a(), p && (r("with (_ctx) {"), a(), d && (r(`const { ${c.map(au).join(", ")} } = _Vue
`, -1), l())), e.components.length && (iu(e.components, "component", n), (e.directives.length || e.temps > 0) && l()), e.directives.length && (iu(e.directives, "directive", n), e.temps > 0 && l()), e.temps > 0) {
    r("let ");
    for (let f = 0; f < e.temps; f++)
      r(`${f > 0 ? ", " : ""}_temp${f}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (r(`
`, 0), l()), u || r("return "), e.codegenNode ? gt(e.codegenNode, n) : r("null"), p && (i(), r("}")), i(), r("}"), { ast: e, code: n.code, preamble: "", map: n.map ? n.map.toJSON() : void 0 };
}
function iu(e, t, { helper: n, push: o, newline: r, isTS: s }) {
  const a = n(t === "component" ? Ni : Fi);
  for (let i = 0; i < e.length; i++) {
    let l = e[i];
    const u = l.endsWith("__self");
    u && (l = l.slice(0, -6)), o(`const ${za(l, t)} = ${a}(${JSON.stringify(l)}${u ? ", true" : ""})${s ? "!" : ""}`), i < e.length - 1 && r();
  }
}
function Wa(e, t) {
  const n = e.length > 3 || !1;
  t.push("["), n && t.indent(), Xo(e, t, n), n && t.deindent(), t.push("]");
}
function Xo(e, t, n = !1, o = !0) {
  const { push: r, newline: s } = t;
  for (let a = 0; a < e.length; a++) {
    const i = e[a];
    he(i) ? r(i, -3) : ne(i) ? Wa(i, t) : gt(i, t), a < e.length - 1 && (n ? (o && r(","), s()) : o && r(", "));
  }
}
function gt(e, t) {
  if (he(e))
    t.push(e, -3);
  else if (Kt(e))
    t.push(t.helper(e));
  else
    switch (e.type) {
      case 1:
      case 9:
      case 11:
      case 12:
        gt(e.codegenNode, t);
        break;
      case 2:
        (function(n, o) {
          o.push(JSON.stringify(n.content), -3, n);
        })(e, t);
        break;
      case 4:
        lu(e, t);
        break;
      case 5:
        (function(n, o) {
          const { push: r, helper: s, pure: a } = o;
          a && r(Ur), r(`${s(Ls)}(`), gt(n.content, o), r(")");
        })(e, t);
        break;
      case 8:
        Vd(e, t);
        break;
      case 3:
        (function(n, o) {
          const { push: r, helper: s, pure: a } = o;
          a && r(Ur), r(`${s(br)}(${JSON.stringify(n.content)})`, -3, n);
        })(e, t);
        break;
      case 13:
        (function(n, o) {
          const { push: r, helper: s, pure: a } = o, { tag: i, props: l, children: u, patchFlag: c, dynamicProps: d, directives: p, isBlock: h, disableTracking: f, isComponent: g } = n;
          p && r(s(Pi) + "("), h && r(`(${s(po)}(${f ? "true" : ""}), `), a && r(Ur);
          const b = h ? jo(o.inSSR, g) : Lo(o.inSSR, g);
          r(s(b) + "(", -2, n), Xo(function(_) {
            let v = _.length;
            for (; v-- && _[v] == null; )
              ;
            return _.slice(0, v + 1).map((y) => y || "null");
          }([i, l, u, c, d]), o), r(")"), h && r(")"), p && (r(", "), gt(p, o), r(")"));
        })(e, t);
        break;
      case 14:
        (function(n, o) {
          const { push: r, helper: s, pure: a } = o, i = he(n.callee) ? n.callee : s(n.callee);
          a && r(Ur), r(i + "(", -2, n), Xo(n.arguments, o), r(")");
        })(e, t);
        break;
      case 15:
        (function(n, o) {
          const { push: r, indent: s, deindent: a, newline: i } = o, { properties: l } = n;
          if (!l.length)
            return void r("{}", -2, n);
          const u = l.length > 1 || !1;
          r(u ? "{" : "{ "), u && s();
          for (let c = 0; c < l.length; c++) {
            const { key: d, value: p } = l[c];
            km(d, o), r(": "), gt(p, o), c < l.length - 1 && (r(","), i());
          }
          u && a(), r(u ? "}" : " }");
        })(e, t);
        break;
      case 17:
        (function(n, o) {
          Wa(n.elements, o);
        })(e, t);
        break;
      case 18:
        (function(n, o) {
          const { push: r, indent: s, deindent: a } = o, { params: i, returns: l, body: u, newline: c, isSlot: d } = n;
          d && r(`_${Mo[zi]}(`), r("(", -2, n), ne(i) ? Xo(i, o) : i && gt(i, o), r(") => "), (c || u) && (r("{"), s()), l ? (c && r("return "), ne(l) ? Wa(l, o) : gt(l, o)) : u && gt(u, o), (c || u) && (a(), r("}")), d && r(")");
        })(e, t);
        break;
      case 19:
        (function(n, o) {
          const { test: r, consequent: s, alternate: a, newline: i } = n, { push: l, indent: u, deindent: c, newline: d } = o;
          if (r.type === 4) {
            const h = !Hi(r.content);
            h && l("("), lu(r, o), h && l(")");
          } else
            l("("), gt(r, o), l(")");
          i && u(), o.indentLevel++, i || l(" "), l("? "), gt(s, o), o.indentLevel--, i && d(), i || l(" "), l(": ");
          const p = a.type === 19;
          p || o.indentLevel++, gt(a, o), p || o.indentLevel--, i && c(!0);
        })(e, t);
        break;
      case 20:
        (function(n, o) {
          const { push: r, helper: s, indent: a, deindent: i, newline: l } = o;
          r(`_cache[${n.index}] || (`), n.isVNode && (a(), r(`${s(gs)}(-1),`), l()), r(`_cache[${n.index}] = `), gt(n.value, o), n.isVNode && (r(","), l(), r(`${s(gs)}(1),`), l(), r(`_cache[${n.index}]`), i()), r(")");
        })(e, t);
        break;
      case 21:
        Xo(e.body, t, !0, !1);
    }
}
function lu(e, t) {
  const { content: n, isStatic: o } = e;
  t.push(o ? JSON.stringify(n) : n, -3, e);
}
function Vd(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const o = e.children[n];
    he(o) ? t.push(o, -3) : gt(o, t);
  }
}
function km(e, t) {
  const { push: n } = t;
  e.type === 8 ? (n("["), Vd(e, t), n("]")) : e.isStatic ? n(Hi(e.content) ? e.content : JSON.stringify(e.content), -2, e) : n(`[${e.content}]`, -3, e);
}
const _m = zd(/^(if|else|else-if)$/, (e, t, n) => function(o, r, s, a) {
  if (!(r.name === "else" || r.exp && r.exp.content.trim())) {
    const i = r.exp ? r.exp.loc : o.loc;
    s.onError(He(28, r.loc)), r.exp = ve("true", !1, i);
  }
  if (r.name === "if") {
    const i = uu(o, r), l = { type: 9, loc: o.loc, branches: [i] };
    if (s.replaceNode(l), a)
      return a(l, i, !0);
  } else {
    const i = s.parent.children;
    let l = i.indexOf(o);
    for (; l-- >= -1; ) {
      const u = i[l];
      if (u && u.type === 3)
        s.removeNode(u);
      else {
        if (!u || u.type !== 2 || u.content.trim().length) {
          if (u && u.type === 9) {
            r.name === "else-if" && u.branches[u.branches.length - 1].condition === void 0 && s.onError(He(30, o.loc)), s.removeNode();
            const c = uu(o, r);
            u.branches.push(c);
            const d = a && a(u, c, !1);
            Cs(c, s), d && d(), s.currentNode = null;
          } else
            s.onError(He(30, o.loc));
          break;
        }
        s.removeNode(u);
      }
    }
  }
}(e, t, n, (o, r, s) => {
  const a = n.parent.children;
  let i = a.indexOf(o), l = 0;
  for (; i-- >= 0; ) {
    const u = a[i];
    u && u.type === 9 && (l += u.branches.length);
  }
  return () => {
    if (s)
      o.codegenNode = cu(r, l, n);
    else {
      const u = function(c) {
        for (; ; )
          if (c.type === 19) {
            if (c.alternate.type !== 19)
              return c;
            c = c.alternate;
          } else
            c.type === 20 && (c = c.value);
      }(o.codegenNode);
      u.alternate = cu(r, l + o.branches.length - 1, n);
    }
  };
}));
function uu(e, t) {
  const n = e.tagType === 3;
  return { type: 10, loc: e.loc, condition: t.name === "else" ? void 0 : t.exp, children: n && !Wt(e, "for") ? e.children : [e], userKey: js(e, "key"), isTemplateIf: n };
}
function cu(e, t, n) {
  return e.condition ? ja(e.condition, du(e, t, n), et(n.helper(br), ['""', "true"])) : du(e, t, n);
}
function du(e, t, n) {
  const { helper: o } = n, r = Ve("key", ve(`${t}`, !1, Rt, 2)), { children: s } = e, a = s[0];
  if (s.length !== 1 || a.type !== 1) {
    if (s.length === 1 && a.type === 11) {
      const l = a.codegenNode;
      return xs(l, r, n), l;
    }
    return fr(n, o(dr), Ut([r]), s, 64 + "", void 0, void 0, !0, !1, !1, e.loc);
  }
  {
    const l = a.codegenNode, u = (i = l).type === 14 && i.callee === Vi ? i.arguments[1].returns : i;
    return u.type === 13 && qi(u, n), xs(u, r, n), l;
  }
  var i;
}
const Cm = zd("for", (e, t, n) => {
  const { helper: o, removeHelper: r } = n;
  return function(s, a, i, l) {
    if (!a.exp)
      return void i.onError(He(31, a.loc));
    const u = a.forParseResult;
    if (!u)
      return void i.onError(He(32, a.loc));
    qd(u);
    const { scopes: c } = i, { source: d, value: p, key: h, index: f } = u, g = { type: 11, loc: a.loc, source: d, valueAlias: p, keyAlias: h, objectIndexAlias: f, parseResult: u, children: bs(s) ? s.children : [s] };
    i.replaceNode(g), c.vFor++;
    const b = l && l(g);
    return () => {
      c.vFor--, b && b();
    };
  }(e, t, n, (s) => {
    const a = et(o(Mi), [s.source]), i = bs(e), l = Wt(e, "memo"), u = js(e, "key"), c = u && (u.type === 6 ? ve(u.value.content, !0) : u.exp), d = u ? Ve("key", c) : null, p = s.source.type === 4 && s.source.constType > 0, h = p ? 64 : u ? 128 : 256;
    return s.codegenNode = fr(n, o(dr), void 0, a, h + "", void 0, void 0, !0, !p, !1, e.loc), () => {
      let f;
      const { children: g } = s, b = g.length !== 1 || g[0].type !== 1, _ = ws(e) ? e : i && e.children.length === 1 && ws(e.children[0]) ? e.children[0] : null;
      if (_ ? (f = _.codegenNode, i && d && xs(f, d, n)) : b ? f = fr(n, o(dr), d ? Ut([d]) : void 0, e.children, "64", void 0, void 0, !0, void 0, !1) : (f = g[0].codegenNode, i && d && xs(f, d, n), f.isBlock !== !p && (f.isBlock ? (r(po), r(jo(n.inSSR, f.isComponent))) : r(Lo(n.inSSR, f.isComponent))), f.isBlock = !p, f.isBlock ? (o(po), o(jo(n.inSSR, f.isComponent))) : o(Lo(n.inSSR, f.isComponent))), l) {
        const v = Uo(Ha(s.parseResult, [ve("_cached")]));
        v.body = { type: 21, body: [Jt(["const _memo = (", l.exp, ")"]), Jt(["if (_cached", ...c ? [" && _cached.key === ", c] : [], ` && ${n.helperString(Id)}(_cached, _memo)) return _cached`]), Jt(["const _item = ", f]), ve("_item.memo = _memo"), ve("return _item")], loc: Rt }, a.arguments.push(v, ve("_cache"), ve(String(n.cached++)));
      } else
        a.arguments.push(Uo(Ha(s.parseResult), f, !0));
    };
  });
});
function qd(e, t) {
  e.finalized || (e.finalized = !0);
}
function Ha({ value: e, key: t, index: n }, o = []) {
  return function(r) {
    let s = r.length;
    for (; s-- && !r[s]; )
      ;
    return r.slice(0, s + 1).map((a, i) => a || ve("_".repeat(i + 1), !1));
  }([e, t, n, ...o]);
}
const pu = ve("undefined", !1), Sm = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3) && Wt(e, "slot"))
    return t.scopes.vSlot++, () => {
      t.scopes.vSlot--;
    };
}, Am = (e, t, n, o) => Uo(e, n, !1, !0, n.length ? n[0].loc : o);
function Em(e, t, n = Am) {
  t.helper(zi);
  const { children: o, loc: r } = e, s = [], a = [];
  let i = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const l = Wt(e, "slot", !0);
  if (l) {
    const { arg: b, exp: _ } = l;
    b && !St(b) && (i = !0), s.push(Ve(b || ve("default", !0), n(_, void 0, o, r)));
  }
  let u = !1, c = !1;
  const d = [], p = /* @__PURE__ */ new Set();
  let h = 0;
  for (let b = 0; b < o.length; b++) {
    const _ = o[b];
    let v;
    if (!bs(_) || !(v = Wt(_, "slot", !0))) {
      _.type !== 3 && d.push(_);
      continue;
    }
    if (l) {
      t.onError(He(37, v.loc));
      break;
    }
    u = !0;
    const { children: y, loc: x } = _, { arg: w = ve("default", !0), exp: I, loc: F } = v;
    let A;
    St(w) ? A = w ? w.content : "default" : i = !0;
    const O = Wt(_, "for"), M = n(I, O, y, x);
    let P, T;
    if (P = Wt(_, "if"))
      i = !0, a.push(ja(P.exp, Lr(w, M, h++), pu));
    else if (T = Wt(_, /^else(-if)?$/, !0)) {
      let W, G = b;
      for (; G-- && (W = o[G], W.type === 3); )
        ;
      if (W && bs(W) && Wt(W, "if")) {
        o.splice(b, 1), b--;
        let X = a[a.length - 1];
        for (; X.alternate.type === 19; )
          X = X.alternate;
        X.alternate = T.exp ? ja(T.exp, Lr(w, M, h++), pu) : Lr(w, M, h++);
      } else
        t.onError(He(30, T.loc));
    } else if (O) {
      i = !0;
      const W = O.forParseResult;
      W ? (qd(W), a.push(et(t.helper(Mi), [W.source, Uo(Ha(W), Lr(w, M), !0)]))) : t.onError(He(32, O.loc));
    } else {
      if (A) {
        if (p.has(A)) {
          t.onError(He(38, F));
          continue;
        }
        p.add(A), A === "default" && (c = !0);
      }
      s.push(Ve(w, M));
    }
  }
  if (!l) {
    const b = (_, v) => Ve("default", n(_, void 0, v, r));
    u ? d.length && d.some((_) => Wd(_)) && (c ? t.onError(He(39, d[0].loc)) : s.push(b(void 0, d))) : s.push(b(void 0, o));
  }
  const f = i ? 2 : ns(e.children) ? 3 : 1;
  let g = Ut(s.concat(Ve("_", ve(f + "", !1))), r);
  return a.length && (g = et(t.helper(Ed), [g, hr(a)])), { slots: g, hasDynamicSlots: i };
}
function Lr(e, t, n) {
  const o = [Ve("name", e), Ve("fn", t)];
  return n != null && o.push(Ve("key", ve(String(n), !0))), Ut(o);
}
function ns(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || ns(n.children))
          return !0;
        break;
      case 9:
        if (ns(n.branches))
          return !0;
        break;
      case 10:
      case 11:
        if (ns(n.children))
          return !0;
    }
  }
  return !1;
}
function Wd(e) {
  return e.type !== 2 && e.type !== 12 || (e.type === 2 ? !!e.content.trim() : Wd(e.content));
}
const Hd = /* @__PURE__ */ new WeakMap(), Im = (e, t) => function() {
  if ((e = t.currentNode).type !== 1 || e.tagType !== 0 && e.tagType !== 1)
    return;
  const { tag: n, props: o } = e, r = e.tagType === 1;
  let s = r ? function(g, b, _ = !1) {
    let { tag: v } = g;
    const y = Ja(v), x = js(g, "is");
    if (x)
      if (y) {
        const I = x.type === 6 ? x.value && ve(x.value.content, !0) : x.exp;
        if (I)
          return et(b.helper(Ma), [I]);
      } else
        x.type === 6 && x.value.content.startsWith("vue:") && (v = x.value.content.slice(4));
    const w = Od(v) || b.isBuiltInComponent(v);
    return w ? (_ || b.helper(w), w) : (b.helper(Ni), b.components.add(v), za(v, "component"));
  }(e, t) : `"${n}"`;
  const a = Ie(s) && s.callee === Ma;
  let i, l, u, c, d, p, h = 0, f = a || s === rr || s === Bi || !r && (n === "svg" || n === "foreignObject");
  if (o.length > 0) {
    const g = Jd(e, t, void 0, r, a);
    i = g.props, h = g.patchFlag, d = g.dynamicPropNames;
    const b = g.directives;
    p = b && b.length ? hr(b.map((_) => function(v, y) {
      const x = [], w = Hd.get(v);
      w ? x.push(y.helperString(w)) : (y.helper(Fi), y.directives.add(v.name), x.push(za(v.name, "directive")));
      const { loc: I } = v;
      if (v.exp && x.push(v.exp), v.arg && (v.exp || x.push("void 0"), x.push(v.arg)), Object.keys(v.modifiers).length) {
        v.arg || (v.exp || x.push("void 0"), x.push("void 0"));
        const F = ve("true", !1, I);
        x.push(Ut(v.modifiers.map((A) => Ve(A, F)), I));
      }
      return hr(x, v.loc);
    }(_, t))) : void 0, g.shouldUseBlock && (f = !0);
  }
  if (e.children.length > 0)
    if (s === ms && (f = !0, h |= 1024), r && s !== rr && s !== ms) {
      const { slots: g, hasDynamicSlots: b } = Em(e, t);
      l = g, b && (h |= 1024);
    } else if (e.children.length === 1 && s !== rr) {
      const g = e.children[0], b = g.type, _ = b === 5 || b === 8;
      _ && Lt(g, t) === 0 && (h |= 1), l = _ || b === 2 ? g : e.children;
    } else
      l = e.children;
  h !== 0 && (u = String(h), d && d.length && (c = function(g) {
    let b = "[";
    for (let _ = 0, v = g.length; _ < v; _++)
      b += JSON.stringify(g[_]), _ < v - 1 && (b += ", ");
    return b + "]";
  }(d))), e.codegenNode = fr(t, s, i, l, u, c, p, !!f, !1, r, e.loc);
};
function Jd(e, t, n = e.props, o, r, s = !1) {
  const { tag: a, loc: i, children: l } = e;
  let u = [];
  const c = [], d = [], p = l.length > 0;
  let h = !1, f = 0, g = !1, b = !1, _ = !1, v = !1, y = !1, x = !1;
  const w = [], I = (O) => {
    u.length && (c.push(Ut(fu(u), i)), u = []), O && c.push(O);
  }, F = ({ key: O, value: M }) => {
    if (St(O)) {
      const P = O.content, T = fo(P);
      if (!T || o && !r || P.toLowerCase() === "onclick" || P === "onUpdate:modelValue" || Gn(P) || (v = !0), T && Gn(P) && (x = !0), T && M.type === 14 && (M = M.arguments[0]), M.type === 20 || (M.type === 4 || M.type === 8) && Lt(M, t) > 0)
        return;
      P === "ref" ? g = !0 : P === "class" ? b = !0 : P === "style" ? _ = !0 : P === "key" || w.includes(P) || w.push(P), !o || P !== "class" && P !== "style" || w.includes(P) || w.push(P);
    } else
      y = !0;
  };
  for (let O = 0; O < n.length; O++) {
    const M = n[O];
    if (M.type === 6) {
      const { loc: P, name: T, nameLoc: W, value: G } = M;
      let X = !0;
      if (T === "ref" && (g = !0, t.scopes.vFor > 0 && u.push(Ve(ve("ref_for", !0), ve("true")))), T === "is" && (Ja(a) || G && G.content.startsWith("vue:")))
        continue;
      u.push(Ve(ve(T, !0, W), ve(G ? G.content : "", X, G ? G.loc : P)));
    } else {
      const { name: P, arg: T, exp: W, loc: G, modifiers: X } = M, ee = P === "bind", ie = P === "on";
      if (P === "slot") {
        o || t.onError(He(40, G));
        continue;
      }
      if (P === "once" || P === "memo" || P === "is" || ee && Eo(T, "is") && Ja(a) || ie && s)
        continue;
      if ((ee && Eo(T, "key") || ie && p && Eo(T, "vue:before-update")) && (h = !0), ee && Eo(T, "ref") && t.scopes.vFor > 0 && u.push(Ve(ve("ref_for", !0), ve("true"))), !T && (ee || ie)) {
        y = !0, W ? ee ? (I(), c.push(W)) : I({ type: 14, loc: G, callee: t.helper(ji), arguments: o ? [W] : [W, "true"] }) : t.onError(He(ee ? 34 : 35, G));
        continue;
      }
      ee && X.includes("prop") && (f |= 32);
      const ge = t.directiveTransforms[P];
      if (ge) {
        const { props: Ue, needRuntime: mt } = ge(M, e, t);
        !s && Ue.forEach(F), ie && T && !St(T) ? I(Ut(Ue, i)) : u.push(...Ue), mt && (d.push(M), Kt(mt) && Hd.set(M, mt));
      } else
        qp(P) || (d.push(M), p && (h = !0));
    }
  }
  let A;
  if (c.length ? (I(), A = c.length > 1 ? et(t.helper(vs), c, i) : c[0]) : u.length && (A = Ut(fu(u), i)), y ? f |= 16 : (b && !o && (f |= 2), _ && !o && (f |= 4), w.length && (f |= 8), v && (f |= 32)), h || f !== 0 && f !== 32 || !(g || x || d.length > 0) || (f |= 512), !t.inSSR && A)
    switch (A.type) {
      case 15:
        let O = -1, M = -1, P = !1;
        for (let G = 0; G < A.properties.length; G++) {
          const X = A.properties[G].key;
          St(X) ? X.content === "class" ? O = G : X.content === "style" && (M = G) : X.isHandlerKey || (P = !0);
        }
        const T = A.properties[O], W = A.properties[M];
        P ? A = et(t.helper(pr), [A]) : (T && !St(T.value) && (T.value = et(t.helper(Ui), [T.value])), W && (_ || W.value.type === 4 && W.value.content.trim()[0] === "[" || W.value.type === 17) && (W.value = et(t.helper(Li), [W.value])));
        break;
      case 14:
        break;
      default:
        A = et(t.helper(pr), [et(t.helper(wr), [A])]);
    }
  return { props: A, directives: d, patchFlag: f, dynamicPropNames: w, shouldUseBlock: h };
}
function fu(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (r.key.type === 8 || !r.key.isStatic) {
      n.push(r);
      continue;
    }
    const s = r.key.content, a = t.get(s);
    a ? (s === "style" || s === "class" || fo(s)) && Tm(a, r) : (t.set(s, r), n.push(r));
  }
  return n;
}
function Tm(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = hr([e.value, t.value], e.loc);
}
function Ja(e) {
  return e === "component" || e === "Component";
}
const Om = (e, t) => {
  if (ws(e)) {
    const { children: n, loc: o } = e, { slotName: r, slotProps: s } = function(l, u) {
      let c, d = '"default"';
      const p = [];
      for (let h = 0; h < l.props.length; h++) {
        const f = l.props[h];
        f.type === 6 ? f.value && (f.name === "name" ? d = JSON.stringify(f.value.content) : (f.name = Ne(f.name), p.push(f))) : f.name === "bind" && Eo(f.arg, "name") ? f.exp && (d = f.exp) : (f.name === "bind" && f.arg && St(f.arg) && (f.arg.content = Ne(f.arg.content)), p.push(f));
      }
      if (p.length > 0) {
        const { props: h, directives: f } = Jd(l, u, p, !1, !1);
        c = h, f.length && u.onError(He(36, f[0].loc));
      }
      return { slotName: d, slotProps: c };
    }(e, t), a = [t.prefixIdentifiers ? "_ctx.$slots" : "$slots", r, "{}", "undefined", "true"];
    let i = 2;
    s && (a[2] = s, i = 3), n.length && (a[3] = Uo([], n, !1, !1, o), i = 4), t.scopeId && !t.slotted && (i = 5), a.splice(i), e.codegenNode = et(t.helper(Ad), a, o);
  }
}, Bm = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, Kd = (e, t, n, o) => {
  const { loc: r, modifiers: s, arg: a } = e;
  let i;
  if (a.type === 4)
    if (a.isStatic) {
      let d = a.content;
      d.startsWith("vue:") && (d = `vnode-${d.slice(4)}`), i = ve(t.tagType !== 0 || d.startsWith("vnode") || !/[A-Z]/.test(d) ? Nn(Ne(d)) : `on:${d}`, !0, a.loc);
    } else
      i = Jt([`${n.helperString(La)}(`, a, ")"]);
  else
    i = a, i.children.unshift(`${n.helperString(La)}(`), i.children.push(")");
  let l = e.exp;
  l && !l.content.trim() && (l = void 0);
  let u = n.cacheHandlers && !l && !n.inVOnce;
  if (l) {
    const d = Bd(l.content), p = !(d || Bm.test(l.content)), h = l.content.includes(";");
    (p || u && d) && (l = Jt([`${p ? "$event" : "(...args)"} => ${h ? "{" : "("}`, l, h ? "}" : ")"]));
  }
  let c = { props: [Ve(i, l || ve("() => {}", !1, r))] };
  return o && (c = o(c)), u && (c.props[0].value = n.cache(c.props[0].value)), c.props.forEach((d) => d.key.isHandlerKey = !0), c;
}, $m = (e, t, n) => {
  const { modifiers: o, loc: r } = e, s = e.arg;
  let { exp: a } = e;
  if (!a && s.type === 4) {
    const i = Ne(s.content);
    a = e.exp = ve(i, !1, s.loc);
  }
  return s.type !== 4 ? (s.children.unshift("("), s.children.push(') || ""')) : s.isStatic || (s.content = `${s.content} || ""`), o.includes("camel") && (s.type === 4 ? s.content = s.isStatic ? Ne(s.content) : `${n.helperString(Ua)}(${s.content})` : (s.children.unshift(`${n.helperString(Ua)}(`), s.children.push(")"))), n.inSSR || (o.includes("prop") && hu(s, "."), o.includes("attr") && hu(s, "^")), !a || a.type === 4 && !a.content.trim() ? { props: [Ve(s, ve("", !0, r))] } : { props: [Ve(s, a)] };
}, hu = (e, t) => {
  e.type === 4 ? e.content = e.isStatic ? t + e.content : `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, Rm = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let o, r = !1;
      for (let s = 0; s < n.length; s++) {
        const a = n[s];
        if (oa(a)) {
          r = !0;
          for (let i = s + 1; i < n.length; i++) {
            const l = n[i];
            if (!oa(l)) {
              o = void 0;
              break;
            }
            o || (o = n[s] = Jt([a], a.loc)), o.children.push(" + ", l), n.splice(i, 1), i--;
          }
        }
      }
      if (r && (n.length !== 1 || e.type !== 0 && (e.type !== 1 || e.tagType !== 0 || e.props.find((s) => s.type === 7 && !t.directiveTransforms[s.name]))))
        for (let s = 0; s < n.length; s++) {
          const a = n[s];
          if (oa(a) || a.type === 8) {
            const i = [];
            a.type === 2 && a.content === " " || i.push(a), t.ssr || Lt(a, t) !== 0 || i.push("1"), n[s] = { type: 12, content: a, loc: a.loc, codegenNode: et(t.helper(Di), i) };
          }
        }
    };
}, mu = /* @__PURE__ */ new WeakSet(), Dm = (e, t) => {
  if (e.type === 1 && Wt(e, "once", !0))
    return mu.has(e) || t.inVOnce || t.inSSR ? void 0 : (mu.add(e), t.inVOnce = !0, t.helper(gs), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(n.codegenNode, !0));
    });
}, Gd = (e, t, n) => {
  const { exp: o, arg: r } = e;
  if (!o)
    return n.onError(He(41, e.loc)), jr();
  const s = o.loc.source, a = o.type === 4 ? o.content : s, i = n.bindingMetadata[s];
  if (i === "props" || i === "props-aliased")
    return jr();
  if (!a.trim() || !Bd(a))
    return n.onError(He(42, o.loc)), jr();
  const l = r || ve("modelValue", !0), u = r ? St(r) ? `onUpdate:${Ne(r.content)}` : Jt(['"onUpdate:" + ', r]) : "onUpdate:modelValue";
  let c;
  c = Jt([`${n.isTS ? "($event: any)" : "$event"} => ((`, o, ") = $event)"]);
  const d = [Ve(l, e.exp), Ve(u, c)];
  if (e.modifiers.length && t.tagType === 1) {
    const p = e.modifiers.map((f) => (Hi(f) ? f : JSON.stringify(f)) + ": true").join(", "), h = r ? St(r) ? `${r.content}Modifiers` : Jt([r, ' + "Modifiers"']) : "modelModifiers";
    d.push(Ve(h, ve(`{ ${p} }`, !1, e.loc, 2)));
  }
  return jr(d);
};
function jr(e = []) {
  return { props: e };
}
const vu = /* @__PURE__ */ new WeakSet(), Nm = (e, t) => {
  if (e.type === 1) {
    const n = Wt(e, "memo");
    return !n || vu.has(e) ? void 0 : (vu.add(e), () => {
      const o = e.codegenNode || t.currentNode.codegenNode;
      o && o.type === 13 && (e.tagType !== 1 && qi(o, t), e.codegenNode = et(t.helper(Vi), [n.exp, Uo(void 0, o), "_cache", String(t.cached++)]));
    });
  }
};
function Fm(e, t = {}) {
  const n = t.onError || Wi, o = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(He(47)) : o && n(He(48)), t.cacheHandlers && n(He(49)), t.scopeId && !o && n(He(50));
  const r = Se({}, t, { prefixIdentifiers: !1 }), s = he(e) ? mm(e, r) : e, [a, i] = [[Dm, _m, Nm, Cm, Om, Im, Sm, Rm], { on: Kd, bind: $m, model: Gd }];
  return bm(s, Se({}, r, { nodeTransforms: [...a, ...t.nodeTransforms || []], directiveTransforms: Se({}, i, t.directiveTransforms || {}) })), xm(s, r);
}
const Qd = Symbol(""), Yd = Symbol(""), Zd = Symbol(""), Xd = Symbol(""), Ka = Symbol(""), ep = Symbol(""), tp = Symbol(""), np = Symbol(""), op = Symbol(""), rp = Symbol("");
var ra;
let _o;
ra = { [Qd]: "vModelRadio", [Yd]: "vModelCheckbox", [Zd]: "vModelText", [Xd]: "vModelSelect", [Ka]: "vModelDynamic", [ep]: "withModifiers", [tp]: "withKeys", [np]: "vShow", [op]: "Transition", [rp]: "TransitionGroup" }, Object.getOwnPropertySymbols(ra).forEach((e) => {
  Mo[e] = ra[e];
});
const Pm = { parseMode: "html", isVoidTag: tf, isNativeTag: (e) => Zp(e) || Xp(e) || ef(e), isPreTag: (e) => e === "pre", decodeEntities: function(e, t = !1) {
  return _o || (_o = document.createElement("div")), t ? (_o.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, _o.children[0].getAttribute("foo")) : (_o.innerHTML = e, _o.textContent);
}, isBuiltInComponent: (e) => e === "Transition" || e === "transition" ? op : e === "TransitionGroup" || e === "transition-group" ? rp : void 0, getNamespace(e, t, n) {
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
} }, Mm = (e, t) => {
  const n = Mu(e);
  return ve(JSON.stringify(n), !1, t, 3);
};
function An(e, t) {
  return He(e, t);
}
const Um = $t("passive,once,capture"), Lm = $t("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"), jm = $t("left,right"), gu = $t("onkeyup,onkeydown,onkeypress", !0), yu = (e, t) => St(e) && e.content.toLowerCase() === "onclick" ? ve(t, !0) : e.type !== 4 ? Jt(["(", e, `) === "onClick" ? "${t}" : (`, e, ")"]) : e, zm = (e, t) => {
  e.type !== 1 || e.tagType !== 0 || e.tag !== "script" && e.tag !== "style" || t.removeNode();
}, Vm = [(e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = { type: 7, name: "bind", arg: ve("style", !0, t.loc), exp: Mm(t.value.content, t.loc), modifiers: [], loc: t.loc });
  });
}], qm = { cloak: () => ({ props: [] }), html: (e, t, n) => {
  const { exp: o, loc: r } = e;
  return o || n.onError(An(53, r)), t.children.length && (n.onError(An(54, r)), t.children.length = 0), { props: [Ve(ve("innerHTML", !0, r), o || ve("", !0))] };
}, text: (e, t, n) => {
  const { exp: o, loc: r } = e;
  return o || n.onError(An(55, r)), t.children.length && (n.onError(An(56, r)), t.children.length = 0), { props: [Ve(ve("textContent", !0), o ? Lt(o, n) > 0 ? o : et(n.helperString(Ls), [o], r) : ve("", !0))] };
}, model: (e, t, n) => {
  const o = Gd(e, t, n);
  if (!o.props.length || t.tagType === 1)
    return o;
  e.arg && n.onError(An(58, e.arg.loc));
  const { tag: r } = t, s = n.isCustomElement(r);
  if (r === "input" || r === "textarea" || r === "select" || s) {
    let a = Zd, i = !1;
    if (r === "input" || s) {
      const l = js(t, "type");
      if (l) {
        if (l.type === 7)
          a = Ka;
        else if (l.value)
          switch (l.value.content) {
            case "radio":
              a = Qd;
              break;
            case "checkbox":
              a = Yd;
              break;
            case "file":
              i = !0, n.onError(An(59, e.loc));
          }
      } else
        (function(u) {
          return u.props.some((c) => !(c.type !== 7 || c.name !== "bind" || c.arg && c.arg.type === 4 && c.arg.isStatic));
        })(t) && (a = Ka);
    } else
      r === "select" && (a = Xd);
    i || (o.needRuntime = n.helper(a));
  } else
    n.onError(An(57, e.loc));
  return o.props = o.props.filter((a) => !(a.key.type === 4 && a.key.content === "modelValue")), o;
}, on: (e, t, n) => Kd(e, t, n, (o) => {
  const { modifiers: r } = e;
  if (!r.length)
    return o;
  let { key: s, value: a } = o.props[0];
  const { keyModifiers: i, nonKeyModifiers: l, eventOptionModifiers: u } = ((c, d, p, h) => {
    const f = [], g = [], b = [];
    for (let _ = 0; _ < d.length; _++) {
      const v = d[_];
      Um(v) ? b.push(v) : jm(v) ? St(c) ? gu(c.content) ? f.push(v) : g.push(v) : (f.push(v), g.push(v)) : Lm(v) ? g.push(v) : f.push(v);
    }
    return { keyModifiers: f, nonKeyModifiers: g, eventOptionModifiers: b };
  })(s, r);
  if (l.includes("right") && (s = yu(s, "onContextmenu")), l.includes("middle") && (s = yu(s, "onMouseup")), l.length && (a = et(n.helper(ep), [a, JSON.stringify(l)])), !i.length || St(s) && !gu(s.content) || (a = et(n.helper(tp), [a, JSON.stringify(i)])), u.length) {
    const c = u.map(ho).join("");
    s = St(s) ? ve(`${s.content}${c}`, !0) : Jt(["(", s, `) + "${c}"`]);
  }
  return { props: [Ve(s, a)] };
}), show: (e, t, n) => {
  const { exp: o, loc: r } = e;
  return o || n.onError(An(61, r)), { props: [], needRuntime: n.helper(np) };
} }, bu = /* @__PURE__ */ new WeakMap();
function Wm(e, t) {
  if (!he(e)) {
    if (!e.nodeType)
      return ot;
    e = e.innerHTML;
  }
  const n = e, o = function(l) {
    let u = bu.get(l ?? Ce);
    return u || (u = /* @__PURE__ */ Object.create(null), bu.set(l ?? Ce, u)), u;
  }(t), r = o[n];
  if (r)
    return r;
  if (e[0] === "#") {
    const l = document.querySelector(e);
    e = l ? l.innerHTML : "";
  }
  const s = Se({ hoistStatic: !0, onError: void 0, onWarn: ot }, t);
  s.isCustomElement || typeof customElements > "u" || (s.isCustomElement = (l) => !!customElements.get(l));
  const { code: a } = function(l, u = {}) {
    return Fm(l, Se({}, Pm, u, { nodeTransforms: [zm, ...Vm, ...u.nodeTransforms || []], directiveTransforms: Se({}, qm, u.directiveTransforms || {}), transformHoist: null }));
  }(e, s), i = new Function("Vue", a)(Gh);
  return i._rc = !0, o[n] = i;
}
Zc(Wm);
const Hm = `:host{all:unset}body,html{overflow:hidden;position:fixed;width:100%;height:100%}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--un-rotate: 0;--un-rotate-x: 0;--un-rotate-y: 0;--un-rotate-z: 0;--un-scale-x: 1;--un-scale-y: 1;--un-scale-z: 1;--un-skew-x: 0;--un-skew-y: 0;--un-translate-x: 0;--un-translate-y: 0;--un-translate-z: 0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness: proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x: 0;--un-border-spacing-y: 0;--un-ring-offset-shadow: 0 0 rgb(0 0 0 / 0);--un-ring-shadow: 0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow: 0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width: 0px;--un-ring-offset-color: #fff;--un-ring-width: 0px;--un-ring-color: rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate: 0;--un-rotate-x: 0;--un-rotate-y: 0;--un-rotate-z: 0;--un-scale-x: 1;--un-scale-y: 1;--un-scale-z: 1;--un-skew-x: 0;--un-skew-y: 0;--un-translate-x: 0;--un-translate-y: 0;--un-translate-z: 0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness: proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x: 0;--un-border-spacing-y: 0;--un-ring-offset-shadow: 0 0 rgb(0 0 0 / 0);--un-ring-shadow: 0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow: 0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width: 0px;--un-ring-offset-color: #fff;--un-ring-width: 0px;--un-ring-color: rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-greek-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-greek-400-normal.woff) format("woff");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-latin-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-latin-400-normal.woff) format("woff");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-cyrillic-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-cyrillic-400-normal.woff) format("woff");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-greek-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-greek-ext-400-normal.woff) format("woff");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-latin-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-latin-ext-400-normal.woff) format("woff");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-vietnamese-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-vietnamese-400-normal.woff) format("woff");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/inter/files/inter-cyrillic-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/inter/files/inter-cyrillic-ext-400-normal.woff) format("woff");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-latin-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-latin-400-normal.woff) format("woff");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-latin-ext-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-latin-ext-400-normal.woff) format("woff");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.bunny.net/quicksand/files/quicksand-vietnamese-400-normal.woff2) format("woff2"),url(https://fonts.bunny.net/quicksand/files/quicksand-vietnamese-400-normal.woff) format("woff");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@keyframes shadcn-down{0%{height:0}to{height:var(--radix-accordion-content-height)}}@keyframes shadcn-up{0%{height:var(--radix-accordion-content-height)}to{height:0}}@keyframes shadcn-enter{0%{opacity:var(--un-enter-opacity, 1);transform:translate3d(var(--un-enter-translate-x, 0),var(--un-enter-translate-y, 0),0) scale3d(var(--un-enter-scale, 1),var(--un-enter-scale, 1),var(--un-enter-scale, 1)) rotate(var(--un-enter-rotate, 0))}}@keyframes shadcn-exit{to{opacity:var(--un-exit-opacity, 1);transform:translate3d(var(--un-exit-translate-x, 0),var(--un-exit-translate-y, 0),0) scale3d(var(--un-exit-scale, 1),var(--un-exit-scale, 1),var(--un-exit-scale, 1)) rotate(var(--un-exit-rotate, 0))}}html{color-scheme:light}html.dark{color-scheme:dark}.theme-blue{--background-hotspot: 0 0% 100%;--foreground-hotspot: 222.2 84% 4.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 222.2 84% 4.9%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 222.2 84% 4.9%;--primary-hotspot: 221.2 83.2% 53.3%;--primary-foreground-hotspot: 210 40% 98%;--secondary-hotspot: 210 40% 96.1%;--secondary-foreground-hotspot: 222.2 47.4% 11.2%;--muted-hotspot: 210 40% 96.1%;--muted-foreground-hotspot: 215.4 16.3% 46.9%;--accent-hotspot: 210 40% 96.1%;--accent-foreground-hotspot: 222.2 47.4% 11.2%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 40% 98%;--border-hotspot: 214.3 31.8% 91.4%;--input-hotspot: 214.3 31.8% 91.4%;--ring-hotspot: 221.2 83.2% 53.3%;--radius-hotspot: .5rem}.theme-blue.dark{--background-hotspot: 222.2 84% 4.9%;--foreground-hotspot: 210 40% 98%;--card-hotspot: 222.2 84% 4.9%;--card-foreground-hotspot: 210 40% 98%;--popover-hotspot: 222.2 84% 4.9%;--popover-foreground-hotspot: 210 40% 98%;--primary-hotspot: 217.2 91.2% 59.8%;--primary-foreground-hotspot: 222.2 47.4% 11.2%;--secondary-hotspot: 217.2 32.6% 17.5%;--secondary-foreground-hotspot: 210 40% 98%;--muted-hotspot: 217.2 32.6% 17.5%;--muted-foreground-hotspot: 215 20.2% 65.1%;--accent-hotspot: 217.2 32.6% 17.5%;--accent-foreground-hotspot: 210 40% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 210 40% 98%;--border-hotspot: 217.2 32.6% 17.5%;--input-hotspot: 217.2 32.6% 17.5%;--ring-hotspot: 224.3 76.3% 48%}.theme-zinc{--background-hotspot: 0 0% 100%;--foreground-hotspot: 240 10% 3.9%;--muted-hotspot: 240 4.8% 95.9%;--muted-foreground-hotspot: 240 3.8% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 240 10% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 240 10% 3.9%;--border-hotspot: 240 5.9% 90%;--input-hotspot: 240 5.9% 90%;--primary-hotspot: 240 5.9% 10%;--primary-foreground-hotspot: 0 0% 98%;--secondary-hotspot: 240 4.8% 95.9%;--secondary-foreground-hotspot: 240 5.9% 10%;--accent-hotspot: 240 4.8% 95.9%;--accent-foreground-hotspot: 240 5.9% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 240 5.9% 10%;--radius-hotspot: .5rem}.theme-zinc.dark{--background-hotspot: 240 10% 3.9%;--foreground-hotspot: 0 0% 98%;--muted-hotspot: 240 3.7% 15.9%;--muted-foreground-hotspot: 240 5% 64.9%;--popover-hotspot: 240 10% 3.9%;--popover-foreground-hotspot: 0 0% 98%;--card-hotspot: 240 10% 3.9%;--card-foreground-hotspot: 0 0% 98%;--border-hotspot: 240 3.7% 15.9%;--input-hotspot: 240 3.7% 15.9%;--primary-hotspot: 0 0% 98%;--primary-foreground-hotspot: 240 5.9% 10%;--secondary-hotspot: 240 3.7% 15.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 240 3.7% 15.9%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 240 4.9% 83.9%}.theme-slate{--background-hotspot: 0 0% 100%;--foreground-hotspot: 222.2 84% 4.9%;--muted-hotspot: 210 40% 96.1%;--muted-foreground-hotspot: 215.4 16.3% 46.9%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 222.2 84% 4.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 222.2 84% 4.9%;--border-hotspot: 214.3 31.8% 91.4%;--input-hotspot: 214.3 31.8% 91.4%;--primary-hotspot: 222.2 47.4% 11.2%;--primary-foreground-hotspot: 210 40% 98%;--secondary-hotspot: 210 40% 96.1%;--secondary-foreground-hotspot: 222.2 47.4% 11.2%;--accent-hotspot: 210 40% 96.1%;--accent-foreground-hotspot: 222.2 47.4% 11.2%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 40% 98%;--ring-hotspot: 222.2 84% 4.9%;--radius-hotspot: .5rem}.theme-slate.dark{--background-hotspot: 222.2 84% 4.9%;--foreground-hotspot: 210 40% 98%;--muted-hotspot: 217.2 32.6% 17.5%;--muted-foreground-hotspot: 215 20.2% 65.1%;--popover-hotspot: 222.2 84% 4.9%;--popover-foreground-hotspot: 210 40% 98%;--card-hotspot: 222.2 84% 4.9%;--card-foreground-hotspot: 210 40% 98%;--border-hotspot: 217.2 32.6% 17.5%;--input-hotspot: 217.2 32.6% 17.5%;--primary-hotspot: 210 40% 98%;--primary-foreground-hotspot: 222.2 47.4% 11.2%;--secondary-hotspot: 217.2 32.6% 17.5%;--secondary-foreground-hotspot: 210 40% 98%;--accent-hotspot: 217.2 32.6% 17.5%;--accent-foreground-hotspot: 210 40% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 210 40% 98%;--ring-hotspot: 212.7 26.8% 83.9}.theme-stone{--background-hotspot: 0 0% 100%;--foreground-hotspot: 20 14.3% 4.1%;--muted-hotspot: 60 4.8% 95.9%;--muted-foreground-hotspot: 25 5.3% 44.7%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 20 14.3% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 20 14.3% 4.1%;--border-hotspot: 20 5.9% 90%;--input-hotspot: 20 5.9% 90%;--primary-hotspot: 24 9.8% 10%;--primary-foreground-hotspot: 60 9.1% 97.8%;--secondary-hotspot: 60 4.8% 95.9%;--secondary-foreground-hotspot: 24 9.8% 10%;--accent-hotspot: 60 4.8% 95.9%;--accent-foreground-hotspot: 24 9.8% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 20 14.3% 4.1%;--radius-hotspot: .5rem}.theme-stone.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 60 9.1% 97.8%;--muted-hotspot: 12 6.5% 15.1%;--muted-foreground-hotspot: 24 5.4% 63.9%;--popover-hotspot: 20 14.3% 4.1%;--popover-foreground-hotspot: 60 9.1% 97.8%;--card-hotspot: 20 14.3% 4.1%;--card-foreground-hotspot: 60 9.1% 97.8%;--border-hotspot: 12 6.5% 15.1%;--input-hotspot: 12 6.5% 15.1%;--primary-hotspot: 60 9.1% 97.8%;--primary-foreground-hotspot: 24 9.8% 10%;--secondary-hotspot: 12 6.5% 15.1%;--secondary-foreground-hotspot: 60 9.1% 97.8%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 60 9.1% 97.8%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 24 5.7% 82.9%}.theme-gray{--background-hotspot: 0 0% 100%;--foreground-hotspot: 224 71.4% 4.1%;--muted-hotspot: 220 14.3% 95.9%;--muted-foreground-hotspot: 220 8.9% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 224 71.4% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 224 71.4% 4.1%;--border-hotspot: 220 13% 91%;--input-hotspot: 220 13% 91%;--primary-hotspot: 220.9 39.3% 11%;--primary-foreground-hotspot: 210 20% 98%;--secondary-hotspot: 220 14.3% 95.9%;--secondary-foreground-hotspot: 220.9 39.3% 11%;--accent-hotspot: 220 14.3% 95.9%;--accent-foreground-hotspot: 220.9 39.3% 11%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 20% 98%;--ring-hotspot: 224 71.4% 4.1%;--radius-hotspot: .5rem}.theme-gray.dark{--background-hotspot: 224 71.4% 4.1%;--foreground-hotspot: 210 20% 98%;--muted-hotspot: 215 27.9% 16.9%;--muted-foreground-hotspot: 217.9 10.6% 64.9%;--popover-hotspot: 224 71.4% 4.1%;--popover-foreground-hotspot: 210 20% 98%;--card-hotspot: 224 71.4% 4.1%;--card-foreground-hotspot: 210 20% 98%;--border-hotspot: 215 27.9% 16.9%;--input-hotspot: 215 27.9% 16.9%;--primary-hotspot: 210 20% 98%;--primary-foreground-hotspot: 220.9 39.3% 11%;--secondary-hotspot: 215 27.9% 16.9%;--secondary-foreground-hotspot: 210 20% 98%;--accent-hotspot: 215 27.9% 16.9%;--accent-foreground-hotspot: 210 20% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 210 20% 98%;--ring-hotspot: 216 12.2% 83.9%}.theme-neutral{--background-hotspot: 0 0% 100%;--foreground-hotspot: 0 0% 3.9%;--muted-hotspot: 0 0% 96.1%;--muted-foreground-hotspot: 0 0% 45.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 0 0% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 0 0% 3.9%;--border-hotspot: 0 0% 89.8%;--input-hotspot: 0 0% 89.8%;--primary-hotspot: 0 0% 9%;--primary-foreground-hotspot: 0 0% 98%;--secondary-hotspot: 0 0% 96.1%;--secondary-foreground-hotspot: 0 0% 9%;--accent-hotspot: 0 0% 96.1%;--accent-foreground-hotspot: 0 0% 9%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 0 0% 3.9%;--radius-hotspot: .5rem}.theme-neutral.dark{--background-hotspot: 0 0% 3.9%;--foreground-hotspot: 0 0% 98%;--muted-hotspot: 0 0% 14.9%;--muted-foreground-hotspot: 0 0% 63.9%;--popover-hotspot: 0 0% 3.9%;--popover-foreground-hotspot: 0 0% 98%;--card-hotspot: 0 0% 3.9%;--card-foreground-hotspot: 0 0% 98%;--border-hotspot: 0 0% 14.9%;--input-hotspot: 0 0% 14.9%;--primary-hotspot: 0 0% 98%;--primary-foreground-hotspot: 0 0% 9%;--secondary-hotspot: 0 0% 14.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 0 0% 14.9%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 0 0% 83.1%}.theme-red{--background-hotspot: 0 0% 100%;--foreground-hotspot: 0 0% 3.9%;--muted-hotspot: 0 0% 96.1%;--muted-foreground-hotspot: 0 0% 45.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 0 0% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 0 0% 3.9%;--border-hotspot: 0 0% 89.8%;--input-hotspot: 0 0% 89.8%;--primary-hotspot: 0 72.2% 50.6%;--primary-foreground-hotspot: 0 85.7% 97.3%;--secondary-hotspot: 0 0% 96.1%;--secondary-foreground-hotspot: 0 0% 9%;--accent-hotspot: 0 0% 96.1%;--accent-foreground-hotspot: 0 0% 9%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 0 72.2% 50.6%;--radius-hotspot: .5rem}.theme-red.dark{--background-hotspot: 0 0% 3.9%;--foreground-hotspot: 0 0% 98%;--muted-hotspot: 0 0% 14.9%;--muted-foreground-hotspot: 0 0% 63.9%;--popover-hotspot: 0 0% 3.9%;--popover-foreground-hotspot: 0 0% 98%;--card-hotspot: 0 0% 3.9%;--card-foreground-hotspot: 0 0% 98%;--border-hotspot: 0 0% 14.9%;--input-hotspot: 0 0% 14.9%;--primary-hotspot: 0 72.2% 50.6%;--primary-foreground-hotspot: 0 85.7% 97.3%;--secondary-hotspot: 0 0% 14.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 0 0% 14.9%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 0 72.2% 50.6%}.theme-rose{--background-hotspot: 0 0% 100%;--foreground-hotspot: 240 10% 3.9%;--muted-hotspot: 240 4.8% 95.9%;--muted-foreground-hotspot: 240 3.8% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 240 10% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 240 10% 3.9%;--border-hotspot: 240 5.9% 90%;--input-hotspot: 240 5.9% 90%;--primary-hotspot: 346.8 77.2% 49.8%;--primary-foreground-hotspot: 355.7 100% 97.3%;--secondary-hotspot: 240 4.8% 95.9%;--secondary-foreground-hotspot: 240 5.9% 10%;--accent-hotspot: 240 4.8% 95.9%;--accent-foreground-hotspot: 240 5.9% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 346.8 77.2% 49.8%;--radius-hotspot: .5rem}.theme-rose.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 0 0% 95%;--muted-hotspot: 0 0% 15%;--muted-foreground-hotspot: 240 5% 64.9%;--popover-hotspot: 0 0% 9%;--popover-foreground-hotspot: 0 0% 95%;--card-hotspot: 24 9.8% 10%;--card-foreground-hotspot: 0 0% 95%;--border-hotspot: 240 3.7% 15.9%;--input-hotspot: 240 3.7% 15.9%;--primary-hotspot: 346.8 77.2% 49.8%;--primary-foreground-hotspot: 355.7 100% 97.3%;--secondary-hotspot: 240 3.7% 15.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 85.7% 97.3%;--ring-hotspot: 346.8 77.2% 49.8%}.theme-orange{--background-hotspot: 0 0% 100%;--foreground-hotspot: 20 14.3% 4.1%;--muted-hotspot: 60 4.8% 95.9%;--muted-foreground-hotspot: 25 5.3% 44.7%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 20 14.3% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 20 14.3% 4.1%;--border-hotspot: 20 5.9% 90%;--input-hotspot: 20 5.9% 90%;--primary-hotspot: 24.6 95% 53.1%;--primary-foreground-hotspot: 60 9.1% 97.8%;--secondary-hotspot: 60 4.8% 95.9%;--secondary-foreground-hotspot: 24 9.8% 10%;--accent-hotspot: 60 4.8% 95.9%;--accent-foreground-hotspot: 24 9.8% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 24.6 95% 53.1%;--radius-hotspot: .5rem}.theme-orange.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 60 9.1% 97.8%;--muted-hotspot: 12 6.5% 15.1%;--muted-foreground-hotspot: 24 5.4% 63.9%;--popover-hotspot: 20 14.3% 4.1%;--popover-foreground-hotspot: 60 9.1% 97.8%;--card-hotspot: 20 14.3% 4.1%;--card-foreground-hotspot: 60 9.1% 97.8%;--border-hotspot: 12 6.5% 15.1%;--input-hotspot: 12 6.5% 15.1%;--primary-hotspot: 20.5 90.2% 48.2%;--primary-foreground-hotspot: 60 9.1% 97.8%;--secondary-hotspot: 12 6.5% 15.1%;--secondary-foreground-hotspot: 60 9.1% 97.8%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 60 9.1% 97.8%;--destructive-hotspot: 0 72.2% 50.6%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 20.5 90.2% 48.2%}.theme-green{--background-hotspot: 0 0% 100%;--foreground-hotspot: 240 10% 3.9%;--muted-hotspot: 240 4.8% 95.9%;--muted-foreground-hotspot: 240 3.8% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 240 10% 3.9%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 240 10% 3.9%;--border-hotspot: 240 5.9% 90%;--input-hotspot: 240 5.9% 90%;--primary-hotspot: 142.1 76.2% 36.3%;--primary-foreground-hotspot: 355.7 100% 97.3%;--secondary-hotspot: 240 4.8% 95.9%;--secondary-foreground-hotspot: 240 5.9% 10%;--accent-hotspot: 240 4.8% 95.9%;--accent-foreground-hotspot: 240 5.9% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 0 0% 98%;--ring-hotspot: 142.1 76.2% 36.3%;--radius-hotspot: .5rem}.theme-green.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 0 0% 95%;--muted-hotspot: 0 0% 15%;--muted-foreground-hotspot: 240 5% 64.9%;--popover-hotspot: 0 0% 9%;--popover-foreground-hotspot: 0 0% 95%;--card-hotspot: 24 9.8% 10%;--card-foreground-hotspot: 0 0% 95%;--border-hotspot: 240 3.7% 15.9%;--input-hotspot: 240 3.7% 15.9%;--primary-hotspot: 142.1 70.6% 45.3%;--primary-foreground-hotspot: 144.9 80.4% 10%;--secondary-hotspot: 240 3.7% 15.9%;--secondary-foreground-hotspot: 0 0% 98%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 0 0% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 0 85.7% 97.3%;--ring-hotspot: 142.4 71.8% 29.2%}.theme-yellow{--background-hotspot: 0 0% 100%;--foreground-hotspot: 20 14.3% 4.1%;--muted-hotspot: 60 4.8% 95.9%;--muted-foreground-hotspot: 25 5.3% 44.7%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 20 14.3% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 20 14.3% 4.1%;--border-hotspot: 20 5.9% 90%;--input-hotspot: 20 5.9% 90%;--primary-hotspot: 47.9 95.8% 53.1%;--primary-foreground-hotspot: 26 83.3% 14.1%;--secondary-hotspot: 60 4.8% 95.9%;--secondary-foreground-hotspot: 24 9.8% 10%;--accent-hotspot: 60 4.8% 95.9%;--accent-foreground-hotspot: 24 9.8% 10%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 20 14.3% 4.1%;--radius-hotspot: .5rem}.theme-yellow.dark{--background-hotspot: 20 14.3% 4.1%;--foreground-hotspot: 60 9.1% 97.8%;--muted-hotspot: 12 6.5% 15.1%;--muted-foreground-hotspot: 24 5.4% 63.9%;--popover-hotspot: 20 14.3% 4.1%;--popover-foreground-hotspot: 60 9.1% 97.8%;--card-hotspot: 20 14.3% 4.1%;--card-foreground-hotspot: 60 9.1% 97.8%;--border-hotspot: 12 6.5% 15.1%;--input-hotspot: 12 6.5% 15.1%;--primary-hotspot: 47.9 95.8% 53.1%;--primary-foreground-hotspot: 26 83.3% 14.1%;--secondary-hotspot: 12 6.5% 15.1%;--secondary-foreground-hotspot: 60 9.1% 97.8%;--accent-hotspot: 12 6.5% 15.1%;--accent-foreground-hotspot: 60 9.1% 97.8%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 60 9.1% 97.8%;--ring-hotspot: 35.5 91.7% 32.9%}.theme-violet{--background-hotspot: 0 0% 100%;--foreground-hotspot: 224 71.4% 4.1%;--muted-hotspot: 220 14.3% 95.9%;--muted-foreground-hotspot: 220 8.9% 46.1%;--popover-hotspot: 0 0% 100%;--popover-foreground-hotspot: 224 71.4% 4.1%;--card-hotspot: 0 0% 100%;--card-foreground-hotspot: 224 71.4% 4.1%;--border-hotspot: 220 13% 91%;--input-hotspot: 220 13% 91%;--primary-hotspot: 262.1 83.3% 57.8%;--primary-foreground-hotspot: 210 20% 98%;--secondary-hotspot: 220 14.3% 95.9%;--secondary-foreground-hotspot: 220.9 39.3% 11%;--accent-hotspot: 220 14.3% 95.9%;--accent-foreground-hotspot: 220.9 39.3% 11%;--destructive-hotspot: 0 84.2% 60.2%;--destructive-foreground-hotspot: 210 20% 98%;--ring-hotspot: 262.1 83.3% 57.8%;--radius-hotspot: .5rem}.theme-violet.dark{--background-hotspot: 224 71.4% 4.1%;--foreground-hotspot: 210 20% 98%;--muted-hotspot: 215 27.9% 16.9%;--muted-foreground-hotspot: 217.9 10.6% 64.9%;--popover-hotspot: 224 71.4% 4.1%;--popover-foreground-hotspot: 210 20% 98%;--card-hotspot: 224 71.4% 4.1%;--card-foreground-hotspot: 210 20% 98%;--border-hotspot: 215 27.9% 16.9%;--input-hotspot: 215 27.9% 16.9%;--primary-hotspot: 263.4 70% 50.4%;--primary-foreground-hotspot: 210 20% 98%;--secondary-hotspot: 215 27.9% 16.9%;--secondary-foreground-hotspot: 210 20% 98%;--accent-hotspot: 215 27.9% 16.9%;--accent-foreground-hotspot: 210 20% 98%;--destructive-hotspot: 0 62.8% 30.6%;--destructive-foreground-hotspot: 210 20% 98%;--ring-hotspot: 263.4 70% 50.4%}.i-bi-grid-fill{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 16 16' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-clarity-success-standard-line{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 36 36' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14' class='clr-i-outline clr-i-outline-path-1'/%3E%3Cpath fill='currentColor' d='M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05l-6-6A1 1 0 0 0 8 18.53L15.49 26L28 13.52a1 1 0 0 0 0-1.42' class='clr-i-outline clr-i-outline-path-2'/%3E%3Cpath fill='none' d='M0 0h36v36H0z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-eos-icons-loading{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z' opacity='.5'/%3E%3Cpath fill='currentColor' d='M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z'%3E%3CanimateTransform attributeName='transform' dur='1s' from='0 12 12' repeatCount='indefinite' to='360 12 12' type='rotate'/%3E%3C/path%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-iconamoon-information-circle-duotone{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none'%3E%3Ccircle cx='12' cy='12' r='9' fill='currentColor' opacity='.16'/%3E%3Ccircle cx='12' cy='12' r='9' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cpath stroke='currentColor' stroke-linejoin='round' stroke-width='3' d='M12 8h.01v.01H12z'/%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 12v4'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-ion-wallet{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 512 512' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M95.5 104h320a87.73 87.73 0 0 1 11.18.71a66 66 0 0 0-77.51-55.56L86 94.08h-.3a66 66 0 0 0-41.07 26.13A87.57 87.57 0 0 1 95.5 104m320 24h-320a64.07 64.07 0 0 0-64 64v192a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V192a64.07 64.07 0 0 0-64-64M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32'/%3E%3Cpath fill='currentColor' d='M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16s-18.5 24.5 0 24.5s0 23.5 0 23.5L85.5 236Z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-error-outline-rounded{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 17q.425 0 .713-.288T13 16q0-.425-.288-.712T12 15q-.425 0-.712.288T11 16q0 .425.288.713T12 17m0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8v4q0 .425.288.713T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-movie-info-outline-rounded{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm8-4q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11q-.425 0-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9M8 19h8V5H8zM8 5h8zM4 19h2v-2H4zm14 0h2v-2h-2zM4 15h2v-2H4zm14 0h2v-2h-2zM4 11h2V9H4zm14 0h2V9h-2zM4 7h2V5H4zm14 0h2V5h-2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-wifi-password{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M2.125 11.1L0 8.975q2.325-2.325 5.388-3.65T12 4q3.55 0 6.613 1.325T24 8.975L21.875 11.1q-1.9-1.925-4.437-3.012T12 7Q9.1 7 6.563 8.088T2.125 11.1m4.225 4.25l-2.1-2.125q1.5-1.5 3.488-2.362T12 10q2.275 0 4.263.863t3.487 2.362l-2.1 2.125q-1.1-1.1-2.55-1.725T12 13q-1.65 0-3.1.625T6.35 15.35M12 21q-1.05 0-1.775-.725T9.5 18.5q0-1.05.725-1.775T12 16q1.05 0 1.775.725T14.5 18.5q0 1.05-.725 1.775T12 21m7 3q-.425 0-.712-.288T18 23v-3q0-.425.288-.712T19 19v-1q0-.825.588-1.412T21 16q.825 0 1.413.588T23 18v1q.425 0 .713.288T24 20v3q0 .425-.288.713T23 24zm1-5h2v-1q0-.425-.288-.712T21 17q-.425 0-.712.288T20 18z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-arrow-down-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 4v16m0 0l6-6m-6 6l-6-6'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-arrow-right-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 12h16m0 0l-6-6m6 6l-6 6'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-arrow-up-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 20V4m0 0l6 6m-6-6l-6 6'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-gift-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none' stroke='currentColor' stroke-width='1.5'%3E%3Cpath stroke-linecap='round' d='M22 12H2M12 2v20m1-10a4 4 0 0 0 4 4m-6-4a4 4 0 0 1-4 4'/%3E%3Cpath d='M12 10.035a3.247 3.247 0 0 1 2.46-3.15c1.603-.4 3.056 1.052 2.655 2.656a3.247 3.247 0 0 1-3.15 2.46H12zm0 0a3.247 3.247 0 0 0-2.46-3.15c-1.603-.4-3.056 1.052-2.655 2.656a3.247 3.247 0 0 0 3.15 2.46H12z'/%3E%3Cpath d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-solar-global-linear{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none' stroke='currentColor' stroke-width='1.5'%3E%3Cpath d='M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12z'/%3E%3Cpath d='M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761c-.525 0-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.614 23.614 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2c.525 0 1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12z'/%3E%3Cpath stroke-linecap='round' d='M2 12h20'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-streamline-ticket-1-solid{--un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 14 14' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8.605 1.55h-7.05a1.5 1.5 0 0 0-1.5 1.5v2a.5.5 0 0 0 .374.483a1.517 1.517 0 0 1 0 2.933a.5.5 0 0 0-.373.484v1.999a1.5 1.5 0 0 0 1.5 1.5h7.05v-1.715a.625.625 0 1 1 1.25 0v1.715h2.588a1.5 1.5 0 0 0 1.5-1.5V8.946a.5.5 0 0 0-.369-.483a1.517 1.517 0 0 1 0-2.926a.5.5 0 0 0 .37-.483V3.051a1.5 1.5 0 0 0-1.5-1.5h-2.59v1.723a.625.625 0 0 1-1.25 0zm.625 3.816c.346 0 .625.28.625.625v2.016a.625.625 0 0 1-1.25 0V5.991c0-.345.28-.625.625-.625' clip-rule='evenodd'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.disabled\\:pointer-events-none:disabled{pointer-events:none}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:0}.inset-x-0{left:0;right:0}.-top-3{top:-.75rem}.bottom-\\[-30px\\]{bottom:-30px}.bottom-0{bottom:0}.bottom-150px{bottom:150px}.bottom-20px{bottom:20px}.left-\\[-50px\\]{left:-50px}.left-\\[50\\%\\],.left-1\\/2{left:50%}.left-0{left:0}.left-10px{left:10px}.right-\\[-90px\\]{right:-90px}.right-\\[10px\\],.right-10px{right:10px}.top-\\[-100px\\]{top:-100px}.top-\\[10px\\],.top-10px{top:10px}.top-\\[50\\%\\],.top-1\\/2{top:50%}.top-0{top:0}.z--1{z-index:-1}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.z-50{z-index:50}.grid{display:grid}.grid-rows-\\[auto_1fr_auto\\]{grid-template-rows:auto 1fr auto}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-4{margin-top:1rem;margin-bottom:1rem}.-mt-0\\.5{margin-top:-.125rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.me-2{margin-inline-end:.5rem}.ml-1{margin-left:.25rem}.mt-\\[-250px\\]{margin-top:-250px}.mt-\\[-30px\\]{margin-top:-30px}.mt-1{margin-top:.25rem}.mt-1\\.5{margin-top:.375rem}.mt-2{margin-top:.5rem}.mt-24{margin-top:6rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-auto{margin-top:auto}.block{display:block}.hidden{display:none}.h-\\[100dvh\\]{height:100dvh}.h-\\[1px\\],.h-px{height:1px}.h-\\[200px\\]{height:200px}.h-\\[25px\\]{height:25px}.h-\\[400px\\]{height:400px}.h-\\[42px\\]{height:42px}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-12{height:3rem}.h-2{height:.5rem}.h-30{height:7.5rem}.h-4{height:1rem}.h-40{height:10rem}.h-40px{height:40px}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-80{height:20rem}.h-9{height:2.25rem}.h-auto{height:auto}.h-fit{height:fit-content}.h-full{height:100%}.h3{height:.75rem}.max-h-\\[100dvh\\],.max-h-100dvh{max-height:100dvh}.max-h-90dvh{max-height:90dvh}.max-h-full{max-height:100%}.max-w-4xl{max-width:56rem}.max-w-lg{max-width:32rem}.min-h-\\[100dvh\\]{min-height:100dvh}.w-\\[100px\\]{width:100px}.w-\\[1px\\],.w-px{width:1px}.w-\\[25px\\]{width:25px}.w-\\[42px\\]{width:42px}.w-10{width:2.5rem}.w-100dvw{width:100dvw}.w-12{width:3rem}.w-4{width:1rem}.w-40{width:10rem}.w-6{width:1.5rem}.w-7{width:1.75rem}.w-80{width:20rem}.w-9{width:2.25rem}.w-full{width:100%}.flex{display:flex}.inline-flex{display:inline-flex}.shrink-0{flex-shrink:0}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.-translate-x-1\\/2,.translate-x-\\[-50\\%\\]{--un-translate-x: -50%;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.-translate-y-1\\/2,.translate-y-\\[-50\\%\\]{--un-translate-y: -50%;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.hover\\:-translate-y-1:hover{--un-translate-y: -.25rem;transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.transform{transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.place-items-end{place-items:end}.items-start{align-items:flex-start}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.space-y-1\\.5>:not([hidden])~:not([hidden]){--un-space-y-reverse: 0;margin-top:calc(.375rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.375rem * var(--un-space-y-reverse))}.space-y-1>:not([hidden])~:not([hidden]){--un-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.25rem * var(--un-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--un-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.5rem * var(--un-space-y-reverse))}.of-hidden,.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.border{border-width:1px}.border-2{border-width:2px}.border-3{border-width:3px}.file\\:border-0::file-selector-button{border-width:0px}.border-border{--un-border-opacity: 1;border-color:hsl(var(--border-hotspot) / var(--un-border-opacity))}.border-green-400{--un-border-opacity: 1;border-color:rgb(74 222 128 / var(--un-border-opacity))}.border-input{--un-border-opacity: 1;border-color:hsl(var(--input-hotspot) / var(--un-border-opacity))}.border-neutral-200{--un-border-opacity: 1;border-color:rgb(229 229 229 / var(--un-border-opacity))}.border-primary\\/20{border-color:hsl(var(--primary-hotspot) / .2)}.border-primary\\/50{border-color:hsl(var(--primary-hotspot) / .5)}.border-white\\/15{border-color:#ffffff26}.border-white\\/20{border-color:#fff3}.dark .dark\\:border-neutral-800{--un-border-opacity: 1;border-color:rgb(38 38 38 / var(--un-border-opacity))}.hover\\:border-primary\\/20:hover{border-color:hsl(var(--primary-hotspot) / .2)}.rounded-\\[0px\\],.rounded-0{border-radius:0}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius-hotspot)}.rounded-md{border-radius:calc(var(--radius-hotspot) - 2px)}.rounded-sm{border-radius:calc(var(--radius-hotspot) - 4px)}.rounded-xl{border-radius:.75rem}.rounded-b-2xl{border-bottom-left-radius:1rem;border-bottom-right-radius:1rem}.rounded-b-md{border-bottom-left-radius:calc(var(--radius-hotspot) - 2px);border-bottom-right-radius:calc(var(--radius-hotspot) - 2px)}.rounded-s{border-end-start-radius:.25rem;border-start-start-radius:.25rem}.rounded-s-\\[0px\\]{border-end-start-radius:0px;border-start-start-radius:0px}.rounded-t-\\[10px\\]{border-top-left-radius:10px;border-top-right-radius:10px}.border-none{border-style:none}.bg-\\[radial-gradient\\(circle_at_50\\%_100\\%\\,rgba\\(0\\,0\\,0\\,0\\.5\\)_40\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)\\)\\]{background-color:radial-gradient(circle at 50% 100%,rgba(0,0,0,.5) 40%,rgba(0,0,0,.7))}.bg-accent{--un-bg-opacity: 1;background-color:hsl(var(--accent-hotspot) / var(--un-bg-opacity))}.bg-background,.data-\\[state\\=active\\]\\:bg-background[data-state=active]{--un-bg-opacity: 1;background-color:hsl(var(--background-hotspot) / var(--un-bg-opacity))}.bg-black\\/50{background-color:#00000080}.bg-black\\/80{background-color:#000c}.bg-blue-400\\/20{background-color:#60a5fa33}.bg-blue-500{--un-bg-opacity: 1;background-color:rgb(59 130 246 / var(--un-bg-opacity))}.bg-border{--un-bg-opacity: 1;background-color:hsl(var(--border-hotspot) / var(--un-bg-opacity))}.bg-card{--un-bg-opacity: 1;background-color:hsl(var(--card-hotspot) / var(--un-bg-opacity))}.bg-destructive{--un-bg-opacity: 1;background-color:hsl(var(--destructive-hotspot) / var(--un-bg-opacity))}.bg-muted{--un-bg-opacity: 1;background-color:hsl(var(--muted-hotspot) / var(--un-bg-opacity))}.bg-neutral-100{--un-bg-opacity: 1;background-color:rgb(245 245 245 / var(--un-bg-opacity))}.bg-neutral-200{--un-bg-opacity: 1;background-color:rgb(229 229 229 / var(--un-bg-opacity))}.bg-primary{--un-bg-opacity: 1;background-color:hsl(var(--primary-hotspot) / var(--un-bg-opacity))}.bg-primary\\/10{background-color:hsl(var(--primary-hotspot) / .1)}.bg-primary\\/90{background-color:hsl(var(--primary-hotspot) / .9)}.bg-secondary{--un-bg-opacity: 1;background-color:hsl(var(--secondary-hotspot) / var(--un-bg-opacity))}.bg-white{--un-bg-opacity: 1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.bg-white\\/10{background-color:#ffffff1a}.dark .dark\\:bg-neutral-800{--un-bg-opacity: 1;background-color:rgb(38 38 38 / var(--un-bg-opacity))}.dark .dark\\:bg-neutral-950{--un-bg-opacity: 1;background-color:rgb(10 10 10 / var(--un-bg-opacity))}.hover\\:bg-accent:hover{--un-bg-opacity: 1;background-color:hsl(var(--accent-hotspot) / var(--un-bg-opacity))}.hover\\:bg-black\\/70:hover{background-color:#000000b3}.hover\\:bg-destructive\\:90:hover{background-color:hsl(var(--destructive-hotspot) / .9)}.hover\\:bg-primary:hover{--un-bg-opacity: 1;background-color:hsl(var(--primary-hotspot) / var(--un-bg-opacity))}.hover\\:bg-primary\\:20:hover{background-color:hsl(var(--primary-hotspot) / .2)}.hover\\:bg-primary\\:90:hover{background-color:hsl(var(--primary-hotspot) / .9)}.hover\\:bg-primary\\/20:hover{background-color:hsl(var(--primary-hotspot) / .2)}.hover\\:bg-secondary\\:80:hover{background-color:hsl(var(--secondary-hotspot) / .8)}.file\\:bg-transparent::file-selector-button{background-color:transparent}.from-blue-600{--un-gradient-from-position: 0%;--un-gradient-from: rgb(37 99 235 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position: 100%;--un-gradient-to: rgb(37 99 235 / 0) var(--un-gradient-to-position);--un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to)}.from-white\\/20{--un-gradient-from-position: 0%;--un-gradient-from: rgb(255 255 255 / .2) var(--un-gradient-from-position);--un-gradient-to-position: 100%;--un-gradient-to: rgb(255 255 255 / 0) var(--un-gradient-to-position);--un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to)}.to-blue-900{--un-gradient-to-position: 100%;--un-gradient-to: rgb(30 58 138 / var(--un-to-opacity, 1)) var(--un-gradient-to-position)}.to-transparent{--un-gradient-to-position: 100%;--un-gradient-to: transparent var(--un-gradient-to-position)}.to-40\\%{--un-gradient-to-position: 40%}.bg-gradient-to-bl{--un-gradient-shape: to bottom left;--un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient))}.bg-gradient-to-r{--un-gradient-shape: to right;--un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient))}.bg-gradient-to-tr{--un-gradient-shape: to top right;--un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient))}[stroke-width~="4"]{stroke-width:4px}.object-cover{object-fit:cover}.p-0{padding:0}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-12{padding-top:3rem;padding-bottom:3rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.pb-10{padding-bottom:2.5rem}.pb-28{padding-bottom:7rem}.pt-0{padding-top:0}.pt-6{padding-top:1.5rem}.text-center{text-align:center}.text-left{text-align:left}.text-10px{font-size:10px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.file\\:text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.dark .dark\\:text-neutral-400{--un-text-opacity: 1;color:rgb(163 163 163 / var(--un-text-opacity))}.data-\\[state\\=active\\]\\:text-foreground[data-state=active],.text-foreground{--un-text-opacity: 1;color:hsl(var(--foreground-hotspot) / var(--un-text-opacity))}.text-card-foreground{--un-text-opacity: 1;color:hsl(var(--card-foreground-hotspot) / var(--un-text-opacity))}.text-destructive-foreground{--un-text-opacity: 1;color:hsl(var(--destructive-foreground-hotspot) / var(--un-text-opacity))}.text-gray-600\\/40{color:#4b556366}.text-green,.text-green-400{--un-text-opacity: 1;color:rgb(74 222 128 / var(--un-text-opacity))}.text-muted-foreground{--un-text-opacity: 1;color:hsl(var(--muted-foreground-hotspot) / var(--un-text-opacity))}.text-neutral-500{--un-text-opacity: 1;color:rgb(115 115 115 / var(--un-text-opacity))}.text-orange{--un-text-opacity: 1;color:rgb(251 146 60 / var(--un-text-opacity))}.text-primary{--un-text-opacity: 1;color:hsl(var(--primary-hotspot) / var(--un-text-opacity))}.text-primary-foreground{--un-text-opacity: 1;color:hsl(var(--primary-foreground-hotspot) / var(--un-text-opacity))}.text-red{--un-text-opacity: 1;color:rgb(248 113 113 / var(--un-text-opacity))}.text-secondary{--un-text-opacity: 1;color:hsl(var(--secondary-hotspot) / var(--un-text-opacity))}.text-secondary-foreground{--un-text-opacity: 1;color:hsl(var(--secondary-foreground-hotspot) / var(--un-text-opacity))}.text-white{--un-text-opacity: 1;color:rgb(255 255 255 / var(--un-text-opacity))}.hover\\:text-accent-foreground:hover{--un-text-opacity: 1;color:hsl(var(--accent-foreground-hotspot) / var(--un-text-opacity))}.placeholder\\:text-muted-foreground::placeholder{--un-text-opacity: 1;color:hsl(var(--muted-foreground-hotspot) / var(--un-text-opacity))}.font-400,.font-normal{font-weight:400}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-thin{font-weight:100}.file\\:font-medium::file-selector-button{font-weight:500}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.tracking-tighter{letter-spacing:-.05em}.uppercase{text-transform:uppercase}.underline,.hover\\:underline:hover{text-decoration-line:underline}.underline-offset-4{text-underline-offset:4px}.opacity-60{opacity:.6}.opacity-80{opacity:.8}.opacity-90{opacity:.9}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[state\\=active\\]\\:shadow-md[data-state=active],.shadow-md{--un-shadow: var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-lg{--un-shadow: var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-sm{--un-shadow: var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgb(0 0 0 / .05));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-xl{--un-shadow: var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.hover\\:shadow-md:hover{--un-shadow: var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus\\:shadow-\\[0_0_0_2px\\]:focus{--un-shadow: 0 0 0 2px var(--un-shadow-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus\\:shadow-secondary:focus{--un-shadow-opacity: 1;--un-shadow-color: hsl(var(--secondary-hotspot) / var(--un-shadow-opacity))}.outline{outline-style:solid}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.ring-2{--un-ring-width: 2px;--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-1:focus-visible{--un-ring-width: 1px;--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-2:focus-visible{--un-ring-width: 2px;--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus-visible\\:ring-offset-0:focus-visible{--un-ring-offset-width: 0px}.focus-visible\\:ring-offset-2:focus-visible{--un-ring-offset-width: 2px}.ring-primary\\/30{--un-ring-color: hsl(var(--primary-hotspot) / .3)}.focus-visible\\:ring-ring:focus-visible{--un-ring-opacity: 1;--un-ring-color: hsl(var(--ring-hotspot) / var(--un-ring-opacity))}.ring-offset-background{--un-ring-offset-opacity: 1;--un-ring-offset-color: hsl( var(--background-hotspot) / var(--un-ring-offset-opacity) )}.backdrop-blur{--un-backdrop-blur: blur(8px);-webkit-backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)}.backdrop-blur-sm{--un-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)}.blur-sm{--un-blur: blur(4px);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}.brightness-110{--un-brightness: brightness(1.1);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}[duration~="1"]{transition-duration:1ms}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:shadcn-enter;animation-duration:var(--un-animate-duration);--un-animate-duration: .15s;--un-enter-opacity: initial;--un-enter-scale: initial;--un-enter-rotate: initial;--un-enter-translate-x: initial;--un-enter-translate-y: initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:shadcn-exit;animation-duration:var(--un-animate-duration);--un-animate-duration: .15s;--un-exit-opacity: initial;--un-exit-scale: initial;--un-exit-rotate: initial;--un-exit-translate-x: initial;--un-exit-translate-y: initial}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--un-enter-opacity: 0}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--un-exit-opacity: 0}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--un-enter-scale: .95}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--un-exit-scale: .95}.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open]{--un-enter-translate-y: -48%}.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open]{--un-enter-translate-x: -50%}.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed]{--un-exit-translate-y: -48%}.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed]{--un-exit-translate-x: -50%}@media (max-width: 1023.9px){.max-lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (max-width: 639.9px){.max-sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.max-sm\\:max-w-full{max-width:100%}.max-sm\\:rounded-none{border-radius:0}}@media (min-width: 640px){.sm\\:max-w-\\[425px\\]{max-width:425px}.sm\\:flex-row{flex-direction:row}.sm\\:place-items-center{place-items:center}.sm\\:justify-start{justify-content:flex-start}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-2>:not([hidden])~:not([hidden]){--un-space-x-reverse: 0;margin-left:calc(.5rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(.5rem * var(--un-space-x-reverse))}.sm\\:space-y-0>:not([hidden])~:not([hidden]){--un-space-y-reverse: 0;margin-top:calc(0px * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0px * var(--un-space-y-reverse))}.sm\\:rounded-lg{border-radius:var(--radius-hotspot)}.sm\\:rounded-b-sm{border-bottom-left-radius:calc(var(--radius-hotspot) - 4px);border-bottom-right-radius:calc(var(--radius-hotspot) - 4px)}.sm\\:bg-\\[radial-gradient\\(rgba\\(0\\,0\\,0\\,0\\.5\\)_40\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)\\)\\]{background-color:radial-gradient(rgba(0,0,0,.5) 40%,rgba(0,0,0,.7))}.sm\\:text-left{text-align:left}}@media (min-width: 768px){.md\\:mx-auto{margin-left:auto;margin-right:auto}.md\\:w-\\[460px\\]{width:460px}.md\\:w-full{width:100%}}body[data-v-56540ed3]{background:var(--background-hotspot);color:var(--foreground-hotspot);min-height:screen;overflow-y:auto;position:relative;font-family:Inter,sans-serif}input[data-v-56540ed3]::-webkit-outer-spin-button,input[data-v-56540ed3]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-56540ed3]{-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}input[data-v-56540ed3]:focus::placeholder{color:transparent}.link[data-v-56540ed3]{text-decoration:underline;color:#2b74e2}.link[data-v-56540ed3]:hover{text-decoration:underline;text-decoration-style:dotted}`, Jm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAQ5QTFRFR3BMsRkA7YcA4m4AtyEArxcAtyIA74MA1FgAuy4A1FIA8IsA85EApQ8A95kA64AA4GsA+6IA74cA9JYA00wA1FMA+6IAuiwAxDIAykAA3GUA5XEA3mMA/6gA7YAAoAwA6HUAnAYA6noA8owA7oYA7H0AoxIA7oMA5nAA+qAA5GsA74kA4mYAphYA8o8A9ZgA32EA+JwA2VEAsCYA3VwArCEA21cA/aYA1ksAqRwA8IcAyS8A8pQA/KMAxSUAsysA2GkAxEcA0FsA5X4AylEAx0wA1WQAzTcAzVYA6IMA7o0A224A1EYAtTAA3nIA0D0A018A43kAvxkAuDQAwUIAvDsA0kEAvz8AujcA4HYA09Tw2QAAAB10Uk5TAGYifoiyRP4QH2KYXd15wETb3T3dmrEw2r7a7bYmt4JNAAApm0lEQVR42uzWzWrEIBRA4ZJZOGAYi0I3LRKi4S4GfIDZ9v3fqdFETCalLf1bnU/jA+TgTR4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfOTcdc71G8657sx7+W+d60/aWBtnt3hbXK/zzsLVWqMvvet4U3+u67W2XpRIlFgtPfKzCrNyWKN7x435G91JG+9lXkopmUXZNKlakyItWS5U+VVnp82rn6n8SKWi1B6bIkuTkNcq5W10zwj7rRiTnya/UjJvpSTL57tFitCShJRXspqb8jPnk3meCu8nX5UU9ZDY3OK+SN6hSZnhonxXdzJLiXzmII3yJcjapPWId5ekFqlSYTVNvlNjHKdx2vIbUqiyRO6KtCihDC6a/HxSjcVdE7+hZKcWaUna4DokKSyz64sezdi0HsdPyfJxr2J1O86tvbQKTz1v+/PL8TwO485xbu2atN8tOc6t7DC3UqhFkr1wTT7iXoYh9xiGrwRR3ouvn/bi+A/c3F+SN/bMJbVhIAiiRl6MQWCCswg4XgySQc04+AS+/7lCjabdtEqfrDN6knwAP6qrR8q8ns/2c//fF2cVXBQl05B07MTKZHzubgWmLiEj6uSyT675WRUzXTbioCbx9R4QEt2Ah62QGLuSTR2mhKV4I6ZE5xaAG5tcauVh7Cn5sw5Hh0elsBJuE01IFkJzyzYuDklfjLx2JW9Mh6HFTkrmN2Cc3Y37QAfFR3bS45n46PeUeD6+JcYouB2+3umgSCHRHVihlCxkBFaKkj0l2KxEomQdeAiKCe1bfg2GleBSAqjfyUjhdWkONdPcxGAfHa1cq1Uy2A4c3Aes0iPLb4GhRQdX29RcHs6GPh5NSFycW+ZkXIAVPig6Jx4bXJdzveUxYU6HJqWbQEKUYbQSQnCf3ekDlg8JLmv3pspVV5KTUW5I8VpMRlxfuOxYAoqXtxI8mcdKvdc6txCPJDDCUjghLiRkhE+KugKH8kPvgWnlopjUtm+dbiklwTUh6sXdvt3uLiXIB3/kpS7hJqkwJIgHbOAHF8Fzq3PTi7qdY1KEbBgBdE6sLiSnYxoROAGJM5IRignPLVfvnqAbcPZCC9e6EtAeaqC5JiD6Ax2Miwj1CMWEE6JVEngFnvvK64ukr+iYeEwOwcXlDuKsFNZCTWIEPpQA23+V3juxmJwraHNCJCvhhOAm1lPCX0sGEBY+KOLKEQFeSaE9Hf4xX9eUfnAbUm5Yme128rG9cbmxhfdbv+2deXPbxrLFhyQIA+CqhaS2PFWq9HQjS/K+PttyvCS+VuwokWMl/v5f5E0P0Go2emZIyRIAKjgDwFd1K/pDvzp9egbAAI1yiz2d4puWkEductlKNg9uH+jDZhLMEjErkUi8RMgjJEoSmigCFDEr2ZdIXt457t7Y+DjQAn/AyOUIBcqcNpFEpEt4D4wX6woXyjpR7N/Q+DjIxKoWoyJg8Mm7v3ARDOmTW1i46MY7UhGPaEsm++PoJna7iCO7Siy84ZIJL5EIk3hcQu3WLQaEZClbEO4A5eYFySTjQTAsOLSsOHJJsjkYdDotrW6iR0ur0xkMlqVP5CwR75bYp+4WJHfgvIHRPtwkHoTFHiZwFUg0j83NrVZ32Iw8r4AOW5oMv6fIVlPAJuJZCHo4hZpgsbp1w6K9dXDvHocBQ9YsosGRaBTDpppXK8PWYJm7BIUewSRBiWzPTUrg0r9JPAAHnEyEhIsx2Ry0hpeJ1GjYGchpiUFCTPTxf/lHIeAEi8DBWuCbQ6R1D0RIROVyZQnAUN+jlRa8DgdDprtpg90LwTJMiMji89AozAUODiO9SCSahsUZl3PKMm+AIUBwERjkaIAJCUHp3xx/EBEunLkfcCIbYI0rk2ZikBATMgkUrgyIvlC8203Svxk8EAmczrpFSIjGdTG5RY+fokkQingQgud7/+bwSHHY6xYohXGwiTSugYnOEgSiZXAYKlMTRZD3ceD+ovN4BCQkFOLB5iRbrehaN+ZYzi/M0xvvsge2M+nfKB4HCAXFyDBzXJdN8jewzAGyELG+EtdfbB4CCWUJx7IJ5ihAzQ5/OgWJ0MI867eIyuL3WgnikGVLWGQDcRSBpLVsnZZoERKSqFr7C0pk+OjeIy3AIZHwMNlKVLHqEhI0CLXArvcYiMqKWkDFKQxEYiOC7sDoKBgJ5gicKRTeApPy4b7fXEAeG48y3YPDDK7MIZtJWZt3iDd5b8HwLKYQk8VbjY82kAae96xyRHlx8U4r87ewdOGbJWbd0U7kznKkFktbj548IkGKmKEPVrZGkSpTzQEL98woO5glvHbxfbgGC9bwPmJyWGRLhEcZUSJfU7zFZooyShZvOpKQP0giSJJK1NbO/8rnhWQTLOeK+91FarCePHkEg+EwlYuYbFWlCjeX+b137ICNSf4jZiXIY4FarWj1CRCx6XyiuDGsUoGVr5bAscOaYORBK8ELE+yjJyDjEIaFJoqP0B5VNAkWLCxfHMk+mWRRgj0BfxiPpKf0CaZHJU1yyzwPPK0dlMj2hYiR5pMpWXBoe2DxraRJ6IX384dP3R3wIsTIKqPBw92opSqpZoc/wiVNIusWxkj1A8TtEkjziqrFbrxP370iIvkb7x1VcQ0FDs5ko8omb+J9dypcGOy3duTTKYbISsUDRBesB3pIi6TXkaq0mgP5qCMtqViX5neiahesBwDDWbUSVXV1NBE2dTdIaLZIYYJZUuneN9E8zLBDYfFR2SABUZSwzYFv2VrgCve+8aph4WCyEatFUHdTb53C4p32NcfVFPaS4nJU5YIFQhqLxoOiXcvyjuItcZs3LVudyhokK1jIhGGBxZJFJULtFlQwTgRU1U5rlQzyIOVBTEZX9Vm2brffgQ+CLR+/1Lp79+XS0tJ43On3uyvRlRLJbfmUAYHBV+Z1vi9XNdFJT+BEm1wJj2ilqzkcHx/rt5mAhD5Jd+/fv3tfn0tjzeUquA+yaJfPaJuGy7gEcWj1K2l0ZhBzoj8etL6XhUaxr1kcAxCD5A6i0CYxAiJw7t2/P+50m99NxLmtOSgjgrp1q1ndREcqWLlgtL4HRn/wcWdnXwuQGN1BIoiEiGgee3t7r/ZeLY0ByncTEfGOAZ8L90ElE10QycaleUTaGR93Pu5/3IdjCsnLO/o4R0JEUHtA5dVSZ+X7icjXq3ETAoZkpYqJ/gxhcDCjS3/06KORRqKZHGse+kCTvDyeqlqsbO3B0AIkT7VRvpfI/3Aips8yF/YQV+Uskgge6I/RJT969I5wGIscZ1QAB5jkGOsWEiGP7KFH9KGL18r3EQEe5kAiYkfHW3qe2K2aQZ49AyTSJOuX2u76ndZHRKJJAJPj1CKIRNOQVQvGlEuACDDpNy/b/ZJYtKeFK1Wa68sVM8gzQ0PaZDW6uDk2UxxajMjODhUtIAJMyCNYttAkRobH01dPnz4dr1wJEYLCnxfSo18xg2TKIVmNL2qOrT81CDgNk4+ofaxbyASLlrAIeuR+DsnSJYrKZNNDBCfvWLeiShkkdQiWrcvyGA7+fPcn6F1KRA90SJok2Gv5my1ukpTJ0x9+uETlWvHs2PwfM32nR4b6VTQIgTGaXBDHtz+/fTM4GBFkcqyv+mKAULMFJklxcCKYI8DDj8S/Gu/eh8tM2WkbrgpZJJlmMZUkyQVxaGkcaBFRtsgj1GzpXWH4HBGA5DyS8QAiF0fSAY+4P1oyfeO9VT2DABVKktaFcPz++zdGBE3CPQIOobKlacAgIrmqha0WR6IupIF931OyCX65rzopknAcDzIoq2puNUe//45AvnGPABOe7VS2DJLMItRskUn2LCbRuli8R8uWTTZ5E4z9Vrd6BqFe65kIdF+j+/s3JCLKlpiQgEFgEJI7IkjQIUiEPGKQjJsXarUkkNz+gVndWq6OQUjokPkDfbjx2+9GHMk73mwhEhxUtcTyLwqznSySEgH1owsEu9w/UBYuswa8UhGDfJIWedaa1x4jjSMjon1CQFi3xZMdYkSfPEgICdIQRIDJZepWx7avOZyMiNZAVUDDT5rHp7xH1ufe++830O/MI+5max9NgsFugLAcIY9Q0ZImkXXLHyOzv8trllOqYJGRBgKDQZkzQKKt337+LRW6BLOdkFCzhUgo2feRCFYtMglI5AgRuZBJJt6d5ulLyVWwSPxJS3gkmTM9fv4ZgeSqFvFg2U409tObVpnAIlr5W1YU7jLaQZ25Y4SAuJEAkUiVrRbg0CcjMprvP9U0YJBHRLKbcEccPEmOgQibtcMQ0X7fFu1kknnL1sD1QTLOpAKTw9XUIXCYAZpriTcGe4CICS9a5BK5tIXzEc2EWi1gIorWXXaHRBB52ldzqbnJgLijRJWs0PBAl2jBZThPufr1V8RBMWLzCNAgIrzXwnskWoCDXCKDxJ7s85etlvdzDASl7Fhf1xwQCabJPAWr9evPv5JDhEcQiPAIq1qAZQerFkaJvK0ro52CZP6yNeA84GSlK3PIoOxIZ5q3w4pGv4KQCeIQvRZ6BEZuhniMOcIWtsghFCQOIuSRpZW5ipb/CxlaKZNyYz2ZgoHXZI74MDjgdOTIN0bkHRyuhS3ebB0729890WsRk7mCpGX93igpS5FWyZF+9imn9Xl4/JE6BA5ftIO4R8wFeeyASdIooVbLuIRbhO60y6o1P5FoU3x033KzpNyaFQMOzuRZPNP7f/yR8uA4fs5w+IkADm6Snf2LPLIl54jzR/sKfSDDN1FsqvI0Ojs7y3lkpmMT4IFEhEX4JNGF5F3+RjubkEyva4le676DyHieXLd+cz9vklaZFetMi1kEE93LA5FwImIVRYslO8aIaLWOafHXRLt1HcW1IP8DNlvR7Fx3ff9qmkmZNWsCOLhJklk83hoeHAlKIvmGk0Rn92tSfYevNb5ky/HcJHuybM1PpEUfwOJZwtQss2IBDgJytqr8ar19+zalgUHCmy1etb7Byabt9qcfIEiACyG5A8rlCFtGEd0WEfHnuvWjvMwkJdas9TMUUklm8QClBoEDLSLqFt4jIY8YHNbbiLjUOBUk2Go57rWzx4NwRvJ0HiItxOH7ct+gvB6LYJzN0/ImKQ99GFGys15LRjt5hKYjcGQG2TH97/LyoIMaDwbLaBGR7ITEEJFVy28RFCAgKOyOYqTKUXJG+mS4hDN5ZBYRSGS0y/u6mXIW0Ry63WZke7Vkpd8ZLNsXf3O3ETHbx/NbxFwNFZHurXIrFslvkMl/3/4XiZyXLZohgiQSDBL0yLtpIsudliQhufTHSwBF5Ag9aYpABBF/iuBEkam8mhWdnZxxj3gNEgMPOIiIiRHLJBFFJhHJrmEMo4t8F6Gz5LuNSET6sy3i/5aiJrJZTs0KTzgRv0Gaq//VIotQ+0viHpErWwhkc3CZ3X6b/bFrZetpJk7EbxGKd9kDD8tpek9ONBBi4jVIBDxAzCPoEkEEkdCEhIAMul4afqOMxTqKmLR3Z1iEAzGXvEk65USI5qEP1Il3DrKV8aCqhUULPUJJIssWIRHeuLhPlsSEhAfJ0+ZMizAmltl7KSESn2RCJolyq/X+PdAgjxjJObtt8ZeIXNHnkFbG6BFBZJ7mtyU/Xi2SJColQgwMGDMNEr7XQN4jDz2ABlzkwhbikI+jzL9NfHOl2++Px+MlOLTENg/Njv0hOtDMVisSOGS6D0uKkIyJltcg8WoKBF3CqpZ3rZGShOHwdVPjpR+s0m9/9jUWqlyOZgvUmbHoKz5ejcmOXumUEiEkyJJYOaV5gJDHLCSWxcYNgVtKzzfSvydcXJraUACQuIisKI+GPyEPrgwHYCkhRKITrpHHSxkPYRGRI3QXka2jbLZmbzEwfvUDKsPy1A1lJXOJDBKjWcE+QIc4v7m/WUaEfGAWCZVLyftf3juREBFhESQys1hF/THaAg0CJ1xh4P8UTCBL7Ku/M2KklX3h/SdGg/XATVW0Eo1hCsmqJ0A0D33YqxbIHSRAZKs5q2d6lffCU3MwQohomkkTkCw57uv2vZ2v+cq7gcJEiymt4iOEOeRD4i5Yv/xCOAgJ4SAk5ziIx8ZwhjmW0j+hgQDjKQEgv8DF4ptxN4uSPYHEHyNbGgcciITJMCk+1dc+fDiBkSl2OukXo/dTULwe4UhakR8H61hzcf4USbCSlbFDm3ShbuXfoDZa8rkSHGKgcCSAAlTC1DDSMIBGhmTdU7AyIihKEQJCtxFZzeL2kDjumz8hv/OHXsmQoG8QEKJgSLpLzCNzFK3NDAcMEkEpPtXDD5oHnKkSd8F6kwGBgR7xdr8obg+J4y7+DTkSJJL70yOSqcwnJM2xbWWr6Y11NIkZkkrRqZ6kOHAoh5I3mgcqowEXFiT2pS3/5/T6d+/v0fpgLpHNQAYoQkQ/EZI+eoTo+jqtYUoDqVjUVcUqMDjQIyPnGu8bJCJzxL/6690kfgWn2XBm4j4RmU6JTj8RknFzZUlOEfv+mkU58pOcmLSKbrI0CmISupytcQASIiKCxJIjAGQU+b7jxR9GRCaidtFfndUqRgjB9ZsySF5FnppFsrZbncKbLBBCiRyJ/uavN4aHQMLWGuHIzdpbyq0ubQ5AojYJV25BDAbZAk4xdVky3RZvtjqemsWJiNWUolMdYZix7kr0N5kQhz5sVQvEiCQ+e9AjC4CF1y4Z8tTo6oE2QSJ8ftLPBQlORvw1i5AQkOLbrMmHaSXKqvAvcIiRxyNyaWtj4kmPZdxCg5BIn4hWmKzBfoAxZaFxnshTd66PfuISMdIsvOulkhUrq1YJB/IQMxK0CCX7243YV65ADiR7cFh9gjMR4Q6QcRG2W3dz3a/TIl3pEBA1wcOCu94prSmrkr+0gAd5hJvkv9ZJu4dH1MGH35CLqF2CCSFhhiCX8EzRCynzWSS6/dNtYRIY5fS9wbRDAkfuaxxExO8RIrIRebZAvJMKcYhn4PzFiyJcrHeRxoyIxyJbwANOiaWEvnc07ZDQZRAQ5QhO2X1B4ueRvmurhz6ET+ReygSFNcPMKHDwgF+6y9bjnRZp3b6NSGS/pUen4GnICz0yRXaD/J0BAVHZYjhA0xOSP1Y9PM6fbTcmEUyIioBieFAzzLzBb5+YfQBpc0CfRYYaCOCAi63f2iprGuJoehPgIT2CQhrMI289r/t0gQecBAWJSKNMiflE2IQ3YCgqeR6LRJu3tQwMgQTGoGggYBBjksBhECKS98h7cyGLoDZ8PLQQCO61aMT7LrGjBkNCUChGaPZIa2DTRJwW2QKHpDaRKnpmCChemIsjQsK/QV6PCCQ+f+zwlztxu/GXs2sXMRGNF2IROfKKiLgt0jI04IQBB++BVYGKXsyKkPW/ORGS7H4zIm8nHh47+g0p2pWURNvJybdzMOOXxp1+t9tdAcEHesbjPZozojUo5OEAIuc5YrdIpEMEkWjJXitSxSkGb6TDPguJvxoejrIlu19Akrjz3OzJj0hwexPaBBNjXvjkJXzbxfmOAhqFfEJU9qaIOPql5m0UZjun0lTFKXwBSmPEmumjr18BCatahIM0haTl6Xen37eVPgEmuH8vCmD0V2b4vJtBoZJFd36nvnpxP1JWbdwmAQvAUhYQgJEhaSipSPMgJGgRChKakpzzWPfyABGUHXAJnFNM+JzxznjOR+RX+kspEhxaaRc2Nb3su1IdZU33YcEOASRwhEoqMTgsHkGJHHEHerSMb68hFRxoE7aHAzAZ9D00JPAxMAHxR1OoZ15ypTqJ4r0UIIlGgUQiJbX2lSwCEkjE6q870Dv8xXRjEixfRtwoL48v8aGj7hJOGulZFQh2ZGL/jcnt2wcCCZWtRBWnxgsjg0VJxf/888/XTC6TsBj5xR0gLXrHkwldsnO8Y8oXtsL96JKvKAAO/jTRHrbMjlhvEg9WuTJ1S3GINdMDAkIWoSARRHwBQrtgMir7hOQjIiEcl0KyBPMTFMUIEHHE+sFtGBwJjlIcAkwCW8XKOYSAEA42R3QGSLyML3myHRxIOxkWg6RzORxUuOgFUDh10UIkXXubhTRI5JDbBTsE1VBCoebBkfhz5H3iDhC2o4bc6ATOLE52Bivqe9XP3Wjcw/Wwsb3NQoscWMK9LIeEtopFRDzdFnrEU7C6uFsAUnHnyceuugI1x/wpCVx7sdes1gGQsCUJAinBIRNLxfqCRLhJXJP22L036zctjoScwrAMmupq1L8/veD1CpfDrLiTAzAIeYSHe7dYh6AiWbG+fAEiRikOfSAP2Wu9abkL1rdULp8Qkr66MjWXpm/I309l77OGB6ksJtEjKQeIEgq+cCKIBGSpWqtuH7JN5YiIYLK8oq5SHeh0sXThTUgrOwSCg6kcIGu2iiWIyBwhJcqlDbHTHzJhfReUq6tVf2q1fi8FYp0bRgckUbNK6rJkIMdfMvminSziTvRWhsNcUBafeJrdy89JUiAw7qey1qzNA+GRsh0SyP/vMwFhRKwzEk+iT+0ZIJlQnLTUNQge9EWlt7qW7BMRUq4BLrbLCl8cOYEEnz8jEtFsSSIj5dLot1RWJkgFeVwHEVzIylIkmgkEzimbDAsFAjqyAln7TEREjoiq5TEI334c61fOJi11TYqWYP6RAgFZG98thMEKVwlAYg3jyD5Rjz+D8jmSMhG9ls8guG2AgIJMkMf1EckEPOwhMuI8CEsZQPShRyLMAzwASQplRvfrNgjbEghEJqHaBTyum8ieJgJacgKRVEyWNFVxigCGUSgjBCWSXXrEZxCUwybXyYNyBC0CimxrJ/f0IJFD9BGpAoUGkUDWXxMQQwSZkEcIiXuV9xyHmwnwuGYiGgMBWbEAuSdw0NRdFak1tIgA8hqByCAR/e+62yC4wwbKUrs21LVrxZDIiPRtQDQRM2TV2igYiCZic8jktRYjArIT+dszSf/1Z75Vk0yUjSJqdP/uuWypnmgUWhaLFA2kDTBgTBRXCECESWSvBVpTLiW/otw+KSYzO0RkyQYk5UE2IW2pIjUyOHTVihVXYAeCYkDckb51jiNnE4LSUoUoWnoJMMzFAcThkZEqUsGR1gsLkDbwYEgkEZwkuiOdbx/LN+tPkYxUQVpJn7oDIk0nkIP0wmpWSxWpBuCAI86HS8rDEe1fp2ft7khPaP8AEitdECAFqX/+0YuuxyEwOJFEFalJ6pAj4ZCHDxGI9AhPdl+k/4HiRAhKoorT4GWmvhUIiSfJUBWpGGgAkjAHSvNAzWp/3RWLNqPhTDBQsGAVV7RAdzsSCIPBs2SiChXwgDMHJHz4+iEReU1EZLPlqVj5HYJEnjRVkepkRMazHXKPSpdSRU9EbPOQxkMtAcR6hyRx91h8YwfJpKUKVaSfUAWHLMuJocCBTfDBhipWbQAiHRI8BJFLPFXL/XQ139hMQtlQBaubPVZvAfKII8Ee+B5MQwrve8EiDSsQlGdG4q5YQ9zaQTJJkSSqaC2nRCKLQ/JIMEog5grue42SnHGAB0PiqlqBcmkEr7fJvX1RYJCitZIWLRFdI40DhhHHkqhiFWdAAglkLpN8DZVLq2ybILnjXKKK1+D4WBNZEWn3CCSAQIgMVcGyA+k9RNmarc9TQNwRijiMUSSSDVWCuvBC0MuuBGLsgddpRapgrVmBvH74+BwIIZFzxC+eCIGXcj1QElWG9uFlIAFk41EqxEHaUKr4VAetKabHjw0QWbVQaBF3hCRsoyCxxdnbWJWh/v7xHTlVT2nooa8cyZYqWFHDBcTnEYoRd4Ssy21p4ESNVCmK9jURCQQlqlZLFa3JUSoe9Y+NRUhWi4AiDxCSxScTVY4GO/sCSAwsGJNzo0Cml5PqUR4IM4lraWtNOTX9rrT0yaoqSSs7O3c6+bibwoFRUlKm01w9FkBAvGhJk7TdzqMNBcgopESVpeWdYwsQEiYJRkgZqX5KaycCiC/bv3gyfcg2eRC1K1ZlqSOBtB5x0SSxjKQLj4waAoisWtIj7kxPLBtvUNu1qkrTysf9PJDRoyePLConQlR0dAoWaTMgzxGHPj1EvrijucX3QskZZaRKU/RxJw9kS/N4wqBgD9xUqpwQkUBQ/vbXnXlBbsNM/jmYoSpPg495IE+0gAJcGJQNpcoLEV6yiAh5RBL5opxaF3tvTDNRJaqbf5Mx0jiewClqVjlGDoHHKet7o+daZJHHroWtdT+QHBP6/Mi6KlHDdzkgw9Qh5uAqx8jREfDgbZYB8pw84giSthcIQ0LCLVFK0585IMmTVDLZI1WK2ibWGwwIWUSWLSISKKdWcxs5MSahKlODlmIapTTgwrN9S5WjxpFos3qGCFUtq0e8QNbodTcJJVJlqpUL9Y1zh+SIJKocRSZD1gQQkH9C0vA5BPVGFi9Vqro5IA8QCAY7ImmqktQ+1TXrNFKkNgHxBIkEIjfEptcQicm6KlWTjsx0EmHZUGUpOMVUl0Ce+4iEPiBadia/jFSpijr2TMcMwX9HqizFxiHBNJDD5yhbzYIxBxAHk78SVa5auXk6E0X7RJWmtgbCUj0AICibR2Y7ROzUSHESqnI15Gn35IEeeWHFKqtmnfKpYePw8BBxuIjMBsKREJahKldNlih5GtgDl1lYY+BxGqpzhZoHEhFTRKxbXiDr/A3qv6apxKpcRSxCHjwAh0jFSpVZs7RHgilCh1osRyQSP5ARvdMjjBKpCmlL8wAgeSgbqkw1INXbivQcLGL3yGMJxL2jKVJhTFSVpHmgRxiTpFwTg0OmZyK9w1SWaCckfiBfORLySaWADIGGHkaiYpXbZ502pvteTsS+Hu8BkvyDkj5RFdIoJQFDUyGTbKlyFZ5qBdN9L0gkO7+N+Lrh+YX8NRJU5YCsGhzmQrVLcxmqknUERYv1vQKJtIgHSCxe20VVCkj8AIQszDBIVlXZCqBmhbzN8uWIUaDc+ucLIhFMVHWUPGB6guneUmUrytWsw91dxIFExOqvF8iaeN9Kx3zlgKwTCkPDJAlFeulTkakfEYiYkFCOPPYBCfC9Bc4EFFWtYgmbjBSq5FinmhVoILv2IKGi1VZuNdLHIIRPtOIqVaxnnAUMivTSLdImPrtgEZL1BknPB5g9ls2YTCrUYz0zSN4bGCiK9NItQguM0S4SEUFCRF77Qun1ZxL3SVidiiUcYi6JqoR6mkiDfjJESNZVlNiX6q8JCfdJQ1VEo2fPnmkieSarqhpqYM3CEBFIBJPQl+r5J4Ex5f8JKlOxNAzgwamgQarR+UYUIpzIc1uQNHwl8HUqYZTP61WJdDII8SCDlK9geioSHe7mkaAISeANERI3ylpVJiEaCDKBCxmkkhZpIw9CIpK97W3bpl6FIyLQCUfViPQMhyGCUNAglbEIxXpjF+Um8tCbSfigo3BJWJVIRyQIAw1SIYtQrMfb2wLI8xwSb5sV82eG0CvaI5Vos6LVZ0gkZZKOVVUlNaZn6+1tq0XYLZKGv2YhkhyUdjUinYRVCw1SHfWmLBKgRVzRLlNd7Clk36LjSzV6Xq6qGYSm6zHVLC1GRKxs9bxFQTymjQqrYRBCgeNZoiqm9pRF2hoHByJXfyPvL6ObWax6fQ6qYJBPz4TAIBW2SMM4xO8Rb4iEj404ERjtChjkE4x8jMRKVdgi0baRr/31z0Sih7QyzPMkKt0ghkbeJSNVPcVTFmkjEbdHesqnwPUWVqNsg3zSAhzMJauxqqACskioaQgkqKz3Df2xTmJM2mUbBHCADAhkkqhKqkcW2UUg287uN/DTdT2JOinfICkTwIEGUdVUSBYJtlHOZstfs+KUmjRKULZBjNAmMDDRq1m0QrxvuC09woPEW7PoXawckcevo7INQkjg0ERGqqqKyCJtDsQod4MkmGURFCdSYqzHxiAcCiZ6ZYtWg2JdVi1mksdqDotIKCXG+ujTmeDxqaKJTpORiCzi6rWewzGrZkX8QTtCEpZmkE82YcGqbNEKHBaRE5K28irI8p9UskXWz7RD9MGEBavCRWtCFmFMZLRHfrg9upVCKs8iydkZEOFInoWq4gow18Mff9z2li0R6wLu4XSFI/VKSnSNQ4u7ZKSqrqiHud6eArLLiKB60YxEOrSvFDdKSfQzg8OcVLBU9TXR83W0yI/+IOFLvlJxj+CxlcmonIJFSBBKrBZAjdM2WmRW1eopvxq8DUAmh0EZBQtFSXKWqIVQOytasebBPEJIZlmEP1IkbRIWX7BOCAeIBUj1YyS1cgAWYcoD6c38VTlTZUx6USkFixwCl9VILYgmWdGKtn8ESSCEZJZFQhk9BklQcME6OQGHMGGALEaMBOm/CMSJxGsR+dgdKSx0Skg8qG4laoEUnIaY6zLZUdwi/hiRHVqsClOgeQARBiVQC6V2LzbF60dJhAfJ82hmjCBHDqW4GJmcnIuYrKvFUtRrY66DqNtiqyj6mN3CxkSEPcbdLipA1k4EkQUKdPozBikY4OEMkkM94pm/atdS7vQoqGisnjABjhO2pLgwrVYD5+sg+4wEPNKe/asMEcmkUViAEI6USKwWUOHphIoWiHBwjzRmd20cJqoIIo2TD3pwJCehWkg10mDv5YiIROjF8xGRUHqTa/e5hmGOaSVqQRWYTijeZkRk1dptzwEX/lsBZftwct2BjjRI0PAuqoI2TQ9FkBCReUpPuI08OdPGdfP4oMWYBGqBFQQ0PTSSFgEi88zyJlD6JJPtayQSGR4nOIw+tJRacCLU+7pXtnpzNdL8V6ACdV1aN/5AGh/QH4tOhGKEF63d6RwJ5iRCv4I80o7UtSj4YHDgBfNj0RU0aDZimbWjwrl+FzcaqhdfGw9kAif640YQCXjRkhOSw1jNEPUHMo8a18mDYgR43FAiMtp7kZqvbFmZtONr40EiHotPhFotx4L84XZbzaMIyfIS+GOvcU08KEICdWPUaMhWS3okmHcBgPMwSPTRjq/XH0D8RhGJex6PgOZtYGMyGzEBKMHV8XihBxxkklDdKMVIxGuSQM2nCf9N2XFldWsEBDiPtYlSN5DItosIqjH/wqVMErheAZJo7cWLFzmLrMXqxilqRGqCRGTZuiiRGMJdQNHqNeLvXL8yNAwOPNcjdRPViJGInLV7ifijRKodqktrspbZY8olgbqhCiNfshOR+ZH0HEh6wSVrfgIcQBkROBJ1YxWHYmYnsz24UB20INlOmbQ1/4sqSFmQRzDOb6ri2OMRV6/lV+iqXBDxQThxkAwb8v+J1g0NEGKB+LjZCmPhEXKIez7it4mFCf36XjtoNMIwThWGjaDd06Ts8UHlKkXSUDdfkyj395Meacfqwkx6LiKigSAaTA3EQVSwXN1wRXylkYjsoksutaA+kUbJswC7OLriyMQHJxJE6t+hCSyjO2+QwOl+NsivSRg4rLK9q1m4Yz5c4yzgEqp/jaJoIoNERvvlm7mGDgqtnh7tdhA0wgmicNrjyBwkluY3X7lotz50FauCFK5xHsIe/5og8SPpFdPiRAHBwH8hPf59CnsciDRJOy7CHkfGHtkArYXq36m4LZotwlGMSeL2kcaQIkGLBOrfq8a2e9ZegEl0mAMOvBguBbhyMUyynSeCCuJrrFaIAga4ZD1U/3Y1enaPXHvdCtePQC/wCuFR42AmEStbhOS6cBgWWLKCGoa8RW7fZgCQXC0OhIGCVrcmYatbrq04rhBJ2D46PSIUcNQ4RL/Ts76MyJHEV4Qjr7VGjcMWJdvOZMfPubbD7wa/lqdRd1ZuJLvet9qNet/TBYfBERQrpnaNw6046G1vu19qRyaNyaXM0cBadUpY6uiYpYZGIt5pR+HXrA4v/ARDZJLjNBuGSm2OuUMXKEzJ/j2rw3YwL5RYe+MUB1pkvQ7yuRWDTXbdSGj72J6mMvH/qqC9dormOP+nHcT1n/lCmrR7gEFULcKhB2x4DZdeux00wnASxwoUxfEE7hlqFK/h7w8yIAyLmsblWyLN5BSoSCQIRe7WT19HevgQUSAM+KFdV6rv0KQBeXIKVKxV61yCSIoiO+ECh65vNY0rMEp7e/dQ/1WBBM0RySMcyenjUxThqGFcscJGu7ernQI6hJH7Uvvp81M4HFprNyb13/AqRc9ctQ/BK3NLN2E1i+uWeTo3gIeuek4Oa6btqnupwhXFocZDMs9U11FRq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq5ZX/w+loBGfFSAo/gAAAA5lWElmTU0AKgAAAAgAAAAAAAAA0lOTAAAAAElFTkSuQmCC";
var Km = {};
function xr(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(r) => {
    const s = eo(o, r);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (r) => (Fs(o, r), r)];
}
function sp(e, t, n) {
  const o = n.originalEvent.target, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
function ap(e) {
  return As() ? (si(e), !0) : !1;
}
function Gm(e) {
  let t = !1, n;
  const o = vr(!0);
  return (...r) => (t || (n = o.run(() => e(...r)), t = !0), n);
}
function Qm(e) {
  let t = 0, n, o;
  const r = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...s) => (t += 1, n || (o = vr(!0), n = o.run(() => e(...s))), ap(r), n);
}
function Ji(e) {
  return typeof e == "function" ? e() : m(e);
}
const yo = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ym = (e) => typeof e < "u", Zm = Object.prototype.toString, Xm = (e) => Zm.call(e) === "[object Object]", e0 = () => {
}, wu = /* @__PURE__ */ t0();
function t0() {
  var e, t;
  return yo && ((e = window?.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window?.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function n0(e) {
  return Me();
}
function o0(e, t) {
  n0() && go(e, t);
}
function kr(e) {
  var t;
  const n = Ji(e);
  return (t = n?.$el) != null ? t : n;
}
const Ki = yo ? window : void 0;
function ip(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = Ki) : [t, n, o, r] = e, !t)
    return e0;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], a = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, d, p, h) => (c.addEventListener(d, p, h), () => c.removeEventListener(d, p, h)), l = Ee(
    () => [kr(t), Ji(r)],
    ([c, d]) => {
      if (a(), !c)
        return;
      const p = Xm(d) ? { ...d } : d;
      s.push(
        ...n.flatMap((h) => o.map((f) => i(c, h, f, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), a();
  };
  return ap(u), u;
}
function r0(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function s0(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: r = Ki,
    eventName: s = "keydown",
    passive: a = !1,
    dedupe: i = !1
  } = o, l = r0(t);
  return ip(r, s, (u) => {
    u.repeat && Ji(i) || l(u) && n(u);
  }, a);
}
function a0() {
  const e = j(!1), t = Me();
  return t && tt(() => {
    e.value = !0;
  }, t), e;
}
function i0(e) {
  return JSON.parse(JSON.stringify(e));
}
function Gi(e, t, n, o = {}) {
  var r, s, a;
  const {
    clone: i = !1,
    passive: l = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: d,
    shouldEmit: p
  } = o, h = Me(), f = n || h?.emit || ((r = h?.$emit) == null ? void 0 : r.bind(h)) || ((a = (s = h?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : a.bind(h?.proxy));
  let g = u;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (y) => i ? typeof i == "function" ? i(y) : i0(y) : y, _ = () => Ym(e[t]) ? b(e[t]) : d, v = (y) => {
    p ? p(y) && f(g, y) : f(g, y);
  };
  if (l) {
    const y = _(), x = j(y);
    let w = !1;
    return Ee(
      () => e[t],
      (I) => {
        w || (w = !0, x.value = b(I), Qe(() => w = !1));
      }
    ), Ee(
      x,
      (I) => {
        !w && (I !== e[t] || c) && v(I);
      },
      { deep: c }
    ), x;
  } else
    return ae({
      get() {
        return _();
      },
      set(y) {
        v(y);
      }
    });
}
function Qi(e) {
  return e ? e.flatMap((t) => t.type === Oe ? Qi(t.children) : [t]) : [];
}
function sa(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ga(e, t, n = ".", o) {
  if (!sa(t))
    return Ga(e, {}, n, o);
  const r = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const a = e[s];
    a != null && (o && o(r, s, a, n) || (Array.isArray(a) && Array.isArray(r[s]) ? r[s] = [...a, ...r[s]] : sa(a) && sa(r[s]) ? r[s] = Ga(
      a,
      r[s],
      (n ? `${n}.` : "") + s.toString(),
      o
    ) : r[s] = a));
  }
  return r;
}
function l0(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Ga(n, o, "", e), {})
  );
}
const u0 = l0(), [Yi, Sw] = xr("ConfigProvider");
let c0 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", d0 = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += c0[Math.random() * 64 | 0];
  return t;
};
const p0 = Qm(() => {
  const e = j(/* @__PURE__ */ new Map()), t = j(), n = ae(() => {
    for (const a of e.value.values())
      if (a)
        return !0;
    return !1;
  }), o = Yi({
    scrollBody: j(!0)
  });
  let r = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", wu && r?.(), t.value = void 0;
  };
  return Ee(n, (a, i) => {
    var l;
    if (!yo)
      return;
    if (!a) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, c = { padding: u, margin: 0 }, d = (l = o.scrollBody) != null && l.value ? typeof o.scrollBody.value == "object" ? u0({
      padding: o.scrollBody.value.padding === !0 ? u : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? u : o.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof d.padding == "number" ? `${d.padding}px` : String(d.padding), document.body.style.marginRight = typeof d.margin == "number" ? `${d.margin}px` : String(d.margin), document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), wu && (r = ip(
      document,
      "touchmove",
      (p) => h0(p),
      { passive: !1 }
    )), Qe(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function f0(e) {
  const t = d0(6), n = p0();
  n.value.set(t, e ?? !1);
  const o = ae({
    get: () => n.value.get(t) ?? !1,
    set: (r) => n.value.set(t, r)
  });
  return o0(() => {
    n.value.delete(t);
  }), o;
}
function lp(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !n || n.tagName === "BODY" ? !1 : lp(n);
  }
}
function h0(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && lp(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function up(e) {
  const t = Yi({
    dir: j("ltr")
  });
  return ae(() => {
    var n;
    return e?.value || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function _r(e) {
  const t = Me(), n = t?.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t?.type.__name}`
  ), n?.forEach((r) => {
    o[Nn(Ne(r))] = (...s) => e(r, ...s);
  }), o;
}
function m0(e) {
  const t = Me(), n = Object.keys(t?.type.props ?? {}).reduce((r, s) => {
    const a = (t?.type.props[s]).default;
    return a !== void 0 && (r[s] = a), r;
  }, {}), o = hi(e);
  return ae(() => {
    const r = {}, s = t?.vnode.props ?? {};
    return Object.keys(s).forEach((a) => {
      r[Ne(a)] = s[a];
    }), Object.keys({ ...n, ...r }).reduce((a, i) => (o.value[i] !== void 0 && (a[i] = o.value[i]), a), {});
  });
}
function v0(e, t) {
  const n = m0(e), o = t ? _r(t) : {};
  return ae(() => ({
    ...n.value,
    ...o
  }));
}
function lt() {
  const e = Me(), t = j(), n = ae(() => {
    var a, i;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : kr(t);
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
var g0 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Co = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), Vr = {}, aa = 0, cp = function(e) {
  return e && (e.host || cp(e.parentNode));
}, y0 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = cp(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, b0 = function(e, t, n, o) {
  var r = y0(t, Array.isArray(e) ? e : [e]);
  Vr[n] || (Vr[n] = /* @__PURE__ */ new WeakMap());
  var s = Vr[n], a = [], i = /* @__PURE__ */ new Set(), l = new Set(r), u = function(d) {
    !d || i.has(d) || (i.add(d), u(d.parentNode));
  };
  r.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (i.has(p))
        c(p);
      else
        try {
          var h = p.getAttribute(o), f = h !== null && h !== "false", g = (Co.get(p) || 0) + 1, b = (s.get(p) || 0) + 1;
          Co.set(p, g), s.set(p, b), a.push(p), g === 1 && f && zr.set(p, !0), b === 1 && p.setAttribute(n, "true"), f || p.setAttribute(o, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", p, _);
        }
    });
  };
  return c(t), i.clear(), aa++, function() {
    a.forEach(function(d) {
      var p = Co.get(d) - 1, h = s.get(d) - 1;
      Co.set(d, p), s.set(d, h), p || (zr.has(d) || d.removeAttribute(o), zr.delete(d)), h || d.removeAttribute(n);
    }), aa--, aa || (Co = /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), Vr = {});
  };
}, w0 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = g0(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), b0(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
function x0(e) {
  let t;
  Ee(() => kr(e), (n) => {
    n ? t = w0(n) : t && t();
  }), qt(() => {
    t && t();
  });
}
let k0 = 0;
function mr(e, t = "radix") {
  if (e)
    return e;
  const n = Yi({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++k0}`;
}
function _0(e, t) {
  const n = j(e);
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
const Zi = /* @__PURE__ */ Z({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, r;
      if (!n.default)
        return null;
      const s = Qi(n.default()), a = s.findIndex((c) => c.type !== st);
      if (a === -1)
        return s;
      const i = s[a];
      (o = i.props) == null || delete o.ref;
      const l = i.props ? be(t, i.props) : t;
      t.class && (r = i.props) != null && r.class && delete i.props.class;
      const u = Vt(i, l);
      for (const c in l)
        c.startsWith("on") && (u.props || (u.props = {}), u.props[c] = l[c]);
      return s.length === 1 ? u : (s[a] = u, s);
    };
  }
}), yt = /* @__PURE__ */ Z({
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
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => At(o, t) : o !== "template" ? () => At(e.as, t, { default: n.default }) : () => At(Zi, t, { default: n.default });
  }
});
function Xi() {
  const e = j(), t = ae(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : kr(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function C0(e, t) {
  var n;
  const o = j({}), r = j("none"), s = j(e), a = e.value ? "mounted" : "unmounted";
  let i;
  const l = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? Ki, { state: u, dispatch: c } = _0(a, {
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
  }), d = (b) => {
    var _;
    if (yo) {
      const v = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      (_ = t.value) == null || _.dispatchEvent(v);
    }
  };
  Ee(
    e,
    async (b, _) => {
      var v;
      const y = _ !== b;
      if (await Qe(), y) {
        const x = r.value, w = qr(t.value);
        b ? (c("MOUNT"), d("enter"), w === "none" && d("after-enter")) : w === "none" || ((v = o.value) == null ? void 0 : v.display) === "none" ? (c("UNMOUNT"), d("leave"), d("after-leave")) : _ && x !== w ? (c("ANIMATION_OUT"), d("leave")) : (c("UNMOUNT"), d("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const p = (b) => {
    const _ = qr(t.value), v = _.includes(
      b.animationName
    ), y = u.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && v && (d(`after-${y}`), c("ANIMATION_END"), !s.value)) {
      const x = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = l?.setTimeout(() => {
        var w;
        ((w = t.value) == null ? void 0 : w.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = x);
      });
    }
    b.target === t.value && _ === "none" && c("ANIMATION_END");
  }, h = (b) => {
    b.target === t.value && (r.value = qr(t.value));
  }, f = Ee(
    t,
    (b, _) => {
      b ? (o.value = getComputedStyle(b), b.addEventListener("animationstart", h), b.addEventListener("animationcancel", p), b.addEventListener("animationend", p)) : (c("ANIMATION_END"), l?.clearTimeout(i), _?.removeEventListener("animationstart", h), _?.removeEventListener("animationcancel", p), _?.removeEventListener("animationend", p));
    },
    { immediate: !0 }
  ), g = Ee(u, () => {
    const b = qr(t.value);
    r.value = u.value === "mounted" ? b : "none";
  });
  return qt(() => {
    f(), g();
  }), {
    isPresent: ae(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function qr(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const el = /* @__PURE__ */ Z({
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
    const { present: r, forceMount: s } = Qt(e), a = j(), { isPresent: i } = C0(r, a);
    n({ present: i });
    let l = t.default({ present: i });
    l = Qi(l || []);
    const u = Me();
    if (l && l?.length > 1) {
      const c = (o = u?.parent) != null && o.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
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
    return () => s.value || r.value || i.value ? At(t.default({ present: i })[0], {
      ref: (c) => {
        const d = kr(c);
        return typeof d?.hasAttribute > "u" || (d != null && d.hasAttribute("data-radix-popper-content-wrapper") ? a.value = d.firstElementChild : a.value = d), d;
      }
    }) : null;
  }
}), [rn, S0] = xr("DialogRoot"), A0 = /* @__PURE__ */ Z({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Gi(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = j(), s = j(), { modal: a } = Qt(n);
    return S0({
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
    }), (i, l) => oe(i.$slots, "default", { open: m(o) });
  }
}), E0 = /* @__PURE__ */ Z({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = rn(), { forwardRef: o, currentElement: r } = lt();
    return n.contentId || (n.contentId = mr(void 0, "radix-vue-dialog-content")), tt(() => {
      n.triggerElement.value = r.value;
    }), (s, a) => (N(), re(m(yt), be(t, {
      ref: m(o),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": m(n).open.value || !1,
      "aria-controls": m(n).open.value ? m(n).contentId : void 0,
      "data-state": m(n).open.value ? "open" : "closed",
      onClick: m(n).onOpenToggle
    }), {
      default: E(() => [
        oe(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), I0 = /* @__PURE__ */ Z({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = a0();
    return (n, o) => m(t) || n.forceMount ? (N(), re(Ci, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      oe(n.$slots, "default")
    ], 8, ["to", "disabled"])) : Xe("", !0);
  }
}), T0 = /* @__PURE__ */ Z({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), re(m(I0), mo(jn(t)), {
      default: E(() => [
        oe(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), O0 = "dismissableLayer.pointerDownOutside", B0 = "dismissableLayer.focusOutside";
function dp(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), r = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || r.indexOf(o) < r.indexOf(n));
}
function $0(e, t) {
  var n;
  const o = ((n = t?.value) == null ? void 0 : n.ownerDocument) ?? globalThis?.document, r = j(!1), s = j(() => {
  });
  return it((a) => {
    if (!yo)
      return;
    const i = async (u) => {
      const c = u.target;
      if (t != null && t.value) {
        if (dp(t.value, c)) {
          r.value = !1;
          return;
        }
        if (u.target && !r.value) {
          let d = function() {
            sp(
              O0,
              e,
              p
            );
          };
          const p = { originalEvent: u };
          u.pointerType === "touch" ? (o.removeEventListener("click", s.value), s.value = d, o.addEventListener("click", s.value, {
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
function R0(e, t) {
  var n;
  const o = ((n = t?.value) == null ? void 0 : n.ownerDocument) ?? globalThis?.document, r = j(!1);
  return it((s) => {
    if (!yo)
      return;
    const a = async (i) => {
      t != null && t.value && (await Qe(), !(!t.value || dp(t.value, i.target)) && i.target && !r.value && sp(
        B0,
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
const sn = nn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), D0 = /* @__PURE__ */ Z({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: s } = lt(), a = ae(
      () => {
        var f;
        return ((f = s.value) == null ? void 0 : f.ownerDocument) ?? globalThis.document;
      }
    ), i = ae(() => sn.layersRoot), l = ae(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), u = ae(() => sn.layersWithOutsidePointerEventsDisabled.size > 0), c = ae(() => {
      const f = Array.from(i.value), [g] = [...sn.layersWithOutsidePointerEventsDisabled].slice(-1), b = f.indexOf(g);
      return l.value >= b;
    }), d = $0(async (f) => {
      const g = [...sn.branches].some(
        (b) => b?.contains(f.target)
      );
      !c.value || g || (o("pointerDownOutside", f), o("interactOutside", f), await Qe(), f.defaultPrevented || o("dismiss"));
    }, s), p = R0((f) => {
      [...sn.branches].some(
        (g) => g?.contains(f.target)
      ) || (o("focusOutside", f), o("interactOutside", f), f.defaultPrevented || o("dismiss"));
    }, s);
    s0("Escape", (f) => {
      l.value === i.value.size - 1 && (o("escapeKeyDown", f), f.defaultPrevented || o("dismiss"));
    });
    let h;
    return it((f) => {
      s.value && (n.disableOutsidePointerEvents && (sn.layersWithOutsidePointerEventsDisabled.size === 0 && (h = a.value.body.style.pointerEvents, a.value.body.style.pointerEvents = "none"), sn.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), f(() => {
        n.disableOutsidePointerEvents && sn.layersWithOutsidePointerEventsDisabled.size === 1 && (a.value.body.style.pointerEvents = h);
      }));
    }), it((f) => {
      f(() => {
        s.value && (i.value.delete(s.value), sn.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (f, g) => (N(), re(m(yt), {
      ref: m(r),
      "as-child": f.asChild,
      as: f.as,
      "data-dismissable-layer": "",
      style: on({
        pointerEvents: u.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: m(p).onFocusCapture,
      onBlurCapture: m(p).onBlurCapture,
      onPointerdownCapture: m(d).onPointerDownCapture
    }, {
      default: E(() => [
        oe(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), ia = "focusScope.autoFocusOnMount", la = "focusScope.autoFocusOnUnmount", xu = { bubbles: !1, cancelable: !0 };
function N0(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (On(o, { select: t }), document.activeElement !== n)
      return !0;
}
function F0(e) {
  const t = pp(e), n = ku(t, e), o = ku(t.reverse(), e);
  return [n, o];
}
function pp(e) {
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
function ku(e, t) {
  for (const n of e)
    if (!P0(n, { upTo: t }))
      return n;
}
function P0(e, { upTo: t }) {
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
function M0(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function On(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && M0(e) && t && e.select();
  }
}
const U0 = Gm(() => j([]));
function L0() {
  const e = U0();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && n?.pause(), e.value = _u(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = _u(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function _u(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function j0(e) {
  return e.filter((t) => t.tagName !== "A");
}
const z0 = /* @__PURE__ */ Z({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: r, currentElement: s } = lt(), a = j(null), i = L0(), l = nn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    it((c) => {
      if (!yo)
        return;
      const d = s.value;
      if (!n.trapped)
        return;
      function p(b) {
        if (l.paused || !d)
          return;
        const _ = b.target;
        d.contains(_) ? a.value = _ : On(a.value, { select: !0 });
      }
      function h(b) {
        if (l.paused || !d)
          return;
        const _ = b.relatedTarget;
        _ !== null && (d.contains(_) || On(a.value, { select: !0 }));
      }
      function f(b) {
        d.contains(a.value) || On(d);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", h);
      const g = new MutationObserver(f);
      d && g.observe(d, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", h), g.disconnect();
      });
    }), it(async (c) => {
      const d = s.value;
      if (await Qe(), !d)
        return;
      i.add(l);
      const p = document.activeElement;
      if (!d.contains(p)) {
        const h = new CustomEvent(ia, xu);
        d.addEventListener(ia, (f) => o("mountAutoFocus", f)), d.dispatchEvent(h), h.defaultPrevented || (N0(j0(pp(d)), {
          select: !0
        }), document.activeElement === p && On(d));
      }
      c(() => {
        d.removeEventListener(ia, (g) => o("mountAutoFocus", g));
        const h = new CustomEvent(la, xu), f = (g) => {
          o("unmountAutoFocus", g);
        };
        d.addEventListener(la, f), d.dispatchEvent(h), setTimeout(() => {
          h.defaultPrevented || On(p ?? document.body, { select: !0 }), d.removeEventListener(la, f), i.remove(l);
        }, 0);
      });
    });
    function u(c) {
      if (!n.loop && !n.trapped || l.paused)
        return;
      const d = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, p = document.activeElement;
      if (d && p) {
        const h = c.currentTarget, [f, g] = F0(h);
        f && g ? !c.shiftKey && p === g ? (c.preventDefault(), n.loop && On(f, { select: !0 })) : c.shiftKey && p === f && (c.preventDefault(), n.loop && On(g, { select: !0 })) : p === h && c.preventDefault();
      }
    }
    return (c, d) => (N(), re(m(yt), {
      ref_key: "currentRef",
      ref: r,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: u
    }, {
      default: E(() => [
        oe(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function V0(e) {
  return e ? "open" : "closed";
}
const q0 = "DialogTitle", W0 = "DialogContent";
function H0({
  titleName: e = q0,
  contentName: t = W0,
  componentLink: n = "dialog.html#title",
  titleId: o,
  descriptionId: r,
  contentElement: s
}) {
  const a = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  tt(() => {
    var l;
    document.getElementById(o) || console.warn(a);
    const u = (l = s.value) == null ? void 0 : l.getAttribute("aria-describedby");
    r && u && (document.getElementById(r) || console.warn(i));
  });
}
const fp = /* @__PURE__ */ Z({
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
    const n = e, o = t, r = rn(), { forwardRef: s, currentElement: a } = lt();
    return r.titleId || (r.titleId = mr(void 0, "radix-vue-dialog-title")), r.descriptionId || (r.descriptionId = mr(void 0, "radix-vue-dialog-description")), tt(() => {
      r.contentElement = a, document.activeElement !== document.body && (r.triggerElement.value = document.activeElement);
    }), Km.NODE_ENV !== "production" && H0({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: r.titleId,
      descriptionId: r.descriptionId,
      contentElement: a
    }), (i, l) => (N(), re(m(z0), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: l[5] || (l[5] = (u) => o("openAutoFocus", u)),
      onUnmountAutoFocus: l[6] || (l[6] = (u) => o("closeAutoFocus", u))
    }, {
      default: E(() => [
        B(m(D0), be({
          id: m(r).contentId,
          ref: m(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": m(r).descriptionId,
          "aria-labelledby": m(r).titleId,
          "data-state": m(V0)(m(r).open.value)
        }, i.$attrs, {
          onDismiss: l[0] || (l[0] = (u) => m(r).onOpenChange(!1)),
          onEscapeKeyDown: l[1] || (l[1] = (u) => o("escapeKeyDown", u)),
          onFocusOutside: l[2] || (l[2] = (u) => o("focusOutside", u)),
          onInteractOutside: l[3] || (l[3] = (u) => o("interactOutside", u)),
          onPointerDownOutside: l[4] || (l[4] = (u) => o("pointerDownOutside", u))
        }), {
          default: E(() => [
            oe(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), J0 = /* @__PURE__ */ Z({
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
    const n = e, o = t, r = rn(), s = _r(o), { forwardRef: a, currentElement: i } = lt();
    return x0(i), (l, u) => (N(), re(fp, be({ ...n, ...m(s) }, {
      ref: m(a),
      "trap-focus": m(r).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var d;
        c.defaultPrevented || (c.preventDefault(), (d = m(r).triggerElement.value) == null || d.focus());
      }),
      onPointerDownOutside: u[1] || (u[1] = (c) => {
        const d = c.detail.originalEvent, p = d.button === 0 && d.ctrlKey === !0;
        (d.button === 2 || p) && c.preventDefault();
      }),
      onFocusOutside: u[2] || (u[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: E(() => [
        oe(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), K0 = /* @__PURE__ */ Z({
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
    const n = e, o = _r(t);
    lt();
    const r = rn(), s = j(!1), a = j(!1);
    return (i, l) => (N(), re(fp, be({ ...n, ...m(o) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: l[0] || (l[0] = (u) => {
        var c;
        u.defaultPrevented || (s.value || (c = m(r).triggerElement.value) == null || c.focus(), u.preventDefault()), s.value = !1, a.value = !1;
      }),
      onInteractOutside: l[1] || (l[1] = (u) => {
        var c;
        u.defaultPrevented || (s.value = !0, u.detail.originalEvent.type === "pointerdown" && (a.value = !0));
        const d = u.target;
        (c = m(r).triggerElement.value) != null && c.contains(d) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && a.value && u.preventDefault();
      })
    }), {
      default: E(() => [
        oe(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), G0 = /* @__PURE__ */ Z({
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
    const n = e, o = t, r = rn(), s = _r(o), { forwardRef: a } = lt();
    return (i, l) => (N(), re(m(el), {
      present: i.forceMount || m(r).open.value
    }, {
      default: E(() => [
        m(r).modal.value ? (N(), re(J0, be({
          key: 0,
          ref: m(a)
        }, { ...n, ...m(s), ...i.$attrs }), {
          default: E(() => [
            oe(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (N(), re(K0, be({
          key: 1,
          ref: m(a)
        }, { ...n, ...m(s), ...i.$attrs }), {
          default: E(() => [
            oe(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Q0 = /* @__PURE__ */ Z({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = rn();
    return f0(!0), lt(), (n, o) => (N(), re(m(yt), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": m(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: E(() => [
        oe(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Y0 = /* @__PURE__ */ Z({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = rn(), { forwardRef: n } = lt();
    return (o, r) => {
      var s;
      return (s = m(t)) != null && s.modal.value ? (N(), re(m(el), {
        key: 0,
        present: o.forceMount || m(t).open.value
      }, {
        default: E(() => [
          B(Q0, be(o.$attrs, {
            ref: m(n),
            as: o.as,
            "as-child": o.asChild
          }), {
            default: E(() => [
              oe(o.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : Xe("", !0);
    };
  }
}), Z0 = /* @__PURE__ */ Z({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    lt();
    const n = rn();
    return (o, r) => (N(), re(m(yt), be(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: r[0] || (r[0] = (s) => m(n).onOpenChange(!1))
    }), {
      default: E(() => [
        oe(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), X0 = /* @__PURE__ */ Z({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = rn();
    return lt(), (o, r) => (N(), re(m(yt), be(t, {
      id: m(n).titleId
    }), {
      default: E(() => [
        oe(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ev = /* @__PURE__ */ Z({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    lt();
    const n = rn();
    return (o, r) => (N(), re(m(yt), be(t, {
      id: m(n).descriptionId
    }), {
      default: E(() => [
        oe(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), tv = "data-radix-vue-collection-item", [tl, nv] = xr("CollectionProvider");
function ov(e = tv) {
  const t = j(/* @__PURE__ */ new Map()), n = j(), o = nv({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: r } = hp(o), s = ae(() => Array.from(o.itemMap.value.values())), a = ae(() => o.itemMap.value.size);
  return { getItems: r, reactiveItems: s, itemMapSize: a };
}
const rv = /* @__PURE__ */ Z({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = tl(), { primitiveElement: o, currentElement: r } = Xi();
    return Ee(r, () => {
      n.collectionRef.value = r.value;
    }), () => At(Zi, { ref: o }, t);
  }
}), sv = /* @__PURE__ */ Z({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = tl(), { primitiveElement: r, currentElement: s } = Xi();
    return it((a) => {
      if (s.value) {
        const i = Os(s.value);
        o.itemMap.value.set(i, { ref: s.value, value: e.value }), a(() => o.itemMap.value.delete(i));
      }
    }), () => At(Zi, { ...n, [o.attrName]: "", ref: r }, t);
  }
});
function hp(e) {
  const t = e ?? tl();
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
const av = "rovingFocusGroup.onEntryFocus", iv = { bubbles: !1, cancelable: !0 }, lv = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function uv(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function cv(e, t, n) {
  const o = uv(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return lv[o];
}
function mp(e, t = !1, n) {
  const o = n?.activeElement ?? document.activeElement;
  for (const r of e)
    if (r === o || (r.focus({ preventScroll: t }), document.activeElement !== o))
      return;
}
function dv(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [pv, fv] = xr("RovingFocusGroup"), hv = /* @__PURE__ */ Z({
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
    const o = e, r = n, { loop: s, orientation: a, dir: i } = Qt(o), l = up(i), u = Gi(o, "currentTabStopId", r, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), c = j(!1), d = j(!1), p = j(0), { getItems: h } = ov();
    function f(b) {
      const _ = !d.value;
      if (b.currentTarget && b.target === b.currentTarget && _ && !c.value) {
        const v = new CustomEvent(av, iv);
        if (b.currentTarget.dispatchEvent(v), r("entryFocus", v), !v.defaultPrevented) {
          const y = h().map((F) => F.ref).filter((F) => F.dataset.disabled !== ""), x = y.find((F) => F.getAttribute("data-active") === "true"), w = y.find(
            (F) => F.id === u.value
          ), I = [x, w, ...y].filter(
            Boolean
          );
          mp(I, o.preventScrollOnEntryFocus);
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
      getItems: h
    }), fv({
      loop: s,
      dir: l,
      orientation: a,
      currentTabStopId: u,
      onItemFocus: (b) => {
        u.value = b;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        p.value++;
      },
      onFocusableItemRemove: () => {
        p.value--;
      }
    }), (b, _) => (N(), re(m(rv), null, {
      default: E(() => [
        B(m(yt), {
          tabindex: c.value || p.value === 0 ? -1 : 0,
          "data-orientation": m(a),
          as: b.as,
          "as-child": b.asChild,
          dir: m(l),
          style: { outline: "none" },
          onMousedown: _[0] || (_[0] = (v) => d.value = !0),
          onMouseup: g,
          onFocus: f,
          onBlur: _[1] || (_[1] = (v) => c.value = !1)
        }, {
          default: E(() => [
            oe(b.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), mv = /* @__PURE__ */ Z({
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
    const t = e, n = pv(), o = ae(() => t.tabStopId || mr()), r = ae(
      () => n.currentTabStopId.value === o.value
    ), { getItems: s } = hp(), { primitiveElement: a, currentElement: i } = Xi(), l = ae(() => {
      var c;
      return (c = i.value) == null ? void 0 : c.getRootNode();
    });
    tt(() => {
      t.focusable && n.onFocusableItemAdd();
    }), qt(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function u(c) {
      if (c.key === "Tab" && c.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (c.target !== c.currentTarget)
        return;
      const d = cv(
        c,
        n.orientation.value,
        n.dir.value
      );
      if (d !== void 0) {
        if (c.metaKey || c.ctrlKey || c.altKey || !t.allowShiftKey && c.shiftKey)
          return;
        c.preventDefault();
        let p = [...s().map((h) => h.ref).filter((h) => h.dataset.disabled !== "")];
        if (d === "last")
          p.reverse();
        else if (d === "prev" || d === "next") {
          d === "prev" && p.reverse();
          const h = p.indexOf(
            c.currentTarget
          );
          p = n.loop.value ? dv(p, h + 1) : p.slice(h + 1);
        }
        Qe(() => mp(p, !1, l.value));
      }
    }
    return (c, d) => (N(), re(m(sv), null, {
      default: E(() => [
        B(m(yt), {
          ref_key: "primitiveElement",
          ref: a,
          tabindex: r.value ? 0 : -1,
          "data-orientation": m(n).orientation.value,
          "data-active": c.active,
          "data-disabled": c.focusable ? void 0 : "",
          as: c.as,
          "as-child": c.asChild,
          onMousedown: d[0] || (d[0] = (p) => {
            c.focusable ? m(n).onItemFocus(o.value) : p.preventDefault();
          }),
          onFocus: d[1] || (d[1] = (p) => m(n).onItemFocus(o.value)),
          onKeydown: u
        }, {
          default: E(() => [
            oe(c.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), vv = /* @__PURE__ */ Z({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return lt(), (n, o) => (N(), re(m(yt), be(t, {
      onMousedown: o[0] || (o[0] = (r) => {
        !r.defaultPrevented && r.detail > 1 && r.preventDefault();
      })
    }), {
      default: E(() => [
        oe(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function gv() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
gv();
const [nl, yv] = xr("TabsRoot"), bv = /* @__PURE__ */ Z({
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
    const n = e, o = t, { orientation: r, dir: s } = Qt(n), a = up(s);
    lt();
    const i = Gi(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), l = j();
    return yv({
      modelValue: i,
      changeModelValue: (u) => {
        i.value = u;
      },
      orientation: r,
      dir: a,
      activationMode: n.activationMode,
      baseId: mr(void 0, "radix-vue-tabs"),
      tabsList: l
    }), (u, c) => (N(), re(m(yt), {
      dir: m(a),
      "data-orientation": m(r),
      "as-child": u.asChild,
      as: u.as
    }, {
      default: E(() => [
        oe(u.$slots, "default", { modelValue: m(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), wv = /* @__PURE__ */ Z({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = Qt(t), { forwardRef: o, currentElement: r } = lt(), s = nl();
    return s.tabsList = r, (a, i) => (N(), re(m(hv), {
      "as-child": "",
      orientation: m(s).orientation.value,
      dir: m(s).dir.value,
      loop: m(n)
    }, {
      default: E(() => [
        B(m(yt), {
          ref: m(o),
          role: "tablist",
          "as-child": a.asChild,
          as: a.as,
          "aria-orientation": m(s).orientation.value
        }, {
          default: E(() => [
            oe(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function vp(e, t) {
  return `${e}-trigger-${t}`;
}
function gp(e, t) {
  return `${e}-content-${t}`;
}
const xv = /* @__PURE__ */ Z({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = lt(), o = nl(), r = ae(() => vp(o.baseId, t.value)), s = ae(() => gp(o.baseId, t.value)), a = ae(() => t.value === o.modelValue.value), i = j(a.value);
    return tt(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (l, u) => (N(), re(m(el), {
      present: a.value,
      "force-mount": ""
    }, {
      default: E(({ present: c }) => [
        B(m(yt), {
          id: s.value,
          ref: m(n),
          "as-child": l.asChild,
          as: l.as,
          role: "tabpanel",
          "data-state": a.value ? "active" : "inactive",
          "data-orientation": m(o).orientation.value,
          "aria-labelledby": r.value,
          hidden: !c.value,
          tabindex: "0",
          style: on({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: E(() => [
            l.forceMount || a.value ? oe(l.$slots, "default", { key: 0 }) : Xe("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), kv = /* @__PURE__ */ Z({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = lt(), o = nl(), r = ae(() => vp(o.baseId, t.value)), s = ae(() => gp(o.baseId, t.value)), a = ae(() => t.value === o.modelValue.value);
    return (i, l) => (N(), re(m(mv), {
      "as-child": "",
      focusable: !i.disabled,
      active: a.value
    }, {
      default: E(() => [
        B(m(yt), {
          id: r.value,
          ref: m(n),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": a.value ? "true" : "false",
          "aria-controls": s.value,
          "data-state": a.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": m(o).orientation.value,
          onMousedown: l[0] || (l[0] = fn((u) => {
            !i.disabled && u.ctrlKey === !1 ? m(o).changeModelValue(i.value) : u.preventDefault();
          }, ["left"])),
          onKeydown: l[1] || (l[1] = md((u) => m(o).changeModelValue(i.value), ["enter", "space"])),
          onFocus: l[2] || (l[2] = () => {
            const u = m(o).activationMode !== "manual";
            !a.value && !i.disabled && u && m(o).changeModelValue(i.value);
          })
        }, {
          default: E(() => [
            oe(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), yp = /* @__PURE__ */ Z({
  __name: "Dialog",
  setup(e) {
    return (t, n) => (N(), re(m(A0), null, {
      default: E(() => [
        oe(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), _v = /* @__PURE__ */ Z({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), re(m(E0), mo(jn(t)), {
      default: E(() => [
        oe(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function bp(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var r = e.length;
      for (t = 0; t < r; t++)
        e[t] && (n = bp(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function Cv() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)
    (e = arguments[n]) && (t = bp(e)) && (o && (o += " "), o += t);
  return o;
}
const ol = "-";
function Sv(e) {
  const t = Ev(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  function r(a) {
    const i = a.split(ol);
    return i[0] === "" && i.length !== 1 && i.shift(), wp(i, t) || Av(a);
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
function wp(e, t) {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? wp(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const s = e.join(ol);
  return t.validators.find(({
    validator: a
  }) => a(s))?.classGroupId;
}
const Cu = /^\[(.+)\]$/;
function Av(e) {
  if (Cu.test(e)) {
    const t = Cu.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Ev(e) {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Tv(Object.entries(e.classGroups), n).forEach(([s, a]) => {
    Qa(a, o, s, t);
  }), o;
}
function Qa(e, t, n, o) {
  e.forEach((r) => {
    if (typeof r == "string") {
      const s = r === "" ? t : Su(t, r);
      s.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (Iv(r)) {
        Qa(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([s, a]) => {
      Qa(a, Su(t, s), n, o);
    });
  });
}
function Su(e, t) {
  let n = e;
  return t.split(ol).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}
function Iv(e) {
  return e.isThemeGetter;
}
function Tv(e, t) {
  return t ? e.map(([n, o]) => {
    const r = o.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([a, i]) => [t + a, i])) : s);
    return [n, r];
  }) : e;
}
function Ov(e) {
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
const xp = "!";
function Bv(e) {
  const t = e.separator, n = t.length === 1, o = t[0], r = t.length;
  return function(a) {
    const i = [];
    let l = 0, u = 0, c;
    for (let g = 0; g < a.length; g++) {
      let b = a[g];
      if (l === 0) {
        if (b === o && (n || a.slice(g, g + r) === t)) {
          i.push(a.slice(u, g)), u = g + r;
          continue;
        }
        if (b === "/") {
          c = g;
          continue;
        }
      }
      b === "[" ? l++ : b === "]" && l--;
    }
    const d = i.length === 0 ? a : a.substring(u), p = d.startsWith(xp), h = p ? d.substring(1) : d, f = c && c > u ? c - u : void 0;
    return {
      modifiers: i,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: f
    };
  };
}
function $v(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}
function Rv(e) {
  return {
    cache: Ov(e.cacheSize),
    splitModifiers: Bv(e),
    ...Sv(e)
  };
}
const Dv = /\s+/;
function Nv(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r
  } = t, s = /* @__PURE__ */ new Set();
  return e.trim().split(Dv).map((a) => {
    const {
      modifiers: i,
      hasImportantModifier: l,
      baseClassName: u,
      maybePostfixModifierPosition: c
    } = n(a);
    let d = o(c ? u.substring(0, c) : u), p = !!c;
    if (!d) {
      if (!c)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (d = o(u), !d)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      p = !1;
    }
    const h = $v(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? h + xp : h,
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
      hasPostfixModifier: u
    } = a, c = i + l;
    return s.has(c) ? !1 : (s.add(c), r(l, u).forEach((d) => s.add(i + d)), !0);
  }).reverse().map((a) => a.originalClassName).join(" ");
}
function Fv() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = kp(t)) && (o && (o += " "), o += n);
  return o;
}
function kp(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = kp(e[o])) && (n && (n += " "), n += t);
  return n;
}
function Pv(e, ...t) {
  let n, o, r, s = a;
  function a(l) {
    const u = t.reduce((c, d) => d(c), e());
    return n = Rv(u), o = n.cache.get, r = n.cache.set, s = i, i(l);
  }
  function i(l) {
    const u = o(l);
    if (u)
      return u;
    const c = Nv(l, n);
    return r(l, c), c;
  }
  return function() {
    return s(Fv.apply(null, arguments));
  };
}
function Pe(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const _p = /^\[(?:([a-z-]+):)?(.+)\]$/i, Mv = /^\d+\/\d+$/, Uv = /* @__PURE__ */ new Set(["px", "full", "screen"]), Lv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, jv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, zv = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Vv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function an(e) {
  return Kn(e) || Uv.has(e) || Mv.test(e);
}
function En(e) {
  return qo(e, "length", Yv);
}
function Kn(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Wr(e) {
  return qo(e, "number", Kn);
}
function Ko(e) {
  return !!e && Number.isInteger(Number(e));
}
function qv(e) {
  return e.endsWith("%") && Kn(e.slice(0, -1));
}
function me(e) {
  return _p.test(e);
}
function In(e) {
  return Lv.test(e);
}
const Wv = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Hv(e) {
  return qo(e, Wv, Cp);
}
function Jv(e) {
  return qo(e, "position", Cp);
}
const Kv = /* @__PURE__ */ new Set(["image", "url"]);
function Gv(e) {
  return qo(e, Kv, Xv);
}
function Qv(e) {
  return qo(e, "", Zv);
}
function Go() {
  return !0;
}
function qo(e, t, n) {
  const o = _p.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}
function Yv(e) {
  return jv.test(e);
}
function Cp() {
  return !1;
}
function Zv(e) {
  return zv.test(e);
}
function Xv(e) {
  return Vv.test(e);
}
function eg() {
  const e = Pe("colors"), t = Pe("spacing"), n = Pe("blur"), o = Pe("brightness"), r = Pe("borderColor"), s = Pe("borderRadius"), a = Pe("borderSpacing"), i = Pe("borderWidth"), l = Pe("contrast"), u = Pe("grayscale"), c = Pe("hueRotate"), d = Pe("invert"), p = Pe("gap"), h = Pe("gradientColorStops"), f = Pe("gradientColorStopPositions"), g = Pe("inset"), b = Pe("margin"), _ = Pe("opacity"), v = Pe("padding"), y = Pe("saturate"), x = Pe("scale"), w = Pe("sepia"), I = Pe("skew"), F = Pe("space"), A = Pe("translate"), O = () => ["auto", "contain", "none"], M = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", me, t], T = () => [me, t], W = () => ["", an, En], G = () => ["auto", Kn, me], X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ee = () => ["solid", "dashed", "dotted", "double", "none"], ie = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], ge = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Ue = () => ["", "0", me], mt = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], bt = () => [Kn, Wr], Zt = () => [Kn, me];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Go],
      spacing: [an, En],
      blur: ["none", "", In, me],
      brightness: bt(),
      borderColor: [e],
      borderRadius: ["none", "", "full", In, me],
      borderSpacing: T(),
      borderWidth: W(),
      contrast: bt(),
      grayscale: Ue(),
      hueRotate: Zt(),
      invert: Ue(),
      gap: T(),
      gradientColorStops: [e],
      gradientColorStopPositions: [qv, En],
      inset: P(),
      margin: P(),
      opacity: bt(),
      padding: T(),
      saturate: bt(),
      scale: bt(),
      sepia: Ue(),
      skew: Zt(),
      space: T(),
      translate: T()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", me]
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
        columns: [In]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": mt()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": mt()
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
        object: [...X(), me]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: M()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": M()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": M()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: O()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": O()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": O()
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
        z: ["auto", Ko, me]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: P()
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
        flex: ["1", "auto", "initial", "none", me]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Ue()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Ue()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ko, me]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Go]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ko, me]
        }, me]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": G()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": G()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Go]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ko, me]
        }, me]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": G()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": G()
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
        "auto-cols": ["auto", "min", "max", "fr", me]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", me]
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
        justify: ["normal", ...ge()]
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
        content: ["normal", ...ge(), "baseline"]
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
        "place-content": [...ge(), "baseline"]
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
        p: [v]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [F]
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
        "space-y": [F]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", me, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [me, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [me, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [In]
        }, In]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [me, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [me, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [me, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [me, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", In, En]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Wr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Go]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", me]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Kn, Wr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", an, me]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", me]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", me]
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
        decoration: [...ee(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", an, En]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", an, me]
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
        indent: T()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", me]
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
        content: ["none", me]
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
        bg: [...X(), Jv]
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
        bg: ["auto", "cover", "contain", Hv]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Gv]
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
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
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
        border: [...ee(), "hidden"]
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
        divide: ee()
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
        outline: ["", ...ee()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [an, me]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [an, En]
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
        ring: W()
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
        "ring-offset": [an, En]
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
        shadow: ["", "inner", "none", In, Qv]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Go]
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
        "mix-blend": ie()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ie()
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
        "drop-shadow": ["", "none", In, me]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [c]
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
        saturate: [y]
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
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
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
        "backdrop-saturate": [y]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", me]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Zt()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", me]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Zt()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", me]
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
        scale: [x]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [x]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [x]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ko, me]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", me]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", me]
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
        "scroll-m": T()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": T()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": T()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": T()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": T()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": T()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": T()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": T()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": T()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": T()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": T()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": T()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": T()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": T()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": T()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": T()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": T()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": T()
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
        "will-change": ["auto", "scroll", "contents", "transform", me]
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
        stroke: [an, En, Wr]
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
const tg = /* @__PURE__ */ Pv(eg);
function Fe(...e) {
  return tg(Cv(e));
}
function ng(e) {
  return e.startsWith("+") && (e = e.substring(1)), e.startsWith("0") && (e = "254" + e.substring(1)), e.match(/^(7|1)/) && (e = "254" + e), e;
}
function og(e) {
  const t = e.slice(-1), n = e.slice(0, -1);
  return t === "G" ? n + " GB" : t === "M" ? n + " MB" : n + " KB";
}
const wt = /* @__PURE__ */ Z({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), ue("div", {
      class: qe(m(Fe)("flex flex-col space-y-2 text-center sm:text-left", t.class))
    }, [
      oe(n.$slots, "default")
    ], 2));
  }
}), xt = /* @__PURE__ */ Z({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), re(m(X0), be(t, {
      class: m(Fe)(
        "text-lg text-foreground font-semibold leading-none tracking-tight",
        t.class
      )
    }), {
      default: E(() => [
        oe(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kt = /* @__PURE__ */ Z({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), re(m(ev), be(t, {
      class: m(Fe)("text-muted-foreground text-sm", t.class)
    }), {
      default: E(() => [
        oe(n.$slots, "default")
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
var Hr = {
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
const rg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), sg = (e, t) => ({ size: n, strokeWidth: o = 2, absoluteStrokeWidth: r, color: s, class: a, ...i }, { attrs: l, slots: u }) => At(
  "svg",
  {
    ...Hr,
    width: n || Hr.width,
    height: n || Hr.height,
    stroke: s || Hr.stroke,
    "stroke-width": r ? Number(o) * 24 / Number(n) : o,
    ...l,
    class: ["lucide", `lucide-${rg(e)}`],
    ...i
  },
  [
    ...t.map((c) => At(...c)),
    ...u.default ? [u.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ag = sg("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), ig = /* @__PURE__ */ V("span", { class: "sr-only" }, "Close", -1), ua = /* @__PURE__ */ Z({
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
    const n = e, r = _r(t);
    function s(l) {
      l.stopPropagation(), l.preventDefault();
    }
    function a(l) {
      l.stopPropagation(), l.preventDefault();
    }
    function i(l) {
      l.stopPropagation(), l.preventDefault();
    }
    return (l, u) => (N(), re(m(T0), null, {
      default: E(() => [
        B(m(Y0), {
          class: "fixed inset-0 z-50 grid place-items-end overflow-y-auto bg-[radial-gradient(circle_at_50%_100%,rgba(0,0,0,0.5)_40%,rgba(0,0,0,0.7))] p-3 backdrop-blur sm:place-items-center sm:bg-[radial-gradient(rgba(0,0,0,0.5)_40%,rgba(0,0,0,0.7))] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          style: { opacity: "1", "--visual-viewport-height": "924px", "--black-05": "black" }
        }),
        B(m(G0), be({
          class: m(Fe)(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
            n.class
          )
        }, { ...n, ...m(r) }, {
          onPointerDownOutside: s,
          onFocusOutside: a,
          onInteractOutside: i
        }), {
          default: E(() => [
            oe(l.$slots, "default"),
            B(m(Z0), {
              class: "text-primary hover:bg-primary:20 focus:shadow-secondary absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none",
              "aria-label": "Close"
            }, {
              default: E(() => [
                ig,
                B(m(ag), { class: "w-4 h-4 text-primary" })
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
}), ln = /* @__PURE__ */ Z({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), ue("div", {
      class: qe(
        m(Fe)(
          "flex flex-col space-y-2 sm:space-y-0 mt-1.5 sm:flex-row sm:justify-end sm:space-x-2",
          t.class
        )
      )
    }, [
      oe(n.$slots, "default")
    ], 2));
  }
}), lg = {
  key: 0,
  class: "absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-secondary text-10px font-medium py-1 px-3 rounded-full"
}, ug = { class: "flex justify-between items-center" }, cg = { class: "w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-md" }, dg = { class: "text-xs font-medium text-primary border border-border bg-accent rounded-full py-0.5 px-3" }, pg = { class: "flex flex-col items-start mt-2" }, fg = { class: "font-semibold text-xs mb-1" }, hg = { class: "text-xs text-muted-foreground" }, mg = { class: "flex flex-col items-start gap-1 mt-1" }, vg = { class: "text-sm ml-1 font-normal text-muted-foreground" }, gg = /* @__PURE__ */ V("div", { class: "i-solar-arrow-right-linear" }, null, -1), yg = /* @__PURE__ */ Z({
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
    const t = e, n = j(!1);
    function o(l) {
      const u = l.target;
      setTimeout(() => {
        u.blur(), document.activeElement.blur();
        const c = document.getElementById("phone");
        c && (c.addEventListener("focusin", (d) => {
          const p = d.target;
          document.activeElement !== p && p.focus();
        }, !0), c.focus(), c.click(), c.scrollIntoView({ behavior: "smooth", block: "center" })), t.onSelect && t.onSelect();
      }, 200);
    }
    function r(l) {
      t.handleDialogClose && t.handleDialogClose(l);
    }
    const s = ae(() => {
      switch (t.type) {
        case "AD":
          return "i-material-symbols-movie-info-outline-rounded";
        case "FREE":
          return "i-solar-gift-linear";
        default:
          return "i-solar-global-linear";
      }
    }), a = ae(() => t.name || `${t.quota} - ${t.duration}`), i = ae(() => {
      switch (t.type) {
        case "AD":
          return "Watch Ad";
        case "FREE":
          return "Connect";
        default:
          return "Buy Now";
      }
    });
    return (l, u) => (N(), ue("div", {
      class: qe(["relative flex flex-col justify-between bg-background rounded-xl p-4 border border-border transition-all duration-300 mt-2 hover:shadow-md hover:border-primary/20", {
        "ring-2 ring-primary/30 border-primary/20": l.isFeatured,
        "transform hover:-translate-y-1": !n.value
      }]),
      onMouseenter: u[0] || (u[0] = (c) => n.value = !0),
      onMouseleave: u[1] || (u[1] = (c) => n.value = !1)
    }, [
      l.isBestValue ? (N(), ue("div", lg, " Best Value ")) : Xe("", !0),
      V("div", ug, [
        V("div", cg, [
          V("div", {
            class: qe(s.value)
          }, null, 2)
        ]),
        V("div", dg, Re(l.quota), 1)
      ]),
      V("div", pg, [
        V("div", fg, Re(a.value), 1),
        V("div", hg, Re(l.duration) + " • " + Re(l.devices) + " device(s) ", 1)
      ]),
      V("div", mg, [
        V("div", {
          class: qe(["text-xl font-bold flex items-center", { "text-primary": l.isFeatured }])
        }, [
          l.type === "FREE" ? (N(), ue(Oe, { key: 0 }, [
            le(" Free ")
          ], 64)) : (N(), ue(Oe, { key: 1 }, [
            le(Re(l.price) + " ", 1),
            V("span", vg, Re(l.currency), 1)
          ], 64))
        ], 2),
        B(m(yp), { "onUpdate:open": r }, {
          default: E(() => [
            B(m(_v), { "as-child": "" }, {
              default: E(() => [
                V("button", {
                  id: "dialog-trigger-button",
                  class: "bg-primary/90 w-full text-primary-foreground px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:bg-primary flex items-center justify-center gap-2",
                  onClick: o
                }, [
                  le(Re(i.value) + " ", 1),
                  gg
                ])
              ]),
              _: 1
            }),
            oe(l.$slots, "default")
          ]),
          _: 3
        })
      ])
    ], 34));
  }
}), bg = ["src"], wg = {
  key: 0,
  class: "absolute bottom-0 left-0 w-full h-30",
  style: { background: "linear-gradient(to top, black, rgba(0, 0, 0, 1))" }
}, xg = { class: "absolute top-10px left-10px w-12 h-12" }, kg = {
  class: "w-full h-full",
  style: { transform: "rotate(-90deg)" }
}, _g = /* @__PURE__ */ V("circle", {
  class: "text-gray-600/40",
  "stroke-width": "4",
  stroke: "currentColor",
  fill: "transparent",
  r: "20",
  cx: "24",
  cy: "24"
}, null, -1), Cg = ["stroke-dashoffset"], Sg = {
  class: "absolute inset-0 flex items-center justify-center text-white font-bold text-xs",
  style: { transform: "rotate(0deg)" }
}, Ag = /* @__PURE__ */ V("svg", {
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ V("path", { d: "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" })
], -1), Eg = [
  Ag
], Ig = /* @__PURE__ */ Z({
  __name: "VideoPlayer",
  props: /* @__PURE__ */ Fc({
    videoUrl: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Dc(e, "modelValue"), n = 2 * Math.PI * 20, o = j(0), r = j(0), s = j(0), a = j(!1), i = j(!1), l = ae(() => n * (1 - o.value / 100)), u = ae(() => {
      const f = Math.floor(s.value / 60), g = Math.floor(s.value % 60);
      return `${f}:${g.toString().padStart(2, "0")}`;
    });
    function c(f) {
      f.data.property === "duration" && (r.value = f.data.value, s.value = r.value), f.data.property === "currentTime" && (o.value = f.data.value / r.value * 100, s.value = r.value - f.data.value), f.data.property === "ended" && f.data.value === !0 && (t.value = !1, a.value = !1), f.data.property === "paused" && (a.value = !f.data.value), f.data.__privateUnstableMessageType === "iframeReady" && (i.value = !0), f.data.property === "play" && (window.cloudflareVideoController.hideControls(), a.value = f.data.value);
    }
    function d() {
      return window.cloudflareVideoController?.muted;
    }
    function p() {
      window.cloudflareVideoController.unmute();
    }
    class h {
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
      postMessage(g, b) {
        window.parent.postMessage({ property: g, value: b }, "*");
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
    return tt(() => {
      if (window.addEventListener("message", c), window.Stream)
        window.cloudflareVideoController = new h();
      else {
        const f = document.createElement("script");
        f.src = "https://embed.cloudflarestream.com/embed/sdk.latest.js", f.async = !0, f.defer = !0, f.onload = () => {
          window.cloudflareVideoController = new h();
        }, document.head.appendChild(f);
      }
    }), qt(() => {
      window.removeEventListener("message", c);
    }), (f, g) => (N(), ue("div", {
      class: "relative",
      style: on([{ "padding-top": "56.25%" }, {
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
      }, null, 8, bg),
      i.value && !a.value ? (N(), ue("div", wg)) : Xe("", !0),
      V("div", xg, [
        (N(), ue("svg", kg, [
          _g,
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
        V("div", Sg, Re(u.value), 1)
      ]),
      a.value && d() ? (N(), ue("button", {
        key: 1,
        class: "absolute bottom-150px right-10px bg-black/50 rounded-full p-2 hover:bg-black/70 transition-all focus:outline-none",
        onClick: g[0] || (g[0] = () => p())
      }, Eg)) : Xe("", !0)
    ]));
  }
});
function rl(e) {
  return e ? e.flatMap((t) => t.type === Oe ? rl(t.children) : [t]) : [];
}
const Tg = /* @__PURE__ */ Z({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      if (!n.default)
        return null;
      const o = rl(n.default()), r = o.findIndex((l) => l.type !== st);
      if (r === -1)
        return o;
      const s = o[r];
      delete s.props?.ref;
      const a = s.props ? be(t, s.props) : t;
      t.class && s.props?.class && delete s.props.class;
      const i = Vt(s, a);
      for (const l in a)
        l.startsWith("on") && (i.props ||= {}, i.props[l] = a[l]);
      return o.length === 1 ? i : (o[r] = i, o);
    };
  }
}), Og = ["area", "img", "input"], bo = /* @__PURE__ */ Z({
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
    return typeof o == "string" && Og.includes(o) ? () => At(o, t) : o !== "template" ? () => At(e.as, t, { default: n.default }) : () => At(Tg, t, { default: n.default });
  }
});
function Sp(e) {
  return As() ? (si(e), !0) : !1;
}
function Bg(e) {
  let t = !1, n;
  const o = vr(!0);
  return (...r) => (t || (n = o.run(() => e(...r)), t = !0), n);
}
function $g(e) {
  let t = 0, n, o;
  const r = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...s) => (t += 1, o || (o = vr(!0), n = o.run(() => e(...s))), Sp(r), n);
}
const wo = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Rg = (e) => typeof e < "u", Dg = Object.prototype.toString, Ng = (e) => Dg.call(e) === "[object Object]", Au = /* @__PURE__ */ Fg();
function Fg() {
  var e, t;
  return wo && ((e = window?.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window?.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function Pg(e) {
  return e || Me();
}
function ca(e) {
  return Array.isArray(e) ? e : [e];
}
function Mg(e, t) {
  Pg(t) && go(e, t);
}
function Ug(e, t, n) {
  return Ee(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const sl = wo ? window : void 0;
function zs(e) {
  var t;
  const n = $o(e);
  return (t = n?.$el) != null ? t : n;
}
function Ap(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, o = (i, l, u, c) => (i.addEventListener(l, u, c), () => i.removeEventListener(l, u, c)), r = ae(() => {
    const i = ca($o(e[0])).filter((l) => l != null);
    return i.every((l) => typeof l != "string") ? i : void 0;
  }), s = Ug(
    () => {
      var i, l;
      return [
        (l = (i = r.value) == null ? void 0 : i.map((u) => zs(u))) != null ? l : [sl].filter((u) => u != null),
        ca($o(r.value ? e[1] : e[0])),
        ca(m(r.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        $o(r.value ? e[3] : e[2])
      ];
    },
    ([i, l, u, c]) => {
      if (n(), !i?.length || !l?.length || !u?.length)
        return;
      const d = Ng(c) ? { ...c } : c;
      t.push(
        ...i.flatMap(
          (p) => l.flatMap(
            (h) => u.map((f) => o(p, h, f, d))
          )
        )
      );
    },
    { flush: "post" }
  ), a = () => {
    s(), n();
  };
  return Sp(n), a;
}
function Lg() {
  const e = nc(!1), t = Me();
  return t && tt(() => {
    e.value = !0;
  }, t), e;
}
function jg(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function zg(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: r = sl,
    eventName: s = "keydown",
    passive: a = !1,
    dedupe: i = !1
  } = o, l = jg(t);
  return Ap(r, s, (c) => {
    c.repeat && $o(i) || l(c) && n(c);
  }, a);
}
function Vg(e) {
  return JSON.parse(JSON.stringify(e));
}
function qg(e, t, n, o = {}) {
  var r, s, a;
  const {
    clone: i = !1,
    passive: l = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: d,
    shouldEmit: p
  } = o, h = Me(), f = n || h?.emit || ((r = h?.$emit) == null ? void 0 : r.bind(h)) || ((a = (s = h?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : a.bind(h?.proxy));
  let g = u;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (y) => i ? typeof i == "function" ? i(y) : Vg(y) : y, _ = () => Rg(e[t]) ? b(e[t]) : d, v = (y) => {
    p ? p(y) && f(g, y) : f(g, y);
  };
  if (l) {
    const y = _(), x = j(y);
    let w = !1;
    return Ee(
      () => e[t],
      (I) => {
        w || (w = !0, x.value = b(I), Qe(() => w = !1));
      }
    ), Ee(
      x,
      (I) => {
        !w && (I !== e[t] || c) && v(I);
      },
      { deep: c }
    ), x;
  } else
    return ae({
      get() {
        return _();
      },
      set(y) {
        v(y);
      }
    });
}
function al(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(a) => {
    const i = eo(o, a);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (Fs(o, a), a)];
}
const [Ep, Aw] = al("ConfigProvider");
function Yt() {
  const e = Me(), t = j(), n = ae(() => ["#text", "#comment"].includes(t.value?.$el.nodeName) ? t.value?.$el.nextElementSibling : zs(t)), o = Object.assign({}, e.exposed), r = {};
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
    t.value = a, a && (Object.defineProperty(r, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => a instanceof Element ? a : a.$el
    }), e.exposed = r);
  }
  return { forwardRef: s, currentRef: t, currentElement: n };
}
let Wg = 0;
function Ya(e, t = "reka") {
  if (e)
    return e;
  const n = Ep({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++Wg}`;
}
function Hg(e, t) {
  const n = j(e);
  function o(s) {
    return t[n.value][s] ?? n.value;
  }
  return {
    state: n,
    dispatch: (s) => {
      n.value = o(s);
    }
  };
}
function Jg(e, t) {
  const n = j({}), o = j("none"), r = j(e), s = e.value ? "mounted" : "unmounted";
  let a;
  const i = t.value?.ownerDocument.defaultView ?? sl, { state: l, dispatch: u } = Hg(s, {
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
  }), c = (b) => {
    if (wo) {
      const _ = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      t.value?.dispatchEvent(_);
    }
  };
  Ee(
    e,
    async (b, _) => {
      const v = _ !== b;
      if (await Qe(), v) {
        const y = o.value, x = Jr(t.value);
        b ? (u("MOUNT"), c("enter"), x === "none" && c("after-enter")) : x === "none" || x === "undefined" || n.value?.display === "none" ? (u("UNMOUNT"), c("leave"), c("after-leave")) : _ && y !== x ? (u("ANIMATION_OUT"), c("leave")) : (u("UNMOUNT"), c("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (b) => {
    const _ = Jr(t.value), v = _.includes(
      b.animationName
    ), y = l.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && v && (c(`after-${y}`), u("ANIMATION_END"), !r.value)) {
      const x = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", a = i?.setTimeout(() => {
        t.value?.style.animationFillMode === "forwards" && (t.value.style.animationFillMode = x);
      });
    }
    b.target === t.value && _ === "none" && u("ANIMATION_END");
  }, p = (b) => {
    b.target === t.value && (o.value = Jr(t.value));
  }, h = Ee(
    t,
    (b, _) => {
      b ? (n.value = getComputedStyle(b), b.addEventListener("animationstart", p), b.addEventListener("animationcancel", d), b.addEventListener("animationend", d)) : (u("ANIMATION_END"), a !== void 0 && i?.clearTimeout(a), _?.removeEventListener("animationstart", p), _?.removeEventListener("animationcancel", d), _?.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), f = Ee(l, () => {
    const b = Jr(t.value);
    o.value = l.value === "mounted" ? b : "none";
  });
  return qt(() => {
    h(), f();
  }), {
    isPresent: ae(
      () => ["mounted", "unmountSuspended"].includes(l.value)
    )
  };
}
function Jr(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Ip = /* @__PURE__ */ Z({
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
    const { present: o, forceMount: r } = Qt(e), s = j(), { isPresent: a } = Jg(o, s);
    n({ present: a });
    let i = t.default({ present: a.value });
    i = rl(i || []);
    const l = Me();
    if (i && i?.length > 1) {
      const u = l?.parent?.type.name ? `<${l.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${u}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((c) => `  - ${c}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => r.value || o.value || a.value ? At(t.default({ present: a.value })[0], {
      ref: (u) => {
        const c = zs(u);
        return typeof c?.hasAttribute > "u" || (c?.hasAttribute("data-reka-popper-content-wrapper") ? s.value = c.firstElementChild : s.value = c), c;
      }
    }) : null;
  }
}), [bn, Kg] = al("DialogRoot"), Gg = /* @__PURE__ */ Z({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = qg(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = j(), a = j(), { modal: i } = Qt(n);
    return Kg({
      open: r,
      modal: i,
      openModal: () => {
        r.value = !0;
      },
      onOpenChange: (l) => {
        r.value = l;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: s,
      contentElement: a
    }), (l, u) => oe(l.$slots, "default", { open: m(r) });
  }
}), Qg = /* @__PURE__ */ Z({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    Yt();
    const n = bn();
    return (o, r) => (N(), re(m(bo), be(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: r[0] || (r[0] = (s) => m(n).onOpenChange(!1))
    }), {
      default: E(() => [
        oe(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
function Vs(e) {
  const t = Me(), n = t?.type.emits, o = {};
  return n?.length || console.warn(
    `No emitted event found. Please check component: ${t?.type.__name}`
  ), n?.forEach((r) => {
    o[Nn(Ne(r))] = (...s) => e(r, ...s);
  }), o;
}
function Tp(e, t, n) {
  const o = n.originalEvent.target, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
const Yg = "dismissableLayer.pointerDownOutside", Zg = "dismissableLayer.focusOutside";
function Op(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), r = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && (o === n || r.indexOf(o) < r.indexOf(n)));
}
function Xg(e, t) {
  const n = t?.value?.ownerDocument ?? globalThis?.document, o = j(!1), r = j(() => {
  });
  return it((s) => {
    if (!wo)
      return;
    const a = async (l) => {
      const u = l.target;
      if (!(!t?.value || !u)) {
        if (Op(t.value, u)) {
          o.value = !1;
          return;
        }
        if (l.target && !o.value) {
          let c = function() {
            Tp(
              Yg,
              e,
              d
            );
          };
          const d = { originalEvent: l };
          l.pointerType === "touch" ? (n.removeEventListener("click", r.value), r.value = c, n.addEventListener("click", r.value, {
            once: !0
          })) : c();
        } else
          n.removeEventListener("click", r.value);
        o.value = !1;
      }
    }, i = window.setTimeout(() => {
      n.addEventListener("pointerdown", a);
    }, 0);
    s(() => {
      window.clearTimeout(i), n.removeEventListener("pointerdown", a), n.removeEventListener("click", r.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function e1(e, t) {
  const n = t?.value?.ownerDocument ?? globalThis?.document, o = j(!1);
  return it((r) => {
    if (!wo)
      return;
    const s = async (a) => {
      if (!t?.value)
        return;
      await Qe(), await Qe();
      const i = a.target;
      !t.value || !i || Op(t.value, i) || a.target && !o.value && Tp(
        Zg,
        e,
        { originalEvent: a }
      );
    };
    n.addEventListener("focusin", s), r(() => n.removeEventListener("focusin", s));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const un = nn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), t1 = /* @__PURE__ */ Z({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: s } = Yt(), a = ae(
      () => s.value?.ownerDocument ?? globalThis.document
    ), i = ae(() => un.layersRoot), l = ae(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), u = ae(() => un.layersWithOutsidePointerEventsDisabled.size > 0), c = ae(() => {
      const f = Array.from(i.value), [g] = [...un.layersWithOutsidePointerEventsDisabled].slice(-1), b = f.indexOf(g);
      return l.value >= b;
    }), d = Xg(async (f) => {
      const g = [...un.branches].some(
        (b) => b?.contains(f.target)
      );
      !c.value || g || (o("pointerDownOutside", f), o("interactOutside", f), await Qe(), f.defaultPrevented || o("dismiss"));
    }, s), p = e1((f) => {
      [...un.branches].some(
        (b) => b?.contains(f.target)
      ) || (o("focusOutside", f), o("interactOutside", f), f.defaultPrevented || o("dismiss"));
    }, s);
    zg("Escape", (f) => {
      l.value === i.value.size - 1 && (o("escapeKeyDown", f), f.defaultPrevented || o("dismiss"));
    });
    let h;
    return it((f) => {
      s.value && (n.disableOutsidePointerEvents && (un.layersWithOutsidePointerEventsDisabled.size === 0 && (h = a.value.body.style.pointerEvents, a.value.body.style.pointerEvents = "none"), un.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), f(() => {
        n.disableOutsidePointerEvents && un.layersWithOutsidePointerEventsDisabled.size === 1 && (a.value.body.style.pointerEvents = h);
      }));
    }), it((f) => {
      f(() => {
        s.value && (i.value.delete(s.value), un.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (f, g) => (N(), re(m(bo), {
      ref: m(r),
      "as-child": f.asChild,
      as: f.as,
      "data-dismissable-layer": "",
      style: on({
        pointerEvents: u.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: m(p).onFocusCapture,
      onBlurCapture: m(p).onBlurCapture,
      onPointerdownCapture: m(d).onPointerDownCapture
    }, {
      default: E(() => [
        oe(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
function Mn() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
function n1(e) {
  return e ? "open" : "closed";
}
const o1 = "DialogTitle", r1 = "DialogContent";
function s1({
  titleName: e = o1,
  contentName: t = r1,
  componentLink: n = "dialog.html#title",
  titleId: o,
  descriptionId: r,
  contentElement: s
}) {
  const a = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  tt(() => {
    document.getElementById(o) || console.warn(a);
    const u = s.value?.getAttribute("aria-describedby");
    r && u && (document.getElementById(r) || console.warn(i));
  });
}
const a1 = Bg(() => j([]));
function i1() {
  const e = a1();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && n?.pause(), e.value = Eu(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      e.value = Eu(e.value, t), e.value[0]?.resume();
    }
  };
}
function Eu(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function l1(e) {
  return e.filter((t) => t.tagName !== "A");
}
const da = "focusScope.autoFocusOnMount", pa = "focusScope.autoFocusOnUnmount", Iu = { bubbles: !1, cancelable: !0 };
function u1(e, { select: t = !1 } = {}) {
  const n = Mn();
  for (const o of e)
    if (Bn(o, { select: t }), Mn() !== n)
      return !0;
}
function c1(e) {
  const t = Bp(e), n = Tu(t, e), o = Tu(t.reverse(), e);
  return [n, o];
}
function Bp(e) {
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
function Tu(e, t) {
  for (const n of e)
    if (!d1(n, { upTo: t }))
      return n;
}
function d1(e, { upTo: t }) {
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
function p1(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Bn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Mn();
    e.focus({ preventScroll: !0 }), e !== n && p1(e) && t && e.select();
  }
}
const f1 = /* @__PURE__ */ Z({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: r, currentElement: s } = Yt(), a = j(null), i = i1(), l = nn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    it((c) => {
      if (!wo)
        return;
      const d = s.value;
      if (!n.trapped)
        return;
      function p(b) {
        if (l.paused || !d)
          return;
        const _ = b.target;
        d.contains(_) ? a.value = _ : Bn(a.value, { select: !0 });
      }
      function h(b) {
        if (l.paused || !d)
          return;
        const _ = b.relatedTarget;
        _ !== null && (d.contains(_) || Bn(a.value, { select: !0 }));
      }
      function f(b) {
        d.contains(a.value) || Bn(d);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", h);
      const g = new MutationObserver(f);
      d && g.observe(d, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", h), g.disconnect();
      });
    }), it(async (c) => {
      const d = s.value;
      if (await Qe(), !d)
        return;
      i.add(l);
      const p = Mn();
      if (!d.contains(p)) {
        const f = new CustomEvent(da, Iu);
        d.addEventListener(da, (g) => o("mountAutoFocus", g)), d.dispatchEvent(f), f.defaultPrevented || (u1(l1(Bp(d)), {
          select: !0
        }), Mn() === p && Bn(d));
      }
      c(() => {
        d.removeEventListener(da, (b) => o("mountAutoFocus", b));
        const f = new CustomEvent(pa, Iu), g = (b) => {
          o("unmountAutoFocus", b);
        };
        d.addEventListener(pa, g), d.dispatchEvent(f), setTimeout(() => {
          f.defaultPrevented || Bn(p ?? document.body, { select: !0 }), d.removeEventListener(pa, g), i.remove(l);
        }, 0);
      });
    });
    function u(c) {
      if (!n.loop && !n.trapped || l.paused)
        return;
      const d = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, p = Mn();
      if (d && p) {
        const h = c.currentTarget, [f, g] = c1(h);
        f && g ? !c.shiftKey && p === g ? (c.preventDefault(), n.loop && Bn(f, { select: !0 })) : c.shiftKey && p === f && (c.preventDefault(), n.loop && Bn(g, { select: !0 })) : p === h && c.preventDefault();
      }
    }
    return (c, d) => (N(), re(m(bo), {
      ref_key: "currentRef",
      ref: r,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: u
    }, {
      default: E(() => [
        oe(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var h1 = {};
const $p = /* @__PURE__ */ Z({
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
    const n = e, o = t, r = bn(), { forwardRef: s, currentElement: a } = Yt();
    return r.titleId ||= Ya(void 0, "reka-dialog-title"), r.descriptionId ||= Ya(void 0, "reka-dialog-description"), tt(() => {
      r.contentElement = a, Mn() !== document.body && (r.triggerElement.value = Mn());
    }), h1.NODE_ENV !== "production" && s1({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: r.titleId,
      descriptionId: r.descriptionId,
      contentElement: a
    }), (i, l) => (N(), re(m(f1), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: l[5] || (l[5] = (u) => o("openAutoFocus", u)),
      onUnmountAutoFocus: l[6] || (l[6] = (u) => o("closeAutoFocus", u))
    }, {
      default: E(() => [
        B(m(t1), be({
          id: m(r).contentId,
          ref: m(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": m(r).descriptionId,
          "aria-labelledby": m(r).titleId,
          "data-state": m(n1)(m(r).open.value)
        }, i.$attrs, {
          onDismiss: l[0] || (l[0] = (u) => m(r).onOpenChange(!1)),
          onEscapeKeyDown: l[1] || (l[1] = (u) => o("escapeKeyDown", u)),
          onFocusOutside: l[2] || (l[2] = (u) => o("focusOutside", u)),
          onInteractOutside: l[3] || (l[3] = (u) => o("interactOutside", u)),
          onPointerDownOutside: l[4] || (l[4] = (u) => o("pointerDownOutside", u))
        }), {
          default: E(() => [
            oe(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var m1 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, So = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), Gr = {}, fa = 0, Rp = function(e) {
  return e && (e.host || Rp(e.parentNode));
}, v1 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Rp(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, g1 = function(e, t, n, o) {
  var r = v1(t, Array.isArray(e) ? e : [e]);
  Gr[n] || (Gr[n] = /* @__PURE__ */ new WeakMap());
  var s = Gr[n], a = [], i = /* @__PURE__ */ new Set(), l = new Set(r), u = function(d) {
    !d || i.has(d) || (i.add(d), u(d.parentNode));
  };
  r.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (i.has(p))
        c(p);
      else
        try {
          var h = p.getAttribute(o), f = h !== null && h !== "false", g = (So.get(p) || 0) + 1, b = (s.get(p) || 0) + 1;
          So.set(p, g), s.set(p, b), a.push(p), g === 1 && f && Kr.set(p, !0), b === 1 && p.setAttribute(n, "true"), f || p.setAttribute(o, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", p, _);
        }
    });
  };
  return c(t), i.clear(), fa++, function() {
    a.forEach(function(d) {
      var p = So.get(d) - 1, h = s.get(d) - 1;
      So.set(d, p), s.set(d, h), p || (Kr.has(d) || d.removeAttribute(o), Kr.delete(d)), h || d.removeAttribute(n);
    }), fa--, fa || (So = /* @__PURE__ */ new WeakMap(), So = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), Gr = {});
  };
}, y1 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = t || m1(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), g1(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
function b1(e) {
  let t;
  Ee(() => zs(e), (n) => {
    n ? t = y1(n) : t && t();
  }), qt(() => {
    t && t();
  });
}
const w1 = /* @__PURE__ */ Z({
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
    const n = e, o = t, r = bn(), s = Vs(o), { forwardRef: a, currentElement: i } = Yt();
    return b1(i), (l, u) => (N(), re($p, be({ ...n, ...m(s) }, {
      ref: m(a),
      "trap-focus": m(r).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        c.defaultPrevented || (c.preventDefault(), m(r).triggerElement.value?.focus());
      }),
      onPointerDownOutside: u[1] || (u[1] = (c) => {
        const d = c.detail.originalEvent, p = d.button === 0 && d.ctrlKey === !0;
        (d.button === 2 || p) && c.preventDefault();
      }),
      onFocusOutside: u[2] || (u[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: E(() => [
        oe(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), x1 = /* @__PURE__ */ Z({
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
    const n = e, r = Vs(t);
    Yt();
    const s = bn(), a = j(!1), i = j(!1);
    return (l, u) => (N(), re($p, be({ ...n, ...m(r) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        c.defaultPrevented || (a.value || m(s).triggerElement.value?.focus(), c.preventDefault()), a.value = !1, i.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (c) => {
        c.defaultPrevented || (a.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const d = c.target;
        m(s).triggerElement.value?.contains(d) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: E(() => [
        oe(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), k1 = /* @__PURE__ */ Z({
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
    const n = e, o = t, r = bn(), s = Vs(o), { forwardRef: a } = Yt();
    return (i, l) => (N(), re(m(Ip), {
      present: i.forceMount || m(r).open.value
    }, {
      default: E(() => [
        m(r).modal.value ? (N(), re(w1, be({
          key: 0,
          ref: m(a)
        }, { ...n, ...m(s), ...i.$attrs }), {
          default: E(() => [
            oe(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (N(), re(x1, be({
          key: 1,
          ref: m(a)
        }, { ...n, ...m(s), ...i.$attrs }), {
          default: E(() => [
            oe(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function ha(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Za(e, t, n = ".", o) {
  if (!ha(t))
    return Za(e, {}, n, o);
  const r = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const a = e[s];
    a != null && (o && o(r, s, a, n) || (Array.isArray(a) && Array.isArray(r[s]) ? r[s] = [...a, ...r[s]] : ha(a) && ha(r[s]) ? r[s] = Za(
      a,
      r[s],
      (n ? `${n}.` : "") + s.toString(),
      o
    ) : r[s] = a));
  }
  return r;
}
function _1(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Za(n, o, "", e), {})
  );
}
const C1 = _1(), S1 = $g(() => {
  const e = j(/* @__PURE__ */ new Map()), t = j(), n = ae(() => {
    for (const a of e.value.values())
      if (a)
        return !0;
    return !1;
  }), o = Ep({
    scrollBody: j(!0)
  });
  let r = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Au && r?.(), t.value = void 0;
  };
  return Ee(n, (a, i) => {
    if (!wo)
      return;
    if (!a) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const l = window.innerWidth - document.documentElement.clientWidth, u = { padding: l, margin: 0 }, c = o.scrollBody?.value ? typeof o.scrollBody.value == "object" ? C1({
      padding: o.scrollBody.value.padding === !0 ? l : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? l : o.scrollBody.value.margin
    }, u) : u : { padding: 0, margin: 0 };
    l > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.body.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), Au && (r = Ap(
      document,
      "touchmove",
      (d) => E1(d),
      { passive: !1 }
    )), Qe(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function A1(e) {
  const t = Math.random().toString(36).substring(2, 7), n = S1();
  n.value.set(t, e ?? !1);
  const o = ae({
    get: () => n.value.get(t) ?? !1,
    set: (r) => n.value.set(t, r)
  });
  return Mg(() => {
    n.value.delete(t);
  }), o;
}
function Dp(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Dp(n);
  }
}
function E1(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Dp(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const I1 = /* @__PURE__ */ Z({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = bn();
    return A1(!0), Yt(), (n, o) => (N(), re(m(bo), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": m(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: E(() => [
        oe(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), T1 = /* @__PURE__ */ Z({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = bn(), { forwardRef: n } = Yt();
    return (o, r) => m(t)?.modal.value ? (N(), re(m(Ip), {
      key: 0,
      present: o.forceMount || m(t).open.value
    }, {
      default: E(() => [
        B(I1, be(o.$attrs, {
          ref: m(n),
          as: o.as,
          "as-child": o.asChild
        }), {
          default: E(() => [
            oe(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["present"])) : Xe("", !0);
  }
}), O1 = /* @__PURE__ */ Z({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Lg();
    return (n, o) => m(t) || n.forceMount ? (N(), re(Ci, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      oe(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : Xe("", !0);
  }
});
function B1(e) {
  const t = Me(), n = Object.keys(t?.type.props ?? {}).reduce((r, s) => {
    const a = (t?.type.props[s]).default;
    return a !== void 0 && (r[s] = a), r;
  }, {}), o = hi(e);
  return ae(() => {
    const r = {}, s = t?.vnode.props ?? {};
    return Object.keys(s).forEach((a) => {
      r[Ne(a)] = s[a];
    }), Object.keys({ ...n, ...r }).reduce((a, i) => (o.value[i] !== void 0 && (a[i] = o.value[i]), a), {});
  });
}
function Np(e, t) {
  const n = B1(e), o = t ? Vs(t) : {};
  return ae(() => ({
    ...n.value,
    ...o
  }));
}
const $1 = /* @__PURE__ */ Z({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = bn();
    return Yt(), (o, r) => (N(), re(m(bo), be(t, {
      id: m(n).titleId
    }), {
      default: E(() => [
        oe(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), R1 = /* @__PURE__ */ Z({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = bn(), { forwardRef: o, currentElement: r } = Yt();
    return n.contentId ||= Ya(void 0, "reka-dialog-content"), tt(() => {
      n.triggerElement.value = r.value;
    }), (s, a) => (N(), re(m(bo), be(t, {
      ref: m(o),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": m(n).open.value || !1,
      "aria-controls": m(n).open.value ? m(n).contentId : void 0,
      "data-state": m(n).open.value ? "open" : "closed",
      onClick: m(n).onOpenToggle
    }), {
      default: E(() => [
        oe(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), D1 = /* @__PURE__ */ Z({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), re(m(O1), mo(jn(t)), {
      default: E(() => [
        oe(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), N1 = /* @__PURE__ */ Z({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ["horizontal", "vertical"];
    function o(i) {
      return n.includes(i);
    }
    const r = ae(
      () => o(t.orientation) ? t.orientation : "horizontal"
    ), s = ae(
      () => r.value === "vertical" ? t.orientation : void 0
    ), a = ae(
      () => t.decorative ? { role: "none" } : { "aria-orientation": s.value, role: "separator" }
    );
    return (i, l) => (N(), re(m(bo), be({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": r.value
    }, a.value), {
      default: E(() => [
        oe(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), F1 = /* @__PURE__ */ Z({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), re(N1, mo(jn(t)), {
      default: E(() => [
        oe(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
(function() {
  var e;
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.nonce = (e = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : e.content, t.appendChild(document.createTextNode('[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32,.72,0,1);animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform, 100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform, 100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true]):after{content:"";position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:hover,[data-vaul-handle]:active{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover: hover) and (pointer: fine){[data-vaul-drawer]{-webkit-user-select:none;user-select:none}}@media (pointer: fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{0%{transform:translate3d(0,var(--initial-transform, 100%),0)}to{transform:translateZ(0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform, 100%),0)}}@keyframes slideFromTop{0%{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}to{transform:translateZ(0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}}@keyframes slideFromLeft{0%{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}to{transform:translateZ(0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}}@keyframes slideFromRight{0%{transform:translate3d(var(--initial-transform, 100%),0,0)}to{transform:translateZ(0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform, 100%),0,0)}}')), document.head.appendChild(t);
    }
  } catch (n) {
    console.error("vite-plugin-css-injected-by-js", n);
  }
})();
const P1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const M1 = (e) => typeof e < "u";
function U1(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ou(e, t, n, o = {}) {
  var r, s, a;
  const {
    clone: i = !1,
    passive: l = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: d,
    shouldEmit: p
  } = o, h = Me(), f = n || h?.emit || ((r = h?.$emit) == null ? void 0 : r.bind(h)) || ((a = (s = h?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : a.bind(h?.proxy));
  let g = u;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (y) => i ? typeof i == "function" ? i(y) : U1(y) : y, _ = () => M1(e[t]) ? b(e[t]) : d, v = (y) => {
    p ? p(y) && f(g, y) : f(g, y);
  };
  if (l) {
    const y = _(), x = j(y);
    let w = !1;
    return Ee(
      () => e[t],
      (I) => {
        w || (w = !0, x.value = b(I), Qe(() => w = !1));
      }
    ), Ee(
      x,
      (I) => {
        !w && (I !== e[t] || c) && v(I);
      },
      { deep: c }
    ), x;
  } else
    return ae({
      get() {
        return _();
      },
      set(y) {
        v(y);
      }
    });
}
const [il, L1] = al("DrawerRoot"), Fp = /* @__PURE__ */ new WeakMap();
function nt(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const o = {};
  Object.entries(t).forEach(([r, s]) => {
    if (r.startsWith("--")) {
      e.style.setProperty(r, s);
      return;
    }
    o[r] = e.style[r], e.style[r] = s;
  }), !n && Fp.set(e, o);
}
function j1(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const n = Fp.get(e);
  n && Object.entries(n).forEach(([o, r]) => {
    e.style[o] = r;
  });
}
function Qr(e, t) {
  const n = window.getComputedStyle(e), o = n.transform || n.webkitTransform || n.mozTransform;
  let r = o.match(/^matrix3d\((.+)\)$/);
  return r ? Number.parseFloat(r[1].split(", ")[Ke(t) ? 13 : 12]) : (r = o.match(/^matrix\((.+)\)$/), r ? Number.parseFloat(r[1].split(", ")[Ke(t) ? 5 : 4]) : null);
}
function z1(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Ke(e) {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
}
function ma(e, t) {
  if (!e)
    return () => {
    };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function V1(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const ze = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, Pp = 0.4, q1 = 0.25, W1 = 100, Mp = 8, Yr = 16, Up = 26, Bu = "vaul-dragging";
function H1({
  activeSnapPoint: e,
  snapPoints: t,
  drawerRef: n,
  overlayRef: o,
  fadeFromIndex: r,
  onSnapPointChange: s,
  direction: a
}) {
  const i = j(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  function l() {
    i.value = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  }
  tt(() => {
    typeof window < "u" && window.addEventListener("resize", l);
  }), go(() => {
    typeof window < "u" && window.removeEventListener("resize", l);
  });
  const u = ae(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), c = ae(
    () => t.value && t.value.length > 0 && (r?.value || r?.value === 0) && !Number.isNaN(r?.value) && t.value[r?.value ?? -1] === e.value || !t.value
  ), d = ae(
    () => {
      var v;
      return ((v = t.value) == null ? void 0 : v.findIndex((y) => y === e.value)) ?? null;
    }
  ), p = ae(
    () => {
      var v;
      return ((v = t.value) == null ? void 0 : v.map((y) => {
        const x = typeof y == "string";
        let w = 0;
        if (x && (w = Number.parseInt(y, 10)), Ke(a.value)) {
          const F = x ? w : i.value ? y * i.value.innerHeight : 0;
          return i.value ? a.value === "bottom" ? i.value.innerHeight - F : -i.value.innerHeight + F : F;
        }
        const I = x ? w : i.value ? y * i.value.innerWidth : 0;
        return i.value ? a.value === "right" ? i.value.innerWidth - I : -i.value.innerWidth + I : I;
      })) ?? [];
    }
  ), h = ae(
    () => {
      var v;
      return d.value !== null ? (v = p.value) == null ? void 0 : v[d.value] : null;
    }
  ), f = (v) => {
    var y, x, w, I;
    const F = ((y = p.value) == null ? void 0 : y.findIndex((A) => A === v)) ?? null;
    Qe(() => {
      var A;
      s(F, p.value), nt((A = n.value) == null ? void 0 : A.$el, {
        transition: `transform ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
        transform: Ke(a.value) ? `translate3d(0, ${v}px, 0)` : `translate3d(${v}px, 0, 0)`
      });
    }), p.value && F !== p.value.length - 1 && F !== r?.value ? nt((x = o.value) == null ? void 0 : x.$el, {
      transition: `opacity ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      opacity: "0"
    }) : nt((w = o.value) == null ? void 0 : w.$el, {
      transition: `opacity ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      opacity: "1"
    }), e.value = F !== null ? ((I = t.value) == null ? void 0 : I[F]) ?? null : null;
  };
  Ee(
    [e, p, t],
    () => {
      var v;
      if (e.value) {
        const y = ((v = t.value) == null ? void 0 : v.findIndex((x) => x === e.value)) ?? -1;
        p.value && y !== -1 && typeof p.value[y] == "number" && f(p.value[y]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function g({
    draggedDistance: v,
    closeDrawer: y,
    velocity: x,
    dismissible: w
  }) {
    var I, F, A;
    if (r.value === void 0)
      return;
    const O = a.value === "bottom" || a.value === "right" ? (h.value ?? 0) - v : (h.value ?? 0) + v, M = d.value === r.value - 1, P = d.value === 0, T = v > 0;
    if (M && nt((I = o.value) == null ? void 0 : I.$el, {
      transition: `opacity ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`
    }), x > 2 && !T) {
      w ? y() : f(p.value[0]);
      return;
    }
    if (x > 2 && T && p && t.value) {
      f(p.value[t.value.length - 1]);
      return;
    }
    const W = (F = p.value) == null ? void 0 : F.reduce((X, ee) => typeof X != "number" || typeof ee != "number" ? X : Math.abs(ee - O) < Math.abs(X - O) ? ee : X), G = Ke(a.value) ? window.innerHeight : window.innerWidth;
    if (x > Pp && Math.abs(v) < G * 0.4) {
      const X = T ? 1 : -1;
      if (X > 0 && u) {
        f(p.value[(((A = t.value) == null ? void 0 : A.length) ?? 0) - 1]);
        return;
      }
      if (P && X < 0 && w && y(), d.value === null)
        return;
      f(p.value[d.value + X]);
      return;
    }
    f(W);
  }
  function b({ draggedDistance: v }) {
    var y;
    if (h.value === null)
      return;
    const x = a.value === "bottom" || a.value === "right" ? h.value - v : h.value + v;
    (a.value === "bottom" || a.value === "right") && x < p.value[p.value.length - 1] || (a.value === "top" || a.value === "left") && x > p.value[p.value.length - 1] || nt((y = n.value) == null ? void 0 : y.$el, {
      transform: Ke(a.value) ? `translate3d(0, ${x}px, 0)` : `translate3d(${x}px, 0, 0)`
    });
  }
  function _(v, y) {
    if (!t.value || typeof d.value != "number" || !p.value || r.value === void 0)
      return null;
    const x = d.value === r.value - 1;
    if (d.value >= r.value && y)
      return 0;
    if (x && !y)
      return 1;
    if (!c.value && !x)
      return null;
    const w = x ? d.value + 1 : d.value - 1, I = x ? p.value[w] - p.value[w - 1] : p.value[w + 1] - p.value[w], F = v / Math.abs(I);
    return x ? 1 - F : F;
  }
  return {
    isLastSnapPoint: u,
    shouldFade: c,
    getPercentageDragged: _,
    activeSnapPointIndex: d,
    onRelease: g,
    onDrag: b,
    snapPointsOffset: p
  };
}
function $u() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let Qo = null;
function J1(e) {
  const { isOpen: t, modal: n, nested: o, hasBeenOpened: r, preventScrollRestoration: s, noBodyStyles: a } = e, i = j(typeof window < "u" ? window.location.href : ""), l = j(0);
  function u() {
    if ($u() && Qo === null && t.value && !a.value) {
      Qo = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height
      };
      const { scrollX: d, innerHeight: p } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-l.value}px`,
        left: `${-d}px`,
        right: "0px",
        height: "auto"
      }), setTimeout(() => {
        requestAnimationFrame(() => {
          const h = p - window.innerHeight;
          h && l.value >= p && (document.body.style.top = `-${l.value + h}px`);
        });
      }, 300);
    }
  }
  function c() {
    if ($u() && Qo !== null && !a.value) {
      const d = -Number.parseInt(document.body.style.top, 10), p = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Qo), window.requestAnimationFrame(() => {
        if (s.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(p, d);
      }), Qo = null;
    }
  }
  return tt(() => {
    function d() {
      l.value = window.scrollY;
    }
    d(), window.addEventListener("scroll", d), qt(() => {
      window.removeEventListener("scroll", d);
    });
  }), Ee([t, r, i], () => {
    o.value || !r.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || u(), n.value || setTimeout(() => {
      c();
    }, 500)) : c());
  }), { restorePositionSetting: c };
}
function K1(e, t) {
  return e && e.value ? e : t;
}
function G1(e) {
  const {
    emitDrag: t,
    emitRelease: n,
    emitClose: o,
    emitOpenChange: r,
    open: s,
    dismissible: a,
    nested: i,
    modal: l,
    shouldScaleBackground: u,
    setBackgroundColorOnScale: c,
    scrollLockTimeout: d,
    closeThreshold: p,
    activeSnapPoint: h,
    fadeFromIndex: f,
    direction: g,
    noBodyStyles: b,
    handleOnly: _,
    preventScrollRestoration: v
  } = e, y = j(s.value ?? !1), x = j(!1), w = j(!1), I = j(!1), F = j(null), A = j(null), O = j(null), M = j(null), P = j(null), T = j(!1), W = j(null), G = j(0), X = j(!1);
  j(0);
  const ee = j(null);
  j(0);
  const ie = ae(() => {
    var S;
    return ((S = ee.value) == null ? void 0 : S.$el.getBoundingClientRect().height) || 0;
  }), ge = K1(
    e.snapPoints,
    j(void 0)
  ), Ue = ae(() => {
    var S;
    return ge && (((S = ge.value) == null ? void 0 : S.length) ?? 0) > 0;
  }), mt = j(null), {
    activeSnapPointIndex: bt,
    onRelease: Zt,
    snapPointsOffset: pe,
    onDrag: fe,
    shouldFade: K,
    getPercentageDragged: we
  } = H1({
    snapPoints: ge,
    activeSnapPoint: h,
    drawerRef: ee,
    fadeFromIndex: f,
    overlayRef: F,
    onSnapPointChange: ke,
    direction: g
  });
  function ke(S, D) {
    ge.value && S === D.length - 1 && (A.value = /* @__PURE__ */ new Date());
  }
  J1({
    isOpen: y,
    modal: l,
    nested: i,
    hasBeenOpened: x,
    noBodyStyles: b,
    preventScrollRestoration: v
  });
  function $e() {
    return (window.innerWidth - Up) / window.innerWidth;
  }
  function k(S, D) {
    var Y;
    if (!S)
      return !1;
    let J = S;
    const z = (Y = window.getSelection()) == null ? void 0 : Y.toString(), te = ee.value ? Qr(ee.value.$el, g.value) : null, se = /* @__PURE__ */ new Date();
    if (J.hasAttribute("data-vaul-no-drag") || J.closest("[data-vaul-no-drag]"))
      return !1;
    if (g.value === "right" || g.value === "left")
      return !0;
    if (A.value && se.getTime() - A.value.getTime() < 500)
      return !1;
    if (te !== null && (g.value === "bottom" ? te > 0 : te < 0))
      return !0;
    if (z && z.length > 0)
      return !1;
    if (P.value && se.getTime() - P.value.getTime() < d.value && te === 0 || D)
      return P.value = se, !1;
    for (; J; ) {
      if (J.scrollHeight > J.clientHeight) {
        if (J.scrollTop !== 0)
          return P.value = /* @__PURE__ */ new Date(), !1;
        if (J.getAttribute("role") === "dialog")
          return !0;
      }
      J = J.parentNode;
    }
    return !0;
  }
  function C(S) {
    !a.value && !ge.value || ee.value && !ee.value.$el.contains(S.target) || (w.value = !0, O.value = /* @__PURE__ */ new Date(), S.target.setPointerCapture(S.pointerId), G.value = Ke(g.value) ? S.clientY : S.clientX);
  }
  function $(S) {
    var D, Y, J, z, te, se;
    if (ee.value && w.value) {
      const de = g.value === "bottom" || g.value === "right" ? 1 : -1, ye = (G.value - (Ke(g.value) ? S.clientY : S.clientX)) * de, Ae = ye > 0, ut = ge.value && !a.value && !Ae;
      if (ut && bt.value === 0)
        return;
      const xo = Math.abs(ye), wn = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let Xt = xo / ie.value;
      const Le = we(xo, Ae);
      if (Le !== null && (Xt = Le), ut && Xt >= 1 || !T.value && !k(S.target, Ae))
        return;
      if ((D = ee?.value) == null || D.$el.classList.add(Bu), T.value = !0, nt((Y = ee.value) == null ? void 0 : Y.$el, {
        transition: "none"
      }), nt((J = F.value) == null ? void 0 : J.$el, {
        transition: "none"
      }), ge.value && fe({ draggedDistance: ye }), Ae && !ge.value) {
        const je = z1(ye), It = Math.min(je * -1, 0) * de;
        nt((z = ee.value) == null ? void 0 : z.$el, {
          transform: Ke(g.value) ? `translate3d(0, ${It}px, 0)` : `translate3d(${It}px, 0, 0)`
        });
        return;
      }
      const ct = 1 - Xt;
      if ((K.value || f.value && bt.value === f.value - 1) && (t(Xt), nt(
        (te = F.value) == null ? void 0 : te.$el,
        {
          opacity: `${ct}`,
          transition: "none"
        },
        !0
      )), wn && F.value && u.value) {
        const je = Math.min($e() + Xt * (1 - $e()), 1), It = 8 - Xt * 8, ko = Math.max(0, 14 - Xt * 14);
        nt(
          wn,
          {
            borderRadius: `${It}px`,
            transform: Ke(g.value) ? `scale(${je}) translate3d(0, ${ko}px, 0)` : `scale(${je}) translate3d(${ko}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!ge.value) {
        const je = xo * de;
        nt((se = ee.value) == null ? void 0 : se.$el, {
          transform: Ke(g.value) ? `translate3d(0, ${je}px, 0)` : `translate3d(${je}px, 0, 0)`
        });
      }
    }
  }
  function L() {
    var S;
    if (!ee.value)
      return;
    const D = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), Y = Qr(ee.value.$el, g.value);
    nt(ee.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`
    }), nt((S = F.value) == null ? void 0 : S.$el, {
      transition: `opacity ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      opacity: "1"
    }), u.value && Y && Y > 0 && y.value && nt(
      D,
      {
        borderRadius: `${Mp}px`,
        overflow: "hidden",
        ...Ke(g.value) ? {
          transform: `scale(${$e()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${$e()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${ze.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${ze.EASE.join(",")})`
      },
      !0
    );
  }
  function R(S) {
    ee.value && (o(), S || (y.value = !1), window.setTimeout(() => {
      ge.value && (h.value = ge.value[0]);
    }, ze.DURATION * 1e3));
  }
  it(() => {
    if (!y.value && u.value && P1) {
      const S = setTimeout(() => {
        j1(document.body);
      }, 200);
      return () => clearTimeout(S);
    }
  }), Ee(s, () => {
    y.value = s.value, s.value || R();
  });
  function U(S) {
    if (!w.value || !ee.value)
      return;
    ee.value.$el.classList.remove(Bu), T.value = !1, w.value = !1, M.value = /* @__PURE__ */ new Date();
    const D = Qr(ee.value.$el, g.value);
    if (!k(S.target, !1) || !D || Number.isNaN(D) || O.value === null)
      return;
    const Y = M.value.getTime() - O.value.getTime(), J = G.value - (Ke(g.value) ? S.clientY : S.clientX), z = Math.abs(J) / Y;
    if (z > 0.05 && (I.value = !0, window.setTimeout(() => {
      I.value = !1;
    }, 200)), ge.value) {
      const se = g.value === "bottom" || g.value === "right" ? 1 : -1;
      Zt({
        draggedDistance: J * se,
        closeDrawer: R,
        velocity: z,
        dismissible: a.value
      }), n(!0);
      return;
    }
    if (g.value === "bottom" || g.value === "right" ? J > 0 : J < 0) {
      L(), n(!0);
      return;
    }
    if (z > Pp) {
      R(), n(!1);
      return;
    }
    const te = Math.min(
      ee.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (D >= te * p.value) {
      R(), n(!1);
      return;
    }
    n(!0), L();
  }
  Ee(y, (S) => {
    S && (A.value = /* @__PURE__ */ new Date()), r(S);
  }, { immediate: !0 });
  function Q(S) {
    var D, Y;
    const J = S ? (window.innerWidth - Yr) / window.innerWidth : 1, z = S ? -16 : 0;
    W.value && window.clearTimeout(W.value), nt((D = ee.value) == null ? void 0 : D.$el, {
      transition: `transform ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      transform: `scale(${J}) translate3d(0, ${z}px, 0)`
    }), !S && (Y = ee.value) != null && Y.$el && (W.value = window.setTimeout(() => {
      var te, se;
      const de = Qr((te = ee.value) == null ? void 0 : te.$el, g.value);
      nt((se = ee.value) == null ? void 0 : se.$el, {
        transition: "none",
        transform: Ke(g.value) ? `translate3d(0, ${de}px, 0)` : `translate3d(${de}px, 0, 0)`
      });
    }, 500));
  }
  function H(S) {
    var D;
    if (S < 0)
      return;
    const Y = Ke(g.value) ? window.innerHeight : window.innerWidth, J = (Y - Yr) / Y, z = J + S * (1 - J), te = -16 + S * Yr;
    nt((D = ee.value) == null ? void 0 : D.$el, {
      transform: Ke(g.value) ? `scale(${z}) translate3d(0, ${te}px, 0)` : `scale(${z}) translate3d(${te}px, 0, 0)`,
      transition: "none"
    });
  }
  function q(S) {
    var D;
    const Y = Ke(g.value) ? window.innerHeight : window.innerWidth, J = S ? (Y - Yr) / Y : 1, z = S ? -16 : 0;
    S && nt((D = ee.value) == null ? void 0 : D.$el, {
      transition: `transform ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      transform: Ke(g.value) ? `scale(${J}) translate3d(0, ${z}px, 0)` : `scale(${J}) translate3d(${z}px, 0, 0)`
    });
  }
  return {
    open: s,
    isOpen: y,
    modal: l,
    keyboardIsOpen: X,
    hasBeenOpened: x,
    drawerRef: ee,
    drawerHeightRef: ie,
    overlayRef: F,
    handleRef: mt,
    isDragging: w,
    dragStartTime: O,
    isAllowedToDrag: T,
    snapPoints: ge,
    activeSnapPoint: h,
    hasSnapPoints: Ue,
    pointerStart: G,
    dismissible: a,
    snapPointsOffset: pe,
    direction: g,
    shouldFade: K,
    fadeFromIndex: f,
    shouldScaleBackground: u,
    setBackgroundColorOnScale: c,
    onPress: C,
    onDrag: $,
    onRelease: U,
    closeDrawer: R,
    onNestedDrag: H,
    onNestedRelease: q,
    onNestedOpenChange: Q,
    emitClose: o,
    emitDrag: t,
    emitRelease: n,
    emitOpenChange: r,
    nested: i,
    handleOnly: _,
    noBodyStyles: b
  };
}
const Q1 = /* @__PURE__ */ Z({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: q1 },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: W1 },
    fixed: { type: Boolean, default: void 0 },
    dismissible: { type: Boolean, default: !0 },
    modal: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: void 0 },
    nested: { type: Boolean, default: !1 },
    direction: { default: "bottom" },
    noBodyStyles: { type: Boolean },
    handleOnly: { type: Boolean, default: !1 },
    preventScrollRestoration: { type: Boolean },
    snapPoints: { default: void 0 },
    fadeFromIndex: { default: void 0 }
  },
  emits: ["drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n;
    $c();
    const s = ae(() => o.fadeFromIndex ?? (o.snapPoints && o.snapPoints.length - 1)), a = Ou(o, "open", r, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), i = Ou(o, "activeSnapPoint", r, {
      passive: o.activeSnapPoint === void 0
    }), l = {
      emitDrag: (f) => r("drag", f),
      emitRelease: (f) => r("release", f),
      emitClose: () => r("close"),
      emitOpenChange: (f) => {
        r("update:open", f), setTimeout(() => {
          r("animationEnd", f);
        }, ze.DURATION * 1e3);
      }
    }, { closeDrawer: u, hasBeenOpened: c, modal: d, isOpen: p } = L1(
      G1({
        ...l,
        ...Qt(o),
        activeSnapPoint: i,
        fadeFromIndex: s,
        open: a
      })
    );
    function h(f) {
      if (a.value !== void 0) {
        l.emitOpenChange(f);
        return;
      }
      p.value = f, f ? c.value = !0 : u();
    }
    return t({
      open: p
    }), (f, g) => (N(), re(m(Gg), {
      open: m(p),
      modal: m(d),
      "onUpdate:open": h
    }, {
      default: E(() => [
        oe(f.$slots, "default", { open: m(p) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), Y1 = /* @__PURE__ */ Z({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: n, isOpen: o, shouldFade: r } = il();
    return (s, a) => (N(), re(m(T1), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": m(o) && m(n) ? "true" : "false",
      "data-vaul-snap-points-overlay": m(o) && m(r) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), Z1 = () => () => {
};
function X1() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: o, noBodyStyles: r } = il(), s = j(null), a = j(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - Up) / window.innerWidth;
  }
  it((l) => {
    if (t.value && n.value) {
      s.value && clearTimeout(s.value);
      const u = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!u)
        return;
      V1(
        o.value && !r.value ? ma(document.body, { background: "black" }) : Z1,
        ma(u, {
          transformOrigin: Ke(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${ze.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${ze.EASE.join(",")})`
        })
      );
      const c = ma(u, {
        borderRadius: `${Mp}px`,
        overflow: "hidden",
        ...Ke(e.value) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      l(() => {
        c(), s.value = window.setTimeout(() => {
          a.value ? document.body.style.background = a.value : document.body.style.removeProperty("background");
        }, ze.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const ey = /* @__PURE__ */ Z({
  __name: "DrawerContent",
  setup(e) {
    const {
      open: t,
      isOpen: n,
      snapPointsOffset: o,
      hasSnapPoints: r,
      drawerRef: s,
      onPress: a,
      onDrag: i,
      onRelease: l,
      modal: u,
      emitOpenChange: c,
      dismissible: d,
      keyboardIsOpen: p,
      closeDrawer: h,
      direction: f,
      handleOnly: g
    } = il();
    X1();
    const b = j(!1), _ = ae(() => o.value && o.value.length > 0 ? `${o.value[0]}px` : "0");
    function v(w) {
      if (!u.value || w.defaultPrevented) {
        w.preventDefault();
        return;
      }
      p.value && (p.value = !1), d.value ? c(!1) : w.preventDefault();
    }
    function y(w) {
      g.value || a(w);
    }
    function x(w) {
      g.value || i(w);
    }
    return it(() => {
      r.value && window.requestAnimationFrame(() => {
        b.value = !0;
      });
    }), (w, I) => (N(), re(m(k1), {
      ref_key: "drawerRef",
      ref: s,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": m(f),
      "data-vaul-delayed-snap-points": b.value ? "true" : "false",
      "data-vaul-snap-points": m(n) && m(r) ? "true" : "false",
      style: on({ "--snap-point-height": _.value }),
      onPointerdown: y,
      onPointermove: x,
      onPointerup: m(l),
      onPointerDownOutside: v,
      onOpenAutoFocus: I[0] || (I[0] = fn(() => {
      }, ["prevent"])),
      onEscapeKeyDown: I[1] || (I[1] = (F) => {
        m(d) || F.preventDefault();
      })
    }, {
      default: E(() => [
        oe(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), ty = /* @__PURE__ */ Z({
  __name: "Drawer",
  props: {
    activeSnapPoint: {},
    closeThreshold: {},
    shouldScaleBackground: { type: Boolean, default: !0 },
    setBackgroundColorOnScale: { type: Boolean },
    scrollLockTimeout: {},
    fixed: { type: Boolean },
    dismissible: { type: Boolean },
    modal: { type: Boolean },
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    nested: { type: Boolean },
    direction: {},
    noBodyStyles: { type: Boolean },
    handleOnly: { type: Boolean },
    preventScrollRestoration: { type: Boolean },
    snapPoints: {},
    fadeFromIndex: {}
  },
  emits: ["drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"],
  setup(e, { emit: t }) {
    const r = Np(e, t);
    return (s, a) => (N(), re(m(Q1), mo(jn({ ...m(r) })), {
      default: E(() => [
        oe(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ny(e) {
  return typeof e == "function" ? e() : m(e);
}
function oy(e) {
  if (!Je(e))
    return nn(e);
  const t = new Proxy({}, {
    get(n, o, r) {
      return m(Reflect.get(e.value, o, r));
    },
    set(n, o, r) {
      return Je(e.value[o]) && !Je(r) ? e.value[o].value = r : e.value[o] = r, !0;
    },
    deleteProperty(n, o) {
      return Reflect.deleteProperty(e.value, o);
    },
    has(n, o) {
      return Reflect.has(e.value, o);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return nn(t);
}
function ry(e) {
  return oy(ae(e));
}
function ll(e, ...t) {
  const n = t.flat(), o = n[0];
  return ry(() => Object.fromEntries(typeof o == "function" ? Object.entries(Qt(e)).filter(([r, s]) => !o(ny(s), r)) : Object.entries(Qt(e)).filter((r) => !n.includes(r[0]))));
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const sy = (e) => typeof e < "u";
function ay(e) {
  return JSON.parse(JSON.stringify(e));
}
function iy(e, t, n, o = {}) {
  var r, s, a;
  const {
    clone: i = !1,
    passive: l = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: d,
    shouldEmit: p
  } = o, h = Me(), f = n || h?.emit || ((r = h?.$emit) == null ? void 0 : r.bind(h)) || ((a = (s = h?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : a.bind(h?.proxy));
  let g = u;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (y) => i ? typeof i == "function" ? i(y) : ay(y) : y, _ = () => sy(e[t]) ? b(e[t]) : d, v = (y) => {
    p ? p(y) && f(g, y) : f(g, y);
  };
  if (l) {
    const y = _(), x = j(y);
    let w = !1;
    return Ee(
      () => e[t],
      (I) => {
        w || (w = !0, x.value = b(I), Qe(() => w = !1));
      }
    ), Ee(
      x,
      (I) => {
        !w && (I !== e[t] || c) && v(I);
      },
      { deep: c }
    ), x;
  } else
    return ae({
      get() {
        return _();
      },
      set(y) {
        v(y);
      }
    });
}
const ly = /* @__PURE__ */ Z({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = ll(t, "class");
    return (o, r) => (N(), re(m(Y1), be(m(n), {
      class: m(Fe)("fixed inset-0 z-50 bg-black/80", t.class)
    }), null, 16, ["class"]));
  }
}), uy = /* @__PURE__ */ V("div", { class: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-neutral-100 dark:bg-neutral-800" }, null, -1), cy = /* @__PURE__ */ Z({
  __name: "DrawerContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = Np(n, t);
    function s(l) {
      l.stopPropagation(), l.preventDefault();
    }
    function a(l) {
      l.stopPropagation(), l.preventDefault();
    }
    function i(l) {
      l.stopPropagation(), l.preventDefault();
    }
    return (l, u) => (N(), re(m(D1), null, {
      default: E(() => [
        B(ly),
        B(m(ey), be(m(r), {
          class: m(Fe)(
            "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950",
            n.class
          ),
          onPointerDownOutside: s,
          onFocusOutside: a,
          onInteractOutside: i
        }), {
          default: E(() => [
            uy,
            oe(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), dy = /* @__PURE__ */ Z({
  __name: "DrawerFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), ue("div", {
      class: qe(m(Fe)("mt-auto flex flex-col gap-2 p-4", t.class))
    }, [
      oe(n.$slots, "default")
    ], 2));
  }
}), py = /* @__PURE__ */ Z({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), ue("div", {
      class: qe(m(Fe)("grid gap-1.5 p-4 text-center sm:text-left", t.class))
    }, [
      oe(n.$slots, "default")
    ], 2));
  }
}), fy = /* @__PURE__ */ Z({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = ll(t, "class");
    return (o, r) => (N(), re(m($1), be(m(n), {
      class: m(Fe)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: E(() => [
        oe(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hy = {
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
function Lp(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Lp(e[t])) && (o && (o += " "), o += n);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function my() {
  for (var e, t, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Lp(e)) && (o && (o += " "), o += t);
  return o;
}
const Ru = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Du = my, vy = (e, t) => (n) => {
  var o;
  if (t?.variants == null)
    return Du(e, n?.class, n?.className);
  const { variants: r, defaultVariants: s } = t, a = Object.keys(r).map((u) => {
    const c = n?.[u], d = s?.[u];
    if (c === null)
      return null;
    const p = Ru(c) || Ru(d);
    return r[u][p];
  }), i = n && Object.entries(n).reduce((u, c) => {
    let [d, p] = c;
    return p === void 0 || (u[d] = p), u;
  }, {}), l = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((u, c) => {
    let { class: d, className: p, ...h } = c;
    return Object.entries(h).every((f) => {
      let [g, b] = f;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...i
      }[g]) : {
        ...s,
        ...i
      }[g] === b;
    }) ? [
      ...u,
      d,
      p
    ] : u;
  }, []);
  return Du(e, a, l, n?.class, n?.className);
}, Ft = /* @__PURE__ */ Z({
  __name: "Button",
  props: {
    variant: {},
    size: {},
    as: { default: "button" },
    asChild: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (N(), re(m(yt), {
      as: t.as,
      "as-child": t.asChild,
      class: qe(m(Fe)(m(gy)({ variant: t.variant, size: t.size }), t.$attrs.class ?? ""))
    }, {
      default: E(() => [
        oe(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), gy = vy(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary:90",
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
), yy = /* @__PURE__ */ Z({
  __name: "Card",
  props: {
    class: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), ue("div", {
      class: qe(
        m(Fe)(
          "rounded-lg border border-border bg-card text-card-foreground shadow-sm",
          t.class
        )
      )
    }, [
      oe(n.$slots, "default")
    ], 2));
  }
}), by = /* @__PURE__ */ Z({
  __name: "CardHeader",
  props: {
    class: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), ue("div", {
      class: qe(m(Fe)("flex flex-col space-y-1.5 p-6", t.class))
    }, [
      oe(n.$slots, "default")
    ], 2));
  }
}), wy = /* @__PURE__ */ Z({
  __name: "CardTitle",
  props: {
    class: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), ue("h3", {
      class: qe(
        m(Fe)("text-2xl font-semibold leading-none tracking-tighter", t.class)
      )
    }, [
      oe(n.$slots, "default")
    ], 2));
  }
}), xy = /* @__PURE__ */ Z({
  __name: "CardDescription",
  props: {
    class: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), ue("p", {
      class: qe(m(Fe)("text-sm text-muted-foreground", t.class))
    }, [
      oe(n.$slots, "default")
    ], 2));
  }
}), ky = /* @__PURE__ */ Z({
  __name: "CardContent",
  props: {
    class: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), ue("div", {
      class: qe(m(Fe)("p-6 pt-0", t.class))
    }, [
      oe(n.$slots, "default")
    ], 2));
  }
}), _y = /* @__PURE__ */ Z({
  __name: "CardFooter",
  props: {
    class: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), ue("div", {
      class: qe(m(Fe)("p-6 pt-0", t.class))
    }, [
      oe(n.$slots, "default")
    ], 2));
  }
}), Nu = /* @__PURE__ */ Z({
  inheritAttrs: !1,
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { class: r, ...s } = Rc(), a = iy(n, "modelValue", o, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (i, l) => bc((N(), ue("input", be({
      "onUpdate:modelValue": l[0] || (l[0] = (u) => Je(a) ? a.value = u : null),
      class: m(Fe)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50", m(r) ?? "")
    }, s), null, 16)), [
      [hd, m(a)]
    ]);
  }
}), va = /* @__PURE__ */ Z({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), re(m(vv), be(t, {
      class: m(Fe)(
        "block text-sm tracking-tight font-medium text-foreground text-left",
        t.class
      )
    }), {
      default: E(() => [
        oe(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cy = /* @__PURE__ */ Z({
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
    const r = v0(e, t);
    return (s, a) => (N(), re(m(bv), mo(jn(m(r))), {
      default: E(() => [
        oe(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sy = /* @__PURE__ */ Z({
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
    return (n, o) => (N(), re(m(kv), be(t, {
      class: m(Fe)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md",
        t.class
      )
    }), {
      default: E(() => [
        oe(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ay = /* @__PURE__ */ Z({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (N(), re(m(wv), be(t, {
      class: m(Fe)(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        t.class
      )
    }), {
      default: E(() => [
        oe(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ga = /* @__PURE__ */ Z({
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
    return (n, o) => (N(), re(m(xv), be({
      class: m(Fe)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", t.class)
    }, t), {
      default: E(() => [
        oe(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ey = /* @__PURE__ */ Z({
  __name: "Separator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    label: {}
  },
  setup(e) {
    const t = e, n = ll(t, "class");
    return (o, r) => (N(), re(m(F1), be(m(n), {
      class: m(Fe)(
        "shrink-0 bg-neutral-200 relative dark:bg-neutral-800",
        t.orientation === "vertical" ? "w-px h-full" : "h-px w-full",
        t.class
      )
    }), {
      default: E(() => [
        t.label ? (N(), ue("span", {
          key: 0,
          class: qe(m(Fe)(
            "text-xs text-neutral-500 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center dark:text-neutral-400 dark:bg-neutral-950",
            t.orientation === "vertical" ? "w-[1px] px-1 py-2" : "h-[1px] py-1 px-2"
          ))
        }, Re(t.label), 3)) : Xe("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Be = (e) => (cc("data-v-56540ed3"), e = e(), dc(), e), Iy = {
  key: 0,
  class: "h-full w-full bg-background overflow-y-auto"
}, Ty = {
  key: 0,
  class: "fixed inset-0"
}, Oy = ["src"], By = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "absolute inset-0 bg-white/10" }, null, -1)), $y = { class: "w-full md:w-[460px] md:mx-auto of-hidden grid grid-rows-[auto_1fr_auto] max-h-[100dvh] min-h-[100dvh]" }, Ry = { class: "w-full z-10" }, Dy = { class: "w-full rounded-b-md bg-muted p-4 flex items-center justify-center" }, Ny = {
  key: 0,
  src: Jm,
  style: { height: "50px" }
}, Fy = ["src"], Py = { class: "w-full h-full justify-between z-10 flex flex-col items-center" }, My = { class: "w-full h-full px-2 py-6 flex flex-col items-center" }, Uy = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "rounded-md border border-primary/50 px-4 py-3 mb-6 text-primary bg-accent" }, [
  /* @__PURE__ */ V("span", { class: "text-sm" }, [
    /* @__PURE__ */ V("div", {
      class: "me-2 -mt-0.5 inline-flex opacity-60 i-iconamoon-information-circle-duotone",
      "aria-hidden": "true"
    }),
    /* @__PURE__ */ le(" Connect to the internet by selecting from our range of packages. Click 'Choose a Package' to see all available options, or reconnect back to the internet using a Voucher. ")
  ])
], -1)), Ly = { class: "grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-2 p-6 overflow-y-auto max-h-full" }, jy = { key: 0 }, zy = { class: "uppercase" }, Vy = { class: "grid gap-4 py-4" }, qy = { class: "hotspot-input" }, Wy = { class: "flex flex-col gap-2" }, Hy = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "flex w-full items-center" }, [
  /* @__PURE__ */ V("div", { class: "px-2 py-2 bg-accent text-muted-foreground border border-border rounded-s h-40px" }, " +254 "),
  /* @__PURE__ */ V("input", {
    id: "phone",
    type: "number",
    name: "phone",
    class: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 rounded-s-[0px]"
  })
], -1)), Jy = ["value"], Ky = ["value"], Gy = ["value"], Qy = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("input", {
  type: "hidden",
  name: "payment_method",
  value: "mpesa"
}, null, -1)), Yy = { class: "grid gap-4 py-4" }, Zy = { class: "hotspot-input" }, Xy = { class: "flex w-full items-center" }, eb = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "px-2 py-2 bg-accent text-muted-foreground border border-border rounded-s h-40px" }, "+250", -1)), tb = ["value"], nb = ["value"], ob = ["value"], rb = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("input", {
  type: "hidden",
  name: "payment_method",
  value: "kpay_mtn"
}, null, -1)), sb = { class: "grid gap-4 py-4" }, ab = { class: "hotspot-input" }, ib = ["value"], lb = ["value"], ub = ["value"], cb = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("input", {
  type: "hidden",
  name: "payment_method",
  value: "kpay_card"
}, null, -1)), db = {
  key: 1,
  class: "relative flex flex-col items-stretch justify-center w-full"
}, pb = { class: "grid gap-4 py-4" }, fb = { class: "hotspot-input" }, hb = ["value"], mb = ["value"], vb = ["value"], gb = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("input", {
  type: "hidden",
  name: "payment_method",
  value: "ad"
}, null, -1)), yb = { class: "grid gap-4 py-4" }, bb = { class: "hotspot-input" }, wb = ["value"], xb = ["value"], kb = ["value"], _b = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("input", {
  type: "hidden",
  name: "payment_method",
  value: "free"
}, null, -1)), Cb = { key: 0 }, Sb = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "text-2xl font-400 text-red" }, " Do not reload this page ", -1)), Ab = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "i-eos-icons-loading text-3xl" }, null, -1)), Eb = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "font-semibold py-2" }, " Please wait while we process your request ", -1)), Ib = { key: 1 }, Tb = { key: 0 }, Ob = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "i-clarity-success-standard-line text-3xl" }, null, -1)), Bb = { class: "font-semibold py-2" }, $b = { key: 1 }, Rb = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "i-material-symbols-error-outline-rounded text-3xl" }, null, -1)), Db = { class: "font-semibold py-2" }, Nb = { key: 0 }, Fb = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "text-2xl font-400 text-red" }, " Do not reload this page ", -1)), Pb = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "i-eos-icons-loading text-3xl" }, null, -1)), Mb = { key: 1 }, Ub = { key: 0 }, Lb = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "i-clarity-success-standard-line text-3xl" }, null, -1)), jb = { class: "font-semibold py-2" }, zb = { key: 1 }, Vb = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "i-material-symbols-error-outline-rounded text-3xl" }, null, -1)), qb = { class: "font-semibold py-2" }, Wb = { key: 0 }, Hb = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "text-2xl font-400 text-red" }, " Do not reload this page ", -1)), Jb = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "i-eos-icons-loading text-3xl" }, null, -1)), Kb = { key: 1 }, Gb = { key: 0 }, Qb = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "i-clarity-success-standard-line text-3xl" }, null, -1)), Yb = { class: "font-semibold py-2" }, Zb = { key: 1 }, Xb = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "i-material-symbols-error-outline-rounded text-3xl" }, null, -1)), ew = { class: "font-semibold py-2" }, tw = { key: 0 }, nw = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "text-2xl font-400 text-red" }, " Do not reload this page ", -1)), ow = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "i-eos-icons-loading text-3xl" }, null, -1)), rw = { key: 1 }, sw = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "i-clarity-success-standard-line text-3xl" }, null, -1)), aw = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "font-semibold py-2" }, " Your voucher has been activated ", -1)), iw = { key: 2 }, lw = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "i-material-symbols-error-outline-rounded text-3xl" }, null, -1)), uw = { class: "font-semibold py-2" }, cw = /* @__PURE__ */ Be(() => /* @__PURE__ */ V("div", { class: "w-full md:w-[460px] md:mx-auto rounded-0 bg-muted p-4 flex items-center justify-center z-1 gap-2" }, [
  /* @__PURE__ */ V("a", {
    href: "https://wezeshanet.com/terms",
    target: "_blank",
    rel: "noopener",
    class: "link"
  }, "Terms of Service"),
  /* @__PURE__ */ le(" and "),
  /* @__PURE__ */ V("a", {
    href: "https://wezeshanet.com/privacy-policy",
    target: "_blank",
    rel: "noopener",
    class: "link"
  }, "Privacy Policy")
], -1)), dw = /* @__PURE__ */ Z({
  __name: "hotspot",
  props: {
    gatewayBaseUrl: {},
    org: {},
    router: {}
  },
  setup(e) {
    const t = e, n = j(!1), o = j(!0), r = j(!1), s = j(!1), a = j(""), i = j(!1), l = j(), u = j(), c = j(!1), d = j(null), p = j(!0), h = j([]), f = j(""), g = j(""), b = j(), _ = j(), v = j(""), y = j(!1), x = j(!1), w = j(!1), I = j("");
    async function F(pe) {
      pe.preventDefault(), y.value = !0, w.value = !1, I.value = "";
      const fe = `hotspot.${t.org}`, K = document.getElementById("macInput") || { value: "" };
      try {
        const we = await fetch(`${t.gatewayBaseUrl}/backend/api/hotspot.connect-voucher?mac=${K.value}&routerId=${t.router}&voucher=${v.value.toUpperCase()}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${fe}`
          }
        }), ke = await we.json();
        we.ok ? (x.value = !0, ke.username && ke.password ? (localStorage.setItem("creds", JSON.stringify({
          username: ke.username,
          password: ke.password
        })), f.value = ke.username, g.value = ke.password, ke.purchasableExpiry && localStorage.setItem("expiry_trial", JSON.stringify({
          expiry: ke.purchasableExpiry,
          trial: 2
        })), G()) : (I.value = "Invalid credentials received from server", w.value = !0)) : (w.value = !0, I.value = ke.error?.message || "Failed to connect with voucher");
      } catch (we) {
        console.error("Voucher connection error:", we), w.value = !0, I.value = we.message || "Error connecting with voucher";
      } finally {
        y.value = !1;
      }
    }
    function A() {
      v.value = "", y.value = !1, x.value = !1, w.value = !1, I.value = "";
    }
    const O = j({
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
    function M() {
      localStorage.setItem("purchase_state", JSON.stringify({
        ...O.value,
        timestamp: Date.now()
      }));
    }
    function P() {
      localStorage.removeItem("purchase_state"), O.value = {
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
    function T(pe) {
      return pe.startsWith("http") || pe.startsWith("data:image");
    }
    function W(pe) {
      pe === !1 && (o.value = !0);
    }
    function G() {
      const pe = document.getElementById("loginForm"), fe = document.getElementById("usernameInput");
      fe.value = f.value;
      const K = document.getElementById("passwordInput");
      K.value = g.value, pe.submit();
    }
    function X(pe) {
      const fe = pe.slice(-1).toLowerCase(), K = Number.parseInt(pe.slice(0, -1));
      switch (fe) {
        case "h":
          return K > 48 && K % 24 === 0 ? `${Math.round(K / 24)} Days` : K === 1 ? `${K} Hour` : `${K} Hours`;
        case "m":
          return K === 1 ? `${K} Minute` : `${K} Minutes`;
        case "d":
          return K === 1 ? `${K} Day` : `${K} Days`;
        default:
          return pe;
      }
    }
    async function ee(pe) {
      pe.preventDefault(), n.value = !0;
      const fe = `hotspot.${t.org}`;
      a.value = "We are sending you a push", r.value = !0, s.value = !0;
      const K = new FormData(pe.target), we = document.getElementById("macInput") || { value: "" }, ke = K.get("payment_method"), $e = {
        phoneNumber: ke === "mpesa" ? ng(K.get("phone")) : `250${K.get("phone")}`,
        packageId: K.get("package"),
        packageName: K.get("package_name"),
        amount: K.get("amount"),
        paymentMethod: ke,
        mac: we.value,
        routerId: t.router,
        adUrl: ke === "ad" ? _.value : void 0
      };
      if (t.gatewayBaseUrl)
        try {
          const C = await (await fetch(`${t.gatewayBaseUrl}/backend/api/hotspot.purchase`, {
            method: "POST",
            body: JSON.stringify($e),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${fe}`
            }
          })).json();
          if (C.error)
            s.value = !1, i.value = !1, u.value = C.error.message, n.value = !1, P();
          else {
            O.value = {
              transactionId: C.id,
              packageId: $e.packageId,
              packageName: $e.packageName,
              amount: $e.amount,
              paymentMethod: ke,
              mac: we.value,
              status: "processing",
              timestamp: Date.now(),
              currentSelectedVideo: ke === "ad" ? _.value : null
            }, M(), a.value = ke === "mpesa" ? "STK push sent, enter PIN" : "Sent you a push, enter PIN", localStorage.setItem("creds", JSON.stringify({ username: C.username, password: C.password }));
            let $ = !1;
            const L = setInterval(async () => {
              if ($) {
                clearInterval(L);
                return;
              }
              try {
                const U = await (await fetch(`${t.gatewayBaseUrl}/backend/api/hotspot.check-purchase?id=${C.id}`, {
                  method: "GET",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${fe}`
                  }
                })).json();
                if (U.paymentState === "PROCESSING")
                  return;
                if ($ = !0, clearInterval(L), U.paymentState === "SUCCESSFUL" && a.value !== "Purchase successful, please wait as we connect you") {
                  a.value = "Purchase successful, please wait as we connect you";
                  const Q = JSON.parse(localStorage.getItem("creds"));
                  O.value.status = "payment-successful", M();
                  try {
                    const H = `${t.gatewayBaseUrl}/backend/api/hotspot.connect?routerId=${t.router}&id=${U.id}&username=${Q.username}&password=${Q.password}&mac=${we.value}`, q = await fetch(H, {
                      method: "GET",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${fe}`
                      }
                    }), S = await q.json();
                    q.ok ? (s.value = !1, i.value = !0, n.value = !1, f.value = Q.username, g.value = Q.password, localStorage.setItem("expiry_trial", JSON.stringify({ expiry: S.purchasableExpiry, trial: 2 })), P(), G()) : P();
                  } catch (H) {
                    console.error("Connection error:", H), s.value = !1, i.value = !1, n.value = !1, u.value = "Error connecting to the internet", P();
                  }
                } else
                  localStorage.removeItem("creds"), s.value = !1, i.value = !1, n.value = !1, u.value = U.paymentState === "FAILED" ? "Transaction Failed" : U.paymentState === "CANCELLED" ? "Transaction Cancelled" : "An Error Occurred", P();
              } catch (R) {
                console.error("Check purchase error:", R), $ = !0, clearInterval(L), s.value = !1, n.value = !1, u.value = "Error checking transaction status", P();
              }
            }, 1e3);
          }
        } catch (k) {
          s.value = !1, n.value = !1, u.value = k.message, P();
        }
      else
        throw s.value = !1, n.value = !1, u.value = "It's not you it's us", new Error("packagePurchaseUrl not set");
    }
    async function ie() {
      const pe = `hotspot.${t.org}`, fe = localStorage.getItem("purchase_state");
      if (!fe)
        return;
      const K = JSON.parse(fe);
      O.value = K;
      const we = 30 * 60 * 1e3;
      if (Date.now() - K.timestamp > we) {
        P();
        return;
      }
      if (r.value = !0, K.status === "processing") {
        s.value = !0, n.value = !0;
        const ke = K.paymentMethod;
        if (a.value = "Package purchase resumed, checking status", K.transactionId) {
          let $e = !1;
          const k = setInterval(async () => {
            if ($e) {
              clearInterval(k);
              return;
            }
            try {
              const $ = await (await fetch(`${t.gatewayBaseUrl}/backend/api/hotspot.check-purchase?id=${K.transactionId}`, {
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${pe}`
                }
              })).json();
              if ($.paymentState === "PROCESSING")
                return;
              if ($e = !0, clearInterval(k), $.paymentState === "SUCCESSFUL" && a.value !== "Purchase successful, please wait as we connect you") {
                a.value = "Purchase successful, please wait as we connect you";
                const L = JSON.parse(localStorage.getItem("creds"));
                O.value.status = "payment-successful", M();
                try {
                  const R = `${t.gatewayBaseUrl}/backend/api/hotspot.connect?routerId=${t.router}&id=${K.transactionId}&username=${L.username}&password=${L.password}&mac=${K.mac}${K.paymentMethod === "ad" ? `&adUrl=${K.currentSelectedVideo}` : ""}`, U = await fetch(R, {
                    method: "GET",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${pe}`
                    }
                  }), Q = await U.json();
                  U.ok ? (s.value = !1, i.value = !0, n.value = !1, f.value = L.username, g.value = L.password, localStorage.setItem("expiry_trial", JSON.stringify({ expiry: Q.purchasableExpiry, trial: 2 })), P(), G()) : P();
                } catch (R) {
                  console.error("Connection error:", R), s.value = !1, i.value = !1, n.value = !1, u.value = "Error connecting to the internet", P();
                }
              } else
                localStorage.removeItem("creds"), s.value = !1, i.value = !1, n.value = !1, u.value = $.paymentState === "FAILED" ? "Transaction Failed" : $.paymentState === "CANCELLED" ? "Transaction Cancelled" : "An Error Occurred", P();
            } catch (C) {
              console.error("Check purchase error:", C), $e = !0, clearInterval(k), s.value = !1, n.value = !1, u.value = "Error checking transaction status", P();
            }
          }, 1e3);
        }
      } else if (K.status === "payment-successful") {
        s.value = !0, n.value = !0, a.value = "Purchase successful, please wait as we connect you";
        const ke = JSON.parse(localStorage.getItem("creds"));
        try {
          const $e = `${t.gatewayBaseUrl}/backend/api/hotspot.connect?routerId=${t.router}&id=${K.transactionId}&username=${ke.username}&password=${ke.password}&mac=${K.mac}${K.paymentMethod === "ad" ? `&adUrl=${K.currentSelectedVideo}` : ""}`, k = await fetch($e, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${pe}`
            }
          }), C = await k.json();
          k.ok ? (s.value = !1, i.value = !0, n.value = !1, f.value = ke.username, g.value = ke.password, localStorage.setItem("expiry_trial", JSON.stringify({ expiry: C.purchasableExpiry, trial: 2 })), P(), G()) : P();
        } catch ($e) {
          console.error("Connection error:", $e), s.value = !1, i.value = !1, n.value = !1, u.value = "Error connecting to the internet", P();
        }
      }
    }
    function ge() {
      P(), r.value = !1;
    }
    async function Ue() {
      const pe = `hotspot.${t.org}`, fe = await fetch(`${t.gatewayBaseUrl}/backend/api/hotspot.get-config?routerId=${t.router}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${pe}`
        }
      }).then(async ($e) => await $e.json());
      d.value = fe, d.value.dark ? l.value.classList.add("dark") : l.value.classList.remove("dark"), d.value.theme && (l.value.classList.remove("theme-blue"), l.value.classList.add(hy[d.value.theme]));
      const K = await fetch(`${t.gatewayBaseUrl}/backend/api/integrations.get-payment-options?routerId=${t.router}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${pe}`
        }
      }).then(($e) => $e.json());
      h.value = Array.from(new Set(K.options));
      const ke = await (await fetch(`${t.gatewayBaseUrl}/backend/api/hotspot_plans.all?routerId=${t.router}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${pe}`
        }
      })).json();
      p.value = !1, ke.length > 0 && (b.value = ke.map(($e) => ({ ...$e, type: "PAID" })));
    }
    function mt() {
      c.value = window.orientation === 90 || window.orientation === -90;
    }
    const bt = j(/* @__PURE__ */ new Map());
    function Zt(pe, fe) {
      if (bt.value.has(pe))
        return bt.value.get(pe);
      const K = fe.split(","), we = K[Math.floor(Math.random() * K.length)];
      return bt.value.set(pe, we), _.value = we, we;
    }
    return qt(() => {
      window.removeEventListener("orientationchange", mt);
    }), tt(async () => {
      l.value = document.documentElement, l.value.classList.add("theme-blue"), window.addEventListener("orientationchange", mt), mt();
      const pe = JSON.parse(localStorage.getItem("expiry_trial") ?? '"empty"');
      if (pe !== "empty")
        if (pe.expiry > Date.now() && pe.trial !== 0) {
          const fe = JSON.parse(localStorage.getItem("creds") ?? '"empty"');
          fe !== "empty" && (localStorage.setItem("expiry_trial", JSON.stringify({ expiry: pe.expiry, trial: pe.trial - 1 })), f.value = fe.username, g.value = fe.password, G());
        } else
          localStorage.removeItem("creds"), localStorage.removeItem("expiry_trial");
      setTimeout(async () => {
        await Ue(), ie();
      }, 100);
    }), (pe, fe) => d.value ? (N(), ue("div", Iy, [
      d.value.background ? (N(), ue("div", Ty, [
        V("img", {
          src: d.value.background,
          alt: "Colorful background",
          class: "w-full h-full object-cover blur-sm brightness-110"
        }, null, 8, Oy),
        By
      ])) : Xe("", !0),
      V("div", $y, [
        V("div", Ry, [
          V("div", Dy, [
            T(d.value.logo || "") ? (N(), ue("img", {
              key: 1,
              src: d.value.logo,
              style: { height: "50px" }
            }, null, 8, Fy)) : (N(), ue("img", Ny))
          ])
        ]),
        V("div", Py, [
          V("div", My, [
            Uy,
            B(m(ty), null, {
              default: E(() => [
                B(m(R1), { "as-child": "" }, {
                  default: E(() => [
                    B(m(Ft), { class: "w-full" }, {
                      default: E(() => [
                        le(" Choose a Package ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                B(m(cy), { class: "max-h-full" }, {
                  default: E(() => [
                    B(m(py), null, {
                      default: E(() => [
                        B(m(fy), null, {
                          default: E(() => [
                            le("Please Select a package")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    V("div", Ly, [
                      (N(!0), ue(Oe, null, ka(b.value, (K) => (N(), re(yg, {
                        key: K.id,
                        id: K.id,
                        name: K.name,
                        duration: X(K.validity),
                        devices: `${K.sharedUsers}`,
                        price: K.price?.toString() || "0",
                        currency: d.value?.currency,
                        quota: K.quotaLimit?.split(",")[0] ? m(og)(K.quotaLimit?.split(",")[0]) : "Unlimited",
                        type: K.planType === "PAID" ? "PAID" : K.planType === "AD" ? "AD" : "FREE",
                        "handle-dialog-close": W
                      }, {
                        default: E(() => [
                          r.value ? (N(), re(m(ua), {
                            key: 1,
                            class: "sm:max-w-[425px]",
                            onInteractOutside: fe[1] || (fe[1] = fn(() => {
                            }, ["prevent"])),
                            onFocusOutside: fe[2] || (fe[2] = fn(() => {
                            }, ["prevent"])),
                            onPointerDownOutside: fe[3] || (fe[3] = fn(() => {
                            }, ["prevent"]))
                          }, {
                            default: E(() => [
                              K.planType === "PAID" ? (N(), ue(Oe, { key: 0 }, [
                                s.value ? (N(), ue("div", Cb, [
                                  B(m(wt), { class: "flex flex-col items-start" }, {
                                    default: E(() => [
                                      Sb,
                                      B(m(xt), { class: "flex gap-3 items-center justify-center sm:justify-start text-orange" }, {
                                        default: E(() => [
                                          Ab,
                                          le(" " + Re(a.value === "Purchase successful, please wait as we connect you" ? "Connecting" : "Processing"), 1)
                                        ]),
                                        _: 1
                                      }),
                                      B(m(kt), null, {
                                        default: E(() => [
                                          le(Re(a.value), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  Eb
                                ])) : (N(), ue("div", Ib, [
                                  i.value ? (N(), ue("div", Tb, [
                                    B(m(wt), { class: "flex flex-col items-start" }, {
                                      default: E(() => [
                                        B(m(xt), { class: "text-green flex gap-3 items-center justify-center sm:justify-start" }, {
                                          default: E(() => [
                                            Ob,
                                            le(" Success ")
                                          ]),
                                          _: 1
                                        }),
                                        B(m(kt), null, {
                                          default: E(() => [
                                            le(" Successfully connected ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    V("div", Bb, " Package " + Re(K.name) + " purchased successfully ", 1)
                                  ])) : (N(), ue("div", $b, [
                                    B(m(wt), { class: "flex flex-col items-start" }, {
                                      default: E(() => [
                                        B(m(xt), { class: "text-red flex gap-3 items-center justify-center sm:justify-start" }, {
                                          default: E(() => [
                                            Rb,
                                            le(" Error ")
                                          ]),
                                          _: 1
                                        }),
                                        B(m(kt), null, {
                                          default: E(() => [
                                            le(" An error occured ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    V("div", Db, Re(u.value), 1),
                                    B(m(ln), null, {
                                      default: E(() => [
                                        B(m(Ft), {
                                          variant: "default",
                                          class: "w-full",
                                          onClick: ge
                                        }, {
                                          default: E(() => [
                                            le(" Try Again ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]))
                                ]))
                              ], 64)) : Xe("", !0),
                              K.planType === "FREE TRIAL" ? (N(), ue(Oe, { key: 1 }, [
                                s.value ? (N(), ue("div", Nb, [
                                  B(m(wt), { class: "flex flex-col items-start" }, {
                                    default: E(() => [
                                      Fb,
                                      B(m(xt), { class: "text-orange flex gap-3 items-center justify-center sm:justify-start" }, {
                                        default: E(() => [
                                          Pb,
                                          le(" Connecting ")
                                        ]),
                                        _: 1
                                      }),
                                      B(m(kt), null, {
                                        default: E(() => [
                                          le(" Wait a moment as we connect you to the internet ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])) : (N(), ue("div", Mb, [
                                  i.value ? (N(), ue("div", Ub, [
                                    B(m(wt), { class: "flex flex-col items-start" }, {
                                      default: E(() => [
                                        B(m(xt), { class: "text-green flex gap-3 items-center justify-center sm:justify-start" }, {
                                          default: E(() => [
                                            Lb,
                                            le(" Success ")
                                          ]),
                                          _: 1
                                        }),
                                        B(m(kt), null, {
                                          default: E(() => [
                                            le(" Successfully connected ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    V("div", jb, " Package " + Re(K.name) + " purchased successfully ", 1)
                                  ])) : (N(), ue("div", zb, [
                                    B(m(wt), { class: "flex flex-col items-start" }, {
                                      default: E(() => [
                                        B(m(xt), { class: "text-red flex gap-3 items-center justify-center sm:justify-start" }, {
                                          default: E(() => [
                                            Vb,
                                            le(" Error ")
                                          ]),
                                          _: 1
                                        }),
                                        B(m(kt), null, {
                                          default: E(() => [
                                            le(" An error occured ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    V("div", qb, Re(u.value), 1),
                                    B(m(ln), null, {
                                      default: E(() => [
                                        B(m(Ft), {
                                          variant: "default",
                                          class: "w-full",
                                          onClick: ge
                                        }, {
                                          default: E(() => [
                                            le(" Try Again ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]))
                                ]))
                              ], 64)) : Xe("", !0),
                              K.planType === "AD" ? (N(), ue(Oe, { key: 2 }, [
                                s.value ? (N(), ue("div", Wb, [
                                  B(m(wt), { class: "flex flex-col items-start" }, {
                                    default: E(() => [
                                      Hb,
                                      B(m(xt), { class: "text-orange flex gap-3 items-center justify-center sm:justify-start" }, {
                                        default: E(() => [
                                          Jb,
                                          le(" Connecting ")
                                        ]),
                                        _: 1
                                      }),
                                      B(m(kt), null, {
                                        default: E(() => [
                                          le(" Wait a moment as we connect you to the internet ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])) : (N(), ue("div", Kb, [
                                  i.value ? (N(), ue("div", Gb, [
                                    B(m(wt), { class: "flex flex-col items-start" }, {
                                      default: E(() => [
                                        B(m(xt), { class: "text-green flex gap-3 items-center justify-center sm:justify-start" }, {
                                          default: E(() => [
                                            Qb,
                                            le(" Success ")
                                          ]),
                                          _: 1
                                        }),
                                        B(m(kt), null, {
                                          default: E(() => [
                                            le(" Successfully connected ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    V("div", Yb, " Package " + Re(K.name) + " purchased successfully ", 1)
                                  ])) : (N(), ue("div", Zb, [
                                    B(m(wt), { class: "flex flex-col items-start" }, {
                                      default: E(() => [
                                        B(m(xt), { class: "text-red flex gap-3 items-center justify-center sm:justify-start" }, {
                                          default: E(() => [
                                            Xb,
                                            le(" Error ")
                                          ]),
                                          _: 1
                                        }),
                                        B(m(kt), null, {
                                          default: E(() => [
                                            le(" An error occured ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    V("div", ew, Re(u.value), 1),
                                    B(m(ln), null, {
                                      default: E(() => [
                                        B(m(Ft), {
                                          variant: "default",
                                          class: "w-full",
                                          onClick: ge
                                        }, {
                                          default: E(() => [
                                            le(" Try Again ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]))
                                ]))
                              ], 64)) : Xe("", !0)
                            ]),
                            _: 2
                          }, 1024)) : (N(), re(m(ua), {
                            key: 0,
                            class: qe(["border-none", m(Fe)(c.value ? "p-0 w-100dvw h-full" : "sm:max-w-[425px]", K.planType === "AD" ? "p-0 h-[100dvh] max-h-100dvh" : "max-h-90dvh")])
                          }, {
                            default: E(() => [
                              K.planType === "PAID" ? (N(), ue(Oe, { key: 0 }, [
                                B(m(wt), { class: "flex flex-col items-start" }, {
                                  default: E(() => [
                                    B(m(xt), null, {
                                      default: E(() => [
                                        le("Buy Package")
                                      ]),
                                      _: 1
                                    }),
                                    B(m(kt), null, {
                                      default: E(() => [
                                        le(" Buy the " + Re(X(K.validity)) + " package for " + Re(K.sharedUsers) + " devices for " + Re(K.price) + " " + Re(d.value.currency !== null ? d.value.currency : "KES"), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                h.value.length === 0 ? (N(), ue("div", jy, " No payment option set up for this organization ")) : (N(), re(m(Cy), {
                                  key: 1,
                                  "default-value": h.value[0] === "kpay_momo" || h.value[0] === "mtn" ? "mtn" : h.value[0] === "kpay_card" ? "card" : h.value[0]
                                }, {
                                  default: E(() => [
                                    B(m(Ay), {
                                      class: qe(["grid w-full h-fit sm:rounded-b-sm rounded-[0px] z-1", m(Fe)(`grid-cols-${h.value.length}`)])
                                    }, {
                                      default: E(() => [
                                        (N(!0), ue(Oe, null, ka(h.value, (we, ke) => (N(), re(m(Sy), {
                                          key: ke,
                                          class: "w-full",
                                          value: we === "kpay_momo" || we === "mtn" ? "mtn" : we === "kpay_card" ? "card" : we
                                        }, {
                                          default: E(() => [
                                            V("span", zy, Re(we === "kpay_momo" || we === "mtn" ? "momo" : we === "kpay_card" ? "card" : we === "kpay_airtel" ? "airtel" : we), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]))), 128))
                                      ]),
                                      _: 1
                                    }, 8, ["class"]),
                                    B(m(ga), { value: "mpesa" }, {
                                      default: E(() => [
                                        V("form", { onsubmit: ee }, [
                                          V("div", Vy, [
                                            V("div", qy, [
                                              V("div", Wy, [
                                                B(m(va), { for: "phone" }, {
                                                  default: E(() => [
                                                    le(" Phone ")
                                                  ]),
                                                  _: 1
                                                }),
                                                Hy
                                              ]),
                                              V("input", {
                                                type: "hidden",
                                                name: "package",
                                                value: K.id
                                              }, null, 8, Jy),
                                              V("input", {
                                                type: "hidden",
                                                name: "package_name",
                                                value: K.name
                                              }, null, 8, Ky),
                                              V("input", {
                                                type: "hidden",
                                                name: "amount",
                                                value: K.price
                                              }, null, 8, Gy),
                                              Qy
                                            ])
                                          ]),
                                          B(m(ln), null, {
                                            default: E(() => [
                                              B(m(Ft), {
                                                type: "submit",
                                                class: "w-full",
                                                disabled: n.value
                                              }, {
                                                default: E(() => [
                                                  le(" Pay ")
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
                                    B(m(ga), { value: "mtn" }, {
                                      default: E(() => [
                                        V("form", { onsubmit: ee }, [
                                          V("div", Yy, [
                                            V("div", Zy, [
                                              B(m(va), {
                                                for: "phone",
                                                class: "flex flex-col gap-2"
                                              }, {
                                                default: E(() => [
                                                  le(" Phone "),
                                                  V("div", Xy, [
                                                    eb,
                                                    B(m(Nu), {
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
                                                value: K.id
                                              }, null, 8, tb),
                                              V("input", {
                                                type: "hidden",
                                                name: "package_name",
                                                value: K.name
                                              }, null, 8, nb),
                                              V("input", {
                                                type: "hidden",
                                                name: "amount",
                                                value: K.price
                                              }, null, 8, ob),
                                              rb
                                            ])
                                          ]),
                                          B(m(ln), null, {
                                            default: E(() => [
                                              B(m(Ft), {
                                                type: "submit",
                                                class: "w-full",
                                                disabled: n.value
                                              }, {
                                                default: E(() => [
                                                  le(" Pay ")
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
                                    B(m(ga), { value: "card" }, {
                                      default: E(() => [
                                        V("form", { onsubmit: ee }, [
                                          V("div", sb, [
                                            V("div", ab, [
                                              V("input", {
                                                type: "hidden",
                                                name: "package",
                                                value: K.id
                                              }, null, 8, ib),
                                              V("input", {
                                                type: "hidden",
                                                name: "package_name",
                                                value: K.name
                                              }, null, 8, lb),
                                              V("input", {
                                                type: "hidden",
                                                name: "amount",
                                                value: K.price
                                              }, null, 8, ub),
                                              cb
                                            ])
                                          ]),
                                          B(m(ln), null, {
                                            default: E(() => [
                                              B(m(Ft), {
                                                type: "submit",
                                                class: "w-full bg-blue-500",
                                                disabled: n.value
                                              }, {
                                                default: E(() => [
                                                  le(" Checkout ")
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
                              ], 64)) : Xe("", !0),
                              K.planType === "AD" ? (N(), ue("div", db, [
                                B(Ig, {
                                  modelValue: o.value,
                                  "onUpdate:modelValue": fe[0] || (fe[0] = (we) => o.value = we),
                                  "video-url": Zt(K.id, K.mediaUrls).replace("autoplay=true", "autoplay=false")
                                }, null, 8, ["modelValue", "video-url"]),
                                V("form", {
                                  class: "absolute bottom-20px w-full p-4",
                                  onsubmit: ee
                                }, [
                                  V("div", pb, [
                                    V("div", fb, [
                                      V("input", {
                                        type: "hidden",
                                        name: "package",
                                        value: K.id
                                      }, null, 8, hb),
                                      V("input", {
                                        type: "hidden",
                                        name: "package_name",
                                        value: K.name
                                      }, null, 8, mb),
                                      V("input", {
                                        type: "hidden",
                                        name: "amount",
                                        value: K.price
                                      }, null, 8, vb),
                                      gb
                                    ])
                                  ]),
                                  B(m(ln), null, {
                                    default: E(() => [
                                      B(m(Ft), {
                                        type: "submit",
                                        class: "w-full bg-primary",
                                        disabled: o.value
                                      }, {
                                        default: E(() => [
                                          le(" Connect ")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled"])
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])) : Xe("", !0),
                              K.planType === "FREE TRIAL" ? (N(), ue(Oe, { key: 2 }, [
                                B(m(wt), { class: "flex flex-col items-start" }, {
                                  default: E(() => [
                                    B(m(xt), null, {
                                      default: E(() => [
                                        le("Free Plan")
                                      ]),
                                      _: 1
                                    }),
                                    B(m(kt), null, {
                                      default: E(() => [
                                        le(" Connect to the " + Re(X(K.validity)) + " package for " + Re(K.sharedUsers) + " devices ", 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                V("form", { onsubmit: ee }, [
                                  V("div", yb, [
                                    V("div", bb, [
                                      V("input", {
                                        type: "hidden",
                                        name: "package",
                                        value: K.id
                                      }, null, 8, wb),
                                      V("input", {
                                        type: "hidden",
                                        name: "package_name",
                                        value: K.name
                                      }, null, 8, xb),
                                      V("input", {
                                        type: "hidden",
                                        name: "amount",
                                        value: K.price
                                      }, null, 8, kb),
                                      _b
                                    ])
                                  ]),
                                  B(m(ln), null, {
                                    default: E(() => [
                                      B(m(Ft), {
                                        type: "submit",
                                        class: "w-full bg-blue-500",
                                        disabled: n.value
                                      }, {
                                        default: E(() => [
                                          le(" Connect ")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled"])
                                    ]),
                                    _: 1
                                  })
                                ])
                              ], 64)) : Xe("", !0)
                            ]),
                            _: 2
                          }, 1032, ["class"]))
                        ]),
                        _: 2
                      }, 1032, ["id", "name", "duration", "devices", "price", "currency", "quota", "type"]))), 128))
                    ]),
                    B(m(dy), null, {
                      default: E(() => [
                        B(m(Qg), null, {
                          default: E(() => [
                            B(m(Ft), { class: "w-full" }, {
                              default: E(() => [
                                le(" Close ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            B(m(Ey), {
              class: "my-4 bg-border text-foreground",
              label: "Or"
            }),
            B(m(yy), { class: "w-full" }, {
              default: E(() => [
                B(m(by), null, {
                  default: E(() => [
                    B(m(wy), null, {
                      default: E(() => [
                        le("Enter Voucher")
                      ]),
                      _: 1
                    }),
                    B(m(xy), null, {
                      default: E(() => [
                        le(" Connect to the internet using a voucher. ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                V("form", { onSubmit: F }, [
                  B(m(ky), { class: "space-y-2" }, {
                    default: E(() => [
                      B(m(va), {
                        for: "voucher",
                        class: "space-y-1"
                      }, {
                        default: E(() => [
                          le(" Voucher "),
                          B(m(Nu), {
                            id: "voucher",
                            modelValue: v.value,
                            "onUpdate:modelValue": fe[4] || (fe[4] = (K) => v.value = K),
                            type: "text",
                            class: "uppercase"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  B(m(_y), null, {
                    default: E(() => [
                      B(m(Ft), {
                        type: "submit",
                        class: "w-full",
                        disabled: y.value
                      }, {
                        default: E(() => [
                          le(Re(y.value ? "Connecting..." : "Connect"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  })
                ], 32)
              ]),
              _: 1
            }),
            B(m(yp), {
              open: y.value || x.value || w.value,
              "onUpdate:open": fe[8] || (fe[8] = (K) => !K && A())
            }, {
              default: E(() => [
                B(m(ua), {
                  class: "sm:max-w-[425px]",
                  onInteractOutside: fe[5] || (fe[5] = fn(() => {
                  }, ["prevent"])),
                  onFocusOutside: fe[6] || (fe[6] = fn(() => {
                  }, ["prevent"])),
                  onPointerDownOutside: fe[7] || (fe[7] = fn(() => {
                  }, ["prevent"]))
                }, {
                  default: E(() => [
                    y.value ? (N(), ue("div", tw, [
                      B(m(wt), { class: "flex flex-col items-start" }, {
                        default: E(() => [
                          nw,
                          B(m(xt), { class: "text-orange flex gap-3 items-center justify-center sm:justify-start" }, {
                            default: E(() => [
                              ow,
                              le(" Connecting ")
                            ]),
                            _: 1
                          }),
                          B(m(kt), null, {
                            default: E(() => [
                              le(" Validating voucher and connecting you to the internet ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])) : x.value ? (N(), ue("div", rw, [
                      B(m(wt), { class: "flex flex-col items-start" }, {
                        default: E(() => [
                          B(m(xt), { class: "text-green flex gap-3 items-center justify-center sm:justify-start" }, {
                            default: E(() => [
                              sw,
                              le(" Success ")
                            ]),
                            _: 1
                          }),
                          B(m(kt), null, {
                            default: E(() => [
                              le(" Successfully connected ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      aw
                    ])) : w.value ? (N(), ue("div", iw, [
                      B(m(wt), { class: "flex flex-col items-start" }, {
                        default: E(() => [
                          B(m(xt), { class: "text-red flex gap-3 items-center justify-center sm:justify-start" }, {
                            default: E(() => [
                              lw,
                              le(" Error ")
                            ]),
                            _: 1
                          }),
                          B(m(kt), null, {
                            default: E(() => [
                              le(" An error occurred ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      V("div", uw, Re(I.value), 1),
                      B(m(ln), null, {
                        default: E(() => [
                          B(m(Ft), {
                            variant: "default",
                            class: "w-full",
                            onClick: A
                          }, {
                            default: E(() => [
                              le(" Try Again ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])) : Xe("", !0)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])
          ]),
          cw
        ])
      ])
    ])) : Xe("", !0);
  }
}), pw = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, fw = /* @__PURE__ */ pw(dw, [["__scopeId", "data-v-56540ed3"]]), hw = /* @__PURE__ */ Oi({ ...fw, styles: [Hm] });
function mw() {
  typeof window > "u" || customElements.define("hotspot-standard", hw);
}
function vw(e) {
  const t = e.id ? document.getElementById(e.id) : document.querySelector("hotspot-standard");
  if (!t)
    throw new Error("<hotspot-standard> element not found.");
  Object.assign(t, e);
}
function gw() {
  return {
    initHotspot: vw
  };
}
function yw(e) {
  typeof window > "u" || (window.Hotspot = { ...e });
}
mw();
const bw = gw();
yw(bw);
export {
  bw as default
};
//# sourceMappingURL=web.js.map
