      var controller = new ScrollMagic.Controller();

                            var scene = new ScrollMagic.Scene({
                                duration: 50
                            })
                                .setTween(".box", {

                                    // backgroundColor: 'black',
                                    opacity: '0.0',
                                    width: '800px',
                                    height: '800px',

                                })
                                .addTo(controller);



                            let overlayShown = false;
                            let scrollPosition = 0;

                            document.querySelector('.toggle1').addEventListener('click', function () {
                                if (overlayShown) {
                                    showOverlay();
                                } else {
                                    removeOverlay();
                                }
                                overlayShown = !overlayShown;
                            });

                            function showOverlay() {
                                scrollPosition = window.pageYOffset;
                                const mainEl = document.querySelector('.main-content');
                                mainEl.style.top = -scrollPosition + 'px';
                                document.body.classList.add('show-overlay');
                            }

                            function removeOverlay() {
                                document.body.classList.remove('show-overlay');
                                window.scrollTo(0, scrollPosition);
                                const mainEl = document.querySelector('.main-content');
                                mainEl.style.top = 0;
                            }