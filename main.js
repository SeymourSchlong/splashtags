const load = () => {
    const loadQueue = [];

    const banners = [];
    const customBanners = [];
    const badges = [];
    const customBadges = [];

    const lang = {}

    const loadedLanguage = () => {
        const isSpaceLang = () => {
            return ['USen','EUnl','USfr','EUfr','EUde','EUit','EUru','USes','EUes', 'KRko'].indexOf(language) !== -1;
        }

        const langFonts = {
            JPja: ["Kurokane", "Rowdy"],
            CNzh: ["HanyiZongyi", "HuakangZongyi"],
            KRko: ["KERINm", "KCUBEr"],
            TWzh: ["DFPT_AZ5", "DFPT_ZY9"]
        }
        
        const images = {
            banners: [],
            badges: [],
            watermarks: [],
        }

        let rawParams;
        if (location.href.indexOf("#") != -1) {
            rawParams = location.href.slice(0, location.href.indexOf("#"));
        } else {
            rawParams = location.href;
        }
        if (rawParams.indexOf("?") != -1) {
            rawParams = rawParams.slice(rawParams.indexOf("?") + 1).split("&");
        } else {
            rawParams = [];
        }
        const params = {};
        for (let i = 0; i < rawParams.length; i++) {
            try {
                const p = rawParams[i].split("=");
                params[p[0]] = decodeURIComponent(p[1]);
            } catch (err) {}
        }

        params.lang = params.lang || 'USen';
        if (Object.keys(lang).indexOf(params.lang) === -1) {
            params.lang = 'USen';
        }
        const language = params.lang;
        document.body.setAttribute('lang', language);

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
                last: 0
            },
            banner: 0,
            id: '#0001',
            badges: [ -1, -1, -1 ],
            custom: {
                isCustom: false,
                title: lang[language].default.join(isSpaceLang(language) ? ((!lang[language].default[0].endsWith('-')) ? ' ' : '') : ''),
                colour: '#ffffff'
            }
        }
        
        const waitUntil = (fn, length) => {
            const interval = setInterval(() => {
                if (fn()) clearInterval(interval);
            }, length ? length*1000 : 500);
        }


        const canvas = document.querySelector('#splashtag');
        const ctx = canvas.getContext('2d');
        const downloadlink = document.querySelector('#downloadlink');
        const downloadbutton = document.querySelector('#downloadbutton');

        const textScale = 2;
        const textCanvas = document.createElement('canvas');
        textCanvas.width = 700*textScale;
        textCanvas.height = 200*textScale;
        const textCtx = textCanvas.getContext('2d');
        textCtx.scale(textScale, textScale);

        const getFont = (textType) => {
            const fonts = [];
            if (textType === 0) {
                fonts.push('Splat-text');
                if (langFonts[language]) {
                    fonts.push(langFonts[language][0]);
                }
            } else {
                fonts.push('Splat-title');
                if (langFonts[language]) {
                    fonts.push(langFonts[language][1]);
                }
            }

            return fonts.join(', ');
        }

        let forceDisableWatermark = false;
        
        const renderSplashtag = () => {
            textCtx.clearRect(0, 0, 700, 200);
            ctx.clearRect(0, 0, 700, 200);

            ctx.drawImage(images.banners[tag.banner], 0, 0, 700, 200);
            
            // Draw each badge on the banner
            for (let i = 0; i < 3; i++) {
                if (tag.badges[i] !== -1) {
                    const x = 480 + 74*i;
                    if (badges[tag.badges[i]].includes('custom') || badges[tag.badges[i]].includes('data')) {
                        const cw = images.badges[tag.badges[i]].naturalWidth;
                        const ch = images.badges[tag.badges[i]].naturalHeight;
                        const landscape = cw > ch;
                        const ratio = !landscape ? (cw / ch) : (ch / cw);
                        const width = landscape ? 70 : 70*ratio;
                        const height = !landscape ? 70 : 70*ratio;
                        // calculate the size ratio
                        ctx.drawImage(images.badges[tag.badges[i]], x + (70 / 2 - width / 2), 128 + (70 / 2 - height / 2), width, height);
                    } else {
                        ctx.drawImage(images.badges[tag.badges[i]], x, 128, 70, 70);
                    }
                }
            }

            // Set canvas colour
            textCtx.fillStyle = (tag.custom.isCustom ? tag.custom.colour : '#' + banners[tag.banner].colour);

            // Write titles
            textCtx.textAlign = 'left';
            
            const chosentitles = [];
            if (tag.custom.isCustom) {
                chosentitles.push(tag.custom.title);
            } else {
                if (tag.title.first) {
                    chosentitles.push(lang[language].titles.first[tag.title.first]);
                }
                if (tag.title.last) {
                    chosentitles.push(lang[language].titles.last[tag.title.last]);
                }
            }
            if (chosentitles.length) {
                const size = 36;
                textCtx.font = size + 'px ' + getFont(0);
                const spaceOrBlank = isSpaceLang(language) ? ((!chosentitles[0].endsWith('-')) ? ' ' : '') : '';
                let reduction = 0;
                while (textCtx.measureText(chosentitles.join(spaceOrBlank)).width > 700 - 32) {
                    reduction += 0.2;
                    textCtx.font = (size - reduction) + 'px ' + getFont(0);
                }

                // in game italic value is 0.12
                textCtx.save();
                textCtx.transform(1, 0, -7.5/100, 1, 0, 0);
                textCtx.fillText(chosentitles.join(spaceOrBlank), 16, 42 - Math.floor(reduction/2));
                textCtx.restore();
            }

            // Write tag text (if not negative)
            if (!tag.id !== "") {
                textCtx.font = '24px ' + getFont(0);
                textCtx.fillText('' + tag.id, 24, 186);
            }

            // Write player name
            if (tag.name.length) {
                const size = 66;
                textCtx.font = `${size}px ${getFont(1)}`;
                let reduction = 0;
                while (textCtx.measureText(tag.name).width > 700 - (40 - Math.floor(reduction / 2))) {
                    ++reduction;
                    textCtx.font = (size - reduction) + 'px ' + getFont(1);
                }

                textCtx.textAlign = 'center';
                textCtx.fillText(tag.name, 700/2, 120 - Math.floor(reduction / 3));
            }

            let customBadge = false;
            let customBanner = false;
            tag.badges.forEach(b => {
                if (b !== -1) customBadge = customBadge || badges[b].includes('data') || badges[b].includes('custom');
            });

            ['custom', 'data'].forEach(word => {
                customBanner = customBanner || banners[tag.banner].file.includes(word);
            })

            // draw small watermark if using custom assets
            if (!forceDisableWatermark && (customBanner || tag.custom.isCustom || customBadge)) {
                textCtx.globalAlpha = 0.2;

                const wm = {
                    offset: {
                        x: 10,
                        y: 5
                    },
                    textoffset: 10,
                    width: 40,
                    height: 40,
                }

                textCtx.font = '14px Splat-text';
                textCtx.textAlign = 'center';
                textCtx.fillStyle = '#ffffff';
                const wmX = 700 - wm.width - wm.offset.x;
                const textPos = {
                    x: 700 - wm.offset.x - wm.width/2,
                    y: wm.offset.y + wm.height + wm.textoffset
                }

                const artists = [
                    {
                        dir: '/deadline/',
                        name: 'DeadLine',
                        offset: 0
                    },
                    {
                        dir: '/electrodev/',
                        name: 'ElectroDev',
                        offset: 4
                    }
                ];

                let customArtist = -1;
                artists.forEach(a => {
                    if (banners[tag.banner].file.includes(a.dir)) {
                        customArtist = artists.indexOf(a);
                    }
                });

                if (customArtist+1) {
                    const a = artists[customArtist];
                    textCtx.drawImage(images.watermarks[customArtist+1], wmX - a.offset, wm.offset.y, wm.width, wm.height);
                    textCtx.fillText(a.name, textPos.x - a.offset, textPos.y);
                    if (tag.custom.isCustom || customBadge) {
                        textCtx.fillText('custom', textPos.x - a.offset, textPos.y + 14);
                    }
                } else {
                    textCtx.drawImage(images.watermarks[0], wmX, wm.offset.y, wm.width, wm.height);
                    textCtx.fillText('custom', textPos.x, textPos.y);
                }

                textCtx.globalAlpha = 1;
            }

            ctx.drawImage(textCanvas, 0, 0, 700, 200);

            // Disables download button if testing locally
            if (!location.href.startsWith('file')) {
                downloadlink.href = canvas.toDataURL();
                downloadbutton.removeAttribute('disabled');
            }
        }

        window.toggleWatermark = () => {
            forceDisableWatermark = !forceDisableWatermark;
            renderSplashtag();
        }

        /* Credit to @DeadLineSMB_Art on Twitter for the special band banners */
        /* Credit to @ElectroDev on Twitter for the special weapon banners */
        customBanners.forEach(item => {
            banners.push(item);
        });
        customBadges.forEach(item => {
            badges.push(item);
        });

        // Loading queue for each item (so they do not need to load when selecting banners or badges)
        {
            loadQueue.push(1);
            let img = new Image();
            img.src = './assets/images/watermark.png';
            img.onload = loadQueue.pop();
            images.watermarks.push(img);
        }
        {
            loadQueue.push(1);
            let img = new Image();
            img.src = './assets/images/deadline.png';
            img.onload = loadQueue.pop();
            images.watermarks.push(img);
        }
        {
            loadQueue.push(1);
            let img = new Image();
            img.src = './assets/images/electrodev.png';
            img.onload = loadQueue.pop();
            images.watermarks.push(img);
        }

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

        // section select menus
        const bannersection = document.querySelector('#bannersection');
        const badgesection = document.querySelector('#badgesection');

        customtitle.value = lang[language].default.join(isSpaceLang(language) ? ((!lang[language].default[0].endsWith('-')) ? ' ' : '') : '');
        customtitle.placeholder = customtitle.value;

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

        const notitle = lang[language].titles.first.shift();
        lang[language].titles.last.shift();
        lang[language].titles.first.sort();
        lang[language].titles.last.sort();

        lang[language].titles.first.unshift(notitle);
        lang[language].titles.last.unshift(notitle);/**/

        // Set defaults for inputs
        const defaultBannerIndex = banners.findIndex(a => !a.name && a.file.includes('Tutorial'));
        tag.banner = defaultBannerIndex;
        tag.title.first = lang[language].titles.first.indexOf(lang[language].default[0]);
        tag.title.last = lang[language].titles.last.indexOf(lang[language].default[1]);

        const bannerContainer = document.querySelector('#bannercontainer');
        
        bannersection.addEventListener('change', () => {
            bannerContainer.querySelector('#' + bannersection.value).scrollIntoView();
        });

        const bannerClickEvent = (item, img) => {
            const newBanner = banners.findIndex(b => b.file === item.file);
            // clear and move selected
            document.querySelectorAll('#bannercontainer img.selected').forEach(s => {
                s.classList.remove('selected');
            });
            if (tag.banner !== newBanner) {
                tag.banner = newBanner;
                img.classList.add('selected');
            } else {
                tag.banner = defaultBannerIndex;
                bannerContainer.childNodes[defaultBannerIndex].classList.add('selected');
            }
            customcolour.value = '#' + banners[tag.banner].colour;
            tag.custom.colour = customcolour.value;
            tag.custom.banner = null;
            renderSplashtag();
        }

        // Add options for select menus
        banners.forEach(item => {
            if (item.name) {
                for (let i = 0; i < bannerContainer.childNodes.length % 4; i++) {
                    bannerContainer.appendChild(document.createElement('div'));
                }
                const isCustom = item.name.endsWith('Custom');
                const sectionTitle = document.createElement('div');
                sectionTitle.textContent = lang[language].sections.banners[item.name] + (isCustom ? ' (' + lang[language].ui.textCustom + ')' : '');
                sectionTitle.id = item.id;
                sectionTitle.className = 'imagelistsection';
                bannerContainer.appendChild(sectionTitle);
                images.banners.push(null);

                // add to banner select dropdown
                const option = document.createElement('option');
                option.textContent = lang[language].sections.banners[item.name] + (isCustom ? '*' : '');
                option.value = item.id;
                bannersection.appendChild(option);
                return;
            }
            loadQueue.push(1);
            const img = document.createElement('img');
            img.src = item.file;
            images.banners.push(img);
            img.onload = loadQueue.pop();

            img.setAttribute('draggable', 'false');
            img.addEventListener('click', () => {
                bannerClickEvent(item, img);
            });

            if (item.file.includes('Tutorial')) {
                img.classList.add('selected');
            }

            bannerContainer.appendChild(img);
        });

        for (let i = 0; i < 4; i++) {
            let filler = document.createElement('div');
            filler.className = 'bannerFiller';
            bannerContainer.appendChild(filler);
        }

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
                    badgeContainer.querySelectorAll('img, .imagelistsection')[tag.badges[i]].className = i === slot ? 'selected' : 'other';
                    // badgeContainer.childNodes[tag.badges[i]].className = i === slot ? 'selected' : 'other';
                }
            });
        });

        const badgeClickEvent = (item, img) => {
            let slot = [...badgeRadios].findIndex(r => r.checked);
            let currentBadge = tag.badges[slot];
            let newBadge = badges.findIndex(b => b === item);
            
            // if badge is in other slot, remove the old one
            if (tag.badges.indexOf(newBadge) !== -1) {
                tag.badges[tag.badges.indexOf(newBadge)] = -1;
                badgeContainer.querySelectorAll('img, .imagelistsection')[newBadge].className = '';
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
                img.className = 'selected';
            }

            renderSplashtag();
        }

        badges.forEach(item => {
            if (item.startsWith('NAME')) {
                for (let i = 0; i < badgeContainer.childNodes.length % 10; i++) {
                    badgeContainer.appendChild(document.createElement('div'));
                }
                const sectionTitle = document.createElement('div');
                const name = item.split('#')[0].replace('NAME:', '');
                const id = item.split('#')[1];
                const isCustom = name.endsWith('Custom')
                sectionTitle.textContent = lang[language].sections.badges[name] + (isCustom ? ' (' + lang[language].ui.textCustom + ')' : '');
                sectionTitle.id = id;
                sectionTitle.className = 'imagelistsection';
                badgeContainer.appendChild(sectionTitle);
                images.badges.push(null);

                // add to badge select dropdown
                const option = document.createElement('option');
                option.textContent = lang[language].sections.badges[name] + (isCustom ? '*' : '');
                option.value = id;
                badgesection.appendChild(option);
                return;
            }
            loadQueue.push(1);
            const img = document.createElement('img');
            img.src = item;
            img.onload = loadQueue.pop();
            images.badges.push(img);

            img.setAttribute('draggable', 'false');
            img.addEventListener('click', () => {
                badgeClickEvent(item, img);
            });

            badgeContainer.appendChild(img);
        });
        
        for (let i = 0; i < 10; i++) {
            let filler = document.createElement('div');
            filler.className = 'badgeFiller';
            badgeContainer.appendChild(filler);
        }

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

        const textTableWidth = tabContents[0].querySelector('table').getBoundingClientRect().width;
        tabContents[0].querySelector('table').style.width = `${textTableWidth}px`;

        
        // Once all of the images are loaded...
        waitUntil(() => {
            if (!loadQueue.length) {
                renderSplashtag();

                const randIndex = (array) => {
                    return Math.floor(Math.random() * array.length);
                }

                const clickEvents = [
                    {
                        elm: randomtitles,
                        run: () => {
                            clickEvents[1].run();
                            clickEvents[2].run();
                        }
                    },
                    {
                        elm: randomtitle1,
                        run: () => {
                            const title1 = randIndex(lang[language].titles.first);
                            titleinput1.selectedIndex = title1;
                            tag.title.first = title1;

                            const chosentitles = [];
                            if (tag.title.first) {
                                chosentitles.push(lang[language].titles.first[tag.title.first]);
                            }
                            if (tag.title.last) {
                                chosentitles.push(lang[language].titles.last[tag.title.last]);
                            }
                            const spaceOrBlank = isSpaceLang(language) ? ((!chosentitles[0].endsWith('-')) ? ' ' : '') : '';

                            tag.custom.title = chosentitles.join(spaceOrBlank);
                            customtitle.value = tag.custom.title;
                            setTimeout(() => {
                                renderSplashtag();
                            },1)
                        }
                    },
                    {
                        elm: randomtitle2,
                        run: () => {
                            const title2 = randIndex(lang[language].titles.last);
                            titleinput2.selectedIndex = title2;
                            tag.title.last = title2;

                            const chosentitles = [];
                            if (tag.title.first) {
                                chosentitles.push(lang[language].titles.first[tag.title.first]);
                            }
                            if (tag.title.last) {
                                chosentitles.push(lang[language].titles.last[tag.title.last]);
                            }
                            const spaceOrBlank = isSpaceLang(language) ? ((!chosentitles[0].endsWith('-')) ? ' ' : '') : '';

                            tag.custom.title = chosentitles.join(spaceOrBlank);
                            customtitle.value = tag.custom.title;
                            renderSplashtag();
                        }
                    },
                    {
                        elm: randombanner,
                        run: () => {
                            let banner = 0;
                            if (tag.custom.isCustom) {
                                banner = randIndex(banners.filter(b => b.file));
                            } else {
                                banner = randIndex(banners.filter(b => b.file && b.file.startsWith('./assets/banners/')));
                            }
                            bannerContainer.querySelectorAll('img')[banner].click();
                        }
                    },
                    {
                        elm: randombadge,
                        run: () => {
                            const badgeImgs = badgeContainer.querySelectorAll('img');

                            let badgeList = [];

                            if (tag.custom.isCustom) {
                                badgeList = badges.filter(b => !b.startsWith('NAME'));
                            } else {
                                badgeList = badges.filter(b => !b.startsWith('NAME') && b.startsWith('./assets/badges/'));
                            }

                            for (let i = 0; i < 3; i++) {
                                badgeRadios[i].click();

                                const selectedBadge = randIndex([0, ...badgeList]);
                                if (selectedBadge) {
                                    badgeImgs[selectedBadge - 1].click();
                                } else {
                                    tag.badges[i] = -1;
                                }
                            }
                            badgeRadios[0].click()
                        }
                    },
                    {
                        elm: randomall,
                        run: () => {
                            clickEvents[0].run();
                            clickEvents[3].run();
                            clickEvents[4].run();
                        }
                    }
                ];

                document.querySelectorAll('.scale').forEach(e => {
                    clickEvents.push({
                        elm: e,
                        run: () => {
                            let container = e.parentNode.parentNode;
                            let scale = Number(container.dataset.scale);
                            scale += Number(e.dataset.do);
                            if (scale < Number(container.dataset.min)) scale = container.dataset.min;
                            if (scale > Number(container.dataset.max)) scale = container.dataset.max;
                            container.dataset.scale = scale;
                            container.style = `--items: ${scale}`;
                        }
                    })
                });

                clickEvents.forEach(event => {
                    event.elm.addEventListener('click', () => {
                        event.run();
                        renderSplashtag();
                    });
                });

                const changeEvents = [
                    {
                        elm: titleinput1,
                        run: () => {
                            tag.title.first = titleinput1.selectedIndex;
                        }
                    },
                    {
                        elm: titleinput2,
                        run: () => {
                            tag.title.last = titleinput2.selectedIndex;
                        }
                    },
                    {
                        elm: nameinput,
                        run: () => {
                            tag.name = nameinput.value;
                        }
                    },
                    {
                        elm: taginput,
                        run: () => {
                            /*
                            if (taginput.value.length > 5) {
                                taginput.value = taginput.value.slice(0, 5);
                            }
                            let tagstr = taginput.value;
                            while (tagstr.length < 4) {
                                tagstr = '0' + tagstr;
                            }
                            tag.id = tagstr;*/
                            tag.id = taginput.value;
                        }
                    },
                    {
                        elm: customcheck,
                        run: () => {
                            tag.custom.isCustom = customcheck.checked;
                            
                            tabContainer.classList.remove(`${tag.custom.isCustom ? 'hide' : 'show'}custom`);
                            tabContainer.classList.add(`${tag.custom.isCustom ? 'show' : 'hide'}custom`);

                            nameinput.setAttribute('maxlength', tag.custom.isCustom ? 100 : 10);
                            if (!tag.custom.isCustom) {
                                nameinput.value = nameinput.value.slice(0, 10);
                                tag.name = nameinput.value;
                            }
                        }
                    },
                    {
                        elm: customtitle,
                        run: () => {
                            tag.custom.title = customtitle.value;
                        }
                    },
                    {
                        elm: customcolour,
                        run: () => {
                            tag.custom.colour = customcolour.value;
                        }
                    },
                    {
                        elm: custombanner,
                        run: () => {
                            const reader = new FileReader();
                            reader.onload = (e) => {
                                const image = document.createElement("img");
                                image.src = e.target.result;
                                const index = banners.findIndex(b => b.file === image.src);
                                if (index === -1) {
                                    image.draggable = false;
                                    const item = { file: image.src, colour: 'ffffff' };
                                    banners.push(item);
                                    images.banners.push(image);
                                    bannerContainer.insertBefore(image, bannerContainer.querySelector('.bannerFiller'));
                                    image.addEventListener('click', () => {
                                        bannerClickEvent(item, image);
                                    });
                                    //custombanner.value = '';
                                    setTimeout(() => {
                                        image.click();
                                        image.scrollIntoView();
                                        renderSplashtag();
                                    }, 1);
                                } else {
                                    bannerContainer.childNodes[index].click();
                                }
                            }
                            reader.readAsDataURL(custombanner.files[0]);
                        }
                    },
                    {
                        elm: custombadges,
                        run: () => {
                            const reader = new FileReader();
                            reader.onload = (e) => {
                                const image = document.createElement("img");
                                image.src = e.target.result;
                                const index = badges.findIndex(b => b === image.src);
                                if (index === -1) {
                                    image.draggable = false;
                                    const item = image.src;
                                    badges.push(item);
                                    images.badges.push(image);
                                    badgeContainer.insertBefore(image, badgeContainer.querySelector('.badgeFiller'));
                                    image.addEventListener('click', () => {
                                        badgeClickEvent(item, image);
                                    });
                                    setTimeout(() => {
                                        image.click();
                                        image.scrollIntoView();
                                        renderSplashtag();
                                    }, 1);
                                } else {
                                    badgeContainer.childNodes[index].click();
                                }
                            }
                            reader.readAsDataURL(custombadges.files[0]);
                        }
                    },
                    {
                        elm: bannersection,
                        run: () => {
                            bannerContainer.querySelector('#' + bannersection.value).scrollIntoView();
                        }
                    },
                    {
                        elm: badgesection,
                        run: () => {
                            badgeContainer.querySelector('#' + badgesection.value).scrollIntoView();
                        }
                    }
                ];

                changeEvents.forEach(event => {
                    event.elm.addEventListener('change', () => {
                        event.run();
                        renderSplashtag();
                    });
                });

                const keyEvents = [
                    {
                        elm: nameinput,
                        run: changeEvents[2].run
                    },
                    {
                        elm: taginput,
                        run: changeEvents[3].run
                    },
                    {
                        elm: customtitle,
                        run: changeEvents[5].run
                    }
                ]

                keyEvents.forEach(event => {
                    event.elm.addEventListener('keydown', () => {
                        setTimeout(() => {
                            event.run();
                            renderSplashtag();
                        }, 1);
                        event.run();
                        renderSplashtag();
                    });
                });

                const inputEvents = [
                    {
                        elm: customcolour,
                        run: changeEvents[6].run
                    }
                ]
            
                inputEvents.forEach(event => {
                    event.elm.addEventListener('input', () => {
                        if (!event.elm) return;
                        setTimeout(() => {
                            event.run();
                            renderSplashtag();
                        }, 1);
                        event.run();
                        renderSplashtag();
                    });
                });

                const customBannerLength = customBanners.filter(b => b.file).length;
                const customBadgesLength = customBadges.filter(b => b.startsWith('./')).length;
                const bannerLength = banners.filter(b => b.file).length - customBannerLength;
                const badgesLength = badges.filter(b => b.startsWith('./')).length - customBadgesLength;

                console.log(`Loaded:\n${bannerLength + customBannerLength} banners (vanilla: ${bannerLength}, custom: ${customBannerLength})\n${badgesLength + customBadgesLength} badges  (vanilla: ${badgesLength}, custom: ${customBadgesLength})\n${lang[language].titles.first.length + lang[language].titles.last.length} titles.`);
                
                return true;
            }
        });
            
    }

    fetch('./assets.json').then(res => {
        return res.json();
    }).then(data => {
        Object.assign(banners, data.banners);
        Object.assign(customBanners, data.customBanners);
        Object.assign(badges, data.badges);
        Object.assign(customBadges, data.customBadges);

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
