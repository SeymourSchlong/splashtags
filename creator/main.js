const load = () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    
    const settings = {
        banner: null,
        colour: '#222222',
        tile: false,
        default: false,
        filter: 0,
        stretch: false,
        scale: 1,
        x: 0,
        y: 0
    };
    
    const filterImages = [
        {
            file: 'blankname',
            operation: 'source-over',
            img: null
        },
        {
            file: 'filter_dot',
            operation: 'soft-light',
            img: null
        },
        {
            file: 'filter_dark',
            operation: 'source-over',
            img: null
        },
        {
            file: 'dotblur',
            operation: 'soft-light',
            img: null
        },
        {
            file: 'vblur',
            operation: 'soft-light',
            img: null
        }
    ];
    
    const filters = [
        {
            name: 'No filter',
            filters: []
        },
        {
            name: 'Dots (↘)',
            filters: [1]
        },
        {
            name: 'Dark (↘)',
            filters: [2]
        },
        {
            name: 'Dots + Dark (↘)',
            filters: [2, 1]
        },
        {
            name: 'Dots (full)',
            filters: [3]
        },
        {
            name: 'Vertical dots (full)',
            filters: [4]
        },
    ]


    filterImages.forEach(f => {
        if (f.file) {
            f.img = new Image();
            f.img.src = '../assets/filters/' + f.file + '.png';
        }
    });

    // elements
    const uploadedBanner = document.querySelector('#upload');
    const inputTile = document.querySelector('#tile');
    const inputColour = document.querySelector('#bgc');
    const inputDefault = document.querySelector('#show-default');
    const inputStretch = document.querySelector('#stretch');
    const inputScaleNum = document.querySelector('#input-scale');
    const inputScaleSlider = document.querySelector('#slide-scale');
    const inputXNum = document.querySelector('#input-x');
    const inputXSlider = document.querySelector('#slide-x');
    const inputYNum = document.querySelector('#input-y');
    const inputYSlider = document.querySelector('#slide-y');

    const filterSelect = document.querySelector('#filter');

    const downloadlink = document.querySelector('#downloadlink');
    const downloadbutton = document.querySelector('#downloadbutton');

    filters.forEach(f => {
        const option = document.createElement('option');
        option.textContent = f.name;
        filterSelect.appendChild(option);
    })

    let drawTag = false;

    const renderSplashtag = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (drawTag || settings.banner) {
            ctx.fillStyle = settings.colour;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            if (settings.banner) {
                if (settings.stretch) {
                    ctx.drawImage(settings.banner, 0, 0, 700, 200);
                } else {
                    let w = settings.banner.width * settings.scale;
                    let h = settings.banner.height * settings.scale;

                    if (settings.tile) {
                        let columns = Math.ceil(700 / w);
                        let rows = Math.ceil(200 / h);

                        for (let i = -rows; i < rows+1; i++) {
                            for (let j = -columns; j < columns+1; j++) {
                                let x = Number(settings.x) + j * w;
                                let y = Number(settings.y) + i * h;

                                if (x >= 700 || x+w <= 0) continue;
                                if (y >= 200 || y+h <= 0) continue;

                                ctx.drawImage(settings.banner, x, y, w, h);
                            }
                        }
                    } else {
                        ctx.drawImage(settings.banner, settings.x, settings.y, w, h);
                    }
                }
            }

            if (settings.filter) {
                filters[settings.filter].filters.forEach(f => {
                    ctx.globalCompositeOperation = filterImages[f].operation;
    
                    ctx.drawImage(filterImages[f].img, 0, 0);
    
                    ctx.globalCompositeOperation = 'source-over';
                });
            }

            if (settings.default) {
                ctx.drawImage(filterImages[0].img, 0, 0);
            }
        } else {
            ctx.font = '32px Splat-title';
            ctx.fillStyle = 'white';
            let text = 'Upload an image to get started!';
            ctx.fillText(text, canvas.width/2 - ctx.measureText(text).width/2, canvas.height/2);
        }

        // Disables download button if testing locally
        if (!location.href.startsWith('file')) {
            downloadlink.href = canvas.toDataURL();
            downloadbutton.removeAttribute('disabled');
        }
    }

    renderSplashtag();


    /* Events */

    const clickEvents = [];

    clickEvents.forEach(event => {
        event.elm.addEventListener('click', () => {
            event.run();
            renderSplashtag();
        });
    });

    const changeEvents = [
        {
            elm: inputTile,
            run: () => {
                settings.tile = inputTile.checked;
            }
        },
        {
            elm: inputColour,
            run: () => {
                settings.colour = inputColour.value;
                drawTag = true;
            }
        },
        {
            elm: inputDefault,
            run: () => {
                settings.default = inputDefault.checked;
            }
        },
        {
            elm: inputStretch,
            run: () => {
                settings.stretch = inputStretch.checked;
            }
        },
        {
            elm: inputScaleNum,
            run: () => {
                settings.scale = inputScaleNum.value;
                inputScaleSlider.value = settings.scale;
            }
        },
        {
            elm: inputScaleSlider,
            run: () => {
                settings.scale = inputScaleSlider.value;
                inputScaleNum.value = settings.scale;
            }
        },
        {
            elm: inputXNum,
            run: () => {
                settings.x = inputXNum.value;
                inputXSlider.value = settings.x;
            }
        },
        {
            elm: inputXSlider,
            run: () => {
                settings.x = inputXSlider.value;
                inputXNum.value = settings.x;
            }
        },
        {
            elm: inputYNum,
            run: () => {
                settings.y = inputYNum.value;
                inputYSlider.value = settings.y;
            }
        },
        {
            elm: inputYSlider,
            run: () => {
                settings.y = inputYSlider.value;
                inputYNum.value = settings.y;
            }
        },
        {
            elm: uploadedBanner,
            run: () => {
                drawTag = true;
                const reader = new FileReader();
                reader.onload = (e) => {
                    const image = document.createElement("img");
                    image.src = e.target.result;
                    settings.banner = image;
                    uploadedBanner.value = '';
                    setTimeout(() => {
                        inputXNum.value = 0;
                        inputYNum.value = 0;
                        settings.x = 0;
                        settings.y = 0;

                        const minScale = Math.ceil(Math.max(700 / image.width, 200 / image.height) * 100) / 100;
                        inputScaleNum.max = Math.max(0.1, minScale);
                        inputScaleSlider.max = Math.max(0.1, minScale);

                        const maxScale = Math.ceil(Math.max(700 / image.width, 200 / image.height) * 100) / 100;

                        inputScaleNum.max = Math.max(2, maxScale);
                        inputScaleSlider.max = Math.max(2, maxScale);

                        if (image.width < 700 || image.height < 200) {
                            inputScaleSlider.value = 1;
                            inputScaleNum.value = 1;
                            settings.scale = 1;
                        } else {
                            inputScaleSlider.value = minScale;
                            inputScaleNum.value = minScale;
                            settings.scale = minScale;
                        }

                        inputYNum.min = -image.height;
                        inputYNum.max = 200;
                        inputYSlider.min = -image.height;
                        inputYSlider.max = 200;
                        
                        inputXNum.min = -image.height;
                        inputXNum.max = 700;
                        inputXSlider.min = -image.height;
                        inputXSlider.max = 700;

                        renderSplashtag();
                    }, 1)
                }
                reader.readAsDataURL(uploadedBanner.files[0]);
            }
        },
    ];

    changeEvents.forEach(event => {
        if (!event.elm) return;
        event.elm.addEventListener('change', () => {
            event.run();
            renderSplashtag();
        });
    });

    const keyEvents = [
        {
            elm: inputScaleNum,
            run: changeEvents[4].run
        },
        {
            elm: inputXNum,
            run: changeEvents[6].run
        },
        {
            elm: inputYNum,
            run: changeEvents[8].run
        }
    ]

    keyEvents.forEach(event => {
        if (!event.elm) return;
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
            elm: inputColour,
            run: changeEvents[1].run
        },
        {
            elm: inputScaleSlider,
            run: changeEvents[5].run
        },
        {
            elm: inputXSlider,
            run: changeEvents[7].run
        },
        {
            elm: inputYSlider,
            run: changeEvents[9].run
        },
        {
            elm: filterSelect,
            run: () => {
                settings.filter = filterSelect.selectedIndex;
            }
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
}