const load = () => {
    const loadQueue = [];

    const banners = [];
    const customBanners = [];
    const badges = [];
    const customBadges = [];
    const watermarks = [];

    const lang = {}

    const loadedLanguage = () => {
        // Languages here include a space between the titles
        const isSpaceLang = () => {
            return ['USen','EUnl','USfr','EUfr','EUde','EUit','EUru','USes','EUes', 'KRko'].indexOf(language) !== -1;
        }

        const langRegex = /\?lang=(\w{4})/;
        const language = location.search && langRegex.test(location.search) ? langRegex.exec(location.search)[1] : 'USen';
        if (Object.keys(lang).indexOf(language) === -1) {
            language = 'USen';
        }
        document.body.setAttribute('lang', language);

        if (['USfr','EUfr','EUit','USes','EUes'].indexOf(language) !== -1) {
            const tempTitles = lang[language].titles.first;
            lang[language].titles.first = lang[language].titles.last;
            lang[language].titles.last = tempTitles;
        }

        // Replaces all of the UI element text with their appropriate language
        Object.keys(lang[language].ui).forEach(element => {
            document.querySelectorAll(`[name="${element}"]`).forEach(e => {
                if (element.startsWith('tab') || element.startsWith('button')) {
                    e.value = lang[language].ui[element];
                } else if (element.startsWith('text')) {
                    e.textContent = lang[language].ui[element];
                }
            });
        });

        const languageSelector = document.querySelector('#lang');
        Object.keys(lang).forEach(l => {
            if (languageSelector) {
                const option = document.createElement('option');
                option.textContent = lang[l].name;
                option.value = l;
                if (language === l) {
                    option.defaultSelected = true;
                }
                languageSelector.appendChild(option);
            }
        });
        languageSelector.addEventListener('change', () => {
            location = location.origin + location.pathname + `?lang=${languageSelector.value}`;
        });

        if (navigator.userAgent.toLowerCase().includes('chrome')) {
            document.body.classList.add('chrome');
        }
        
        const tag = {
            name: 'Player',
            title: {
                first: 0,
                last: 0,
                string: 'Splatlandian Youth',
                toString: () => {
                    const chosentitles = [];
                    if (tag.isCustom) chosentitles.push(tag.title.string);
                    else {
                        if (tag.title.first) chosentitles.push(lang[language].titles.first[tag.title.first]);
                        if (tag.title.last) chosentitles.push(lang[language].titles.last[tag.title.last]);
                    }
                    if (chosentitles[0])
                        return chosentitles.join(isSpaceLang(language) ? (!(chosentitles[0]?.endsWith('-') || chosentitles[1]?.startsWith('-')) ? ' ' : '') : '');
                    else
                        return '';
                }
            },
            banner: 0,
            id: lang[language].sign + '0001',
            badges: [ -1, -1, -1 ],
            colour: '#ffffff',
            bgColours: ['#fff', '#f00', '#0f0', '#00f'],
            isCustom: false,
        }
        
        const waitUntil = (fn, length) => {
            const interval = setInterval(() => {
                if (fn()) clearInterval(interval);
            }, length ? length*1000 : 500);
        }

        const clickRegions = document.querySelector('#clickRegions').querySelectorAll('div');

        const canvas = document.querySelector('#splashtag');
        const ctx = canvas.getContext('2d');
        const downloadlink = document.querySelector('#downloadlink');
        const downloadbutton = document.querySelector('#downloadbutton');

        const canvasLayer = document.createElement('canvas');
        canvasLayer.width = 700;
        canvasLayer.height = 200;
        const layerCtx = canvasLayer.getContext('2d');

        const compositeCanvas = document.createElement('canvas');
        compositeCanvas.width = 700;
        compositeCanvas.height = 200;
        const compositeCtx = compositeCanvas.getContext('2d');

        const textScale = 2;
        const textCanvas = document.createElement('canvas');
        textCanvas.width = 700*textScale;
        textCanvas.height = 200*textScale;
        const textCtx = textCanvas.getContext('2d');
        textCtx.scale(textScale, textScale);

        const textFont = `Splat-text${lang[language].font?','+lang[language].font[0]:''}`;
        const titleFont = `Splat-title${lang[language].font?','+lang[language].font[1]:''}`;

        // please dont use this unless you receive permission :(
        let forceDisableWatermark = false;

        let cooldown = 0;
        // prevent the canvas from redrawing too quickly
        setInterval(() => {
            if (cooldown) cooldown--;
        });

        const getXScale = (width, max) => {
            return width > max ? (max) / width : 1;
        }
        
        const renderSplashtag = () => {
            textCtx.clearRect(0, 0, 700, 200);
            ctx.clearRect(0, 0, 700, 200);

            if (!banners[tag.banner].layers) {
                // If not one of the special "pick your own colour" banners, just draw it
                ctx.drawImage(banners[tag.banner].image, 0, 0, 700, 200);
            } else {
                // Special custom colour banners draw each layer then are added
                const imageLayers = banners[tag.banner].layerImages;
                for (let i = 0; i < imageLayers.length; i++) {
                    compositeCtx.clearRect(0, 0, 700, 200);
                    compositeCtx.save();
                    compositeCtx.fillStyle = tag.bgColours[!i ? i : imageLayers.length - i];
                    compositeCtx.drawImage(imageLayers[i], 0, 0, 700, 200);
                    compositeCtx.globalCompositeOperation = 'difference';
                    compositeCtx.fillRect(0, 0, 700, 200);
                    compositeCtx.restore();

                    layerCtx.save();
                    layerCtx.drawImage(imageLayers[i], 0, 0, 700, 200);
                    layerCtx.globalCompositeOperation = 'source-in';
                    layerCtx.drawImage(compositeCanvas, 0, 0, 700, 200);
                    layerCtx.restore();
                    ctx.drawImage(canvasLayer, 0, 0);
                    layerCtx.clearRect(0, 0, 700, 200);
                }
            }

            // Set text colour
            textCtx.fillStyle = (tag.colour);

            // Write titles
            textCtx.textAlign = 'left';
            if (tag.title.toString()) {
                textCtx.save();
                textCtx.font = `36px ${textFont}`;
                textCtx.letterSpacing = "-0.3px";
                const textWidth = textCtx.measureText(tag.title.toString()).width;
                const xScale = getXScale(textWidth, 700-32);

                if (tag.isCustom) {
                    clickRegions[0].style = `--x1: 15px; --y1: 5px; --x2: ${xScale < 1 ? 685 : Math.round(textWidth + 15)}px; --y2: 50px;`;
                    clickRegions[1].style = `display: none;`;
                } else {
                    const firstTitle = lang[language].titles.first[tag.title.first];
                    const lastTitle = lang[language].titles.last[tag.title.last];
                    const firstwidth = (textCtx.measureText(firstTitle).width + 15) * xScale;

                    const gapSize = textCtx.measureText(isSpaceLang(language) ? (!(firstTitle?.endsWith('-') || lastTitle?.startsWith('-')) ? ' ' : '') : '').width * xScale;

                    clickRegions[tag.title.first ? 0 : 1].style = `--x1: 15px; --y1: 5px; --x2: ${firstwidth}px; --y2: 50px;`;
                    if (tag.title.first) {
                        clickRegions[1].style = tag.title.last ? `--x1: ${firstwidth + gapSize}px; --y1: 5px; --x2: ${xScale < 1 ? 685 : Math.round(textWidth + 15)}px; --y2: 50px;` : 'display: none;';
                    } else {
                        clickRegions[0].style = `display: none;`;
                    }
                }

                // in game italic value is 0.12
                textCtx.transform(1, 0, -7.5/100, 1, 0, 0);
                textCtx.scale(xScale, 1);
                textCtx.fillText(tag.title.toString(), 18 / xScale, 42);
                textCtx.restore();
                textCtx.letterSpacing = "0px";
            } else {
                clickRegions[0].style = `display: none;`;
                clickRegions[1].style = `display: none;`;
            }

            // Write tag text (if not empty)
            if (tag.id.length) {
                textCtx.save();
                textCtx.font = `24px ${textFont}`;
                textCtx.letterSpacing = "0.2px";

                // tag text should adjust to the leftmost badge position.
                const leftBadge = tag.badges.indexOf(tag.badges.find(b => b !== -1));
                const maxX = (leftBadge === -1 ? 700 : 480 + 74*leftBadge) - 48;
                const textWidth = textCtx.measureText(tag.id).width;
                const xScale = getXScale(textWidth, maxX);
                clickRegions[3].style = `--x1: 25px; --y1: 165px; --x2: ${(xScale < 1 ? maxX : Math.round(textWidth)) + 25}px; --y2: 185px;`;

                textCtx.scale(xScale, 1);
                textCtx.fillText('' + tag.id, 24 / xScale, 185);
                textCtx.restore();
            } else {
                clickRegions[3].style = 'display: none;';
            }

            // Write player name
            if (tag.name.length) {
                textCtx.save();
                textCtx.font = `66px ${titleFont}`;
                textCtx.letterSpacing = "-0.4px";
                const textWidth = textCtx.measureText(tag.name).width;
                const xScale = getXScale(textWidth, 700-32);

                const x1 = 700/2-1.5 - Math.round(textWidth / 2);
                clickRegions[2].style = `--x1: ${xScale < 1 ? 15 : Math.round(700/2-1.5 - textWidth/2)}px; --y1: 70px; --x2: ${xScale < 1 ? 685 : Math.round(x1 + textWidth)}px; --y2: 120px;`;
                
                textCtx.textAlign = 'center';
                textCtx.scale(xScale, 1);
                textCtx.fillText(tag.name, (700/2-1.5) / xScale, 119);

                textCtx.restore();
            } else {
                clickRegions[2].style = 'display: none;';
            }
            
            ctx.drawImage(textCanvas, 0, 0, 700, 200);
            textCtx.clearRect(0, 0, 700, 200);

            // If the banner name or badge has either "custom" or "data" it is definitely a custom resource
            let customed = banners[tag.banner].custom || false;

            // Draw each badge on the banner
            for (let i = 0; i < 3; i++) {
                if (tag.badges[i] !== -1) {
                    const x = 480 + 74*i;

                    clickRegions[4 + i].style = `--x1: ${x}px; --y1: 128px; --x2: ${x+70}px; --y2: ${128+70}px;`;

                    // Below used to resize custom badges to retain their scale.
                    if (badges[tag.badges[i]].custom) {
                        customed = true;
                        const cw = badges[tag.badges[i]].image.naturalWidth;
                        const ch = badges[tag.badges[i]].image.naturalHeight;
                        const landscape = cw > ch;
                        const ratio = !landscape ? (cw / ch) : (ch / cw);
                        const width = landscape ? 70 : 70*ratio;
                        const height = !landscape ? 70 : 70*ratio;
                        ctx.drawImage(badges[tag.badges[i]].image, x + (70 / 2 - width / 2), 128 + (70 / 2 - height / 2), width, height);
                    } else {
                        ctx.drawImage(badges[tag.badges[i]].image, x, 128, 70, 70);
                    }
                } else {
                    clickRegions[4 + i].style = `display: none;`;
                }
            }

            // draw small watermark if using custom artist assets
            if (!forceDisableWatermark && customed) {
                const wm = {
                    offset: {
                        x: 10,
                        y: 5
                    },
                    textoffset: 10,
                    width: 40,
                    height: 40,
                }

                textCtx.font = `14px ${textFont}`;
                textCtx.textAlign = 'center';
                textCtx.fillStyle = '#ffffff';
                const wmX = 700 - wm.width - wm.offset.x;
                const textPos = {
                    x: 700 - wm.offset.x - wm.width/2,
                    y: wm.offset.y + wm.height + wm.textoffset
                }

                /** Artist watermark system is as follows:
                 * If a tag features regular custom assets (made by me), the mark will be default with the text "custom" <-- not true anymore
                 * If a tag features art from only ONE artist, that artist's mark will be shown with their name
                 * If a tag features art from MULTIPLE artists, then the default mark will be shown, with all of the names below
                */ 

                const artists = [
                    {
                        dir: '/deadline/',
                        name: 'DeadLine',
                        offset: 0
                    },
                    {
                        dir: '/electrodev/',
                        name: 'Electro',
                        offset: 0
                    },
                    {
                        dir: '/bands/',
                        name: 'Zeeto',
                        offset: 0
                    },
                    {
                        dir: '/sharkino/',
                        name: 'Sharkino',
                        offset: 0
                    },
                ];

                const featured = [];
                artists.forEach(a => {
                    let i = artists.indexOf(a);
                    if (banners[tag.banner].file.includes(a.dir)) {
                        if (featured.indexOf(i) === -1) {
                            featured.push(i);
                        }
                    }
                
                    tag.badges.forEach(b => {
                        if (b !== -1) {
                            if (badges[b].file.includes(a.dir)) {
                                if (featured.indexOf(i) === -1) {
                                    featured.push(i);
                                }
                            }
                        }
                    });
                });

                featured.sort();

                if (featured.length === 1) {
                    const a = artists[featured[0]];
                    textCtx.drawImage(watermarks[featured[0]+1], wmX - a.offset, wm.offset.y, wm.width, wm.height);
                    textCtx.fillText(a.name, textPos.x - a.offset, textPos.y);
                } else if (featured.length > 1) {
                    textCtx.drawImage(watermarks[0], wmX, wm.offset.y, wm.width, wm.height);
                    let i = 0;
                    featured.forEach(f => {
                        const a = artists[f];
                        textCtx.fillText(a.name, textPos.x - a.offset, textPos.y + 14*(i++));
                    });
                }

                textCtx.fillStyle = tag.colour;
                textCtx.globalCompositeOperation = 'source-in';
                textCtx.fillRect(0, 0, 700, 200);
                textCtx.globalCompositeOperation = 'source-over';
            }

            ctx.save();
            ctx.globalAlpha = 0.2;
            ctx.drawImage(textCanvas, 0, 0, 700, 200);
            ctx.restore();

            // Disables download button if testing locally
            if (!location.href.startsWith('file')) {
                downloadlink.href = canvas.toDataURL();
                downloadbutton.removeAttribute('disabled');
            }
        }

        window.toggleWatermark = (self) => {
            forceDisableWatermark = !forceDisableWatermark;
            self.style = '';
            renderSplashtag();
        }

        customBanners.forEach(item => {
            banners.push(item);
        });
        customBadges.forEach(item => {
            badges.push(item);
        });

        // Loading queue for each item (so they do not need to load when selecting banners or badges)
        const watermarkSrcs = ['custom', 'deadline', 'electrodev', 'zeeto', 'sharkinodraws'];
        watermarkSrcs.forEach(wm => {
            const img = new Image();
            img.src = `./assets/images/watermarks/${wm}.png`;
            watermarks.push(img);
        });

        // Inputs =)
        const nameinput = document.querySelector('#nameinput');
        const taginput = document.querySelector('#taginput');
        const titleinput1 = document.querySelector('#titleinput1');
        const titleinput2 = document.querySelector('#titleinput2');

        // randoms
        const randomtitles = document.querySelector('#randomtitle');
        const randomtitle1 = document.querySelector('#randomtitle1');
        const randomtitle2 = document.querySelector('#randomtitle2');
        const randombanner = document.querySelector('#randombanner');
        const randombadge = document.querySelector('#randombadge');
        const randomall = document.querySelector('#randomall');

        // customs
        const customcheck = document.querySelector('#customcheck');
        const customtitle = document.querySelector('#customtitle');
        const custombanner = document.querySelector('#custombanner');
        const custombadges = document.querySelector('#custombadge');
        const customcolour = document.querySelector('#customcolour');

        const bannercolour = document.querySelector('#bannercolours');
        const bannercolourpickers = [...bannercolour.querySelectorAll('input')];

        // section select menus
        const bannersection = document.querySelector('#bannersection');
        const badgesection = document.querySelector('#badgesection');

        customtitle.value = lang[language].default.join(isSpaceLang(language) ? ((!lang[language].default[0].endsWith('-')) ? ' ' : '') : '');
        customtitle.placeholder = customtitle.value;
        tag.title.string = customtitle.value;
        taginput.value = tag.id;
        

        const tabContainer = document.querySelector('.tabcontainer');
        const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tabcontent');
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', () => {
                tabs.forEach(t => {
                    t.classList.remove('selected');
                });
                tabContents.forEach(t => {
                    t.classList.add('hidden');
                });
                tabs[i].classList.add('selected');
                tabContents[i].classList.remove('hidden');
            });
        }

        // Sort the titles, and insert the "No Title" option at the start
        lang[language].titles.first.sort();
        lang[language].titles.last.sort();

        lang[language].titles.first.unshift(lang[language].titles.empty);
        lang[language].titles.last.unshift(lang[language].titles.empty);

        // Set defaults for inputs
        const defaultBannerIndex = banners.findIndex(a => !a.name && a.file.includes('Tutorial'));
        tag.banner = defaultBannerIndex;
        tag.title.first = lang[language].titles.first.indexOf(lang[language].default[0]);
        tag.title.last = lang[language].titles.last.indexOf(lang[language].default[1]);

        const bannerContainer = document.querySelector('#bannercontainer');
        
        bannersection.addEventListener('change', () => {
            bannerContainer.querySelector('#' + bannersection.value).scrollIntoView();
        });

        const newCategory = () => {
            const cat = document.createElement('div');
            cat.className = 'category collapsible';
            return cat;
        }
        let currentCategory;

        const bannerClickEvent = (item) => {
            const newBanner = banners.findIndex(b => b.file === item.file);
            // clear and move selected
            document.querySelectorAll('#bannercontainer img.selected').forEach(s => {
                s.classList.remove('selected');
            });
            if (tag.banner !== newBanner) {
                tag.banner = newBanner;
                item.image.classList.add('selected');
                tag.colour = customcolour.value = '#' + banners[tag.banner].colour;
                bannercolour.dataset.layers = item.layers || 0;
            } else {
                banners[defaultBannerIndex].image.click();
            }
            renderSplashtag();
        }

        const customAsterisk = () => {
            const txt = document.createElement('span');
            txt.textContent = '*';
            txt.title = lang[language].ui.textCustom;
            return txt;
        }

        const padding = () => {
            const filler = document.createElement('div');
            filler.className = 'pad';
            return filler;
        }

        const addImageElement = (item, type) => {
            const isBanner = type === 'banners';
            const container = isBanner ? bannerContainer : badgeContainer;
            const section = isBanner ? bannersection : badgesection;
            const clickEvent = isBanner ? bannerClickEvent : badgeClickEvent;
            if (item.name) {
                currentCategory = newCategory();

                const isCustom = item.id.endsWith('custom');
                const sectionTitle = document.createElement('div');
                sectionTitle.textContent = lang[language].sections[item.name]
                sectionTitle.id = item.id;
                sectionTitle.className = 'category-title' + (isCustom && (isBanner && !item.name.includes("band") || !isBanner) ? ' collapsed' : '');
                if (isCustom) sectionTitle.appendChild(customAsterisk());
                container.appendChild(sectionTitle);

                sectionTitle.addEventListener('click', () => {
                    if (sectionTitle.classList.contains('collapsed')) {
                        sectionTitle.classList.remove('collapsed');
                    } else {
                        sectionTitle.classList.add('collapsed');
                    }
                });

                container.appendChild(currentCategory);

                // add to select dropdown
                const option = document.createElement('option');
                option.textContent = lang[language].sections[item.name] + (isCustom ? '*' : '');
                option.value = item.id;
                section.appendChild(option);
                return;
            }
            loadQueue.push(undefined);
            const img = new Image();
            img.src = item.file;
            item.image = img;
            img.onload = () => {
                if (isBanner && item.file.includes('Tutorial')) renderSplashtag();
                loadQueue.pop();
            }

            if (item.layers) {
                item.layerImages = [];
                for (let i = 0; i < item.layers; i++) {
                    const layer = new Image();
                    layer.src = item.file.replace('preview', i+1);
                    item.layerImages.push(layer);
                }
            }

            img.setAttribute('draggable', 'false');
            img.addEventListener('click', () => {
                clickEvent(item);
            });

            if (isBanner && item.file.includes('Tutorial')) {
                img.classList.add('selected');
            }

            currentCategory.appendChild(img);
        }

        // Add options for select menus
        banners.forEach(item => {
            addImageElement(item, 'banners');
        });

        bannerContainer.appendChild(padding());

        const badgeContainer = document.querySelector('#badgecontainer');
        const badgeRadios = document.querySelectorAll('input[name="badgenum"]');

        badgeRadios.forEach(r => {
            r.addEventListener('change', () => {
                let slot = [...badgeRadios].findIndex(ra => ra.checked);
                document.querySelectorAll('#badgecontainer img.selected, #badgecontainer img.other').forEach(s => {
                    s.className = '';
                });
                for (let i = 0; i < 3; i++) {
                    if (tag.badges[i] < 0) continue;
                    badgeContainer.querySelectorAll('img, .category-title')[tag.badges[i]].className = i === slot ? 'selected' : 'other';
                }
            });
        });

        const badgeClickEvent = (item) => {
            const slot = [...badgeRadios].findIndex(r => r.checked);
            let currentBadge = tag.badges[slot];
            let newBadge = badges.findIndex(b => b === item);
            
            // if badge is in other slot, remove the old one
            if (tag.badges.indexOf(newBadge) !== -1) {
                tag.badges[tag.badges.indexOf(newBadge)] = -1;
                badgeContainer.querySelectorAll('img, .category-title')[newBadge].className = '';
            }

            if (newBadge == currentBadge) {
                tag.badges[slot] = -1;
            } else {
                tag.badges[slot] = newBadge;
            }

            document.querySelectorAll('#badgecontainer img.selected, #badgecontainer img.other').forEach(s => {
                s.classList.remove('selected');
            });
            if (tag.badges[slot] !== -1) {
                item.image.className = 'selected';
            }

            renderSplashtag();
        }

        badges.forEach(item => {
            addImageElement(item, 'badges');
        });

        badgeContainer.appendChild(padding());

        lang[language].titles.first.forEach(item => {
            const option = document.createElement('option');
            option.textContent = item;
            if (item === lang[language].default[0]) {
                option.defaultSelected = true;
            }
            titleinput1.appendChild(option);
        });

        lang[language].titles.last.forEach(item => {
            const option = document.createElement('option');
            option.textContent = item;
            if (item === lang[language].default[1]) {
                option.defaultSelected = true;
            }
            titleinput2.appendChild(option);
        });
        
        const inputheight = nameinput.getBoundingClientRect().height;
        titleinput1.style.height = `${inputheight}px`;
        titleinput2.style.height = `${inputheight}px`;

        // credits toggle
        const main = document.querySelector('#main');
        const main2 = document.querySelector('#main2');
        const credits = document.querySelector('#showcredits > a');
        const creditsX = document.querySelector('#creditsX');

        // custom uploaded
        const customBannerCategory = document.querySelector('#banner-uploaded-custom');
        const customBadgeCategory = document.querySelector('#badge-upload-custom');

        const randIndex = (array) => {
            return Math.floor(Math.random() * array.length);
        }

        const uploadFile = (type) => {
            const isBanner = type === 'banners';
            const uploadElement = isBanner ? custombanner : custombadges;
            const customCategory = isBanner ? customBannerCategory : customBadgeCategory;
            const clickEvent = isBanner ? bannerClickEvent : badgeClickEvent;
            const group = isBanner ? banners : badges;

            Array.from(uploadElement.files).forEach(file => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const image = new Image();
                    image.src = e.target.result;
                    const index = group.findIndex(b => b.file === image.src);
                    if (index === -1) {
                        image.draggable = false;
                        const item = { file: image.src, image: image, custom: true };
                        if (isBanner) item.colour = 'ffffff';
                        group.push(item);
                        customCategory.nextElementSibling.appendChild(image);
                        image.addEventListener('click', () => {
                            clickEvent(item);
                        });
                        setTimeout(() => {
                            customCategory.classList.remove('collapsed');
                            image.click();
                            image.scrollIntoView();
                            renderSplashtag();
                        }, 1);
                    }
                }
                reader.readAsDataURL(file);
            });
        }

        const events = [
            // Random title button (both)
            {
                elm: randomtitles,
                run: () => {
                    getEvent(randomtitle1).run();
                    getEvent(randomtitle2).run();
                }
            },
            // Random title button (1)
            {
                elm: randomtitle1,
                run: () => {
                    const title1 = randIndex(lang[language].titles.first);
                    titleinput1.selectedIndex = title1;
                    tag.title.first = title1;

                    tag.title.string = tag.title.toString();
                    customtitle.value = tag.title.string;
                }
            },
            // Random title button (2)
            {
                elm: randomtitle2,
                run: () => {
                    const title2 = randIndex(lang[language].titles.last);
                    titleinput2.selectedIndex = title2;
                    tag.title.last = title2;

                    tag.title.string = tag.title.toString();
                    customtitle.value = tag.title.string;
                }
            },
            // Random banner
            {
                elm: randombanner,
                run: () => {
                    let banner = 0;
                    banner = randIndex(banners.filter(b => b.file && (tag.isCustom || !b.custom)));
                    bannerContainer.querySelectorAll('img')[banner].click();
                }
            },
            // Random badges
            {
                elm: randombadge,
                run: () => {
                    let badgeList = [];

                    badgeList = badges.filter(b => !b.name && (tag.isCustom || !b.custom));

                    for (let i = 0; i < 3; i++) {
                        badgeRadios[i].click();

                        const selectedBadge = randIndex([0, ...badgeList]);
                        if (selectedBadge) {
                            badgeList[selectedBadge - 1].image.click();
                        } else {
                            tag.badges[i] = -1;
                        }
                    }
                    badgeRadios[0].click();
                }
            },
            // All random
            {
                elm: randomall,
                run: () => {
                    getEvent(randomtitles).run();
                    getEvent(randombanner).run();
                    getEvent(randombadge).run();
                }
            },
            // Credits button
            {
                elm: credits,
                run: () => {
                    const temp = credits.textContent;
                    credits.textContent = credits.dataset.alt;
                    credits.dataset.alt = temp;

                    //toggle visibility
                    main.className = !temp.includes('Show') ? '' : 'flipped';
                    main2.className = temp.includes('Show') ? '' : 'flipped';
                }
            },
            // Credits close button
            {
                elm: creditsX,
                run: () => {
                    getEvent(credits).run();
                }
            },
            
            // Title input (1)
            {
                elm: titleinput1,
                run: () => {
                    tag.title.first = titleinput1.selectedIndex;
                }
            },
            // Title input (2)
            {
                elm: titleinput2,
                run: () => {
                    tag.title.last = titleinput2.selectedIndex;
                }
            },
            // Custom title input
            {
                elm: customtitle,
                run: () => {
                    tag.title.string = customtitle.value;
                }
            },
            // Name input
            {
                elm: nameinput,
                run: () => {
                    tag.name = nameinput.value;
                }
            },
            // Tag input
            {
                elm: taginput,
                run: () => {
                    tag.id = taginput.value;
                }
            },
            // Custom checkbox
            {
                elm: customcheck,
                run: () => {
                    tag.isCustom = customcheck.checked;
                    
                    tabContainer.classList.remove(`${tag.isCustom ? 'hide' : 'show'}custom`);
                    tabContainer.classList.add(`${tag.isCustom ? 'show' : 'hide'}custom`);

                }
            },
            // Custom colour input
            {
                elm: customcolour,
                run: () => {
                    tag.colour = customcolour.value;
                }
            },
            // Custom banner upload button
            {
                elm: custombanner,
                run: () => {
                    uploadFile('banners');
                }
            },
            // Custom badge upload button
            {
                elm: custombadges,
                run: () => {
                    uploadFile('badges');
                }
            },
            // Banner section dropdown
            {
                elm: bannersection,
                run: () => {
                    const selection = bannerContainer.querySelector('#' + bannersection.value)
                    selection.classList.remove('collapsed');
                    selection.scrollIntoView();
                }
            },
            // Badge section dropdown
            {
                elm: badgesection,
                run: () => {
                    const selection = badgeContainer.querySelector('#' + badgesection.value);
                    selection.classList.remove('collapsed');
                    selection.scrollIntoView();
                }
            },
            // Banner colour picker (1)
            {
                elm: bannercolourpickers[0],
                run: () => {
                    tag.bgColours[0] = bannercolourpickers[0].value;
                }
            },
            // Banner colour picker (2)
            {
                elm: bannercolourpickers[1],
                run: () => {
                    tag.bgColours[1] = bannercolourpickers[1].value;
                }
            },
            // Banner colour picker (3)
            {
                elm: bannercolourpickers[2],
                run: () => {
                    tag.bgColours[2] = bannercolourpickers[2].value;
                }
            },
            // Banner colour picker (4)
            {
                elm: bannercolourpickers[3],
                run: () => {
                    tag.bgColours[3] = bannercolourpickers[3].value;
                }
            },
        ];

        const getEvent = (elm) => {
            return events.find(e => e.elm === elm);
        }

        const clickEvents = [
            randomtitles,
            randomtitle1,
            randomtitle2,
            randombanner,
            randombadge,
            randomall,
            credits,
            creditsX,
        ];

        const changeEvents = [
            titleinput1,
            titleinput2,
            customcheck,
            customcolour,
            custombanner,
            custombadges,
            bannersection,
            badgesection,
            bannercolourpickers[0],
            bannercolourpickers[1],
            bannercolourpickers[2],
            bannercolourpickers[3],
        ];

        const inputEvents = [
            nameinput,
            taginput,
            customtitle,
            customcolour,
            bannercolourpickers[0],
            bannercolourpickers[1],
            bannercolourpickers[2],
            bannercolourpickers[3],
        ];

        document.querySelectorAll('.scale').forEach(e => {
            e.addEventListener('click', () => {
                let container = e.parentNode.parentNode;
                let scale = Number(container.dataset.scale);
                scale += Number(e.dataset.do);
                if (scale < Number(container.dataset.min)) scale = container.dataset.min;
                if (scale > Number(container.dataset.max)) scale = container.dataset.max;
                container.dataset.scale = scale;
                container.style = `--items: ${scale}`;
            });
        });

        clickEvents.forEach(elm => {
            elm.addEventListener('click', () => {
                getEvent(elm).run();
                renderSplashtag();
            });
        });

        changeEvents.forEach(elm => {
            elm.addEventListener('change', () => {
                getEvent(elm).run();
                renderSplashtag();
            });
        });
    
        inputEvents.forEach(elm => {
            elm.addEventListener('input', () => {
                getEvent(elm).run();

                // this was lagging wayyyy too much without this.
                if (!cooldown) {
                    renderSplashtag();
                    cooldown = 1;
                }
            });
        });

        // Once all of the images are loaded...
        waitUntil(() => {
            if (!loadQueue.length) {
                renderSplashtag();
                const customBannerLength = customBanners.filter(b => b.file).length;
                const customBadgesLength = customBadges.filter(b => b.file).length;
                const bannerLength = banners.filter(b => b.file).length - customBannerLength;
                const badgesLength = badges.filter(b => b.file).length - customBadgesLength;

                console.log(`Loaded:\n${bannerLength + customBannerLength} banners (vanilla: ${bannerLength}, custom: ${customBannerLength})\n${badgesLength + customBadgesLength} badges  (vanilla: ${badgesLength}, custom: ${customBadgesLength})\n${lang[language].titles.first.length + lang[language].titles.last.length} titles.`);
                
                return true;
            }
        });
            
    }

    fetch('./assets.json').then(res => {
        return res.json();
    }).then(data => {
        const toBadgeObject = (arr) => {
            return arr.map(s => {
                const r = {};
                if (s.startsWith('NAME')) {
                    const results = /^NAME\:(.*?)#(.*?)$/.exec(s);
                    r.name = results[1];
                    r.id = results[2];
                } else {
                    if (s.includes('/')) r.custom = true;
                    r.file = './assets/' + (r.custom ? 'custom/':'') + 'badges/' + s;
                }
                return r;
            });
        }

        Object.assign(banners, data.banners.map(o => {
            o.file = './assets/banners/' + o.file;
            return o;
        }));
        Object.assign(customBanners, data.customBanners.map(o => {
            o.file = './assets/custom/banners/' + o.file;
            o.custom = true;
            return o;
        }));
        Object.assign(badges, toBadgeObject(data.badges));
        Object.assign(customBadges, toBadgeObject(data.customBadges));

        fetch('./lang.json').then(res => {
            return res.json();
        }).then(data => {
            Object.assign(lang, data);
            loadedLanguage();
        }).catch(err => {
            alert('Something went wrong when loading...\nMaybe try refreshing?\n\nIf this problem keeps occurring, contact @spaghettitron on Twitter!');
            console.log(err);
        });
    });
}
