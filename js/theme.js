  
        let themes = {
            green: {
                '--theme-color': '#9ACD32'
            },
            orange: {
                '--theme-color': '#FA5B0F'
            },
            yellow: {
                '--theme-color': '#FFB400'
            },
            pink: {
               '--theme-color': '#EE6192'
            },
            red: {
               '--theme-color': '#F72B1C'
            }
        };

        $('.color-changer').on('click', 'a', (e) => {
            e.preventDefault();
            let theme = $(e.target).data('theme');
            setSidebarTheme(theme);
        });

        function setSidebarTheme(theme) {
            let body = $('body')[0]; // Get the raw Element, not jQuery
            for (let [prop, value] of Object.entries(themes[theme])) {
                // set value to the CSS variable
                body.style.setProperty(prop, value);
            }
}

// default theme
setSidebarTheme('yellow');